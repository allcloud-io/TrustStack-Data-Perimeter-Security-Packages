/**
 * TypeScript definitions for AWS::PCS::Queue
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::PCS::Queue resource creates an AWS PCS queue.
 */
export namespace AWS_PCS_Queue {
  /**
   * The compute node group configuration for a queue.
   */
  export type ComputeNodeGroupConfigurationType = {
    /**
     * The compute node group ID for the compute node group configuration.
     */
    ComputeNodeGroupId?: string;
  };

  /**
   * An error that occurred during resource provisioning.
   */
  export type ErrorInfoType = {
    /**
     * The short-form error code.
     */
    Code?: string;

    /**
     * The detailed error information.
     */
    Message?: string;
  };

  /**
   * AWS::PCS::Queue resource creates an AWS PCS queue.
   */
  export type QueueResourceType = {
    /**
     * The unique Amazon Resource Name (ARN) of the queue.
     * Read-only property
     */
    Arn?: string;

    /**
     * The ID of the cluster of the queue.
     * Create-only property
     */
    ClusterId: string;

    /**
     * The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.
     */
    ComputeNodeGroupConfigurations?: ComputeNodeGroupConfigurationType[];

    /**
     * The list of errors that occurred during queue provisioning.
     * Read-only property
     */
    ErrorInfo?: ErrorInfoType[];

    /**
     * The generated unique ID of the queue.
     * Read-only property
     */
    Id?: string;

    /**
     * The name that identifies the queue.
     * Create-only property
     */
    Name?: string;

    /**
     * The provisioning status of the queue. The provisioning status doesn't indicate the overall health of the queue.
     * Read-only property
     */
    Status?: string;

    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    Tags?: Record<string, any>;
  };
}
