/**
 * TypeScript definitions for AWS::RDS::DBSubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::RDS::DBSubnetGroup` resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region.
 * For more information, see Working with DB subnet groups in the *Amazon RDS User Guide*.
 */
export namespace AWS_RDS_DBSubnetGroup {
  /**
   * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
   * For more information, see Tagging Amazon RDS resources in the *Amazon RDS User Guide* or Tagging Amazon Aurora and Amazon RDS resources in the *Amazon Aurora User Guide*.
   */
  export type TagType = {
    /**
     * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Key: string;

    /**
     * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Value?: string;
  };

  /**
   * The `AWS::RDS::DBSubnetGroup` resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region.
   * For more information, see Working with DB subnet groups in the *Amazon RDS User Guide*.
   */
  export type DBSubnetGroupResourceType = {
    /**
     * The description for the DB subnet group.
     */
    DBSubnetGroupDescription: string;

    /**
     * The name for the DB subnet group. This value is stored as a lowercase string.
     * Constraints:
     * +  Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.
     * +  Must not be default.
     * +  First character must be a letter.
     * Example: `mydbsubnetgroup`
     * Create-only property
     */
    DBSubnetGroupName?: string;

    /**
     * The EC2 Subnet IDs for the DB subnet group.
     */
    SubnetIds: string[];

    /**
     * Tags to assign to the DB subnet group.
     */
    Tags?: TagType[];
  };
}
