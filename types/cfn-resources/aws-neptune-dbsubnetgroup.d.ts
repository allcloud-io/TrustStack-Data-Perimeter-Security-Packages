/**
 * TypeScript definitions for AWS::Neptune::DBSubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Neptune::DBSubnetGroup
 */
export namespace AWS_Neptune_DBSubnetGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::Neptune::DBSubnetGroup
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
