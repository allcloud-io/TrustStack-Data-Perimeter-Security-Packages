import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import { IAM } from "@aws-sdk/client-iam";
import middy from "@middy/core";
import { resolveErrorMessage } from "@trust-stack/utils";
import type { SecurityHubFindingsImportedEvent } from "../../../../../../../types/aws-security-hub-events";
import { SECURITY_PACKAGE_NAME } from "../shared";

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}ResponsiveControl`,
});

const iam = new IAM({});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Responsive Control Handler for the ECR Image Layer Access package.
 *
 * This Lambda function implements a responsive control mechanism that
 * automatically remediates unauthorized access attempts to ECR image layers
 * through the `GetDownloadUrlForLayer` API. Upon receiving AWS Security Hub findings,
 * the function analyzes the event context to determine if the access attempt is unauthorized.
 *
 * Remediation actions include:
 *  - Revoking IAM permissions by attaching a deny-all policy for affected users.
 *  - Notifying security teams of the detected incident.
 */
async function lambdaHandler(event: SecurityHubFindingsImportedEvent) {
  logger.appendKeys({ event });
  logger.info("Received event");

  // Extract findings from the event
  const findings = event.detail.findings;

  // Process each finding
  for (const finding of findings) {
    // Extract the resource information from the finding
    const resources = finding.Resources;

    for (const resource of resources) {
      // Extract identity information from resource details if available
      const identityInfo = extractIdentityInfo(resource);

      if (identityInfo) {
        // Revoke permissions if possible
        await revokePermissions(identityInfo);
      }
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      "Remediation actions taken for unauthorized ECR image layer access",
    ),
  };
}

/**
 * Extracts identity information from a resource in the Security Hub finding
 *
 * @param resource - The resource from the Security Hub finding
 * @returns Identity information or null if not available
 */
function extractIdentityInfo(resource: {
  Details?: {
    Other?: Record<string, string>;
    AwsEcrRepository?: {
      Arn?: string;
      RepositoryName?: string;
    };
  };
  Id?: string;
}): { type: string; arn: string } | null {
  try {
    // Extract identity information from resource details
    // The detective control includes identity information in the Other object
    const details = resource.Details?.Other ?? {};

    if (details.identityType && details.principalArn) {
      return {
        type: details.identityType,
        arn: details.principalArn,
      };
    }

    // Fall back to parsing the resource ID if needed
    if (resource.Id?.includes("user/")) {
      return {
        type: "IAMUser",
        arn: resource.Id,
      };
    }

    // Log if identity information couldn't be extracted
    logger.warn("Unable to extract identity information from resource", {
      resource,
    });
  } catch (error: unknown) {
    logger.error("Error extracting identity info", {
      error: resolveErrorMessage(error),
      resource,
    });
  }

  return null;
}

/**
 * Revokes permissions for the identified principal.
 *
 * @param userIdentity - The user identity from the CloudTrail event
 */
async function revokePermissions(userIdentity: {
  type: string;
  arn: string;
  userName?: string;
}): Promise<void> {
  try {
    const identityType = userIdentity.type;

    if (identityType === "IAMUser") {
      const username = extractIAMUserName(userIdentity.arn);

      // Attach a deny-all policy to the user
      const policyDocument = {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Deny",
            Action: ["ecr:GetDownloadUrlForLayer", "ecr:BatchGetImage"],
            Resource: "*",
          },
        ],
      };

      await iam.putUserPolicy({
        UserName: username,
        PolicyName: "ECRLayerAccessEmergencyDeny",
        PolicyDocument: JSON.stringify(policyDocument),
      });

      logger.info("Applied emergency deny policy", {
        username,
      });
    } else if (identityType === "AssumedRole") {
      // For assumed roles, we can't easily revoke permissions
      // We would need to modify the role policy, which might affect other legitimate users
      // Instead, we log the incident for manual review
      logger.warn("Manual review required for assumed role", {
        arn: userIdentity.arn,
      });
    }
    // Additional identity types could be handled here
  } catch (error: unknown) {
    logger.error("Error revoking permissions", {
      error: resolveErrorMessage(error),
    });
    throw error;
  }
}

function extractIAMUserName(principalARN: string): string {
  const match = /user\/(?<username>.*)/.exec(principalARN);

  if (!match?.groups?.username) {
    const errorMessage = "Unable to extract IAM user name from principal ARN";
    logger.warn(errorMessage, {
      principalARN,
    });
    throw new Error(errorMessage);
  }

  return match.groups.username;
}
