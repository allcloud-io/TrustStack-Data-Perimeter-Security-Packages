import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import {
  type AwsSecurityFinding,
  ComplianceStatus,
  Partition,
  RecordState,
  SecurityHub,
  SeverityLabel,
  WorkflowStatus,
} from "@aws-sdk/client-securityhub";
import middy from "@middy/core";
import type { SNSSupportedProtocols } from "@trust-stack/schema";
import { getValidatedSolutionConfig } from "@trust-stack/utils";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type { SNSSubscribeEventDetail } from "../../../../../../../types/cloudtrail-events";
import { validateSnsSubscriptionEndpoint } from "../shared";

const logger = new Logger({
  serviceName: "SNSSubscriptionSecurityDetectiveControlHandler",
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for processing CloudTrail events for SNS subscription creation.
 *
 * This function processes CloudTrail events via EventBridge, validates that SNS subscriptions
 * have trusted endpoints, and creates Security Hub findings for non-compliant subscriptions.
 *
 * @param event - The EventBridge event containing the CloudTrail event
 * @param _context - The Lambda context (unused)
 * @returns A promise that resolves when processing is complete
 */
async function lambdaHandler(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    SNSSubscribeEventDetail
  >,
  _context: Context,
): Promise<void> {
  logger.info(`Event: ${JSON.stringify(event, null, 2)}`);

  // Check if this is an SNS subscribe API call
  if (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    event.detail.eventSource !== "sns.amazonaws.com" ||
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    event.detail.eventName !== "Subscribe"
  ) {
    logger.info("Not an SNS Subscribe event, skipping");
    return;
  }

  const { protocol, endpoint } = event.detail.requestParameters;
  const accountId = event.detail.recipientAccountId;
  const region = event.detail.awsRegion;
  const subscriptionArn = event.detail.responseElements.subscriptionArn;

  logger.appendKeys({
    protocol,
    endpoint,
    accountId,
    region,
    subscriptionArn,
  });

  logger.info("Validating SNS subscription");

  const config = await getValidatedSolutionConfig("sns-subscription-security");

  if (
    (["email", "email-json"] satisfies SNSSupportedProtocols[]).includes(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
      protocol.toLowerCase() as any,
    )
  ) {
    logger.info("Skipping validation for email and email-json protocols");
    return;
  }

  // Validate the subscription endpoint
  const validationResult = validateSnsSubscriptionEndpoint(
    protocol as SNSSupportedProtocols,
    endpoint,
    config,
  );

  // If the validation fails, create a Security Hub finding
  if (!validationResult.isValid && validationResult.reason) {
    logger.error("SNS subscription validation failed", {
      reason: validationResult.reason,
    });

    // Create a Security Hub client
    const securityHub = new SecurityHub({ region });

    // Create a Security Hub finding
    const finding = createSecurityHubFinding(
      event.detail,
      validationResult.reason,
      accountId,
      region,
    );

    // Import the finding into Security Hub
    try {
      const response = await securityHub.batchImportFindings({
        Findings: [finding],
      });

      logger.info("Security Hub finding created", { response });
    } catch (error) {
      logger.error("Error creating Security Hub finding:", {
        error: error instanceof Error ? error.message : String(error),
      });

      throw error;
    }
  } else {
    logger.info("SNS subscription validated successfully");
  }
}

/**
 * Creates a Security Hub finding for a non-compliant SNS subscription
 *
 * @param event - The CloudTrail event
 * @param reason - The reason for non-compliance
 * @param accountID - The AWS account ID
 * @param region - The AWS region
 * @returns The Security Hub finding
 */
function createSecurityHubFinding(
  event: SNSSubscribeEventDetail,
  reason: string,
  accountID: string,
  region: string,
): AwsSecurityFinding {
  const timestamp = new Date().toISOString();
  const subscriptionARN = event.responseElements.subscriptionArn;
  const topicARN = event.requestParameters.topicArn;
  const protocol = event.requestParameters.protocol;
  const endpoint = event.requestParameters.endpoint;

  // Generate a deterministic ID based on the subscription ARN
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = `sns-subscription-validation-${subscriptionARN.split(":").pop()!}`;

  return {
    SchemaVersion: "2018-10-08",
    Id: id,
    ProductArn: `arn:aws:securityhub:${region}:${accountID}:product/${accountID}/default`,
    GeneratorId: "SNSSubscriptionEndpointValidator",
    AwsAccountId: accountID,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    FirstObservedAt: timestamp,
    CreatedAt: timestamp,
    UpdatedAt: timestamp,
    Severity: {
      Label: SeverityLabel.HIGH,
    },
    Title: "SNS Subscription with untrusted endpoint detected",
    Description: reason,
    ProductFields: {
      ProviderName: "TrustStack",
      ProviderVersion: "1.0",
    },
    Resources: [
      {
        Type: "AwsSnsSubscription",
        Id: subscriptionARN,
        Partition: Partition.AWS,
        Region: region,
        Details: {
          Other: {
            topicARN,
            protocol,
            endpoint: endpoint ?? "N/A",
          },
        },
      },
    ],
    Compliance: {
      Status: ComplianceStatus.FAILED,
      RelatedRequirements: ["AWS Data Perimeter Guidelines"],
    },
    RecordState: RecordState.ACTIVE,
    Workflow: {
      Status: WorkflowStatus.NEW,
    },
    Remediation: {
      Recommendation: {
        Text: "Delete the non-compliant SNS subscription and create a new one with a trusted endpoint",
        Url: "https://docs.aws.amazon.com/sns/latest/dg/sns-delete-subscription.html",
      },
    },
  };
}
