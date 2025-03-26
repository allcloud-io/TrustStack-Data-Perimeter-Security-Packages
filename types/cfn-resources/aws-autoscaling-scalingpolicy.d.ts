/**
 * TypeScript definitions for AWS::AutoScaling::ScalingPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::AutoScaling::ScalingPolicy resource specifies an Amazon EC2 Auto Scaling scaling policy so that the Auto Scaling group can scale the number of instances available for your application.
 */
export namespace AWS_AutoScaling_ScalingPolicy {
  export type PredictiveScalingMetricSpecificationType = {
    CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetricType;

    CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetricType;

    CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetricType;

    PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetricType;

    TargetValue: number;

    PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetricType;

    PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPairType;
  };

  export type PredictiveScalingConfigurationType = {
    MetricSpecifications: PredictiveScalingMetricSpecificationType[];

    MaxCapacityBreachBehavior?: string;

    MaxCapacityBuffer?: number;

    SchedulingBufferTime?: number;

    Mode?: string;
  };

  export type CustomizedMetricSpecificationType = {
    MetricName?: string;

    Dimensions?: MetricDimensionType[];

    Metrics?: TargetTrackingMetricDataQueryType[];

    Statistic?: string;

    Unit?: string;

    Namespace?: string;

    Period?: number;
  };

  export type TargetTrackingConfigurationType = {
    CustomizedMetricSpecification?: CustomizedMetricSpecificationType;

    TargetValue: number;

    DisableScaleIn?: boolean;

    PredefinedMetricSpecification?: PredefinedMetricSpecificationType;
  };

  export type PredictiveScalingPredefinedLoadMetricType = {
    ResourceLabel?: string;

    PredefinedMetricType: string;
  };

  export type StepAdjustmentType = {
    MetricIntervalUpperBound?: number;

    MetricIntervalLowerBound?: number;

    ScalingAdjustment: number;
  };

  export type PredictiveScalingPredefinedMetricPairType = {
    ResourceLabel?: string;

    PredefinedMetricType: string;
  };

  export type PredefinedMetricSpecificationType = {
    ResourceLabel?: string;

    PredefinedMetricType: string;
  };

  export type MetricDimensionType = {
    Value: string;

    Name: string;
  };

  export type PredictiveScalingPredefinedScalingMetricType = {
    ResourceLabel?: string;

    PredefinedMetricType: string;
  };

  export type PredictiveScalingCustomizedLoadMetricType = {
    MetricDataQueries: MetricDataQueryType[];
  };

  export type PredictiveScalingCustomizedCapacityMetricType = {
    MetricDataQueries: MetricDataQueryType[];
  };

  export type PredictiveScalingCustomizedScalingMetricType = {
    MetricDataQueries: MetricDataQueryType[];
  };

  export type MetricType = {
    MetricName: string;

    Dimensions?: MetricDimensionType[];

    Namespace: string;
  };

  export type TargetTrackingMetricStatType = {
    Metric: MetricType;

    Stat: string;

    Unit?: string;

    Period?: number;
  };

  export type MetricStatType = {
    Metric: MetricType;

    Stat: string;

    Unit?: string;
  };

  export type TargetTrackingMetricDataQueryType = {
    Label?: string;

    MetricStat?: TargetTrackingMetricStatType;

    Id: string;

    ReturnData?: boolean;

    Expression?: string;

    Period?: number;
  };

  export type MetricDataQueryType = {
    Label?: string;

    MetricStat?: MetricStatType;

    Id: string;

    ReturnData?: boolean;

    Expression?: string;
  };

  /**
   * The AWS::AutoScaling::ScalingPolicy resource specifies an Amazon EC2 Auto Scaling scaling policy so that the Auto Scaling group can scale the number of instances available for your application.
   */
  export type ScalingPolicyResourceType = {
    /**
     * The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.
     */
    MetricAggregationType?: string;

    /**
     * Read-only property
     */
    PolicyName?: string;

    /**
     * One of the following policy types: TargetTrackingScaling, StepScaling, SimpleScaling (default), PredictiveScaling
     */
    PolicyType?: string;

    /**
     * A predictive scaling policy. Includes support for predefined metrics only.
     */
    PredictiveScalingConfiguration?: PredictiveScalingConfigurationType;

    /**
     * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)
     */
    ScalingAdjustment?: number;

    /**
     * The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group.
     */
    Cooldown?: string;

    /**
     * A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)
     */
    StepAdjustments?: StepAdjustmentType[];

    /**
     * The name of the Auto Scaling group.
     * Create-only property
     */
    AutoScalingGroupName: string;

    /**
     * The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.
     */
    MinAdjustmentMagnitude?: number;

    /**
     * A target tracking scaling policy. Includes support for predefined or customized metrics.
     */
    TargetTrackingConfiguration?: TargetTrackingConfigurationType;

    /**
     * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling.
     */
    EstimatedInstanceWarmup?: number;

    /**
     * Specifies how the scaling adjustment is interpreted. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
     */
    AdjustmentType?: string;

    /**
     * The ARN of the AutoScaling scaling policy
     * Read-only property
     */
    Arn?: string;
  };
}
