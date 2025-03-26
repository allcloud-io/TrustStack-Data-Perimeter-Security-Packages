/**
 * TypeScript definitions for AWS::S3::Bucket
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::S3::Bucket` resource creates an Amazon S3 bucket in the same AWS Region where you create the AWS CloudFormation stack.
 * To control how AWS CloudFormation handles the bucket when the stack is deleted, you can set a deletion policy for your bucket. You can choose to *retain* the bucket or to *delete* the bucket. For more information, see DeletionPolicy Attribute.
 * You can only delete empty buckets. Deletion fails for buckets that have contents.
 */
export namespace AWS_S3_Bucket {
  /**
   * Specifies tags to use to identify a subset of objects for an Amazon S3 bucket.
   */
  export type TagFilterType = {
    /**
     * The tag value.
     */
    Value: string;

    /**
     * The tag key.
     */
    Key: string;
  };

  /**
   * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket.
   */
  export type DestinationType = {
    /**
     * The Amazon Resource Name (ARN) of the bucket to which data is exported.
     */
    BucketArn: string;

    /**
     * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
     * Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
     */
    BucketAccountId?: string;

    /**
     * Specifies the file format used when exporting data to Amazon S3.
     * *Allowed values*: `CSV` | `ORC` | `Parquet`
     */
    Format: string;

    /**
     * The prefix to use when exporting data. The prefix is prepended to all results.
     */
    Prefix?: string;
  };

  /**
   * Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see Amazon S3 Transfer Acceleration in the *Amazon S3 User Guide*.
   */
  export type AccelerateConfigurationType = {
    /**
     * Specifies the transfer acceleration status of the bucket.
     */
    AccelerationStatus: string;
  };

  /**
   * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
   */
  export type AnalyticsConfigurationType = {
    /**
     * The tags to use when evaluating an analytics filter.
     * The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.
     */
    TagFilters?: TagFilterType[];

    /**
     * Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
     */
    StorageClassAnalysis: StorageClassAnalysisType;

    /**
     * The ID that identifies the analytics configuration.
     */
    Id: string;

    /**
     * The prefix that an object must have to be included in the analytics results.
     */
    Prefix?: string;
  };

  /**
   * Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
   */
  export type StorageClassAnalysisType = {
    /**
     * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
     */
    DataExport?: DataExportType;
  };

  /**
   * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
   */
  export type DataExportType = {
    /**
     * The place to store the data for an analysis.
     */
    Destination: DestinationType;

    /**
     * The version of the output schema to use when exporting data. Must be `V_1`.
     */
    OutputSchemaVersion: string;
  };

  /**
   * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS). For information about the Amazon S3 default encryption feature, see Amazon S3 Default Encryption for S3 Buckets in the *Amazon S3 User Guide*.
   */
  export type BucketEncryptionType = {
    /**
     * Specifies the default server-side-encryption configuration.
     */
    ServerSideEncryptionConfiguration: ServerSideEncryptionRuleType[];
  };

  /**
   * Specifies the default server-side encryption configuration.
   * +   *General purpose buckets* - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
   * +   *Directory buckets* - When you specify an customer managed key for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
   */
  export type ServerSideEncryptionRuleType = {
    /**
     * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the `BucketKeyEnabled` element to `true` causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
     * For more information, see Amazon S3 Bucket Keys in the *Amazon S3 User Guide*.
     */
    BucketKeyEnabled?: boolean;

    /**
     * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
     */
    ServerSideEncryptionByDefault?: ServerSideEncryptionByDefaultType;
  };

  /**
   * Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see PutBucketEncryption.
   * +   *General purpose buckets* - If you don't specify a customer managed key at configuration, Amazon S3 automatically creates an AWS KMS key (`aws/s3`) in your AWS account the first time that you add an object encrypted with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS.
   * +   *Directory buckets* - Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. The managed key (`aws/s3`) isn't supported.
   * +   *Directory buckets* - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS.
   */
  export type ServerSideEncryptionByDefaultType = {
    /**
     * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.
     * +   *General purpose buckets* - This parameter is allowed if and only if `SSEAlgorithm` is set to `aws:kms` or `aws:kms:dsse`.
     * +   *Directory buckets* - This parameter is allowed if and only if `SSEAlgorithm` is set to `aws:kms`.
     * You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.
     * +  Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
     * +  Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
     * +  Key Alias: `alias/alias-name`
     * If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see Using encryption for cross-account operations.
     * +   *General purpose buckets* - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log.
     * +   *Directory buckets* - When you specify an customer managed key for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
     * Amazon S3 only supports symmetric encryption KMS keys. For more information, see Asymmetric keys in KMS in the *Key Management Service Developer Guide*.
     */
    KMSMasterKeyID?: string;

    /**
     * Server-side encryption algorithm to use for the default encryption.
     * For directory buckets, there are only two supported values for server-side encryption: `AES256` and `aws:kms`.
     */
    SSEAlgorithm: string;
  };

  /**
   * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see Enabling Cross-Origin Resource Sharing in the *Amazon S3 User Guide*.
   */
  export type CorsConfigurationType = {
    /**
     * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
     */
    CorsRules: CorsRuleType[];
  };

