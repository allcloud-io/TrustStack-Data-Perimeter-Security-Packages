/**
 * TypeScript definitions for AWS::AppConfig::Deployment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppConfig::Deployment
 */
export namespace AWS_AppConfig_Deployment {
  /**
   * Metadata to assign to the deployment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   */
  export type TagType = {
    /**
     * The tag value can be up to 256 characters.
     */
    Value?: string;

    /**
     * The key-value string map. The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.
     */
    Key?: string;
  };

  export type DynamicExtensionParametersType = {
    ParameterValue?: string;

    ExtensionReference?: string;

    ParameterName?: string;
  };

  /**
   * Resource Type definition for AWS::AppConfig::Deployment
   */
  export type DeploymentResourceType = {
    /**
     * The deployment strategy ID.
     * Create-only property
     */
    DeploymentStrategyId: string;

    /**
     * The configuration profile ID.
     * Create-only property
     */
    ConfigurationProfileId: string;

    /**
     * The environment ID.
     * Create-only property
     */
    EnvironmentId: string;

    /**
     * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
     * Create-only property
     */
    KmsKeyIdentifier?: string;

    /**
     * A description of the deployment.
     * Create-only property
     */
    Description?: string;

    /**
     * The configuration version to deploy. If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.
     * Create-only property
     */
    ConfigurationVersion: string;

    /**
     * The sequence number of the deployment.
     * Read-only property
     */
    DeploymentNumber?: string;

    /**
     * The application ID.
     * Create-only property
     */
    ApplicationId: string;

    /**
     * Create-only property
     */
    DynamicExtensionParameters?: DynamicExtensionParametersType[];

    /**
     * An array of key-value pairs to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
