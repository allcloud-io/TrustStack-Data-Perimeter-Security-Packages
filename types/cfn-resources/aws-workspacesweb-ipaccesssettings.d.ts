/**
 * TypeScript definitions for AWS::WorkSpacesWeb::IpAccessSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::IpAccessSettings Resource Type
 */
export namespace AWS_WorkSpacesWeb_IpAccessSettings {
  export type EncryptionContextMapType = {};

  export type IpRuleType = {
    /**
     * A single IP address or an IP address range in CIDR notation
     */
    IpRange: string;

    Description?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::IpAccessSettings Resource Type
   */
  export type IpAccessSettingsResourceType = {
    /**
     * Create-only property
     */
    AdditionalEncryptionContext?: EncryptionContextMapType;

    /**
     * Read-only property
     */
    AssociatedPortalArns?: string[];

    /**
     * Read-only property
     */
    CreationDate?: string;

    /**
     * Create-only property
     */
    CustomerManagedKey?: string;

    Description?: string;

    DisplayName?: string;

    /**
     * Read-only property
     */
    IpAccessSettingsArn?: string;

    IpRules: IpRuleType[];

    Tags?: TagType[];
  };
}
