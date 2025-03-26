/**
 * TypeScript definitions for AWS::IoT::SecurityProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * A security profile defines a set of expected behaviors for devices in your account.
 */
export namespace AWS_IoT_SecurityProfile {
  /**
   * A security profile behavior.
   */
  export type BehaviorType = {
    /**
     * The name for the behavior.
     */
    Name: string;

    /**
     * What is measured by the behavior.
     */
    Metric?: string;

    MetricDimension?: MetricDimensionType;

    Criteria?: BehaviorCriteriaType;

    /**
     * Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.
     */
    SuppressAlerts?: boolean;

    ExportMetric?: ExportMetricType;
  };

  /**
   * Flag to enable/disable metrics export for metric to be retained.
   */
  export type ExportMetricType = {};

  /**
   * The dimension of a metric.
   */
  export type MetricDimensionType = {
    /**
     * A unique identifier for the dimension.
     */
    DimensionName: string;

    /**
     * Defines how the dimensionValues of a dimension are interpreted.
     */
    Operator?: string;
  };

  /**
   * The criteria by which the behavior is determined to be normal.
   */
  export type BehaviorCriteriaType = {
    /**
     * The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).
     */
    ComparisonOperator?: string;

    Value?: MetricValueType;

    /**
     * Use this to specify the time duration over which the behavior is evaluated.
     */
    DurationSeconds?: number;

    /**
     * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
     */
    ConsecutiveDatapointsToAlarm?: number;

    /**
     * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
     */
    ConsecutiveDatapointsToClear?: number;

    StatisticalThreshold?: StatisticalThresholdType;

    MlDetectionConfig?: MachineLearningDetectionConfigType;
  };

  /**
   * The value to be compared with the metric.
   */
  export type MetricValueType = {
    /**
     * If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.
     */
    Count?: string;

    /**
     * If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.
     */
    Cidrs?: string[];

    /**
     * If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.
     */
    Ports?: number[];

    /**
     * The numeral value of a metric.
     */
    Number?: number;

    /**
     * The numeral values of a metric.
     */
    Numbers?: number[];

    /**
     * The string values of a metric.
     */
    Strings?: string[];
  };

  /**
   * A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
   */
  export type StatisticalThresholdType = {
    /**
     * The percentile which resolves to a threshold value by which compliance with a behavior is determined
     */
    Statistic?: string;
  };

  /**
   * The configuration of an ML Detect Security Profile.
   */
  export type MachineLearningDetectionConfigType = {
    /**
     * The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.
     */
    ConfidenceLevel?: string;
  };

  /**
   * A structure containing the alert target ARN and the role ARN.
   */
  export type AlertTargetType = {
    /**
     * The ARN of the notification target to which alerts are sent.
     */
    AlertTargetArn: string;

    /**
     * The ARN of the role that grants permission to send alerts to the notification target.
     */
    RoleArn: string;
  };

  /**
   * The metric you want to retain. Dimensions are optional.
   */
  export type MetricToRetainType = {
    /**
     * What is measured by the behavior.
     */
    Metric: string;

    MetricDimension?: MetricDimensionType;

    ExportMetric?: ExportMetricType;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * A security profile defines a set of expected behaviors for devices in your account.
   */
  export type SecurityProfileResourceType = {
    /**
     * A unique identifier for the security profile.
     * Create-only property
     */
    SecurityProfileName?: string;

    /**
     * A description of the security profile.
     */
    SecurityProfileDescription?: string;

    /**
     * Specifies the behaviors that, when violated by a device (thing), cause an alert.
     */
    Behaviors?: BehaviorType[];

    /**
     * Specifies the destinations to which alerts are sent.
     */
    AlertTargets?: Record<string, any>;

    /**
     * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.
     */
    AdditionalMetricsToRetainV2?: MetricToRetainType[];

    /**
     * A structure containing the mqtt topic for metrics export.
     */
    MetricsExportConfig?: Record<string, any>;

    /**
     * Metadata that can be used to manage the security profile.
     */
    Tags?: TagType[];

    /**
     * A set of target ARNs that the security profile is attached to.
     */
    TargetArns?: string[];

    /**
     * The ARN (Amazon resource name) of the created security profile.
     * Read-only property
     */
    SecurityProfileArn?: string;
  };
}
