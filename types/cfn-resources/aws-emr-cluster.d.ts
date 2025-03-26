/**
 * TypeScript definitions for AWS::EMR::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EMR::Cluster
 */
export namespace AWS_EMR_Cluster {
  export type EbsConfigurationType = {
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfigType[];

    EbsOptimized?: boolean;
  };

  export type KeyValueType = {
    Value?: string;

    Key?: string;
  };

  export type ConfigurationType = {
    ConfigurationProperties?: Record<string, any>;

    Configurations?: ConfigurationType[];

    Classification?: string;
  };

  export type OnDemandResizingSpecificationType = {
    CapacityReservationOptions?: OnDemandCapacityReservationOptionsType;

    AllocationStrategy?: string;

    TimeoutDurationMinutes?: number;
  };

  export type StepConfigType = {
    HadoopJarStep: HadoopJarStepConfigType;

    ActionOnFailure?: string;

    Name: string;
  };

  export type InstanceFleetConfigType = {
    TargetOnDemandCapacity?: number;

    TargetSpotCapacity?: number;

    LaunchSpecifications?: InstanceFleetProvisioningSpecificationsType;

    ResizeSpecifications?: InstanceFleetResizingSpecificationsType;

    InstanceTypeConfigs?: InstanceTypeConfigType[];

    Name?: string;
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

  export type SpotProvisioningSpecificationType = {
    AllocationStrategy?: string;

    TimeoutDurationMinutes: number;

    TimeoutAction: string;

    BlockDurationMinutes?: number;
  };

  export type ScriptBootstrapActionConfigType = {
    Path: string;

    Args?: string[];
  };

  export type InstanceFleetResizingSpecificationsType = {
    OnDemandResizeSpecification?: OnDemandResizingSpecificationType;

    SpotResizeSpecification?: SpotResizingSpecificationType;
  };

  export type InstanceFleetProvisioningSpecificationsType = {
    SpotSpecification?: SpotProvisioningSpecificationType;

    OnDemandSpecification?: OnDemandProvisioningSpecificationType;
  };

  export type SimpleScalingPolicyConfigurationType = {
    ScalingAdjustment: number;

    CoolDown?: number;

    AdjustmentType?: string;
  };

  export type PlacementGroupConfigType = {
    InstanceRole: string;

    PlacementStrategy?: string;
  };

  export type OnDemandProvisioningSpecificationType = {
    CapacityReservationOptions?: OnDemandCapacityReservationOptionsType;

    AllocationStrategy: string;
  };

  export type ScalingTriggerType = {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinitionType;
  };

  export type ManagedScalingPolicyType = {
    ComputeLimits?: ComputeLimitsType;
  };

  export type InstanceGroupConfigType = {
    AutoScalingPolicy?: AutoScalingPolicyType;

    BidPrice?: string;

    InstanceCount: number;

    EbsConfiguration?: EbsConfigurationType;

    CustomAmiId?: string;

    Configurations?: ConfigurationType[];

    InstanceType: string;

    Market?: string;

    Name?: string;
  };

  export type HadoopJarStepConfigType = {
    Args?: string[];

    MainClass?: string;

    Jar: string;

    StepProperties?: KeyValueType[];
  };

  export type VolumeSpecificationType = {
    SizeInGB: number;

    Throughput?: number;

    VolumeType: string;

    Iops?: number;
  };

  export type CloudWatchAlarmDefinitionType = {
    MetricName: string;

    ComparisonOperator: string;

    Statistic?: string;

    Dimensions?: MetricDimensionType[];

    Period: number;

    EvaluationPeriods?: number;

    Unit?: string;

    Namespace?: string;

    Threshold: number;
  };

  export type AutoTerminationPolicyType = {
    IdleTimeout?: number;
  };

  export type KerberosAttributesType = {
    KdcAdminPassword: string;

    Realm: string;

    ADDomainJoinPassword?: string;

    ADDomainJoinUser?: string;

    CrossRealmTrustPrincipalPassword?: string;
  };

  export type JobFlowInstancesConfigType = {
    MasterInstanceFleet?: InstanceFleetConfigType;

    AdditionalSlaveSecurityGroups?: string[];

    CoreInstanceFleet?: InstanceFleetConfigType;

    CoreInstanceGroup?: InstanceGroupConfigType;

    Ec2SubnetIds?: string[];

    HadoopVersion?: string;

    TerminationProtected?: boolean;

    UnhealthyNodeReplacement?: boolean;

    KeepJobFlowAliveWhenNoSteps?: boolean;

    Ec2KeyName?: string;

    MasterInstanceGroup?: InstanceGroupConfigType;

    Placement?: PlacementTypeType;

    TaskInstanceFleets?: InstanceFleetConfigType[];

    Ec2SubnetId?: string;

    TaskInstanceGroups?: InstanceGroupConfigType[];

    ServiceAccessSecurityGroup?: string;

    EmrManagedSlaveSecurityGroup?: string;

    AdditionalMasterSecurityGroups?: string[];

    EmrManagedMasterSecurityGroup?: string;
  };

  export type ScalingActionType = {
    Market?: string;

    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfigurationType;
  };

  export type EbsBlockDeviceConfigType = {
    VolumeSpecification: VolumeSpecificationType;

    VolumesPerInstance?: number;
  };

  export type ScalingRuleType = {
    Action: ScalingActionType;

    Description?: string;

    Trigger: ScalingTriggerType;

    Name: string;
  };

  export type ComputeLimitsType = {
    MaximumOnDemandCapacityUnits?: number;

    MaximumCapacityUnits: number;

    MaximumCoreCapacityUnits?: number;

    MinimumCapacityUnits: number;

    UnitType: string;
  };

  export type MetricDimensionType = {
    Value: string;

    Key: string;
  };

  export type BootstrapActionConfigType = {
    ScriptBootstrapAction: ScriptBootstrapActionConfigType;

    Name: string;
  };

  export type SpotResizingSpecificationType = {
    AllocationStrategy?: string;

    TimeoutDurationMinutes?: number;
  };

  export type AutoScalingPolicyType = {
    Rules: ScalingRuleType[];

    Constraints: ScalingConstraintsType;
  };

  export type OnDemandCapacityReservationOptionsType = {
    UsageStrategy?: string;

    CapacityReservationResourceGroupArn?: string;

    CapacityReservationPreference?: string;
  };

  export type PlacementTypeType = {
    AvailabilityZone: string;
  };

  export type ScalingConstraintsType = {
    MinCapacity: number;

    MaxCapacity: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type ApplicationType = {
    AdditionalInfo?: Record<string, any>;

    Args?: string[];

    Version?: string;

    Name?: string;
  };

  /**
   * Resource Type definition for AWS::EMR::Cluster
   */
  export type ClusterResourceType = {
    /**
     * Create-only property
     */
    Steps?: StepConfigType[];

    /**
     * Create-only property
     */
    PlacementGroupConfigs?: PlacementGroupConfigType[];

    StepConcurrencyLevel?: number;

    /**
     * Create-only property
     */
    EbsRootVolumeSize?: number;

    /**
     * Create-only property
     */
    OSReleaseLabel?: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    ServiceRole: string;

    /**
     * Create-only property
     */
    LogUri?: string;

    /**
     * Create-only property
     */
    BootstrapActions?: BootstrapActionConfigType[];

    /**
     * Read-only property
     */
    MasterPublicDNS?: string;

    /**
     * Create-only property
     */
    Configurations?: ConfigurationType[];

    /**
     * Create-only property
     */
    ReleaseLabel?: string;

    Tags?: TagType[];

    ManagedScalingPolicy?: ManagedScalingPolicyType;

    /**
     * Create-only property
     */
    LogEncryptionKmsKeyId?: string;

    /**
     * Create-only property
     */
    AdditionalInfo?: Record<string, any>;

    AutoTerminationPolicy?: AutoTerminationPolicyType;

    /**
     * Create-only property
     */
    KerberosAttributes?: KerberosAttributesType;

    /**
     * Create-only property
     */
    Applications?: ApplicationType[];

    /**
     * Create-only property
     */
    AutoScalingRole?: string;

    /**
     * Create-only property
     */
    CustomAmiId?: string;

    /**
     * Create-only property
     */
    EbsRootVolumeIops?: number;

    Instances: JobFlowInstancesConfigType;

    /**
     * Create-only property
     */
    ScaleDownBehavior?: string;

    /**
     * Create-only property
     */
    EbsRootVolumeThroughput?: number;

    /**
     * Create-only property
     */
    JobFlowRole: string;

    VisibleToAllUsers?: boolean;

    /**
     * Create-only property
     */
    SecurityConfiguration?: string;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
