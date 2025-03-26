/**
 * TypeScript definitions for AWS::MSK::BatchScramSecret
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MSK::BatchScramSecret
 */
export namespace AWS_MSK_BatchScramSecret {
  export type SecretArnListType = {};

  /**
   * Resource Type definition for AWS::MSK::BatchScramSecret
   */
  export type BatchScramSecretResourceType = {
    /**
     * Create-only property
     */
    ClusterArn: string;

    SecretArnList?: SecretArnListType;
  };
}
