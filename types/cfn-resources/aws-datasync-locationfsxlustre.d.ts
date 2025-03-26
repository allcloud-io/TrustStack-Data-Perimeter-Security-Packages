/**
 * TypeScript definitions for AWS::DataSync::LocationFSxLustre
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationFSxLustre.
 */
export namespace AWS_DataSync_LocationFSxLustre {
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
   * Resource schema for AWS::DataSync::LocationFSxLustre.
   */
  export type LocationFSxLustreResourceType = {
    /**
     * The Amazon Resource Name (ARN) for the FSx for Lustre file system.
     * Create-only property
     */
    FsxFilesystemArn?: string;

    /**
     * The ARNs of the security groups that are to use to configure the FSx for Lustre file system.
     * Create-only property
     */
    SecurityGroupArns: string[];

    /**
     * A subdirectory in the location's path.
     */
    Subdirectory?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the Amazon FSx for Lustre file system location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the FSx for Lustre location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
