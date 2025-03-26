/**
 * TypeScript definitions for AWS::Batch::ConsumableResource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type schema for AWS::Batch::ConsumableResource
 */
export namespace AWS_Batch_ConsumableResource {
  /**
   * ARN of the Consumable Resource.
   */
  export type ResourceArnType = {};

  /**
   * Type of Consumable Resource.
   */
  export type ResourceTypeType = {};

  /**
   * Resource Type schema for AWS::Batch::ConsumableResource
   */
  export type ConsumableResourceResourceType = {
    /**
     * Name of ConsumableResource.
     * Create-only property
     */
    ConsumableResourceName?: string;

    /**
     * Read-only property
     */
    ConsumableResourceArn?: ResourceArnType;

    /**
     * Total Quantity of ConsumableResource.
     */
    TotalQuantity: number;

    /**
     * In-use Quantity of ConsumableResource.
     * Read-only property
     */
    InUseQuantity?: number;

    /**
     * Available Quantity of ConsumableResource.
     * Read-only property
     */
    AvailableQuantity?: number;

    /**
     * Create-only property
     */
    ResourceType: ResourceTypeType;

    /**
     * Read-only property
     */
    CreatedAt?: number;

    /**
     * A key-value pair to associate with a resource.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
