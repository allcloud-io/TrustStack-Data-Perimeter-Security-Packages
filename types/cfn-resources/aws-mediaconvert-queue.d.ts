/**
 * TypeScript definitions for AWS::MediaConvert::Queue
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MediaConvert::Queue
 */
export namespace AWS_MediaConvert_Queue {
  /**
   * Resource Type definition for AWS::MediaConvert::Queue
   */
  export type QueueResourceType = {
    Status?: string;

    Description?: string;

    PricingPlan?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: Record<string, any>;

    /**
     * Create-only property
     */
    Name?: string;

    ConcurrentJobs?: number;
  };
}
