/**
 * TypeScript definitions for AWS::Glue::Table
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Table
 */
export namespace AWS_Glue_Table {
  export type TableIdentifierType = {
    DatabaseName?: string;

    Region?: string;

    CatalogId?: string;

    Name?: string;
  };

  export type OrderType = {
    Column: string;

    SortOrder: number;
  };

  export type SchemaReferenceType = {
    SchemaId?: SchemaIdType;

    SchemaVersionId?: string;

    SchemaVersionNumber?: number;
  };

  export type TableInputType = {
    Owner?: string;

    ViewOriginalText?: string;

    Description?: string;

    TableType?: string;

    Parameters?: Record<string, any>;

    ViewExpandedText?: string;

    StorageDescriptor?: StorageDescriptorType;

    TargetTable?: TableIdentifierType;

    PartitionKeys?: ColumnType[];

    Retention?: number;

    Name?: string;
  };

  export type MetadataOperationType = {};

  export type OpenTableFormatInputType = {
    IcebergInput?: IcebergInputType;
  };

  export type SkewedInfoType = {
    SkewedColumnValues?: string[];

    SkewedColumnValueLocationMaps?: Record<string, any>;

    SkewedColumnNames?: string[];
  };

  export type ColumnType = {
    Comment?: string;

    Type?: string;

    Name: string;
  };

  export type StorageDescriptorType = {
    StoredAsSubDirectories?: boolean;

    Parameters?: Record<string, any>;

    BucketColumns?: string[];

    NumberOfBuckets?: number;

    OutputFormat?: string;

    Columns?: ColumnType[];

    SerdeInfo?: SerdeInfoType;

    SortColumns?: OrderType[];

    Compressed?: boolean;

    SchemaReference?: SchemaReferenceType;

    SkewedInfo?: SkewedInfoType;

    InputFormat?: string;

    Location?: string;
  };

  export type SchemaIdType = {
    RegistryName?: string;

    SchemaName?: string;

    SchemaArn?: string;
  };

  export type IcebergInputType = {
    MetadataOperation?: MetadataOperationType;

    Version?: string;
  };

  export type SerdeInfoType = {
    Parameters?: Record<string, any>;

    SerializationLibrary?: string;

    Name?: string;
  };

  /**
   * Resource Type definition for AWS::Glue::Table
   */
  export type TableResourceType = {
    /**
     * Create-only property
     */
    DatabaseName: string;

    TableInput: TableInputType;

    OpenTableFormatInput?: OpenTableFormatInputType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    CatalogId: string;
  };
}
