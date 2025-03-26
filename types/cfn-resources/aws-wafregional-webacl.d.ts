/**
 * TypeScript definitions for AWS::WAFRegional::WebACL
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::WebACL
 */
export namespace AWS_WAFRegional_WebACL {
  export type ActionType = {
    Type: string;
  };

  export type RuleType = {
    Action: ActionType;

    Priority: number;

    RuleId: string;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::WebACL
   */
  export type WebACLResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    MetricName: string;

    DefaultAction: ActionType;

    Rules?: RuleType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