  /**
   * Specifies a cross-origin access rule for an Amazon S3 bucket.
   */
  export type CorsRuleType = {
    /**
     * Headers that are specified in the `Access-Control-Request-Headers` header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
     */
    AllowedHeaders?: string[];

    /**
     * An HTTP method that you allow the origin to run.
     * *Allowed values*: `GET` | `PUT` | `HEAD` | `POST` | `DELETE`
     */
    AllowedMethods: string[];

    /**
     * One or more origins you want customers to be able to access the bucket from.
     */
    AllowedOrigins: string[];

    /**
     * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
     */
    ExposedHeaders?: string[];

    /**
     * A unique identifier for this rule. The value must be no more than 255 characters.
     */
    Id?: string;

    /**
     * The time in seconds that your browser is to cache the preflight response for the specified resource.
     */
    MaxAge?: number;
  };

  /**
   * Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.
   * For information about the S3 Intelligent-Tiering storage class, see Storage class for automatically optimizing frequently and infrequently accessed objects.
   */
  export type IntelligentTieringConfigurationType = {
    /**
     * The ID used to identify the S3 Intelligent-Tiering configuration.
     */
    Id: string;

    /**
     * An object key name prefix that identifies the subset of objects to which the rule applies.
     */
    Prefix?: string;

    /**
     * Specifies the status of the configuration.
     */
    Status: string;

    /**
     * A container for a key-value pair.
     */
    TagFilters?: TagFilterType[];

    /**
     * Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: `ARCHIVE_ACCESS` and `DEEP_ARCHIVE_ACCESS`.
     * You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.
     */
    Tierings: TieringType[];
  };

  /**
   * The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead.
   */
  export type TieringType = {
    /**
     * S3 Intelligent-Tiering access tier. See Storage class for automatically optimizing frequently and infrequently accessed objects for a list of access tiers in the S3 Intelligent-Tiering storage class.
     */
    AccessTier: string;

    /**
     * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
     */
    Days: number;
  };

  /**
   * Specifies the inventory configuration for an Amazon S3 bucket. For more information, see GET Bucket inventory in the *Amazon S3 API Reference*.
   */
  export type InventoryConfigurationType = {
    /**
     * Contains information about where to publish the inventory results.
     */
    Destination: DestinationType;

    /**
     * Specifies whether the inventory is enabled or disabled. If set to `True`, an inventory list is generated. If set to `False`, no inventory list is generated.
     */
    Enabled: boolean;

    /**
     * The ID used to identify the inventory configuration.
     */
    Id: string;

    /**
     * Object versions to include in the inventory list. If set to `All`, the list includes all the object versions, which adds the version-related fields `VersionId`, `IsLatest`, and `DeleteMarker` to the list. If set to `Current`, the list does not contain these version-related fields.
     */
    IncludedObjectVersions: string;

    /**
     * Contains the optional fields that are included in the inventory results.
     */
    OptionalFields?: string[];

    /**
     * Specifies the inventory filter prefix.
     */
    Prefix?: string;

    /**
     * Specifies the schedule for generating inventory results.
     */
    ScheduleFrequency: string;
  };

  /**
   * Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see Object Lifecycle Management in the *Amazon S3 User Guide*.
   */
  export type LifecycleConfigurationType = {
    /**
     * A lifecycle rule for individual objects in an Amazon S3 bucket.
     */
    Rules: RuleType[];

    TransitionDefaultMinimumObjectSize?: string;
  };

  /**
   * Specifies lifecycle rules for an Amazon S3 bucket. For more information, see Put Bucket Lifecycle Configuration in the *Amazon S3 API Reference*.
   * You must specify at least one of the following properties: `AbortIncompleteMultipartUpload`, `ExpirationDate`, `ExpirationInDays`, `NoncurrentVersionExpirationInDays`, `NoncurrentVersionTransition`, `NoncurrentVersionTransitions`, `Transition`, or `Transitions`.
   */
  export type RuleType = {
    /**
     * Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3 bucket.
     */
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadType;

    /**
     * Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
     */
    ExpirationDate?: iso8601UTCType;

    /**
     * Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
     */
    ExpirationInDays?: number;

    /**
     * Indicates whether Amazon S3 will remove a delete marker without any noncurrent versions. If set to true, the delete marker will be removed if there are no noncurrent versions. This cannot be specified with `ExpirationInDays`, `ExpirationDate`, or `TagFilters`.
     */
    ExpiredObjectDeleteMarker?: boolean;

    /**
     * Unique identifier for the rule. The value can't be longer than 255 characters.
     */
    Id?: string;

    /**
     * (Deprecated.) For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.
     */
    NoncurrentVersionExpirationInDays?: number;

    /**
     * Specifies when noncurrent object versions expire. Upon expiration, S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that S3 delete noncurrent object versions at a specific period in the object's lifetime.
     */
    NoncurrentVersionExpiration?: NoncurrentVersionExpirationType;

    /**
     * (Deprecated.) For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the `NoncurrentVersionTransitions` property.
     */
    NoncurrentVersionTransition?: NoncurrentVersionTransitionType;

    /**
     * For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the `NoncurrentVersionTransition` property.
     */
    NoncurrentVersionTransitions?: NoncurrentVersionTransitionType[];

    /**
     * Object key prefix that identifies one or more objects to which this rule applies.
     * Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see XML related object key constraints.
     */
    Prefix?: string;

    /**
     * If `Enabled`, the rule is currently being applied. If `Disabled`, the rule is not currently being applied.
     */
    Status: string;

    /**
     * Tags to use to identify a subset of objects to which the lifecycle rule applies.
     */
    TagFilters?: TagFilterType[];

    /**
     * Specifies the minimum object size in bytes for this rule to apply to. Objects must be larger than this value in bytes. For more information about size based rules, see Lifecycle configuration using size-based rules in the *Amazon S3 User Guide*.
     */
    ObjectSizeGreaterThan?: string;

    /**
     * Specifies the maximum object size in bytes for this rule to apply to. Objects must be smaller than this value in bytes. For more information about sized based rules, see Lifecycle configuration using size-based rules in the *Amazon S3 User Guide*.
     */
    ObjectSizeLessThan?: string;

    /**
     * (Deprecated.) Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the `Transitions` property.
     */
    Transition?: TransitionType;

    /**
     * One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the `Transition` property.
     */
    Transitions?: TransitionType[];
  };

