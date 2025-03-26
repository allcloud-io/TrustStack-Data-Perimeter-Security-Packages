/**
 * TypeScript definitions for AWS::FraudDetector::EventType
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource schema for an EventType in Amazon Fraud Detector.
 */
export namespace AWS_FraudDetector_EventType {
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

  export type LabelType = {
    Arn?: string;

    Inline?: boolean;

    Name?: string;

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

  /**
   * A resource schema for an EventType in Amazon Fraud Detector.
   */
  export type EventTypeResourceType = {
    /**
     * The name for the event type
     * Create-only property
     */
    Name: string;

    /**
     * Tags associated with this event type.
     */
    Tags?: TagType[];

    /**
     * The description of the event type.
     */
    Description?: string;

    EventVariables: EventVariableType[];

    Labels: LabelType[];

    EntityTypes: EntityTypeType[];

    /**
     * The ARN of the event type.
     * Read-only property
     */
    Arn?: string;

    /**
     * The time when the event type was created.
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * The time when the event type was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;
  };
}
