/**
 * TypeScript definitions for AWS::DataSync::LocationFSxONTAP
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationFSxONTAP.
 */
export namespace AWS_DataSync_LocationFSxONTAP {
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
   * Configuration settings for NFS or SMB protocol.
   */
  export type ProtocolType = {
    NFS?: NFSType;

    SMB?: SMBType;
  };

  /**
   * NFS protocol configuration for FSx ONTAP file system.
   */
  export type NFSType = {
    MountOptions: NfsMountOptionsType;
  };

  /**
   * SMB protocol configuration for FSx ONTAP file system.
   */
  export type SMBType = {
    MountOptions: SmbMountOptionsType;

    /**
     * The name of the Windows domain that the SMB server belongs to.
     */
    Domain?: string;

    /**
     * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
     */
    Password: string;

    /**
     * The user who can mount the share, has the permissions to access files and folders in the SMB share.
     */
    User: string;
  };

  /**
   * The NFS mount options that DataSync can use to mount your NFS share.
   */
  export type NfsMountOptionsType = {
    /**
     * The specific NFS version that you want DataSync to use to mount your NFS share.
     */
    Version?: string;
  };

  /**
   * The mount options used by DataSync to access the SMB server.
   */
  export type SmbMountOptionsType = {
    /**
     * The specific SMB version that you want DataSync to use to mount your SMB share.
     */
    Version?: string;
  };

  /**
   * Resource schema for AWS::DataSync::LocationFSxONTAP.
   */
  export type LocationFSxONTAPResourceType = {
    /**
     * The Amazon Resource Name (ARN) for the FSx ONTAP SVM.
     * Create-only property
     */
    StorageVirtualMachineArn: string;

    /**
     * The Amazon Resource Name (ARN) for the FSx ONAP file system.
     * Read-only property
     */
    FsxFilesystemArn?: string;

    /**
     * The ARNs of the security groups that are to use to configure the FSx ONTAP file system.
     * Create-only property
     */
    SecurityGroupArns: string[];

    Protocol?: ProtocolType;

    /**
     * A subdirectory in the location's path.
     */
    Subdirectory?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the FSx ONTAP file system that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
