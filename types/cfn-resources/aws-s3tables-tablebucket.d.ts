/**
 * TypeScript definitions for AWS::S3Tables::TableBucket
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates an Amazon S3 Tables table bucket in the same AWS Region where you create the AWS CloudFormation stack.
 */
export namespace AWS_S3Tables_TableBucket {
  /**
   * The Amazon Resource Name (ARN) of the specified table bucket.
   */
  export type TableBucketARNType = {};

  /**
   * A name for the table bucket.
   */
  export type TableBucketNameType = {};

  /**
   * Settings governing the Unreferenced File Removal maintenance action. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.
   */
  export type UnreferencedFileRemovalType = {
    /**
     * Indicates whether the Unreferenced File Removal maintenance action is enabled.
     */
    Status?: string;

    /**
     * For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.
     */
    UnreferencedDays?: number;

    /**
     * S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.
     */
    NoncurrentDays?: number;
  };

  /**
   * Creates an Amazon S3 Tables table bucket in the same AWS Region where you create the AWS CloudFormation stack.
   */
  export type TableBucketResourceType = {
    /**
     * Read-only property
     */
    TableBucketARN?: TableBucketARNType;

    /**
     * Create-only property
     */
    TableBucketName: TableBucketNameType;

    UnreferencedFileRemoval?: UnreferencedFileRemovalType;
  };
}
