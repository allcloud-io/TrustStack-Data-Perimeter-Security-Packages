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

  if (actionInvocationPoint !== "CREATE_PRE_PROVISION") {
    return {
      hookStatus: "SUCCESS",
      message: "Not a CREATE_PRE_PROVISION event",
      clientRequestToken,
    };
  }

  if (targetName !== "AWS::SNS::Subscription") {
    return {
      hookStatus: "SUCCESS",
      message: "Not a SNS subscription",
      clientRequestToken,
    };
  }

  let config: SNSSubscriptionSecuritySolutionConfig;

  try {
    config = await getValidatedConfig();
  } catch (error) {
    return {
      hookStatus: "FAILURE",
      errorCode: "NonCompliant",
      message:
        "SNS subscription validation failed: " +
        (error instanceof Error ? error.message : "Unknown error"),
      clientRequestToken,
    };
  }

  const { Protocol, Endpoint } =
    resourceProperties as AWS_SNS_Subscription.SubscriptionResourceType;

  // Validation results
  const validationResult = validateSnsSubscriptionEndpoint(
    Protocol as SupportedProtocols,
    Endpoint,
    config,
  );

  if (!validationResult.isValid && validationResult.reason) {
    return {
      hookStatus: "FAILURE",
      errorCode: "NonCompliant",
      message: "SNS subscription validation failed: " + validationResult.reason,
      clientRequestToken,
    };
  }

  return {
    hookStatus: "SUCCESS",
    message: "SNS subscription validation passed",
    clientRequestToken,
  };
}
