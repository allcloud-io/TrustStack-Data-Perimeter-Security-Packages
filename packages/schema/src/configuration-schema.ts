import { z } from "zod";

/**
 * Configuration for the ECR image layer access package
 */
export const ECRImageLayerAccessPackageConfig = z.object({
  /**
   * List of allowed role names
   */
  allowedRoleNames: z.array(z.string()).optional(),

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

export type ECRImageLayerAccessPackageConfig = z.infer<
  typeof ECRImageLayerAccessPackageConfig
>;

/**
 * Configuration for the Lambda VPC security package
 */
export const LambdaVPCSecurityConfig = z.object({
  /**
   * Optional list of VPC IDs that Lambda functions are allowed to use
   * If not specified, any VPC is considered valid as long as the function
   * is running inside a VPC
   */
  allowedVPCIDs: z.array(z.string()).optional(),
});

export type LambdaVPCSecurityConfig = z.infer<typeof LambdaVPCSecurityConfig>;

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
 * Configuration for the SNS subscription security package
 */
export const SNSSubscriptionSecurityPackageConfig = z.object({
  /**
   * List of trusted email domains
   */
  trustedEmailDomains: z.string().array(),

  /**
   * List of trusted HTTP/HTTPS domains
   */
  trustedHTTPDomains: z.string().array(),

  /**
   * List of trusted AWS service protocols
   */
  trustedProtocols: SNSSupportedProtocols.array(),
});

export type SNSSubscriptionSecurityPackageConfig = z.infer<
  typeof SNSSubscriptionSecurityPackageConfig
>;

export const SecurityPackageSlug = z.enum([
  "ecr-image-layer-access",
  "lambda-vpc-security",
  "sns-subscription-security",
]);

export type SecurityPackageSlug = z.infer<typeof SecurityPackageSlug>;

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
    awsOrganizationARN: z
      .string()
      .describe(
        "ARN of the AWS organization to use for provisioning TrustStack's components",
      ),
    awsOrganizationID: z
      .string()
      .describe(
        "ID of the AWS organization to use for provisioning TrustStack's components",
      ),
    sharedServicesAccountID: z
      .string()
      .describe(
        "ID of an AWS account to use for provisioning TrustStack's shared components",
      ),
    securityPackages: z
      .object({
        ecrImageLayerAccess: z
          .union([
            z.object({
              enabled: z.literal(true),
              configuration: ECRImageLayerAccessPackageConfig,
            }),
            z.object({
              enabled: z.literal(false),
            }),
          ])
          .optional(),
        lambdaVPCSecurity: z
          .union([
            z.object({
              enabled: z.literal(true),
              configuration: LambdaVPCSecurityConfig,
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
              configuration: SNSSubscriptionSecurityPackageConfig,
            }),
            z.object({
              enabled: z.literal(false),
            }),
          ])
          .optional(),
      })
      .describe("The security packages to deploy"),
  }),
});

export type ConfigurationSchema = z.infer<typeof ConfigurationSchema>;
