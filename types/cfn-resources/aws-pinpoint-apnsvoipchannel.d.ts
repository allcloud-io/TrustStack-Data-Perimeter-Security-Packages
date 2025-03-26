/**
 * TypeScript definitions for AWS::Pinpoint::APNSVoipChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::APNSVoipChannel
 */
export namespace AWS_Pinpoint_APNSVoipChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::APNSVoipChannel
   */
  export type APNSVoipChannelResourceType = {
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
