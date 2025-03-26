/**
 * TypeScript definitions for AWS::CloudFormation::Macro
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudFormation::Macro
 */
export namespace AWS_CloudFormation_Macro {
  /**
   * Resource Type definition for AWS::CloudFormation::Macro
   */
  export type MacroResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Description?: string;

    FunctionName: string;

    LogGroupName?: string;

    LogRoleARN?: string;

    /**
     * Create-only property
     */
    Name: string;
  };
}
