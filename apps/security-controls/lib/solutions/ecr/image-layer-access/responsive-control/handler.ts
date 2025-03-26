import { IAM } from "@aws-sdk/client-iam";

const iam = new IAM({});

export async function handler(event: any, context: any) {
  console.log("Received event:", JSON.stringify(event, null, 2));

  // TODO: Implement the responsive control
  // Take remediation actions
  const eventDetail = event.detail;

  const userIdentity = eventDetail.userIdentity || {};

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

        console.log(`Applied emergency deny policy to user ${username}`);
      }
    } else if (identityType === "AssumedRole") {
      // For assumed roles, we can't easily revoke permissions
      // We would need to modify the role policy, which might affect other legitimate users
      // Instead, we log the incident for manual review
      console.warn(
        `Manual review required for assumed role: ${userIdentity.arn}`,
      );
    }
    // Additional identity types could be handled here
  } catch (error) {
    console.error(`Error revoking permissions: ${error}`);
  }
}
