/**
 * TypeScript definitions for AWS::Athena::DataCatalog
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Athena::DataCatalog
 */
export namespace AWS_Athena_DataCatalog {
  export type TagsType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::Athena::DataCatalog
   */
  export type DataCatalogResourceType = {
    /**
     * The name of the data catalog to create. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters.
     * Create-only property
     */
    Name: string;

    /**
     * A description of the data catalog to be created.
     */
    Description?: string;

    /**
     * Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type.
     */
    Parameters?: Record<string, any>;

    /**
     * A list of comma separated tags to add to the data catalog that is created.
     */
    Tags?: TagsType;

    /**
     * The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore.
     */
    Type: string;
  };
}
