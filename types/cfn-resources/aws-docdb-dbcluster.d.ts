/**
 * TypeScript definitions for AWS::DocDB::DBCluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DocDB::DBCluster
 */
export namespace AWS_DocDB_DBCluster {
  export type ServerlessV2ScalingConfigurationType = {
    MinCapacity: number;

    MaxCapacity: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::DocDB::DBCluster
   */
  export type DBClusterResourceType = {
    /**
     * Create-only property
     */
    StorageEncrypted?: boolean;

    RestoreToTime?: string;

    /**
     * Create-only property
     */
    SnapshotIdentifier?: string;

    Port?: number;

    /**
     * Create-only property
     */
    DBClusterIdentifier?: string;

    PreferredBackupWindow?: string;

    /**
     * Read-only property
     */
    ClusterResourceId?: string;

    /**
     * Read-only property
     */
    Endpoint?: string;

    RotateMasterUserPassword?: boolean;

    VpcSecurityGroupIds?: string[];

    CopyTagsToSnapshot?: boolean;

    RestoreType?: string;

    Tags?: TagType[];

    EngineVersion?: string;

    StorageType?: string;

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * Create-only property
     */
    AvailabilityZones?: string[];

    ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationType;

    PreferredMaintenanceWindow?: string;

    MasterUserSecretKmsKeyId?: string;

    /**
     * Create-only property
     */
    DBSubnetGroupName?: string;

    DeletionProtection?: boolean;

    UseLatestRestorableTime?: boolean;

    ManageMasterUserPassword?: boolean;

    MasterUserPassword?: string;

    /**
     * Create-only property
     */
    SourceDBClusterIdentifier?: string;

    /**
     * Create-only property
     */
    MasterUsername?: string;

    /**
     * Read-only property
     */
    ReadEndpoint?: string;

    DBClusterParameterGroupName?: string;

    BackupRetentionPeriod?: number;

    /**
     * Read-only property
     */
    Id?: string;

    EnableCloudwatchLogsExports?: string[];
  };
}
