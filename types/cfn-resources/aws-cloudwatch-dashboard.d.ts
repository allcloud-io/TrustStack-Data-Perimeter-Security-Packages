/**
 * TypeScript definitions for AWS::CloudWatch::Dashboard
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudWatch::Dashboard
 */
export namespace AWS_CloudWatch_Dashboard {
  /**
   * Resource Type definition for AWS::CloudWatch::Dashboard
   */
  export type DashboardResourceType = {
    /**
     * The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically.
     * Create-only property
     */
    DashboardName?: string;

    /**
     * The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard
     */
    DashboardBody: string;
  };
}
