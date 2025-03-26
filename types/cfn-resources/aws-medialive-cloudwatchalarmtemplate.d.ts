/**
 * TypeScript definitions for AWS::MediaLive::CloudWatchAlarmTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplate Resource Type
 */
export namespace AWS_MediaLive_CloudWatchAlarmTemplate {
  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   */
  export type CloudWatchAlarmTemplateComparisonOperatorType = {};

  /**
   * The statistic to apply to the alarm's metric data.
   */
  export type CloudWatchAlarmTemplateStatisticType = {};

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   */
  export type CloudWatchAlarmTemplateTargetResourceTypeType = {};

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   */
  export type CloudWatchAlarmTemplateTreatMissingDataType = {};

  /**
   * Represents the tags associated with a resource.
   */
  export type TagMapType = {};

  /**
   * Definition of AWS::MediaLive::CloudWatchAlarmTemplate Resource Type
   */
  export type CloudWatchAlarmTemplateResourceType = {
    /**
     * A cloudwatch alarm template's ARN (Amazon Resource Name)
     * Read-only property
     */
    Arn?: string;

    ComparisonOperator: CloudWatchAlarmTemplateComparisonOperatorType;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
     * Default: 0
     */
    DatapointsToAlarm?: number;

    /**
     * A resource's optional description.
     */
    Description?: string;

    /**
     * The number of periods over which data is compared to the specified threshold.
     * Default: 0
     */
    EvaluationPeriods: number;

    /**
     * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
     * Read-only property
     */
    GroupId?: string;

    /**
     * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
     */
    GroupIdentifier?: string;

    /**
     * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Identifier?: string;

    /**
     * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
     */
    MetricName: string;

    /**
     * Read-only property
     */
    ModifiedAt?: string;

    /**
     * A resource's name. Names must be unique within the scope of a resource type in a specific region.
     */
    Name: string;

    /**
     * The period, in seconds, over which the specified statistic is applied.
     * Default: 0
     */
    Period: number;

    Statistic: CloudWatchAlarmTemplateStatisticType;

    /**
     * Create-only property
     */
    Tags?: TagMapType;

    TargetResourceType: CloudWatchAlarmTemplateTargetResourceTypeType;

    /**
     * The threshold value to compare with the specified statistic.
     * Default: 0
     */
    Threshold: number;

    TreatMissingData: CloudWatchAlarmTemplateTreatMissingDataType;
  };
}
