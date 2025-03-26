/**
 * TypeScript definitions for AWS::Evidently::Experiment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Evidently::Experiment.
 */
export namespace AWS_Evidently_Experiment {
  export type RunningStatusObjectType = {
    /**
     * Provide START or STOP action to apply on an experiment
     */
    Status?: string;

    /**
     * Provide the analysis Completion time for an experiment
     */
    AnalysisCompleteTime?: string;

    /**
     * Reason is a required input for stopping the experiment
     */
    Reason?: string;

    /**
     * Provide CANCELLED or COMPLETED desired state when stopping an experiment
     */
    DesiredState?: string;
  };

  export type TreatmentObjectType = {
    TreatmentName: string;

    Description?: string;

    Feature: string;

    Variation: string;
  };

  export type MetricGoalObjectType = {
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

    DesiredChange: string;
  };

  export type OnlineAbConfigObjectType = {
    ControlTreatmentName?: string;

    TreatmentWeights?: TreatmentToWeightType[];
  };

  export type TreatmentToWeightType = {
    Treatment: string;

    SplitWeight: number;
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
   * Resource Type definition for AWS::Evidently::Experiment.
   */
  export type ExperimentResourceType = {
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

    /**
     * Start Experiment. Default is False
     */
    RunningStatus?: RunningStatusObjectType;

    RandomizationSalt?: string;

    Treatments: TreatmentObjectType[];

    MetricGoals: MetricGoalObjectType[];

    SamplingRate?: number;

    OnlineAbConfig: OnlineAbConfigObjectType;

    Segment?: string;

    RemoveSegment?: boolean;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
