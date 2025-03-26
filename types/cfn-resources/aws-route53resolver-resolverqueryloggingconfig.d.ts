/**
 * TypeScript definitions for AWS::Route53Resolver::ResolverQueryLoggingConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfig.
 */
export namespace AWS_Route53Resolver_ResolverQueryLoggingConfig {
  /**
   * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfig.
   */
  export type ResolverQueryLoggingConfigResourceType = {
    /**
     * ResourceId
     * Read-only property
     */
    Id?: string;

    /**
     * AccountId
     * Read-only property
     */
    OwnerId?: string;

    /**
     * ResolverQueryLogConfigStatus, possible values are CREATING, CREATED, DELETED AND FAILED.
     * Read-only property
     */
    Status?: string;

    /**
     * ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.
     * Read-only property
     */
    ShareStatus?: string;

    /**
     * Count
     * Read-only property
     */
    AssociationCount?: number;

    /**
     * Arn
     * Read-only property
     */
    Arn?: string;

    /**
     * ResolverQueryLogConfigName
     * Create-only property
     */
    Name?: string;

    /**
     * The id of the creator request.
     * Read-only property
     */
    CreatorRequestId?: string;

    /**
     * destination arn
     * Create-only property
     */
    DestinationArn?: string;

    /**
     * Rfc3339TimeString
     * Read-only property
     */
    CreationTime?: string;
  };
}
