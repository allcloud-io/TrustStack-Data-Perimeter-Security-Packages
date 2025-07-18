/**
 * TypeScript definitions for AWS::DynamoDB::Table
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::DynamoDB::Table` resource creates a DDB table. For more information, see CreateTable in the *API Reference*.
 * You should be aware of the following behaviors when working with DDB tables:
 * +   CFNlong typically creates DDB tables in parallel. However, if your template includes multiple DDB tables with indexes, you must declare dependencies so that the tables are created sequentially. DDBlong limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DDB returns an error and the stack operation fails. For an example, see DynamoDB Table with a DependsOn Attribute.
 * Our guidance is to use the latest schema documented for your CFNlong templates. This schema supports the provisioning of all table settings below. When using this schema in your CFNlong templates, please ensure that your Identity and Access Management (IAM) policies are updated with appropriate permissions to allow for the authorization of these setting changes.
 */
export namespace AWS_DynamoDB_Table {
  /**
   * Sets the maximum number of read and write units for the specified on-demand table. If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   */
  export type OnDemandThroughputType = {
    /**
     * Maximum number of read request units for the specified table.
     * To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.
     */
    MaxReadRequestUnits?: number;

    /**
     * Maximum number of write request units for the specified table.
     * To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.
     */
    MaxWriteRequestUnits?: number;
  };

  /**
   * Represents the properties of a local secondary index. A local secondary index can only be created when its parent table is created.
   */
  export type LocalSecondaryIndexType = {
    /**
     * The name of the local secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: string;

    /**
     * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     */
    Projection: ProjectionType;

    /**
     * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
     * +   `HASH` - partition key
     * +   `RANGE` - sort key
     * The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
     * The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
     */
    KeySchema: KeySchemaType[];
  };

  /**
   * Represents the settings used to enable server-side encryption.
   */
  export type SSESpecificationType = {
    /**
     * Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.
     */
    SSEEnabled: boolean;

    /**
     * Server-side encryption type. The only supported value is:
     * +   `KMS` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).
     */
    SSEType?: string;

    /**
     * The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.
     */
    KMSMasterKeyId?: string;
  };

  /**
   * The Kinesis Data Streams configuration for the specified table.
   */
  export type KinesisStreamSpecificationType = {
    /**
     * The precision for the time and date that the stream was created.
     */
    ApproximateCreationDateTimePrecision?: string;

    /**
     * The ARN for a specific Kinesis data stream.
     * Length Constraints: Minimum length of 37. Maximum length of 1024.
     */
    StreamArn: string;
  };

  /**
   * Represents the DynamoDB Streams configuration for a table in DynamoDB.
   */
  export type StreamSpecificationType = {
    /**
     * When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table. Valid values for `StreamViewType` are:
     * +   `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
     * +   `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
     * +   `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
     * +   `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.
     */
    StreamViewType: string;

    /**
     * Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
     * In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see Using resource-based policies for and Resource-based policy examples.
     */
    ResourcePolicy?: ResourcePolicyType;
  };

  /**
   * The settings used to enable or disable CloudWatch Contributor Insights.
   */
  export type ContributorInsightsSpecificationType = {
    /**
     * Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
     */
    Enabled: boolean;
  };

  /**
   * The format options for the data that was imported into the target table. There is one value, CsvOption.
   */
  export type InputFormatOptionsType = {
    /**
     * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
     */
    Csv?: CsvType;
  };

  /**
   * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
   */
  export type CsvType = {
    /**
     * The delimiter used for separating items in the CSV file being imported.
     */
    Delimiter?: string;

    /**
     * List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.
     */
    HeaderList?: string[];
  };

  /**
   * Specifies the properties of data being imported from the S3 bucket source to the table.
   */
  export type ImportSourceSpecificationType = {
    /**
     * The S3 bucket that provides the source for the import.
     */
    S3BucketSource: S3BucketSourceType;

    /**
     * The format of the source data. Valid values for `ImportFormat` are `CSV`, `DYNAMODB_JSON` or `ION`.
     */
    InputFormat: string;

    /**
     * Additional properties that specify how the input is formatted,
     */
    InputFormatOptions?: InputFormatOptionsType;

    /**
     * Type of compression to be used on the input coming from the imported table.
     */
    InputCompressionType?: string;
  };

  /**
   * Represents an attribute for describing the schema for the table and indexes.
   */
  export type AttributeDefinitionType = {
    /**
     * The data type for the attribute, where:
     * +   `S` - the attribute is of type String
     * +   `N` - the attribute is of type Number
     * +   `B` - the attribute is of type Binary
     */
    AttributeType: string;

    /**
     * A name for the attribute.
     */
    AttributeName: string;
  };

  /**
   * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   */
  export type ProjectionType = {
    /**
     * Represents the non-key attribute names which will be projected into the index.
     * For local secondary indexes, the total count of `NonKeyAttributes` summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
     */
    NonKeyAttributes?: string[];

    /**
     * The set of attributes that are projected into the index:
     * +   `KEYS_ONLY` - Only the index and primary keys are projected into the index.
     * +   `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
     * +   `ALL` - All of the table attributes are projected into the index.
     * When using the DynamoDB console, `ALL` is selected by default.
     */
    ProjectionType?: string;
  };

