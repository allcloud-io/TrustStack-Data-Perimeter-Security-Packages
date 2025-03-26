/**
 * TypeScript definitions for AWS::Pinpoint::APNSSandboxChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::APNSSandboxChannel
 */
export namespace AWS_Pinpoint_APNSSandboxChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::APNSSandboxChannel
   */
  export type APNSSandboxChannelResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    BundleId?: string;

    PrivateKey?: string;

    Enabled?: boolean;

    DefaultAuthenticationMethod?: string;

    TokenKey?: string;

    /**
     * Create-only property
     */
    ApplicationId: string;

    TeamId?: string;

    Certificate?: string;

    TokenKeyId?: string;
  };
}
