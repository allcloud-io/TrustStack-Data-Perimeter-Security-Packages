/**
 * TypeScript definitions for AWS::Lightsail::StaticIp
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lightsail::StaticIp
 */
export namespace AWS_Lightsail_StaticIp {
  /**
   * Resource Type definition for AWS::Lightsail::StaticIp
   */
  export type StaticIpResourceType = {
    /**
     * The name of the static IP address.
     * Create-only property
     */
    StaticIpName: string;

    /**
     * The instance where the static IP is attached.
     */
    AttachedTo?: string;

    /**
     * A Boolean value indicating whether the static IP is attached.
     * Read-only property
     */
    IsAttached?: boolean;

    /**
     * The static IP address.
     * Read-only property
     */
    IpAddress?: string;

    /**
     * Read-only property
     */
    StaticIpArn?: string;
  };
}
