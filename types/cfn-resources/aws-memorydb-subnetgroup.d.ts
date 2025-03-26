/**
 * TypeScript definitions for AWS::MemoryDB::SubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::MemoryDB::SubnetGroup resource creates an Amazon MemoryDB Subnet Group.
 */
export namespace AWS_MemoryDB_SubnetGroup {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key for the tag. May not be null.
     */
    Key: string;

    /**
     * The tag's value. May be null.
     */
    Value: string;
  };

  /**
   * The AWS::MemoryDB::SubnetGroup resource creates an Amazon MemoryDB Subnet Group.
   */
  export type SubnetGroupResourceType = {
    /**
     * The name of the subnet group. This value must be unique as it also serves as the subnet group identifier.
     * Create-only property
     */
    SubnetGroupName: string;

    /**
     * An optional description of the subnet group.
     */
    Description?: string;

    /**
     * A list of VPC subnet IDs for the subnet group.
     */
    SubnetIds: string[];

    /**
     * An array of key-value pairs to apply to this subnet group.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the subnet group.
     * Read-only property
     */
    ARN?: string;
  };
}
