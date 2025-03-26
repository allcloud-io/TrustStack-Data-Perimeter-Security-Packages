/**
 * TypeScript definitions for AWS::Logs::MetricFilter
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::Logs::MetricFilter` resource specifies a metric filter that describes how CWL extracts information from logs and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
 * The maximum number of metric filters that can be associated with a log group is 100.
 */
export namespace AWS_Logs_MetricFilter {
  /**
   * `MetricTransformation` is a property of the `AWS::Logs::MetricFilter` resource that describes how to transform log streams into a CloudWatch metric.
   */
  export type MetricTransformationType = {
    /**
     * (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.
     */
    DefaultValue?: number;

    /**
     * The name of the CloudWatch metric.
     */
    MetricName: string;

    /**
     * The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like `Error`, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size`.
     */
    MetricValue: string;

    /**
     * A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see Namespaces.
     */
    MetricNamespace: string;

    /**
     * The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.
     * Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
     * CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
     * You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see Creating a Billing Alarm to Monitor Your Estimated Charges.
     */
    Dimensions?: DimensionType[];

    /**
     * The unit to assign to the metric. If you omit this, the unit is set as `None`.
     */
    Unit?: string;
  };

  /**
   * Specifies the CW metric dimensions to publish with this metric.
   * Because dimensions are part of the unique identifier for a metric, whenever a unique dimension name/value pair is extracted from your logs, you are creating a new variation of that metric.
   * For more information about publishing dimensions with metrics created by metric filters, see Publishing dimensions with metrics from values in JSON or space-delimited log events.
   * Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
   * To help prevent accidental high charges, Amazon disables a metric filter if it generates 1000 different name/value pairs for the dimensions that you have specified within a certain amount of time.
   * You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see Creating a Billing Alarm to Monitor Your Estimated Charges.
   */
  export type DimensionType = {
    /**
     * The log event field that will contain the value for this dimension. This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.
     */
    Value: string;

    /**
     * The name for the CW metric dimension that the metric filter creates.
     * Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).
     */
    Key: string;
  };

  /**
   * The `AWS::Logs::MetricFilter` resource specifies a metric filter that describes how CWL extracts information from logs and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
   * The maximum number of metric filters that can be associated with a log group is 100.
   */
  export type MetricFilterResourceType = {
    /**
     * The metric transformations.
     */
    MetricTransformations: MetricTransformationType[];

    /**
     * A filter pattern for extracting metric data out of ingested log events. For more information, see Filter and Pattern Syntax.
     */
    FilterPattern: string;

    /**
     * The name of an existing log group that you want to associate with this metric filter.
     * Create-only property
     */
    LogGroupName: string;

    /**
     * This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see PutTransformer.
     * If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.
     */
    ApplyOnTransformedLogs?: boolean;

    /**
     * The name of the metric filter.
     * Create-only property
     */
    FilterName?: string;
  };
}
