import { SSM } from "@aws-sdk/client-ssm";
import {
  ECRImageLayerAccessSolutionConfig,
  SNSSubscriptionSecuritySolutionConfig,
  type SecuritySolutionSlug,
} from "@trust-stack/schema";
import type { ZodSchema } from "zod";

const ssm = new SSM();

export type SharedSSMParameterName =
  | "/trust-stack/assets-bucket/name"
  | "/trust-stack/cloudformation-hook-execution-role-arn"
  | "/trust-stack/ecr/image-layer-access/config"
  | "/trust-stack/sns/subscription-security/config";

/**
 * Retrieves and validates a solution configuration from SSM Parameter Store
 *
 * @param solution - The security solution slug
 * @returns The validated configuration object
 * @throws Error if the configuration cannot be retrieved or is invalid
 */
export async function getValidatedSolutionConfig(
  solution: "ecr-image-layer-access",
): Promise<ECRImageLayerAccessSolutionConfig>;
export async function getValidatedSolutionConfig(
  solution: "sns-subscription-security",
): Promise<SNSSubscriptionSecuritySolutionConfig>;
export async function getValidatedSolutionConfig(
  solution: SecuritySolutionSlug,
): Promise<
  ECRImageLayerAccessSolutionConfig | SNSSubscriptionSecuritySolutionConfig
> {
  let parameterName: string;
  let schema: ZodSchema;

  switch (solution) {
    case "ecr-image-layer-access":
      parameterName = "/trust-stack/ecr/image-layer-access/config";
      schema = ECRImageLayerAccessSolutionConfig;
      break;
    case "sns-subscription-security":
      parameterName = "/trust-stack/sns/subscription-security/config";
      schema = SNSSubscriptionSecuritySolutionConfig;
      break;
    default:
      throw new Error(`Unsupported solution: ${solution}`);
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
  } catch (error) {
    throw new Error(
      "Configuration found in SSM is not a valid JSON object. " +
        "Error: " +
        (error instanceof Error ? error.message : "Unknown error"),
    );
  }

  try {
    return schema.parse(configJSON);
  } catch (error) {
    throw new Error(
      "Configuration found in SSM is not a valid configuration. " +
        `Parameter: ${parameterName}. ` +
        "Error: " +
        (error instanceof Error ? error.message : "Unknown error"),
    );
  }
}
