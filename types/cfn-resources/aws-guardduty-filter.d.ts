/**
 * TypeScript definitions for AWS::GuardDuty::Filter
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GuardDuty::Filter
 */
export namespace AWS_GuardDuty_Filter {
  export type TagItemType = {
    Key: string;

    Value: string;
  };

  export type ConditionType = {
    Lt?: number;

    Gt?: number;

    Gte?: number;

    Neq?: string[];

    Eq?: string[];

    Lte?: number;

    Equals?: string[];

    GreaterThan?: number;

    GreaterThanOrEqual?: number;

    LessThan?: number;

    LessThanOrEqual?: number;

    NotEquals?: string[];
  };

  export type FindingCriteriaType = {
    Criterion?: Record<string, any>;
  };

  /**
   * Resource Type definition for AWS::GuardDuty::Filter
   */
  export type FilterResourceType = {
    Action?: string;

    Description?: string;

    /**
     * Create-only property
     */
    DetectorId: string;

    FindingCriteria: FindingCriteriaType;

    Rank?: number;

    /**
     * Create-only property
     */
    Name: string;

    Tags?: TagItemType[];
  };
}
