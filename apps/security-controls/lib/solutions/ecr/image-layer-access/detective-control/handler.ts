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
import ipaddr from "ipaddr.js";
import type { ECRBatchGetImageEventDetail } from "../../../../../../../types/cloudtrail-events";

const logger = new Logger({
  serviceName: "ECRImageLayerAccessDetectiveControlHandler",
});

const securityHub = new SecurityHub({});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler function processes CloudTrail events for ECR BatchGetImage
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
    ECRBatchGetImageEventDetail
  >,
  _context: Context,
): Promise<void> {
  logger.info("Received event", { event });

  // Extract relevant information from the CloudTrail event
  const eventDetail = event.detail;

  // Check if this is an ECR BatchGetImage API call
  if (
    eventDetail.eventSource !== "ecr.amazonaws.com" ||
    eventDetail.eventName !== "BatchGetImage"
  ) {
    logger.info("Not an ECR BatchGetImage event, skipping");
    return;
  }

  const { allowedRolePatterns, allowedNetworks } =
    await getValidatedSolutionConfig("ecr-image-layer-access");

  const accountID = eventDetail.recipientAccountId;
  const region = eventDetail.awsRegion;

  logger.info("Processing ECR BatchGetImage API call", {
    repositoryName: eventDetail.requestParameters.repositoryName,
  });

  const checkResult = isAuthorizedAccess({
    eventDetail,
    allowedRolePatterns,
    allowedNetworks,
  });

  // Check if this is an authorized access
  if (checkResult.isAuthorized) {
    logger.info("Access is authorized, skipping");
    return;
  }

  // Create a Security Hub finding
  const finding = createSecurityHubFinding({
    eventDetail,
    accountID,
    region,
    reason: checkResult.reason,
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
 */
function isAuthorizedAccess({
  eventDetail,
  allowedRolePatterns,
  allowedNetworks,
}: Readonly<{
  eventDetail: ECRBatchGetImageEventDetail;
  allowedRolePatterns?: string[];
  allowedNetworks?: string[];
}>):
  | {
      isAuthorized: true;
    }
  | {
      isAuthorized: false;
      reason: string;
    } {
  try {
    // Extract identity information
    const userIdentity = eventDetail.userIdentity;
    const identityType = userIdentity.type;

    // Extract the principal ARN
    const principalARN = userIdentity.arn;

    // Extract source IP
    const sourceIP = eventDetail.sourceIPAddress;

    // Check if it's from an allowed role
    if (
      allowedRolePatterns &&
      allowedRolePatterns.length > 0 &&
      identityType === "AssumedRole" &&
      principalARN
    ) {
      logger.info("Checking if access is authorized by role", {
        principalARN,
        allowedRolePatterns,
      });

      const principalARNParts = principalARN.split("/");

      const roleName =
        principalARNParts.length > 2
          ? principalARNParts.slice(-2).join("/")
          : (principalARNParts.pop() ?? "");

      if (!allowedRolePatterns.some((pattern) => roleName.includes(pattern))) {
        logger.warn("Access is not authorized by role pattern", {
          roleName,
          allowedPattern: allowedRolePatterns,
        });

        return {
          isAuthorized: false,
          reason:
            `Access is not authorized by role pattern: ${roleName} does not match any ` +
            `of the allowed patterns: ${allowedRolePatterns.join(", ")}`,
        };
      } else {
        logger.info("Access is authorized by role pattern", {
          roleName,
          allowedPattern: allowedRolePatterns,
        });
      }
    }

    // Check if access is from an allowed network
    if (allowedNetworks && allowedNetworks.length > 0) {
      if (!isValidIPAddress(sourceIP)) {
        logger.warn("Source IP address is not a valid IP address", {
          sourceIP,
        });

        if (sourceIP === "ecr.amazonaws.com") {
          logger.info("Source IP address is masked, skipping", {
            sourceIP,
          });

          return {
            isAuthorized: true,
          };
        }

        return {
          isAuthorized: false,
          reason: "Source IP address is not a valid IP address",
        };
      }

      logger.info("Checking if IP is in allowed networks", {
        sourceIP,
        allowedNetworks,
      });

      // If IP is not in any allowed network, access is not authorized
      const ipInAllowedNetwork = isIPAddressInAllowedNetworks(
        sourceIP,
        allowedNetworks,
      );

      if (!ipInAllowedNetwork) {
        logger.warn("Source IP address is not in the allowed networks", {
          sourceIP,
          allowedNetworks,
        });

        return {
          isAuthorized: false,
          reason:
            `Source IP address is not in the allowed networks: ${sourceIP} is not in ` +
            `any of the allowed networks: ${allowedNetworks.join(", ")}`,
        };
      } else {
        logger.info("Source IP address is in the allowed networks", {
          sourceIP,
          allowedNetworks,
        });
      }
    }

    return {
      isAuthorized: true,
    };
  } catch (error) {
    logger.error("Error determining authorization", { error });
    // Default to authorized in case of error to prevent false positives
    return {
      isAuthorized: true,
    };
  }
}

function isValidIPAddress(ip: string): boolean {
  return ipaddr.IPv4.isIPv4(ip) || ipaddr.IPv6.isIPv6(ip);
}

/**
 * Checks if an IP address is within any of the specified networks.
 *
 * @param ip - The IP address to check
 * @param networks - List of network CIDR blocks
 * @returns True if the IP is in any of the networks, False otherwise
 */
function isIPAddressInAllowedNetworks(ip: string, networks: string[]): boolean {
  let ipObj: ipaddr.IPv4 | ipaddr.IPv6;

  try {
    ipObj = ipaddr.parse(ip);
  } catch (error) {
    // This should never happen because we check for valid IP addresses
    // before calling this function, but just in case
    logger.error("Error parsing IP address", { ip });
    throw error;
  }

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
}

/**
 * Creates a Security Hub finding for an unauthorized
 * ECR BatchGetImage API call.
 *
 * @param eventDetail - The CloudTrail event detail
 * @param accountID - The AWS account ID
 * @param region - The AWS region
 * @returns The Security Hub finding
 */
function createSecurityHubFinding({
  eventDetail,
  accountID,
  region,
  reason,
}: Readonly<{
  eventDetail: ECRBatchGetImageEventDetail;
  accountID: string;
  region: string;
  reason: string;
}>): AwsSecurityFinding {
  const timestamp = new Date().toISOString();
  const repositoryName = eventDetail.requestParameters.repositoryName;
  const repositoryARN = `arn:aws:ecr:${region}:${accountID}:repository/${repositoryName}`;

  // Get image IDs instead of layer digest
  const imageIDs = eventDetail.requestParameters.imageIds
    .map((id) => id.imageTag)
    .join(", ");

  const userIdentity = eventDetail.userIdentity;
  const identityType = userIdentity.type;

  // Extract user name from session context if available - sessionIssuer is always present in this type
  const identityName =
    userIdentity.sessionContext.sessionIssuer.userName || "unknown";

  const sourceIP = eventDetail.sourceIPAddress;
  const principalARN = userIdentity.arn;

  // Generate a deterministic ID based on the event ID
  const id = `ecr-batchgetimage-${eventDetail.eventID}`;

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
    Title: "Unauthorized ECR BatchGetImage API Call Detected",
    Description:
      "An unauthorized ECR BatchGetImage API call was detected, " +
      "which could potentially be used for unauthorized access to ECR images. " +
      `Reason: ${reason}`,
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
            imageIds: imageIDs,
            identityType: identityType,
            identityName: identityName,
            sourceIp: sourceIP,
            principalArn: principalARN,
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
        Text: "Review this access to ensure it is legitimate and in accordance with your security policies. Consider implementing preventative controls for ECR image access.",
      },
    },
  };
}
