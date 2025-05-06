import type { LambdaVPCSecurityConfig } from "@trust-stack/schema";
import type {
  SCPStatement,
  ServiceControlPolicy,
} from "../../../../../../../types/service-control-policy";

/**
 * Generates a Service Control Policy to restrict AWS Lambda functions to only be
 * created with VPC configurations.
 *
 * @param config Configuration for the Lambda VPC Security package
 * @returns A Service Control Policy JSON document
 */
export function generateSCP(
  config: LambdaVPCSecurityConfig,
): ServiceControlPolicy {
  const allowedVPCIDs: string[] = config.allowedVPCIDs ?? [];

  const statements: SCPStatement[] = [
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
  ];

  // If specific VPC IDs are provided, add a condition to restrict to those VPCs
  if (allowedVPCIDs.length > 0) {
    statements.push({
      Sid: "DenyLambdaFunctionCreationWithNonApprovedVPCs",
      Effect: "Deny",
      Action: ["lambda:CreateFunction", "lambda:UpdateFunctionConfiguration"],
      Resource: "*",
      Condition: {
        "ForAllValues:StringNotEquals": {
          "lambda:VpcIds": allowedVPCIDs,
        },
        Null: {
          "lambda:VpcIds": "false",
        },
      },
    });
  }

  return {
    Version: "2012-10-17",
    Statement: statements,
  };
}