  /**
   * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see Stopping Incomplete Multipart Uploads Using a Bucket Lifecycle Policy in the *Amazon S3 User Guide*.
   */
  export type AbortIncompleteMultipartUploadType = {
    /**
     * Specifies the number of days after which Amazon S3 stops an incomplete multipart upload.
     */
    DaysAfterInitiation: number;
  };

  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   */
  export type iso8601UTCType = {};

  /**
   * Specifies when noncurrent object versions expire. Upon expiration, S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that S3 delete noncurrent object versions at a specific period in the object's lifetime. For more information about setting a lifecycle rule configuration, see AWS::S3::Bucket Rule.
   */
  export type NoncurrentVersionExpirationType = {
    /**
     * Specifies the number of days an object is noncurrent before S3 can perform the associated action. For information about the noncurrent days calculations, see How Amazon S3 Calculates When an Object Became Noncurrent in the *Amazon S3 User Guide*.
     */
    NoncurrentDays: number;

    /**
     * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see Lifecycle configuration elements in the *Amazon S3 User Guide*.
     */
    NewerNoncurrentVersions?: number;
  };

  /**
   * Container for the transition rule that describes when noncurrent objects transition to the `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `GLACIER_IR`, `GLACIER`, or `DEEP_ARCHIVE` storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `GLACIER_IR`, `GLACIER`, or `DEEP_ARCHIVE` storage class at a specific period in the object's lifetime. If you specify this property, don't specify the `NoncurrentVersionTransitions` property.
   */
  export type NoncurrentVersionTransitionType = {
    /**
     * The class of storage used to store the object.
     */
    StorageClass: string;

    /**
     * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see How Amazon S3 Calculates How Long an Object Has Been Noncurrent in the *Amazon S3 User Guide*.
     */
    TransitionInDays: number;

    /**
     * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see Lifecycle configuration elements in the *Amazon S3 User Guide*.
     */
    NewerNoncurrentVersions?: number;
  };

  /**
   * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see Transitioning Objects Using Amazon S3 Lifecycle in the *Amazon S3 User Guide*.
   */
  export type TransitionType = {
    /**
     * The storage class to which you want the object to transition.
     */
    StorageClass: string;

    /**
     * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
     */
    TransitionDate?: iso8601UTCType;

    /**
     * Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.
     */
    TransitionInDays?: number;
  };

  /**
   * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For examples and more information, see PUT Bucket logging in the *Amazon S3 API Reference*.
   * To successfully complete the `AWS::S3::Bucket LoggingConfiguration` request, you must have `s3:PutObject` and `s3:PutObjectAcl` in your IAM permissions.
   */
  export type LoggingConfigurationType = {
    /**
     * The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the `LoggingConfiguration` property is defined.
     */
    DestinationBucketName?: string;

    /**
     * A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
     */
    LogFilePrefix?: string;

    /**
     * Amazon S3 key format for log objects. Only one format, either PartitionedPrefix or SimplePrefix, is allowed.
     */
    TargetObjectKeyFormat?: TargetObjectKeyFormatType;
  };

  /**
   * Describes the key format for server access log file in the target bucket. You can choose between SimplePrefix and PartitionedPrefix.
   */
  export type TargetObjectKeyFormatType = {};

  /**
   * Amazon S3 keys for log objects are partitioned in the following format:
   * `[DestinationPrefix][SourceAccountId]/[SourceRegion]/[SourceBucket]/[YYYY]/[MM]/[DD]/[YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]`
   * PartitionedPrefix defaults to EventTime delivery when server access logs are delivered.
   */
  export type PartitionedPrefixType = {
    /**
     * Specifies the partition date source for the partitioned prefix. `PartitionDateSource` can be `EventTime` or `DeliveryTime`.
     * For `DeliveryTime`, the time in the log file names corresponds to the delivery time for the log files.
     * For `EventTime`, The logs delivered are for a specific day only. The year, month, and day correspond to the day on which the event occurred, and the hour, minutes and seconds are set to 00 in the key.
     */
    PartitionDateSource?: string;
  };

