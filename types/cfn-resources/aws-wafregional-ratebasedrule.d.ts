/**
 * TypeScript definitions for AWS::WAFRegional::RateBasedRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::RateBasedRule
 */
export namespace AWS_WAFRegional_RateBasedRule {
  export type PredicateType = {
    Type: string;

    DataId: string;

    Negated: boolean;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::RateBasedRule
   */
  export type RateBasedRuleResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    MetricName: string;

    RateLimit: number;

    MatchPredicates?: PredicateType[];

    /**
     * Create-only property
     */
    RateKey: string;

    /**
     * Create-only property
     */
    Name: string;
  };
}
