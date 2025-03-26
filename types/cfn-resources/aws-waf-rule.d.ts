/**
 * TypeScript definitions for AWS::WAF::Rule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAF::Rule
 */
export namespace AWS_WAF_Rule {
  export type PredicateType = {
    DataId: string;

    Negated: boolean;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::WAF::Rule
   */
  export type RuleResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    MetricName: string;

    /**
     * Create-only property
     */
    Name: string;

    Predicates?: PredicateType[];
  };
}
