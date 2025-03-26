/**
 * TypeScript definitions for AWS::SQS::QueuePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::SQS::QueuePolicy` type applies a policy to SQS queues. For an example snippet, see Declaring an policy in the *User Guide*.
 */
export namespace AWS_SQS_QueuePolicy {
  /**
   * The `AWS::SQS::QueuePolicy` type applies a policy to SQS queues. For an example snippet, see Declaring an policy in the *User Guide*.
   */
  export type QueuePolicyResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * A policy document that contains the permissions for the specified SQS queues. For more information about SQS policies, see Using custom policies with the access policy language in the *Developer Guide*.
     */
    PolicyDocument: Record<string, any> | string;

    /**
     * The URLs of the queues to which you want to add the policy. You can use the `Ref` function to specify an `AWS::SQS::Queue` resource.
     */
    Queues: string[];
  };
}
