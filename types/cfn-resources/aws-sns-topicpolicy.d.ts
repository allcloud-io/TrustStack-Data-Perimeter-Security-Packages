/**
 * TypeScript definitions for AWS::SNS::TopicPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::SNS::TopicPolicy` resource associates SNS topics with a policy. For an example snippet, see Declaring an policy in the *User Guide*.
 */
export namespace AWS_SNS_TopicPolicy {
  /**
   * The `AWS::SNS::TopicPolicy` resource associates SNS topics with a policy. For an example snippet, see Declaring an policy in the *User Guide*.
   */
  export type TopicPolicyResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * A policy document that contains permissions to add to the specified SNS topics.
     */
    PolicyDocument: Record<string, any> | string;

    /**
     * The Amazon Resource Names (ARN) of the topics to which you want to add the policy. You can use the `Ref` function to specify an `AWS::SNS::Topic` resource.
     */
    Topics: string[];
  };
}
