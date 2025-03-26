/**
 * TypeScript definitions for AWS::CE::AnomalySubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. Create subscription to be notified
 */
export namespace AWS_CE_AnomalySubscription {
  /**
   * Subscription ARN
   */
  export type ArnType = {};

  export type SubscriberType = {
    Address: string;

    Status?: string;

    Type: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type ResourceTagType = {
    /**
     * The key name for the tag.
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. Create subscription to be notified
   */
  export type AnomalySubscriptionResourceType = {
    /**
     * Read-only property
     */
    SubscriptionArn?: ArnType;

    /**
     * The name of the subscription.
     */
    SubscriptionName: string;

    /**
     * The accountId
     * Read-only property
     */
    AccountId?: string;

    /**
     * A list of cost anomaly monitors.
     */
    MonitorArnList: ArnType[];

    /**
     * A list of subscriber
     */
    Subscribers: SubscriberType[];

    /**
     * The dollar value that triggers a notification if the threshold is exceeded.
     */
    Threshold?: number;

    /**
     * An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.
     */
    ThresholdExpression?: string;

    /**
     * The frequency at which anomaly reports are sent over email.
     */
    Frequency: string;

    /**
     * Tags to assign to subscription.
     * Create-only property
     */
    ResourceTags?: ResourceTagType[];
  };
}
