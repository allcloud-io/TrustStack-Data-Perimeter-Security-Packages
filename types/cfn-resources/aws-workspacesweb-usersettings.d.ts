/**
 * TypeScript definitions for AWS::WorkSpacesWeb::UserSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::UserSettings Resource Type
 */
export namespace AWS_WorkSpacesWeb_UserSettings {
  export type CookieSpecificationType = {
    Domain: string;

    Name?: string;

    Path?: string;
  };

  export type CookieSynchronizationConfigurationType = {
    Allowlist: CookieSpecificationType[];

    Blocklist?: CookieSpecificationType[];
  };

  export type EnabledTypeType = {};

  export type EncryptionContextMapType = {};

  export type MaxDisplayResolutionType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type ToolbarConfigurationType = {
    ToolbarType?: ToolbarTypeType;

    VisualMode?: VisualModeType;

    HiddenToolbarItems?: ToolbarItemType[];

    MaxDisplayResolution?: MaxDisplayResolutionType;
  };

  export type ToolbarItemType = {};

  export type ToolbarTypeType = {};

  export type VisualModeType = {};

  /**
   * Definition of AWS::WorkSpacesWeb::UserSettings Resource Type
   */
  export type UserSettingsResourceType = {
    AdditionalEncryptionContext?: EncryptionContextMapType;

    /**
     * Read-only property
     */
    AssociatedPortalArns?: string[];

    CookieSynchronizationConfiguration?: CookieSynchronizationConfigurationType;

    CopyAllowed: EnabledTypeType;

    CustomerManagedKey?: string;

    /**
     * Default: null
     */
    DisconnectTimeoutInMinutes?: number;

    DownloadAllowed: EnabledTypeType;

    /**
     * Default: null
     */
    IdleDisconnectTimeoutInMinutes?: number;

    PasteAllowed: EnabledTypeType;

    PrintAllowed: EnabledTypeType;

    Tags?: TagType[];

    ToolbarConfiguration?: ToolbarConfigurationType;

    UploadAllowed: EnabledTypeType;

    /**
     * Read-only property
     */
    UserSettingsArn?: string;

    DeepLinkAllowed?: EnabledTypeType;
  };
}
