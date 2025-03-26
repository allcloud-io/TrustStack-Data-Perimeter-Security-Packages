/**
 * TypeScript definitions for AWS::RDS::DBShardGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new DB shard group for Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.
 * Valid for: Aurora DB clusters only
 */
export namespace AWS_RDS_DBShardGroup {
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
   * Creates a new DB shard group for Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.
   * Valid for: Aurora DB clusters only
   */
  export type DBShardGroupResourceType = {
    /**
     * Read-only property
     */
    DBShardGroupResourceId?: string;

    /**
     * The name of the DB shard group.
     * Create-only property
     */
    DBShardGroupIdentifier?: string;

    /**
     * The name of the primary DB cluster for the DB shard group.
     * Create-only property
     */
    DBClusterIdentifier: string;

    /**
     * Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following:
     * +  0 - Creates a DB shard group without a standby DB shard group. This is the default value.
     * +  1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ).
     * +  2 - Creates a DB shard group with two standby DB shard groups in two different AZs.
     */
    ComputeRedundancy?: number;

    /**
     * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
     */
    MaxACU: number;

    /**
     * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
     */
    MinACU?: number;

    /**
     * Specifies whether the DB shard group is publicly accessible.
     * When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
     * When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
     * Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
     * If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:
     * +  If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private.
     * +  If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.
     * If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:
     * +  If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private.
     * +  If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.
     * Create-only property
     */
    PubliclyAccessible?: boolean;

    /**
     * Read-only property
     */
    Endpoint?: string;

    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.
     */
    Tags?: TagType[];
  };
}
