/**
 * TypeScript definitions for AWS::CloudFormation::WaitCondition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudFormation::WaitCondition
 */
export namespace AWS_CloudFormation_WaitCondition {
  /**
   * Resource Type definition for AWS::CloudFormation::WaitCondition
   */
  export type WaitConditionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Data?: Record<string, any>;

    Count?: number;

    Handle?: string;

    Timeout?: string;
  };
}
