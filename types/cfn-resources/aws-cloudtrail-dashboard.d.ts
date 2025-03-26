/**
 * TypeScript definitions for AWS::CloudTrail::Dashboard
 * Generated from CloudFormation Resource Schema
 */

/**
 * The Amazon CloudTrail dashboard resource allows customers to manage managed dashboards and create custom dashboards. You can manually refresh custom and managed dashboards. For custom dashboards, you can also set up an automatic refresh schedule and modify dashboard widgets.
 */
export namespace AWS_CloudTrail_Dashboard {
  /**
   * Configures the automatic refresh schedule for the dashboard. Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.
   */
  export type RefreshScheduleType = {
    Frequency?: Record<string, any>;

    /**
     * StartTime of the automatic schedule refresh.
     */
    TimeOfDay?: string;

    /**
     * The status of the schedule. Supported values are ENABLED and DISABLED.
     */
    Status?: string;
  };

  /**
   * The value of the QueryParameter. Possible values: $StartTime$, $EndTime$, $Period$.
   */
  export type QueryParameterType = {};

  /**
   * The dashboard widget
   */
  export type WidgetType = {
    /**
     * The SQL query statement on one or more event data stores.
     */
    QueryStatement: string;

    /**
     * The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$.
     */
    QueryParameters?: QueryParameterType[];

    /**
     * The view properties of the widget.
     */
    ViewProperties?: Record<string, any>;
  };

  /**
   * An arbitrary set of tags (key-value pairs) for this dashboard.
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

  export type TimestampType = {};

  /**
   * The Amazon CloudTrail dashboard resource allows customers to manage managed dashboards and create custom dashboards. You can manually refresh custom and managed dashboards. For custom dashboards, you can also set up an automatic refresh schedule and modify dashboard widgets.
   */
  export type DashboardResourceType = {
    /**
     * List of widgets on the dashboard
     */
    Widgets?: WidgetType[];

    /**
     * The timestamp of the dashboard creation.
     * Read-only property
     */
    CreatedTimestamp?: TimestampType;

    /**
     * The ARN of the dashboard.
     * Read-only property
     */
    DashboardArn?: string;

    /**
     * Configures the automatic refresh schedule for the dashboard. Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.
     */
    RefreshSchedule?: RefreshScheduleType;

    /**
     * The name of the dashboard.
     */
    Name?: string;

    /**
     * The status of the dashboard. Values are CREATING, CREATED, UPDATING, UPDATED and DELETING.
     * Read-only property
     */
    Status?: string;

    /**
     * Indicates whether the dashboard is protected from termination.
     */
    TerminationProtectionEnabled?: boolean;

    /**
     * The type of the dashboard. Values are CUSTOM and MANAGED.
     * Read-only property
     */
    Type?: string;

    /**
     * The timestamp showing when the dashboard was updated, if applicable. UpdatedTimestamp is always either the same or newer than the time shown in CreatedTimestamp.
     * Read-only property
     */
    UpdatedTimestamp?: TimestampType;

    Tags?: TagType[];
  };
}
