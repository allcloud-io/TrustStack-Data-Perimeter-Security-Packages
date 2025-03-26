/**
 * TypeScript definitions for AWS::Config::RemediationConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Config::RemediationConfiguration
 */
export namespace AWS_Config_RemediationConfiguration {
  export type ExecutionControlsType = {
    SsmControls?: SsmControlsType;
  };

  export type SsmControlsType = {
    ErrorPercentage?: number;

    ConcurrentExecutionRatePercentage?: number;
  };

  /**
   * Resource Type definition for AWS::Config::RemediationConfiguration
   */
  export type RemediationConfigurationResourceType = {
    TargetVersion?: string;

    ExecutionControls?: ExecutionControlsType;

    Parameters?: Record<string, any>;

    TargetType: string;

    /**
     * Create-only property
     */
    ConfigRuleName: string;

    ResourceType?: string;

    RetryAttemptSeconds?: number;

    MaximumAutomaticAttempts?: number;

    /**
     * Read-only property
     */
    Id?: string;

    TargetId: string;

    Automatic?: boolean;
  };
}
