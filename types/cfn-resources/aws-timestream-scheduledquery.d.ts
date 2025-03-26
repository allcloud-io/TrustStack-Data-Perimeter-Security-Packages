/**
 * TypeScript definitions for AWS::Timestream::ScheduledQuery
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Timestream::ScheduledQuery resource creates a Timestream Scheduled Query.
 */
export namespace AWS_Timestream_ScheduledQuery {
  /**
   * Amazon Resource Name of the scheduled query that is generated upon creation.
   */
  export type ArnType = {};

  /**
   * The name of the scheduled query. Scheduled query names must be unique within each Region.
   */
  export type ScheduledQueryNameType = {};

  /**
   * The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
   */
  export type QueryStringType = {};

  /**
   * Configuration for when the scheduled query is executed.
   */
  export type ScheduleConfigurationType = {
    ScheduleExpression: ScheduleExpressionType;
  };

  /**
   * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
   */
  export type NotificationConfigurationType = {
    SnsConfiguration: SnsConfigurationType;
  };

  /**
   * Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request.
   */
  export type ClientTokenType = {};

  /**
   * The ARN for the IAM role that Timestream will assume when running the scheduled query.
   */
  export type ScheduledQueryExecutionRoleArnType = {};

  /**
   * Configuration of target store where scheduled query results are written to.
   */
  export type TargetConfigurationType = {
    TimestreamConfiguration: TimestreamConfigurationType;
  };

  /**
   * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
   */
  export type ErrorReportConfigurationType = {
    S3Configuration: S3ConfigurationType;
  };

  /**
   * The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
   */
  export type KmsKeyIdType = {};

  /**
   * A list of key-value pairs to label the scheduled query.
   */
  export type TagsType = {};

  /**
   * An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression.
   */
  export type ScheduleExpressionType = {};

  /**
   * SNS configuration for notification upon scheduled query execution.
   */
  export type SnsConfigurationType = {
    TopicArn: TopicArnType;
  };

  /**
   * SNS topic ARN that the scheduled query status notifications will be sent to.
   */
  export type TopicArnType = {};

  /**
   * Configuration needed to write data into the Timestream database and table.
   */
  export type TimestreamConfigurationType = {
    DatabaseName: DatabaseNameType;

    TableName: TableNameType;

    TimeColumn: TimeColumnType;

    DimensionMappings: DimensionMappingsType;

    MultiMeasureMappings?: MultiMeasureMappingsType;

    MixedMeasureMappings?: MixedMeasureMappingsType;

    MeasureNameColumn?: MeasureNameColumnType;
  };

  /**
   * Name of Timestream database to which the query result will be written.
   */
  export type DatabaseNameType = {};

  /**
   * Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration.
   */
  export type TableNameType = {};

  /**
   * Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP.
   */
  export type TimeColumnType = {};

  /**
   * This is to allow mapping column(s) from the query result to the dimension in the destination table.
   */
  export type DimensionMappingsType = {};

  /**
   * This type is used to map column(s) from the query result to a dimension in the destination table.
   */
  export type DimensionMappingType = {
    Name: DimensionMappingNameType;

    DimensionValueType: DimensionValueTypeType;
  };

  /**
   * Column name from query result.
   */
  export type DimensionMappingNameType = {};

  /**
   * Type for the dimension.
   */
  export type DimensionValueTypeType = {};

  /**
   * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
   */
  export type MultiMeasureMappingsType = {
    TargetMultiMeasureName?: TargetMultiMeasureNameType;

    MultiMeasureAttributeMappings: MultiMeasureAttributeMappingListType;
  };

  /**
   * Name of the target multi-measure in the derived table. Required if MeasureNameColumn is not provided. If MeasureNameColumn is provided then the value from that column will be used as the multi-measure name.
   */
  export type TargetMultiMeasureNameType = {};

  /**
   * Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
   */
  export type MultiMeasureAttributeMappingListType = {};

  /**
   * An attribute mapping to be used for mapping query results to ingest data for multi-measure attributes.
   */
  export type MultiMeasureAttributeMappingType = {
    SourceColumn: MultiMeasureAttributeMappingSourceColumnType;

    MeasureValueType: MultiMeasureAttributeMappingMeasureValueTypeType;

    TargetMultiMeasureAttributeName?: TargetMultiMeasureAttributeNameType;
  };

  /**
   * Source measure value column in the query result where the attribute value is to be read.
   */
  export type MultiMeasureAttributeMappingSourceColumnType = {};

