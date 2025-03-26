/**
 * TypeScript definitions for AWS::ElastiCache::SecurityGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroup
 */
export namespace AWS_ElastiCache_SecurityGroup {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::ElastiCache::SecurityGroup
   */
  export type SecurityGroupResourceType = {
    Tags?: TagType[];

    Description: string;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
