/**
 * TypeScript definitions for AWS::Lambda::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lambda::ResourcePolicy
 */
export namespace AWS_Lambda_ResourcePolicy {
  /**
   * Resource Type definition for AWS::Lambda::ResourcePolicy
   */
  export type ResourcePolicyResourceType = {
    /**
     * The resource policy of your Lambda resource
     */
    PolicyDocument: Record<string, any>;

    /**
     * The resource arn of your Lambda resource
     * Create-only property
     */
    ResourceArn: string;
  };
}
