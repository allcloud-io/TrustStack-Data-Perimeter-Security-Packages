/**
 * TypeScript definitions for AWS::EC2::EIP
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
 * You can allocate an Elastic IP address from an address pool owned by AWS or from an address pool created from a public IPv4 address range that you have brought to AWS for use with your AWS resources using bring your own IP addresses (BYOIP). For more information, see Bring Your Own IP Addresses (BYOIP) in the *Amazon EC2 User Guide*.
 * For more information, see Elastic IP Addresses in the *Amazon EC2 User Guide*.
 */
export namespace AWS_EC2_EIP {
  /**
   * Specifies a tag. For more information, see Add tags to a resource.
   */
  export type TagType = {
    /**
     * The tag key.
     */
    Key: string;

    /**
     * The tag value.
     */
    Value: string;
  };

  /**
   * Specifies an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
   * You can allocate an Elastic IP address from an address pool owned by AWS or from an address pool created from a public IPv4 address range that you have brought to AWS for use with your AWS resources using bring your own IP addresses (BYOIP). For more information, see Bring Your Own IP Addresses (BYOIP) in the *Amazon EC2 User Guide*.
   * For more information, see Elastic IP Addresses in the *Amazon EC2 User Guide*.
   */
  export type EIPResourceType = {
    /**
     * Read-only property
     */
    PublicIp?: string;

    /**
     * Read-only property
     */
    AllocationId?: string;

    /**
     * The network (`vpc`).
     * If you define an Elastic IP address and associate it with a VPC that is defined in the same template, you must declare a dependency on the VPC-gateway attachment by using the DependsOn Attribute on this resource.
     * Create-only property
     */
    Domain?: string;

    /**
     * A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses. Use this parameter to limit the IP address to this location. IP addresses cannot move between network border groups.
     * Use DescribeAvailabilityZones to view the network border groups.
     * Create-only property
     */
    NetworkBorderGroup?: string;

    /**
     * The Elastic IP address you are accepting for transfer. You can only accept one transferred address. For more information on Elastic IP address transfers, see Transfer Elastic IP addresses in the *Amazon Virtual Private Cloud User Guide*.
     * Create-only property
     */
    TransferAddress?: string;

    /**
     * The ID of the instance.
     * Updates to the `InstanceId` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.
     */
    InstanceId?: string;

    /**
     * The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
     * Updates to the `PublicIpv4Pool` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.
     */
    PublicIpv4Pool?: string;

    /**
     * Create-only property
     */
    IpamPoolId?: string;

    /**
     * Create-only property
     */
    Address?: string;

    /**
     * Any tags assigned to the Elastic IP address.
     * Updates to the `Tags` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.
     */
    Tags?: TagType[];
  };
}
