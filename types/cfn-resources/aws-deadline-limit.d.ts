/**
 * TypeScript definitions for AWS::Deadline::Limit
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::Limit Resource Type
 */
export namespace AWS_Deadline_Limit {
  /**
   * Definition of AWS::Deadline::Limit Resource Type
   */
  export type LimitResourceType = {
    /**
     * Create-only property
     */
    AmountRequirementName: string;

    /**
     * Read-only property
     */
    CurrentCount?: number;

    /**
     * Default: ""
     */
    Description?: string;

    DisplayName: string;

    /**
     * Create-only property
     */
    FarmId: string;

    /**
     * Read-only property
     */
    LimitId?: string;

    MaxCount: number;
  };
}
