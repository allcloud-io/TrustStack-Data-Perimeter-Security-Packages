/**
 * TypeScript definitions for AWS::SQS::QueueInlinePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Schema for SQS QueueInlinePolicy
 */
export namespace AWS_SQS_QueueInlinePolicy {
  /**
   * Schema for SQS QueueInlinePolicy
   */
  export type QueueInlinePolicyResourceType = {
    /**
     * A policy document that contains permissions to add to the specified SQS queue
     */
    PolicyDocument: Record<string, any>;

    /**
     * The URL of the SQS queue.
     * Create-only property
     */
    Queue: string;
  };
}
