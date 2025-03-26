/**
 * TypeScript definitions for AWS::AutoScaling::WarmPool
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::AutoScaling::WarmPool.
 */
export namespace AWS_AutoScaling_WarmPool {
  export type InstanceReusePolicyType = {
    ReuseOnScaleIn?: boolean;
  };

  /**
   * Resource schema for AWS::AutoScaling::WarmPool.
   */
  export type WarmPoolResourceType = {
    /**
     * Create-only property
     */
    AutoScalingGroupName: string;

    MaxGroupPreparedCapacity?: number;

    MinSize?: number;

    PoolState?: string;

    InstanceReusePolicy?: InstanceReusePolicyType;
  };
}
