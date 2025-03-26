/**
 * TypeScript definitions for AWS::KinesisAnalytics::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KinesisAnalytics::Application
 */
export namespace AWS_KinesisAnalytics_Application {
  export type InputType = {
    NamePrefix: string;

    InputSchema: InputSchemaType;

    KinesisStreamsInput?: KinesisStreamsInputType;

    KinesisFirehoseInput?: KinesisFirehoseInputType;

    InputProcessingConfiguration?: InputProcessingConfigurationType;

    InputParallelism?: InputParallelismType;
  };

  export type InputProcessingConfigurationType = {
    InputLambdaProcessor?: InputLambdaProcessorType;
  };

  export type KinesisFirehoseInputType = {
    ResourceARN: string;

    RoleARN: string;
  };

  export type KinesisStreamsInputType = {
    ResourceARN: string;

    RoleARN: string;
  };

  export type InputSchemaType = {
    RecordEncoding?: string;

    RecordColumns: RecordColumnType[];

    RecordFormat: RecordFormatType;
  };

  export type InputParallelismType = {
    Count?: number;
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

  export type InputLambdaProcessorType = {
    ResourceARN: string;

    RoleARN: string;
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
   * Resource Type definition for AWS::KinesisAnalytics::Application
   */
  export type ApplicationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApplicationName?: string;

    Inputs: InputType[];

    ApplicationDescription?: string;

    ApplicationCode?: string;
  };
}
