/**
 * TypeScript definitions for AWS::AppRunner::ObservabilityConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::AppRunner::ObservabilityConfiguration resource  is an AWS App Runner resource type that specifies an App Runner observability configuration
 */
export namespace AWS_AppRunner_ObservabilityConfiguration {
  /**
   * Describes the configuration of the tracing feature within an AWS App Runner observability configuration.
   */
  export type TraceConfigurationType = {
    /**
     * The implementation provider chosen for tracing App Runner services.
     */
    Vendor: string;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * The AWS::AppRunner::ObservabilityConfiguration resource  is an AWS App Runner resource type that specifies an App Runner observability configuration
   */
  export type ObservabilityConfigurationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of this ObservabilityConfiguration
     * Read-only property
     */
    ObservabilityConfigurationArn?: string;

    /**
     * A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
     * Create-only property
     */
    ObservabilityConfigurationName?: string;

    /**
     * The revision of this observability configuration. It's unique among all the active configurations ('Status': 'ACTIVE') that share the same ObservabilityConfigurationName.
     * Read-only property
     */
    ObservabilityConfigurationRevision?: number;

    /**
     * It's set to true for the configuration with the highest Revision among all configurations that share the same Name. It's set to false otherwise.
     * Read-only property
     */
    Latest?: boolean;

    /**
     * The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
     * Create-only property
     */
    TraceConfiguration?: TraceConfigurationType;

    /**
     * A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
