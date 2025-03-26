/**
 * TypeScript definitions for AWS::SES::MailManagerRuleSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SES::MailManagerRuleSet Resource Type
 */
export namespace AWS_SES_MailManagerRuleSet {
  export type ActionFailurePolicyType = {};

  export type AddHeaderActionType = {
    HeaderName: string;

    HeaderValue: string;
  };

  export type AnalysisType = {
    Analyzer: string;

    ResultField: string;
  };

  export type ArchiveActionType = {
    ActionFailurePolicy?: ActionFailurePolicyType;

    TargetArchive: string;
  };

  export type DeliverToMailboxActionType = {
    ActionFailurePolicy?: ActionFailurePolicyType;

    MailboxArn: string;

    RoleArn: string;
  };

  export type DeliverToQBusinessActionType = {
    ActionFailurePolicy?: ActionFailurePolicyType;

    ApplicationId: string;

    IndexId: string;

    RoleArn: string;
  };

  export type DropActionType = {};

  export type MailFromType = {};

  export type RelayActionType = {
    ActionFailurePolicy?: ActionFailurePolicyType;

    Relay: string;

    MailFrom?: MailFromType;
  };

  export type ReplaceRecipientActionType = {
    ReplaceWith?: string[];
  };

  export type RuleType = {
    Name?: string;

    Conditions?: RuleConditionType[];

    Unless?: RuleConditionType[];

    Actions: RuleActionType[];
  };

  export type RuleActionType = {};

  export type RuleBooleanEmailAttributeType = {};

  export type RuleBooleanExpressionType = {
    Evaluate: RuleBooleanToEvaluateType;

    Operator: RuleBooleanOperatorType;
  };

  export type RuleBooleanOperatorType = {};

  export type RuleBooleanToEvaluateType = {};

  export type RuleConditionType = {};

  export type RuleDmarcExpressionType = {
    Operator: RuleDmarcOperatorType;

    Values: RuleDmarcPolicyType[];
  };

  export type RuleDmarcOperatorType = {};

  export type RuleDmarcPolicyType = {};

  export type RuleIpEmailAttributeType = {};

  export type RuleIpExpressionType = {
    Evaluate: RuleIpToEvaluateType;

    Operator: RuleIpOperatorType;

    Values: string[];
  };

  export type RuleIpOperatorType = {};

  export type RuleIpToEvaluateType = {};

  export type RuleNumberEmailAttributeType = {};

  export type RuleNumberExpressionType = {
    Evaluate: RuleNumberToEvaluateType;

    Operator: RuleNumberOperatorType;

    Value: number;
  };

  export type RuleNumberOperatorType = {};

  export type RuleNumberToEvaluateType = {};

  export type RuleStringEmailAttributeType = {};

  export type RuleStringExpressionType = {
    Evaluate: RuleStringToEvaluateType;

    Operator: RuleStringOperatorType;

    Values: string[];
  };

  export type RuleStringOperatorType = {};

  export type RuleStringToEvaluateType = {};

  export type RuleVerdictType = {};

  export type RuleVerdictAttributeType = {};

  export type RuleVerdictExpressionType = {
    Evaluate: RuleVerdictToEvaluateType;

    Operator: RuleVerdictOperatorType;

    Values: RuleVerdictType[];
  };

  export type RuleVerdictOperatorType = {};

  export type RuleVerdictToEvaluateType = {};

  export type S3ActionType = {
    ActionFailurePolicy?: ActionFailurePolicyType;

    RoleArn: string;

    S3Bucket: string;

    S3Prefix?: string;

    S3SseKmsKeyId?: string;
  };

  export type SendActionType = {
    ActionFailurePolicy?: ActionFailurePolicyType;

    RoleArn: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::SES::MailManagerRuleSet Resource Type
   */
  export type MailManagerRuleSetResourceType = {
    /**
     * Read-only property
     */
    RuleSetArn?: string;

    /**
     * Read-only property
     */
    RuleSetId?: string;

    RuleSetName?: string;

    Rules: RuleType[];

    Tags?: TagType[];
  };
}
