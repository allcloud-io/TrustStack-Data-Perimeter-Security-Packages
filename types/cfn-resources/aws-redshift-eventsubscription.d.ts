/**
 * TypeScript definitions for AWS::Redshift::EventSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::Redshift::EventSubscription` resource creates an Amazon Redshift Event Subscription.
 */
export namespace AWS_Redshift_EventSubscription {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * The `AWS::Redshift::EventSubscription` resource creates an Amazon Redshift Event Subscription.
   */
  export type EventSubscriptionResourceType = {
    /**
     * The status of the Amazon Redshift event notification subscription.
     * Read-only property
     */
    Status?: string;

    /**
     * The name of the Amazon Redshift event notification subscription.
     * Read-only property
     */
    CustSubscriptionId?: string;

    /**
     * The list of Amazon Redshift event categories specified in the event notification subscription.
     * Read-only property
     */
    EventCategoriesList?: string[];

    /**
     * The type of source that will be generating the events.
     */
    SourceType?: string;

    /**
     * Specifies the Amazon Redshift event categories to be published by the event notification subscription.
     */
    EventCategories?: string[];

    /**
     * A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it.
     */
    Enabled?: boolean;

    /**
     * Specifies the Amazon Redshift event severity to be published by the event notification subscription.
     */
    Severity?: string;

    /**
     * The name of the Amazon Redshift event notification subscription
     * Create-only property
     */
    SubscriptionName: string;

    /**
     * A list of one or more identifiers of Amazon Redshift source objects.
     */
    SourceIds?: string[];

    /**
     * The AWS account associated with the Amazon Redshift event notification subscription.
     * Read-only property
     */
    CustomerAwsId?: string;

    /**
     * A list of the sources that publish events to the Amazon Redshift event notification subscription.
     * Read-only property
     */
    SourceIdsList?: string[];

    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.
     */
    SnsTopicArn?: string;

    /**
     * The date and time the Amazon Redshift event notification subscription was created.
     * Read-only property
     */
    SubscriptionCreationTime?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
