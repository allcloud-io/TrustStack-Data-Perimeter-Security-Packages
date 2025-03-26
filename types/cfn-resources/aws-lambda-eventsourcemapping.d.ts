/**
 * TypeScript definitions for AWS::Lambda::EventSourceMapping
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::Lambda::EventSourceMapping` resource creates a mapping between an event source and an LAMlong function. LAM reads items from the event source and triggers the function.
 * For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source.
 * +   Configuring a Dynamo DB stream as an event source
 * +   Configuring a Kinesis stream as an event source
 * +   Configuring an SQS queue as an event source
 * +   Configuring an MQ broker as an event source
 * +   Configuring MSK as an event source
 * +   Configuring Self-Managed Apache Kafka as an event source
 * +   Configuring Amazon DocumentDB as an event source
 */
export namespace AWS_Lambda_EventSourceMapping {
  /**
   * A configuration object that specifies the destination of an event after Lambda processes it.
   */
  export type DestinationConfigType = {
    /**
     * The destination configuration for failed invocations.
     */
    OnFailure?: OnFailureType;
  };

  /**
   * An object that contains the filters for an event source.
   */
  export type FilterCriteriaType = {
    /**
     * A list of filters.
     */
    Filters?: FilterType[];
  };

  /**
   * A structure within a `FilterCriteria` object that defines an event filtering pattern.
   */
  export type FilterType = {
    /**
     * A filter pattern. For more information on the syntax of a filter pattern, see Filter rule syntax.
     */
    Pattern?: string;
  };

  /**
   * A destination for events that failed processing.
   */
  export type OnFailureType = {
    /**
     * The Amazon Resource Name (ARN) of the destination resource.
     * To retain records of unsuccessful asynchronous invocations, you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.
     * To retain records of failed invocations from Kinesis, DynamoDB, self-managed Kafka or Amazon MSK, you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
     */
    Destination?: string;
  };

  /**
   * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
   */
  export type SourceAccessConfigurationType = {
    /**
     * The type of authentication protocol, VPC components, or virtual host for your event source. For example: `"Type":"SASL_SCRAM_512_AUTH"`.
     * +   `BASIC_AUTH` – (Amazon MQ) The ASMlong secret that stores your broker credentials.
     * +   `BASIC_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
     * +   `VPC_SUBNET` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
     * +   `VPC_SECURITY_GROUP` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
     * +   `SASL_SCRAM_256_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
     * +   `SASL_SCRAM_512_AUTH` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
     * +   `VIRTUAL_HOST` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
     * +   `CLIENT_CERTIFICATE_TLS_AUTH` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
     * +   `SERVER_ROOT_CA_CERTIFICATE` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
     */
    Type?: string;

    /**
     * The value for your chosen configuration in `Type`. For example: `"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"`.
     */
    URI?: string;
  };

  /**
   * The self-managed Apache Kafka cluster for your event source.
   */
  export type SelfManagedEventSourceType = {
    /**
     * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
     */
    Endpoints?: EndpointsType;
  };

  /**
   * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
   */
  export type EndpointsType = {
    /**
     * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
     */
    KafkaBootstrapServers?: string[];
  };

  /**
   * The identifier for the Kafka Consumer Group to join.
   */
  export type ConsumerGroupIdType = {};

  /**
   * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
   */
  export type AmazonManagedKafkaEventSourceConfigType = {
    /**
     * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see Customizable consumer group ID.
     */
    ConsumerGroupId?: ConsumerGroupIdType;
  };

  /**
   * Specific configuration settings for a self-managed Apache Kafka event source.
   */
  export type SelfManagedKafkaEventSourceConfigType = {
    /**
     * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see Customizable consumer group ID.
     */
    ConsumerGroupId?: ConsumerGroupIdType;
  };

  /**
   * The maximum number of concurrent functions that an event source can invoke.
   */
  export type MaximumConcurrencyType = {};

  /**
   * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
   */
  export type ScalingConfigType = {
    /**
     * Limits the number of concurrent instances that the SQS event source can invoke.
     */
    MaximumConcurrency?: MaximumConcurrencyType;
  };

  /**
   * A tag to apply to the event source mapping.
   */
  export type TagType = {
    /**
     * The key for this tag.
     */
    Key: string;

    /**
     * The value for this tag.
     */
    Value?: string;
  };

  /**
   * Specific configuration settings for a DocumentDB event source.
   */
  export type DocumentDBEventSourceConfigType = {
    /**
     * The name of the database to consume within the DocumentDB cluster.
     */
    DatabaseName?: string;

    /**
     * The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
     */
    CollectionName?: string;

    /**
     * Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
     */
    FullDocument?: string;
  };

  /**
   * The provisioned mode configuration for the event source. Use provisioned mode to customize the minimum and maximum number of event pollers for your event source.
   */
  export type ProvisionedPollerConfigType = {
    /**
     * The minimum number of event pollers this event source can scale down to.
     */
    MinimumPollers?: number;

    /**
     * The maximum number of event pollers this event source can scale up to.
     */
    MaximumPollers?: number;
  };

