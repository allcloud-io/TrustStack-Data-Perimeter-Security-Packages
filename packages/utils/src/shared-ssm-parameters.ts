import { SSM } from "@aws-sdk/client-ssm";
import {
  ECRImageLayerAccessPackageConfig,
  LambdaLayerPermissionSecurityConfig,
  LambdaPermissionSecurityConfig,
  LambdaVPCSecurityConfig,
  SNSSubscriptionSecurityPackageConfig,
  type SecurityPackageSlug,
} from "@trust-stack/schema";
import type { ZodSchema } from "zod";
import { resolveErrorMessage } from "./resolve-error-message";

const ssm = new SSM();

export type SharedSSMParameterName =
  | "/trust-stack/assets-bucket/name"
  | "/trust-stack/cloudformation-hook-execution-role-arn"
  | "/trust-stack/ecr/image-layer-access/config"
  | "/trust-stack/lambda/layer-permission-security/config"
  | "/trust-stack/lambda/permission-security/config"
  | "/trust-stack/lambda/vpc-security/config"
  | "/trust-stack/sns/subscription-security/config";

/**
 * Retrieves and validates a security package configuration from SSM Parameter Store
 *
 * @param securityPackage - The security package slug
 * @returns The validated configuration object
 * @throws Error if the configuration cannot be retrieved or is invalid
 */
export async function getValidatedPackageConfig(
  securityPackage: "ecr-image-layer-access",
): Promise<ECRImageLayerAccessPackageConfig>;
export async function getValidatedPackageConfig(
  securityPackage: "lambda-layer-permission-security",
): Promise<LambdaLayerPermissionSecurityConfig>;
export async function getValidatedPackageConfig(
  securityPackage: "lambda-permission-security",
): Promise<LambdaPermissionSecurityConfig>;
export async function getValidatedPackageConfig(
  securityPackage: "lambda-vpc-security",
): Promise<LambdaVPCSecurityConfig>;
export async function getValidatedPackageConfig(
  securityPackage: "sns-subscription-security",
): Promise<SNSSubscriptionSecurityPackageConfig>;
export async function getValidatedPackageConfig(
  securityPackage: SecurityPackageSlug,
): Promise<
  | ECRImageLayerAccessPackageConfig
  | LambdaLayerPermissionSecurityConfig
  | LambdaPermissionSecurityConfig
  | LambdaVPCSecurityConfig
  | SNSSubscriptionSecurityPackageConfig
> {
  let parameterName: string;
  let schema: ZodSchema;

  switch (securityPackage) {
    case "ecr-image-layer-access":
      parameterName = "/trust-stack/ecr/image-layer-access/config";
      schema = ECRImageLayerAccessPackageConfig;
      break;
    case "lambda-layer-permission-security":
      parameterName = "/trust-stack/lambda/layer-permission-security/config";
      schema = LambdaLayerPermissionSecurityConfig;
      break;
    case "lambda-permission-security":
      parameterName = "/trust-stack/lambda/permission-security/config";
      schema = LambdaPermissionSecurityConfig;
      break;
    case "lambda-vpc-security":
      parameterName = "/trust-stack/lambda/vpc-security/config";
      schema = LambdaVPCSecurityConfig;
      break;
    case "sns-subscription-security":
      parameterName = "/trust-stack/sns/subscription-security/config";
      schema = SNSSubscriptionSecurityPackageConfig;
      break;
    default:
      throw new Error(`Unsupported package: ${securityPackage}`);
  }

  const getParameterResult = await ssm.getParameter({
    Name: parameterName,
  });

  if (!getParameterResult.Parameter?.Value) {
    throw new Error("No config found");
  }

  let configJSON: unknown;

  try {
    configJSON = JSON.parse(getParameterResult.Parameter.Value);
  } catch (error: unknown) {
    throw new Error(
      "Configuration found in SSM is not a valid JSON object. " +
        "Error: " +
        resolveErrorMessage(error),
    );
  }

  try {
    return schema.parse(configJSON);
  } catch (error: unknown) {
    throw new Error(
      "Configuration found in SSM is not a valid configuration. " +
        `Parameter: ${parameterName}. ` +
        "Error: " +
        resolveErrorMessage(error),
    );
  }
}
