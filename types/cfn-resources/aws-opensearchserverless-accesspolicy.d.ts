/**
 * TypeScript definitions for AWS::OpenSearchServerless::AccessPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon OpenSearchServerless access policy resource
 */
export namespace AWS_OpenSearchServerless_AccessPolicy {
  /**
   * The possible types for the access policy
   */
  export type AccessPolicyTypeType = {};

  /**
   * Amazon OpenSearchServerless access policy resource
   */
  export type AccessPolicyResourceType = {
    /**
     * The name of the policy
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Type: AccessPolicyTypeType;

    /**
     * The description of the policy
     */
    Description?: string;

    /**
     * The JSON policy document that is the content for the policy
     */
    Policy: string;
  };
}
