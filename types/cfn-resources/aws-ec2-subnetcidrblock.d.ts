/**
 * TypeScript definitions for AWS::EC2::SubnetCidrBlock
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::SubnetCidrBlock resource creates association between subnet and IPv6 CIDR
 */
export namespace AWS_EC2_SubnetCidrBlock {
  /**
   * The AWS::EC2::SubnetCidrBlock resource creates association between subnet and IPv6 CIDR
   */
  export type SubnetCidrBlockResourceType = {
    /**
     * Information about the IPv6 association.
     * Read-only property
     */
    Id?: string;

    /**
     * The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length
     * Create-only property
     */
    Ipv6CidrBlock?: string;

    /**
     * The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR
     * Create-only property
     */
    Ipv6IpamPoolId?: string;

    /**
     * The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool
     * Create-only property
     */
    Ipv6NetmaskLength?: number;

    /**
     * The ID of the subnet
     * Create-only property
     */
    SubnetId: string;

    /**
     * The value denoting whether an IPv6 Subnet CIDR Block is public or private.
     * Read-only property
     */
    Ipv6AddressAttribute?: string;

    /**
     * The IP Source of an IPv6 Subnet CIDR Block.
     * Read-only property
     */
    IpSource?: string;
  };
}
