/**
 * TypeScript definitions for AWS::S3Outposts::Bucket
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::S3Outposts::Bucket
 */
export namespace AWS_S3Outposts_Bucket {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type LifecycleConfigurationType = {
    /**
     * A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.
     */
    Rules: RuleType[];
  };

  /**
   * Specifies lifecycle rules for an Amazon S3Outposts bucket. You must specify at least one of the following: AbortIncompleteMultipartUpload, ExpirationDate, ExpirationInDays.
   */
  export type RuleType = {
    Status?: string;

    /**
     * Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.
     */
    Id?: string;

    /**
     * Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.
     */
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadType;

    /**
     * Indicates when objects are deleted from Amazon S3Outposts. The date value must be in ISO 8601 format. The time is always midnight UTC.
     */
    ExpirationDate?: iso8601UTCType;

    /**
     * Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.
     */
    ExpirationInDays?: number;

    /**
     * The container for the filter of the lifecycle rule.
     */
    Filter?: Record<string, any>;
  };

  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   */
  export type iso8601UTCType = {};

  /**
   * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3Outposts will wait before permanently removing all parts of the upload.
   */
  export type AbortIncompleteMultipartUploadType = {
    /**
     * Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.
     */
    DaysAfterInitiation: number;
  };

  /**
   * Prefix identifies one or more objects to which the rule applies.
   */
  export type FilterPrefixType = {};

  /**
   * Tag used to identify a subset of objects for an Amazon S3Outposts bucket.
   */
  export type FilterTagType = {
    Key: string;

    Value: string;
  };

  export type FilterAndOperatorType = {};

  /**
   * Resource Type Definition for AWS::S3Outposts::Bucket
   */
  export type BucketResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the specified bucket.
     * Read-only property
     */
    Arn?: string;

    /**
     * A name for the bucket.
     * Create-only property
     */
    BucketName: string;

    /**
     * The id of the customer outpost on which the bucket resides.
     * Create-only property
     */
    OutpostId: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.
     */
    Tags?: TagType[];

    /**
     * Rules that define how Amazon S3Outposts manages objects during their lifetime.
     */
    LifecycleConfiguration?: LifecycleConfigurationType;
  };
}
