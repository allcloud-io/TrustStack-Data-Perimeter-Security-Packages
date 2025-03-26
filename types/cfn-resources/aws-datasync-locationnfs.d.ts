/**
 * TypeScript definitions for AWS::DataSync::LocationNFS
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationNFS
 */
export namespace AWS_DataSync_LocationNFS {
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
   * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.
   */
  export type OnPremConfigType = {
    /**
     * ARN(s) of the agent(s) to use for an NFS location.
     */
    AgentArns: string[];
  };

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
   * Resource schema for AWS::DataSync::LocationNFS
   */
  export type LocationNFSResourceType = {
    /**
     * Default: {"Version":"AUTOMATIC"}
     */
    MountOptions?: MountOptionsType;

    OnPremConfig: OnPremConfigType;

    /**
     * The name of the NFS server. This value is the IP address or DNS name of the NFS server.
     */
    ServerHostname?: string;

    /**
     * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.
     */
    Subdirectory?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the NFS location.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the NFS location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