  /**
   * The settings used to enable point in time recovery.
   */
  export type PointInTimeRecoverySpecificationType = {
    /**
     * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
     */
    PointInTimeRecoveryEnabled?: boolean;

    /**
     * The number of preceding days for which continuous backups are taken and maintained. Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.
     */
    RecoveryPeriodInDays?: number;
  };

  /**
   * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits`. For more information about the contents of a provisioned throughput structure, see Table ProvisionedThroughput.
   */
  export type ProvisionedThroughputType = {
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see Specifying Read and Write Requirements in the *Amazon DynamoDB Developer Guide*.
     * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
     */
    WriteCapacityUnits: number;

    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see Specifying Read and Write Requirements in the *Amazon DynamoDB Developer Guide*.
     * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
     */
    ReadCapacityUnits: number;
  };

  /**
   * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support. The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
   */
  export type WarmThroughputType = {
    /**
     * Represents the number of read operations your base table can instantaneously support.
     */
    ReadUnitsPerSecond?: number;

    /**
     * Represents the number of write operations your base table can instantaneously support.
     */
    WriteUnitsPerSecond?: number;
  };

  /**
   * Represents the properties of a global secondary index.
   */
  export type GlobalSecondaryIndexType = {
    /**
     * The name of the global secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: string;

    /**
     * The maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
     */
    OnDemandThroughput?: OnDemandThroughputType;

    /**
     * The settings used to enable or disable CloudWatch Contributor Insights for the specified global secondary index.
     */
    ContributorInsightsSpecification?: ContributorInsightsSpecificationType;

    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     */
    Projection: ProjectionType;

    /**
     * Represents the provisioned throughput settings for the specified global secondary index.
     * For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the *Amazon DynamoDB Developer Guide*.
     */
    ProvisionedThroughput?: ProvisionedThroughputType;

    /**
     * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
     * +   `HASH` - partition key
     * +   `RANGE` - sort key
     * The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
     * The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
     */
    KeySchema: KeySchemaType[];

    /**
     * Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. If you use this parameter, you must specify `ReadUnitsPerSecond`, `WriteUnitsPerSecond`, or both.
     */
    WarmThroughput?: WarmThroughputType;
  };

  /**
   * The S3 bucket that is being imported from.
   */
  export type S3BucketSourceType = {
    /**
     * The S3 bucket that is being imported from.
     */
    S3Bucket: string;

    /**
     * The key prefix shared by all S3 Objects that are being imported.
     */
    S3KeyPrefix?: string;

    /**
     * The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional.
     */
    S3BucketOwner?: string;
  };

  /**
   * Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table, its indexes, and stream. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
   * In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see Using resource-based policies for and Resource-based policy examples.
   * While defining resource-based policies in your CFNshort templates, the following considerations apply:
   * +  The maximum size supported for a resource-based policy document in JSON format is 20 KB. DDB counts whitespaces when calculating the size of a policy against this limit.
   * +  Resource-based policies don't support drift detection. If you update a policy outside of the CFNshort stack template, you'll need to update the CFNshort stack with the changes.
   * +  Resource-based policies don't support out-of-band changes. If you add, update, or delete a policy outside of the CFNshort template, the change won't be overwritten if there are no changes to the policy within the template.
   * For example, say that your template contains a resource-based policy, which you later update outside of the template. If you don't make any changes to the policy in the template, the updated policy in DDB won’t be synced with the policy in the template.
   * Conversely, say that your template doesn’t contain a resource-based policy, but you add a policy outside of the template. This policy won’t be removed from DDB as long as you don’t add it to the template. When you add a policy to the template and update the stack, the existing policy in DDB will be updated to match the one defined in the template.
   * For a full list of all considerations, see Resource-based policy considerations.
   */
  export type ResourcePolicyType = {
    /**
     * A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see Using resource-based policies for and Resource-based policy examples.
     */
    PolicyDocument: Record<string, any>;
  };

  export type DeprecatedKeySchemaType = {
    HashKeyElement: DeprecatedHashKeyElementType;
  };

  /**
   * Represents *a single element* of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
   * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
   * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
   */
  export type KeySchemaType = {
    /**
     * The role that this key attribute will assume:
     * +   `HASH` - partition key
     * +   `RANGE` - sort key
     * The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
     * The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
     */
    KeyType: string;

    /**
     * The name of a key attribute.
     */
    AttributeName: string;
  };

  /**
   * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table.
   * AWS-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:` in the Cost Allocation Report. You cannot backdate the application of a tag.
   * For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the *Amazon DynamoDB Developer Guide*.
   */
  export type TagType = {
    /**
     * The value of the tag. Tag values are case-sensitive and can be null.
     */
    Value: string;

    /**
     * The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
     */
    Key: string;
  };

  export type DeprecatedHashKeyElementType = {
    AttributeType: string;

    AttributeName: string;
  };

