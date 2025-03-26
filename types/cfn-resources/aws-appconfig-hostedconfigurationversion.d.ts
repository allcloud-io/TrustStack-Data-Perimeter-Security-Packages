/**
 * TypeScript definitions for AWS::AppConfig::HostedConfigurationVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppConfig::HostedConfigurationVersion
 */
export namespace AWS_AppConfig_HostedConfigurationVersion {
  /**
   * Resource Type definition for AWS::AppConfig::HostedConfigurationVersion
   */
  export type HostedConfigurationVersionResourceType = {
    /**
     * The configuration profile ID.
     * Create-only property
     */
    ConfigurationProfileId: string;

    /**
     * A description of the hosted configuration version.
     * Create-only property
     */
    Description?: string;

    /**
     * A standard MIME type describing the format of the configuration content.
     * Create-only property
     */
    ContentType: string;

    /**
     * An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
     * Create-only property
     */
    LatestVersionNumber?: number;

    /**
     * The content of the configuration or the configuration data.
     * Create-only property
     */
    Content: string;

    /**
     * A user-defined label for an AWS AppConfig hosted configuration version.
     * Create-only property
     */
    VersionLabel?: string;

    /**
     * The application ID.
     * Create-only property
     */
    ApplicationId: string;

    /**
     * Current version number of hosted configuration version.
     * Read-only property
     */
    VersionNumber?: string;
  };
}
