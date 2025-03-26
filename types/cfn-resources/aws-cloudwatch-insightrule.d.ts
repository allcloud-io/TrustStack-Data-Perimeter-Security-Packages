/**
 * TypeScript definitions for AWS::CloudWatch::InsightRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudWatch::InsightRule
 */
export namespace AWS_CloudWatch_InsightRule {
  export type TagsType = {};

  /**
   * Resource Type definition for AWS::CloudWatch::InsightRule
   */
  export type InsightRuleResourceType = {
    RuleState: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    RuleBody: string;

    /**
     * Create-only property
     */
    RuleName: string;

    Tags?: TagsType;
  };
}
