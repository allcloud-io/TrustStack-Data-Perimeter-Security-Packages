/**
 * TypeScript definitions for AWS::EMR::InstanceFleetConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EMR::InstanceFleetConfig
 */
export namespace AWS_EMR_InstanceFleetConfig {
  export type VolumeSpecificationType = {
    SizeInGB: number;

    Throughput?: number;

    VolumeType: string;

    Iops?: number;
  };

  export type EbsConfigurationType = {
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfigType[];

    EbsOptimized?: boolean;
  };

  export type ConfigurationType = {
    ConfigurationProperties?: Record<string, any>;

    Configurations?: ConfigurationType[];

    Classification?: string;
  };

  export type OnDemandCapacityReservationOptionsType = {
    UsageStrategy?: string;

    CapacityReservationResourceGroupArn?: string;

    CapacityReservationPreference?: string;
  };

  export type InstanceFleetResizingSpecificationsType = {
    OnDemandResizeSpecification?: OnDemandResizingSpecificationType;

    SpotResizeSpecification?: SpotResizingSpecificationType;
  };

  export type InstanceFleetProvisioningSpecificationsType = {
    SpotSpecification?: SpotProvisioningSpecificationType;

    OnDemandSpecification?: OnDemandProvisioningSpecificationType;
  };

  export type OnDemandResizingSpecificationType = {
    CapacityReservationOptions?: OnDemandCapacityReservationOptionsType;

    AllocationStrategy?: string;

    TimeoutDurationMinutes?: number;
  };

  export type OnDemandProvisioningSpecificationType = {
    CapacityReservationOptions?: OnDemandCapacityReservationOptionsType;

    AllocationStrategy: string;
  };

  export type EbsBlockDeviceConfigType = {
    VolumeSpecification: VolumeSpecificationType;

    VolumesPerInstance?: number;
  };

  export type InstanceTypeConfigType = {
    BidPrice?: string;

    WeightedCapacity?: number;

    EbsConfiguration?: EbsConfigurationType;

    Priority?: number;

    BidPriceAsPercentageOfOnDemandPrice?: number;

    CustomAmiId?: string;

    Configurations?: ConfigurationType[];

    InstanceType: string;
  };

  export type SpotResizingSpecificationType = {
    AllocationStrategy?: string;

    TimeoutDurationMinutes?: number;
  };

  export type SpotProvisioningSpecificationType = {
    AllocationStrategy?: string;

    TimeoutDurationMinutes: number;

    TimeoutAction: string;

    BlockDurationMinutes?: number;
  };

  /**
   * Resource Type definition for AWS::EMR::InstanceFleetConfig
   */
  export type InstanceFleetConfigResourceType = {
    /**
     * Create-only property
     */
    InstanceFleetType: string;

    TargetOnDemandCapacity?: number;

    /**
     * Create-only property
     */
    ClusterId: string;

    TargetSpotCapacity?: number;

    /**
     * Create-only property
     */
    LaunchSpecifications?: InstanceFleetProvisioningSpecificationsType;

    ResizeSpecifications?: InstanceFleetResizingSpecificationsType;

    /**
     * Read-only property
     */
    Id?: string;

    InstanceTypeConfigs?: InstanceTypeConfigType[];

    /**
     * Create-only property
     */
    Name?: string;
  };
}
