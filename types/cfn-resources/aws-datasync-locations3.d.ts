/**
 * TypeScript definitions for AWS::DataSync::LocationS3
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationS3
 */
export namespace AWS_DataSync_LocationS3 {
  /**
   * The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.
   */
  export type S3ConfigType = {
    /**
     * The ARN of the IAM role of the Amazon S3 bucket.
     */
    BucketAccessRoleArn: string;
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
   * Resource schema for AWS::DataSync::LocationS3
   */
  export type LocationS3ResourceType = {
    S3Config: S3ConfigType;

    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
     * Create-only property
     */
    S3BucketArn?: string;

    /**
     * A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
     */
    Subdirectory?: string;

    /**
     * The Amazon S3 storage class you want to store your files in when this location is used as a task destination.
     * Default: "STANDARD"
     */
    S3StorageClass?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket location.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the S3 location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
