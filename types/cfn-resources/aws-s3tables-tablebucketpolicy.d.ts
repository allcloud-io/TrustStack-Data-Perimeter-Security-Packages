/**
 * TypeScript definitions for AWS::S3Tables::TableBucketPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Applies an IAM resource policy to a table bucket.
 */
export namespace AWS_S3Tables_TableBucketPolicy {
  /**
   * A policy document containing permissions to add to the specified table bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  export type ResourcePolicyType = {};

  /**
   * The Amazon Resource Name (ARN) of the table bucket to which the policy applies.
   */
  export type TableBucketARNType = {};

  /**
   * Applies an IAM resource policy to a table bucket.
   */
  export type TableBucketPolicyResourceType = {
    ResourcePolicy: ResourcePolicyType;

    /**
     * Create-only property
     */
    TableBucketARN: TableBucketARNType;
  };
}
