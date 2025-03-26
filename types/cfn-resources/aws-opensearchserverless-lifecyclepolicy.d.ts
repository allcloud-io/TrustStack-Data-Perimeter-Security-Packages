/**
 * TypeScript definitions for AWS::OpenSearchServerless::LifecyclePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon OpenSearchServerless lifecycle policy resource
 */
export namespace AWS_OpenSearchServerless_LifecyclePolicy {
  /**
   * The type of lifecycle policy
   */
  export type LifecyclePolicyTypeType = {};

  /**
   * Amazon OpenSearchServerless lifecycle policy resource
   */
  export type LifecyclePolicyResourceType = {
    /**
     * The name of the policy
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Type: LifecyclePolicyTypeType;

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
