import type { SNSSubscriptionSecurityPackageConfig } from "@trust-stack/schema";
import type { ServiceControlPolicy } from "../../../../../../../types/service-control-policy";

/**
 * Generates a Service Control Policy (SCP) for the SNS subscription security package
 *
 * @param config - The configuration for the SNS subscription security package
 * @returns The generated SCP
 */
export function generateSCP(
  config: SNSSubscriptionSecurityPackageConfig,
): ServiceControlPolicy {
  return {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "RestrictSNSSubscriptionToOrganizationResources",
        Effect: "Deny",
        Action: "sns:Subscribe",
        Resource: "*",
        Condition: {
          StringEquals: {
            "sns:Protocol": ["sqs", "lambda", "firehose", "application"],
          },
          StringLike: {
            "sns:Endpoint": [
              "arn:aws:sqs:*:*:*",
              "arn:aws:lambda:*:*:function:*",
              "arn:aws:firehose:*:*:*",
              "arn:aws:*:*:*:*",
            ],
          },
          StringNotEquals: {
            "aws:ResourceOrgID": "${aws:PrincipalOrgID}",
          },
        },
      },
      {
        Sid: "RestrictSNSSubscriptionProtocols",
        Effect: "Deny",
        Action: "sns:Subscribe",
        Resource: "*",
        Condition: {
          StringNotEquals: {
            "sns:Protocol": config.trustedProtocols,
          },
        },
      },
      {
        Sid: "RestrictSNSEmailSubscriptionToTrustedDomains",
        Effect: "Deny",
        Action: "sns:Subscribe",
        Resource: "*",
        Condition: {
          StringEquals: {
            "sns:Protocol": ["email", "email-json"],
          },
          StringNotLike: {
            "sns:Endpoint": config.trustedEmailDomains,
          },
        },
      },
      {
        Sid: "RestrictSNSHttpSubscriptionToTrustedDomains",
        Effect: "Deny",
        Action: "sns:Subscribe",
        Resource: "*",
        Condition: {
          StringEquals: {
            "sns:Protocol": ["http", "https"],
          },
          StringNotLike: {
            "sns:Endpoint": config.trustedHttpDomains,
          },
        },
      },
    ],
  };
}
