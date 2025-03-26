/**
 * TypeScript definitions for AWS::DAX::ParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DAX::ParameterGroup
 */
export namespace AWS_DAX_ParameterGroup {
  /**
   * Resource Type definition for AWS::DAX::ParameterGroup
   */
  export type ParameterGroupResourceType = {
    ParameterNameValues?: Record<string, any>;

    Description?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ParameterGroupName?: string;
  };
}
