/**
 * TypeScript definitions for AWS::ElastiCache::CacheCluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::CacheCluster
 */
export namespace AWS_ElastiCache_CacheCluster {
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

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type DestinationDetailsType = {
    CloudWatchLogsDetails?: CloudWatchLogsDestinationDetailsType;

    KinesisFirehoseDetails?: KinesisFirehoseDestinationDetailsType;
  };

  /**
   * Resource Type definition for AWS::ElastiCache::CacheCluster
   */
  export type CacheClusterResourceType = {
    CacheSecurityGroupNames?: string[];

    /**
     * Create-only property
     */
    SnapshotArns?: string[];

    /**
     * Create-only property
     */
    Port?: number;

    ConfigurationEndpointAddress?: string;

    NotificationTopicArn?: string;

    NumCacheNodes: number;

    /**
     * Create-only property
     */
    SnapshotName?: string;

    TransitEncryptionEnabled?: boolean;

    /**
     * Create-only property
     */
    NetworkType?: string;

    PreferredAvailabilityZones?: string[];

    VpcSecurityGroupIds?: string[];

    /**
     * Create-only property
     */
    ClusterName?: string;

    RedisEndpointAddress?: string;

    /**
     * Create-only property
     */
    Engine: string;

    Tags?: TagType[];

    EngineVersion?: string;

    RedisEndpointPort?: string;

    /**
     * Create-only property
     */
    CacheSubnetGroupName?: string;

    CacheParameterGroupName?: string;

    PreferredMaintenanceWindow?: string;

    AutoMinorVersionUpgrade?: boolean;

    PreferredAvailabilityZone?: string;

    SnapshotWindow?: string;

    CacheNodeType: string;

    SnapshotRetentionLimit?: number;

    ConfigurationEndpointPort?: string;

    IpDiscovery?: string;

    LogDeliveryConfigurations?: LogDeliveryConfigurationRequestType[];

    /**
     * Read-only property
     */
    Id?: string;

    AZMode?: string;
  };
}
