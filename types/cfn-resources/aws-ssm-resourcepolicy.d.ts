/**
 * TypeScript definitions for AWS::SSM::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSM::ResourcePolicy
 */
export namespace AWS_SSM_ResourcePolicy {
  /**
   * Resource Type definition for AWS::SSM::ResourcePolicy
   */
  export type ResourcePolicyResourceType = {
    /**
     * Arn of OpsItemGroup etc.
     * Create-only property
     */
    ResourceArn: string;

    /**
     * Actual policy statement.
     */
    Policy: Record<string, any> | string;

    /**
     * An unique identifier within the policies of a resource.
     * Read-only property
     */
    PolicyId?: string;

    /**
     * A snapshot identifier for the policy over time.
     * Read-only property
     */
    PolicyHash?: string;
  };
}
