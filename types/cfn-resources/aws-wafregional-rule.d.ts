/**
 * TypeScript definitions for AWS::WAFRegional::Rule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::Rule
 */
export namespace AWS_WAFRegional_Rule {
  export type PredicateType = {
    Type: string;

    DataId: string;

    Negated: boolean;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::Rule
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

    Predicates?: PredicateType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
