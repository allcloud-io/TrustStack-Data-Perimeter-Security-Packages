/**
 * TypeScript definitions for AWS::DataSync::Task
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::Task.
 */
export namespace AWS_DataSync_Task {
  /**
   * Specifies which files folders and objects to include or exclude when transferring files from source to destination.
   */
  export type FilterRuleType = {
    /**
     * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
     */
    FilterType?: string;

    /**
     * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".
     */
    Value?: string;
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
   * Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.
   */
  export type TaskReportConfigType = {
    /**
     * Specifies where DataSync uploads your task report.
     */
    Destination: Record<string, any>;

    /**
     * Specifies the type of task report that you want.
     */
    OutputType: string;

    /**
     * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
     */
    ReportLevel?: string;

    /**
     * Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.
     */
    ObjectVersionIds?: string;

    /**
     * Customizes the reporting level for aspects of your task report. For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.
     */
    Overrides?: Record<string, any>;
  };

  /**
   * Specifies the Amazon S3 bucket where DataSync uploads your task report.
   */
  export type TaskReportConfigDestinationS3Type = {
    /**
     * Specifies a bucket prefix for your report.
     */
    Subdirectory?: string;

    /**
     * Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.
     */
    BucketAccessRoleArn?: string;

    /**
     * Specifies the ARN of the S3 bucket where Datasync uploads your report.
     */
    S3BucketArn?: string;
  };

  /**
   * Configures a manifest, which is a list of files or objects that you want DataSync to transfer.
   */
  export type ManifestConfigType = {
    /**
     * Specifies what DataSync uses the manifest for.
     */
    Action?: string;

    /**
     * Specifies the file format of your manifest.
     */
    Format?: string;

    /**
     * Specifies the manifest that you want DataSync to use and where it's hosted.
     */
    Source: Record<string, any>;
  };

  /**
   * Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.
   */
  export type ManifestConfigSourceS3Type = {
    /**
     * Specifies the Amazon S3 object key of your manifest.
     */
    ManifestObjectPath?: string;

    /**
     * Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.
     */
    BucketAccessRoleArn?: string;

    /**
     * Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.
     */
    S3BucketArn?: string;

    /**
     * Specifies the object version ID of the manifest that you want DataSync to use.
     */
    ManifestObjectVersionId?: string;
  };

  /**
   * Specifies the schedule you want your task to use for repeated executions.
   */
  export type TaskScheduleType = {
    /**
     * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location
     */
    ScheduleExpression?: string;

    /**
     * Specifies status of a schedule.
     */
    Status?: string;
  };

  /**
   * Represents the options that are available to control the behavior of a StartTaskExecution operation.
   */
  export type OptionsType = {
    /**
     * A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).
     */
    Atime?: string;

    /**
     * A value that limits the bandwidth used by AWS DataSync.
     */
    BytesPerSecond?: number;

    /**
     * The group ID (GID) of the file's owners.
     */
    Gid?: string;

    /**
     * A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.
     */
    LogLevel?: string;

    /**
     * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.
     */
    Mtime?: string;

    /**
     * A value that determines whether files at the destination should be overwritten or preserved when copying files.
     */
    OverwriteMode?: string;

    /**
     * A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.
     */
    PosixPermissions?: string;

    /**
     * A value that specifies whether files in the destination that don't exist in the source file system should be preserved.
     */
    PreserveDeletedFiles?: string;

    /**
     * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.
     */
    PreserveDevices?: string;

    /**
     * A value that determines which components of the SMB security descriptor are copied during transfer.
     */
    SecurityDescriptorCopyFlags?: string;

    /**
     * A value that determines whether tasks should be queued before executing the tasks.
     */
    TaskQueueing?: string;

    /**
     * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.
     */
    TransferMode?: string;

    /**
     * The user ID (UID) of the file's owner.
     */
    Uid?: string;

    /**
     * A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.
     */
    VerifyMode?: string;

    /**
     * A value that determines whether object tags should be read from the source object store and written to the destination object store.
     */
    ObjectTags?: string;
  };

  /**
   * The Amazon Resource Names (ARNs) of the source ENIs (Elastic Network Interfaces) that were created for your subnet.
   */
  export type SourceNetworkInterfaceArnsType = {};

  /**
   * The Amazon Resource Names (ARNs) of the destination ENIs (Elastic Network Interfaces) that were created for your subnet.
   */
  export type DestinationNetworkInterfaceArnsType = {};

  /**
   * Resource schema for AWS::DataSync::Task.
   */
  export type TaskResourceType = {
    Excludes?: FilterRuleType[];

    Includes?: FilterRuleType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.
     */
    CloudWatchLogGroupArn?: string;

    /**
     * The ARN of an AWS storage resource's location.
     * Create-only property
     */
    DestinationLocationArn: string;

    /**
     * The name of a task. This value is a text reference that is used to identify the task in the console.
     */
    Name?: string;

    Options?: OptionsType;

    TaskReportConfig?: TaskReportConfigType;

    ManifestConfig?: ManifestConfigType;

    Schedule?: TaskScheduleType;

    /**
     * The ARN of the source location for the task.
     * Create-only property
     */
    SourceLocationArn: string;

    /**
     * The ARN of the task.
     * Read-only property
     */
    TaskArn?: string;

    /**
     * Specifies the task mode for the task.
     * Create-only property
     */
    TaskMode?: string;

    /**
     * The status of the task that was described.
     * Read-only property
     */
    Status?: string;

    /**
     * Read-only property
     */
    SourceNetworkInterfaceArns?: SourceNetworkInterfaceArnsType;

    /**
     * Read-only property
     */
    DestinationNetworkInterfaceArns?: DestinationNetworkInterfaceArnsType;
  };
}
