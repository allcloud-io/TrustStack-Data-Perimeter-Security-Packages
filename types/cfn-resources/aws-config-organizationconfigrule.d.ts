/**
 * TypeScript definitions for AWS::Config::OrganizationConfigRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Config::OrganizationConfigRule
 */
export namespace AWS_Config_OrganizationConfigRule {
  export type OrganizationManagedRuleMetadataType = {
    TagKeyScope?: string;

    TagValueScope?: string;

    Description?: string;

    ResourceIdScope?: string;

    RuleIdentifier: string;

    ResourceTypesScope?: string[];

    MaximumExecutionFrequency?: string;

    InputParameters?: string;
  };

  export type OrganizationCustomRuleMetadataType = {
    TagKeyScope?: string;

    TagValueScope?: string;

    Description?: string;

    ResourceIdScope?: string;

    LambdaFunctionArn: string;

    OrganizationConfigRuleTriggerTypes: string[];

    ResourceTypesScope?: string[];

    MaximumExecutionFrequency?: string;

    InputParameters?: string;
  };

  export type OrganizationCustomPolicyRuleMetadataType = {
    TagKeyScope?: string;

    TagValueScope?: string;

    Runtime: string;

    PolicyText: string;

    Description?: string;

    ResourceIdScope?: string;

    OrganizationConfigRuleTriggerTypes?: string[];

    DebugLogDeliveryAccounts?: string[];

    ResourceTypesScope?: string[];

    MaximumExecutionFrequency?: string;

    InputParameters?: string;
  };

  /**
   * Resource Type definition for AWS::Config::OrganizationConfigRule
   */
  export type OrganizationConfigRuleResourceType = {
    OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadataType;

    OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadataType;

    ExcludedAccounts?: string[];

    /**
     * Create-only property
     */
    OrganizationConfigRuleName: string;

    /**
     * Read-only property
     */
    Id?: string;

    OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadataType;
  };
}
