/**
 * TypeScript definitions for AWS::S3::StorageLens
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::S3::StorageLens resource is an Amazon S3 resource type that you can use to create Storage Lens configurations.
 */
export namespace AWS_S3_StorageLens {
  /**
   * The ID that identifies the Amazon S3 Storage Lens configuration.
   */
  export type IdType = {};

  /**
   * The Amazon Resource Name (ARN) of the specified resource.
   */
  export type ArnType = {};

  /**
   * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
   */
  export type BucketsAndRegionsType = {
    Buckets?: ArnType[];

    Regions?: string[];
  };

  /**
   * The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.
   */
  export type AwsOrgType = {
    Arn: ArnType;
  };

  /**
   * Enables activity metrics.
   */
  export type ActivityMetricsType = {
    /**
     * Specifies whether activity metrics are enabled or disabled.
     */
    IsEnabled?: boolean;
  };

  /**
   * Enables advanced cost optimization metrics.
   */
  export type AdvancedCostOptimizationMetricsType = {
    /**
     * Specifies whether advanced cost optimization metrics are enabled or disabled.
     */
    IsEnabled?: boolean;
  };

  /**
   * Enables advanced data protection metrics.
   */
  export type AdvancedDataProtectionMetricsType = {
    /**
     * Specifies whether advanced data protection metrics are enabled or disabled.
     */
    IsEnabled?: boolean;
  };

  /**
   * Enables detailed status codes metrics.
   */
  export type DetailedStatusCodesMetricsType = {
    /**
     * Specifies whether detailed status codes metrics are enabled or disabled.
     */
    IsEnabled?: boolean;
  };

  /**
   * Selection criteria for prefix-level metrics.
   */
  export type SelectionCriteriaType = {
    /**
     * Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
     */
    MaxDepth?: number;

    /**
     * Delimiter to divide S3 key into hierarchy of prefixes.
     */
    Delimiter?: string;

    /**
     * The minimum storage bytes threshold for the prefixes to be included in the analysis.
     */
    MinStorageBytesPercentage?: number;
  };

  export type PrefixLevelStorageMetricsType = {
    /**
     * Specifies whether prefix-level storage metrics are enabled or disabled.
     */
    IsEnabled?: boolean;

    SelectionCriteria?: SelectionCriteriaType;
  };

  /**
   * Prefix-level metrics configurations.
   */
  export type PrefixLevelType = {
    StorageMetrics: PrefixLevelStorageMetricsType;
  };

  /**
   * Bucket-level metrics configurations.
   */
  export type BucketLevelType = {
    ActivityMetrics?: ActivityMetricsType;

    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetricsType;

    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetricsType;

    DetailedStatusCodesMetrics?: DetailedStatusCodesMetricsType;

    PrefixLevel?: PrefixLevelType;
  };

  /**
   * The ARN for the Amazon S3 Storage Lens Group configuration.
   */
  export type StorageLensGroupArnType = {};

  /**
   * Selection criteria for Storage Lens Group level metrics
   */
  export type StorageLensGroupSelectionCriteriaType = {
    Include?: StorageLensGroupArnType[];

    Exclude?: StorageLensGroupArnType[];
  };

  /**
   * Specifies the details of Amazon S3 Storage Lens Group configuration.
   */
  export type StorageLensGroupLevelType = {
    StorageLensGroupSelectionCriteria?: StorageLensGroupSelectionCriteriaType;
  };

  /**
   * Account-level metrics configurations.
   */
  export type AccountLevelType = {
    ActivityMetrics?: ActivityMetricsType;

    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetricsType;

    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetricsType;

    DetailedStatusCodesMetrics?: DetailedStatusCodesMetricsType;

    BucketLevel: BucketLevelType;

    StorageLensGroupLevel?: StorageLensGroupLevelType;
  };

  /**
   * AWS KMS server-side encryption.
   */
  export type SSEKMSType = {
    /**
     * The ARN of the KMS key to use for encryption.
     */
    KeyId: string;
  };

  /**
   * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
   */
  export type EncryptionType = {};

  /**
   * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
   */
  export type S3BucketDestinationType = {
    /**
     * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
     */
    OutputSchemaVersion: string;

    /**
     * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
     */
    Format: string;

    /**
     * The AWS account ID that owns the destination S3 bucket.
     */
    AccountId: string;

    /**
     * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
     */
    Arn: string;

    /**
     * The prefix to use for Amazon S3 Storage Lens export.
     */
    Prefix?: string;

    Encryption?: EncryptionType;
  };

  /**
   * CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.
   */
  export type CloudWatchMetricsType = {
    /**
     * Specifies whether CloudWatch metrics are enabled or disabled.
     */
    IsEnabled: boolean;
  };

  /**
   * Specifies how Amazon S3 Storage Lens metrics should be exported.
   */
  export type DataExportType = {
    S3BucketDestination?: S3BucketDestinationType;

    CloudWatchMetrics?: CloudWatchMetricsType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Specifies the details of Amazon S3 Storage Lens configuration.
   */
  export type StorageLensConfigurationType = {
    Id: IdType;

    Include?: BucketsAndRegionsType;

    Exclude?: BucketsAndRegionsType;

    AwsOrg?: AwsOrgType;

    AccountLevel: AccountLevelType;

    DataExport?: DataExportType;

    /**
     * Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
     */
    IsEnabled: boolean;

    /**
     * The ARN for the Amazon S3 Storage Lens configuration.
     */
    StorageLensArn?: string;
  };

  /**
   * The AWS::S3::StorageLens resource is an Amazon S3 resource type that you can use to create Storage Lens configurations.
   */
  export type StorageLensResourceType = {
    StorageLensConfiguration: StorageLensConfigurationType;

    /**
     * A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.
     */
    Tags?: TagType[];
  };
}