  /**
   * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For examples, see AWS::S3::Bucket. For more information, see PUT Bucket metrics in the *Amazon S3 API Reference*.
   */
  export type MetricsConfigurationType = {
    /**
     * The access point that was used while performing operations on the object. The metrics configuration only includes objects that meet the filter's criteria.
     */
    AccessPointArn?: string;

    /**
     * The ID used to identify the metrics configuration. This can be any value you choose that helps you identify your metrics configuration.
     */
    Id: string;

    /**
     * The prefix that an object must have to be included in the metrics results.
     */
    Prefix?: string;

    /**
     * Specifies a list of tag filters to use as a metrics configuration filter. The metrics configuration includes only objects that meet the filter's criteria.
     */
    TagFilters?: TagFilterType[];
  };

  /**
   * Describes the notification configuration for an Amazon S3 bucket.
   * If you create the target resource and related permissions in the same template, you might have a circular dependency.
   * For example, you might use the `AWS::Lambda::Permission` resource to grant the bucket permission to invoke an AWS Lambda function. However, AWS CloudFormation can't create the bucket until the bucket has permission to invoke the function (AWS CloudFormation checks whether the bucket can invoke the function). If you're using Refs to pass the bucket name, this leads to a circular dependency.
   * To avoid this dependency, you can create all resources without specifying the notification configuration. Then, update the stack with a notification configuration.
   * For more information on permissions, see AWS::Lambda::Permission and Granting Permissions to Publish Event Notification Messages to a Destination.
   */
  export type NotificationConfigurationType = {
    /**
     * Enables delivery of events to Amazon EventBridge.
     */
    EventBridgeConfiguration?: EventBridgeConfigurationType;

    /**
     * Describes the LAMlong functions to invoke and the events for which to invoke them.
     */
    LambdaConfigurations?: LambdaConfigurationType[];

    /**
     * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
     */
    QueueConfigurations?: QueueConfigurationType[];

    /**
     * The topic to which notifications are sent and the events for which notifications are generated.
     */
    TopicConfigurations?: TopicConfigurationType[];
  };

  /**
   * Amazon S3 can send events to Amazon EventBridge whenever certain events happen in your bucket, see Using EventBridge in the *Amazon S3 User Guide*.
   * Unlike other destinations, delivery of events to EventBridge can be either enabled or disabled for a bucket. If enabled, all events will be sent to EventBridge and you can use EventBridge rules to route events to additional targets. For more information, see What Is Amazon EventBridge in the *Amazon EventBridge User Guide*
   */
  export type EventBridgeConfigurationType = {
    /**
     * Enables delivery of events to Amazon EventBridge.
     */
    EventBridgeEnabled: boolean;
  };

  /**
   * Describes the LAMlong functions to invoke and the events for which to invoke them.
   */
  export type LambdaConfigurationType = {
    /**
     * The Amazon S3 bucket event for which to invoke the LAMlong function. For more information, see Supported Event Types in the *Amazon S3 User Guide*.
     */
    Event: string;

    /**
     * The filtering rules that determine which objects invoke the AWS Lambda function. For example, you can create a filter so that only image files with a `.jpg` extension invoke the function when they are added to the Amazon S3 bucket.
     */
    Filter?: NotificationFilterType;

    /**
     * The Amazon Resource Name (ARN) of the LAMlong function that Amazon S3 invokes when the specified event type occurs.
     */
    Function: string;
  };

  /**
   * Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.
   */
  export type QueueConfigurationType = {
    /**
     * The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. For more information, see Supported Event Types in the *Amazon S3 User Guide*.
     */
    Event: string;

    /**
     * The filtering rules that determine which objects trigger notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a `.jpg` extension are added to the bucket. For more information, see Configuring event notifications using object key name filtering in the *Amazon S3 User Guide*.
     */
    Filter?: NotificationFilterType;

    /**
     * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type. FIFO queues are not allowed when enabling an SQS queue as the event notification destination.
     */
    Queue: string;
  };

  /**
   * A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.
   */
  export type TopicConfigurationType = {
    /**
     * The Amazon S3 bucket event about which to send notifications. For more information, see Supported Event Types in the *Amazon S3 User Guide*.
     */
    Event: string;

    /**
     * The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a `.jpg` extension are added to the bucket.
     */
    Filter?: NotificationFilterType;

    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.
     */
    Topic: string;
  };

  /**
   * Specifies object key name filtering rules. For information about key name filtering, see Configuring event notifications using object key name filtering in the *Amazon S3 User Guide*.
   */
  export type NotificationFilterType = {
    /**
     * A container for object key name prefix and suffix filtering rules.
     */
    S3Key: S3KeyFilterType;
  };

