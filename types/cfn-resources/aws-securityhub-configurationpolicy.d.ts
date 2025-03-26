/**
 * TypeScript definitions for AWS::SecurityHub::ConfigurationPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::SecurityHub::ConfigurationPolicy resource represents the Central Configuration Policy in your account.
 */
export namespace AWS_SecurityHub_ConfigurationPolicy {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {};

  /**
   * An object that includes the data type of a security control parameter and its current value.
   */
  export type ParameterValueType = {
    /**
     * A control parameter that is a boolean.
     */
    Boolean?: boolean;

    /**
     * A control parameter that is a double.
     */
    Double?: number;

    /**
     * A control parameter that is an enum.
     */
    Enum?: string;

    /**
     * A control parameter that is a list of enums.
     */
    EnumList?: string[];

    /**
     * A control parameter that is an integer.
     */
    Integer?: number;

    /**
     * A control parameter that is a list of integers.
     */
    IntegerList?: number[];

    /**
     * A control parameter that is a string.
     */
    String?: string;

    /**
     * A control parameter that is a list of strings.
     */
    StringList?: string[];
  };

  /**
   * An object that provides the current value of a security control parameter and identifies whether it has been customized.
   */
  export type ParameterConfigurationType = {
    /**
     * Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.
     */
    ValueType: string;

    Value?: ParameterValueType;
  };

  /**
   * An object of security control and control parameter value that are included in a configuration policy.
   */
  export type SecurityControlCustomParameterType = {
    /**
     * An object that specifies parameter values for a control in a configuration policy.
     */
    Parameters?: Record<string, any>;

    /**
     * The ID of the security control.
     */
    SecurityControlId?: string;
  };

  /**
   * An object that defines which security controls are enabled in an AWS Security Hub configuration policy.
   */
  export type SecurityControlsConfigurationType = {
    /**
     * A list of security controls that are disabled in the configuration policy
     */
    DisabledSecurityControlIdentifiers?: string[];

    /**
     * A list of security controls that are enabled in the configuration policy.
     */
    EnabledSecurityControlIdentifiers?: string[];

    /**
     * A list of security controls and control parameter values that are included in a configuration policy.
     */
    SecurityControlCustomParameters?: SecurityControlCustomParameterType[];
  };

  /**
   * An object that defines how AWS Security Hub is configured.
   */
  export type SecurityHubPolicyType = {
    /**
     * A list that defines which security standards are enabled in the configuration policy.
     */
    EnabledStandardIdentifiers?: string[];

    /**
     * Indicates whether Security Hub is enabled in the policy.
     */
    ServiceEnabled?: boolean;

    SecurityControlsConfiguration?: SecurityControlsConfigurationType;
  };

  /**
   * An object that defines how Security Hub is configured.
   */
  export type PolicyType = {
    SecurityHub?: SecurityHubPolicyType;
  };

  /**
   * The AWS::SecurityHub::ConfigurationPolicy resource represents the Central Configuration Policy in your account.
   */
  export type ConfigurationPolicyResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the configuration policy.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the configuration policy.
     */
    Name: string;

    /**
     * The description of the configuration policy.
     */
    Description?: string;

    ConfigurationPolicy: PolicyType;

    /**
     * The universally unique identifier (UUID) of the configuration policy.
     * Read-only property
     */
    Id?: string;

    /**
     * The date and time, in UTC and ISO 8601 format.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The date and time, in UTC and ISO 8601 format.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * Indicates whether the service that the configuration policy applies to is enabled in the policy.
     * Read-only property
     */
    ServiceEnabled?: boolean;

    Tags?: TagsType;
  };
}
