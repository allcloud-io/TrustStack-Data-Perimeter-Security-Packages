/**
 * TypeScript definitions for AWS::ApplicationSignals::ServiceLevelObjective
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ApplicationSignals::ServiceLevelObjective
 */
export namespace AWS_ApplicationSignals_ServiceLevelObjective {
  /**
   * This structure contains information about the performance metric that an SLO monitors.
   */
  export type SliType = {
    SliMetric: SliMetricType;

    /**
     * The value that the SLI metric is compared to.
     */
    MetricThreshold: number;

    /**
     * The arithmetic operation used when comparing the specified metric to the threshold.
     */
    ComparisonOperator: string;
  };

  /**
   * This structure contains information about the performance metric that a request-based SLO monitors.
   */
  export type RequestBasedSliType = {
    RequestBasedSliMetric: RequestBasedSliMetricType;

    /**
     * The value that the SLI metric is compared to.
     */
    MetricThreshold?: number;

    /**
     * The arithmetic operation used when comparing the specified metric to the threshold.
     */
    ComparisonOperator?: string;
  };

  /**
   * A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.
   */
  export type GoalType = {
    Interval?: IntervalType;

    /**
     * The threshold that determines if the goal is being met. An attainment goal is the ratio of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
     * If you omit this parameter, 99 is used to represent 99% as the attainment goal.
     */
    AttainmentGoal?: number;

    /**
     * The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used.
     */
    WarningThreshold?: number;
  };

  /**
   * A structure that contains information about the metric that the SLO monitors.
   */
  export type SliMetricType = {
    KeyAttributes?: KeyAttributesType;

    /**
     * If the SLO monitors a specific operation of the service, this field displays that operation name.
     */
    OperationName?: string;

    /**
     * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
     */
    MetricType?: string;

    /**
     * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic
     */
    Statistic?: string;

    /**
     * The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
     */
    PeriodSeconds?: number;

    MetricDataQueries?: MetricDataQueriesType;
  };

  /**
   * This structure contains the information about the metric that is used for a request-based SLO.
   */
  export type RequestBasedSliMetricType = {
    KeyAttributes?: KeyAttributesType;

    /**
     * If the SLO monitors a specific operation of the service, this field displays that operation name.
     */
    OperationName?: string;

    /**
     * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
     */
    MetricType?: string;

    /**
     * This structure defines the metric that is used as the "total requests" number for a request-based SLO. The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in `MonitoredRequestCountMetric`.
     */
    TotalRequestCountMetric?: MetricDataQueriesType;

    MonitoredRequestCountMetric?: MonitoredRequestCountMetricType;
  };

  /**
   * This structure defines the metric that is used as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in `TotalRequestCountMetric` is divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
   */
  export type MonitoredRequestCountMetricType = {
    /**
     * If you want to count "good requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "good requests" in this structure.
     */
    GoodCountMetric?: MetricDataQueriesType;

    /**
     * If you want to count "bad requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "bad requests" in this structure.
     */
    BadCountMetric?: MetricDataQueriesType;
  };

  /**
   * This is a string-to-string map that contains information about the type of object that this SLO is related to.
   */
  export type KeyAttributesType = {};

  /**
   * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
   * If you omit this parameter, a rolling interval of 7 days is used.
   */
  export type IntervalType = {
    RollingInterval?: RollingIntervalType;

    CalendarInterval?: CalendarIntervalType;
  };

  /**
   * If the interval is a calendar interval, this structure contains the interval specifications.
   */
  export type RollingIntervalType = {
    DurationUnit: DurationUnitType;

    Duration: DurationType;
  };

  /**
   * If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.
   */
  export type CalendarIntervalType = {
    /**
     * Epoch time in seconds you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.
     * As soon as one calendar interval ends, another automatically begins.
     */
    StartTime: number;

    DurationUnit: DurationUnitType;

    Duration: DurationType;
  };

  /**
   * Specifies the calendar interval unit.
   */
  export type DurationUnitType = {};

