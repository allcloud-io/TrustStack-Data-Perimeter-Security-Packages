/**
 * TypeScript definitions for AWS::DataSync::LocationFSxWindows
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationFSxWindows.
 */
export namespace AWS_DataSync_LocationFSxWindows {
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
   * Resource schema for AWS::DataSync::LocationFSxWindows.
   */
  export type LocationFSxWindowsResourceType = {
    /**
     * The name of the Windows domain that the FSx for Windows server belongs to.
     */
    Domain?: string;

    /**
     * The Amazon Resource Name (ARN) for the FSx for Windows file system.
     * Create-only property
     */
    FsxFilesystemArn?: string;

    /**
     * The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
     */
    Password?: string;

    /**
     * The ARNs of the security groups that are to use to configure the FSx for Windows file system.
     * Create-only property
     */
    SecurityGroupArns: string[];

    /**
     * A subdirectory in the location's path.
     */
    Subdirectory?: string;

    /**
     * The user who has the permissions to access files and folders in the FSx for Windows file system.
     */
    User: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the Amazon FSx for Windows file system location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the FSx for Windows location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
