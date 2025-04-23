import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import middy from "@middy/core";
import type {
  SNSSubscriptionSecurityPackageConfig,
  SNSSupportedProtocols,
} from "@trust-stack/schema";
import { getValidatedPackageConfig } from "@trust-stack/utils";
import type { Context } from "aws-lambda";
import type {
  CloudFormationHookEvent,
  CloudFormationHookResult,
} from "../../../../../../../types/cfn-hooks";
import type { AWS_SNS_Subscription } from "../../../../../../../types/cfn-resources/aws-sns-subscription";
import { validateSnsSubscriptionEndpoint } from "../shared";

const logger = new Logger({
  serviceName: "SNSSubscriptionSecurityCloudFormationLambdaHookHandler",
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for CloudFormation hook.
 *
 * This function processes CloudFormation hook events, validates that all SNS subscriptions
 * have trusted endpoints, and returns a success or failure response.
 *
 * @param event - The CloudFormation hook event
 * @param _context - The Lambda context (unused)
 * @returns A promise resolving to the hook result
 */
async function lambdaHandler(
  event: CloudFormationHookEvent,
  _context: Context,
): Promise<CloudFormationHookResult> {
  logger.resetKeys();
  logger.info("Event", { event });

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

  logger.info("Starting SNS subscription validation");

  if (!isValidTargetEvent(actionInvocationPoint, targetName)) {
    const message =
      actionInvocationPoint !== "CREATE_PRE_PROVISION"
        ? "Not a CREATE_PRE_PROVISION event"
        : "Not a SNS subscription";

    logger.info(message);

    return {
      hookStatus: "SUCCESS",
      message: message,
      clientRequestToken,
    };
  }

  let config: SNSSubscriptionSecurityPackageConfig;
  try {
    logger.info("Retrieving configuration from SSM Parameter Store");
    config = await getValidatedPackageConfig("sns-subscription-security");
    logger.info("Configuration retrieved successfully");
  } catch (error) {
    const errorMessage =
      "Failed to retrieve configuration from SSM Parameter Store";

    logger.error(errorMessage, {
      error: error instanceof Error ? error.message : String(error),
    });

    return {
      hookStatus: "FAILURE",
      errorCode: "InternalFailure",
      message: `${errorMessage}: ${error instanceof Error ? error.message : "Unknown error"}`,
      clientRequestToken,
    };
  }

  const { Protocol, Endpoint } =
    resourceProperties as AWS_SNS_Subscription.SubscriptionResourceType;

  logger.info("Validating SNS subscription");

  const validationResult = validateSnsSubscriptionEndpoint(
    Protocol as SNSSupportedProtocols,
    Endpoint,
    config,
  );

  if (!validationResult.isValid) {
    const errorMessage = "SNS subscription validation failed";

    logger.error(errorMessage, {
      reason: validationResult.reason,
    });

    return {
      hookStatus: "FAILURE",
      errorCode: "NonCompliant",
      message: `${errorMessage}: ${validationResult.reason}`,
      clientRequestToken,
    };
  }

  logger.info("SNS subscription validation passed");

  return {
    hookStatus: "SUCCESS",
    message: "SNS subscription validation passed",
    clientRequestToken,
  };
}

/**
 * Checks if the event is a valid target for SNS subscription validation
 *
 * @param actionInvocationPoint - The CloudFormation action invocation point
 * @param targetName - The target resource name
 * @returns Boolean indicating if this is a valid target event
 */
function isValidTargetEvent(
  actionInvocationPoint: string,
  targetName: string,
): boolean {
  return (
    actionInvocationPoint === "CREATE_PRE_PROVISION" &&
    targetName === "AWS::SNS::Subscription"
  );
}
