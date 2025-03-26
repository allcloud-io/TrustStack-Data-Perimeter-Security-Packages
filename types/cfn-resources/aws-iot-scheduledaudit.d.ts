/**
 * TypeScript definitions for AWS::IoT::ScheduledAudit
 * Generated from CloudFormation Resource Schema
 */

/**
 * Scheduled audits can be used to specify the checks you want to perform during an audit and how often the audit should be run.
 */
export namespace AWS_IoT_ScheduledAudit {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * Scheduled audits can be used to specify the checks you want to perform during an audit and how often the audit should be run.
   */
  export type ScheduledAuditResourceType = {
    /**
     * The name you want to give to the scheduled audit.
     * Create-only property
     */
    ScheduledAuditName?: string;

    /**
     * How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.
     */
    Frequency: string;

    /**
     * The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.
     */
    DayOfMonth?: string;

    /**
     * The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.
     */
    DayOfWeek?: string;

    /**
     * Which checks are performed during the scheduled audit. Checks must be enabled for your account.
     */
    TargetCheckNames: string[];

    /**
     * The ARN (Amazon resource name) of the scheduled audit.
     * Read-only property
     */
    ScheduledAuditArn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
