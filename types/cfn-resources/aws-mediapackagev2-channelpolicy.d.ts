/**
 * TypeScript definitions for AWS::MediaPackageV2::ChannelPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * <p>Represents a resource-based policy that allows or denies access to a channel.</p>
 */
export namespace AWS_MediaPackageV2_ChannelPolicy {
  /**
   * <p>Represents a resource-based policy that allows or denies access to a channel.</p>
   */
  export type ChannelPolicyResourceType = {
    /**
     * Create-only property
     */
    ChannelGroupName: string;

    /**
     * Create-only property
     */
    ChannelName: string;

    Policy: Record<string, any> | string;
  };
}
