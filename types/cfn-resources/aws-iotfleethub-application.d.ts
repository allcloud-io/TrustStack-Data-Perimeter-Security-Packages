/**
 * TypeScript definitions for AWS::IoTFleetHub::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTFleetHub::Application
 */
export namespace AWS_IoTFleetHub_Application {
  /**
   * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::IoTFleetHub::Application
   */
  export type ApplicationResourceType = {
    /**
     * The ID of the application.
     * Read-only property
     */
    ApplicationId?: string;

    /**
     * The ARN of the application.
     * Read-only property
     */
    ApplicationArn?: string;

    /**
     * Application Name, should be between 1 and 256 characters.
     */
    ApplicationName: string;

    /**
     * Application Description, should be between 1 and 2048 characters.
     */
    ApplicationDescription?: string;

    /**
     * The URL of the application.
     * Read-only property
     */
    ApplicationUrl?: string;

    /**
     * The current state of the application.
     * Read-only property
     */
    ApplicationState?: string;

    /**
     * When the Application was created
     * Read-only property
     */
    ApplicationCreationDate?: number;

    /**
     * When the Application was last updated
     * Read-only property
     */
    ApplicationLastUpdateDate?: number;

    /**
     * The ARN of the role that the web application assumes when it interacts with AWS IoT Core. For more info on configuring this attribute, see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html#API_iotfleethub_CreateApplication_RequestSyntax
     */
    RoleArn: string;

    /**
     * The AWS SSO application generated client ID (used with AWS SSO APIs).
     * Read-only property
     */
    SsoClientId?: string;

    /**
     * A message indicating why Create or Delete Application failed.
     * Read-only property
     */
    ErrorMessage?: string;

    /**
     * A list of key-value pairs that contain metadata for the application.
     */
    Tags?: TagType[];
  };
}
