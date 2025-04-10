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
import { getValidatedSolutionConfig } from "@trust-stack/utils";
import type { Context, EventBridgeEvent } from "aws-lambda";
import * as ipaddr from "ipaddr.js";

const logger = new Logger({
  serviceName: "ECRImageLayerAccessDetectiveControlHandler",
});

// Initialize AWS clients
const securityHub = new SecurityHub({});

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

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler function processes CloudTrail events for ECR GetDownloadUrlForLayer
 * API calls, determines if they are authorized, and creates a Security Hub finding
 * for unauthorized access.
 *
 * @param event - The EventBridge event containing the CloudTrail event
 * @param _context - The Lambda execution context (unused)
 * @returns Response object with status code and message
 */
async function lambdaHandler(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    EcrGetDownloadUrlEventDetail
  >,
  _context: Context,
): Promise<void> {
  logger.info(`Event: ${JSON.stringify(event, null, 2)}`);

  // Extract relevant information from the CloudTrail event
  const eventDetail = event.detail;

  // Check if this is an ECR GetDownloadUrlForLayer API call
  if (
    eventDetail.eventSource !== "ecr.amazonaws.com" ||
    eventDetail.eventName !== "GetDownloadUrlForLayer"
  ) {
    logger.info("Not an ECR GetDownloadUrlForLayer event, skipping");
    return;
  }

  const { allowedRolePatterns, allowedNetworks } =
    await getValidatedSolutionConfig("ecr-image-layer-access");

  const accountID = eventDetail.recipientAccountId;
  const region = eventDetail.awsRegion;

  logger.info("Processing ECR GetDownloadUrlForLayer API call", {
    repositoryName: eventDetail.requestParameters.repositoryName,
  });

  // Check if this is an authorized access
  if (
    isAuthorizedAccess({
      eventDetail,
      allowedRolePatterns,
      allowedNetworks,
    })
  ) {
    logger.info("Access is authorized, skipping");
    return;
  }

  // Create a Security Hub finding
  const finding = createSecurityHubFinding({
    eventDetail,
    accountID,
    region,
  });

  // Import the finding into Security Hub
  try {
    const response = await securityHub.batchImportFindings({
      Findings: [finding],
    });
    logger.info("Security Hub finding created", { response });
  } catch (error) {
    logger.error("Error creating Security Hub finding", { error });
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
  allowedRolePatterns?: string[];
  allowedNetworks?: string[];
}>): boolean {
  try {
    // Extract identity information
    const userIdentity = eventDetail.userIdentity;
    const identityType = userIdentity.type;

    // Extract the principal ARN
    const principalArn = userIdentity.arn;

    // Extract source IP
    const sourceIp = eventDetail.sourceIPAddress;

    // Check if it's from an allowed role
    if (
      allowedRolePatterns &&
      allowedRolePatterns.length > 0 &&
      identityType === "AssumedRole" &&
      principalArn
    ) {
      const roleName = principalArn.includes("/")
        ? (principalArn.split("/").pop() ?? "")
        : "";

      if (allowedRolePatterns.some((pattern) => roleName.includes(pattern))) {
        logger.info("Access authorized", {
          roleName,
          allowedPattern: allowedRolePatterns,
        });

        return true;
      }
    }

    // Check if access is from an internal network
    if (
      allowedNetworks &&
      allowedNetworks.length > 0 &&
      isIpInNetwork(sourceIp, allowedNetworks)
    ) {
      logger.info("Access authorized", {
        sourceIp,
        allowedNetworks,
      });

      return true;
    }

    // Additional rules can be added here

    logger.warn("Unauthorized access detected", {
      identityType,
      sourceIp,
    });

    return false;
  } catch (error) {
    logger.error("Error determining authorization", { error });
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

    for (const networkCIDR of networks) {
      try {
        const cidr = ipaddr.parseCIDR(networkCIDR);
        if (ipObj.match(cidr)) {
          return true;
        }
      } catch (_error) {
        // Skip invalid network definitions
        logger.warn("Invalid network CIDR", { networkCIDR });
        continue;
      }
    }

    return false;
  } catch (_error) {
    // If the IP is invalid, return false
    logger.warn("Invalid IP address", { ip });
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
  accountID,
  region,
}: Readonly<{
  eventDetail: EcrGetDownloadUrlEventDetail;
  accountID: string;
  region: string;
}>): AwsSecurityFinding {
  const timestamp = new Date().toISOString();
  const repositoryName = eventDetail.requestParameters.repositoryName;
  const repositoryARN = `arn:aws:ecr:${region}:${accountID}:repository/${repositoryName}`;
  const layerDigest = eventDetail.requestParameters.layerDigest;
  const userIdentity = eventDetail.userIdentity;
  const identityType = userIdentity.type;
  const identityName =
    userIdentity.userName ?? userIdentity.sessionName ?? "unknown";
  const sourceIp = eventDetail.sourceIPAddress;
  const principalArn = userIdentity.arn;

  // Generate a deterministic ID based on the event ID
  const id = `ecr-getdownloadurlforlayer-${eventDetail.eventID}`;

  return {
    SchemaVersion: "2018-10-08",
    Id: id,
    ProductArn: `arn:aws:securityhub:${region}:${accountID}:product/${accountID}/default`,
    GeneratorId: "ECRImageLayerAccessMonitor",
    AwsAccountId: accountID,
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
        Id: repositoryARN,
        Partition: Partition.AWS,
        Region: region,
        Details: {
          AwsEcrRepository: {
            Arn: repositoryARN,
            RepositoryName: repositoryName,
          },
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
