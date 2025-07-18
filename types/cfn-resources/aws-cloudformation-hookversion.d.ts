/**
 * TypeScript definitions for AWS::CloudFormation::HookVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Publishes new or first hook version to AWS CloudFormation Registry.
 */
export namespace AWS_CloudFormation_HookVersion {
  export type LoggingConfigType = {
    /**
     * The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
     */
    LogGroupName?: string;

    /**
     * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
     */
    LogRoleArn?: string;
  };

  /**
   * Publishes new or first hook version to AWS CloudFormation Registry.
   */
  export type HookVersionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the type, here the HookVersion. This is used to uniquely identify a HookVersion resource
     * Read-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Name (ARN) of the type without the versionID.
     * Read-only property
     */
    TypeArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
     * Create-only property
     */
    ExecutionRoleArn?: string;

    /**
     * Indicates if this type version is the current default version
     * Read-only property
     */
    IsDefaultVersion?: boolean;

    /**
     * Specifies logging configuration information for a type.
     * Create-only property
     */
    LoggingConfig?: LoggingConfigType;

    /**
     * A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.
     * For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.
     * Create-only property
     */
    SchemaHandlerPackage: string;

    /**
     * The name of the type being registered.
     * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * Create-only property
     */
    TypeName: string;

    /**
     * The ID of the version of the type represented by this hook instance.
     * Read-only property
     */
    VersionId?: string;

    /**
     * The scope at which the type is visible and usable in CloudFormation operations.
     * Valid values include:
     * PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.
     * PUBLIC: The type is publically visible and usable within any Amazon account.
     * Read-only property
     */
    Visibility?: string;
  };
}
