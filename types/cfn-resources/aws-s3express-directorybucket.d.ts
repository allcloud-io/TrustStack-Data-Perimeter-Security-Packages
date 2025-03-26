/**
 * TypeScript definitions for AWS::S3Express::DirectoryBucket
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::S3Express::DirectoryBucket.
 */
export namespace AWS_S3Express_DirectoryBucket {
  /**
   * The Amazon Resource Name (ARN) of the specified bucket.
   */
  export type ArnType = {};

  /**
   * Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).
   */
  export type BucketEncryptionType = {
    /**
     * Specifies the default server-side-encryption configuration.
     */
    ServerSideEncryptionConfiguration: ServerSideEncryptionRuleType[];
  };

  /**
   * Specifies the default server-side encryption configuration.
   */
  export type ServerSideEncryptionRuleType = {
    /**
     * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.
     */
    BucketKeyEnabled?: boolean;

    ServerSideEncryptionByDefault?: ServerSideEncryptionByDefaultType;
  };

  /**
   * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
   */
  export type ServerSideEncryptionByDefaultType = {
    /**
     * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key
     */
    KMSMasterKeyID?: string;

    SSEAlgorithm: string;
  };

  export type LifecycleConfigurationType = {
    /**
     * A lifecycle rule for individual objects in an Amazon S3 Express bucket.
     */
    Rules: RuleType[];
  };

  /**
   * You must specify at least one of the following properties: AbortIncompleteMultipartUpload, or ExpirationInDays.
   */
  export type RuleType = {
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadType;

    ExpirationInDays?: number;

    Id?: string;

    Prefix?: string;

    Status: string;

    ObjectSizeGreaterThan?: string;

    ObjectSizeLessThan?: string;
  };

  /**
   * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
   */
  export type AbortIncompleteMultipartUploadType = {
    /**
     * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
     */
    DaysAfterInitiation: number;
  };

  /**
   * Resource Type definition for AWS::S3Express::DirectoryBucket.
   */
  export type DirectoryBucketResourceType = {
    /**
     * Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
     * Create-only property
     */
    BucketName?: string;

    /**
     * Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. An example Availability Zone ID value is 'use1-az5'.
     * Create-only property
     */
    LocationName: string;

    /**
     * Returns the code for the Availability Zone or Local Zone where the directory bucket was created. An example for the code of an Availability Zone is 'us-east-1f'.
     * Read-only property
     */
    AvailabilityZoneName?: string;

    /**
     * Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.
     * Create-only property
     */
    DataRedundancy: string;

    /**
     * Returns the Amazon Resource Name (ARN) of the specified bucket.
     * Read-only property
     */
    Arn?: ArnType;

    BucketEncryption?: BucketEncryptionType;

    /**
     * Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.
     */
    LifecycleConfiguration?: LifecycleConfigurationType;
  };
}
