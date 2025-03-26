import type { SNSSubscriptionSecuritySolutionConfig } from "@trust-stack/schema";

/**
 * Default configuration for trusted endpoints
 * This should be customized based on organization requirements
 */
export const DEFAULT_CONFIG: SNSSubscriptionSecuritySolutionConfig = {
  // List of trusted email domains
  trustedEmailDomains: ["example.com", "example.org", "amazonaws.com"],

  // List of trusted HTTP/HTTPS domains
  trustedHttpDomains: ["example.com", "example.org", "amazonaws.com"],

  // List of trusted AWS service protocols
  trustedProtocols: ["sqs", "lambda", "firehose", "application"],
};
