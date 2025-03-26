/**
 * TypeScript definitions for AWS::SecretsManager::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SecretsManager::ResourcePolicy
 */
export namespace AWS_SecretsManager_ResourcePolicy {
  /**
   * Resource Type definition for AWS::SecretsManager::ResourcePolicy
   */
  export type ResourcePolicyResourceType = {
    /**
     * The Arn of the secret.
     * Read-only property
     */
    Id?: string;

    /**
     * The ARN or name of the secret to attach the resource-based policy.
     * Create-only property
     */
    SecretId: string;

    /**
     * A JSON-formatted string for an AWS resource-based policy.
     */
    ResourcePolicy: string | Record<string, any>;

    /**
     * Specifies whether to block resource-based policies that allow broad access to the secret.
     */
    BlockPublicPolicy?: boolean;
  };
}
