/**
 * TypeScript definitions for AWS::DAX::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DAX::Cluster
 */
export namespace AWS_DAX_Cluster {
  export type SSESpecificationType = {
    SSEEnabled?: boolean;
  };

  /**
   * Resource Type definition for AWS::DAX::Cluster
   */
  export type ClusterResourceType = {
    /**
     * Create-only property
     */
    SSESpecification?: SSESpecificationType;

    /**
     * Read-only property
     */
    ClusterDiscoveryEndpointURL?: string;

    Description?: string;

    ReplicationFactor: number;

    ParameterGroupName?: string;

    AvailabilityZones?: string[];

    /**
     * Create-only property
     */
    IAMRoleARN: string;

    /**
     * Create-only property
     */
    SubnetGroupName?: string;

    PreferredMaintenanceWindow?: string;

    /**
     * Create-only property
     */
    ClusterEndpointEncryptionType?: string;

    NotificationTopicARN?: string;

    SecurityGroupIds?: string[];

    /**
     * Create-only property
     */
    NodeType: string;

    /**
     * Create-only property
     */
    ClusterName?: string;

    /**
     * Read-only property
     */
    ClusterDiscoveryEndpoint?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: Record<string, any>;
  };
}
