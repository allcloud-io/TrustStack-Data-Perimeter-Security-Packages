import { SSM } from "@aws-sdk/client-ssm";
import { SNSSubscriptionSecuritySolutionConfig } from "@trust-stack/schema";
import type { SharedSSMParameterName } from "@trust-stack/utils";

const ssm = new SSM();

/**
 * Retrieves and validates the SNS subscription security configuration from SSM Parameter Store
 *
 * @returns The validated configuration object
 * @throws Error if the configuration cannot be retrieved or is invalid
 */
export async function getValidatedConfig(): Promise<SNSSubscriptionSecuritySolutionConfig> {
  const getParameterResult = await ssm.getParameter({
    Name: "/trust-stack/sns/subscription-security/config" satisfies SharedSSMParameterName,
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
    return SNSSubscriptionSecuritySolutionConfig.parse(configJSON);
  } catch (error) {
    throw new Error(
      "Configuration found in SSM is not a valid SNS subscription security solution configuration. " +
        "Error: " +
        (error instanceof Error ? error.message : "Unknown error"),
    );
  }
}
