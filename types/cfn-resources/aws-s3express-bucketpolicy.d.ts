/**
 * TypeScript definitions for AWS::S3Express::BucketPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::S3Express::BucketPolicy.
 */
export namespace AWS_S3Express_BucketPolicy {
  /**
   * Resource Type definition for AWS::S3Express::BucketPolicy.
   */
  export type BucketPolicyResourceType = {
    /**
     * The name of the S3 directory bucket to which the policy applies.
     * Create-only property
     */
    Bucket: string;

    /**
     * A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
     */
    PolicyDocument: Record<string, any> | string;
  };
}
