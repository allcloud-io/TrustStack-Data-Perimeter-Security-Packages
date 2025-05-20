import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import middy from "@middy/core";
import type { LambdaPermissionSecurityConfig } from "@trust-stack/schema";
import {
  getValidatedPackageConfig,
  resolveErrorMessage,
} from "@trust-stack/utils";
import type {
  CloudFormationHookEvent,
  CloudFormationHookResult,
} from "../../../../../../../types/cfn-hooks";
import type { AWS_Lambda_Permission } from "../../../../../../../types/cfn-resources/aws-lambda-permission";
import { validateLambdaPermissionPrincipal } from "../shared";

/**
 * Initialize logger with service name matching the control
 */
const logger = new Logger({
  serviceName: "LambdaPermissionSecurityProactiveControl",
});

/**
 * Export wrapped handler using Powertools Logger
 */
export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * CloudFormation hook handler for validating Lambda permission configurations
 * before they are deployed to AWS.
 */
async function lambdaHandler(
  event: CloudFormationHookEvent,
): Promise<CloudFormationHookResult> {
  logger.resetKeys();
  logger.appendKeys({ event });
  logger.info("Received CloudFormation hook event");

  const {
    requestData: {
      targetModel: { resourceProperties },
    },
    clientRequestToken,
  } = event;

  const { Principal, PrincipalOrgID, SourceArn, SourceAccount } =
    resourceProperties as AWS_Lambda_Permission.PermissionResourceType;

  logger.appendKeys({ principal: Principal, principalOrgID: PrincipalOrgID });

  let config: LambdaPermissionSecurityConfig;
  try {
    logger.info("Retrieving configuration from SSM Parameter Store");
    config = await getValidatedPackageConfig("lambda-permission-security");
    logger.info("Configuration retrieved successfully", { config });
    logger.appendKeys({ config });
  } catch (error: unknown) {
    const errorMessage =
      "Failed to retrieve configuration from SSM Parameter Store";

    logger.error(errorMessage, {
      error: resolveErrorMessage(error),
    });

    return {
      hookStatus: "FAILURE",
      errorCode: "InternalFailure",
      message: errorMessage,
      clientRequestToken,
    };
  }

  const { trustedAccountIDs, trustedOrgIDs, trustedServicePrincipals } = config;

  // Validate the Principal against the trusted principals
  const validationResult = validateLambdaPermissionPrincipal({
    principal: Principal,
    principalOrgID: PrincipalOrgID,
    sourceARN: SourceArn,
    sourceAccount: SourceAccount,
    trustedAccountIDs,
    trustedOrgIDs,
    trustedServicePrincipals,
  });

  if (!validationResult.isValid) {
    logger.warn("Invalid principal", {
      principal: Principal,
      reason: validationResult.reason,
    });

    return {
      hookStatus: "FAILURE",
      errorCode: "NonCompliant",
      message: validationResult.reason,
      clientRequestToken,
    };
  }

  // All validation checks passed
  logger.info("Lambda permission validation succeeded", {
    principal: Principal,
  });
  return {
    hookStatus: "SUCCESS",
    message: "Lambda permission validation succeeded",
    clientRequestToken,
  };
}
