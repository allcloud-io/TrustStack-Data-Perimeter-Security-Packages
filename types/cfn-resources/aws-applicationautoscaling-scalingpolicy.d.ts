/**
 * TypeScript definitions for AWS::ApplicationAutoScaling::ScalingPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApplicationAutoScaling::ScalingPolicy` resource defines a scaling policy that Application Auto Scaling uses to adjust the capacity of a scalable target.
 * For more information, see Target tracking scaling policies and Step scaling policies in the *Application Auto Scaling User Guide*.
 */
export namespace AWS_ApplicationAutoScaling_ScalingPolicy {
  /**
   * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
   */
  export type PredictiveScalingMetricDataQueryType = {
    /**
     * Indicates whether to return the timestamps and raw data values of this metric.
     * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
     * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData`. This sets it to its default (`true`).
     */
    ReturnData?: boolean;

    /**
     * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
     * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
     */
    Expression?: string;

    /**
     * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
     */
    Label?: string;

    /**
     * Information about the metric data to return.
     * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
     */
    MetricStat?: PredictiveScalingMetricStatType;

    /**
     * A short name that identifies the object's results in the response. This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
     */
    Id?: string;
  };

  /**
   * This structure defines the CloudWatch metric to return, along with the statistic and unit.
   * `TargetTrackingMetricStat` is a property of the AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingMetricDataQuery property type.
   * For more information about the CloudWatch terminology below, see Amazon CloudWatch concepts in the *Amazon CloudWatch User Guide*.
   */
  export type TargetTrackingMetricStatType = {
    /**
     * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in Statistics in the *Amazon CloudWatch User Guide*.
     * The most commonly used metric for scaling is `Average`.
     */
    Stat?: string;

    /**
     * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the Metric object that is returned by a call to ListMetrics.
     */
    Metric?: TargetTrackingMetricType;

    /**
     * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the MetricDatum data type in the *Amazon CloudWatch API Reference*.
     */
    Unit?: string;
  };

  /**
   * Describes the dimension of a metric.
   */
  export type PredictiveScalingMetricDimensionType = {
    /**
     * The value of the dimension.
     */
    Value?: string;

    /**
     * The name of the dimension.
     */
    Name?: string;
  };

  /**
   * `TargetTrackingMetricDimension` specifies a name/value pair that is part of the identity of a CloudWatch metric for the `Dimensions` property of the AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingMetric property type. Duplicate dimensions are not allowed.
   */
  export type TargetTrackingMetricDimensionType = {
    /**
     * The value of the dimension.
     */
    Value?: string;

    /**
     * The name of the dimension.
     */
    Name?: string;
  };

  /**
   * Represents a CloudWatch metric of your choosing for a predictive scaling policy.
   */
  export type PredictiveScalingCustomizedCapacityMetricType = {
    /**
     * One or more metric data queries to provide data points for a metric specification.
     */
    MetricDataQueries: PredictiveScalingMetricDataQueryType[];
  };

  /**
   * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
   * You can call for a single metric or perform math expressions on multiple metrics. Any expressions used in a metric specification must eventually return a single time series.
   * For more information and examples, see Create a target tracking scaling policy for Application Auto Scaling using metric math in the *Application Auto Scaling User Guide*.
   * `TargetTrackingMetricDataQuery` is a property of the AWS::ApplicationAutoScaling::ScalingPolicy CustomizedMetricSpecification property type.
   */
  export type TargetTrackingMetricDataQueryType = {
    /**
     * Indicates whether to return the timestamps and raw data values of this metric.
     * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
     * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData`. This sets it to its default (`true`).
     */
    ReturnData?: boolean;

    /**
     * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
     * Conditional: Within each `TargetTrackingMetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
     */
    Expression?: string;

    /**
     * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
     */
    Label?: string;

    /**
     * Information about the metric data to return.
     * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
     */
    MetricStat?: TargetTrackingMetricStatType;

    /**
     * A short name that identifies the object's results in the response. This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
     */
    Id?: string;
  };

  /**
   * One or more metric data queries to provide data points for a metric specification.
   */
  export type PredictiveScalingCustomizedScalingMetricType = {
    /**
     * One or more metric data queries to provide data points for a metric specification.
     */
    MetricDataQueries: PredictiveScalingMetricDataQueryType[];
  };

