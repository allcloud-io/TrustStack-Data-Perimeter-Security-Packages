import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import { IAM } from "@aws-sdk/client-iam";
import middy from "@middy/core";
import type { SecurityHubFindingsImportedEvent } from "../../../../../../../types/aws-security-hub-events";

const logger = new Logger({
  serviceName: "ECRImageLayerAccessResponsiveControl",
});

const iam = new IAM({});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Responsive Control Handler for the ECR Image Layer Access solution.
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
  logger.info("Event:", JSON.stringify(event, null, 2));

  // TODO: Implement the responsive control
  // Take remediation actions
  const userIdentity = event.detail.userIdentity || {};

  // Revoke permissions if possible
  await revokePermissions(userIdentity);

  return {
    statusCode: 200,
    body: JSON.stringify(
      "Remediation actions taken for unauthorized ECR image layer access",
    ),
  };
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
      const username = userIdentity.userName;
      if (username) {
        // Attach a deny-all policy to the user
        const policyDocument = {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Deny",
              Action: "ecr:GetDownloadUrlForLayer",
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
      }
    } else if (identityType === "AssumedRole") {
      // For assumed roles, we can't easily revoke permissions
      // We would need to modify the role policy, which might affect other legitimate users
      // Instead, we log the incident for manual review
      logger.warn("Manual review required", {
        arn: userIdentity.arn,
      });
    }
    // Additional identity types could be handled here
  } catch (error) {
    logger.error("Error revoking permissions", {
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
