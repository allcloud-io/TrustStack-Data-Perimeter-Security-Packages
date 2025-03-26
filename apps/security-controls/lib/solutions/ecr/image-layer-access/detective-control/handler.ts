import {
  type AwsSecurityFinding,
  BatchImportFindingsCommand,
  ComplianceStatus,
  Partition,
  RecordState,
  SecurityHubClient,
  SeverityLabel,
  WorkflowStatus,
} from "@aws-sdk/client-securityhub";
import type { Context, EventBridgeEvent } from "aws-lambda";
import * as ipaddr from "ipaddr.js";
import { DEFAULT_CONFIG } from "../shared";

// Initialize AWS clients
const securityHubClient = new SecurityHubClient({});

/**
 * CloudTrail event detail for ECR GetDownloadUrlForLayer API call
 */
type EcrGetDownloadUrlEventDetail = {
  eventSource: string;
  eventName: string;
  eventTime: string;
  sourceIPAddress: string;
  userIdentity: {
    type: string;
    principalId: string;
    arn: string;
    accountId: string;
    userName?: string;
    sessionName?: string;
  };
  requestParameters: {
    repositoryName: string;
    layerDigest: string;
  };
  responseElements?: Record<string, unknown>;
  awsRegion: string;
  recipientAccountId: string;
  eventID: string;
};

/**
 * Lambda handler function processes CloudTrail events for ECR GetDownloadUrlForLayer
 * API calls, determines if they are authorized, and creates a Security Hub finding
 * for unauthorized access.
 *
 * @param event - The EventBridge event containing the CloudTrail event
 * @param _context - The Lambda execution context (unused)
 * @returns Response object with status code and message
 */
export async function handler(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    EcrGetDownloadUrlEventDetail
  >,
  _context: Context,
): Promise<void> {
  console.log(`Processing event: ${JSON.stringify(event, null, 2)}`);

  // Extract relevant information from the CloudTrail event
  const eventDetail = event.detail;

  // Check if this is an ECR GetDownloadUrlForLayer API call
  if (
    eventDetail.eventSource !== "ecr.amazonaws.com" ||
    eventDetail.eventName !== "GetDownloadUrlForLayer"
  ) {
    console.log("Not an ECR GetDownloadUrlForLayer event, skipping");
    return;
  }

  const { allowedRolePatterns, allowedNetworks } = DEFAULT_CONFIG;

  const accountId = eventDetail.recipientAccountId;
  const region = eventDetail.awsRegion;

  console.log(
    `Processing ECR GetDownloadUrlForLayer API call for repository: ${eventDetail.requestParameters?.repositoryName}`,
  );

  // Check if this is an authorized access
  if (
    isAuthorizedAccess({
      eventDetail,
      allowedRolePatterns,
      allowedNetworks,
    })
  ) {
    console.log("Access is authorized, skipping");
    return;
  }

  // Create a Security Hub finding
  const finding = createSecurityHubFinding({
    eventDetail,
    accountId,
    region,
  });

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
}

/**
 * Determines if the ECR access is authorized based on predefined rules.
 *
 * @param eventDetail - The CloudTrail event detail
 * @returns True if the access is authorized, False otherwise
 */
function isAuthorizedAccess({
  eventDetail,
  allowedRolePatterns,
  allowedNetworks,
}: Readonly<{
  eventDetail: EcrGetDownloadUrlEventDetail;
  allowedRolePatterns: string[];
  allowedNetworks: string[];
}>): boolean {
  try {
    // Extract identity information
    const userIdentity = eventDetail.userIdentity || {};
    const identityType = userIdentity.type;

    // Extract the principal ARN
    const principalArn = userIdentity.arn || "";

    // Extract source IP
    const sourceIp = eventDetail.sourceIPAddress || "";

    // Check if it's from an allowed role
    if (identityType === "AssumedRole" && principalArn) {
      const roleName = principalArn.includes("/")
        ? principalArn.split("/").pop() || ""
        : "";
      if (allowedRolePatterns.some((pattern) => roleName.includes(pattern))) {
        console.log(
          `Access authorized: Role ${roleName} matches allowed pattern`,
        );
        return true;
      }
    }

    // Check if access is from an internal network
    if (isIpInNetwork(sourceIp, allowedNetworks)) {
      console.log(
        `Access authorized: Source IP ${sourceIp} is from an allowed network`,
      );
      return true;
    }

    // Additional rules can be added here

    console.warn(
      `Unauthorized access detected: ${identityType} from ${sourceIp}`,
    );
    return false;
  } catch (error) {
    console.error(`Error determining authorization: ${error}`);
    // Default to authorized in case of error to prevent false positives
    return true;
  }
}

