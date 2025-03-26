/**
 * TypeScript definitions for AWS::SSO::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Identity Center (SSO) Application
 */
export namespace AWS_SSO_Application {
  /**
   * The metadata that you apply to the Identity Center (SSO) Application to help you categorize and organize them.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A structure that describes the sign-in options for an application portal
   */
  export type SignInOptionsType = {
    /**
     * This determines how IAM Identity Center navigates the user to the target application
     */
    Origin: string;

    /**
     * The URL that accepts authentication requests for an application, this is a required parameter if the Origin parameter is APPLICATION
     */
    ApplicationUrl?: string;
  };

  /**
   * A structure that describes the options for the access portal associated with an application
   */
  export type PortalOptionsConfigurationType = {
    /**
     * Indicates whether this application is visible in the access portal
     */
    Visibility?: string;

    /**
     * A structure that describes the sign-in options for the access portal
     */
    SignInOptions?: SignInOptionsType;
  };

  /**
   * Resource Type definition for Identity Center (SSO) Application
   */
  export type ApplicationResourceType = {
    /**
     * The name you want to assign to this Identity Center (SSO) Application
     */
    Name: string;

    /**
     * The description information for the Identity Center (SSO) Application
     */
    Description?: string;

    /**
     * The ARN of the instance of IAM Identity Center under which the operation will run
     * Create-only property
     */
    InstanceArn: string;

    /**
     * The Application ARN that is returned upon creation of the Identity Center (SSO) Application
     * Read-only property
     */
    ApplicationArn?: string;

    /**
     * The ARN of the application provider under which the operation will run
     * Create-only property
     */
    ApplicationProviderArn: string;

    /**
     * Specifies whether the application is enabled or disabled
     */
    Status?: string;

    /**
     * A structure that describes the options for the portal associated with an application
     */
    PortalOptions?: PortalOptionsConfigurationType;

    Tags?: TagType[];
  };
}
