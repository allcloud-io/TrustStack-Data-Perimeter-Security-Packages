/**
 * TypeScript definitions for AWS::WorkSpacesWeb::BrowserSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::BrowserSettings Resource Type
 */
export namespace AWS_WorkSpacesWeb_BrowserSettings {
  export type EncryptionContextMapType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::BrowserSettings Resource Type
   */
  export type BrowserSettingsResourceType = {
    /**
     * Create-only property
     */
    AdditionalEncryptionContext?: EncryptionContextMapType;

    /**
     * Read-only property
     */
    AssociatedPortalArns?: string[];

    BrowserPolicy?: string;

    /**
     * Read-only property
     */
    BrowserSettingsArn?: string;

    /**
     * Create-only property
     */
    CustomerManagedKey?: string;

    Tags?: TagType[];
  };
}
