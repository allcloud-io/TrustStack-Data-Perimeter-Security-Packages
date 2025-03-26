/**
 * TypeScript definitions for AWS::ElastiCache::SecurityGroupIngress
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroupIngress
 */
export namespace AWS_ElastiCache_SecurityGroupIngress {
  /**
   * Resource Type definition for AWS::ElastiCache::SecurityGroupIngress
   */
  export type SecurityGroupIngressResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    CacheSecurityGroupName: string;

    EC2SecurityGroupName: string;

    EC2SecurityGroupOwnerId?: string;
  };
}
