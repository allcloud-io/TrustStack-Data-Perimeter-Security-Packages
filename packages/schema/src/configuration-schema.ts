import { z } from "zod";

/**
 * Configuration for the ECR image layer access solution
 */
export const ECRImageLayerAccessSolutionConfig = z.object({
  /**
   * List of allowed role patterns
   */
  allowedRolePatterns: z.array(z.string()).optional(),

  /**
   * List of allowed networks
   */
  allowedNetworks: z
    .array(z.union([z.string().cidr(), z.string().ip()]))
    .optional(),

  /**
   * List of allowed VPC endpoints
   */
  allowedVPCEndpoints: z.array(z.string()).optional(),
});

export type ECRImageLayerAccessSolutionConfig = z.infer<
  typeof ECRImageLayerAccessSolutionConfig
>;

const SNSSupportedProtocols = z.enum([
  "email",
  "email-json",
  "http",
  "https",
  "sqs",
  "lambda",
  "firehose",
  "application",
]);

export type SNSSupportedProtocols = z.infer<typeof SNSSupportedProtocols>;

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
  trustedProtocols: SNSSupportedProtocols.array(),
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
        ecrImageLayerAccess: z
          .union([
            z.object({
              enabled: z.literal(true),
              configuration: ECRImageLayerAccessSolutionConfig,
            }),
            z.object({
              enabled: z.literal(false),
            }),
          ])
          .optional(),
        snsSubscriptionSecurity: z
          .union([
            z.object({
              enabled: z.literal(true),
              configuration: SNSSubscriptionSecuritySolutionConfig,
            }),
            z.object({
              enabled: z.literal(false),
            }),
          ])
          .optional(),
      })
      .describe("The solutions to deploy"),
  }),
});

export type ConfigurationSchema = z.infer<typeof ConfigurationSchema>;
