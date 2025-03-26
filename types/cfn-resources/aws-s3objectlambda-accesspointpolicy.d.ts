/**
 * TypeScript definitions for AWS::S3ObjectLambda::AccessPointPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::S3ObjectLambda::AccessPointPolicy resource is an Amazon S3ObjectLambda policy type that you can use to control permissions for your S3ObjectLambda
 */
export namespace AWS_S3ObjectLambda_AccessPointPolicy {
  /**
   * AWS::S3ObjectLambda::AccessPointPolicy resource is an Amazon S3ObjectLambda policy type that you can use to control permissions for your S3ObjectLambda
   */
  export type AccessPointPolicyResourceType = {
    /**
     * The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.
     * Create-only property
     */
    ObjectLambdaAccessPoint: string;

    /**
     * A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide.
     */
    PolicyDocument: Record<string, any>;
  };
}
