/**
 * TypeScript definitions for AWS::AutoScaling::LaunchConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::AutoScaling::LaunchConfiguration resource specifies the launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances.
 */
export namespace AWS_AutoScaling_LaunchConfiguration {
  /**
   * MetadataOptions is a property of AWS::AutoScaling::LaunchConfiguration that describes metadata options for the instances.
   */
  export type MetadataOptionsType = {
    /**
     * The desired HTTP PUT response hop limit for instance metadata requests.
     */
    HttpPutResponseHopLimit?: number;

    /**
     * The state of token usage for your instance metadata requests.
     */
    HttpTokens?: string;

    /**
     * This parameter enables or disables the HTTP metadata endpoint on your instances.
     */
    HttpEndpoint?: string;
  };

  /**
   * BlockDeviceMapping is a property of AWS::AutoScaling::LaunchConfiguration that describes a block device mapping for an Auto Scaling group.
   */
  export type BlockDeviceMappingType = {
    /**
     * Parameters used to automatically set up EBS volumes when an instance is launched.
     */
    Ebs?: BlockDeviceType;

    /**
     * Setting this value to true suppresses the specified device included in the block device mapping of the AMI.
     */
    NoDevice?: boolean;

    /**
     * The name of the virtual device.
     */
    VirtualName?: string;

    /**
     * The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh).
     */
    DeviceName: string;
  };

  /**
   * BlockDevice is a subproperty of BlockDeviceMapping that describes an Amazon EBS volume.
   */
  export type BlockDeviceType = {
    /**
     * The snapshot ID of the volume to use.
     */
    SnapshotId?: string;

    /**
     * The volume type.
     */
    VolumeType?: string;

    /**
     * Specifies whether the volume should be encrypted.
     */
    Encrypted?: boolean;

    /**
     * The throughput (MiBps) to provision for a gp3 volume.
     */
    Throughput?: number;

    /**
     * The number of input/output (I/O) operations per second (IOPS) to provision for the volume.
     */
    Iops?: number;

    /**
     * The volume size, in GiBs.
     */
    VolumeSize?: number;

    /**
     * Indicates whether the volume is deleted on instance termination.
     */
    DeleteOnTermination?: boolean;
  };

  /**
   * The AWS::AutoScaling::LaunchConfiguration resource specifies the launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances.
   */
  export type LaunchConfigurationResourceType = {
    /**
     * The tenancy of the instance, either default or dedicated.
     * Create-only property
     */
    PlacementTenancy?: string;

    /**
     * A list that contains the security groups to assign to the instances in the Auto Scaling group.
     * Create-only property
     */
    SecurityGroups?: string[];

    /**
     * The name of the launch configuration. This name must be unique per Region per account.
     * Create-only property
     */
    LaunchConfigurationName?: string;

    /**
     * The metadata options for the instances.
     * Create-only property
     */
    MetadataOptions?: MetadataOptionsType;

    /**
     * The ID of the Amazon EC2 instance you want to use to create the launch configuration.
     * Create-only property
     */
    InstanceId?: string;

    /**
     * The Base64-encoded user data to make available to the launched EC2 instances.
     * Create-only property
     */
    UserData?: string;

    /**
     * The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.
     * Create-only property
     */
    ClassicLinkVPCSecurityGroups?: string[];

    /**
     * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
     * Create-only property
     */
    BlockDeviceMappings?: BlockDeviceMappingType[];

    /**
     * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.
     * Create-only property
     */
    IamInstanceProfile?: string;

    /**
     * Provides the ID of the kernel associated with the EC2 AMI.
     * Create-only property
     */
    KernelId?: string;

    /**
     * For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.
     * Create-only property
     */
    AssociatePublicIpAddress?: boolean;

    /**
     * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.
     * Create-only property
     */
    ClassicLinkVPCId?: string;

    /**
     * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).
     * Create-only property
     */
    EbsOptimized?: boolean;

    /**
     * Provides the name of the EC2 key pair.
     * Create-only property
     */
    KeyName?: string;

    /**
     * The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.
     * Create-only property
     */
    SpotPrice?: string;

    /**
     * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
     * Create-only property
     */
    ImageId: string;

    /**
     * Specifies the instance type of the EC2 instance.
     * Create-only property
     */
    InstanceType: string;

    /**
     * The ID of the RAM disk to select.
     * Create-only property
     */
    RamDiskId?: string;

    /**
     * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.
     * Create-only property
     */
    InstanceMonitoring?: boolean;
  };
}
