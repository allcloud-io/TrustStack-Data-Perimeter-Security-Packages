/**
 * TypeScript definitions for AWS::Cognito::LogDeliveryConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::LogDeliveryConfiguration
 */
export namespace AWS_Cognito_LogDeliveryConfiguration {
  export type CloudWatchLogsConfigurationType = {
    LogGroupArn?: string;
  };

  export type S3ConfigurationType = {
    BucketArn?: string;
  };

  export type FirehoseConfigurationType = {
    StreamArn?: string;
  };

  export type LogConfigurationType = {
    LogLevel?: string;

    EventSource?: string;

    CloudWatchLogsConfiguration?: CloudWatchLogsConfigurationType;

    S3Configuration?: S3ConfigurationType;

    FirehoseConfiguration?: FirehoseConfigurationType;
  };

  export type LogConfigurationsType = {};

  /**
   * Resource Type definition for AWS::Cognito::LogDeliveryConfiguration
   */
  export type LogDeliveryConfigurationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    UserPoolId: string;

    LogConfigurations?: LogConfigurationsType;
  };
}
