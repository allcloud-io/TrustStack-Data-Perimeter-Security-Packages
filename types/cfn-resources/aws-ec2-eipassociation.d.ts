/**
 * TypeScript definitions for AWS::EC2::EIPAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. For more information about working with Elastic IP addresses, see Elastic IP address concepts and rules.
 * You must specify `AllocationId` and either `InstanceId`, `NetworkInterfaceId`, or `PrivateIpAddress`.
 */
export namespace AWS_EC2_EIPAssociation {
  /**
   * Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. For more information about working with Elastic IP addresses, see Elastic IP address concepts and rules.
   * You must specify `AllocationId` and either `InstanceId`, `NetworkInterfaceId`, or `PrivateIpAddress`.
   */
  export type EIPAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The allocation ID. This is required.
     * Create-only property
     */
    AllocationId?: string;

    /**
     * The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.
     * You can specify either the instance ID or the network interface ID, but not both.
     * Create-only property
     */
    NetworkInterfaceId?: string;

    /**
     * The ID of the instance. The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.
     * Create-only property
     */
    InstanceId?: string;

    /**
     * The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.
     * Create-only property
     */
    PrivateIpAddress?: string;

    /**
     * Create-only property
     */
    EIP?: string;
  };
}
