import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import { EC2 } from "@aws-sdk/client-ec2";
import middy from "@middy/core";
import type { LambdaVPCSecurityConfig } from "@trust-stack/schema";
import { getValidatedPackageConfig } from "@trust-stack/utils";
import type { CloudFormationHookEvent } from "../../../../../../../types/cfn-hooks";
import type { AWS_Lambda_Function } from "../../../../../../../types/cfn-resources/aws-lambda-function";
import { SECURITY_PACKAGE_NAME, SECURITY_PACKAGE_SLUG } from "../shared";

const ec2 = new EC2();

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}ProactiveControl`,
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * CloudFormation hook handler for validating Lambda function VPC configurations
 * before they are deployed to AWS.
 *
 * This hook ensures that AWS::Lambda::Function resources are created with a VpcConfig
 * property to enforce Lambda functions to run within a VPC.
 */
async function lambdaHandler(event: CloudFormationHookEvent) {
  logger.appendKeys({ event });
  logger.info("Received CloudFormation hook event");

  const {
    actionInvocationPoint,
    requestData: {
      targetLogicalId,
      targetName,
      targetModel: { resourceProperties },
    },
    clientRequestToken,
  } = event;

  logger.appendKeys({
    actionInvocationPoint,
    targetLogicalId,
    targetName,
    resourceProperties,
  });

  try {
    const config = await getValidatedPackageConfig(SECURITY_PACKAGE_SLUG);
    logger.info("Configuration retrieved successfully", { config });

    // Only validate Lambda function resources
    if (event.requestData.targetType !== "AWS::Lambda::Function") {
      logger.info("Resource is not a Lambda function, skipping validation");
      return {
        hookStatus: "SUCCESS",
        message: "Resource is not a Lambda function",
        clientRequestToken,
      };
    }

    // Validate the Lambda function has VpcConfig
    const validationResult = await validateLambdaVPCConfig(
      resourceProperties as AWS_Lambda_Function.FunctionResourceType,
      config,
    );

    if (!validationResult.isValid) {
      logger.warn("Lambda function validation failed", {
        reason: validationResult.reason,
      });

      return {
        hookStatus: "FAILURE",
        failureMode: "FAIL",
        errorCode: "SecurityViolation",
        message: validationResult.reason,
        clientRequestToken,
      };
    }

    logger.info("Lambda function validation succeeded");
    return {
      hookStatus: "SUCCESS",
      message: "Lambda function has valid VPC configuration",
      clientRequestToken,
    };
  } catch (error) {
    const errorMessage = "Failed to validate Lambda function configuration";

    logger.error(errorMessage, {
      error: error instanceof Error ? error.message : String(error),
    });

    return {
      hookStatus: "FAILURE",
      failureMode: "FAIL",
      errorCode: "InternalFailure",
      message: `${errorMessage}: ${error instanceof Error ? error.message : "Unknown error"}`,
      clientRequestToken,
    };
  }
}

/**
 * Validates that a Lambda function has the required VPC configuration
 */
async function validateLambdaVPCConfig(
  properties: AWS_Lambda_Function.FunctionResourceType,
  config: LambdaVPCSecurityConfig,
): Promise<{ isValid: boolean; reason?: string }> {
  // Check if VpcConfig exists
  if (!properties.VpcConfig) {
    return {
      isValid: false,
      reason: "Lambda function must have a VpcConfig property",
    };
  }

  // Check if VpcConfig has SubnetIds
  if (
    !properties.VpcConfig.SubnetIds ||
    !Array.isArray(properties.VpcConfig.SubnetIds) ||
    properties.VpcConfig.SubnetIds.length === 0
  ) {
    return {
      isValid: false,
      reason: "Lambda function VpcConfig must specify at least one subnet",
    };
  }

  // Check if VpcConfig has SecurityGroupIds
  if (
    !properties.VpcConfig.SecurityGroupIds ||
    !Array.isArray(properties.VpcConfig.SecurityGroupIds) ||
    properties.VpcConfig.SecurityGroupIds.length === 0
  ) {
    return {
      isValid: false,
      reason:
        "Lambda function VpcConfig must specify at least one security group",
    };
  }

  const { allowedVPCIDs } = config;

  // If allowedVPCIDs is specified in the configuration, check that the VPC is allowed
  if (
    allowedVPCIDs &&
    Array.isArray(allowedVPCIDs) &&
    allowedVPCIDs.length > 0
  ) {
    const vpcIDs = await getVpcIDsForSubnets(properties.VpcConfig.SubnetIds);

    const nonAllowedVPCIDs = vpcIDs.filter(
      (vpcID) => !allowedVPCIDs.includes(vpcID),
    );

    if (nonAllowedVPCIDs.length > 0) {
      return {
        isValid: false,
        reason:
          "Lambda function is not allowed to be created in VPCs: " +
          `${nonAllowedVPCIDs.join(", ")}. ` +
          `Allowed VPCs: ${allowedVPCIDs.join(", ")}.`,
      };
    }
  }

  return { isValid: true };
}

/**
 * Given an array of subnet IDs, return the unique VPC IDs those subnets belong to.
 */
async function getVpcIDsForSubnets(subnetIDs: string[]): Promise<string[]> {
  if (subnetIDs.length === 0) {
    return [];
  }

  const resp = await ec2.describeSubnets({ SubnetIds: subnetIDs });

  // Extract VpcId (guarding for undefined just in case)
  const vpcIDs =
    resp.Subnets?.map((s) => s.VpcId)
      .filter((v): v is string => !!v)
      // Dedupe
      .reduce<string[]>((acc, vpc) => {
        if (!acc.includes(vpc)) acc.push(vpc);
        return acc;
      }, []) ?? [];

  return vpcIDs;
}
