/**
 * TypeScript definitions for AWS::FSx::FileSystem
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::FSx::FileSystem
 */
export namespace AWS_FSx_FileSystem {
  export type SelfManagedActiveDirectoryConfigurationType = {
    FileSystemAdministratorsGroup?: string;

    UserName?: string;

    DomainName?: string;

    OrganizationalUnitDistinguishedName?: string;

    DnsIps?: string[];

    Password?: string;
  };

  export type AuditLogConfigurationType = {
    FileAccessAuditLogLevel: string;

    FileShareAccessAuditLogLevel: string;

    AuditLogDestination?: string;
  };

  export type LustreConfigurationType = {
    DriveCacheType?: string;

    AutoImportPolicy?: string;

    EfaEnabled?: boolean;

    ImportedFileChunkSize?: number;

    DeploymentType?: string;

    DataCompressionType?: string;

    ImportPath?: string;

    WeeklyMaintenanceStartTime?: string;

    MetadataConfiguration?: MetadataConfigurationType;

    DailyAutomaticBackupStartTime?: string;

    CopyTagsToBackups?: boolean;

    ExportPath?: string;

    PerUnitStorageThroughput?: number;

    AutomaticBackupRetentionDays?: number;
  };

  export type OntapConfigurationType = {
    HAPairs?: number;

    FsxAdminPassword?: string;

    ThroughputCapacityPerHAPair?: number;

    DeploymentType: string;

    ThroughputCapacity?: number;

    EndpointIpAddressRange?: string;

    RouteTableIds?: string[];

    WeeklyMaintenanceStartTime?: string;

    DiskIopsConfiguration?: DiskIopsConfigurationType;

    DailyAutomaticBackupStartTime?: string;

    AutomaticBackupRetentionDays?: number;

    PreferredSubnetId?: string;
  };

  export type RootVolumeConfigurationType = {
    ReadOnly?: boolean;

    DataCompressionType?: string;

    NfsExports?: NfsExportsType[];

    CopyTagsToSnapshots?: boolean;

    RecordSizeKiB?: number;

    UserAndGroupQuotas?: UserAndGroupQuotasType[];
  };

  export type WindowsConfigurationType = {
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationType;

    AuditLogConfiguration?: AuditLogConfigurationType;

    ActiveDirectoryId?: string;

    DeploymentType?: string;

    Aliases?: string[];

    ThroughputCapacity: number;

    WeeklyMaintenanceStartTime?: string;

    DiskIopsConfiguration?: DiskIopsConfigurationType;

    CopyTagsToBackups?: boolean;

    DailyAutomaticBackupStartTime?: string;

    AutomaticBackupRetentionDays?: number;

    PreferredSubnetId?: string;
  };

  export type OpenZFSConfigurationType = {
    Options?: string[];

    CopyTagsToVolumes?: boolean;

    DeploymentType: string;

    ThroughputCapacity?: number;

    RootVolumeConfiguration?: RootVolumeConfigurationType;

    EndpointIpAddressRange?: string;

    ReadCacheConfiguration?: ReadCacheConfigurationType;

    RouteTableIds?: string[];

    WeeklyMaintenanceStartTime?: string;

    DiskIopsConfiguration?: DiskIopsConfigurationType;

    DailyAutomaticBackupStartTime?: string;

    CopyTagsToBackups?: boolean;

    AutomaticBackupRetentionDays?: number;

    PreferredSubnetId?: string;
  };

  export type ReadCacheConfigurationType = {
    SizingMode?: string;

    SizeGiB?: number;
  };

  export type DiskIopsConfigurationType = {
    Mode?: string;

    Iops?: number;
  };

  export type MetadataConfigurationType = {
    Mode?: string;

    Iops?: number;
  };

  export type NfsExportsType = {
    ClientConfigurations?: ClientConfigurationsType[];
  };

  export type ClientConfigurationsType = {
    Clients?: string;

    Options?: string[];
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type UserAndGroupQuotasType = {
    Type?: string;

    Id?: number;

    StorageCapacityQuotaGiB?: number;
  };

  /**
   * Resource Type definition for AWS::FSx::FileSystem
   */
  export type FileSystemResourceType = {
    StorageType?: string;

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    StorageCapacity?: number;

    /**
     * Read-only property
     */
    RootVolumeId?: string;

    LustreConfiguration?: LustreConfigurationType;

    /**
     * Create-only property
     */
    BackupId?: string;

    OntapConfiguration?: OntapConfigurationType;

    /**
     * Read-only property
     */
    DNSName?: string;

    /**
     * Create-only property
     */
    SubnetIds: string[];

    /**
     * Create-only property
     */
    SecurityGroupIds?: string[];

    WindowsConfiguration?: WindowsConfigurationType;

    FileSystemTypeVersion?: string;

    OpenZFSConfiguration?: OpenZFSConfigurationType;

    /**
     * Read-only property
     */
    ResourceARN?: string;

    /**
     * Create-only property
     */
    FileSystemType: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    LustreMountName?: string;

    Tags?: TagType[];
  };
}
