/**
 * TypeScript definitions for AWS::Deadline::Fleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::Fleet Resource Type
 */
export namespace AWS_Deadline_Fleet {
  export type AcceleratorCountRangeType = {
    Min: number;

    Max?: number;
  };

  export type AcceleratorTotalMemoryMiBRangeType = {
    Min: number;

    Max?: number;
  };

  export type AcceleratorTypeType = {};

  export type AutoScalingModeType = {};

  export type CpuArchitectureTypeType = {};

  export type CustomerManagedFleetConfigurationType = {
    Mode: AutoScalingModeType;

    WorkerCapabilities: CustomerManagedWorkerCapabilitiesType;

    StorageProfileId?: string;
  };

  export type CustomerManagedFleetOperatingSystemFamilyType = {};

  export type CustomerManagedWorkerCapabilitiesType = {
    VCpuCount: VCpuCountRangeType;

    MemoryMiB: MemoryMiBRangeType;

    AcceleratorTypes?: AcceleratorTypeType[];

    AcceleratorCount?: AcceleratorCountRangeType;

    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRangeType;

    OsFamily: CustomerManagedFleetOperatingSystemFamilyType;

    CpuArchitectureType: CpuArchitectureTypeType;

    CustomAmounts?: FleetAmountCapabilityType[];

    CustomAttributes?: FleetAttributeCapabilityType[];
  };

  export type Ec2EbsVolumeType = {
    SizeGiB?: number;

    Iops?: number;

    ThroughputMiB?: number;
  };

  export type AcceleratorSelectionType = {
    Name: string;

    Runtime?: string;
  };

  export type AcceleratorCapabilitiesType = {
    Selections: AcceleratorSelectionType[];

    Count?: AcceleratorCountRangeType;
  };

  export type Ec2MarketTypeType = {};

  export type FleetAmountCapabilityType = {
    Name: string;

    Min: number;

    Max?: number;
  };

  export type FleetAttributeCapabilityType = {
    Name: string;

    Values: string[];
  };

  export type FleetCapabilitiesType = {
    Amounts?: FleetAmountCapabilityType[];

    Attributes?: FleetAttributeCapabilityType[];
  };

  export type FleetConfigurationType = {};

  export type FleetStatusType = {};

  export type MemoryMiBRangeType = {
    Min: number;

    Max?: number;
  };

  export type ServiceManagedEc2FleetConfigurationType = {
    InstanceCapabilities: ServiceManagedEc2InstanceCapabilitiesType;

    InstanceMarketOptions: ServiceManagedEc2InstanceMarketOptionsType;
  };

  export type ServiceManagedEc2InstanceMarketOptionsType = {
    Type: Ec2MarketTypeType;
  };

  export type ServiceManagedEc2InstanceCapabilitiesType = {
    VCpuCount: VCpuCountRangeType;

    MemoryMiB: MemoryMiBRangeType;

    OsFamily: ServiceManagedFleetOperatingSystemFamilyType;

    CpuArchitectureType: CpuArchitectureTypeType;

    RootEbsVolume?: Ec2EbsVolumeType;

    AcceleratorCapabilities?: AcceleratorCapabilitiesType;

    AllowedInstanceTypes?: string[];

    ExcludedInstanceTypes?: string[];

    CustomAmounts?: FleetAmountCapabilityType[];

    CustomAttributes?: FleetAttributeCapabilityType[];
  };

  export type ServiceManagedFleetOperatingSystemFamilyType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type VCpuCountRangeType = {
    Min: number;

    Max?: number;
  };

  /**
   * Definition of AWS::Deadline::Fleet Resource Type
   */
  export type FleetResourceType = {
    /**
     * Read-only property
     */
    Capabilities?: FleetCapabilitiesType;

    Configuration: FleetConfigurationType;

    /**
     * Default: ""
     */
    Description?: string;

    DisplayName: string;

    /**
     * Create-only property
     */
    FarmId: string;

    /**
     * Read-only property
     */
    FleetId?: string;

    MaxWorkerCount: number;

    /**
     * Default: 0
     */
    MinWorkerCount?: number;

    RoleArn: string;

    /**
     * Read-only property
     */
    Status?: FleetStatusType;

    /**
     * Read-only property
     */
    WorkerCount?: number;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
