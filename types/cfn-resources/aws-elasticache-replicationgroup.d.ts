/**
 * TypeScript definitions for AWS::ElastiCache::ReplicationGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::ReplicationGroup
 */
export namespace AWS_ElastiCache_ReplicationGroup {
  export type LogDeliveryConfigurationRequestType = {
    LogType: string;

    LogFormat: string;

    DestinationType: string;

    DestinationDetails: DestinationDetailsType;
  };

  export type KinesisFirehoseDestinationDetailsType = {
    DeliveryStream: string;
  };

  export type CloudWatchLogsDestinationDetailsType = {
    LogGroup: string;
  };

  export type NodeGroupConfigurationType = {
    Slots?: string;

    PrimaryAvailabilityZone?: string;

    ReplicaAvailabilityZones?: string[];

    NodeGroupId?: string;

    ReplicaCount?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type DestinationDetailsType = {
    CloudWatchLogsDetails?: CloudWatchLogsDestinationDetailsType;

    KinesisFirehoseDetails?: KinesisFirehoseDestinationDetailsType;
  };

  /**
   * Resource Type definition for AWS::ElastiCache::ReplicationGroup
   */
  export type ReplicationGroupResourceType = {
    /**
     * Create-only property
     */
    PreferredCacheClusterAZs?: string[];

    ReaderEndPointPort?: string;

    NodeGroupConfiguration?: NodeGroupConfigurationType[];

    /**
     * Create-only property
     */
    SnapshotArns?: string[];

    ConfigurationEndPointPort?: string;

    /**
     * Create-only property
     */
    Port?: number;

    NumNodeGroups?: number;

    NotificationTopicArn?: string;

    AutomaticFailoverEnabled?: boolean;

    /**
     * Create-only property
     */
    ReplicasPerNodeGroup?: number;

    TransitEncryptionEnabled?: boolean;

    Engine?: string;

    Tags?: TagType[];

    PrimaryEndPointAddress?: string;

    /**
     * Create-only property
     */
    GlobalReplicationGroupId?: string;

    ConfigurationEndPointAddress?: string;

    EngineVersion?: string;

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    PrimaryClusterId?: string;

    ReadEndPointPorts?: string;

    AutoMinorVersionUpgrade?: boolean;

    SecurityGroupIds?: string[];

    SnapshotWindow?: string;

    TransitEncryptionMode?: string;

    SnapshotRetentionLimit?: number;

    ReadEndPointAddressesList?: string[];

    SnapshottingClusterId?: string;

    IpDiscovery?: string;

    ReadEndPointAddresses?: string;

    PrimaryEndPointPort?: string;

    CacheSecurityGroupNames?: string[];

    ClusterMode?: string;

    ReadEndPointPortsList?: string[];

    /**
     * Create-only property
     */
    SnapshotName?: string;

    ReplicationGroupDescription: string;

    ReaderEndPointAddress?: string;

    MultiAZEnabled?: boolean;

    /**
     * Create-only property
     */
    NetworkType?: string;

    /**
     * Read-only property
     * Create-only property
     */
    ReplicationGroupId?: string;

    NumCacheClusters?: number;

    /**
     * Create-only property
     */
    CacheSubnetGroupName?: string;

    CacheParameterGroupName?: string;

    PreferredMaintenanceWindow?: string;

    /**
     * Create-only property
     */
    AtRestEncryptionEnabled?: boolean;

    CacheNodeType?: string;

    UserGroupIds?: string[];

    AuthToken?: string;

    /**
     * Create-only property
     */
    DataTieringEnabled?: boolean;

    LogDeliveryConfigurations?: LogDeliveryConfigurationRequestType[];
  };
}
