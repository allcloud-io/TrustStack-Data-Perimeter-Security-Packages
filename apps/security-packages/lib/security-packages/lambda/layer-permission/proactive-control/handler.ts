import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import middy from "@middy/core";
import type { LambdaLayerPermissionSecurityConfig } from "@trust-stack/schema";
import {
  getValidatedPackageConfig,
  resolveErrorMessage,
} from "@trust-stack/utils";
import type {
  CloudFormationHookEvent,
  CloudFormationHookResult,
} from "../../../../../../../types/cfn-hooks";
import type { AWS_Lambda_LayerVersionPermission } from "../../../../../../../types/cfn-resources/aws-lambda-layerversionpermission";
import {
  SECURITY_PACKAGE_NAME,
  validateLayerPermissionPrincipal,
} from "../shared";

/**
 * Initialize logger with service name matching the control
 */
const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}ProactiveControl`,
});

/**
 * Export wrapped handler using Powertools Logger
 */
export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * CloudFormation hook handler for validating Lambda layer permission configurations
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

  const { Principal, OrganizationId } =
    resourceProperties as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType;

  logger.appendKeys({ principal: Principal, organizationId: OrganizationId });

  let config: LambdaLayerPermissionSecurityConfig;
  try {
    logger.info("Retrieving configuration from SSM Parameter Store");
    config = await getValidatedPackageConfig(
      "lambda-layer-permission-security",
    );
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

  const { trustedAccountIDs, trustedOrgIDs } = config;

  // Validate the Principal against the trusted principals
  const validationResult = validateLayerPermissionPrincipal({
    principal: Principal,
    organizationID: OrganizationId,
    trustedAccountIDs,
    trustedOrgIDs,
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
  logger.info("Lambda layer permission validation succeeded", {
    principal: Principal,
  });

  return {
    hookStatus: "SUCCESS",
    message: "Lambda layer permission validation succeeded",
    clientRequestToken,
  };
}
