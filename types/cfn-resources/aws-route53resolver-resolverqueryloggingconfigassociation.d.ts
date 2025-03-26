/**
 * TypeScript definitions for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation.
 */
export namespace AWS_Route53Resolver_ResolverQueryLoggingConfigAssociation {
  /**
   * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation.
   */
  export type ResolverQueryLoggingConfigAssociationResourceType = {
    /**
     * Id
     * Read-only property
     */
    Id?: string;

    /**
     * ResolverQueryLogConfigId
     * Create-only property
     */
    ResolverQueryLogConfigId?: string;

    /**
     * ResourceId
     * Create-only property
     */
    ResourceId?: string;

    /**
     * ResolverQueryLogConfigAssociationStatus
     * Read-only property
     */
    Status?: string;

    /**
     * ResolverQueryLogConfigAssociationError
     * Read-only property
     */
    Error?: string;

    /**
     * ResolverQueryLogConfigAssociationErrorMessage
     * Read-only property
     */
    ErrorMessage?: string;

    /**
     * Rfc3339TimeString
     * Read-only property
     */
    CreationTime?: string;
  };
}
