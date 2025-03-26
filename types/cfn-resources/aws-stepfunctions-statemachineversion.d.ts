/**
 * TypeScript definitions for AWS::StepFunctions::StateMachineVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for StateMachineVersion
 */
export namespace AWS_StepFunctions_StateMachineVersion {
  /**
   * Resource schema for StateMachineVersion
   */
  export type StateMachineVersionResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    StateMachineArn: string;

    /**
     * Create-only property
     */
    StateMachineRevisionId?: string;

    /**
     * Create-only property
     */
    Description?: string;
  };
}
