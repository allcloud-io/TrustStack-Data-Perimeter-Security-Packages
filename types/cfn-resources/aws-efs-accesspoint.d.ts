/**
 * TypeScript definitions for AWS::EFS::AccessPoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::EFS::AccessPoint` resource creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see Mounting a file system using EFS access points.
 * This operation requires permissions for the `elasticfilesystem:CreateAccessPoint` action.
 */
export namespace AWS_EFS_AccessPoint {
  /**
   * A tag is a key-value pair attached to a file system. Allowed characters in the `Key` and `Value` properties are letters, white space, and numbers that can be represented in UTF-8, and the following characters:`+ - = . _ : /`
   */
  export type AccessPointTagType = {
    /**
     * The tag key (String). The key can't start with `aws:`.
     */
    Key?: string;

    /**
     * The value of the tag key.
     */
    Value?: string;
  };

  /**
   * Required if the `RootDirectory` > `Path` specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's `RootDirectory` > `Path`. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying `CreationInfo`, you must include values for all properties.
   * Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.
   * If you do not provide `CreationInfo` and the specified `RootDirectory` does not exist, attempts to mount the file system using the access point will fail.
   */
  export type CreationInfoType = {
    /**
     * Specifies the POSIX user ID to apply to the `RootDirectory`. Accepts values from 0 to 2^32 (4294967295).
     */
    OwnerUid: string;

    /**
     * Specifies the POSIX group ID to apply to the `RootDirectory`. Accepts values from 0 to 2^32 (4294967295).
     */
    OwnerGid: string;

    /**
     * Specifies the POSIX permissions to apply to the `RootDirectory`, in the format of an octal number representing the file's mode bits.
     */
    Permissions: string;
  };

  /**
   * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's `RootDirectory` and its subdirectories.
   */
  export type RootDirectoryType = {
    /**
     * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the `CreationInfo`.
     */
    Path?: string;

    /**
     * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's `RootDirectory`. If the `RootDirectory` > `Path` specified does not exist, EFS creates the root directory using the `CreationInfo` settings when a client connects to an access point. When specifying the `CreationInfo`, you must provide values for all properties.
     * If you do not provide `CreationInfo` and the specified `RootDirectory` > `Path` does not exist, attempts to mount the file system using the access point will fail.
     */
    CreationInfo?: CreationInfoType;
  };

  /**
   * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
   */
  export type PosixUserType = {
    /**
     * The POSIX user ID used for all file system operations using this access point.
     */
    Uid: string;

    /**
     * The POSIX group ID used for all file system operations using this access point.
     */
    Gid: string;

    /**
     * Secondary POSIX group IDs used for all file system operations using this access point.
     */
    SecondaryGids?: string[];
  };

  /**
   * The `AWS::EFS::AccessPoint` resource creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see Mounting a file system using EFS access points.
   * This operation requires permissions for the `elasticfilesystem:CreateAccessPoint` action.
   */
  export type AccessPointResourceType = {
    /**
     * Read-only property
     */
    AccessPointId?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The opaque string specified in the request to ensure idempotent creation.
     * Create-only property
     */
    ClientToken?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     * For more information, see Tag.
     */
    AccessPointTags?: AccessPointTagType[];

    /**
     * The ID of the EFS file system that the access point applies to. Accepts only the ID format for input when specifying a file system, for example `fs-0123456789abcedf2`.
     * Create-only property
     */
    FileSystemId: string;

    /**
     * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
     * Create-only property
     */
    PosixUser?: PosixUserType;

    /**
     * The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.
     * Create-only property
     */
    RootDirectory?: RootDirectoryType;
  };
}
