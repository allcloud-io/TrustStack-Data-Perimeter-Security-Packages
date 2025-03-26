/**
 * TypeScript definitions for AWS::CloudWatch::CompositeAlarm
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::CloudWatch::CompositeAlarm type specifies an alarm which aggregates the states of other Alarms (Metric or Composite Alarms) as defined by the AlarmRule expression
 */
export namespace AWS_CloudWatch_CompositeAlarm {
  /**
   * Amazon Resource Name (ARN) of the action
   */
  export type AlarmActionARNType = {};

  /**
   * Metadata that you can assign to a composite alarm, Tags can help you organize and categorize your resources.
   */
  export type TagType = {
    /**
     * A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
     */
    Key: string;

    /**
     * The value for the specified tag key.
     */
    Value: string;
  };

  /**
   * The AWS::CloudWatch::CompositeAlarm type specifies an alarm which aggregates the states of other Alarms (Metric or Composite Alarms) as defined by the AlarmRule expression
   */
  export type CompositeAlarmResourceType = {
    /**
     * Amazon Resource Name (ARN) of the alarm
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the Composite Alarm
     * Create-only property
     */
    AlarmName?: string;

    /**
     * Expression which aggregates the state of other Alarms (Metric or Composite Alarms)
     */
    AlarmRule: string;

    /**
     * The description of the alarm
     */
    AlarmDescription?: string;

    /**
     * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
     */
    ActionsEnabled?: boolean;

    /**
     * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    OKActions?: string[];

    /**
     * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN).
     */
    AlarmActions?: string[];

    /**
     * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    InsufficientDataActions?: string[];

    /**
     * Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.
     */
    ActionsSuppressor?: string;

    /**
     * Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.
     */
    ActionsSuppressorWaitPeriod?: number;

    /**
     * Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.
     */
    ActionsSuppressorExtensionPeriod?: number;

    /**
     * A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.
     */
    Tags?: TagType[];
  };
}
