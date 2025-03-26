/**
 * TypeScript definitions for AWS::FSx::Volume
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::FSx::Volume
 */
export namespace AWS_FSx_Volume {
  export type TieringPolicyType = {
    CoolingPeriod?: number;

    Name?: string;
  };

  export type SnaplockRetentionPeriodType = {
    MinimumRetention: RetentionPeriodType;

    DefaultRetention: RetentionPeriodType;

    MaximumRetention: RetentionPeriodType;
  };

  export type OntapConfigurationType = {
    JunctionPath?: string;

    StorageVirtualMachineId: string;

    TieringPolicy?: TieringPolicyType;

    SizeInMegabytes?: string;

    VolumeStyle?: string;

    SizeInBytes?: string;

    SecurityStyle?: string;

    SnaplockConfiguration?: SnaplockConfigurationType;

    AggregateConfiguration?: AggregateConfigurationType;

    SnapshotPolicy?: string;

    StorageEfficiencyEnabled?: string;

    CopyTagsToBackups?: string;

    OntapVolumeType?: string;
  };

  export type RetentionPeriodType = {
    Value?: number;

    Type: string;
  };

  export type SnaplockConfigurationType = {
    AuditLogVolume?: string;

    VolumeAppendModeEnabled?: string;

    AutocommitPeriod?: AutocommitPeriodType;

    RetentionPeriod?: SnaplockRetentionPeriodType;

    PrivilegedDelete?: string;

    SnaplockType: string;
  };

  export type OriginSnapshotType = {
    SnapshotARN: string;

    CopyStrategy: string;
  };

  export type OpenZFSConfigurationType = {
    ReadOnly?: boolean;

    Options?: string[];

    DataCompressionType?: string;

    NfsExports?: NfsExportsType[];

    StorageCapacityQuotaGiB?: number;

    CopyTagsToSnapshots?: boolean;

    ParentVolumeId: string;

    StorageCapacityReservationGiB?: number;

    RecordSizeKiB?: number;

    OriginSnapshot?: OriginSnapshotType;

    UserAndGroupQuotas?: UserAndGroupQuotasType[];
  };

  export type AggregateConfigurationType = {
    Aggregates?: string[];

    ConstituentsPerAggregate?: number;
  };

  export type NfsExportsType = {
    ClientConfigurations: ClientConfigurationsType[];
  };

  export type ClientConfigurationsType = {
    Clients: string;

    Options: string[];
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type AutocommitPeriodType = {
    Value?: number;

    Type: string;
  };

  export type UserAndGroupQuotasType = {
    Type: string;

    Id: number;

    StorageCapacityQuotaGiB: number;
  };

  /**
   * Resource Type definition for AWS::FSx::Volume
   */
  export type VolumeResourceType = {
    OpenZFSConfiguration?: OpenZFSConfigurationType;

    /**
     * Read-only property
     */
    ResourceARN?: string;

    /**
     * Read-only property
     */
    VolumeId?: string;

    /**
     * Create-only property
     */
    VolumeType?: string;

    /**
     * Create-only property
     */
    BackupId?: string;

    OntapConfiguration?: OntapConfigurationType;

    /**
     * Read-only property
     */
    UUID?: string;

    Tags?: TagType[];

    Name: string;
  };
}
