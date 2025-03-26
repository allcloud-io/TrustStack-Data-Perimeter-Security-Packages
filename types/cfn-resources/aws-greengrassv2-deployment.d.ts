/**
 * TypeScript definitions for AWS::GreengrassV2::Deployment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource for Greengrass V2 deployment.
 */
export namespace AWS_GreengrassV2_Deployment {
  export type ComponentDeploymentSpecificationType = {
    ComponentVersion?: string;

    ConfigurationUpdate?: ComponentConfigurationUpdateType;

    RunWith?: ComponentRunWithType;
  };

  export type SystemResourceLimitsType = {
    Memory?: number;

    Cpus?: number;
  };

  export type ComponentRunWithType = {
    PosixUser?: string;

    SystemResourceLimits?: SystemResourceLimitsType;

    WindowsUser?: string;
  };

  export type ComponentConfigurationUpdateType = {
    Merge?: string;

    Reset?: string[];
  };

  export type DeploymentIoTJobConfigurationType = {
    JobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfigType;

    AbortConfig?: IoTJobAbortConfigType;

    TimeoutConfig?: IoTJobTimeoutConfigType;
  };

  export type IoTJobExecutionsRolloutConfigType = {
    ExponentialRate?: IoTJobExponentialRolloutRateType;

    MaximumPerMinute?: number;
  };

  export type IoTJobAbortConfigType = {
    CriteriaList: IoTJobAbortCriteriaType[];
  };

  export type IoTJobAbortCriteriaType = {
    FailureType: string;

    Action: string;

    ThresholdPercentage: number;

    MinNumberOfExecutedThings: number;
  };

  export type IoTJobTimeoutConfigType = {
    InProgressTimeoutInMinutes?: number;
  };

  export type IoTJobExponentialRolloutRateType = {
    BaseRatePerMinute: number;

    IncrementFactor: number;

    RateIncreaseCriteria: IoTJobRateIncreaseCriteriaType;
  };

  export type IoTJobRateIncreaseCriteriaType = {};

  export type NumberOfThingsType = {};

  export type DeploymentPoliciesType = {
    FailureHandlingPolicy?: string;

    ComponentUpdatePolicy?: DeploymentComponentUpdatePolicyType;

    ConfigurationValidationPolicy?: DeploymentConfigurationValidationPolicyType;
  };

  export type DeploymentComponentUpdatePolicyType = {
    TimeoutInSeconds?: number;

    Action?: string;
  };

  export type DeploymentConfigurationValidationPolicyType = {
    TimeoutInSeconds?: number;
  };

  /**
   * Resource for Greengrass V2 deployment.
   */
  export type DeploymentResourceType = {
    /**
     * Create-only property
     */
    TargetArn: string;

    /**
     * Create-only property
     */
    ParentTargetArn?: string;

    /**
     * Read-only property
     */
    DeploymentId?: string;

    /**
     * Create-only property
     */
    DeploymentName?: string;

    /**
     * Create-only property
     */
    Components?: Record<string, any>;

    /**
     * Create-only property
     */
    IotJobConfiguration?: DeploymentIoTJobConfigurationType;

    /**
     * Create-only property
     */
    DeploymentPolicies?: DeploymentPoliciesType;

    Tags?: Record<string, any>;
  };
}
