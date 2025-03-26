/**
 * TypeScript definitions for AWS::CloudTrail::EventDataStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 7 to 2557 or 3653 days (about seven or ten years) depending on the selected BillingMode.
 */
export namespace AWS_CloudTrail_EventDataStore {
  /**
   * A single selector statement in an advanced event selector.
   */
  export type AdvancedFieldSelectorType = {
    /**
     * A field in an event record on which to filter events to be logged. Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.
     */
    Field: string;

    /**
     * An operator that includes events that match the exact value of the event record field specified as the value of Field. This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.
     */
    Equals?: string[];

    /**
     * An operator that includes events that match the first few characters of the event record field specified as the value of Field.
     */
    StartsWith?: string[];

    /**
     * An operator that includes events that match the last few characters of the event record field specified as the value of Field.
     */
    EndsWith?: string[];

    /**
     * An operator that excludes events that match the exact value of the event record field specified as the value of Field.
     */
    NotEquals?: string[];

    /**
     * An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
     */
    NotStartsWith?: string[];

    /**
     * An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
     */
    NotEndsWith?: string[];
  };

  /**
   * Advanced event selectors let you create fine-grained selectors for the following AWS CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you.
   */
  export type AdvancedEventSelectorType = {
    /**
     * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
     */
    Name?: string;

    /**
     * Contains all selector statements in an advanced event selector.
     */
    FieldSelectors: AdvancedFieldSelectorType[];
  };

  /**
   * An arbitrary set of tags (key-value pairs) for this event data store.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * A string that contains Insights types that are logged on an event data store.
   */
  export type InsightSelectorType = {
    /**
     * The type of Insights to log on an event data store.
     */
    InsightType?: string;
  };

  export type TimestampType = {};

  /**
   * A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 7 to 2557 or 3653 days (about seven or ten years) depending on the selected BillingMode.
   */
  export type EventDataStoreResourceType = {
    /**
     * The advanced event selectors that were used to select events for the data store.
     */
    AdvancedEventSelectors?: AdvancedEventSelectorType[];

    /**
     * The timestamp of the event data store's creation.
     * Read-only property
     */
    CreatedTimestamp?: TimestampType;

    /**
     * The ARN of the event data store.
     * Read-only property
     */
    EventDataStoreArn?: string;

    /**
     * Indicates whether federation is enabled on an event data store.
     */
    FederationEnabled?: boolean;

    /**
     * The ARN of the role used for event data store federation.
     */
    FederationRoleArn?: string;

    /**
     * Indicates whether the event data store includes events from all regions, or only from the region in which it was created.
     */
    MultiRegionEnabled?: boolean;

    /**
     * The name of the event data store.
     */
    Name?: string;

    /**
     * Indicates that an event data store is collecting logged events for an organization.
     */
    OrganizationEnabled?: boolean;

    /**
     * The mode that the event data store will use to charge for event storage.
     */
    BillingMode?: string;

    /**
     * The retention period, in days.
     */
    RetentionPeriod?: number;

    /**
     * The status of an event data store. Values are STARTING_INGESTION, ENABLED, STOPPING_INGESTION, STOPPED_INGESTION and PENDING_DELETION.
     * Read-only property
     */
    Status?: string;

    /**
     * Indicates whether the event data store is protected from termination.
     */
    TerminationProtectionEnabled?: boolean;

    /**
     * The timestamp showing when an event data store was updated, if applicable. UpdatedTimestamp is always either the same or newer than the time shown in CreatedTimestamp.
     * Read-only property
     */
    UpdatedTimestamp?: TimestampType;

    /**
     * Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
     */
    KmsKeyId?: string;

    Tags?: TagType[];

    /**
     * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store.
     */
    InsightSelectors?: InsightSelectorType[];

    /**
     * Specifies the ARN of the event data store that will collect Insights events. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store
     */
    InsightsDestination?: string;

    /**
     * Indicates whether the event data store is ingesting events.
     */
    IngestionEnabled?: boolean;
  };
}
