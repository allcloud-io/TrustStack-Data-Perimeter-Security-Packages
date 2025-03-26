/**
 * TypeScript definitions for AWS::CleanRooms::ConfiguredTableAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a table that can be queried within a collaboration
 */
export namespace AWS_CleanRooms_ConfiguredTableAssociation {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type ConfiguredTableAssociationAnalysisRuleTypeType = {};

  export type AllowedResultReceiverType = {};

  export type AllowedResultReceiversType = {};

  export type AllowedAdditionalAnalysisType = {};

  export type AllowedAdditionalAnalysesType = {};

  export type ConfiguredTableAssociationAnalysisRuleCustomType = {
    AllowedResultReceivers?: AllowedResultReceiversType;

    AllowedAdditionalAnalyses?: AllowedAdditionalAnalysesType;
  };

  export type ConfiguredTableAssociationAnalysisRuleAggregationType = {
    AllowedResultReceivers?: AllowedResultReceiversType;

    AllowedAdditionalAnalyses?: AllowedAdditionalAnalysesType;
  };

  export type ConfiguredTableAssociationAnalysisRuleListType = {
    AllowedResultReceivers?: AllowedResultReceiversType;

    AllowedAdditionalAnalyses?: AllowedAdditionalAnalysesType;
  };

  export type ConfiguredTableAssociationAnalysisRulePolicyV1Type = {};

  export type ConfiguredTableAssociationAnalysisRulePolicyType = {
    V1: ConfiguredTableAssociationAnalysisRulePolicyV1Type;
  };

  export type ConfiguredTableAssociationAnalysisRuleType = {
    Type: ConfiguredTableAssociationAnalysisRuleTypeType;

    Policy: ConfiguredTableAssociationAnalysisRulePolicyType;
  };

  /**
   * Represents a table that can be queried within a collaboration
   */
  export type ConfiguredTableAssociationResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    ConfiguredTableAssociationIdentifier?: string;

    /**
     * Create-only property
     */
    ConfiguredTableIdentifier: string;

    Description?: string;

    /**
     * Create-only property
     */
    MembershipIdentifier: string;

    /**
     * Create-only property
     */
    Name: string;

    RoleArn: string;

    ConfiguredTableAssociationAnalysisRules?: ConfiguredTableAssociationAnalysisRuleType[];
  };
}
