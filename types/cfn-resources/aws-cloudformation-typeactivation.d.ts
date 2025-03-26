/**
 * TypeScript definitions for AWS::CloudFormation::TypeActivation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Enable a resource that has been published in the CloudFormation Registry.
 */
export namespace AWS_CloudFormation_TypeActivation {
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
   * Enable a resource that has been published in the CloudFormation Registry.
   */
  export type TypeActivationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the extension.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
     */
    ExecutionRoleArn?: string;

    /**
     * The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
     */
    PublisherId?: string;

    /**
     * Specifies logging configuration information for a type.
     * Create-only property
     */
    LoggingConfig?: LoggingConfigType;

    /**
     * The Amazon Resource Number (ARN) assigned to the public extension upon publication
     */
    PublicTypeArn?: string;

    /**
     * Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated.
     */
    AutoUpdate?: boolean;

    /**
     * An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.
     */
    TypeNameAlias?: string;

    /**
     * Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled
     */
    VersionBump?: string;

    /**
     * The Major Version of the type you want to enable
     */
    MajorVersion?: string;

    /**
     * The name of the type being registered.
     * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     */
    TypeName?: string;

    /**
     * The kind of extension
     */
    Type?: string;
  };
}