  /**
   * A container for object key name prefix and suffix filtering rules. For more information about object key name filtering, see Configuring event notifications using object key name filtering in the *Amazon S3 User Guide*.
   * The same type of filter rule cannot be used more than once. For example, you cannot specify two prefix rules.
   */
  export type S3KeyFilterType = {
    /**
     * A list of containers for the key-value pair that defines the criteria for the filter rule.
     */
    Rules: FilterRuleType[];
  };

  /**
   * Specifies the Amazon S3 object key name to filter on. An object key name is the name assigned to an object in your Amazon S3 bucket. You specify whether to filter on the suffix or prefix of the object key name. A prefix is a specific string of characters at the beginning of an object key name, which you can use to organize objects. For example, you can start the key names of related objects with a prefix, such as `2023-` or `engineering/`. Then, you can use `FilterRule` to find objects in a bucket with key names that have the same prefix. A suffix is similar to a prefix, but it is at the end of the object key name instead of at the beginning.
   */
  export type FilterRuleType = {
    /**
     * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see Configuring Event Notifications in the *Amazon S3 User Guide*.
     */
    Name: string;

    /**
     * The value that the filter searches for in object key names.
     */
    Value: string;
  };

  /**
   * Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects.
   */
  export type ObjectLockConfigurationType = {
    /**
     * Indicates whether this bucket has an Object Lock configuration enabled. Enable `ObjectLockEnabled` when you apply `ObjectLockConfiguration` to a bucket.
     */
    ObjectLockEnabled?: string;

    /**
     * Specifies the Object Lock rule for the specified object. Enable this rule when you apply `ObjectLockConfiguration` to a bucket. If Object Lock is turned on, bucket settings require both `Mode` and a period of either `Days` or `Years`. You cannot specify `Days` and `Years` at the same time. For more information, see ObjectLockRule and DefaultRetention.
     */
    Rule?: ObjectLockRuleType;
  };

  /**
   * Specifies the Object Lock rule for the specified object. Enable the this rule when you apply `ObjectLockConfiguration` to a bucket.
   */
  export type ObjectLockRuleType = {
    /**
     * The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, bucket settings require both `Mode` and a period of either `Days` or `Years`. You cannot specify `Days` and `Years` at the same time. For more information about allowable values for mode and period, see DefaultRetention.
     */
    DefaultRetention?: DefaultRetentionType;
  };

  /**
   * The container element for optionally specifying the default Object Lock retention settings for new objects placed in the specified bucket.
   * +  The `DefaultRetention` settings require both a mode and a period.
   * +  The `DefaultRetention` period can be either `Days` or `Years` but you must select one. You cannot specify `Days` and `Years` at the same time.
   */
  export type DefaultRetentionType = {
    /**
     * The number of years that you want to specify for the default retention period. If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years`.
     */
    Years?: number;

    /**
     * The number of days that you want to specify for the default retention period. If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years`.
     */
    Days?: number;

    /**
     * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years`.
     */
    Mode?: string;
  };

  /**
   * Specifies the container element for Object Ownership rules.
   * S3 Object Ownership is an Amazon S3 bucket-level setting that you can use to disable access control lists (ACLs) and take ownership of every object in your bucket, simplifying access management for data stored in Amazon S3. For more information, see Controlling ownership of objects and disabling ACLs in the *Amazon S3 User Guide*.
   */
  export type OwnershipControlsType = {
    /**
     * Specifies the container element for Object Ownership rules.
     */
    Rules: OwnershipControlsRuleType[];
  };

  /**
   * Specifies an Object Ownership rule.
   * S3 Object Ownership is an Amazon S3 bucket-level setting that you can use to disable access control lists (ACLs) and take ownership of every object in your bucket, simplifying access management for data stored in Amazon S3. For more information, see Controlling ownership of objects and disabling ACLs in the *Amazon S3 User Guide*.
   */
  export type OwnershipControlsRuleType = {
    /**
     * Specifies an object ownership rule.
     */
    ObjectOwnership?: string;
  };

  /**
   * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the *Amazon S3 User Guide*.
   */
  export type PublicAccessBlockConfigurationType = {
    /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to `TRUE` causes the following behavior:
     * +  PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
     * +  PUT Object calls fail if the request includes a public ACL.
     * +  PUT Bucket calls fail if the request includes a public ACL.
     * Enabling this setting doesn't affect existing policies or ACLs.
     */
    BlockPublicAcls?: boolean;

    /**
     * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     * Enabling this setting doesn't affect existing bucket policies.
     */
    BlockPublicPolicy?: boolean;

    /**
     * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
     * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     */
    IgnorePublicAcls?: boolean;

    /**
     * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to `TRUE` restricts access to this bucket to only AWS-service principals and authorized users within this account if the bucket has a public policy.
     * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
     */
    RestrictPublicBuckets?: boolean;
  };

  /**
   * A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB. The latest version of the replication configuration XML is V2. For more information about XML V2 replication configurations, see Replication configuration in the *Amazon S3 User Guide*.
   */
  export type ReplicationConfigurationType = {
    /**
     * The Amazon Resource Name (ARN) of the IAMlong (IAM) role that Amazon S3 assumes when replicating objects. For more information, see How to Set Up Replication in the *Amazon S3 User Guide*.
     */
    Role: string;

    /**
     * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
     */
    Rules: ReplicationRuleType[];
  };