/**
 * Checks if an IP address is within any of the specified networks.
 *
 * @param ip - The IP address to check
 * @param networks - List of network CIDR blocks
 * @returns True if the IP is in any of the networks, False otherwise
 */
function isIpInNetwork(ip: string, networks: string[]): boolean {
  try {
    const ipObj = ipaddr.parse(ip);

    for (const network of networks) {
      try {
        const cidr = ipaddr.parseCIDR(network);
        if (ipObj.match(cidr)) {
          return true;
        }
      } catch (_error) {
        // Skip invalid network definitions
        console.warn(`Invalid network CIDR: ${network}`);
        continue;
      }
    }

    return false;
  } catch (_error) {
    // If the IP is invalid, return false
    console.warn(`Invalid IP address: ${ip}`);
    return false;
  }
}

/**
 * Creates a Security Hub finding for an unauthorized
 * ECR GetDownloadUrlForLayer API call.
 *
 * @param eventDetail - The CloudTrail event detail
 * @param accountId - The AWS account ID
 * @param region - The AWS region
 * @returns The Security Hub finding
 */
function createSecurityHubFinding({
  eventDetail,
  accountId,
  region,
}: Readonly<{
  eventDetail: EcrGetDownloadUrlEventDetail;
  accountId: string;
  region: string;
}>): AwsSecurityFinding {
  const timestamp = new Date().toISOString();
  const repositoryName =
    eventDetail.requestParameters?.repositoryName || "unknown";
  const layerDigest = eventDetail.requestParameters?.layerDigest || "unknown";
  const userIdentity = eventDetail.userIdentity || {};
  const identityType = userIdentity.type || "unknown";
  const identityName =
    userIdentity.userName || userIdentity.sessionName || "unknown";
  const sourceIp = eventDetail.sourceIPAddress || "unknown";
  const principalArn = userIdentity.arn || "unknown";

  // Generate a deterministic ID based on the event ID
  const id = `ecr-getdownloadurlforlayer-${eventDetail.eventID}`;

  return {
    SchemaVersion: "2018-10-08",
    Id: id,
    ProductArn: `arn:aws:securityhub:${region}:${accountId}:product/${accountId}/default`,
    GeneratorId: "ECRImageLayerAccessMonitor",
    AwsAccountId: accountId,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    FirstObservedAt: timestamp,
    CreatedAt: timestamp,
    UpdatedAt: timestamp,
    Severity: {
      Label: SeverityLabel.MEDIUM,
    },
    Title: "Unauthorized ECR GetDownloadUrlForLayer API Call Detected",
    Description:
      "An unauthorized ECR GetDownloadUrlForLayer API call was detected, " +
      "which generates a presigned URL that could potentially be used for " +
      "unauthorized access to ECR image layers.",
    ProductFields: {
      ProviderName: "TrustStack",
      ProviderVersion: "1.0",
    },
    Resources: [
      {
        Type: "AwsEcrRepository",
        Id: `arn:aws:ecr:${region}:${accountId}:repository/${repositoryName}`,
        Partition: Partition.AWS,
        Region: region,
        Details: {
          Other: {
            layerDigest: layerDigest,
            identityType: identityType,
            identityName: identityName,
            sourceIp: sourceIp,
            principalArn: principalArn,
            eventTime: eventDetail.eventTime || "unknown",
          },
        },
      },
    ],
    Compliance: {
      Status: ComplianceStatus.WARNING,
      RelatedRequirements: ["AWS Data Perimeter Guidelines"],
    },
    RecordState: RecordState.ACTIVE,
    Workflow: {
      Status: WorkflowStatus.NEW,
    },
    Remediation: {
      Recommendation: {
        Text: "Review this access to ensure it is legitimate and in accordance with your security policies. Consider implementing preventative controls for ECR image layer access.",
        Url: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-layer-perimeter-security.html",
      },
    },
  };
}
