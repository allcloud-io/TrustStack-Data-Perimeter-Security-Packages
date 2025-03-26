/**
 * TypeScript definitions for AWS::ECS::PrimaryTaskSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * A pseudo-resource that manages which of your ECS task sets is primary.
 */
export namespace AWS_ECS_PrimaryTaskSet {
  /**
   * A pseudo-resource that manages which of your ECS task sets is primary.
   */
  export type PrimaryTaskSetResourceType = {
    /**
     * The ID or full Amazon Resource Name (ARN) of the task set.
     */
    TaskSetId: string;

    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
     * Create-only property
     */
    Cluster: string;

    /**
     * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
     * Create-only property
     */
    Service: string;
  };
}
