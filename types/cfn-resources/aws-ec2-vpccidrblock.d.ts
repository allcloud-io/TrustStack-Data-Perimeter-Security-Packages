/**
 * TypeScript definitions for AWS::EC2::VPCCidrBlock
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::VPCCidrBlock
 */
export namespace AWS_EC2_VPCCidrBlock {
  /**
   * Resource Type definition for AWS::EC2::VPCCidrBlock
   */
  export type VPCCidrBlockResourceType = {
    /**
     * An IPv4 CIDR block to associate with the VPC.
     * Create-only property
     */
    CidrBlock?: string;

    /**
     * The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
     * Create-only property
     */
    Ipv6Pool?: string;

    /**
     * The Id of the VPC associated CIDR Block.
     * Read-only property
     */
    Id?: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;

    /**
     * An IPv6 CIDR block from the IPv6 address pool.
     * Create-only property
     */
    Ipv6CidrBlock?: string;

    /**
     * The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.
     * Create-only property
     */
    Ipv4IpamPoolId?: string;

    /**
     * The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.
     * Create-only property
     */
    Ipv4NetmaskLength?: number;

    /**
     * The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.
     * Create-only property
     */
    Ipv6IpamPoolId?: string;

    /**
     * The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.
     * Create-only property
     */
    Ipv6NetmaskLength?: number;

    /**
     * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block.
     * Create-only property
     */
    AmazonProvidedIpv6CidrBlock?: boolean;

    /**
     * The value denoting whether an IPv6 VPC CIDR Block is public or private.
     * Read-only property
     */
    Ipv6AddressAttribute?: string;

    /**
     * The IP Source of an IPv6 VPC CIDR Block.
     * Read-only property
     */
    IpSource?: string;

    /**
     * The name of the location from which we advertise the IPV6 CIDR block.
     * Create-only property
     */
    Ipv6CidrBlockNetworkBorderGroup?: string;
  };
}