  /**
   * Contains customized metric specification information for a target tracking scaling policy for Application Auto Scaling.
   * For information about the available metrics for a service, see services that publish CloudWatch metrics in the *Amazon CloudWatch User Guide*.
   * To create your customized metric specification:
   * +  Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see Publish custom metrics in the *Amazon CloudWatch User Guide*.
   * +  Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases.
   * For an example of how creating new metrics can be useful, see Scaling based on Amazon SQS in the *Amazon EC2 Auto Scaling User Guide*. This topic mentions Auto Scaling groups, but the same scenario for Amazon SQS can apply to the target tracking scaling policies that you create for a Spot Fleet by using Application Auto Scaling.
   * For more information about the CloudWatch terminology below, see Amazon CloudWatch concepts.
   * `CustomizedMetricSpecification` is a property of the AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingScalingPolicyConfiguration property type.
   */
  export type CustomizedMetricSpecificationType = {
    /**
     * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the Metric object that's returned by a call to ListMetrics.
     */
    MetricName?: string;

    /**
     * The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.
     */
    Metrics?: TargetTrackingMetricDataQueryType[];

    /**
     * The statistic of the metric.
     */
    Statistic?: string;

    /**
     * The dimensions of the metric.
     * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
     */
    Dimensions?: MetricDimensionType[];

    /**
     * The unit of the metric. For a complete list of the units that CloudWatch supports, see the MetricDatum data type in the *Amazon CloudWatch API Reference*.
     */
    Unit?: string;

    /**
     * The namespace of the metric.
     */
    Namespace?: string;
  };

  /**
   * Describes a load metric for a predictive scaling policy.
   * When returned in the output of `DescribePolicies`, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
   */
  export type PredictiveScalingPredefinedLoadMetricType = {
    /**
     * The metric type.
     */
    PredefinedMetricType: string;

    /**
     * A label that uniquely identifies a target group.
     */
    ResourceLabel?: string;
  };

  /**
   * `TargetTrackingScalingPolicyConfiguration` is a property of the AWS::ApplicationAutoScaling::ScalingPolicy resource that specifies a target tracking scaling policy configuration for Application Auto Scaling. Use a target tracking scaling policy to adjust the capacity of the specified scalable target in response to actual workloads, so that resource utilization remains at or near the target utilization value.
   * For more information, see Target tracking scaling policies in the *Application Auto Scaling User Guide*.
   */
  export type TargetTrackingScalingPolicyConfigurationType = {
    /**
     * The amount of time, in seconds, to wait for a previous scale-out activity to take effect. For more information and for default values, see Define cooldown periods in the *Application Auto Scaling User Guide*.
     */
    ScaleOutCooldown?: number;

    /**
     * The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.
     */
    TargetValue: number;

    /**
     * A customized metric. You can specify either a predefined metric or a customized metric.
     */
    CustomizedMetricSpecification?: CustomizedMetricSpecificationType;

    /**
     * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is `true`, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is `false`.
     */
    DisableScaleIn?: boolean;

    /**
     * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. For more information and for default values, see Define cooldown periods in the *Application Auto Scaling User Guide*.
     */
    ScaleInCooldown?: number;

    /**
     * A predefined metric. You can specify either a predefined metric or a customized metric.
     */
    PredefinedMetricSpecification?: PredefinedMetricSpecificationType;
  };

  /**
   * Represents a metric pair for a predictive scaling policy.
   */
  export type PredictiveScalingPredefinedMetricPairType = {
    /**
     * Indicates which metrics to use. There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric.
     */
    PredefinedMetricType: string;

    /**
     * A label that uniquely identifies a specific target group from which to determine the total and average request count.
     */
    ResourceLabel?: string;
  };

  /**
   * `StepAdjustment` specifies a step adjustment for the `StepAdjustments` property of the AWS::ApplicationAutoScaling::ScalingPolicy StepScalingPolicyConfiguration property type.
   * For the following examples, suppose that you have an alarm with a breach threshold of 50:
   * +  To trigger a step adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.
   * +  To trigger a step adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.
   * For more information, see Step adjustments in the *Application Auto Scaling User Guide*.
   * You can find a sample template snippet in the Examples section of the `AWS::ApplicationAutoScaling::ScalingPolicy` documentation.
   */
  export type StepAdjustmentType = {
    /**
     * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
     * You must specify at least one upper or lower bound.
     */
    MetricIntervalUpperBound?: number;

    /**
     * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
     * You must specify at least one upper or lower bound.
     */
    MetricIntervalLowerBound?: number;

    /**
     * The amount by which to scale. The adjustment is based on the value that you specified in the `AdjustmentType` property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity.
     */
    ScalingAdjustment: number;
  };

