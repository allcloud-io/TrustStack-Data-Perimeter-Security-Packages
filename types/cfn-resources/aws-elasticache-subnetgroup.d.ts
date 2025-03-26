/**
 * TypeScript definitions for AWS::ElastiCache::SubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::SubnetGroup
 */
export namespace AWS_ElastiCache_SubnetGroup {
  /**
   * A tag that can be added to an ElastiCache subnet group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your subnet groups. A tag with a null Value is permitted.
   */
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::ElastiCache::SubnetGroup
   */
  export type SubnetGroupResourceType = {
    /**
     * The description for the cache subnet group.
     */
    Description: string;

    /**
     * The EC2 subnet IDs for the cache subnet group.
     */
    SubnetIds: string[];

    /**
     * The name for the cache subnet group. This value is stored as a lowercase string.
     * Create-only property
     */
    CacheSubnetGroupName?: string;

    Tags?: TagType[];
  };
}
