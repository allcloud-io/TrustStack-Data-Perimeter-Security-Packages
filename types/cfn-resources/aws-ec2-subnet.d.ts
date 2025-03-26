/**
 * TypeScript definitions for AWS::EC2::Subnet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a subnet for the specified VPC.
 * For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block.
 * For more information, see Subnets for your VPC in the *Amazon VPC User Guide*.
 */
export namespace AWS_EC2_Subnet {
  /**
   * Specifies a tag. For more information, see Resource tags.
   */
  export type TagType = {
    /**
     * The tag value.
     */
    Value: string;

    /**
     * The tag key.
     */
    Key: string;
  };

  /**
   * Specifies a subnet for the specified VPC.
   * For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block.
   * For more information, see Subnets for your VPC in the *Amazon VPC User Guide*.
   */
  export type SubnetResourceType = {
    /**
     * Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is `false`.
     * If you specify `AssignIpv6AddressOnCreation`, you must also specify an IPv6 CIDR block.
     */
    AssignIpv6AddressOnCreation?: boolean;

    /**
     * The ID of the VPC the subnet is in.
     * If you update this property, you must also update the `CidrBlock` property.
     * Create-only property
     */
    VpcId: string;

    /**
     * Indicates whether instances launched in this subnet receive a public IPv4 address. The default value is `false`.
     * AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the VPC pricing page.
     */
    MapPublicIpOnLaunch?: boolean;

    /**
     * Indicates the device position for local network interfaces in this subnet. For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1).
     */
    EnableLniAtDeviceIndex?: number;

    /**
     * Read-only property
     */
    NetworkAclAssociationId?: string;

    /**
     * The Availability Zone of the subnet.
     * If you update this property, you must also update the `CidrBlock` property.
     * Create-only property
     */
    AvailabilityZone?: string;

    /**
     * The AZ ID of the subnet.
     * Create-only property
     */
    AvailabilityZoneId?: string;

    /**
     * The IPv4 CIDR block assigned to the subnet.
     * If you update this property, we create a new subnet, and then delete the existing one.
     * Create-only property
     */
    CidrBlock?: string;

    /**
     * Read-only property
     */
    SubnetId?: string;

    /**
     * Read-only property
     */
    Ipv6CidrBlocks?: string[];

    /**
     * The IPv6 CIDR block.
     * If you specify `AssignIpv6AddressOnCreation`, you must also specify an IPv6 CIDR block.
     */
    Ipv6CidrBlock?: string;

    /**
     * The Amazon Resource Name (ARN) of the Outpost.
     * Create-only property
     */
    OutpostArn?: string;

    /**
     * Indicates whether this is an IPv6 only subnet. For more information, see Subnet basics in the *User Guide*.
     * Create-only property
     */
    Ipv6Native?: boolean;

    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     * You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a `0.0.0.0/0` route pointing to the internet gateway. For more information, see Configure DNS64 and NAT64 in the *User Guide*.
     */
    EnableDns64?: boolean;

    /**
     * The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. For more information, see Amazon EC2 instance hostname types in the *User Guide*.
     * Available options:
     * +  EnableResourceNameDnsAAAARecord (true | false)
     * +  EnableResourceNameDnsARecord (true | false)
     * +  HostnameType (ip-name | resource-name)
     */
    PrivateDnsNameOptionsOnLaunch?: Record<string, any>;

    /**
     * Any tags assigned to the subnet.
     */
    Tags?: TagType[];

    /**
     * An IPv4 IPAM pool ID for the subnet.
     * Create-only property
     */
    Ipv4IpamPoolId?: string;

    /**
     * An IPv4 netmask length for the subnet.
     * Create-only property
     */
    Ipv4NetmaskLength?: number;

    /**
     * An IPv6 IPAM pool ID for the subnet.
     * Create-only property
     */
    Ipv6IpamPoolId?: string;

    /**
     * An IPv6 netmask length for the subnet.
     * Create-only property
     */
    Ipv6NetmaskLength?: number;
  };
}
