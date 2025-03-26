/**
 * TypeScript definitions for AWS::Elasticsearch::Domain
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Elasticsearch::Domain
 */
export namespace AWS_Elasticsearch_Domain {
  export type LogPublishingOptionType = {
    CloudWatchLogsLogGroupArn?: string;

    Enabled?: boolean;
  };

  export type ElasticsearchClusterConfigType = {
    InstanceCount?: number;

    WarmEnabled?: boolean;

    WarmCount?: number;

    DedicatedMasterEnabled?: boolean;

    ZoneAwarenessConfig?: ZoneAwarenessConfigType;

    ColdStorageOptions?: ColdStorageOptionsType;

    DedicatedMasterCount?: number;

    InstanceType?: string;

    WarmType?: string;

    ZoneAwarenessEnabled?: boolean;

    DedicatedMasterType?: string;
  };

  export type VPCOptionsType = {
    SecurityGroupIds?: string[];

    SubnetIds?: string[];
  };

  export type SnapshotOptionsType = {
    AutomatedSnapshotStartHour?: number;
  };

  export type ZoneAwarenessConfigType = {
    AvailabilityZoneCount?: number;
  };

  export type NodeToNodeEncryptionOptionsType = {
    Enabled?: boolean;
  };

  export type ColdStorageOptionsType = {
    Enabled?: boolean;
  };

  export type DomainEndpointOptionsType = {
    CustomEndpointCertificateArn?: string;

    CustomEndpointEnabled?: boolean;

    EnforceHTTPS?: boolean;

    CustomEndpoint?: string;

    TLSSecurityPolicy?: string;
  };

  export type CognitoOptionsType = {
    Enabled?: boolean;

    IdentityPoolId?: string;

    UserPoolId?: string;

    RoleArn?: string;
  };

  export type EBSOptionsType = {
    EBSEnabled?: boolean;

    VolumeType?: string;

    Iops?: number;

    VolumeSize?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type EncryptionAtRestOptionsType = {
    KmsKeyId?: string;

    Enabled?: boolean;
  };

  export type MasterUserOptionsType = {
    MasterUserPassword?: string;

    MasterUserName?: string;

    MasterUserARN?: string;
  };

  export type AdvancedSecurityOptionsInputType = {
    Enabled?: boolean;

    MasterUserOptions?: MasterUserOptionsType;

    AnonymousAuthEnabled?: boolean;

    InternalUserDatabaseEnabled?: boolean;
  };

  /**
   * Resource Type definition for AWS::Elasticsearch::Domain
   */
  export type DomainResourceType = {
    ElasticsearchClusterConfig?: ElasticsearchClusterConfigType;

    /**
     * Create-only property
     */
    DomainName?: string;

    ElasticsearchVersion?: string;

    LogPublishingOptions?: Record<string, any>;

    SnapshotOptions?: SnapshotOptionsType;

    VPCOptions?: VPCOptionsType;

    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsType;

    AccessPolicies?: Record<string, any>;

    DomainEndpointOptions?: DomainEndpointOptionsType;

    /**
     * Read-only property
     */
    DomainArn?: string;

    CognitoOptions?: CognitoOptionsType;

    AdvancedOptions?: Record<string, any>;

    AdvancedSecurityOptions?: AdvancedSecurityOptionsInputType;

    /**
     * Read-only property
     */
    DomainEndpoint?: string;

    EBSOptions?: EBSOptionsType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    EncryptionAtRestOptions?: EncryptionAtRestOptionsType;

    Tags?: TagType[];
  };
}
