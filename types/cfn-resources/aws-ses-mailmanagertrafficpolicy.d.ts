/**
 * TypeScript definitions for AWS::SES::MailManagerTrafficPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SES::MailManagerTrafficPolicy Resource Type
 */
export namespace AWS_SES_MailManagerTrafficPolicy {
  export type AcceptActionType = {};

  export type IngressAnalysisType = {
    Analyzer: string;

    ResultField: string;
  };

  export type IngressBooleanExpressionType = {
    Evaluate: IngressBooleanToEvaluateType;

    Operator: IngressBooleanOperatorType;
  };

  export type IngressBooleanOperatorType = {};

  export type IngressBooleanToEvaluateType = {};

  export type IngressIpOperatorType = {};

  export type IngressIpToEvaluateType = {};

  export type IngressIpv4AttributeType = {};

  export type IngressIpv4ExpressionType = {
    Evaluate: IngressIpToEvaluateType;

    Operator: IngressIpOperatorType;

    Values: string[];
  };

  export type IngressStringEmailAttributeType = {};

  export type IngressStringExpressionType = {
    Evaluate: IngressStringToEvaluateType;

    Operator: IngressStringOperatorType;

    Values: string[];
  };

  export type IngressStringOperatorType = {};

  export type IngressStringToEvaluateType = {};

  export type IngressTlsAttributeType = {};

  export type IngressTlsProtocolAttributeType = {};

  export type IngressTlsProtocolExpressionType = {
    Evaluate: IngressTlsProtocolToEvaluateType;

    Operator: IngressTlsProtocolOperatorType;

    Value: IngressTlsProtocolAttributeType;
  };

  export type IngressTlsProtocolOperatorType = {};

  export type IngressTlsProtocolToEvaluateType = {};

  export type PolicyConditionType = {};

  export type PolicyStatementType = {
    Conditions: PolicyConditionType[];

    Action: AcceptActionType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::SES::MailManagerTrafficPolicy Resource Type
   */
  export type MailManagerTrafficPolicyResourceType = {
    DefaultAction: AcceptActionType;

    MaxMessageSizeBytes?: number;

    PolicyStatements: PolicyStatementType[];

    Tags?: TagType[];

    /**
     * Read-only property
     */
    TrafficPolicyArn?: string;

    /**
     * Read-only property
     */
    TrafficPolicyId?: string;

    TrafficPolicyName?: string;
  };
}
