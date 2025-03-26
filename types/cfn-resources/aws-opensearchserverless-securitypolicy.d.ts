/**
 * TypeScript definitions for AWS::OpenSearchServerless::SecurityPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon OpenSearchServerless security policy resource
 */
export namespace AWS_OpenSearchServerless_SecurityPolicy {
  /**
   * The possible types for the network policy
   */
  export type SecurityPolicyTypeType = {};

  /**
   * Amazon OpenSearchServerless security policy resource
   */
  export type SecurityPolicyResourceType = {
    /**
     * The description of the policy
     */
    Description?: string;

    /**
     * The JSON policy document that is the content for the policy
     */
    Policy: string;

    /**
     * The name of the policy
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Type: SecurityPolicyTypeType;
  };
}
