import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import middy from "@middy/core";
import { resolveErrorMessage } from "@trust-stack/utils";
import type { CloudFormationHookEvent } from "../../../../../../../types/cfn-hooks";
import type { AWS_Lambda_Function } from "../../../../../../../types/cfn-resources/aws-lambda-function";
import { SECURITY_PACKAGE_NAME } from "../shared";

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
function lambdaHandler(event: CloudFormationHookEvent) {
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

  if (event.requestData.targetType !== "AWS::Lambda::Function") {
    logger.info("Resource is not a Lambda function, skipping validation");
    return {
      hookStatus: "SUCCESS",
      message: "Resource is not a Lambda function",
      clientRequestToken,
    };
  }

  try {
    // Validate the Lambda function has VpcConfig
    const validationResult = validateLambdaVPCConfig(
      resourceProperties as AWS_Lambda_Function.FunctionResourceType,
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
  } catch (error: unknown) {
    const errorMessage = "Failed to validate Lambda function configuration";

    logger.error(errorMessage, {
      error: resolveErrorMessage(error),
    });

    return {
      hookStatus: "FAILURE",
      failureMode: "FAIL",
      errorCode: "InternalFailure",
      message: `${errorMessage}: ${resolveErrorMessage(error)}`,
      clientRequestToken,
    };
  }
}

/**
 * Validates that a Lambda function has the required VPC configuration
 */
function validateLambdaVPCConfig(
  properties: AWS_Lambda_Function.FunctionResourceType,
): { isValid: boolean; reason?: string } {
  const excludeTag = properties.Tags?.find(
    (tag) => tag.Key === "ts:exclude",
  )?.Value;

  if (
    excludeTag === "ALL" ||
    excludeTag?.split(",").includes(SECURITY_PACKAGE_NAME)
  ) {
    logger.info("Lambda function is excluded from security checks, skipping");
    return { isValid: true };
  }

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

  return { isValid: true };
}
