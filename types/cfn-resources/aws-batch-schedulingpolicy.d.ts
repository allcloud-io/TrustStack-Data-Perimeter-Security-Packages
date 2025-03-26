/**
 * TypeScript definitions for AWS::Batch::SchedulingPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type schema for AWS::Batch::SchedulingPolicy
 */
export namespace AWS_Batch_SchedulingPolicy {
  /**
   * ARN of the Scheduling Policy.
   */
  export type ResourceArnType = {};

  /**
   * Fair Share Policy for the Job Queue.
   */
  export type FairsharePolicyType = {
    ShareDecaySeconds?: number;

    ComputeReservation?: number;

    /**
     * List of Share Attributes
     */
    ShareDistribution?: ShareAttributesType[];
  };

  export type ShareAttributesType = {
    ShareIdentifier?: string;

    WeightFactor?: number;
  };

  /**
   * Resource Type schema for AWS::Batch::SchedulingPolicy
   */
  export type SchedulingPolicyResourceType = {
    /**
     * Name of Scheduling Policy.
     * Create-only property
     */
    Name?: string;

    /**
     * Read-only property
     */
    Arn?: ResourceArnType;

    FairsharePolicy?: FairsharePolicyType;

    /**
     * A key-value pair to associate with a resource.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
