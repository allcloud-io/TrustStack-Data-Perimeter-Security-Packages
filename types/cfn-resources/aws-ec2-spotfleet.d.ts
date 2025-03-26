/**
 * TypeScript definitions for AWS::EC2::SpotFleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::SpotFleet
 */
export namespace AWS_EC2_SpotFleet {
  export type SpotFleetRequestConfigDataType = {
    AllocationStrategy?: string;

    Context?: string;

    ExcessCapacityTerminationPolicy?: string;

    IamFleetRole: string;

    InstanceInterruptionBehavior?: string;

    InstancePoolsToUseCount?: number;

    LaunchSpecifications?: SpotFleetLaunchSpecificationType[];

    LaunchTemplateConfigs?: LaunchTemplateConfigType[];

    LoadBalancersConfig?: LoadBalancersConfigType;

    OnDemandAllocationStrategy?: string;

    OnDemandMaxTotalPrice?: string;

    OnDemandTargetCapacity?: number;

    ReplaceUnhealthyInstances?: boolean;

    SpotMaintenanceStrategies?: SpotMaintenanceStrategiesType;

    SpotMaxTotalPrice?: string;

    SpotPrice?: string;

    TargetCapacity: number;

    TerminateInstancesWithExpiration?: boolean;

    Type?: string;

    ValidFrom?: string;

    ValidUntil?: string;

    TagSpecifications?: SpotFleetTagSpecificationType[];

    TargetCapacityUnitType?: string;
  };

  export type SpotFleetLaunchSpecificationType = {
    BlockDeviceMappings?: BlockDeviceMappingType[];

    EbsOptimized?: boolean;

    IamInstanceProfile?: IamInstanceProfileSpecificationType;

    ImageId: string;

    InstanceType?: string;

    KernelId?: string;

    KeyName?: string;

    Monitoring?: SpotFleetMonitoringType;

    NetworkInterfaces?: InstanceNetworkInterfaceSpecificationType[];

    Placement?: SpotPlacementType;

    RamdiskId?: string;

    SecurityGroups?: GroupIdentifierType[];

    SpotPrice?: string;

    SubnetId?: string;

    TagSpecifications?: SpotFleetTagSpecificationType[];

    UserData?: string;

    WeightedCapacity?: number;

    InstanceRequirements?: InstanceRequirementsRequestType;
  };

  export type LoadBalancersConfigType = {
    ClassicLoadBalancersConfig?: ClassicLoadBalancersConfigType;

    TargetGroupsConfig?: TargetGroupsConfigType;
  };

  export type SpotMaintenanceStrategiesType = {
    CapacityRebalance?: SpotCapacityRebalanceType;
  };

  export type SpotCapacityRebalanceType = {
    ReplacementStrategy?: string;

    TerminationDelay?: number;
  };

  export type LaunchTemplateConfigType = {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationType;

    Overrides?: LaunchTemplateOverridesType[];
  };

  export type SpotFleetTagSpecificationType = {
    ResourceType?: string;

    Tags?: TagType[];
  };

  export type FleetLaunchTemplateSpecificationType = {
    LaunchTemplateId?: string;

    LaunchTemplateName?: string;

    Version: string;
  };

  export type GroupIdentifierType = {
    GroupId: string;
  };

  export type IamInstanceProfileSpecificationType = {
    Arn?: string;
  };

  export type ClassicLoadBalancersConfigType = {
    ClassicLoadBalancers: ClassicLoadBalancerType[];
  };

  export type LaunchTemplateOverridesType = {
    AvailabilityZone?: string;

    InstanceType?: string;

    SpotPrice?: string;

    SubnetId?: string;

    WeightedCapacity?: number;

    InstanceRequirements?: InstanceRequirementsRequestType;

    Priority?: number;
  };

  export type SpotFleetMonitoringType = {
    Enabled?: boolean;
  };

  export type SpotPlacementType = {
    AvailabilityZone?: string;

    GroupName?: string;

    Tenancy?: string;
  };

