import type { LambdaVPCSecurityConfig } from "@trust-stack/schema";
import type { ServiceControlPolicy } from "../../../../../../../types/service-control-policy";

/**
 * Generates a Service Control Policy to restrict AWS Lambda functions to only be
 * created with VPC configurations.
 *
 * @param config Configuration for the Lambda VPC Security package
 * @returns A Service Control Policy JSON document
 */
export function generateSCP(
  _config: LambdaVPCSecurityConfig,
): ServiceControlPolicy {
  return {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "DenyLambdaFunctionCreationWithoutVPCConfig",
        Effect: "Deny",
        Action: ["lambda:CreateFunction", "lambda:UpdateFunctionConfiguration"],
        Resource: "*",
        Condition: {
          Null: {
            "lambda:VpcIds": "true",
          },
        },
      },
    ],
  };
}
