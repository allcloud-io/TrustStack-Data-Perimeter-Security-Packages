/**
 * TypeScript definitions for AWS::Lambda::Version
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lambda::Version
 */
export namespace AWS_Lambda_Version {
  /**
   * A provisioned concurrency configuration for a function's version.
   */
  export type ProvisionedConcurrencyConfigurationType = {
    /**
     * The amount of provisioned concurrency to allocate for the version.
     */
    ProvisionedConcurrentExecutions: number;
  };

  /**
   * Runtime Management Config of a function.
   */
  export type RuntimePolicyType = {
    /**
     * The ARN of the runtime the function is configured to use. If the runtime update mode is manual, the ARN is returned, otherwise null is returned.
     */
    RuntimeVersionArn?: string;

    /**
     * The runtime update mode.
     */
    UpdateRuntimeOn: string;
  };

  /**
   * Resource Type definition for AWS::Lambda::Version
   */
  export type VersionResourceType = {
    /**
     * The ARN of the version.
     * Read-only property
     */
    FunctionArn?: string;

    /**
     * The version number.
     * Read-only property
     */
    Version?: string;

    /**
     * Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.
     * Create-only property
     */
    CodeSha256?: string;

    /**
     * A description for the version to override the description in the function configuration. Updates are not supported for this property.
     * Create-only property
     */
    Description?: string;

    /**
     * The name of the Lambda function.
     * Create-only property
     */
    FunctionName: string;

    /**
     * The resource policy of your function
     */
    Policy?: Record<string, any>;

    /**
     * Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.
     * Create-only property
     */
    ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfigurationType;

    /**
     * Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.
     * Create-only property
     */
    RuntimePolicy?: RuntimePolicyType;
  };
}
