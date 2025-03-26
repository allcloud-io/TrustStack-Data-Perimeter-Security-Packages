/**
 * TypeScript definitions for AWS::EC2::Instance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::Instance
 */
export namespace AWS_EC2_Instance {
  export type LaunchTemplateSpecificationType = {
    /**
     * The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
     */
    LaunchTemplateName?: string;

    /**
     * The version number of the launch template.
     */
    Version?: string;

    /**
     * The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
     */
    LaunchTemplateId?: string;
  };

  export type LicenseSpecificationType = {
    /**
     * The Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn: string;
  };

  export type ElasticGpuSpecificationType = {
    /**
     * The type of Elastic Graphics accelerator.
     */
    Type: string;
  };

  export type InstanceIpv6AddressType = {
    /**
     * The IPv6 address.
     */
    Ipv6Address: string;
  };

  export type NetworkInterfaceType = {
    /**
     * The description of the network interface.
     */
    Description?: string;

    /**
     * The private IPv4 address of the network interface.
     */
    PrivateIpAddress?: string;

    /**
     * One or more private IPv4 addresses to assign to the network interface.
     */
    PrivateIpAddresses?: PrivateIpAddressSpecificationType[];

    /**
     * The number of secondary private IPv4 addresses.
     */
    SecondaryPrivateIpAddressCount?: number;

    /**
     * The position of the network interface in the attachment order. A primary network interface has a device index of 0.
     */
    DeviceIndex: string;

    /**
     * The IDs of the security groups for the network interface.
     */
    GroupSet?: string[];

    /**
     * The IPv6 addresses associated with the network interface.
     */
    Ipv6Addresses?: InstanceIpv6AddressType[];

    /**
     * The ID of the subnet.
     */
    SubnetId?: string;

    /**
     * Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.
     */
    AssociatePublicIpAddress?: boolean;

    /**
     * The ID of the network interface.
     */
    NetworkInterfaceId?: string;

    /**
     * Not currently supported by AWS CloudFormation.
     */
    AssociateCarrierIpAddress?: boolean;

    /**
     * A number of IPv6 addresses to assign to the network interface.
     */
    Ipv6AddressCount?: number;

    /**
     * If set to true, the interface is deleted when the instance is terminated.
     */
    DeleteOnTermination?: boolean;
  };

  export type PrivateDnsNameOptionsType = {
    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
     */
    EnableResourceNameDnsARecord?: boolean;

    /**
     * The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
     */
    HostnameType?: string;

    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
     */
    EnableResourceNameDnsAAAARecord?: boolean;
  };

  export type ElasticInferenceAcceleratorType = {
    /**
     * The type of elastic inference accelerator.
     */
    Type: string;

    /**
     * The number of elastic inference accelerators to attach to the instance.
     */
    Count?: number;
  };

  export type AssociationParameterType = {
    /**
     * The value of an input parameter.
     */
    Value: string[];

    /**
     * The name of an input parameter that is in the associated SSM document.
     */
    Key: string;
  };

  export type SsmAssociationType = {
    /**
     * The input parameter values to use with the associated SSM document.
     */
    AssociationParameters?: AssociationParameterType[];

    /**
     * The name of an SSM document to associate with the instance.
     */
    DocumentName: string;
  };

  export type PrivateIpAddressSpecificationType = {
    /**
     * The private IPv4 addresses.
     */
    PrivateIpAddress: string;

    /**
     * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
     */
    Primary: boolean;
  };

  export type VolumeType = {
    /**
     * The ID of the EBS volume. The volume and instance must be within the same Availability Zone.
     */
    VolumeId: string;

    /**
     * The device name (for example, /dev/sdh or xvdh).
     */
    Device: string;
  };

  /**
   * The current state of the instance
   */
  export type StateType = {
    /**
     * The state of the instance as a 16-bit unsigned integer.
     */
    Code?: string;

    /**
     * The current state of the instance.
     */
    Name?: string;
  };

  export type EbsType = {
    /**
     * The ID of the snapshot.
     */
    SnapshotId?: string;

    /**
     * The volume type.
     */
    VolumeType?: string;

    /**
     * The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.
     */
    KmsKeyId?: string;

    /**
     * Indicates whether the volume should be encrypted.
     */
    Encrypted?: boolean;

    /**
     * The number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
     */
    Iops?: number;

    /**
     * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
     */
    VolumeSize?: number;

    /**
     * Indicates whether the EBS volume is deleted on instance termination.
     */
    DeleteOnTermination?: boolean;
  };

