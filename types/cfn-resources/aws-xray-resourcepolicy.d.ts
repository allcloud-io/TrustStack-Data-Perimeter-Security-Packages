/**
 * TypeScript definitions for AWS::XRay::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * This schema provides construct and validation rules for AWS-XRay Resource Policy resource parameters.
 */
export namespace AWS_XRay_ResourcePolicy {
  /**
   * This schema provides construct and validation rules for AWS-XRay Resource Policy resource parameters.
   */
  export type ResourcePolicyResourceType = {
    /**
     * The name of the resource policy. Must be unique within a specific AWS account.
     * Create-only property
     */
    PolicyName: string;

    /**
     * The resource policy document, which can be up to 5kb in size.
     */
    PolicyDocument: string;

    /**
     * A flag to indicate whether to bypass the resource policy lockout safety check
     */
    BypassPolicyLockoutCheck?: boolean;
  };
}
