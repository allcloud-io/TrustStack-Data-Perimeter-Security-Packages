/**
 * TypeScript definitions for AWS::DataSync::LocationFSxOpenZFS
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationFSxOpenZFS.
 */
export namespace AWS_DataSync_LocationFSxOpenZFS {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key for an AWS resource tag.
     */
    Key: string;

    /**
     * The value for an AWS resource tag.
     */
    Value: string;
  };

  /**
   * Configuration settings for an NFS or SMB protocol, currently only support NFS
   */
  export type ProtocolType = {
    NFS?: NFSType;
  };

  /**
   * FSx OpenZFS file system NFS protocol information
   */
  export type NFSType = {
    MountOptions: MountOptionsType;
  };

  /**
   * The NFS mount options that DataSync can use to mount your NFS share.
   */
  export type MountOptionsType = {
    /**
     * The specific NFS version that you want DataSync to use to mount your NFS share.
     */
    Version?: string;
  };

  /**
   * Resource schema for AWS::DataSync::LocationFSxOpenZFS.
   */
  export type LocationFSxOpenZFSResourceType = {
    /**
     * The Amazon Resource Name (ARN) for the FSx OpenZFS file system.
     * Create-only property
     */
    FsxFilesystemArn?: string;

    /**
     * The ARNs of the security groups that are to use to configure the FSx OpenZFS file system.
     * Create-only property
     */
    SecurityGroupArns: string[];

    Protocol: ProtocolType;

    /**
     * A subdirectory in the location's path.
     */
    Subdirectory?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the Amazon FSx OpenZFS file system location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the FSx OpenZFS that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
