/**
 * TypeScript definitions for AWS::EFS::FileSystem
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::EFS::FileSystem` resource creates a new, empty file system in EFSlong (EFS). You must create a mount target (AWS::EFS::MountTarget) to mount your EFS file system on an EC2 or other AWS cloud compute resource.
 */
export namespace AWS_EFS_FileSystem {
  export type ArnType = {};

  /**
   * A tag is a key-value pair attached to a file system. Allowed characters in the `Key` and `Value` properties are letters, white space, and numbers that can be represented in UTF-8, and the following characters:`+ - = . _ : /`
   */
  export type ElasticFileSystemTagType = {
    /**
     * The tag key (String). The key can't start with `aws:`.
     */
    Key: string;

    /**
     * The value of the tag key.
     */
    Value: string;
  };

  /**
   * Describes a policy used by Lifecycle management that specifies when to transition files into and out of the EFS storage classes. For more information, see Managing file system storage.
   * +  Each `LifecyclePolicy` object can have only a single transition. This means that in a request body, `LifecyclePolicies` must be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive`, `TransitionToPrimaryStorageClass`.
   * +  See the AWS::EFS::FileSystem examples for the correct `LifecyclePolicy` structure. Do not use the syntax shown on this page.
   */
  export type LifecyclePolicyType = {
    /**
     * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. Metadata operations such as listing the contents of a directory don't count as file access events.
     */
    TransitionToIA?: string;

    /**
     * Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.
     */
    TransitionToPrimaryStorageClass?: string;

    /**
     * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.
     */
    TransitionToArchive?: string;
  };

  /**
   * The backup policy turns automatic backups for the file system on or off.
   */
  export type BackupPolicyType = {
    /**
     * Set the backup policy status for the file system.
     * +   *ENABLED* - Turns automatic backups on for the file system.
     * +   *DISABLED* - Turns automatic backups off for the file system.
     */
    Status: string;
  };

  /**
   * Describes the protection on the file system.
   */
  export type FileSystemProtectionType = {
    /**
     * The status of the file system's replication overwrite protection.
     * +   `ENABLED` – The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
     * +   `DISABLED` – The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
     * +   `REPLICATING` – The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.
     * If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.
     */
    ReplicationOverwriteProtection?: string;
  };

  /**
   * Describes the destination file system in the replication configuration.
   */
  export type ReplicationDestinationType = {
    /**
     * Describes the status of the replication configuration. For more information about replication status, see Viewing replication details in the *Amazon EFS User Guide*.
     */
    Status?: string;

    /**
     * Message that provides details about the `PAUSED` or `ERRROR` state of the replication destination configuration. For more information about replication status messages, see Viewing replication details in the *Amazon EFS User Guide*.
     */
    StatusMessage?: string;

    /**
     * The ID of the destination Amazon EFS file system.
     */
    FileSystemId?: string;

    /**
     * The AWS-Region in which the destination file system is located.
     * For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.
     */
    Region?: string;

    /**
     * The Amazon Resource Name (ARN) of the current source file system in the replication configuration.
     */
    RoleArn?: string;

    /**
     * For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.
     * Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see EFS file system types in the *Amazon EFS User Guide*.
     * One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.
     */
    AvailabilityZoneName?: string;

    /**
     * The ID of an kms-key-long used to protect the encrypted file system.
     */
    KmsKeyId?: string;
  };

  /**
   * Describes the replication configuration for a specific file system.
   */
  export type ReplicationConfigurationType = {
    /**
     * An array of destination objects. Only one destination object is supported.
     */
    Destinations?: ReplicationDestinationType[];
  };

  /**
   * The `AWS::EFS::FileSystem` resource creates a new, empty file system in EFSlong (EFS). You must create a mount target (AWS::EFS::MountTarget) to mount your EFS file system on an EC2 or other AWS cloud compute resource.
   */
  export type FileSystemResourceType = {
    /**
     * Read-only property
     */
    FileSystemId?: string;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.
     * Create-only property
     */
    Encrypted?: boolean;

    /**
     * Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see Tagging resources in the *General Reference Guide*.
     */
    FileSystemTags?: ElasticFileSystemTagType[];

    /**
     * The ID of the kms-key-long to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:
     * +  Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
     * +  ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
     * +  Key alias - A previously created display name for a key, for example `alias/projectKey1`.
     * +  Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.
     * If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * An array of `LifecyclePolicy` objects that define the file system's `LifecycleConfiguration` object. A `LifecycleConfiguration` object informs Lifecycle management of the following:
     * +  When to move files in the file system from primary storage to IA storage.
     * +  When to move files in the file system from primary storage or IA storage to Archive storage.
     * +  When to move files that are in IA or Archive storage to primary storage.
     * EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive` `TransitionToPrimaryStorageClass`. See the example requests in the following section for more information.
     */
    LifecyclePolicies?: LifecyclePolicyType[];

    /**
     * Describes the protection on the file system.
     */
    FileSystemProtection?: FileSystemProtectionType;

    /**
     * The performance mode of the file system. We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
     * Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
     * Default is `generalPurpose`.
     * Create-only property
     */
    PerformanceMode?: string;

    /**
     * The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see Amazon EFS quotas that you can increase in the *Amazon EFS User Guide*.
     */
    ProvisionedThroughputInMibps?: number;

    /**
     * Specifies the throughput mode for the file system. The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see Specifying throughput with provisioned mode in the *Amazon EFS User Guide*.
     * Default is `bursting`.
     */
    ThroughputMode?: string;

    /**
     * The `FileSystemPolicy` for the EFS file system. A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see Using to control NFS access to Amazon EFS in the *Amazon EFS User Guide*.
     */
    FileSystemPolicy?: Record<string, any>;

    /**
     * (Optional) A boolean that specifies whether or not to bypass the `FileSystemPolicy` lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.
     */
    BypassPolicyLockoutSafetyCheck?: boolean;

    /**
     * Use the `BackupPolicy` to turn automatic backups on or off for the file system.
     */
    BackupPolicy?: BackupPolicyType;

    /**
     * For One Zone file systems, specify the AWS Availability Zone in which to create the file system. Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see EFS file system types in the *Amazon EFS User Guide*.
     * One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.
     * Create-only property
     */
    AvailabilityZoneName?: string;

    /**
     * Describes the replication configuration for a specific file system.
     */
    ReplicationConfiguration?: ReplicationConfigurationType;
  };
}
