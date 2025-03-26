import {
  AwsSecurityFinding,
  BatchImportFindingsCommand,
  ComplianceStatus,
  Partition,
  RecordState,
  SecurityHubClient,
  SeverityLabel,
  WorkflowStatus,
} from "@aws-sdk/client-securityhub";
import { SupportedProtocols } from "@trust-stack/schema";
import type { Context, EventBridgeEvent } from "aws-lambda";
import { getValidatedConfig, validateSnsSubscriptionEndpoint } from "../shared";

/**
 * CloudTrail event detail for SNS subscription creation
 */
type SnsSubscribeEventDetail = {
  eventSource: string;
  eventName: string;
  awsRegion: string;
  sourceIPAddress: string;
  userIdentity: {
    type: string;
    principalId: string;
    arn: string;
    accountId: string;
    userName?: string;
  };
  requestParameters: {
    topicArn: string;
    protocol: string;
    endpoint?: string;
    returnSubscriptionArn?: boolean;
    attributes?: Record<string, string>;
  };
  responseElements: {
    subscriptionArn: string;
  };
  eventID: string;
  eventType: string;
  recipientAccountId: string;
};

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
export async function handler(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    SnsSubscribeEventDetail
  >,
  _context: Context,
): Promise<void> {
  console.log("Event:", JSON.stringify(event, null, 2));

  // Check if this is an SNS subscribe API call
  if (
    event.detail.eventSource !== "sns.amazonaws.com" ||
    event.detail.eventName !== "Subscribe"
  ) {
    console.log("Not an SNS Subscribe event, skipping");
    return;
  }

  const { protocol, endpoint } = event.detail.requestParameters;
  const accountId = event.detail.recipientAccountId;
  const region = event.detail.awsRegion;

  console.log(
    `Validating SNS subscription with protocol: ${protocol}, endpoint: ${endpoint}`,
  );

  const config = await getValidatedConfig();

  // Validate the subscription endpoint
  const validationResult = validateSnsSubscriptionEndpoint(
    protocol as SupportedProtocols,
    endpoint,
    config,
  );

  // If the validation fails, create a Security Hub finding
  if (!validationResult.isValid && validationResult.reason) {
    console.log(`Validation failed: ${validationResult.reason}`);

    // Create a Security Hub client
    const securityHubClient = new SecurityHubClient({ region });

    // Create a Security Hub finding
    const finding = createSecurityHubFinding(
      event.detail,
      validationResult.reason,
      accountId,
      region,
    );

    // Import the finding into Security Hub
    try {
      const command = new BatchImportFindingsCommand({
        Findings: [finding],
      });

      const response = await securityHubClient.send(command);
      console.log("Security Hub finding created:", response);
    } catch (error) {
      console.error("Error creating Security Hub finding:", error);
      throw error;
    }
  } else {
    console.log("SNS subscription validated successfully");
  }
}

/**
 * Creates a Security Hub finding for a non-compliant SNS subscription
 *
 * @param event - The CloudTrail event
 * @param reason - The reason for non-compliance
 * @param accountId - The AWS account ID
 * @param region - The AWS region
 * @returns The Security Hub finding
 */
function createSecurityHubFinding(
  event: SnsSubscribeEventDetail,
  reason: string,
  accountId: string,
  region: string,
): AwsSecurityFinding {
  const timestamp = new Date().toISOString();
  const subscriptionARN = event.responseElements.subscriptionArn;
  const topicARN = event.requestParameters.topicArn;
  const protocol = event.requestParameters.protocol;
  const endpoint = event.requestParameters.endpoint;

  // Generate a deterministic ID based on the subscription ARN
  const id = subscriptionARN
    ? `sns-subscription-validation-${subscriptionARN.split(":").pop()}`
    : `sns-subscription-validation-${event.eventID}`;

  return {
    SchemaVersion: "2018-10-08",
    Id: id,
    ProductArn: `arn:aws:securityhub:${region}:${accountId}:product/${accountId}/default`,
    GeneratorId: "SNSSubscriptionEndpointValidator",
    AwsAccountId: accountId,
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