  /**
   * Specifies which Amazon S3 objects to replicate and where to store the replicas.
   */
  export type ReplicationRuleType = {
    /**
     * Specifies whether Amazon S3 replicates delete markers. If you specify a `Filter` in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` `Status` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see Basic Rule Configuration.
     * For more information about delete marker replication, see Basic Rule Configuration.
     * If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility.
     */
    DeleteMarkerReplication?: DeleteMarkerReplicationType;

    /**
     * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
     */
    Destination: ReplicationDestinationType;

    /**
     * A filter that identifies the subset of objects to which the replication rule applies. A `Filter` must specify exactly one `Prefix`, `TagFilter`, or an `And` child element. The use of the filter field indicates that this is a V2 replication configuration. This field isn't supported in a V1 replication configuration.
     * V1 replication configuration only supports filtering by key prefix. To filter using a V1 replication configuration, add the `Prefix` directly as a child element of the `Rule` element.
     */
    Filter?: ReplicationRuleFilterType;

    /**
     * A unique identifier for the rule. The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID. When using a V2 replication configuration this property is capitalized as "ID".
     */
    Id?: string;

    /**
     * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. To filter using a V1 replication configuration, add the `Prefix` directly as a child element of the `Rule` element.
     * Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see XML related object key constraints.
     */
    Prefix?: string;

    /**
     * The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority.
     * For more information, see Replication in the *Amazon S3 User Guide*.
     */
    Priority?: number;

    /**
     * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.
     */
    SourceSelectionCriteria?: SourceSelectionCriteriaType;

    /**
     * Specifies whether the rule is enabled.
     */
    Status: string;
  };

  /**
   * Specifies whether Amazon S3 replicates delete markers. If you specify a `Filter` in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` `Status` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see Basic Rule Configuration.
   * For more information about delete marker replication, see Basic Rule Configuration.
   * If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility.
   */
  export type DeleteMarkerReplicationType = {
    /**
     * Indicates whether to replicate delete markers. Disabled by default.
     */
    Status?: string;
  };

  /**
   * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
   */
  export type ReplicationDestinationType = {
    /**
     * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS-account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS-account that owns the source object.
     */
    AccessControlTranslation?: AccessControlTranslationType;

    /**
     * Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS-account that owns the destination bucket by specifying the `AccessControlTranslation` property, this is the account ID of the destination bucket owner. For more information, see Cross-Region Replication Additional Configuration: Change Replica Owner in the *Amazon S3 User Guide*.
     * If you specify the `AccessControlTranslation` property, the `Account` property is required.
     */
    Account?: string;

    /**
     * The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
     */
    Bucket: string;

    /**
     * Specifies encryption-related information.
     */
    EncryptionConfiguration?: EncryptionConfigurationType;

    /**
     * A container specifying replication metrics-related settings enabling replication metrics and events.
     */
    Metrics?: MetricsType;

    /**
     * A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a `Metrics` block.
     */
    ReplicationTime?: ReplicationTimeType;

    /**
     * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica.
     * For valid values, see the `StorageClass` element of the PUT Bucket replication action in the *Amazon S3 API Reference*.
     */
    StorageClass?: string;
  };

  /**
   * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS-account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS-account that owns the source object.
   */
  export type AccessControlTranslationType = {
    /**
     * Specifies the replica ownership. For default and valid values, see PUT bucket replication in the *Amazon S3 API Reference*.
     */
    Owner: string;
  };

  /**
   * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
   * If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
   */
  export type EncryptionConfigurationType = {
    /**
     * Specifies the ID (Key ARN or Alias ARN) of the customer managed AWS KMS key stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more information, see Asymmetric keys in KMS in the *Key Management Service Developer Guide*.
     */
    ReplicaKmsKeyID: string;
  };

  /**
   * A container specifying replication metrics-related settings enabling replication metrics and events.
   */
  export type MetricsType = {
    /**
     * A container specifying the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event.
     */
    EventThreshold?: ReplicationTimeValueType;

    /**
     * Specifies whether the replication metrics are enabled.
     */
    Status: string;
  };

  /**
   * A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics `EventThreshold`.
   */
  export type ReplicationTimeValueType = {
    /**
     * Contains an integer specifying time in minutes.
     * Valid value: 15
     */
    Minutes: number;
  };

  /**
   * A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a `Metrics` block.
   */
  export type ReplicationTimeType = {
    /**
     * Specifies whether the replication time is enabled.
     */
    Status: string;

    /**
     * A container specifying the time by which replication should be complete for all objects and operations on objects.
     */
    Time: ReplicationTimeValueType;
  };

