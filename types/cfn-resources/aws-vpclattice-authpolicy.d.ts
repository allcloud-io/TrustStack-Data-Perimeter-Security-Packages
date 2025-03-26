/**
 * TypeScript definitions for AWS::VpcLattice::AuthPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates or updates the auth policy.
 */
export namespace AWS_VpcLattice_AuthPolicy {
  /**
   * Creates or updates the auth policy.
   */
  export type AuthPolicyResourceType = {
    /**
     * Create-only property
     */
    ResourceIdentifier: string;

    Policy: Record<string, any>;

    /**
     * Read-only property
     */
    State?: string;
  };
}
