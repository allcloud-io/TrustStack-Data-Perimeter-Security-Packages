/**
 * TypeScript definitions for AWS::NetworkFirewall::RuleGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::NetworkFirewall::RuleGroup
 */
export namespace AWS_NetworkFirewall_RuleGroup {
  /**
   * A resource ARN.
   */
  export type ResourceArnType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type RulesStringType = {};

  export type RuleGroupType = {
    RuleVariables?: RuleVariablesType;

    ReferenceSets?: ReferenceSetsType;

    RulesSource: RulesSourceType;

    StatefulRuleOptions?: StatefulRuleOptionsType;
  };

  export type RuleVariablesType = {
    IPSets?: Record<string, any>;

    PortSets?: Record<string, any>;
  };

  export type IPSetType = {
    Definition?: VariableDefinitionType[];
  };

  export type PortSetType = {
    Definition?: VariableDefinitionType[];
  };

  export type VariableDefinitionType = {};

  export type ReferenceSetsType = {
    IPSetReferences?: Record<string, any>;
  };

  export type IPSetReferenceType = {
    ReferenceArn?: ResourceArnType;
  };

  export type RulesSourceType = {
    RulesString?: RulesStringType;

    RulesSourceList?: RulesSourceListType;

    StatefulRules?: StatefulRuleType[];

    StatelessRulesAndCustomActions?: StatelessRulesAndCustomActionsType;
  };

  export type RulesSourceListType = {
    Targets: string[];

    TargetTypes: TargetTypeType[];

    GeneratedRulesType: GeneratedRulesTypeType;
  };

  export type TargetTypeType = {};

  export type GeneratedRulesTypeType = {};

  export type StatefulRuleType = {
    Action: string;

    Header: HeaderType;

    RuleOptions: RuleOptionType[];
  };

  export type HeaderType = {
    Protocol: string;

    Source: string;

    SourcePort: PortType;

    Direction: string;

    Destination: string;

    DestinationPort: PortType;
  };

  export type RuleOptionType = {
    Keyword: string;

    Settings?: SettingType[];
  };

  export type SettingType = {};

  export type PortType = {};

  export type StatelessRulesAndCustomActionsType = {
    StatelessRules: StatelessRuleType[];

    CustomActions?: CustomActionType[];
  };

  export type StatelessRuleType = {
    RuleDefinition: RuleDefinitionType;

    Priority: number;
  };

  export type RuleDefinitionType = {
    MatchAttributes: MatchAttributesType;

    Actions: string[];
  };

  export type MatchAttributesType = {
    Sources?: AddressType[];

    Destinations?: AddressType[];

    SourcePorts?: PortRangeType[];

    DestinationPorts?: PortRangeType[];

    Protocols?: ProtocolNumberType[];

    TCPFlags?: TCPFlagFieldType[];
  };

  export type AddressType = {
    AddressDefinition: string;
  };

  export type PortRangeType = {
    FromPort: PortRangeBoundType;

    ToPort: PortRangeBoundType;
  };

  export type PortRangeBoundType = {};

  export type ProtocolNumberType = {};

  export type TCPFlagFieldType = {
    Flags: TCPFlagType[];

    Masks?: TCPFlagType[];
  };

  export type TCPFlagType = {};

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

  export type StatefulRuleOptionsType = {
    RuleOrder?: RuleOrderType;
  };

  export type RuleOrderType = {};

  /**
   * Resource type definition for AWS::NetworkFirewall::RuleGroup
   */
  export type RuleGroupResourceType = {
    /**
     * Create-only property
     */
    RuleGroupName: string;

    /**
     * Read-only property
     */
    RuleGroupArn?: ResourceArnType;

    /**
     * Read-only property
     */
    RuleGroupId?: string;

    RuleGroup?: RuleGroupType;

    /**
     * Create-only property
     */
    Type: string;

    /**
     * Create-only property
     */
    Capacity: number;

    Description?: string;

    Tags?: TagType[];
  };
}
