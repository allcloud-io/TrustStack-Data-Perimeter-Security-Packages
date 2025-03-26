/**
 * TypeScript definitions for AWS::CloudTrail::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudTrail::ResourcePolicy
 */
export namespace AWS_CloudTrail_ResourcePolicy {
  /**
   * Resource Type definition for AWS::CloudTrail::ResourcePolicy
   */
  export type ResourcePolicyResourceType = {
    /**
     * The ARN of the AWS CloudTrail resource to which the policy applies.
     * Create-only property
     */
    ResourceArn: string;

    /**
     * A policy document containing permissions to add to the specified resource. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
     */
    ResourcePolicy: Record<string, any> | string;
  };
}
