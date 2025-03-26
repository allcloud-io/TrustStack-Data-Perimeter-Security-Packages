/**
 * TypeScript definitions for AWS::MediaPackageV2::OriginEndpointPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * <p>Represents a resource policy that allows or denies access to an origin endpoint.</p>
 */
export namespace AWS_MediaPackageV2_OriginEndpointPolicy {
  /**
   * <p>Represents a resource policy that allows or denies access to an origin endpoint.</p>
   */
  export type OriginEndpointPolicyResourceType = {
    /**
     * Create-only property
     */
    ChannelGroupName: string;

    /**
     * Create-only property
     */
    ChannelName: string;

    /**
     * Create-only property
     */
    OriginEndpointName: string;

    Policy: Record<string, any> | string;
  };
}
