/**
 * TypeScript definitions for AWS::IoTSiteWise::Portal
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTSiteWise::Portal
 */
export namespace AWS_IoTSiteWise_Portal {
  /**
   * Container associated a certain PortalType.
   */
  export type PortalTypeEntryType = {
    PortalTools: PortalToolsType;
  };

  /**
   * List of enabled Tools for a certain portal.
   */
  export type PortalToolsType = {};

  /**
   * Map to associate detail of configuration related with a PortalType.
   */
  export type PortalTypeConfigurationType = {};

  /**
   * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::IoTSiteWise::Portal
   */
  export type PortalResourceType = {
    /**
     * The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.
     * Create-only property
     */
    PortalAuthMode?: string;

    /**
     * The ARN of the portal, which has the following format.
     * Read-only property
     */
    PortalArn?: string;

    /**
     * The AWS SSO application generated client ID (used with AWS SSO APIs).
     * Read-only property
     */
    PortalClientId?: string;

    /**
     * The AWS administrator's contact email address.
     */
    PortalContactEmail: string;

    /**
     * A description for the portal.
     */
    PortalDescription?: string;

    /**
     * The ID of the portal.
     * Read-only property
     */
    PortalId?: string;

    /**
     * A friendly name for the portal.
     */
    PortalName: string;

    /**
     * The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.
     * Read-only property
     */
    PortalStartUrl?: string;

    /**
     * The type of portal
     * Create-only property
     */
    PortalType?: string;

    PortalTypeConfiguration?: PortalTypeConfigurationType;

    /**
     * The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.
     */
    RoleArn: string;

    /**
     * The email address that sends alarm notifications.
     */
    NotificationSenderEmail?: string;

    /**
     * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
     */
    Alarms?: Record<string, any>;

    /**
     * A list of key-value pairs that contain metadata for the portal.
     */
    Tags?: TagType[];
  };
}
