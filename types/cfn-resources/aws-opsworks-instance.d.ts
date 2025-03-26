/**
 * TypeScript definitions for AWS::OpsWorks::Instance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::OpsWorks::Instance
 */
export namespace AWS_OpsWorks_Instance {
  export type BlockDeviceMappingType = {
    DeviceName?: string;

    Ebs?: EbsBlockDeviceType;

    NoDevice?: string;

    VirtualName?: string;
  };

  export type TimeBasedAutoScalingType = {
    Friday?: Record<string, any>;

    Monday?: Record<string, any>;

    Saturday?: Record<string, any>;

    Sunday?: Record<string, any>;

    Thursday?: Record<string, any>;

    Tuesday?: Record<string, any>;

    Wednesday?: Record<string, any>;
  };

  export type EbsBlockDeviceType = {
    DeleteOnTermination?: boolean;

    Iops?: number;

    SnapshotId?: string;

    VolumeSize?: number;

    VolumeType?: string;
  };

  /**
   * Resource Type definition for AWS::OpsWorks::Instance
   */
  export type InstanceResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    AvailabilityZone?: string;

    /**
     * Read-only property
     */
    PrivateDnsName?: string;

    /**
     * Read-only property
     */
    PrivateIp?: string;

    /**
     * Read-only property
     */
    PublicDnsName?: string;

    /**
     * Read-only property
     */
    PublicIp?: string;

    AgentVersion?: string;

    AmiId?: string;

    Architecture?: string;

    /**
     * Create-only property
     */
    AutoScalingType?: string;

    /**
     * Create-only property
     */
    BlockDeviceMappings?: BlockDeviceMappingType[];

    /**
     * Create-only property
     */
    EbsOptimized?: boolean;

    ElasticIps?: string[];

    Hostname?: string;

    InstallUpdatesOnBoot?: boolean;

    InstanceType: string;

    LayerIds: string[];

    Os?: string;

    /**
     * Create-only property
     */
    RootDeviceType?: string;

    SshKeyName?: string;

    /**
     * Create-only property
     */
    StackId: string;

    /**
     * Create-only property
     */
    SubnetId?: string;

    /**
     * Create-only property
     */
    Tenancy?: string;

    /**
     * Create-only property
     */
    TimeBasedAutoScaling?: TimeBasedAutoScalingType;

    /**
     * Create-only property
     */
    VirtualizationType?: string;

    Volumes?: string[];
  };
}
