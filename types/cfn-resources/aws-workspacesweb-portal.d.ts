/**
 * TypeScript definitions for AWS::WorkSpacesWeb::Portal
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::Portal Resource Type
 */
export namespace AWS_WorkSpacesWeb_Portal {
  export type AuthenticationTypeType = {};

  export type BrowserTypeType = {};

  export type EncryptionContextMapType = {};

  export type InstanceTypeType = {};

  export type PortalStatusType = {};

  export type RendererTypeType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::Portal Resource Type
   */
  export type PortalResourceType = {
    /**
     * Create-only property
     */
    AdditionalEncryptionContext?: EncryptionContextMapType;

    AuthenticationType?: AuthenticationTypeType;

    BrowserSettingsArn?: string;

    /**
     * Read-only property
     */
    BrowserType?: BrowserTypeType;

    /**
     * Read-only property
     */
    CreationDate?: string;

    /**
     * Create-only property
     */
    CustomerManagedKey?: string;

    DataProtectionSettingsArn?: string;

    DisplayName?: string;

    InstanceType?: InstanceTypeType;

    IpAccessSettingsArn?: string;

    MaxConcurrentSessions?: number;

    NetworkSettingsArn?: string;

    /**
     * Read-only property
     */
    PortalArn?: string;

    /**
     * Read-only property
     */
    PortalEndpoint?: string;

    /**
     * Read-only property
     */
    PortalStatus?: PortalStatusType;

    /**
     * Read-only property
     */
    RendererType?: RendererTypeType;

    /**
     * Read-only property
     */
    ServiceProviderSamlMetadata?: string;

    /**
     * Read-only property
     */
    StatusReason?: string;

    Tags?: TagType[];

    TrustStoreArn?: string;

    UserAccessLoggingSettingsArn?: string;

    UserSettingsArn?: string;
  };
}
