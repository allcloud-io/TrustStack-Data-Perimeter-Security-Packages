/**
 * TypeScript definitions for AWS::Evidently::Launch
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Evidently::Launch.
 */
export namespace AWS_Evidently_Launch {
  export type ExecutionStatusObjectType = {
    /**
     * Provide START or STOP action to apply on a launch
     */
    Status: string;

    /**
     * Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.
     */
    DesiredState?: string;

    /**
     * Provide a reason for stopping the launch. Defaults to empty if not provided.
     */
    Reason?: string;
  };

  export type LaunchGroupObjectType = {
    GroupName: string;

    Description?: string;

    Feature: string;

    Variation: string;
  };

  export type GroupToWeightType = {
    GroupName: string;

    SplitWeight: number;
  };

  export type SegmentOverrideType = {
    Segment: string;

    EvaluationOrder: number;

    Weights: GroupToWeightType[];
  };

  export type StepConfigType = {
    StartTime: string;

    GroupWeights: GroupToWeightType[];

    SegmentOverrides?: SegmentOverrideType[];
  };

  export type MetricDefinitionObjectType = {
    MetricName: string;

    /**
     * The JSON path to reference the entity id in the event.
     */
    EntityIdKey: string;

    /**
     * The JSON path to reference the numerical metric value in the event.
     */
    ValueKey: string;

    /**
     * Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
     */
    EventPattern?: string;

    UnitLabel?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::Evidently::Launch.
   */
  export type LaunchResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Project: string;

    Description?: string;

    RandomizationSalt?: string;

    ScheduledSplitsConfig: StepConfigType[];

    Groups: LaunchGroupObjectType[];

    MetricMonitors?: MetricDefinitionObjectType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Start or Stop Launch Launch. Default is not started.
     */
    ExecutionStatus?: ExecutionStatusObjectType;
  };
}
