/**
 * TypeScript definitions for AWS::SES::ConfigurationSetEventDestination
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SES::ConfigurationSetEventDestination
 */
export namespace AWS_SES_ConfigurationSetEventDestination {
  export type EventDestinationType = {
    /**
     * The name of the event destination set.
     */
    Name?: string;

    /**
     * Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.
     */
    Enabled?: boolean;

    /**
     * The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.
     */
    MatchingEventTypes: string[];

    /**
     * An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
     */
    CloudWatchDestination?: CloudWatchDestinationType;

    /**
     * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
     */
    KinesisFirehoseDestination?: KinesisFirehoseDestinationType;

    /**
     * An object that contains SNS topic ARN associated event destination.
     */
    SnsDestination?: SnsDestinationType;

    /**
     * An object that contains Event bus ARN associated with the event bridge destination.
     */
    EventBridgeDestination?: EventBridgeDestinationType;
  };

  /**
   * An object that contains Event bus ARN associated with the event bridge destination.
   */
  export type EventBridgeDestinationType = {
    EventBusArn: string;
  };

  /**
   * An object that contains SNS topic ARN associated event destination.
   */
  export type SnsDestinationType = {
    TopicARN: string;
  };

  /**
   * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
   */
  export type KinesisFirehoseDestinationType = {
    /**
     * The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.
     */
    IAMRoleARN: string;

    /**
     * The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
     */
    DeliveryStreamARN: string;
  };

  /**
   * An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
   */
  export type CloudWatchDestinationType = {
    /**
     * A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.
     */
    DimensionConfigurations?: DimensionConfigurationType[];
  };

  /**
   * A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.
   */
  export type DimensionConfigurationType = {
    /**
     * The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.
     */
    DimensionValueSource: string;

    /**
     * The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.
     */
    DefaultDimensionValue: string;

    /**
     * The name of an Amazon CloudWatch dimension associated with an email sending metric.
     */
    DimensionName: string;
  };

  /**
   * Resource Type definition for AWS::SES::ConfigurationSetEventDestination
   */
  export type ConfigurationSetEventDestinationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the configuration set that contains the event destination.
     * Create-only property
     */
    ConfigurationSetName: string;

    /**
     * The event destination object.
     */
    EventDestination: EventDestinationType;
  };
}