  /**
   * A filter that identifies the subset of objects to which the replication rule applies. A `Filter` must specify exactly one `Prefix`, `TagFilter`, or an `And` child element.
   */
  export type ReplicationRuleFilterType = {
    /**
     * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example:
     * +  If you specify both a `Prefix` and a `TagFilter`, wrap these filters in an `And` tag.
     * +  If you specify a filter based on multiple tags, wrap the `TagFilter` elements in an `And` tag.
     */
    And?: ReplicationRuleAndOperatorType;

    /**
     * An object key name prefix that identifies the subset of objects to which the rule applies.
     * Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see XML related object key constraints.
     */
    Prefix?: string;

    /**
     * A container for specifying a tag key and value.
     * The rule applies only to objects that have the tag in their tag set.
     */
    TagFilter?: TagFilterType;
  };

  /**
   * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter.
   * For example:
   * +  If you specify both a `Prefix` and a `TagFilter`, wrap these filters in an `And` tag.
   * +  If you specify a filter based on multiple tags, wrap the `TagFilter` elements in an `And` tag
   */
  export type ReplicationRuleAndOperatorType = {
    /**
     * An object key name prefix that identifies the subset of objects to which the rule applies.
     */
    Prefix?: string;

    /**
     * An array of tags containing key and value pairs.
     */
    TagFilters?: TagFilterType[];
  };

  /**
   * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.
   */
  export type SourceSelectionCriteriaType = {
    /**
     * A filter that you can specify for selection for modifications on replicas.
     */
    ReplicaModifications?: ReplicaModificationsType;

    /**
     * A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.
     */
    SseKmsEncryptedObjects?: SseKmsEncryptedObjectsType;
  };

  /**
   * A filter that you can specify for selection for modifications on replicas.
   */
  export type ReplicaModificationsType = {
    /**
     * Specifies whether Amazon S3 replicates modifications on replicas.
     * *Allowed values*: `Enabled` | `Disabled`
     */
    Status: string;
  };

  /**
   * A container for filter information for the selection of S3 objects encrypted with AWS KMS.
   */
  export type SseKmsEncryptedObjectsType = {
    /**
     * Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS key stored in AWS Key Management Service.
     */
    Status: string;
  };

  /**
   * A container of a key value name pair.
   */
  export type TagType = {
    /**
     * Name of the object key.
     */
    Key: string;

    /**
     * Value of the tag.
     */
    Value: string;
  };

  /**
   * Describes the versioning state of an Amazon S3 bucket. For more information, see PUT Bucket versioning in the *Amazon S3 API Reference*.
   * When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (`PUT` or `DELETE`) on objects in the bucket.
   */
  export type VersioningConfigurationType = {
    /**
     * The versioning state of the bucket.
     */
    Status: string;
  };

  /**
   * Specifies website configuration parameters for an Amazon S3 bucket.
   */
  export type WebsiteConfigurationType = {
    /**
     * The name of the error document for the website.
     */
    ErrorDocument?: string;

    /**
     * The name of the index document for the website.
     */
    IndexDocument?: string;

    /**
     * Rules that define when a redirect is applied and the redirect behavior.
     */
    RoutingRules?: RoutingRuleType[];

    /**
     * The redirect behavior for every request to this bucket's website endpoint.
     * If you specify this property, you can't specify any other property.
     */
    RedirectAllRequestsTo?: RedirectAllRequestsToType;
  };

  /**
   * Specifies the redirect behavior and when a redirect is applied. For more information about routing rules, see Configuring advanced conditional redirects in the *Amazon S3 User Guide*.
   */
  export type RoutingRuleType = {
    /**
     * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
     */
    RedirectRule: RedirectRuleType;

    /**
     * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the `/docs` folder, redirect to the `/documents` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
     */
    RoutingRuleCondition?: RoutingRuleConditionType;
  };

  /**
   * Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.
   */
  export type RedirectRuleType = {
    /**
     * The host name to use in the redirect request.
     */
    HostName?: string;

    /**
     * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
     */
    HttpRedirectCode?: string;

    /**
     * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
     */
    Protocol?: string;

    /**
     * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/`, you can set a condition block with `KeyPrefixEquals` set to `docs/` and in the Redirect set `ReplaceKeyPrefixWith` to `/documents`. Not required if one of the siblings is present. Can be present only if `ReplaceKeyWith` is not provided.
     * Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see XML related object key constraints.
     */
    ReplaceKeyPrefixWith?: string;

    /**
     * The specific object key to use in the redirect request. For example, redirect request to `error.html`. Not required if one of the siblings is present. Can be present only if `ReplaceKeyPrefixWith` is not provided.
     * Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see XML related object key constraints.
     */
    ReplaceKeyWith?: string;
  };

  /**
   * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the `/docs` folder, redirect to the `/documents` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
   */
  export type RoutingRuleConditionType = {
    /**
     * The object key name prefix when the redirect is applied. For example, to redirect requests for `ExamplePage.html`, the key prefix will be `ExamplePage.html`. To redirect request for all pages with the prefix `docs/`, the key prefix will be `/docs`, which identifies all objects in the docs/ folder.
     * Required when the parent element `Condition` is specified and sibling `HttpErrorCodeReturnedEquals` is not specified. If both conditions are specified, both must be true for the redirect to be applied.
     */
    KeyPrefixEquals?: string;

    /**
     * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied.
     * Required when parent element `Condition` is specified and sibling `KeyPrefixEquals` is not specified. If both are specified, then both must be true for the redirect to be applied.
     */
    HttpErrorCodeReturnedEquals?: string;
  };