  /**
   * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
   */
  export type TimeToLiveSpecificationType = {
    /**
     * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
     */
    Enabled: boolean;

    /**
     * The name of the TTL attribute used to store the expiration time for items in the table.
     * +  The `AttributeName` property is required when enabling the TTL, or when TTL is already enabled.
     * +  To update this property, you must first disable TTL and then enable TTL with the new attribute name.
     */
    AttributeName?: string;
  };

  /**
   * The `AWS::DynamoDB::Table` resource creates a DDB table. For more information, see CreateTable in the *API Reference*.
   * You should be aware of the following behaviors when working with DDB tables:
   * +   CFNlong typically creates DDB tables in parallel. However, if your template includes multiple DDB tables with indexes, you must declare dependencies so that the tables are created sequentially. DDBlong limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DDB returns an error and the stack operation fails. For an example, see DynamoDB Table with a DependsOn Attribute.
   * Our guidance is to use the latest schema documented for your CFNlong templates. This schema supports the provisioning of all table settings below. When using this schema in your CFNlong templates, please ensure that your Identity and Access Management (IAM) policies are updated with appropriate permissions to allow for the authorization of these setting changes.
   */
  export type TableResourceType = {
    /**
     * Sets the maximum number of read and write units for the specified on-demand table. If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
     */
    OnDemandThroughput?: OnDemandThroughputType;

    /**
     * Specifies the settings to enable server-side encryption.
     */
    SSESpecification?: SSESpecificationType;

    /**
     * The Kinesis Data Streams configuration for the specified table.
     */
    KinesisStreamSpecification?: KinesisStreamSpecificationType;

    /**
     * The settings for the DDB table stream, which capture changes to items stored in the table.
     */
    StreamSpecification?: StreamSpecificationType;

    /**
     * The settings used to enable or disable CloudWatch Contributor Insights for the specified table.
     */
    ContributorInsightsSpecification?: ContributorInsightsSpecificationType;

    /**
     * Specifies the properties of data being imported from the S3 bucket source to the" table.
     * If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification`, the `TableClass` property, the `DeletionProtectionEnabled` property, or the `WarmThroughput` property, the IAM entity creating/updating stack must have `UpdateTable` permission.
     * Create-only property
     */
    ImportSourceSpecification?: ImportSourceSpecificationType;

    /**
     * The settings used to enable point in time recovery.
     */
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecificationType;

    /**
     * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits`. For more information about the contents of a provisioned throughput structure, see Amazon DynamoDB Table ProvisionedThroughput.
     * If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.
     */
    ProvisionedThroughput?: ProvisionedThroughputType;

    /**
     * Represents the warm throughput (in read units per second and write units per second) for creating a table.
     */
    WarmThroughput?: WarmThroughputType;

    /**
     * A name for the table. If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see Name Type.
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * Create-only property
     */
    TableName?: string;

    /**
     * A list of attributes that describe the key schema for the table and indexes.
     * This property is required to create a DDB table.
     * Update requires: Some interruptions. Replacement if you edit an existing AttributeDefinition.
     */
    AttributeDefinitions?: AttributeDefinitionType[];

    /**
     * Specify how you are charged for read and write throughput and how you manage capacity.
     * Valid values include:
     * +   `PROVISIONED` - We recommend using `PROVISIONED` for predictable workloads. `PROVISIONED` sets the billing mode to Provisioned Mode.
     * +   `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for unpredictable workloads. `PAY_PER_REQUEST` sets the billing mode to On-Demand Mode.
     * If not specified, the default is `PROVISIONED`.
     */
    BillingMode?: string;

    /**
     * Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
     * If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE`. You can track its status by using the DynamoDB DescribeTable command.
     * If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
     * Updates are not supported. The following are exceptions:
     * +  If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
     * +  You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndexType[];

    /**
     * A resource-based policy document that contains permissions to add to the specified table. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see Using resource-based policies for and Resource-based policy examples.
     * When you attach a resource-based policy while creating a table, the policy creation is *strongly consistent*. For information about the considerations that you should keep in mind while attaching a resource-based policy, see Resource-based policy considerations.
     */
    ResourcePolicy?: ResourcePolicyType;

    /**
     * Specifies the attributes that make up the primary key for the table. The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.
     */
    KeySchema: any;

    /**
     * Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
     */
    LocalSecondaryIndexes?: LocalSecondaryIndexType[];

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    StreamArn?: string;

    /**
     * Determines if a table is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see Using deletion protection in the *Developer Guide*.
     */
    DeletionProtectionEnabled?: boolean;

    /**
     * The table class of the new table. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
     */
    TableClass?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     * For more information, see Tag.
     */
    Tags?: TagType[];

    /**
     * Specifies the Time to Live (TTL) settings for the table.
     * For detailed information about the limits in DynamoDB, see Limits in Amazon DynamoDB in the Amazon DynamoDB Developer Guide.
     */
    TimeToLiveSpecification?: TimeToLiveSpecificationType;
  };
}
