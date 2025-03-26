/**
 * TypeScript definitions for AWS::WAF::WebACL
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAF::WebACL
 */
export namespace AWS_WAF_WebACL {
  export type ActivatedRuleType = {
    Action?: WafActionType;

    Priority: number;

    RuleId: string;
  };

  export type WafActionType = {
    Type: string;
  };

  /**
   * Resource Type definition for AWS::WAF::WebACL
   */
  export type WebACLResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    DefaultAction: WafActionType;

    /**
     * Create-only property
     */
    MetricName: string;

    /**
     * Create-only property
     */
    Name: string;

    Rules?: ActivatedRuleType[];
  };
}
