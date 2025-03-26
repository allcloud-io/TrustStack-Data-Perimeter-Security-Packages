/**
 * TypeScript definitions for AWS::AppStream::Stack
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::Stack
 */
export namespace AWS_AppStream_Stack {
  export type StorageConnectorType = {
    Domains?: string[];

    ResourceIdentifier?: string;

    ConnectorType: string;
  };

  export type ApplicationSettingsType = {
    SettingsGroup?: string;

    Enabled: boolean;
  };

  export type StreamingExperienceSettingsType = {
    PreferredProtocol?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type AccessEndpointType = {
    EndpointType: string;

    VpceId: string;
  };

  export type UserSettingType = {
    Permission: string;

    Action: string;

    MaximumLength?: number;
  };

  /**
   * Resource Type definition for AWS::AppStream::Stack
   */
  export type StackResourceType = {
    Description?: string;

    StorageConnectors?: StorageConnectorType[];

    DeleteStorageConnectors?: boolean;

    EmbedHostDomains?: string[];

    UserSettings?: UserSettingType[];

    AttributesToDelete?: string[];

    RedirectURL?: string;

    StreamingExperienceSettings?: StreamingExperienceSettingsType;

    /**
     * Create-only property
     */
    Name?: string;

    FeedbackURL?: string;

    ApplicationSettings?: ApplicationSettingsType;

    DisplayName?: string;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];

    AccessEndpoints?: AccessEndpointType[];
  };
}
