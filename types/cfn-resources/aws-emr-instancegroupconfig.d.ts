/**
 * TypeScript definitions for AWS::EMR::InstanceGroupConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EMR::InstanceGroupConfig
 */
export namespace AWS_EMR_InstanceGroupConfig {
  export type AutoScalingPolicyType = {
    Rules: ScalingRuleType[];

    Constraints: ScalingConstraintsType;
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

  export type EbsConfigurationType = {
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfigType[];

    EbsOptimized?: boolean;
  };

  export type ConfigurationType = {
    ConfigurationProperties?: Record<string, any>;

    Configurations?: ConfigurationType[];

    Classification?: string;
  };

  export type ScalingActionType = {
    Market?: string;

    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfigurationType;
  };

  export type SimpleScalingPolicyConfigurationType = {
    ScalingAdjustment: number;

    CoolDown?: number;

    AdjustmentType?: string;
  };

  export type ScalingConstraintsType = {
    MinCapacity: number;

    MaxCapacity: number;
  };

  export type EbsBlockDeviceConfigType = {
    VolumeSpecification: VolumeSpecificationType;

    VolumesPerInstance?: number;
  };

  export type ScalingTriggerType = {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinitionType;
  };

  export type ScalingRuleType = {
    Action: ScalingActionType;

    Description?: string;

    Trigger: ScalingTriggerType;

    Name: string;
  };

  export type MetricDimensionType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EMR::InstanceGroupConfig
   */
  export type InstanceGroupConfigResourceType = {
    /**
     * Create-only property
     */
    JobFlowId: string;

    AutoScalingPolicy?: AutoScalingPolicyType;

    /**
     * Create-only property
     */
    BidPrice?: string;

    InstanceCount: number;

    /**
     * Create-only property
     */
    EbsConfiguration?: EbsConfigurationType;

    /**
     * Create-only property
     */
    InstanceRole: string;

    /**
     * Create-only property
     */
    CustomAmiId?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Configurations?: ConfigurationType[];

    /**
     * Create-only property
     */
    InstanceType: string;

    /**
     * Create-only property
     */
    Market?: string;

    /**
     * Create-only property
     */
    Name?: string;
  };
}
