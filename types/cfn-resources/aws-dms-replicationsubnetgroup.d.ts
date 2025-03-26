/**
 * TypeScript definitions for AWS::DMS::ReplicationSubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DMS::ReplicationSubnetGroup
 */
export namespace AWS_DMS_ReplicationSubnetGroup {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::DMS::ReplicationSubnetGroup
   */
  export type ReplicationSubnetGroupResourceType = {
    ReplicationSubnetGroupDescription: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ReplicationSubnetGroupIdentifier?: string;

    SubnetIds: string[];

    Tags?: TagType[];
  };
}
