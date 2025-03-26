/**
 * TypeScript definitions for AWS::ElastiCache::ParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::ParameterGroup
 */
export namespace AWS_ElastiCache_ParameterGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::ElastiCache::ParameterGroup
   */
  export type ParameterGroupResourceType = {
    /**
     * The description for this cache parameter group.
     */
    Description: string;

    /**
     * A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.
     */
    Properties?: Record<string, any>;

    /**
     * Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.
     */
    Tags?: TagType[];

    /**
     * The name of the Cache Parameter Group.
     * Read-only property
     */
    CacheParameterGroupName?: string;

    /**
     * The name of the cache parameter group family that this cache parameter group is compatible with.
     * Create-only property
     */
    CacheParameterGroupFamily: string;
  };
}
