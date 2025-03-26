/**
 * TypeScript definitions for AWS::Route53Resolver::ResolverConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::ResolverConfig.
 */
export namespace AWS_Route53Resolver_ResolverConfig {
  /**
   * Resource schema for AWS::Route53Resolver::ResolverConfig.
   */
  export type ResolverConfigResourceType = {
    /**
     * Id
     * Read-only property
     */
    Id?: string;

    /**
     * AccountId
     * Read-only property
     */
    OwnerId?: string;

    /**
     * ResourceId
     * Create-only property
     */
    ResourceId: string;

    /**
     * ResolverAutodefinedReverseStatus, possible values are ENABLING, ENABLED, DISABLING AND DISABLED.
     * Read-only property
     */
    AutodefinedReverse?: string;

    /**
     * Represents the desired status of AutodefinedReverse. The only supported value on creation is DISABLE. Deletion of this resource will return AutodefinedReverse to its default value (ENABLED).
     * Create-only property
     */
    AutodefinedReverseFlag: string;
  };
}
