/**
 * TypeScript definitions for AWS::ResilienceHub::ResiliencyPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for Resiliency Policy.
 */
export namespace AWS_ResilienceHub_ResiliencyPolicy {
  /**
   * Failure Policy.
   */
  export type FailurePolicyType = {
    /**
     * RTO in seconds.
     */
    RtoInSecs: number;

    /**
     * RPO in seconds.
     */
    RpoInSecs: number;
  };

  export type PolicyMapType = {
    AZ: FailurePolicyType;

    Hardware: FailurePolicyType;

    Software: FailurePolicyType;

    Region?: FailurePolicyType;
  };

  export type TagValueType = {};

  export type TagMapType = {};

  /**
   * Resource Type Definition for Resiliency Policy.
   */
  export type ResiliencyPolicyResourceType = {
    /**
     * Name of Resiliency Policy.
     */
    PolicyName: string;

    /**
     * Description of Resiliency Policy.
     */
    PolicyDescription?: string;

    /**
     * Data Location Constraint of the Policy.
     */
    DataLocationConstraint?: string;

    /**
     * Resiliency Policy Tier.
     */
    Tier: string;

    Policy: PolicyMapType;

    /**
     * Amazon Resource Name (ARN) of the Resiliency Policy.
     * Read-only property
     */
    PolicyArn?: string;

    Tags?: TagMapType;
  };
}
