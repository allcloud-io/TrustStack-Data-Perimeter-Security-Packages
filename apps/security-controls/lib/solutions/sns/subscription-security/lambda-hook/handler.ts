import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import middy from "@middy/core";
import {
  SNSSubscriptionSecuritySolutionConfig,
  type SNSSupportedProtocols,
} from "@trust-stack/schema";
import { getValidatedSolutionConfig } from "@trust-stack/utils";
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
  logger.info(`Event: ${JSON.stringify(event, null, 2)}`);

  const {
    actionInvocationPoint,
    requestData: {
      targetLogicalId,
      targetName,
      targetModel: { resourceProperties },
    },
    clientRequestToken,
  } = event;

  logger.info(`Invocation Point: ${actionInvocationPoint}`);
  logger.info(`Target Logical ID: ${targetLogicalId}`);
  logger.info(`Target Name: ${targetName}`);

  if (!isValidTargetEvent(actionInvocationPoint, targetName)) {
    logger.info(
      `Not a valid target event: ${actionInvocationPoint} ${targetName}`,
    );
    return {
      hookStatus: "SUCCESS",
      message:
        actionInvocationPoint !== "CREATE_PRE_PROVISION"
          ? "Not a CREATE_PRE_PROVISION event"
          : "Not a SNS subscription",
      clientRequestToken,
    };
  }

  let config: SNSSubscriptionSecuritySolutionConfig;
  try {
    logger.info("Retrieving configuration from SSM Parameter Store");
    config = await getValidatedSolutionConfig("sns-subscription-security");
  } catch (error) {
    logger.error("Error retrieving configuration from SSM Parameter Store:", {
      error: error instanceof Error ? error.message : String(error),
    });
    return {
      hookStatus: "FAILURE",
      errorCode: "InternalFailure",
      message:
        "Failed to retrieve configuration from SSM Parameter Store: " +
        (error instanceof Error ? error.message : "Unknown error"),
      clientRequestToken,
    };
  }

  const { Protocol, Endpoint } =
    resourceProperties as AWS_SNS_Subscription.SubscriptionResourceType;

  const validationResult = validateSnsSubscriptionEndpoint(
    Protocol as SNSSupportedProtocols,
    Endpoint,
    config,
  );

  if (!validationResult.isValid && validationResult.reason) {
    logger.error(
      "SNS subscription validation failed:",
      validationResult.reason,
    );
    return {
      hookStatus: "FAILURE",
      errorCode: "NonCompliant",
      message: "SNS subscription validation failed: " + validationResult.reason,
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
