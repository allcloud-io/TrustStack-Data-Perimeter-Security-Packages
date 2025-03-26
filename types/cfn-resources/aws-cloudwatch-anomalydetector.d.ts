/**
 * TypeScript definitions for AWS::CloudWatch::AnomalyDetector
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudWatch::AnomalyDetector
 */
export namespace AWS_CloudWatch_AnomalyDetector {
  export type MetricCharacteristicsType = {
    PeriodicSpikes?: boolean;
  };

  export type MetricMathAnomalyDetectorType = {
    MetricDataQueries?: MetricDataQueryType[];
  };

  export type ConfigurationType = {
    MetricTimeZone?: string;

    ExcludedTimeRanges?: RangeType[];
  };

  export type MetricStatType = {
    Period: number;

    Metric: MetricType;

    Stat: string;

    Unit?: string;
  };

  export type MetricType = {
    MetricName: string;

    Dimensions?: DimensionType[];

    Namespace: string;
  };

  export type DimensionType = {
    Value: string;

    Name: string;
  };

  export type MetricDataQueryType = {
    AccountId?: string;

    ReturnData?: boolean;

    Expression?: string;

    MetricStat?: MetricStatType;

    Label?: string;

    Period?: number;

    Id: string;
  };

  export type RangeType = {
    EndTime: string;

    StartTime: string;
  };

  export type SingleMetricAnomalyDetectorType = {
    MetricName?: string;

    Dimensions?: DimensionType[];

    AccountId?: string;

    Stat?: string;

    Namespace?: string;
  };

  /**
   * Resource Type definition for AWS::CloudWatch::AnomalyDetector
   */
  export type AnomalyDetectorResourceType = {
    /**
     * Create-only property
     */
    MetricCharacteristics?: MetricCharacteristicsType;

    /**
     * Create-only property
     */
    MetricName?: string;

    /**
     * Create-only property
     */
    Stat?: string;

    Configuration?: ConfigurationType;

    /**
     * Create-only property
     */
    MetricMathAnomalyDetector?: MetricMathAnomalyDetectorType;

    /**
     * Create-only property
     */
    Dimensions?: DimensionType[];

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Namespace?: string;

    /**
     * Create-only property
     */
    SingleMetricAnomalyDetector?: SingleMetricAnomalyDetectorType;
  };
}
