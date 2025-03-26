/**
 * TypeScript definitions for AWS::KinesisAnalytics::ApplicationOutput
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KinesisAnalytics::ApplicationOutput
 */
export namespace AWS_KinesisAnalytics_ApplicationOutput {
  export type OutputType = {
    DestinationSchema: DestinationSchemaType;

    LambdaOutput?: LambdaOutputType;

    KinesisFirehoseOutput?: KinesisFirehoseOutputType;

    KinesisStreamsOutput?: KinesisStreamsOutputType;

    Name?: string;
  };

  export type KinesisStreamsOutputType = {
    ResourceARN: string;

    RoleARN: string;
  };

  export type KinesisFirehoseOutputType = {
    ResourceARN: string;

    RoleARN: string;
  };

  export type LambdaOutputType = {
    ResourceARN: string;

    RoleARN: string;
  };

  export type DestinationSchemaType = {
    RecordFormatType?: string;
  };

  /**
   * Resource Type definition for AWS::KinesisAnalytics::ApplicationOutput
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
