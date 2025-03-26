/**
 * TypeScript definitions for AWS::DocDB::DBSubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DocDB::DBSubnetGroup
 */
export namespace AWS_DocDB_DBSubnetGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::DocDB::DBSubnetGroup
   */
  export type DBSubnetGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    DBSubnetGroupName?: string;

    DBSubnetGroupDescription: string;

    SubnetIds: string[];

    Tags?: TagType[];
  };
}
