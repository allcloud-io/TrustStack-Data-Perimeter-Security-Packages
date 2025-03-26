/**
 * TypeScript definitions for AWS::Transfer::WebApp
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Transfer::WebApp
 */
export namespace AWS_Transfer_WebApp {
  /**
   * You can provide a structure that contains the details for the identity provider to use with your web app.
   */
  export type IdentityProviderDetailsType = {
    ApplicationArn?: string;

    /**
     * The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
     */
    InstanceArn?: string;

    /**
     * The IAM role in IAM Identity Center used for the web app.
     */
    Role?: string;
  };

  /**
   * Key-value pair that can be used to group and search for web apps.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type WebAppCustomizationType = {
    /**
     * Specifies a title to display on the web app.
     */
    Title?: string;

    /**
     * Specifies a logo to display on the web app.
     */
    LogoFile?: string;

    /**
     * Specifies a favicon to display in the browser tab.
     */
    FaviconFile?: string;
  };

  export type WebAppUnitsType = {};

  /**
   * Resource Type definition for AWS::Transfer::WebApp
   */
  export type WebAppResourceType = {
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the web app.
     * Read-only property
     */
    Arn?: string;

    /**
     * A unique identifier for the web app.
     * Read-only property
     */
    WebAppId?: string;

    IdentityProviderDetails: IdentityProviderDetailsType;

    /**
     * The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
     */
    AccessEndpoint?: string;

    WebAppUnits?: WebAppUnitsType;

    WebAppCustomization?: WebAppCustomizationType;

    /**
     * Key-value pairs that can be used to group and search for web apps.
     */
    Tags?: TagType[];
  };
}
