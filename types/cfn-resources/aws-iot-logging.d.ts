/**
 * TypeScript definitions for AWS::IoT::Logging
 * Generated from CloudFormation Resource Schema
 */

/**
 * Logging Options enable you to configure your IoT V2 logging role and default logging level so that you can monitor progress events logs as it passes from your devices through Iot core service.
 */
export namespace AWS_IoT_Logging {
  /**
   * Logging Options enable you to configure your IoT V2 logging role and default logging level so that you can monitor progress events logs as it passes from your devices through Iot core service.
   */
  export type LoggingResourceType = {
    /**
     * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
     * Create-only property
     */
    AccountId: string;

    /**
     * The ARN of the role that allows IoT to write to Cloudwatch logs.
     */
    RoleArn: string;

    /**
     * The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
     */
    DefaultLogLevel: string;
  };
}