  /**
   * Specifies the duration of each calendar interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
   */
  export type DurationType = {};

  /**
   * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, this structure includes the information about that metric or expression.
   */
  export type MetricDataQueriesType = {};

  /**
   * Use this structure to define a metric or metric math expression that you want to use as for a service level objective.
   * Each `MetricDataQuery` in the `MetricDataQueries` array specifies either a metric to retrieve, or a metric math expression to be performed on retrieved metrics. A single `MetricDataQueries` array can include as many as 20 `MetricDataQuery` structures in the array. The 20 structures can include as many as 10 structures that contain a `MetricStat` parameter to retrieve a metric, and as many as 10 structures that contain the `Expression` parameter to perform a math expression. Of those Expression structures, exactly one must have true as the value for `ReturnData`. The result of this expression used for the SLO.
   */
  export type MetricDataQueryType = {
    /**
     * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
     */
    MetricStat?: MetricStatType;

    /**
     * A short name used to tie this object to the results in the response.
     */
    Id: string;

    /**
     * This option indicates whether to return the timestamps and raw data values of this metric.
     */
    ReturnData?: boolean;

    /**
     * The math expression to be performed on the returned data.
     */
    Expression?: string;

    /**
     * The ID of the account where the metrics are located, if this is a cross-account alarm.
     */
    AccountId?: string;
  };

  /**
   * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery object, you must specify either Expression or MetricStat but not both.
   */
  export type MetricStatType = {
    /**
     * The granularity, in seconds, to be used for the metric.
     */
    Period: number;

    Metric: MetricType;

    /**
     * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
     */
    Stat: string;

    /**
     * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
     */
    Unit?: string;
  };

  /**
   * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
   */
  export type MetricType = {
    /**
     * The name of the metric to use.
     */
    MetricName?: string;

    /**
     * An array of one or more dimensions to use to define the metric that you want to use.
     */
    Dimensions?: DimensionType[];

    /**
     * The namespace of the metric.
     */
    Namespace?: string;
  };

  /**
   * A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish `InstanceId` as a dimension name, and the actual instance ID as the value for that dimension. You can assign up to 30 dimensions to a metric.
   */
  export type DimensionType = {
    /**
     * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
     */
    Value: string;

    /**
     * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
     */
    Name: string;
  };

  /**
   * The list of tag keys and values associated with the resource you specified
   */
  export type TagsType = {};

  export type TagType = {
    /**
     * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
     */
    Key: string;

    /**
     * The value for the specified tag key.
     */
    Value: string;
  };

  /**
   * Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.
   */
  export type BurnRateConfigurationsType = {};

  /**
   * This object defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO. A burn rate of exactly 1 indicates that the SLO goal will be met exactly.
   * For example, if you specify 60 as the number of minutes in the look-back window, the burn rate is calculated as the following:
   * burn rate = error rate over the look-back window / (1 - attainment goal percentage)
   */
  export type BurnRateConfigurationType = {
    /**
     * The number of minutes to use as the look-back window.
     */
    LookBackWindowMinutes: number;
  };

  /**
   * Resource Type definition for AWS::ApplicationSignals::ServiceLevelObjective
   */
  export type ServiceLevelObjectiveResourceType = {
    /**
     * The ARN of this SLO.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of this SLO.
     * Create-only property
     */
    Name: string;

    /**
     * An optional description for this SLO. Default is 'No description'
     * Default: "No description"
     */
    Description?: string;

    /**
     * Epoch time in seconds of the time that this SLO was created
     * Read-only property
     */
    CreatedTime?: number;

    /**
     * Epoch time in seconds of the time that this SLO was most recently updated
     * Read-only property
     */
    LastUpdatedTime?: number;

    Sli?: SliType;

    RequestBasedSli?: RequestBasedSliType;

    /**
     * Displays whether this is a period-based SLO or a request-based SLO.
     * Read-only property
     */
    EvaluationType?: string;

    Goal?: GoalType;

    Tags?: TagsType;

    BurnRateConfigurations?: BurnRateConfigurationsType;
  };
}
