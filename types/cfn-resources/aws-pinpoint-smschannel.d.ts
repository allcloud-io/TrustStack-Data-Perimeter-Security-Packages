/**
 * TypeScript definitions for AWS::Pinpoint::SMSChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::SMSChannel
 */
export namespace AWS_Pinpoint_SMSChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::SMSChannel
   */
  export type SMSChannelResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    ShortCode?: string;

    Enabled?: boolean;

    /**
     * Create-only property
     */
    ApplicationId: string;

    SenderId?: string;
  };
}
