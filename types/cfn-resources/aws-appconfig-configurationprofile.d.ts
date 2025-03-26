/**
 * TypeScript definitions for AWS::AppConfig::ConfigurationProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_AppConfig_ConfigurationProfile {
  /**
   * A list of methods for validating the configuration.
   */
  export type ValidatorsType = {
    /**
     * AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.
     */
    Type?: string;

    /**
     * Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
     */
    Content?: string;
  };

  /**
   * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   */
  export type TagsType = {
    /**
     * The tag value can be up to 256 characters.
     */
    Value?: string;

    /**
     * The key-value string map. The tag key can be up to 128 characters and must not start with aws:.
     */
    Key?: string;
  };

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type ConfigurationProfileResourceType = {
    /**
     * The configuration profile ID
     * Read-only property
     */
    ConfigurationProfileId?: string;

    /**
     * A URI to locate the configuration. You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.
     * Create-only property
     */
    LocationUri: string;

    /**
     * The type of configurations contained in the profile. When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform
     * Create-only property
     */
    Type?: string;

    /**
     * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
     */
    KmsKeyIdentifier?: string;

    /**
     * A description of the configuration profile.
     */
    Description?: string;

    /**
     * The Amazon Resource Name of the AWS Key Management Service key to encrypt new configuration data versions in the AWS AppConfig hosted configuration store. This attribute is only used for hosted configuration types. To encrypt data managed in other configuration stores, see the documentation for how to specify an AWS KMS key for that particular service.
     * Read-only property
     */
    KmsKeyArn?: string;

    /**
     * A list of methods for validating the configuration.
     */
    Validators?: ValidatorsType[];

    /**
     * The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
     */
    RetrievalRoleArn?: string;

    /**
     * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html
     */
    DeletionProtectionCheck?: string;

    /**
     * The application ID.
     * Create-only property
     */
    ApplicationId: string;

    /**
     * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     */
    Tags?: TagsType[];

    /**
     * A name for the configuration profile.
     */
    Name: string;
  };
}
