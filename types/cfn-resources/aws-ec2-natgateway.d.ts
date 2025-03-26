/**
 * TypeScript definitions for AWS::EC2::NatGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a network address translation (NAT) gateway in the specified subnet. You can create either a public NAT gateway or a private NAT gateway. The default is a public NAT gateway. If you create a public NAT gateway, you must specify an elastic IP address.
 * With a NAT gateway, instances in a private subnet can connect to the internet, other AWS services, or an on-premises network using the IP address of the NAT gateway. For more information, see NAT gateways in the *Amazon VPC User Guide*.
 * If you add a default route (`AWS::EC2::Route` resource) that points to a NAT gateway, specify the NAT gateway ID for the route's `NatGatewayId` property.
 * When you associate an Elastic IP address or secondary Elastic IP address with a public NAT gateway, the network border group of the Elastic IP address must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. Otherwise, the NAT gateway fails to launch. You can see the network border group for the AZ by viewing the details of the subnet. Similarly, you can view the network border group for the Elastic IP address by viewing its details. For more information, see Allocate an Elastic IP address in the *Amazon VPC User Guide*.
 */
export namespace AWS_EC2_NatGateway {
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
   * Specifies a network address translation (NAT) gateway in the specified subnet. You can create either a public NAT gateway or a private NAT gateway. The default is a public NAT gateway. If you create a public NAT gateway, you must specify an elastic IP address.
   * With a NAT gateway, instances in a private subnet can connect to the internet, other AWS services, or an on-premises network using the IP address of the NAT gateway. For more information, see NAT gateways in the *Amazon VPC User Guide*.
   * If you add a default route (`AWS::EC2::Route` resource) that points to a NAT gateway, specify the NAT gateway ID for the route's `NatGatewayId` property.
   * When you associate an Elastic IP address or secondary Elastic IP address with a public NAT gateway, the network border group of the Elastic IP address must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. Otherwise, the NAT gateway fails to launch. You can see the network border group for the AZ by viewing the details of the subnet. Similarly, you can view the network border group for the Elastic IP address by viewing its details. For more information, see Allocate an Elastic IP address in the *Amazon VPC User Guide*.
   */
  export type NatGatewayResourceType = {
    /**
     * Secondary EIP allocation IDs. For more information, see Create a NAT gateway in the *Amazon VPC User Guide*.
     */
    SecondaryAllocationIds?: string[];

    /**
     * The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
     * Create-only property
     */
    PrivateIpAddress?: string;

    /**
     * Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.
     * Create-only property
     */
    ConnectivityType?: string;

    /**
     * Secondary private IPv4 addresses. For more information about secondary addresses, see Create a NAT gateway in the *Amazon Virtual Private Cloud User Guide*.
     * `SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.
     */
    SecondaryPrivateIpAddresses?: string[];

    /**
     * [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see Create a NAT gateway in the *Amazon Virtual Private Cloud User Guide*.
     * `SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.
     */
    SecondaryPrivateIpAddressCount?: number;

    /**
     * [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.
     * Create-only property
     */
    AllocationId?: string;

    /**
     * The ID of the subnet in which the NAT gateway is located.
     * Create-only property
     */
    SubnetId: string;

    /**
     * Read-only property
     */
    NatGatewayId?: string;

    /**
     * The tags for the NAT gateway.
     */
    Tags?: TagType[];

    /**
     * The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.
     */
    MaxDrainDurationSeconds?: number;
  };
}
