/**
 * TypeScript definitions for AWS::NetworkFirewall::FirewallPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::NetworkFirewall::FirewallPolicy
 */
export namespace AWS_NetworkFirewall_FirewallPolicy {
  /**
   * A resource ARN.
   */
  export type ResourceArnType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type FirewallPolicyType = {
    StatelessDefaultActions: string[];

    StatelessFragmentDefaultActions: string[];

    StatelessCustomActions?: CustomActionType[];

    StatelessRuleGroupReferences?: StatelessRuleGroupReferenceType[];

    StatefulRuleGroupReferences?: StatefulRuleGroupReferenceType[];

    StatefulDefaultActions?: string[];

    StatefulEngineOptions?: StatefulEngineOptionsType;

    PolicyVariables?: Record<string, any>;

    TLSInspectionConfigurationArn?: ResourceArnType;
  };

  export type RuleVariablesType = {};

  export type CustomActionType = {
    ActionName: string;

    ActionDefinition: ActionDefinitionType;
  };

  export type ActionDefinitionType = {
    PublishMetricAction?: PublishMetricActionType;
  };

  export type PublishMetricActionType = {
    Dimensions: DimensionType[];
  };

  export type DimensionType = {
    Value: string;
  };

  export type StatefulRuleGroupReferenceType = {
    ResourceArn: ResourceArnType;

    Priority?: PriorityType;

    Override?: StatefulRuleGroupOverrideType;
  };

  export type StatelessRuleGroupReferenceType = {
    ResourceArn: ResourceArnType;

    Priority: PriorityType;
  };

  export type PriorityType = {};

  export type VariableDefinitionType = {};

  export type IPSetType = {
    Definition?: VariableDefinitionType[];
  };

  export type StatefulRuleGroupOverrideType = {
    Action?: OverrideActionType;
  };

  export type OverrideActionType = {};

  export type StatefulEngineOptionsType = {
    RuleOrder?: RuleOrderType;

    StreamExceptionPolicy?: StreamExceptionPolicyType;

    FlowTimeouts?: Record<string, any>;
  };

  export type RuleOrderType = {};

  export type StreamExceptionPolicyType = {};

  /**
   * Resource type definition for AWS::NetworkFirewall::FirewallPolicy
   */
  export type FirewallPolicyResourceType = {
    /**
     * Create-only property
     */
    FirewallPolicyName: string;

    /**
     * Read-only property
     */
    FirewallPolicyArn?: ResourceArnType;

    FirewallPolicy: FirewallPolicyType;

    /**
     * Read-only property
     */
    FirewallPolicyId?: string;

    Description?: string;

    Tags?: TagType[];
  };
}
