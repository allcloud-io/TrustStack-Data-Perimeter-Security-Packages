/**
 * TypeScript definitions for AWS::KinesisAnalyticsV2::ApplicationOutput
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput
 */
export namespace AWS_KinesisAnalyticsV2_ApplicationOutput {
  export type OutputType = {
    DestinationSchema: DestinationSchemaType;

    LambdaOutput?: LambdaOutputType;

    KinesisFirehoseOutput?: KinesisFirehoseOutputType;

    KinesisStreamsOutput?: KinesisStreamsOutputType;

    Name?: string;
  };

  export type KinesisStreamsOutputType = {
    ResourceARN: string;
  };

  export type DestinationSchemaType = {
    RecordFormatType?: string;
  };

  export type KinesisFirehoseOutputType = {
    ResourceARN: string;
  };

  export type LambdaOutputType = {
    ResourceARN: string;
  };

  /**
   * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput
   */
  export type ApplicationOutputResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApplicationName: string;

    Output: OutputType;
  };
}
