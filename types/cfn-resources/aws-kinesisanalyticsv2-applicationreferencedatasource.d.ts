/**
 * TypeScript definitions for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
 */
export namespace AWS_KinesisAnalyticsV2_ApplicationReferenceDataSource {
  export type ReferenceDataSourceType = {
    ReferenceSchema: ReferenceSchemaType;

    TableName?: string;

    S3ReferenceDataSource?: S3ReferenceDataSourceType;
  };

  export type ReferenceSchemaType = {
    RecordEncoding?: string;

    RecordColumns: RecordColumnType[];

    RecordFormat: RecordFormatType;
  };

  export type S3ReferenceDataSourceType = {
    BucketARN: string;

    FileKey: string;
  };

  export type RecordColumnType = {
    Mapping?: string;

    SqlType: string;

    Name: string;
  };

  export type RecordFormatType = {
    MappingParameters?: MappingParametersType;

    RecordFormatType: string;
  };

  export type MappingParametersType = {
    JSONMappingParameters?: JSONMappingParametersType;

    CSVMappingParameters?: CSVMappingParametersType;
  };

  export type JSONMappingParametersType = {
    RecordRowPath: string;
  };

  export type CSVMappingParametersType = {
    RecordRowDelimiter: string;

    RecordColumnDelimiter: string;
  };

  /**
   * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
   */
  export type ApplicationReferenceDataSourceResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApplicationName: string;

    ReferenceDataSource: ReferenceDataSourceType;
  };
}