  /**
   * Value type of the measure value column to be read from the query result.
   */
  export type MultiMeasureAttributeMappingMeasureValueTypeType = {};

  /**
   * Custom name to be used for attribute name in derived table. If not provided, source column name would be used.
   */
  export type TargetMultiMeasureAttributeNameType = {};

  /**
   * Specifies how to map measures to multi-measure records.
   */
  export type MixedMeasureMappingsType = {};

  /**
   * MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.
   */
  export type MixedMeasureMappingType = {
    MeasureName?: MixedMeasureMappingMeasureNameType;

    SourceColumn?: MixedMeasureMappingSourceColumnType;

    TargetMeasureName?: MixedMeasureMappingTargetMeasureNameType;

    MeasureValueType: MixedMeasureMappingMeasureValueTypeType;

    MultiMeasureAttributeMappings?: MultiMeasureAttributeMappingListType;
  };

  /**
   * Refers to the value of the measure name in a result row. This field is required if MeasureNameColumn is provided.
   */
  export type MixedMeasureMappingMeasureNameType = {};

  /**
   * This field refers to the source column from which the measure value is to be read for result materialization.
   */
  export type MixedMeasureMappingSourceColumnType = {};

  /**
   * Target measure name to be used. If not provided, the target measure name by default would be MeasureName if provided, or SourceColumn otherwise.
   */
  export type MixedMeasureMappingTargetMeasureNameType = {};

  /**
   * Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.
   */
  export type MixedMeasureMappingMeasureValueTypeType = {};

  /**
   * Name of the measure name column from the query result.
   */
  export type MeasureNameColumnType = {};

  /**
   * Details on S3 location for error reports that result from running a query.
   */
  export type S3ConfigurationType = {
    BucketName: BucketNameType;

    ObjectKeyPrefix?: ObjectKeyPrefixType;

    EncryptionOption?: EncryptionOptionType;
  };

  /**
   * Name of the S3 bucket under which error reports will be created.
   */
  export type BucketNameType = {};

  /**
   * Prefix for error report keys.
   */
  export type ObjectKeyPrefixType = {};

  /**
   * Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE_S3 as default.
   */
  export type EncryptionOptionType = {};

  /**
   * A key-value pair to label the scheduled query.
   */
  export type TagType = {
    Key: KeyType;

    Value: ValueType;
  };

  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  export type KeyType = {};

  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  export type ValueType = {};

  /**
   * The AWS::Timestream::ScheduledQuery resource creates a Timestream Scheduled Query.
   */
  export type ScheduledQueryResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Create-only property
     */
    ScheduledQueryName?: ScheduledQueryNameType;

    /**
     * Create-only property
     */
    QueryString: QueryStringType;

    /**
     * Create-only property
     */
    ScheduleConfiguration: ScheduleConfigurationType;

    /**
     * Create-only property
     */
    NotificationConfiguration: NotificationConfigurationType;

    /**
     * Create-only property
     */
    ClientToken?: ClientTokenType;

    /**
     * Create-only property
     */
    ScheduledQueryExecutionRoleArn: ScheduledQueryExecutionRoleArnType;

    /**
     * Create-only property
     */
    TargetConfiguration?: TargetConfigurationType;

    /**
     * Create-only property
     */
    ErrorReportConfiguration: ErrorReportConfigurationType;

    /**
     * Create-only property
     */
    KmsKeyId?: KmsKeyIdType;

    /**
     * The name of the scheduled query. Scheduled query names must be unique within each Region.
     * Read-only property
     */
    SQName?: string;

    /**
     * The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
     * Read-only property
     */
    SQQueryString?: string;

    /**
     * Configuration for when the scheduled query is executed.
     * Read-only property
     */
    SQScheduleConfiguration?: string;

    /**
     * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
     * Read-only property
     */
    SQNotificationConfiguration?: string;

    /**
     * The ARN for the IAM role that Timestream will assume when running the scheduled query.
     * Read-only property
     */
    SQScheduledQueryExecutionRoleArn?: string;

    /**
     * Configuration of target store where scheduled query results are written to.
     * Read-only property
     */
    SQTargetConfiguration?: string;

    /**
     * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
     * Read-only property
     */
    SQErrorReportConfiguration?: string;

    /**
     * The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
     * Read-only property
     */
    SQKmsKeyId?: string;

    Tags?: TagsType;
  };
}
