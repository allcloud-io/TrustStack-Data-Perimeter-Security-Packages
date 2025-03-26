/**
 * TypeScript definitions for AWS::CloudWatch::MetricStream
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Metric Stream
 */
export namespace AWS_CloudWatch_MetricStream {
  /**
   * This structure defines the metrics that will be streamed.
   */
  export type MetricStreamFilterType = {
    /**
     * Only metrics with Namespace matching this value will be streamed.
     */
    Namespace: string;

    /**
     * Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.
     */
    MetricNames?: string[];
  };

  /**
   * This structure specifies a list of additional statistics to stream, and the metrics to stream those additional statistics for. All metrics that match the combination of metric name and namespace will be streamed with the extended statistics, no matter their dimensions.
   */
  export type MetricStreamStatisticsConfigurationType = {
    /**
     * The additional statistics to stream for the metrics listed in IncludeMetrics.
     */
    AdditionalStatistics: string[];

    /**
     * An array that defines the metrics that are to have additional statistics streamed.
     */
    IncludeMetrics: MetricStreamStatisticsMetricType[];
  };

  /**
   * A structure that specifies the metric name and namespace for one metric that is going to have additional statistics included in the stream.
   */
  export type MetricStreamStatisticsMetricType = {
    /**
     * The name of the metric.
     */
    MetricName: string;

    /**
     * The namespace of the metric.
     */
    Namespace: string;
  };

  /**
   * Metadata that you can assign to a Metric Stream, consisting of a key-value pair.
   */
  export type TagType = {
    /**
     * A unique identifier for the tag.
     */
    Key: string;

    /**
     * String which you can use to describe or define the tag.
     */
    Value: string;
  };

  /**
   * Resource Type definition for Metric Stream
   */
  export type MetricStreamResourceType = {
    /**
     * Amazon Resource Name of the metric stream.
     * Read-only property
     */
    Arn?: string;

    /**
     * The date of creation of the metric stream.
     * Read-only property
     */
    CreationDate?: string;

    /**
     * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    ExcludeFilters?: MetricStreamFilterType[];

    /**
     * The ARN of the Kinesis Firehose where to stream the data.
     */
    FirehoseArn?: string;

    /**
     * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    IncludeFilters?: MetricStreamFilterType[];

    /**
     * The date of the last update of the metric stream.
     * Read-only property
     */
    LastUpdateDate?: string;

    /**
     * Name of the metric stream.
     * Create-only property
     */
    Name?: string;

    /**
     * The ARN of the role that provides access to the Kinesis Firehose.
     */
    RoleArn?: string;

    /**
     * Displays the state of the Metric Stream.
     * Read-only property
     */
    State?: string;

    /**
     * The output format of the data streamed to the Kinesis Firehose.
     */
    OutputFormat?: string;

    /**
     * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
     */
    StatisticsConfigurations?: MetricStreamStatisticsConfigurationType[];

    /**
     * A set of tags to assign to the delivery stream.
     */
    Tags?: TagType[];

    /**
     * If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is false.
     */
    IncludeLinkedAccountsMetrics?: boolean;
  };
}
