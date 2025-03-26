/**
 * TypeScript definitions for AWS::SNS::TopicInlinePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Schema for AWS::SNS::TopicInlinePolicy
 */
export namespace AWS_SNS_TopicInlinePolicy {
  /**
   * Schema for AWS::SNS::TopicInlinePolicy
   */
  export type TopicInlinePolicyResourceType = {
    /**
     * A policy document that contains permissions to add to the specified SNS topics.
     */
    PolicyDocument: Record<string, any>;

    /**
     * The Amazon Resource Name (ARN) of the topic to which you want to add the policy.
     * Create-only property
     */
    TopicArn: string;
  };
}
