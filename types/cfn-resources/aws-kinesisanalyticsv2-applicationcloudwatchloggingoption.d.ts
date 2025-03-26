/**
 * TypeScript definitions for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
 */
export namespace AWS_KinesisAnalyticsV2_ApplicationCloudWatchLoggingOption {
  export type CloudWatchLoggingOptionType = {
    LogStreamARN: string;
  };

  /**
   * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
   */
  export type ApplicationCloudWatchLoggingOptionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApplicationName: string;

    CloudWatchLoggingOption: CloudWatchLoggingOptionType;
  };
}
