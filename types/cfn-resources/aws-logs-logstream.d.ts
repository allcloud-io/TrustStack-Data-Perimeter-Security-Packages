/**
 * TypeScript definitions for AWS::Logs::LogStream
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Logs::LogStream
 */
export namespace AWS_Logs_LogStream {
  /**
   * Resource Type definition for AWS::Logs::LogStream
   */
  export type LogStreamResourceType = {
    /**
     * The name of the log stream. The name must be unique wihtin the log group.
     * Create-only property
     */
    LogStreamName?: string;

    /**
     * The name of the log group where the log stream is created.
     * Create-only property
     */
    LogGroupName: string;
  };
}
