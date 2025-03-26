/**
 * TypeScript definitions for AWS::MediaTailor::ChannelPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaTailor::ChannelPolicy Resource Type
 */
export namespace AWS_MediaTailor_ChannelPolicy {
  /**
   * Definition of AWS::MediaTailor::ChannelPolicy Resource Type
   */
  export type ChannelPolicyResourceType = {
    /**
     * Create-only property
     */
    ChannelName: string;

    /**
     * <p>The IAM policy for the channel. IAM policies are used to control access to your channel.</p>
     */
    Policy: Record<string, any> | string;
  };
}
