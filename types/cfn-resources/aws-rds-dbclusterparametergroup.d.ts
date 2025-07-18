/**
 * TypeScript definitions for AWS::RDS::DBClusterParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::RDS::DBClusterParameterGroup` resource creates a new Amazon RDS DB cluster parameter group.
 * For information about configuring parameters for Amazon Aurora DB clusters, see Working with parameter groups in the *Amazon Aurora User Guide*.
 * If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
 * If you apply a change to parameter group associated with a stopped DB cluster, then the updated stack waits until the DB cluster is started.
 */
export namespace AWS_RDS_DBClusterParameterGroup {
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
   * The `AWS::RDS::DBClusterParameterGroup` resource creates a new Amazon RDS DB cluster parameter group.
   * For information about configuring parameters for Amazon Aurora DB clusters, see Working with parameter groups in the *Amazon Aurora User Guide*.
   * If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
   * If you apply a change to parameter group associated with a stopped DB cluster, then the updated stack waits until the DB cluster is started.
   */
  export type DBClusterParameterGroupResourceType = {
    /**
     * The description for the DB cluster parameter group.
     * Create-only property
     */
    Description: string;

    /**
     * The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
     * *Aurora MySQL*
     * Example: `aurora-mysql5.7`, `aurora-mysql8.0`
     * *Aurora PostgreSQL*
     * Example: `aurora-postgresql14`
     * *RDS for MySQL*
     * Example: `mysql8.0`
     * *RDS for PostgreSQL*
     * Example: `postgres13`
     * To list all of the available parameter group families for a DB engine, use the following command:
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
     * For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql`
     * The output contains duplicates.
     * The following are the valid DB engine values:
     * +   `aurora-mysql`
     * +   `aurora-postgresql`
     * +   `mysql`
     * +   `postgres`
     * Create-only property
     */
    Family: string;

    /**
     * Provides a list of parameters for the DB cluster parameter group.
     */
    Parameters: Record<string, any>;

    /**
     * The name of the DB cluster parameter group.
     * Constraints:
     * +  Must not match the name of an existing DB cluster parameter group.
     * This value is stored as a lowercase string.
     * Create-only property
     */
    DBClusterParameterGroupName?: string;

    /**
     * Tags to assign to the DB cluster parameter group.
     */
    Tags?: TagType[];
  };
}
