/**
 * TypeScript definitions for AWS::SageMaker::PartnerApp
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::PartnerApp
 */
export namespace AWS_SageMaker_PartnerApp {
  /**
   * A collection of configuration settings for the PartnerApp.
   */
  export type PartnerAppConfigType = {
    /**
     * A list of users with administrator privileges for the PartnerApp.
     */
    AdminUsers?: PartnerAppAdminUserListType[];

    /**
     * A list of arguments to pass to the PartnerApp.
     */
    Arguments?: Record<string, any>;
  };

  /**
   * A collection of AdminUsers for the PartnerApp
   */
  export type PartnerAppAdminUserListType = {};

  /**
   * A collection of settings that specify the maintenance schedule for the PartnerApp.
   */
  export type PartnerAppMaintenanceConfigType = {
    /**
     * The maintenance window start day and time for the PartnerApp.
     */
    MaintenanceWindowStart: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::PartnerApp
   */
  export type PartnerAppResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the created PartnerApp.
     * Read-only property
     */
    Arn?: string;

    /**
     * A name for the PartnerApp.
     * Create-only property
     */
    Name: string;

    /**
     * The type of PartnerApp.
     * Create-only property
     */
    Type: string;

    /**
     * The execution role for the user.
     * Create-only property
     */
    ExecutionRoleArn: string;

    /**
     * The tier of the PartnerApp.
     */
    Tier: string;

    /**
     * Enables IAM Session based Identity for PartnerApp.
     */
    EnableIamSessionBasedIdentity?: boolean;

    /**
     * A collection of settings that specify the maintenance schedule for the PartnerApp.
     */
    ApplicationConfig?: PartnerAppConfigType;

    /**
     * The Auth type of PartnerApp.
     * Create-only property
     */
    AuthType: string;

    /**
     * The AppServerUrl based on app and account-info.
     * Read-only property
     */
    BaseUrl?: string;

    /**
     * A collection of settings that specify the maintenance schedule for the PartnerApp.
     */
    MaintenanceConfig?: PartnerAppMaintenanceConfigType;

    /**
     * The client token for the PartnerApp.
     */
    ClientToken?: string;

    /**
     * A list of tags to apply to the PartnerApp.
     */
    Tags?: TagType[];
  };
}
