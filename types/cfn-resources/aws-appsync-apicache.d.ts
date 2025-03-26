/**
 * TypeScript definitions for AWS::AppSync::ApiCache
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::ApiCache
 */
export namespace AWS_AppSync_ApiCache {
  /**
   * Resource Type definition for AWS::AppSync::ApiCache
   */
  export type ApiCacheResourceType = {
    Type: string;

    TransitEncryptionEnabled?: boolean;

    HealthMetricsConfig?: string;

    AtRestEncryptionEnabled?: boolean;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApiId: string;

    ApiCachingBehavior: string;

    Ttl: number;
  };
}
