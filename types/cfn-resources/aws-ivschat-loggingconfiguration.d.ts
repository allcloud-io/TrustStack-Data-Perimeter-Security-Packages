/**
 * TypeScript definitions for AWS::IVSChat::LoggingConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::IVSChat::LoggingConfiguration.
 */
export namespace AWS_IVSChat_LoggingConfiguration {
  /**
   * Destination configuration for IVS Chat logging.
   */
  export type DestinationConfigurationType = {
    CloudWatchLogs?: CloudWatchLogsDestinationConfigurationType;

    Firehose?: FirehoseDestinationConfigurationType;

    S3?: S3DestinationConfigurationType;
  };

  /**
   * CloudWatch destination configuration for IVS Chat logging.
   */
  export type CloudWatchLogsDestinationConfigurationType = {
    /**
     * Name of the Amazon CloudWatch Logs log group where chat activity will be logged.
     */
    LogGroupName: string;
  };

  /**
   * Kinesis Firehose destination configuration for IVS Chat logging.
   */
  export type FirehoseDestinationConfigurationType = {
    /**
     * Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.
     */
    DeliveryStreamName: string;
  };

  /**
   * S3 destination configuration for IVS Chat logging.
   */
  export type S3DestinationConfigurationType = {
    /**
     * Name of the Amazon S3 bucket where chat activity will be logged.
     */
    BucketName: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource type definition for AWS::IVSChat::LoggingConfiguration.
   */
  export type LoggingConfigurationResourceType = {
    /**
     * LoggingConfiguration ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * The system-generated ID of the logging configuration.
     * Read-only property
     */
    Id?: string;

    DestinationConfiguration: DestinationConfigurationType;

    /**
     * The name of the logging configuration. The value does not need to be unique.
     */
    Name?: string;

    /**
     * The state of the logging configuration. When the state is ACTIVE, the configuration is ready to log chat content.
     * Read-only property
     */
    State?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
