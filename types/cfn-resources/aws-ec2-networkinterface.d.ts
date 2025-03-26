/**
 * TypeScript definitions for AWS::EC2::NetworkInterface
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::NetworkInterface resource creates network interface
 */
export namespace AWS_EC2_NetworkInterface {
  export type PrivateIpAddressSpecificationType = {
    PrivateIpAddress: string;

    Primary: boolean;
  };

  export type Ipv4PrefixSpecificationType = {
    Ipv4Prefix: string;
  };

  export type InstanceIpv6AddressType = {
    Ipv6Address: string;
  };

  export type Ipv6PrefixSpecificationType = {
    Ipv6Prefix: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type ConnectionTrackingSpecificationType = {
    UdpTimeout?: number;

    TcpEstablishedTimeout?: number;

    UdpStreamTimeout?: number;
  };

  /**
   * The AWS::EC2::NetworkInterface resource creates network interface
   */
  export type NetworkInterfaceResourceType = {
    /**
     * A description for the network interface.
     */
    Description?: string;

    /**
     * Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.
     * Create-only property
     */
    PrivateIpAddress?: string;

    /**
     * The primary IPv6 address
     * Read-only property
     */
    PrimaryIpv6Address?: string;

    /**
     * Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.
     */
    PrivateIpAddresses?: PrivateIpAddressSpecificationType[];

    /**
     * The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses
     */
    SecondaryPrivateIpAddressCount?: number;

    /**
     * The number of IPv6 prefixes to assign to a network interface. When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
     */
    Ipv6PrefixCount?: number;

    /**
     * Returns the primary private IP address of the network interface.
     * Read-only property
     */
    PrimaryPrivateIpAddress?: string;

    /**
     * Assigns a list of IPv4 prefixes to the network interface. If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
     */
    Ipv4Prefixes?: Ipv4PrefixSpecificationType[];

    /**
     * The number of IPv4 prefixes to assign to a network interface. When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
     */
    Ipv4PrefixCount?: number;

    /**
     * If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address. Enable this option to automatically assign an IPv6 associated with the ENI attached to your instance to be the primary IPv6 address. When you enable an IPv6 address to be a primary IPv6, you cannot disable it. Traffic will be routed to the primary IPv6 address until the instance is terminated or the ENI is detached. If you have multiple IPv6 addresses associated with an ENI and you enable a primary IPv6 address, the first IPv6 address associated with the ENI becomes the primary IPv6 address.
     */
    EnablePrimaryIpv6?: boolean;

    /**
     * A list of security group IDs associated with this network interface.
     */
    GroupSet?: string[];

    /**
     * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.
     */
    Ipv6Addresses?: InstanceIpv6AddressType[];

    /**
     * Assigns a list of IPv6 prefixes to the network interface. If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
     */
    Ipv6Prefixes?: Ipv6PrefixSpecificationType[];

    /**
     * The ID of the subnet to associate with the network interface.
     * Create-only property
     */
    SubnetId: string;

    /**
     * Indicates whether traffic to or from the instance is validated.
     */
    SourceDestCheck?: boolean;

    /**
     * Indicates the type of network interface.
     * Create-only property
     */
    InterfaceType?: string;

    /**
     * Returns the secondary private IP addresses of the network interface.
     * Read-only property
     */
    SecondaryPrivateIpAddresses?: string[];

    /**
     * The ID of the VPC
     * Read-only property
     */
    VpcId?: string;

    /**
     * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.
     */
    Ipv6AddressCount?: number;

    /**
     * Network interface id.
     * Read-only property
     */
    Id?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this network interface.
     */
    Tags?: TagType[];

    ConnectionTrackingSpecification?: ConnectionTrackingSpecificationType;
  };
}