  export type BlockDeviceMappingType = {
    /**
     * Parameters used to automatically set up EBS volumes when the instance is launched.
     */
    Ebs?: EbsType;

    NoDevice?: Record<string, any>;

    VirtualName?: string;

    /**
     * The device name (for example, /dev/sdh or xvdh).
     */
    DeviceName: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::Instance
   */
  export type InstanceResourceType = {
    /**
     * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.
     */
    Tenancy?: string;

    /**
     * the names of the security groups. For a nondefault VPC, you must use security group IDs instead.
     * Create-only property
     */
    SecurityGroups?: string[];

    /**
     * The private DNS name of the specified instance. For example: ip-10-24-34-0.ec2.internal.
     * Read-only property
     */
    PrivateDnsName?: string;

    /**
     * [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.
     * Create-only property
     */
    PrivateIpAddress?: string;

    /**
     * The user data to make available to the instance.
     */
    UserData?: string;

    /**
     * The block device mapping entries that defines the block devices to attach to the instance at launch.
     */
    BlockDeviceMappings?: BlockDeviceMappingType[];

    /**
     * The IAM instance profile.
     */
    IamInstanceProfile?: string;

    /**
     * [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.
     * Create-only property
     */
    Ipv6Addresses?: InstanceIpv6AddressType[];

    /**
     * The ID of the kernel.
     */
    KernelId?: string;

    /**
     * [EC2-VPC] The ID of the subnet to launch the instance into.
     *
     * Create-only property
     */
    SubnetId?: string;

    /**
     * Indicates whether the instance is optimized for Amazon EBS I/O.
     */
    EbsOptimized?: boolean;

    /**
     * Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.
     */
    PropagateTagsToVolumeOnCreation?: boolean;

    /**
     * An elastic GPU to associate with the instance.
     * Create-only property
     */
    ElasticGpuSpecifications?: ElasticGpuSpecificationType[];

    /**
     * An elastic inference accelerator to associate with the instance.
     * Create-only property
     */
    ElasticInferenceAccelerators?: ElasticInferenceAcceleratorType[];

    /**
     * The volumes to attach to the instance.
     */
    Volumes?: VolumeType[];

    /**
     * The private IP address of the specified instance. For example: 10.24.34.0.
     * Read-only property
     */
    PrivateIp?: string;

    /**
     * [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
     * Create-only property
     */
    Ipv6AddressCount?: number;

    /**
     * The launch template to use to launch the instances.
     * Create-only property
     */
    LaunchTemplate?: LaunchTemplateSpecificationType;

    /**
     * Indicates whether the instance is enabled for AWS Nitro Enclaves.
     * Create-only property
     */
    EnclaveOptions?: Record<string, any>;

    /**
     * The network interfaces to associate with the instance.
     * Create-only property
     */
    NetworkInterfaces?: NetworkInterfaceType[];

    /**
     * The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
     * Create-only property
     */
    ImageId?: string;

    /**
     * The instance type.
     */
    InstanceType?: string;

    /**
     * Specifies whether detailed monitoring is enabled for the instance.
     */
    Monitoring?: boolean;

    /**
     * The tags to add to the instance.
     */
    Tags?: TagType[];

    /**
     * This property is reserved for internal use. If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).
     */
    AdditionalInfo?: string;

    /**
     * Indicates whether an instance is enabled for hibernation.
     * Create-only property
     */
    HibernationOptions?: Record<string, any>;

    /**
     * The license configurations.
     * Create-only property
     */
    LicenseSpecifications?: LicenseSpecificationType[];

    /**
     * The EC2 Instance ID.
     * Read-only property
     */
    InstanceId?: string;

    /**
     * The public IP address of the specified instance. For example: 192.0.2.0.
     * Read-only property
     */
    PublicIp?: string;

    /**
     * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
     */
    InstanceInitiatedShutdownBehavior?: string;

    /**
     * The CPU options for the instance.
     * Create-only property
     */
    CpuOptions?: Record<string, any>;

    /**
     * The Availability Zone of the instance.
     * Create-only property
     */
    AvailabilityZone?: string;

    /**
     * The options for the instance hostname.
     */
    PrivateDnsNameOptions?: PrivateDnsNameOptionsType;

    /**
     * If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.
     */
    HostId?: string;

    /**
     * The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.
     * Create-only property
     */
    HostResourceGroupArn?: string;

    /**
     * The public DNS name of the specified instance. For example: ec2-107-20-50-45.compute-1.amazonaws.com.
     * Read-only property
     */
    PublicDnsName?: string;

    /**
     * The IDs of the security groups.
     */
    SecurityGroupIds?: string[];

    /**
     * If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can.
     */
    DisableApiTermination?: boolean;

    /**
     * The name of the key pair.
     * Create-only property
     */
    KeyName?: string;

    /**
     * The ID of the RAM disk to select.
     */
    RamdiskId?: string;

    /**
     * Specifies whether to enable an instance launched in a VPC to perform NAT.
     */
    SourceDestCheck?: boolean;

    /**
     * The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).
     * Create-only property
     */
    PlacementGroupName?: string;

    /**
     * The SSM document and parameter values in AWS Systems Manager to associate with this instance.
     */
    SsmAssociations?: SsmAssociationType[];

    /**
     * The ID of the VPC that the instance is running in.
     * Read-only property
     */
    VpcId?: string;

    /**
     * The current state of the instance.
     * Read-only property
     */
    State?: StateType;

    /**
     * Indicates whether the instance is associated with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.
     */
    Affinity?: string;

    /**
     * The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.
     */
    CreditSpecification?: Record<string, any>;
  };
}
