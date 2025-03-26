/**
 * TypeScript definitions for AWS::SecurityLake::SubscriberNotification
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SecurityLake::SubscriberNotification
 */
export namespace AWS_SecurityLake_SubscriberNotification {
  /**
   * The configuration for HTTPS subscriber notification.
   */
  export type HttpsNotificationConfigurationType = {
    /**
     * The key name for the notification subscription.
     */
    AuthorizationApiKeyName?: string;

    /**
     * The key value for the notification subscription.
     */
    AuthorizationApiKeyValue?: string;

    /**
     * The subscription endpoint in Security Lake.
     */
    Endpoint: string;

    /**
     * The HTTPS method used for the notification subscription.
     */
    HttpMethod?: string;

    /**
     * The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.
     */
    TargetRoleArn: string;
  };

  /**
   * The configurations for SQS subscriber notification. The members of this structure are context-dependent.
   */
  export type SqsNotificationConfigurationType = {};

  export type NotificationConfigurationType = {
    HttpsNotificationConfiguration?: HttpsNotificationConfigurationType;

    SqsNotificationConfiguration?: SqsNotificationConfigurationType;
  };

  /**
   * Resource Type definition for AWS::SecurityLake::SubscriberNotification
   */
  export type SubscriberNotificationResourceType = {
    NotificationConfiguration: NotificationConfigurationType;

    /**
     * The ARN for the subscriber
     * Create-only property
     */
    SubscriberArn: string;

    /**
     * The endpoint the subscriber should listen to for notifications
     * Read-only property
     */
    SubscriberEndpoint?: string;
  };
}
