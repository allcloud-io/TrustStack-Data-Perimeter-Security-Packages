/**
 * TypeScript definitions for AWS::EC2::EC2Fleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::EC2Fleet
 */
export namespace AWS_EC2_EC2Fleet {
  export type TargetCapacitySpecificationRequestType = {
    DefaultTargetCapacityType?: string;

    TotalTargetCapacity: number;

    OnDemandTargetCapacity?: number;

    SpotTargetCapacity?: number;

    TargetCapacityUnitType?: string;
  };

  export type FleetLaunchTemplateSpecificationRequestType = {
    LaunchTemplateName?: string;

    Version: string;

    LaunchTemplateId?: string;
  };

  export type MemoryGiBPerVCpuRequestType = {
    Min?: number;

    Max?: number;
  };

  export type CapacityReservationOptionsRequestType = {
    UsageStrategy?: string;
  };

  export type TotalLocalStorageGBRequestType = {
    Min?: number;

    Max?: number;
  };

  export type NetworkBandwidthGbpsRequestType = {
    Min?: number;

    Max?: number;
  };

  export type VCpuCountRangeRequestType = {
    Min?: number;

    Max?: number;
  };

  export type BaselineEbsBandwidthMbpsRequestType = {
    Min?: number;

    Max?: number;
  };

  export type NetworkInterfaceCountRequestType = {
    Min?: number;

    Max?: number;
  };

  export type OnDemandOptionsRequestType = {
    SingleAvailabilityZone?: boolean;

    AllocationStrategy?: string;

    SingleInstanceType?: boolean;

    MinTargetCapacity?: number;

    MaxTotalPrice?: string;

    CapacityReservationOptions?: CapacityReservationOptionsRequestType;
  };

  export type SpotOptionsRequestType = {
    SingleAvailabilityZone?: boolean;

    AllocationStrategy?: string;

    SingleInstanceType?: boolean;

    MinTargetCapacity?: number;

    MaxTotalPrice?: string;

    MaintenanceStrategies?: MaintenanceStrategiesType;

    InstanceInterruptionBehavior?: string;

    InstancePoolsToUseCount?: number;
  };

  export type PlacementType = {
    GroupName?: string;

    Tenancy?: string;

    SpreadDomain?: string;

    PartitionNumber?: number;

    AvailabilityZone?: string;

    Affinity?: string;

    HostId?: string;

    HostResourceGroupArn?: string;
  };

  export type PerformanceFactorReferenceRequestType = {
    InstanceFamily?: string;
  };

  export type CpuPerformanceFactorRequestType = {
    References?: PerformanceFactorReferenceRequestType[];
  };

  export type MaintenanceStrategiesType = {
    CapacityRebalance?: CapacityRebalanceType;
  };

  export type BlockDeviceMappingType = {
    Ebs?: EbsBlockDeviceType;

    NoDevice?: string;

    VirtualName?: string;

    DeviceName?: string;
  };

  export type AcceleratorCountRequestType = {
    Min?: number;

    Max?: number;
  };

  export type CapacityRebalanceType = {
    TerminationDelay?: number;

    ReplacementStrategy?: string;
  };

  export type FleetLaunchTemplateConfigRequestType = {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequestType;

    Overrides?: FleetLaunchTemplateOverridesRequestType[];
  };

  export type FleetLaunchTemplateOverridesRequestType = {
    WeightedCapacity?: number;

    Placement?: PlacementType;

    Priority?: number;

    AvailabilityZone?: string;

    SubnetId?: string;

    InstanceRequirements?: InstanceRequirementsRequestType;

    InstanceType?: string;

    MaxPrice?: string;
  };

  export type InstanceRequirementsRequestType = {
    InstanceGenerations?: string[];

    MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequestType;

    AcceleratorTypes?: string[];

    VCpuCount?: VCpuCountRangeRequestType;

    AcceleratorManufacturers?: string[];

    LocalStorage?: string;

    CpuManufacturers?: string[];

    BareMetal?: string;

    RequireHibernateSupport?: boolean;

    MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;

    OnDemandMaxPricePercentageOverLowestPrice?: number;

    MemoryMiB?: MemoryMiBRequestType;

    LocalStorageTypes?: string[];

    NetworkInterfaceCount?: NetworkInterfaceCountRequestType;

    ExcludedInstanceTypes?: string[];

    AllowedInstanceTypes?: string[];

    NetworkBandwidthGbps?: NetworkBandwidthGbpsRequestType;

    AcceleratorCount?: AcceleratorCountRequestType;

    BaselinePerformanceFactors?: BaselinePerformanceFactorsRequestType;

    SpotMaxPricePercentageOverLowestPrice?: number;

    BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequestType;

    AcceleratorNames?: string[];

    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequestType;

    BurstablePerformance?: string;

    TotalLocalStorageGB?: TotalLocalStorageGBRequestType;
  };

  export type MemoryMiBRequestType = {
    Min?: number;

    Max?: number;
  };

  export type TagSpecificationType = {
    ResourceType?: string;

    Tags?: TagType[];
  };

  export type BaselinePerformanceFactorsRequestType = {
    Cpu?: CpuPerformanceFactorRequestType;
  };

  export type AcceleratorTotalMemoryMiBRequestType = {
    Min?: number;

    Max?: number;
  };

  export type EbsBlockDeviceType = {
    SnapshotId?: string;

    VolumeType?: string;

    KmsKeyId?: string;

    Encrypted?: boolean;

    Iops?: number;

    VolumeSize?: number;

    DeleteOnTermination?: boolean;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::EC2Fleet
   */
  export type EC2FleetResourceType = {
    Context?: string;

    TargetCapacitySpecification: TargetCapacitySpecificationRequestType;

    /**
     * Create-only property
     */
    OnDemandOptions?: OnDemandOptionsRequestType;

    ExcessCapacityTerminationPolicy?: string;

    /**
     * Create-only property
     */
    TagSpecifications?: TagSpecificationType[];

    /**
     * Create-only property
     */
    SpotOptions?: SpotOptionsRequestType;

    /**
     * Create-only property
     */
    LaunchTemplateConfigs: FleetLaunchTemplateConfigRequestType[];

    /**
     * Create-only property
     */
    TerminateInstancesWithExpiration?: boolean;

    /**
     * Create-only property
     */
    ValidUntil?: string;

    /**
     * Create-only property
     */
    Type?: string;

    /**
     * Read-only property
     */
    FleetId?: string;

    /**
     * Create-only property
     */
    ValidFrom?: string;

    /**
     * Create-only property
     */
    ReplaceUnhealthyInstances?: boolean;
  };
}
