/**
 * TypeScript definitions for AWS::IoTSiteWise::Dashboard
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTSiteWise::Dashboard
 */
export namespace AWS_IoTSiteWise_Dashboard {
  /**
   * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::IoTSiteWise::Dashboard
   */
  export type DashboardResourceType = {
    /**
     * The ID of the project in which to create the dashboard.
     * Create-only property
     */
    ProjectId?: string;

    /**
     * The ID of the dashboard.
     * Read-only property
     */
    DashboardId?: string;

    /**
     * A friendly name for the dashboard.
     */
    DashboardName: string;

    /**
     * A description for the dashboard.
     */
    DashboardDescription: string;

    /**
     * The dashboard definition specified in a JSON literal.
     */
    DashboardDefinition: string;

    /**
     * The ARN of the dashboard.
     * Read-only property
     */
    DashboardArn?: string;

    /**
     * A list of key-value pairs that contain metadata for the dashboard.
     */
    Tags?: TagType[];
  };
}
