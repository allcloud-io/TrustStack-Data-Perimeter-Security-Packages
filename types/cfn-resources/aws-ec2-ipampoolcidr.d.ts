/**
 * TypeScript definitions for AWS::EC2::IPAMPoolCidr
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EC2::IPAMPoolCidr Type
 */
export namespace AWS_EC2_IPAMPoolCidr {
  /**
   * Resource Schema of AWS::EC2::IPAMPoolCidr Type
   */
  export type IPAMPoolCidrResourceType = {
    /**
     * Id of the IPAM Pool Cidr.
     * Read-only property
     */
    IpamPoolCidrId?: string;

    /**
     * Id of the IPAM Pool.
     * Create-only property
     */
    IpamPoolId: string;

    /**
     * Represents a single IPv4 or IPv6 CIDR
     * Create-only property
     */
    Cidr?: string;

    /**
     * The desired netmask length of the provision. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.
     * Create-only property
     */
    NetmaskLength?: number;

    /**
     * Provisioned state of the cidr.
     * Read-only property
     */
    State?: string;
  };
}
