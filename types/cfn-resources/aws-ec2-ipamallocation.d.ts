/**
 * TypeScript definitions for AWS::EC2::IPAMAllocation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EC2::IPAMAllocation Type
 */
export namespace AWS_EC2_IPAMAllocation {
  /**
   * Represents an IPAM custom allocation of a single IPv4 or IPv6 CIDR
   */
  export type CidrType = {};

  /**
   * Resource Schema of AWS::EC2::IPAMAllocation Type
   */
  export type IPAMAllocationResourceType = {
    /**
     * Id of the allocation.
     * Read-only property
     */
    IpamPoolAllocationId?: string;

    /**
     * Id of the IPAM Pool.
     * Create-only property
     */
    IpamPoolId: string;

    /**
     * Create-only property
     */
    Cidr?: CidrType;

    /**
     * The desired netmask length of the allocation. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.
     * Create-only property
     */
    NetmaskLength?: number;

    /**
     * Create-only property
     */
    Description?: string;
  };
}