  /**
   * Contains predefined metric specification information for a target tracking scaling policy for Application Auto Scaling.
   * `PredefinedMetricSpecification` is a property of the AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingScalingPolicyConfiguration property type.
   */
  export type PredefinedMetricSpecificationType = {
    /**
     * The metric type. The `ALBRequestCountPerTarget` metric type applies only to Spot fleet requests and ECS services.
     */
    PredefinedMetricType: string;

    /**
     * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is `ALBRequestCountPerTarget` and there is a target group attached to the Spot Fleet or ECS service.
     * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
     * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
     * Where:
     * +  app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
     * +  targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
     * To find the ARN for an Application Load Balancer, use the DescribeLoadBalancers API operation. To find the ARN for the target group, use the DescribeTargetGroups API operation.
     */
    ResourceLabel?: string;
  };

  /**
   * `MetricDimension` specifies a name/value pair that is part of the identity of a CloudWatch metric for the `Dimensions` property of the AWS::ApplicationAutoScaling::ScalingPolicy CustomizedMetricSpecification property type. Duplicate dimensions are not allowed.
   */
  export type MetricDimensionType = {
    /**
     * The value of the dimension.
     */
    Value: string;

    /**
     * The name of the dimension.
     */
    Name: string;
  };

  /**
   * Represents a predictive scaling policy configuration.
   */
  export type PredictiveScalingPolicyConfigurationType = {
    /**
     * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity. Defaults to `HonorMaxCapacity` if not specified.
     */
    MaxCapacityBreachBehavior?: string;

    /**
     * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.
     * Required if the `MaxCapacityBreachBehavior` property is set to `IncreaseMaxCapacity`, and cannot be used otherwise.
     */
    MaxCapacityBuffer?: number;

    /**
     * The predictive scaling mode. Defaults to `ForecastOnly` if not specified.
     */
    Mode?: string;

    /**
     * This structure includes the metrics and target utilization to use for predictive scaling.
     * This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.
     */
    MetricSpecifications: PredictiveScalingMetricSpecificationType[];

    /**
     * The amount of time, in seconds, that the start time can be advanced.
     * The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.
     */
    SchedulingBufferTime?: number;
  };

  /**
   * Describes a scaling metric for a predictive scaling policy.
   * When returned in the output of `DescribePolicies`, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
   */
  export type PredictiveScalingPredefinedScalingMetricType = {
    /**
     * The metric type.
     */
    PredefinedMetricType: string;

    /**
     * A label that uniquely identifies a specific target group from which to determine the average request count.
     */
    ResourceLabel?: string;
  };

  /**
   * This structure specifies the metrics and target utilization settings for a predictive scaling policy.
   * You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.
   */
  export type PredictiveScalingMetricSpecificationType = {
    /**
     * The customized load metric specification.
     */
    CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetricType;

    /**
     * The predefined load metric specification.
     */
    PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetricType;

    /**
     * Specifies the target utilization.
     */
    TargetValue: number;

    /**
     * The predefined scaling metric specification.
     */
    PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetricType;

    /**
     * The customized capacity metric specification.
     */
    CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetricType;

    /**
     * The customized scaling metric specification.
     */
    CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetricType;

    /**
     * The predefined metric pair specification that determines the appropriate scaling metric and load metric to use.
     */
    PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPairType;
  };

  /**
   * Describes the scaling metric.
   */
  export type PredictiveScalingMetricType = {
    /**
     * The name of the metric.
     */
    MetricName?: string;

    /**
     * Describes the dimensions of the metric.
     */
    Dimensions?: PredictiveScalingMetricDimensionType[];

    /**
     * The namespace of the metric.
     */
    Namespace?: string;
  };

  /**
   * The customized load metric specification.
   */
  export type PredictiveScalingCustomizedLoadMetricType = {
    MetricDataQueries: PredictiveScalingMetricDataQueryType[];
  };

  /**
   * Represents a specific metric for a target tracking scaling policy for Application Auto Scaling.
   * Metric is a property of the AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingMetricStat property type.
   */
  export type TargetTrackingMetricType = {
    /**
     * The name of the metric.
     */
    MetricName?: string;

    /**
     * The dimensions for the metric. For the list of available dimensions, see the AWS documentation available from the table in services that publish CloudWatch metrics in the *Amazon CloudWatch User Guide*.
     * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
     */
    Dimensions?: TargetTrackingMetricDimensionType[];

    /**
     * The namespace of the metric. For more information, see the table in services that publish CloudWatch metrics in the *Amazon CloudWatch User Guide*.
     */
    Namespace?: string;
  };

