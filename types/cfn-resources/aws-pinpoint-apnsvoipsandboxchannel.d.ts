/**
 * TypeScript definitions for AWS::Pinpoint::APNSVoipSandboxChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::APNSVoipSandboxChannel
 */
export namespace AWS_Pinpoint_APNSVoipSandboxChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::APNSVoipSandboxChannel
   */
  export type APNSVoipSandboxChannelResourceType = {
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
