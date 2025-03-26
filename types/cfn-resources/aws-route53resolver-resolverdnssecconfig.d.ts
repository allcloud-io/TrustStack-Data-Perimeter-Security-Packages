/**
 * TypeScript definitions for AWS::Route53Resolver::ResolverDNSSECConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::ResolverDNSSECConfig.
 */
export namespace AWS_Route53Resolver_ResolverDNSSECConfig {
  /**
   * Resource schema for AWS::Route53Resolver::ResolverDNSSECConfig.
   */
  export type ResolverDNSSECConfigResourceType = {
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
    ResourceId?: string;

    /**
     * ResolverDNSSECValidationStatus, possible values are ENABLING, ENABLED, DISABLING AND DISABLED.
     * Read-only property
     */
    ValidationStatus?: string;
  };
}