  export type InstanceNetworkInterfaceSpecificationType = {
    AssociatePublicIpAddress?: boolean;

    DeleteOnTermination?: boolean;

    Description?: string;

    DeviceIndex?: number;

    Groups?: string[];

    Ipv6AddressCount?: number;

    Ipv6Addresses?: InstanceIpv6AddressType[];

    NetworkInterfaceId?: string;

    PrivateIpAddresses?: PrivateIpAddressSpecificationType[];

    SecondaryPrivateIpAddressCount?: number;

    SubnetId?: string;
  };

  export type BlockDeviceMappingType = {
    DeviceName: string;

    Ebs?: EbsBlockDeviceType;

    NoDevice?: string;

    VirtualName?: string;
  };

  export type TargetGroupsConfigType = {
    TargetGroups: TargetGroupType[];
  };

  export type EbsBlockDeviceType = {
    DeleteOnTermination?: boolean;

    Encrypted?: boolean;

    Iops?: number;

    SnapshotId?: string;

    VolumeSize?: number;

    VolumeType?: string;
  };

  export type TargetGroupType = {
    Arn: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type PrivateIpAddressSpecificationType = {
    Primary?: boolean;

    PrivateIpAddress: string;
  };

  export type ClassicLoadBalancerType = {
    Name: string;
  };

  export type InstanceIpv6AddressType = {
    Ipv6Address: string;
  };

  export type InstanceRequirementsRequestType = {
    VCpuCount?: VCpuCountRangeRequestType;

    MemoryMiB?: MemoryMiBRequestType;

    CpuManufacturers?: string[];

    MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequestType;

    AllowedInstanceTypes?: string[];

    ExcludedInstanceTypes?: string[];

    InstanceGenerations?: string[];

    SpotMaxPricePercentageOverLowestPrice?: number;

    OnDemandMaxPricePercentageOverLowestPrice?: number;

    MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;

    BareMetal?: string;

    BurstablePerformance?: string;

    RequireHibernateSupport?: boolean;

    NetworkBandwidthGbps?: NetworkBandwidthGbpsRequestType;

    NetworkInterfaceCount?: NetworkInterfaceCountRequestType;

    LocalStorage?: string;

    LocalStorageTypes?: string[];

    TotalLocalStorageGB?: TotalLocalStorageGBRequestType;

    BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequestType;

    AcceleratorTypes?: string[];

    AcceleratorCount?: AcceleratorCountRequestType;

    AcceleratorManufacturers?: string[];

    AcceleratorNames?: string[];

    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequestType;

    BaselinePerformanceFactors?: BaselinePerformanceFactorsRequestType;
  };

  export type VCpuCountRangeRequestType = {
    Min?: number;

    Max?: number;
  };

  export type MemoryMiBRequestType = {
    Min?: number;

    Max?: number;
  };

  export type MemoryGiBPerVCpuRequestType = {
    Min?: number;

    Max?: number;
  };

  export type NetworkBandwidthGbpsRequestType = {
    Min?: number;

    Max?: number;
  };

  export type NetworkInterfaceCountRequestType = {
    Min?: number;

    Max?: number;
  };

  export type TotalLocalStorageGBRequestType = {
    Min?: number;

    Max?: number;
  };

  export type BaselineEbsBandwidthMbpsRequestType = {
    Min?: number;

    Max?: number;
  };

  export type AcceleratorCountRequestType = {
    Min?: number;

    Max?: number;
  };

  export type AcceleratorTotalMemoryMiBRequestType = {
    Min?: number;

    Max?: number;
  };

  export type BaselinePerformanceFactorsRequestType = {
    Cpu?: CpuPerformanceFactorRequestType;
  };

  export type CpuPerformanceFactorRequestType = {
    References?: PerformanceFactorReferenceRequestType[];
  };

  export type PerformanceFactorReferenceRequestType = {
    InstanceFamily?: string;
  };

  /**
   * Resource Type definition for AWS::EC2::SpotFleet
   */
  export type SpotFleetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    SpotFleetRequestConfigData: SpotFleetRequestConfigDataType;
  };
}
