/**
 * TypeScript definitions for AWS::Deadline::Queue
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::Queue Resource Type
 */
export namespace AWS_Deadline_Queue {
  export type DefaultQueueBudgetActionType = {};

  export type JobAttachmentSettingsType = {
    S3BucketName: string;

    RootPrefix: string;
  };

  export type JobRunAsUserType = {
    Posix?: PosixUserType;

    Windows?: WindowsUserType;

    RunAs: RunAsType;
  };

  export type PosixUserType = {
    User: string;

    Group: string;
  };

  export type RunAsType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type WindowsUserType = {
    User: string;

    PasswordArn: string;
  };

  /**
   * Definition of AWS::Deadline::Queue Resource Type
   */
  export type QueueResourceType = {
    AllowedStorageProfileIds?: string[];

    DefaultBudgetAction?: DefaultQueueBudgetActionType;

    /**
     * Default: ""
     */
    Description?: string;

    DisplayName: string;

    /**
     * Create-only property
     */
    FarmId: string;

    JobAttachmentSettings?: JobAttachmentSettingsType;

    JobRunAsUser?: JobRunAsUserType;

    /**
     * Read-only property
     */
    QueueId?: string;

    RequiredFileSystemLocationNames?: string[];

    RoleArn?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
