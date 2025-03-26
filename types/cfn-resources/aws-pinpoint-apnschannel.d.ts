/**
 * TypeScript definitions for AWS::Pinpoint::APNSChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::APNSChannel
 */
export namespace AWS_Pinpoint_APNSChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::APNSChannel
   */
  export type APNSChannelResourceType = {
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
