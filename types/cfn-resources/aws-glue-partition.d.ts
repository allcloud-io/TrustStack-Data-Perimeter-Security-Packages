/**
 * TypeScript definitions for AWS::Glue::Partition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Partition
 */
export namespace AWS_Glue_Partition {
  export type SchemaReferenceType = {
    SchemaId?: SchemaIdType;

    SchemaVersionId?: string;

    SchemaVersionNumber?: number;
  };

  export type OrderType = {
    Column: string;

    SortOrder?: number;
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

  export type SerdeInfoType = {
    Parameters?: Record<string, any>;

    SerializationLibrary?: string;

    Name?: string;
  };

  export type PartitionInputType = {
    StorageDescriptor?: StorageDescriptorType;

    Values: string[];

    Parameters?: Record<string, any>;
  };

  /**
   * Resource Type definition for AWS::Glue::Partition
   */
  export type PartitionResourceType = {
    /**
     * Create-only property
     */
    DatabaseName: string;

    /**
     * Create-only property
     */
    TableName: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    CatalogId: string;

    PartitionInput: PartitionInputType;
  };
}
