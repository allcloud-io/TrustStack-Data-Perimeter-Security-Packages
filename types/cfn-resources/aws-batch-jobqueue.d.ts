/**
 * TypeScript definitions for AWS::Batch::JobQueue
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Batch::JobQueue
 */
export namespace AWS_Batch_JobQueue {
  export type ResourceArnType = {};

  export type ComputeEnvironmentOrderType = {
    ComputeEnvironment: string;

    Order: number;
  };

  export type JobStateTimeLimitActionType = {
    Action: string;

    MaxTimeSeconds: number;

    Reason: string;

    State: string;
  };

  /**
   * Resource Type definition for AWS::Batch::JobQueue
   */
  export type JobQueueResourceType = {
    /**
     * Create-only property
     */
    JobQueueName?: string;

    /**
     * Read-only property
     */
    JobQueueArn?: ResourceArnType;

    ComputeEnvironmentOrder: ComputeEnvironmentOrderType[];

    JobStateTimeLimitActions?: JobStateTimeLimitActionType[];

    Priority: number;

    State?: string;

    SchedulingPolicyArn?: ResourceArnType;

    /**
     * A key-value pair to associate with a resource.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
