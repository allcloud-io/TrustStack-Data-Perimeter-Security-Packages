/**
 * TypeScript definitions for AWS::RDS::DBParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::RDS::DBParameterGroup` resource creates a custom parameter group for an RDS database family.
 * This type can be declared in a template and referenced in the `DBParameterGroupName` property of an `AWS::RDS::DBInstance` resource.
 * For information about configuring parameters for Amazon RDS DB instances, see Working with parameter groups in the *Amazon RDS User Guide*.
 * For information about configuring parameters for Amazon Aurora DB instances, see Working with parameter groups in the *Amazon Aurora User Guide*.
 * Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.
 */
export namespace AWS_RDS_DBParameterGroup {
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
   * The `AWS::RDS::DBParameterGroup` resource creates a custom parameter group for an RDS database family.
   * This type can be declared in a template and referenced in the `DBParameterGroupName` property of an `AWS::RDS::DBInstance` resource.
   * For information about configuring parameters for Amazon RDS DB instances, see Working with parameter groups in the *Amazon RDS User Guide*.
   * For information about configuring parameters for Amazon Aurora DB instances, see Working with parameter groups in the *Amazon Aurora User Guide*.
   * Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.
   */
  export type DBParameterGroupResourceType = {
    /**
     * The name of the DB parameter group.
     * Constraints:
     * +  Must be 1 to 255 letters, numbers, or hyphens.
     * +  First character must be a letter
     * +  Can't end with a hyphen or contain two consecutive hyphens
     * If you don't specify a value for `DBParameterGroupName` property, a name is automatically created for the DB parameter group.
     * This value is stored as a lowercase string.
     * Create-only property
     */
    DBParameterGroupName?: string;

    /**
     * Provides the customer-specified description for this DB parameter group.
     * Create-only property
     */
    Description: string;

    /**
     * The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.
     * To list all of the available parameter group families for a DB engine, use the following command:
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
     * For example, to list all of the available parameter group families for the MySQL DB engine, use the following command:
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine mysql`
     * The output contains duplicates.
     * The following are the valid DB engine values:
     * +   `aurora-mysql`
     * +   `aurora-postgresql`
     * +   `db2-ae`
     * +   `db2-se`
     * +   `mysql`
     * +   `oracle-ee`
     * +   `oracle-ee-cdb`
     * +   `oracle-se2`
     * +   `oracle-se2-cdb`
     * +   `postgres`
     * +   `sqlserver-ee`
     * +   `sqlserver-se`
     * +   `sqlserver-ex`
     * +   `sqlserver-web`
     * Create-only property
     */
    Family: string;

    /**
     * An array of parameter names and values for the parameter update. You must specify at least one parameter name and value.
     * For more information about parameter groups, see Working with parameter groups in the *Amazon RDS User Guide*, or Working with parameter groups in the *Amazon Aurora User Guide*.
     * AWS CloudFormation doesn't support specifying an apply method for each individual parameter. The default apply method for each parameter is used.
     */
    Parameters?: Record<string, any>;

    /**
     * Tags to assign to the DB parameter group.
     */
    Tags?: TagType[];
  };
}
