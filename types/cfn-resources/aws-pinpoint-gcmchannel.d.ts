/**
 * TypeScript definitions for AWS::Pinpoint::GCMChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::GCMChannel
 */
export namespace AWS_Pinpoint_GCMChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::GCMChannel
   */
  export type GCMChannelResourceType = {
    Enabled?: boolean;

    ServiceJson?: string;

    DefaultAuthenticationMethod?: string;

    ApiKey?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApplicationId: string;
  };
}
