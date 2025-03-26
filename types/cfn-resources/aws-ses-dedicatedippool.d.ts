/**
 * TypeScript definitions for AWS::SES::DedicatedIpPool
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SES::DedicatedIpPool
 */
export namespace AWS_SES_DedicatedIpPool {
  /**
   * Resource Type definition for AWS::SES::DedicatedIpPool
   */
  export type DedicatedIpPoolResourceType = {
    /**
     * The name of the dedicated IP pool.
     * Create-only property
     */
    PoolName?: string;

    /**
     * Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.
     */
    ScalingMode?: string;
  };
}
