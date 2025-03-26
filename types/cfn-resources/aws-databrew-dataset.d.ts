/**
 * TypeScript definitions for AWS::DataBrew::Dataset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataBrew::Dataset.
 */
export namespace AWS_DataBrew_Dataset {
  /**
   * Json options
   */
  export type JsonOptionsType = {
    MultiLine?: boolean;
  };

  export type ExcelOptionsType = {
    SheetNames?: string[];

    SheetIndexes?: number[];

    HeaderRow?: boolean;
  };

  /**
   * Csv options
   */
  export type CsvOptionsType = {
    Delimiter?: string;

    HeaderRow?: boolean;
  };

  /**
   * Format options for dataset
   */
  export type FormatOptionsType = {
    Json?: JsonOptionsType;

    Excel?: ExcelOptionsType;

    Csv?: CsvOptionsType;
  };

  /**
   * Input
   */
  export type InputType = {
    S3InputDefinition?: S3LocationType;

    DataCatalogInputDefinition?: DataCatalogInputDefinitionType;

    DatabaseInputDefinition?: DatabaseInputDefinitionType;

    Metadata?: MetadataType;
  };

  /**
   * Input location
   */
  export type S3LocationType = {
    Bucket: string;

    Key?: string;

    BucketOwner?: BucketOwnerType;
  };

  export type DataCatalogInputDefinitionType = {
    /**
     * Catalog id
     */
    CatalogId?: string;

    /**
     * Database name
     */
    DatabaseName?: string;

    /**
     * Table name
     */
    TableName?: string;

    TempDirectory?: S3LocationType;
  };

  export type DatabaseInputDefinitionType = {
    /**
     * Glue connection name
     */
    GlueConnectionName: string;

    /**
     * Database table name
     */
    DatabaseTableName?: string;

    TempDirectory?: S3LocationType;

    /**
     * Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
     */
    QueryString?: string;
  };

  export type MetadataType = {
    /**
     * Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.
     */
    SourceArn?: string;
  };

  /**
   * Bucket owner
   */
  export type BucketOwnerType = {};

  /**
   * Path options for dataset
   */
  export type PathOptionsType = {
    FilesLimit?: FilesLimitType;

    LastModifiedDateCondition?: FilterExpressionType;

    Parameters?: PathParameterType[];
  };

  export type FilesLimitType = {
    /**
     * Maximum number of files
     */
    MaxFiles: number;

    /**
     * Ordered by
     */
    OrderedBy?: string;

    /**
     * Order
     */
    Order?: string;
  };

  /**
   * A key-value pair to associate dataset parameter name with its definition.
   */
  export type PathParameterType = {
    PathParameterName: PathParameterNameType;

    DatasetParameter: DatasetParameterType;
  };

  /**
   * Parameter name
   */
  export type PathParameterNameType = {};

  export type DatasetParameterType = {
    Name: PathParameterNameType;

    /**
     * Parameter type
     */
    Type: string;

    DatetimeOptions?: DatetimeOptionsType;

    /**
     * Add the value of this parameter as a column in a dataset.
     */
    CreateColumn?: boolean;

    Filter?: FilterExpressionType;
  };

  export type DatetimeOptionsType = {
    /**
     * Date/time format of a date parameter
     */
    Format: string;

    /**
     * Timezone offset
     */
    TimezoneOffset?: string;

    /**
     * Locale code for a date parameter
     */
    LocaleCode?: string;
  };

  export type FilterExpressionType = {
    /**
     * Filtering expression for a parameter
     */
    Expression: string;

    ValuesMap: FilterValueType[];
  };

  /**
   * A key-value pair to associate expression variable names with their values
   */
  export type FilterValueType = {
    /**
     * Variable name
     */
    ValueReference: string;

    Value: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::DataBrew::Dataset.
   */
  export type DatasetResourceType = {
    /**
     * Dataset name
     * Create-only property
     */
    Name: string;

    /**
     * Dataset format
     */
    Format?: string;

    /**
     * Format options for dataset
     */
    FormatOptions?: FormatOptionsType;

    /**
     * Input
     */
    Input: InputType;

    /**
     * Source type of the dataset
     */
    Source?: string;

    /**
     * PathOptions
     */
    PathOptions?: PathOptionsType;

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
