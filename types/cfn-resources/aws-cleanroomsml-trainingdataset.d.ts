/**
 * TypeScript definitions for AWS::CleanRoomsML::TrainingDataset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::CleanRoomsML::TrainingDataset Resource Type
 */
export namespace AWS_CleanRoomsML_TrainingDataset {
  export type ColumnSchemaType = {
    ColumnName: string;

    ColumnTypes: ColumnTypeType[];
  };

  export type ColumnTypeType = {};

  export type DataSourceType = {
    GlueDataSource: GlueDataSourceType;
  };

  export type DatasetType = {
    Type: DatasetTypeType;

    InputConfig: DatasetInputConfigType;
  };

  export type DatasetInputConfigType = {
    Schema: ColumnSchemaType[];

    DataSource: DataSourceType;
  };

  export type DatasetTypeType = {};

  export type GlueDataSourceType = {
    TableName: string;

    DatabaseName: string;

    CatalogId?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TrainingDatasetStatusType = {};

  export type UnitType = {};

  /**
   * Definition of AWS::CleanRoomsML::TrainingDataset Resource Type
   */
  export type TrainingDatasetResourceType = {
    /**
     * Create-only property
     */
    Description?: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    RoleArn: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    TrainingData: DatasetType[];

    /**
     * Read-only property
     */
    TrainingDatasetArn?: string;

    /**
     * Read-only property
     */
    Status?: TrainingDatasetStatusType;
  };
}
