/**
 * TypeScript definitions for AWS::ECR::ReplicationConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ECR::ReplicationConfiguration` resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see Using Service-Linked Roles for Amazon ECR in the *Amazon Elastic Container Registry User Guide*.
 * When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see `AWS::ECR::RegistryPolicy`.
 */
export namespace AWS_ECR_ReplicationConfiguration {
  /**
   * The replication configuration for a registry.
   */
  export type ReplicationConfigurationType = {
    /**
     * An array of objects representing the replication destinations and repository filters for a replication configuration.
     */
    Rules: ReplicationRuleType[];
  };

  /**
   * An array of objects representing the replication destinations and repository filters for a replication configuration.
   */
  export type ReplicationRuleType = {
    /**
     * An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
     */
    RepositoryFilters?: RepositoryFilterType[];

    /**
     * An array of objects representing the destination for a replication rule.
     */
    Destinations: ReplicationDestinationType[];
  };

  /**
   * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
   */
  export type RepositoryFilterType = {
    /**
     * The repository filter details. When the `PREFIX_MATCH` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
     */
    Filter: FilterType;

    /**
     * The repository filter type. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the `filter` parameter.
     */
    FilterType: FilterTypeType;
  };

  /**
   * The repository filter to be applied for replication.
   */
  export type FilterType = {};

  /**
   * Type of repository filter
   */
  export type FilterTypeType = {};

  /**
   * An array of objects representing the destination for a replication rule.
   */
  export type ReplicationDestinationType = {
    /**
     * The Region to replicate to.
     */
    Region: RegionType;

    /**
     * The AWS account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.
     */
    RegistryId: RegistryIdType;
  };

  /**
   * The account ID of the destination registry to replicate to.
   */
  export type RegistryIdType = {};

  /**
   * A Region to replicate to.
   */
  export type RegionType = {};

  /**
   * The `AWS::ECR::ReplicationConfiguration` resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see Using Service-Linked Roles for Amazon ECR in the *Amazon Elastic Container Registry User Guide*.
   * When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see `AWS::ECR::RegistryPolicy`.
   */
  export type ReplicationConfigurationResourceType = {
    /**
     * The replication configuration for a registry.
     */
    ReplicationConfiguration: ReplicationConfigurationType;

    /**
     * Read-only property
     */
    RegistryId?: string;
  };
}
