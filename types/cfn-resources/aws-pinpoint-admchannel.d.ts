/**
 * TypeScript definitions for AWS::Pinpoint::ADMChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::ADMChannel
 */
export namespace AWS_Pinpoint_ADMChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::ADMChannel
   */
  export type ADMChannelResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    ClientSecret: string;

    Enabled?: boolean;

    ClientId: string;

    /**
     * Create-only property
     */
    ApplicationId: string;
  };
}
