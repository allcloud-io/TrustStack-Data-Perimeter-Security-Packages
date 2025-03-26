/**
 * TypeScript definitions for AWS::ECS::ClusterCapacityProviderAssociations
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associate a set of ECS Capacity Providers with a specified ECS Cluster
 */
export namespace AWS_ECS_ClusterCapacityProviderAssociations {
  /**
   * List of capacity providers to associate with the cluster
   */
  export type DefaultCapacityProviderStrategyType = {};

  /**
   * If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.
   */
  export type CapacityProviderType = {};

  /**
   * List of capacity providers to associate with the cluster
   */
  export type CapacityProvidersType = {};

  /**
   * The name of the cluster
   */
  export type ClusterType = {};

  export type CapacityProviderStrategyType = {
    CapacityProvider: CapacityProviderType;

    Base?: number;

    Weight?: number;
  };

  /**
   * Associate a set of ECS Capacity Providers with a specified ECS Cluster
   */
  export type ClusterCapacityProviderAssociationsResourceType = {
    DefaultCapacityProviderStrategy: DefaultCapacityProviderStrategyType;

    CapacityProviders: CapacityProvidersType;

    /**
     * Create-only property
     */
    Cluster: ClusterType;
  };
}
