/**
 * TypeScript definitions for AWS::Pinpoint::BaiduChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::BaiduChannel
 */
export namespace AWS_Pinpoint_BaiduChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::BaiduChannel
   */
  export type BaiduChannelResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    SecretKey: string;

    ApiKey: string;

    Enabled?: boolean;

    /**
     * Create-only property
     */
    ApplicationId: string;
  };
}
