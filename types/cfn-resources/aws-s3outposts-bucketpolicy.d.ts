/**
 * TypeScript definitions for AWS::S3Outposts::BucketPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::S3Outposts::BucketPolicy
 */
export namespace AWS_S3Outposts_BucketPolicy {
  /**
   * Resource Type Definition for AWS::S3Outposts::BucketPolicy
   */
  export type BucketPolicyResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the specified bucket.
     * Create-only property
     */
    Bucket: string;

    /**
     * A policy document containing permissions to add to the specified bucket.
     */
    PolicyDocument: Record<string, any>;
  };
}
