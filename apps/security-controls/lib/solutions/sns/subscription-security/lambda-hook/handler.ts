import {
  SNSSubscriptionSecuritySolutionConfig,
  type SupportedProtocols,
} from "@trust-stack/schema";
import type { Context } from "aws-lambda";
import type {
  CloudFormationHookEvent,
  CloudFormationHookResult,
} from "../../../../../../../types/cfn-hooks";
import type { AWS_SNS_Subscription } from "../../../../../../../types/cfn-resources/aws-sns-subscription";
import { getValidatedConfig, validateSnsSubscriptionEndpoint } from "../shared";

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
export async function handler(
  event: CloudFormationHookEvent,
  _context: Context,
): Promise<CloudFormationHookResult> {
  console.log("CloudFormation Hook triggered");
  console.log("Event:", JSON.stringify(event, null, 2));

  const {
    actionInvocationPoint,
    requestData: {
      targetLogicalId,
      targetName,
      targetModel: { resourceProperties },
    },
    clientRequestToken,
  } = event;

  console.log(`Invocation Point: ${actionInvocationPoint}`);
  console.log(`Target Logical ID: ${targetLogicalId}`);
  console.log(`Target Name: ${targetName}`);

  if (!isValidTargetEvent(actionInvocationPoint, targetName)) {
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
    config = await getValidatedConfig();
  } catch (error) {
    console.error("Error retrieving configuration:", error);
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
    Protocol as SupportedProtocols,
    Endpoint,
    config,
  );

  if (!validationResult.isValid && validationResult.reason) {
    console.error(
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

  console.log("SNS subscription validation passed");

  return {
    hookStatus: "SUCCESS",
    message: "SNS subscription validation passed",
    clientRequestToken,
  };
}