  /**
   * The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.
   */
  export type MetricsConfigType = {
    /**
     * The metrics you want your event source mapping to produce. Include `EventCount` to receive event source mapping metrics related to the number of events processed by your event source mapping. For more information about these metrics, see Event source mapping metrics.
     */
    Metrics?: string[];
  };

  /**
   * The `AWS::Lambda::EventSourceMapping` resource creates a mapping between an event source and an LAMlong function. LAM reads items from the event source and triggers the function.
   * For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source.
   * +   Configuring a Dynamo DB stream as an event source
   * +   Configuring a Kinesis stream as an event source
   * +   Configuring an SQS queue as an event source
   * +   Configuring an MQ broker as an event source
   * +   Configuring MSK as an event source
   * +   Configuring Self-Managed Apache Kafka as an event source
   * +   Configuring Amazon DocumentDB as an event source
   */
  export type EventSourceMappingResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
     * +   *Amazon Kinesis* – Default 100. Max 10,000.
     * +   *Amazon DynamoDB Streams* – Default 100. Max 10,000.
     * +   *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
     * +   *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
     * +   *Self-managed Apache Kafka* – Default 100. Max 10,000.
     * +   *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
     * +   *DocumentDB* – Default 100. Max 10,000.
     */
    BatchSize?: number;

    /**
     * (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.
     */
    BisectBatchOnFunctionError?: boolean;

    /**
     * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.
     */
    DestinationConfig?: DestinationConfigType;

    /**
     * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
     * Default: True
     */
    Enabled?: boolean;

    /**
     * The Amazon Resource Name (ARN) of the event source.
     * +   *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
     * +   *Amazon DynamoDB Streams* – The ARN of the stream.
     * +   *Amazon Simple Queue Service* – The ARN of the queue.
     * +   *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for cross-account event source mappings).
     * +   *Amazon MQ* – The ARN of the broker.
     * +   *Amazon DocumentDB* – The ARN of the DocumentDB change stream.
     * Create-only property
     */
    EventSourceArn?: string;

    /**
     * Read-only property
     */
    EventSourceMappingArn?: string;

    /**
     * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see Lambda event filtering.
     */
    FilterCriteria?: FilterCriteriaType;

    /**
     * The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's filter criteria.
     */
    KmsKeyArn?: string;

    /**
     * The name or ARN of the Lambda function.
     * **Name formats**
     * +   *Function name* – `MyFunction`.
     * +   *Function ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
     * +   *Version or Alias ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD`.
     * +   *Partial ARN* – `123456789012:function:MyFunction`.
     * The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     */
    FunctionName: string;

    /**
     * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
     * *Default (, , event sources)*: 0
     * *Default (, Kafka, , event sources)*: 500 ms
     * *Related setting:* For SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
     */
    MaximumBatchingWindowInSeconds?: number;

    /**
     * (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
     * The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed
     */
    MaximumRecordAgeInSeconds?: number;

    /**
     * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
     */
    MaximumRetryAttempts?: number;

    /**
     * (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
     */
    ParallelizationFactor?: number;

    /**
     * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
     * +   *LATEST* - Read only new records.
     * +   *TRIM_HORIZON* - Process all available records.
     * +   *AT_TIMESTAMP* - Specify a time from which to start reading records.
     * Create-only property
     */
    StartingPosition?: string;

    /**
     * With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading, in Unix time seconds. `StartingPositionTimestamp` cannot be in the future.
     * Create-only property
     */
    StartingPositionTimestamp?: number;

    /**
     * A list of tags to add to the event source mapping.
     * You must have the `lambda:TagResource`, `lambda:UntagResource`, and `lambda:ListTags` permissions for your principal to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     */
    Tags?: TagType[];

    /**
     * The name of the Kafka topic.
     */
    Topics?: string[];

    /**
     * (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
     */
    Queues?: string[];

    /**
     * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
     */
    SourceAccessConfigurations?: SourceAccessConfigurationType[];

    /**
     * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
     */
    TumblingWindowInSeconds?: number;

    /**
     * (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.
     * Valid Values: `ReportBatchItemFailures`
     */
    FunctionResponseTypes?: string[];

    /**
     * The self-managed Apache Kafka cluster for your event source.
     * Create-only property
     */
    SelfManagedEventSource?: SelfManagedEventSourceType;

    /**
     * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
     * Create-only property
     */
    AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfigType;

    /**
     * Specific configuration settings for a self-managed Apache Kafka event source.
     * Create-only property
     */
    SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfigType;

    /**
     * (Amazon SQS only) The scaling configuration for the event source. For more information, see Configuring maximum concurrency for Amazon SQS event sources.
     */
    ScalingConfig?: ScalingConfigType;

    /**
     * Specific configuration settings for a DocumentDB event source.
     */
    DocumentDBEventSourceConfig?: DocumentDBEventSourceConfigType;

    /**
     * (Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see provisioned mode.
     */
    ProvisionedPollerConfig?: ProvisionedPollerConfigType;

    /**
     * The metrics configuration for your event source. For more information, see Event source mapping metrics.
     */
    MetricsConfig?: MetricsConfigType;
  };
}