  /**
   * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
   */
  export type RedirectAllRequestsToType = {
    /**
     * Name of the host where requests are redirected.
     */
    HostName: string;

    /**
     * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
     */
    Protocol?: string;
  };

  /**
   * the Amazon Resource Name (ARN) of the specified bucket.
   */
  export type ArnType = {};

  /**
   * The `AWS::S3::Bucket` resource creates an Amazon S3 bucket in the same AWS Region where you create the AWS CloudFormation stack.
   * To control how AWS CloudFormation handles the bucket when the stack is deleted, you can set a deletion policy for your bucket. You can choose to *retain* the bucket or to *delete* the bucket. For more information, see DeletionPolicy Attribute.
   * You can only delete empty buckets. Deletion fails for buckets that have contents.
   */
  export type BucketResourceType = {
    /**
     * Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see Amazon S3 Transfer Acceleration in the *Amazon S3 User Guide*.
     */
    AccelerateConfiguration?: AccelerateConfigurationType;

    /**
     * This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see Controlling object ownership in the *Amazon S3 User Guide*.
     * A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see Canned ACL in the *Amazon S3 User Guide*.
     * S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the AWS::S3::OwnershipControls property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.
     * The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see AWS::S3::BucketPolicy. For examples of common policy configurations, including S3 Server Access Logs buckets and more, see Bucket policy examples in the *Amazon S3 User Guide*.
     */
    AccessControl?: string;

    /**
     * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
     */
    AnalyticsConfigurations?: AnalyticsConfigurationType[];

    /**
     * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS). For information about the Amazon S3 default encryption feature, see Amazon S3 Default Encryption for S3 Buckets in the *Amazon S3 User Guide*.
     */
    BucketEncryption?: BucketEncryptionType;

    /**
     * A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow Amazon S3 bucket restrictions and limitations. For more information, see Rules for naming Amazon S3 buckets in the *Amazon S3 User Guide*.
     * If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
     * Create-only property
     */
    BucketName?: string;

    /**
     * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see Enabling Cross-Origin Resource Sharing in the *Amazon S3 User Guide*.
     */
    CorsConfiguration?: CorsConfigurationType;

    /**
     * Defines how Amazon S3 handles Intelligent-Tiering storage.
     */
    IntelligentTieringConfigurations?: IntelligentTieringConfigurationType[];

    /**
     * Specifies the inventory configuration for an Amazon S3 bucket. For more information, see GET Bucket inventory in the *Amazon S3 API Reference*.
     */
    InventoryConfigurations?: InventoryConfigurationType[];

    /**
     * Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see Object Lifecycle Management in the *Amazon S3 User Guide*.
     */
    LifecycleConfiguration?: LifecycleConfigurationType;

    /**
     * Settings that define where logs are stored.
     */
    LoggingConfiguration?: LoggingConfigurationType;

    /**
     * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see PutBucketMetricsConfiguration.
     */
    MetricsConfigurations?: MetricsConfigurationType[];

    /**
     * Configuration that defines how Amazon S3 handles bucket notifications.
     */
    NotificationConfiguration?: NotificationConfigurationType;

    /**
     * This operation is not supported by directory buckets.
     * Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects.
     * +  The `DefaultRetention` settings require both a mode and a period.
     * +  The `DefaultRetention` period can be either `Days` or `Years` but you must select one. You cannot specify `Days` and `Years` at the same time.
     * +  You can enable Object Lock for new or existing buckets. For more information, see Configuring Object Lock.
     */
    ObjectLockConfiguration?: ObjectLockConfigurationType;

    /**
     * Indicates whether this bucket has an Object Lock configuration enabled. Enable `ObjectLockEnabled` when you apply `ObjectLockConfiguration` to a bucket.
     */
    ObjectLockEnabled?: boolean;

    /**
     * Configuration that defines how Amazon S3 handles Object Ownership rules.
     */
    OwnershipControls?: OwnershipControlsType;

    /**
     * Configuration that defines how Amazon S3 handles public access.
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfigurationType;

    /**
     * Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the `VersioningConfiguration` property.
     * Amazon S3 can store replicated objects in a single destination bucket or multiple destination buckets. The destination bucket or buckets must already exist.
     */
    ReplicationConfiguration?: ReplicationConfigurationType;

    /**
     * An arbitrary set of tags (key-value pairs) for this S3 bucket.
     */
    Tags?: TagType[];

    /**
     * Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.
     * When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (`PUT` or `DELETE`) on objects in the bucket.
     */
    VersioningConfiguration?: VersioningConfigurationType;

    /**
     * Information used to configure the bucket as a static website. For more information, see Hosting Websites on Amazon S3.
     */
    WebsiteConfiguration?: WebsiteConfigurationType;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Read-only property
     */
    DomainName?: string;

    /**
     * Read-only property
     */
    DualStackDomainName?: string;

    /**
     * Read-only property
     */
    RegionalDomainName?: string;

    /**
     * Read-only property
     */
    WebsiteURL?: string;
  };
}
