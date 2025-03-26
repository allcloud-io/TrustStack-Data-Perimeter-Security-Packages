/**
 * TypeScript definitions for AWS::CodeStarConnections::SyncConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Schema for AWS::CodeStarConnections::SyncConfiguration resource which is used to enables an AWS resource to be synchronized from a source-provider.
 */
export namespace AWS_CodeStarConnections_SyncConfiguration {
  /**
   * Schema for AWS::CodeStarConnections::SyncConfiguration resource which is used to enables an AWS resource to be synchronized from a source-provider.
   */
  export type SyncConfigurationResourceType = {
    /**
     * the ID of the entity that owns the repository.
     * Read-only property
     */
    OwnerId?: string;

    /**
     * The name of the resource that is being synchronized to the repository.
     * Create-only property
     */
    ResourceName: string;

    /**
     * The name of the repository that is being synced to.
     * Read-only property
     */
    RepositoryName?: string;

    /**
     * The name of the external provider where your third-party code repository is configured.
     * Read-only property
     */
    ProviderType?: string;

    /**
     * The name of the branch of the repository from which resources are to be synchronized,
     */
    Branch: string;

    /**
     * The source provider repository path of the sync configuration file of the respective SyncType.
     */
    ConfigFile: string;

    /**
     * The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.
     * Create-only property
     */
    SyncType: string;

    /**
     * The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.
     */
    RoleArn: string;

    /**
     * Whether to enable or disable publishing of deployment status to source providers.
     */
    PublishDeploymentStatus?: string;

    /**
     * When to trigger Git sync to begin the stack update.
     */
    TriggerResourceUpdateOn?: string;

    /**
     * A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.
     */
    RepositoryLinkId: string;
  };
}
