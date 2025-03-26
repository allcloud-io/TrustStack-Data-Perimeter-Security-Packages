/**
 * TypeScript definitions for AWS::EC2::Host
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::Host
 */
export namespace AWS_EC2_Host {
  /**
   * Resource Type definition for AWS::EC2::Host
   */
  export type HostResourceType = {
    /**
     * ID of the host created.
     * Read-only property
     */
    HostId?: string;

    /**
     * Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID.
     */
    AutoPlacement?: string;

    /**
     * The Availability Zone in which to allocate the Dedicated Host.
     * Create-only property
     */
    AvailabilityZone: string;

    /**
     * Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default.
     */
    HostRecovery?: string;

    /**
     * Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only.
     * Create-only property
     */
    InstanceType?: string;

    /**
     * Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family.
     * Create-only property
     */
    InstanceFamily?: string;

    /**
     * The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.
     * Create-only property
     */
    OutpostArn?: string;

    /**
     * Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host.
     */
    HostMaintenance?: string;

    /**
     * The ID of the Outpost hardware asset.
     * Create-only property
     */
    AssetId?: string;
  };
}
