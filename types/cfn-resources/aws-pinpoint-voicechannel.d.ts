/**
 * TypeScript definitions for AWS::Pinpoint::VoiceChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::VoiceChannel
 */
export namespace AWS_Pinpoint_VoiceChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::VoiceChannel
   */
  export type VoiceChannelResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Enabled?: boolean;

    /**
     * Create-only property
     */
    ApplicationId: string;
  };
}
