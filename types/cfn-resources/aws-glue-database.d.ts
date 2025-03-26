/**
 * TypeScript definitions for AWS::Glue::Database
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Database
 */
export namespace AWS_Glue_Database {
  /**
   * A structure that describes a target database for resource linking.
   */
  export type DatabaseIdentifierType = {
    /**
     * The name of the catalog database.
     */
    DatabaseName?: string;

    /**
     * Region of the target database.
     */
    Region?: string;

    /**
     * The ID of the Data Catalog in which the database resides.
     */
    CatalogId?: string;
  };

  /**
   * The permissions granted to a principal.
   */
  export type PrincipalPrivilegesType = {
    /**
     * The permissions that are granted to the principal.
     */
    Permissions?: string[];

    /**
     * The principal who is granted permissions.
     */
    Principal?: DataLakePrincipalType;
  };

  /**
   * The AWS Lake Formation principal.
   */
  export type DataLakePrincipalType = {
    /**
     * An identifier for the AWS Lake Formation principal.
     */
    DataLakePrincipalIdentifier?: string;
  };

  /**
   * A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.
   */
  export type FederatedDatabaseType = {
    /**
     * The name of the connection to the external metastore.
     */
    ConnectionName?: string;

    /**
     * A unique identifier for the federated database.
     */
    Identifier?: string;
  };

  /**
   * The structure used to create or update a database.
   */
  export type DatabaseInputType = {
    /**
     * The location of the database (for example, an HDFS path).
     */
    LocationUri?: string;

    /**
     * Creates a set of default permissions on the table for principals. Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.
     */
    CreateTableDefaultPermissions?: PrincipalPrivilegesType[];

    /**
     * A description of the database.
     */
    Description?: string;

    /**
     * These key-value pairs define parameters and properties of the database.
     */
    Parameters?: Record<string, any>;

    /**
     * A DatabaseIdentifier structure that describes a target database for resource linking.
     */
    TargetDatabase?: DatabaseIdentifierType;

    /**
     * A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.
     */
    FederatedDatabase?: FederatedDatabaseType;

    /**
     * The name of the database. For hive compatibility, this is folded to lowercase when it is stored.
     */
    Name?: string;
  };

  /**
   * Resource Type definition for AWS::Glue::Database
   */
  export type DatabaseResourceType = {
    /**
     * The AWS account ID for the account in which to create the catalog object.
     */
    CatalogId: string;

    /**
     * The metadata for the database.
     */
    DatabaseInput: DatabaseInputType;

    /**
     * The name of the database. For hive compatibility, this is folded to lowercase when it is store.
     * Create-only property
     */
    DatabaseName?: string;
  };
}