  /**
   * This structure defines the CloudWatch metric to return, along with the statistic and unit.
   */
  export type PredictiveScalingMetricStatType = {
    /**
     * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in Statistics in the *Amazon CloudWatch User Guide*.
     * The most commonly used metrics for predictive scaling are `Average` and `Sum`.
     */
    Stat?: string;

    /**
     * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the Metric object that is returned by a call to ListMetrics.
     */
    Metric?: PredictiveScalingMetricType;

    /**
     * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the MetricDatum data type in the *Amazon CloudWatch API Reference*.
     */
    Unit?: string;
  };

  /**
   * `StepScalingPolicyConfiguration` is a property of the AWS::ApplicationAutoScaling::ScalingPolicy resource that specifies a step scaling policy configuration for Application Auto Scaling.
   * For more information, see Step scaling policies in the *Application Auto Scaling User Guide*.
   */
  export type StepScalingPolicyConfigurationType = {
    /**
     * The aggregation type for the CloudWatch metrics. Valid values are `Minimum`, `Maximum`, and `Average`. If the aggregation type is null, the value is treated as `Average`.
     */
    MetricAggregationType?: string;

    /**
     * The amount of time, in seconds, to wait for a previous scaling activity to take effect. If not specified, the default value is 300. For more information, see Cooldown period in the *Application Auto Scaling User Guide*.
     */
    Cooldown?: number;

    /**
     * A set of adjustments that enable you to scale based on the size of the alarm breach.
     * At least one step adjustment is required if you are adding a new step scaling policy configuration.
     */
    StepAdjustments?: StepAdjustmentType[];

    /**
     * The minimum value to scale by when the adjustment type is `PercentChangeInCapacity`. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a `MinAdjustmentMagnitude` of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a `MinAdjustmentMagnitude` of 2, Application Auto Scaling scales out the service by 2 tasks.
     */
    MinAdjustmentMagnitude?: number;

    /**
     * Specifies whether the `ScalingAdjustment` value in the `StepAdjustment` property is an absolute number or a percentage of the current capacity.
     */
    AdjustmentType?: string;
  };

  /**
   * The `AWS::ApplicationAutoScaling::ScalingPolicy` resource defines a scaling policy that Application Auto Scaling uses to adjust the capacity of a scalable target.
   * For more information, see Target tracking scaling policies and Step scaling policies in the *Application Auto Scaling User Guide*.
   */
  export type ScalingPolicyResourceType = {
    /**
     * The scaling policy type.
     * The following policy types are supported:
     * `TargetTrackingScaling`—Not supported for Amazon EMR
     * `StepScaling`—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
     */
    PolicyType: string;

    /**
     * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
     * +  ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
     * +  Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
     * +  EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
     * +  AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
     * +  DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
     * +  DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
     * +  Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
     * +  SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
     * +  Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.
     * +  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
     * +  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
     * +  Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
     * +  Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
     * +  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
     * +  Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
     * +  Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
     * +  SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
     * +  SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
     * +  Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
     * Create-only property
     */
    ResourceId?: string;

    /**
     * The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the `AWS::ApplicationAutoScaling::ScalableTarget` resource.
     * You must specify either the `ScalingTargetId` property, or the `ResourceId`, `ScalableDimension`, and `ServiceNamespace` properties, but not both.
     * Create-only property
     */
    ScalingTargetId?: string;

    /**
     * The name of the scaling policy.
     * Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing `AWS::ApplicationAutoScaling::ScalingPolicy` resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.
     * Create-only property
     */
    PolicyName: string;

    /**
     * The namespace of the AWS service that provides the resource, or a `custom-resource`.
     * Create-only property
     */
    ServiceNamespace?: string;

    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
     * +   `ecs:service:DesiredCount` - The task count of an ECS service.
     * +   `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
     * +   `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
     * +   `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
     * +   `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
     * +   `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
     * +   `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
     * +   `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
     * +   `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
     * +   `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
     * +   `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
     * +   `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
     * +   `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
     * +   `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
     * +   `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
     * +   `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
     * +   `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
     * +   `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
     * +   `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
     * +   `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
     * +   `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
     * +   `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
     * +   `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
     * Create-only property
     */
    ScalableDimension?: string;

    /**
     * A target tracking scaling policy.
     */
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfigurationType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * A step scaling policy.
     */
    StepScalingPolicyConfiguration?: StepScalingPolicyConfigurationType;

    /**
     * The predictive scaling policy configuration.
     */
    PredictiveScalingPolicyConfiguration?: PredictiveScalingPolicyConfigurationType;
  };
}
