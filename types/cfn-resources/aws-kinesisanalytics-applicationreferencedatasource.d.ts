/**
 * TypeScript definitions for AWS::KinesisAnalytics::ApplicationReferenceDataSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource
 */
export namespace AWS_KinesisAnalytics_ApplicationReferenceDataSource {
  export type ReferenceDataSourceType = {
    ReferenceSchema: ReferenceSchemaType;

    TableName?: string;

    S3ReferenceDataSource?: S3ReferenceDataSourceType;
  };

  export type S3ReferenceDataSourceType = {
    BucketARN: string;

    FileKey: string;

    ReferenceRoleARN: string;
  };

  export type ReferenceSchemaType = {
    RecordEncoding?: string;

    RecordColumns: RecordColumnType[];

    RecordFormat: RecordFormatType;
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

  export type CSVMappingParametersType = {
    RecordRowDelimiter: string;

    RecordColumnDelimiter: string;
  };

  export type JSONMappingParametersType = {
    RecordRowPath: string;
  };

  /**
   * Resource Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource
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
