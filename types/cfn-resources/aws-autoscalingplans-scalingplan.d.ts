/**
 * TypeScript definitions for AWS::AutoScalingPlans::ScalingPlan
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AutoScalingPlans::ScalingPlan
 */
export namespace AWS_AutoScalingPlans_ScalingPlan {
  export type ScalingInstructionType = {
    DisableDynamicScaling?: boolean;

    ServiceNamespace: string;

    PredictiveScalingMaxCapacityBehavior?: string;

    ScalableDimension: string;

    ScalingPolicyUpdateBehavior?: string;

    MinCapacity: number;

    TargetTrackingConfigurations: TargetTrackingConfigurationType[];

    PredictiveScalingMaxCapacityBuffer?: number;

    CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecificationType;

    PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecificationType;

    ResourceId: string;

    ScheduledActionBufferTime?: number;

    MaxCapacity: number;

    PredictiveScalingMode?: string;
  };

  export type ApplicationSourceType = {
    CloudFormationStackARN?: string;

    TagFilters?: TagFilterType[];
  };

  export type TargetTrackingConfigurationType = {
    ScaleOutCooldown?: number;

    TargetValue: number;

    PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecificationType;

    DisableScaleIn?: boolean;

    ScaleInCooldown?: number;

    EstimatedInstanceWarmup?: number;

    CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecificationType;
  };

  export type CustomizedLoadMetricSpecificationType = {
    MetricName: string;

    Statistic: string;

    Dimensions?: MetricDimensionType[];

    Unit?: string;

    Namespace: string;
  };

  export type PredefinedLoadMetricSpecificationType = {
    PredefinedLoadMetricType: string;

    ResourceLabel?: string;
  };

  export type TagFilterType = {
    Values?: string[];

    Key: string;
  };

  export type PredefinedScalingMetricSpecificationType = {
    ResourceLabel?: string;

    PredefinedScalingMetricType: string;
  };

  export type CustomizedScalingMetricSpecificationType = {
    MetricName: string;

    Statistic: string;

    Dimensions?: MetricDimensionType[];

    Unit?: string;

    Namespace: string;
  };

  export type MetricDimensionType = {
    Value: string;

    Name: string;
  };

  /**
   * Resource Type definition for AWS::AutoScalingPlans::ScalingPlan
   */
  export type ScalingPlanResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    ScalingPlanName?: string;

    /**
     * Read-only property
     */
    ScalingPlanVersion?: string;

    ApplicationSource: ApplicationSourceType;

    ScalingInstructions: ScalingInstructionType[];
  };
}
