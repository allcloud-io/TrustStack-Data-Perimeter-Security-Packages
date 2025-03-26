import { z } from "zod";

const SupportedProtocols = z.enum([
  "email",
  "email-json",
  "http",
  "https",
  "sqs",
  "lambda",
  "firehose",
  "application",
]);

export type SupportedProtocols = z.infer<typeof SupportedProtocols>;

/**
 * Configuration for the SNS subscription security solution
 */
export const SNSSubscriptionSecuritySolutionConfig = z.object({
  /**
   * List of trusted email domains
   */
  trustedEmailDomains: z.string().array(),

  /**
   * List of trusted HTTP/HTTPS domains
   */
  trustedHttpDomains: z.string().array(),

  /**
   * List of trusted AWS service protocols
   */
  trustedProtocols: SupportedProtocols.array(),
});

export type SNSSubscriptionSecuritySolutionConfig = z.infer<
  typeof SNSSubscriptionSecuritySolutionConfig
>;

export const SecuritySolutionSlug = z.enum([
  "ecr-image-layer-access",
  "sns-subscription-security",
]);

export type SecuritySolutionSlug = z.infer<typeof SecuritySolutionSlug>;

/**
 * The configuration schema for the TrustStack security framework.
 *
 * This schema is used to validate the configuration file that is used to deploy the TrustStack security framework.
 * The configuration file is a JSON file that contains the configuration for the TrustStack security framework.
 * The configuration file is validated against the schema before the deployment of the TrustStack security framework.
 */
export const ConfigurationSchema = z.object({
  version: z.enum(["v1"]),
  spec: z.object({
    aws: z.object({
      regions: z
        .array(z.string())
        .describe("The AWS regions to use for the deployment"),
    }),
    solutions: z
      .object({
        snsSubscriptionSecurity: z.union([
          z.object({
            enabled: z.literal(true),
            configuration: SNSSubscriptionSecuritySolutionConfig,
          }),
          z.object({
            enabled: z.literal(false),
          }),
        ]),
      })
      .describe("The solutions to deploy"),
  }),
});

export type ConfigurationSchema = z.infer<typeof ConfigurationSchema>;
