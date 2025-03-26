/**
 * TypeScript definitions for AWS::IoT::TopicRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::TopicRule
 */
export namespace AWS_IoT_TopicRule {
  export type TopicRulePayloadType = {
    RuleDisabled?: boolean;

    ErrorAction?: ActionType;

    Description?: string;

    AwsIotSqlVersion?: string;

    Actions: ActionType[];

    Sql: string;
  };

  export type ActionType = {
    CloudwatchAlarm?: CloudwatchAlarmActionType;

    CloudwatchLogs?: CloudwatchLogsActionType;

    CloudwatchMetric?: CloudwatchMetricActionType;

    DynamoDB?: DynamoDBActionType;

    DynamoDBv2?: DynamoDBv2ActionType;

    Elasticsearch?: ElasticsearchActionType;

    Firehose?: FirehoseActionType;

    Http?: HttpActionType;

    IotAnalytics?: IotAnalyticsActionType;

    IotEvents?: IotEventsActionType;

    IotSiteWise?: IotSiteWiseActionType;

    Kafka?: KafkaActionType;

    Kinesis?: KinesisActionType;

    Lambda?: LambdaActionType;

    Location?: LocationActionType;

    OpenSearch?: OpenSearchActionType;

    Republish?: RepublishActionType;

    S3?: S3ActionType;

    Sns?: SnsActionType;

    Sqs?: SqsActionType;

    StepFunctions?: StepFunctionsActionType;

    Timestream?: TimestreamActionType;
  };

  export type CloudwatchAlarmActionType = {
    StateValue: string;

    AlarmName: string;

    StateReason: string;

    RoleArn: string;
  };

  export type CloudwatchLogsActionType = {
    LogGroupName: string;

    RoleArn: string;

    BatchMode?: boolean;
  };

  export type CloudwatchMetricActionType = {
    MetricName: string;

    MetricValue: string;

    MetricNamespace: string;

    MetricUnit: string;

    RoleArn: string;

    MetricTimestamp?: string;
  };

  export type DynamoDBActionType = {
    TableName: string;

    PayloadField?: string;

    RangeKeyField?: string;

    HashKeyField: string;

    RangeKeyValue?: string;

    RangeKeyType?: string;

    HashKeyType?: string;

    HashKeyValue: string;

    RoleArn: string;
  };

  export type DynamoDBv2ActionType = {
    PutItem?: PutItemInputType;

    RoleArn?: string;
  };

  export type PutItemInputType = {
    TableName: string;
  };

  export type ElasticsearchActionType = {
    Type: string;

    Index: string;

    Id: string;

    Endpoint: string;

    RoleArn: string;
  };

  export type FirehoseActionType = {
    DeliveryStreamName: string;

    RoleArn: string;

    Separator?: string;

    BatchMode?: boolean;
  };

  export type HttpActionType = {
    ConfirmationUrl?: string;

    Headers?: HttpActionHeaderType[];

    Url: string;

    Auth?: HttpAuthorizationType;
  };

  export type HttpActionHeaderType = {
    Value: string;

    Key: string;
  };

  export type HttpAuthorizationType = {
    Sigv4?: SigV4AuthorizationType;
  };

  export type SigV4AuthorizationType = {
    ServiceName: string;

    SigningRegion: string;

    RoleArn: string;
  };

  export type IotAnalyticsActionType = {
    RoleArn: string;

    ChannelName: string;

    BatchMode?: boolean;
  };

  export type IotEventsActionType = {
    InputName: string;

    RoleArn: string;

    MessageId?: string;

    BatchMode?: boolean;
  };

  export type IotSiteWiseActionType = {
    RoleArn: string;

    PutAssetPropertyValueEntries: PutAssetPropertyValueEntryType[];
  };

  export type PutAssetPropertyValueEntryType = {
    PropertyAlias?: string;

    PropertyValues: AssetPropertyValueType[];

    AssetId?: string;

    EntryId?: string;

    PropertyId?: string;
  };

  export type AssetPropertyValueType = {
    Value: AssetPropertyVariantType;

    Timestamp: AssetPropertyTimestampType;

    Quality?: string;
  };

  export type AssetPropertyVariantType = {
    StringValue?: string;

    DoubleValue?: string;

    BooleanValue?: string;

    IntegerValue?: string;
  };

  export type AssetPropertyTimestampType = {
    TimeInSeconds: string;

    OffsetInNanos?: string;
  };

  export type KafkaActionType = {
    DestinationArn: string;

    Topic: string;

    Key?: string;

    Partition?: string;

    ClientProperties: Record<string, any>;

    Headers?: KafkaActionHeaderType[];
  };

  export type KafkaActionHeaderType = {
    Value: string;

    Key: string;
  };

  export type KinesisActionType = {
    PartitionKey?: string;

    StreamName: string;

    RoleArn: string;
  };

  export type LambdaActionType = {
    FunctionArn?: string;
  };

  export type LocationActionType = {
    RoleArn: string;

    TrackerName: string;

    DeviceId: string;

    Latitude: string;

    Longitude: string;

    Timestamp?: TimestampType;
  };

  export type TimestampType = {
    Value: string;

    Unit?: string;
  };

  export type OpenSearchActionType = {
    Type: string;

    Index: string;

    Id: string;

    Endpoint: string;

    RoleArn: string;
  };

  export type RepublishActionType = {
    Qos?: number;

    Topic: string;

    RoleArn: string;

    Headers?: RepublishActionHeadersType;
  };

  export type RepublishActionHeadersType = {
    PayloadFormatIndicator?: string;

    ContentType?: string;

    ResponseTopic?: string;

    CorrelationData?: string;

    MessageExpiry?: string;

    UserProperties?: UserPropertiesType;
  };

  export type UserPropertiesType = {};

  export type UserPropertyType = {
    Key: string;

    Value: string;
  };

  export type S3ActionType = {
    BucketName: string;

    Key: string;

    RoleArn: string;

    CannedAcl?: CannedAccessControlListType;
  };

  export type CannedAccessControlListType = {};

  export type SnsActionType = {
    TargetArn: string;

    MessageFormat?: string;

    RoleArn: string;
  };

  export type StepFunctionsActionType = {
    ExecutionNamePrefix?: string;

    StateMachineName: string;

    RoleArn: string;
  };

  export type SqsActionType = {
    RoleArn: string;

    UseBase64?: boolean;

    QueueUrl: string;
  };

  export type TimestreamActionType = {
    RoleArn: string;

    DatabaseName: string;

    TableName: string;

    Dimensions: TimestreamDimensionsListType;

    Timestamp?: TimestreamTimestampType;
  };

  export type TimestreamDimensionsListType = {};

  export type TimestreamDimensionType = {
    Name: string;

    Value: string;
  };

  export type TimestreamTimestampType = {
    Value: string;

    Unit: string;
  };

  export type RoleArnType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::IoT::TopicRule
   */
  export type TopicRuleResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    RuleName?: string;

    TopicRulePayload: TopicRulePayloadType;

    Tags?: TagType[];
  };
}
