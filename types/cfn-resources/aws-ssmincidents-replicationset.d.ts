/**
 * TypeScript definitions for AWS::SSMIncidents::ReplicationSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::SSMIncidents::ReplicationSet
 */
export namespace AWS_SSMIncidents_ReplicationSet {
  /**
   * The ARN of the ReplicationSet.
   */
  export type ArnType = {};

  /**
   * The AWS region name.
   */
  export type RegionNameType = {};

  /**
   * The ReplicationSet regional configuration.
   */
  export type ReplicationRegionType = {
    RegionName?: RegionNameType;

    RegionConfiguration?: RegionConfigurationType;
  };

  /**
   * The ReplicationSet regional configuration.
   */
  export type RegionConfigurationType = {
    /**
     * The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set.
     */
    SseKmsKeyId: string;
  };

  /**
   * Configures the ReplicationSet deletion protection.
   */
  export type DeletionProtectedType = {};

  export type RegionListType = {};

  /**
   * A key-value pair to tag a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource type definition for AWS::SSMIncidents::ReplicationSet
   */
  export type ReplicationSetResourceType = {
    /**
     * The ARN of the ReplicationSet.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The ReplicationSet configuration.
     */
    Regions: RegionListType;

    /**
     * Default: false
     */
    DeletionProtected?: DeletionProtectedType;

    /**
     * The tags to apply to the replication set.
     * Default: []
     */
    Tags?: TagType[];
  };
}
