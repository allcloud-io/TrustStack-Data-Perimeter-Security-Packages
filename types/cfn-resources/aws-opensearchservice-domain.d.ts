/**
 * TypeScript definitions for AWS::OpenSearchService::Domain
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_OpenSearchService_Domain {
  export type ZoneAwarenessConfigType = {
    AvailabilityZoneCount?: number;
  };

  export type NodeConfigType = {
    Enabled?: boolean;

    Type?: string;

    Count?: number;
  };

  export type NodeOptionType = {
    NodeType?: string;

    NodeConfig?: NodeConfigType;
  };

  export type ClusterConfigType = {
    InstanceCount?: number;

    WarmEnabled?: boolean;

    WarmCount?: number;

    DedicatedMasterEnabled?: boolean;

    ZoneAwarenessConfig?: ZoneAwarenessConfigType;

    DedicatedMasterCount?: number;

    InstanceType?: string;

    WarmType?: string;

    ZoneAwarenessEnabled?: boolean;

    DedicatedMasterType?: string;

    MultiAZWithStandbyEnabled?: boolean;

    ColdStorageOptions?: ColdStorageOptionsType;

    NodeOptions?: NodeOptionType[];
  };

  export type LogPublishingOptionType = {
    CloudWatchLogsLogGroupArn?: string;

    Enabled?: boolean;
  };

  export type SnapshotOptionsType = {
    AutomatedSnapshotStartHour?: number;
  };

  export type VPCOptionsType = {
    SecurityGroupIds?: string[];

    SubnetIds?: string[];
  };

  export type NodeToNodeEncryptionOptionsType = {
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

  export type MasterUserOptionsType = {
    MasterUserPassword?: string;

    MasterUserName?: string;

    MasterUserARN?: string;
  };

  export type IdpType = {
    MetadataContent: string;

    EntityId: string;
  };

  export type SAMLOptionsType = {
    Enabled?: boolean;

    Idp?: IdpType;

    MasterUserName?: string;

    MasterBackendRole?: string;

    SubjectKey?: string;

    RolesKey?: string;

    SessionTimeoutMinutes?: number;
  };

  export type JWTOptionsType = {
    Enabled?: boolean;

    PublicKey?: string;

    SubjectKey?: string;

    RolesKey?: string;
  };

  export type AdvancedSecurityOptionsInputType = {
    Enabled?: boolean;

    MasterUserOptions?: MasterUserOptionsType;

    InternalUserDatabaseEnabled?: boolean;

    AnonymousAuthEnabled?: boolean;

    SAMLOptions?: SAMLOptionsType;

    JWTOptions?: JWTOptionsType;

    AnonymousAuthDisableDate?: string;
  };

  export type EBSOptionsType = {
    EBSEnabled?: boolean;

    VolumeType?: string;

    Iops?: number;

    VolumeSize?: number;

    Throughput?: number;
  };

  export type EncryptionAtRestOptionsType = {
    KmsKeyId?: string;

    Enabled?: boolean;
  };

  export type TagType = {
    /**
     * The key of the tag.
     */
    Value: string;

    /**
     * The value of the tag.
     */
    Key: string;
  };

  export type ServiceSoftwareOptionsType = {
    CurrentVersion?: string;

    NewVersion?: string;

    UpdateAvailable?: boolean;

    Cancellable?: boolean;

    UpdateStatus?: string;

    Description?: string;

    AutomatedUpdateDate?: string;

    OptionalDeployment?: boolean;
  };

  export type WindowStartTimeType = {
    Hours: number;

    Minutes: number;
  };

  export type OffPeakWindowType = {
    WindowStartTime?: WindowStartTimeType;
  };

  export type OffPeakWindowOptionsType = {
    Enabled?: boolean;

    OffPeakWindow?: OffPeakWindowType;
  };

  export type SoftwareUpdateOptionsType = {
    AutoSoftwareUpdateEnabled?: boolean;
  };

  export type ColdStorageOptionsType = {
    Enabled?: boolean;
  };

  /**
   * Subject Key Idc type values.
   */
  export type SubjectKeyIdcTypeType = {};

  /**
   * Roles Key Idc type values.
   */
  export type RolesKeyIdcTypeType = {};

  /**
   * Options for configuring Identity Center
   */
  export type IdentityCenterOptionsType = {
    /**
     * Whether Identity Center is enabled.
     */
    EnabledAPIAccess?: boolean;

    /**
     * The ARN of the Identity Center instance.
     */
    IdentityCenterInstanceARN?: string;

    /**
     * The subject key for Identity Center options.
     */
    SubjectKey?: SubjectKeyIdcTypeType;

    /**
     * The roles key for Identity Center options.
     */
    RolesKey?: RolesKeyIdcTypeType;

    /**
     * The ARN of the Identity Center application.
     */
    IdentityCenterApplicationARN?: string;

    /**
     * The IdentityStoreId for Identity Center options.
     */
    IdentityStoreId?: string;
  };

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type DomainResourceType = {
    ClusterConfig?: ClusterConfigType;

    /**
     * Create-only property
     */
    DomainName?: string;

    AccessPolicies?: Record<string, any>;

    IPAddressType?: string;

    EngineVersion?: string;

    AdvancedOptions?: Record<string, any>;

    LogPublishingOptions?: Record<string, any>;

    SnapshotOptions?: SnapshotOptionsType;

    VPCOptions?: VPCOptionsType;

    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsType;

    DomainEndpointOptions?: DomainEndpointOptionsType;

    CognitoOptions?: CognitoOptionsType;

    AdvancedSecurityOptions?: AdvancedSecurityOptionsInputType;

    /**
     * Read-only property
     */
    DomainEndpoint?: string;

    /**
     * Read-only property
     */
    DomainEndpointV2?: string;

    /**
     * Read-only property
     */
    DomainEndpoints?: Record<string, any>;

    EBSOptions?: EBSOptionsType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    DomainArn?: string;

    EncryptionAtRestOptions?: EncryptionAtRestOptionsType;

    /**
     * An arbitrary set of tags (key-value pairs) for this Domain.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    ServiceSoftwareOptions?: ServiceSoftwareOptionsType;

    OffPeakWindowOptions?: OffPeakWindowOptionsType;

    SoftwareUpdateOptions?: SoftwareUpdateOptionsType;

    SkipShardMigrationWait?: boolean;

    IdentityCenterOptions?: IdentityCenterOptionsType;
  };
}
