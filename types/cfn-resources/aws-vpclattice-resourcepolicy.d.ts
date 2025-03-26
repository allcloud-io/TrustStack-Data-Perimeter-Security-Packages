/**
 * TypeScript definitions for AWS::VpcLattice::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Retrieves information about the resource policy. The resource policy is an IAM policy created by AWS RAM on behalf of the resource owner when they share a resource.
 */
export namespace AWS_VpcLattice_ResourcePolicy {
  /**
   * Retrieves information about the resource policy. The resource policy is an IAM policy created by AWS RAM on behalf of the resource owner when they share a resource.
   */
  export type ResourcePolicyResourceType = {
    /**
     * Create-only property
     */
    ResourceArn: string;

    Policy: Record<string, any>;
  };
}
