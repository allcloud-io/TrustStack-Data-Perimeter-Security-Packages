/**
 * TypeScript definitions for AWS::DevOpsGuru::ResourceCollection
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource schema represents the ResourceCollection resource in the Amazon DevOps Guru.
 */
export namespace AWS_DevOpsGuru_ResourceCollection {
  /**
   * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
   */
  export type ResourceCollectionFilterType = {
    CloudFormation?: CloudFormationCollectionFilterType;

    Tags?: TagCollectionsType;
  };

  /**
   * CloudFormation resource for DevOps Guru to monitor
   */
  export type CloudFormationCollectionFilterType = {
    /**
     * An array of CloudFormation stack names.
     */
    StackNames?: string[];
  };

  /**
   * Tagged resources for DevOps Guru to monitor
   */
  export type TagCollectionsType = {};

  /**
   * Tagged resource for DevOps Guru to monitor
   */
  export type TagCollectionType = {
    /**
     * A Tag key for DevOps Guru app boundary.
     */
    AppBoundaryKey?: string;

    /**
     * Tag values of DevOps Guru app boundary.
     */
    TagValues?: string[];
  };

  /**
   * This resource schema represents the ResourceCollection resource in the Amazon DevOps Guru.
   */
  export type ResourceCollectionResourceType = {
    ResourceCollectionFilter: ResourceCollectionFilterType;

    /**
     * The type of ResourceCollection
     * Read-only property
     */
    ResourceCollectionType?: string;
  };
}
