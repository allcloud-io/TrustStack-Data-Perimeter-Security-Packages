/**
 * TypeScript definitions for AWS::ECR::PullThroughCacheRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ECR::PullThroughCacheRule` resource creates or updates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.
 */
export namespace AWS_ECR_PullThroughCacheRule {
  export type PullThroughCacheRuleType = {
    RegistryId?: RegistryIdType;

    EcrRepositoryPrefix: EcrRepositoryPrefixType;

    UpstreamRegistryUrl: UpstreamRegistryUrlType;

    CredentialArn?: CredentialArnType;

    UpstreamRegistry?: UpstreamRegistryType;
  };

  /**
   * The account ID of the registry pull-through cache repository will be created in.
   */
  export type RegistryIdType = {};

  /**
   * The ECRRepositoryPrefix is a custom alias for upstream registry url.
   */
  export type EcrRepositoryPrefixType = {};

  /**
   * The upstreamRegistryUrl is the endpoint of upstream registry url of the public repository to be cached
   */
  export type UpstreamRegistryUrlType = {};

  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that identifies the credentials to authenticate to the upstream registry.
   */
  export type CredentialArnType = {};

  /**
   * The name of the upstream registry.
   */
  export type UpstreamRegistryType = {};

  /**
   * The `AWS::ECR::PullThroughCacheRule` resource creates or updates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.
   */
  export type PullThroughCacheRuleResourceType = {
    /**
     * The Amazon ECR repository prefix associated with the pull through cache rule.
     * Create-only property
     */
    EcrRepositoryPrefix?: string;

    /**
     * The upstream registry URL associated with the pull through cache rule.
     * Create-only property
     */
    UpstreamRegistryUrl?: string;

    /**
     * The ARN of the Secrets Manager secret associated with the pull through cache rule.
     * Create-only property
     */
    CredentialArn?: string;

    /**
     * The name of the upstream source registry associated with the pull through cache rule.
     * Create-only property
     */
    UpstreamRegistry?: string;
  };
}
