/**
 * TypeScript definitions for AWS::FraudDetector::Detector
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource schema for a Detector in Amazon Fraud Detector.
 */
export namespace AWS_FraudDetector_Detector {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type EventVariableType = {
    Arn?: string;

    Inline?: boolean;

    Name?: string;

    DataSource?: string;

    DataType?: string;

    DefaultValue?: string;

    VariableType?: string;

    /**
     * The description.
     */
    Description?: string;

    /**
     * Tags associated with this event variable.
     */
    Tags?: TagType[];

    /**
     * The time when the event variable was created.
     */
    CreatedTime?: string;

    /**
     * The time when the event variable was last updated.
     */
    LastUpdatedTime?: string;
  };

  export type LabelType = {
    Arn?: string;

    Inline?: boolean;

    Name?: string;

    /**
     * The description.
     */
    Description?: string;

    /**
     * Tags associated with this label.
     */
    Tags?: TagType[];

    /**
     * The time when the label was created.
     */
    CreatedTime?: string;

    /**
     * The time when the label was last updated.
     */
    LastUpdatedTime?: string;
  };

  export type OutcomeType = {
    Arn?: string;

    Inline?: boolean;

    Name?: string;

    /**
     * The description.
     */
    Description?: string;

    /**
     * Tags associated with this outcome.
     */
    Tags?: TagType[];

    /**
     * The time when the outcome was created.
     */
    CreatedTime?: string;

    /**
     * The time when the outcome was last updated.
     */
    LastUpdatedTime?: string;
  };

  export type RuleType = {
    RuleId?: string;

    RuleVersion?: string;

    DetectorId?: string;

    Expression?: string;

    Language?: string;

    Outcomes?: OutcomeType[];

    Arn?: string;

    /**
     * The description.
     */
    Description?: string;

    /**
     * Tags associated with this event type.
     */
    Tags?: TagType[];

    /**
     * The time when the event type was created.
     */
    CreatedTime?: string;

    /**
     * The time when the event type was last updated.
     */
    LastUpdatedTime?: string;
  };

  export type EntityTypeType = {
    Arn?: string;

    Inline?: boolean;

    Name?: string;

    /**
     * The description.
     */
    Description?: string;

    /**
     * Tags associated with this entity type.
     */
    Tags?: TagType[];

    /**
     * The time when the entity type was created.
     */
    CreatedTime?: string;

    /**
     * The time when the entity type was last updated.
     */
    LastUpdatedTime?: string;
  };

  export type EventTypeType = {
    /**
     * The name for the event type
     */
    Name?: string;

    Inline?: boolean;

    /**
     * Tags associated with this event type.
     */
    Tags?: TagType[];

    /**
     * The description of the event type.
     */
    Description?: string;

    EventVariables?: EventVariableType[];

    Labels?: LabelType[];

    EntityTypes?: EntityTypeType[];

    /**
     * The ARN of the event type.
     */
    Arn?: string;

    /**
     * The time when the event type was created.
     */
    CreatedTime?: string;

    /**
     * The time when the event type was last updated.
     */
    LastUpdatedTime?: string;
  };

  /**
   * A model to associate with a detector.
   */
  export type ModelType = {
    Arn?: string;
  };

  /**
   * A resource schema for a Detector in Amazon Fraud Detector.
   */
  export type DetectorResourceType = {
    /**
     * The ID of the detector
     * Create-only property
     */
    DetectorId: string;

    /**
     * The desired detector version status for the detector
     */
    DetectorVersionStatus?: string;

    /**
     * The active version ID of the detector
     * Read-only property
     */
    DetectorVersionId?: string;

    RuleExecutionMode?: string;

    /**
     * Tags associated with this detector.
     */
    Tags?: TagType[];

    /**
     * The description of the detector.
     */
    Description?: string;

    Rules: RuleType[];

    /**
     * The event type to associate this detector with.
     */
    EventType: EventTypeType;

    /**
     * The ARN of the detector.
     * Read-only property
     */
    Arn?: string;

    /**
     * The time when the detector was created.
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * The time when the detector was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;

    /**
     * The models to associate with this detector.
     */
    AssociatedModels?: ModelType[];
  };
}
