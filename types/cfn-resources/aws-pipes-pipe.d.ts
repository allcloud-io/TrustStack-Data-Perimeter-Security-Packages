/**
 * TypeScript definitions for AWS::Pipes::Pipe
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Pipes::Pipe Resource Type
 */
export namespace AWS_Pipes_Pipe {
  export type AssignPublicIpType = {};

  export type AwsVpcConfigurationType = {
    Subnets: string[];

    SecurityGroups?: string[];

    AssignPublicIp?: AssignPublicIpType;
  };

  export type BatchArrayPropertiesType = {
    Size?: number;
  };

  export type BatchContainerOverridesType = {
    Command?: string[];

    Environment?: BatchEnvironmentVariableType[];

    InstanceType?: string;

    ResourceRequirements?: BatchResourceRequirementType[];
  };

  export type BatchEnvironmentVariableType = {
    Name?: string;

    Value?: string;
  };

  export type BatchJobDependencyType = {
    JobId?: string;

    Type?: BatchJobDependencyTypeType;
  };

  export type BatchJobDependencyTypeType = {};

  export type BatchParametersMapType = {};

  export type BatchResourceRequirementType = {
    Type: BatchResourceRequirementTypeType;

    Value: string;
  };

  export type BatchResourceRequirementTypeType = {};

  export type BatchRetryStrategyType = {
    Attempts?: number;
  };

  export type CapacityProviderStrategyItemType = {
    CapacityProvider: string;

    Weight?: number;

    Base?: number;
  };

  export type CloudwatchLogsLogDestinationType = {
    LogGroupArn?: string;
  };

  export type DeadLetterConfigType = {
    Arn?: string;
  };

  export type DimensionMappingType = {
    DimensionValue: string;

    DimensionValueType: DimensionValueTypeType;

    DimensionName: string;
  };

  export type DimensionValueTypeType = {};

  export type DynamoDBStreamStartPositionType = {};

  export type EcsContainerOverrideType = {
    Command?: string[];

    Cpu?: number;

    Environment?: EcsEnvironmentVariableType[];

    EnvironmentFiles?: EcsEnvironmentFileType[];

    Memory?: number;

    MemoryReservation?: number;

    Name?: string;

    ResourceRequirements?: EcsResourceRequirementType[];
  };

  export type EcsEnvironmentFileType = {
    Type: EcsEnvironmentFileTypeType;

    Value: string;
  };

  export type EcsEnvironmentFileTypeType = {};

  export type EcsEnvironmentVariableType = {
    Name?: string;

    Value?: string;
  };

  export type EcsEphemeralStorageType = {
    SizeInGiB: number;
  };

  export type EcsInferenceAcceleratorOverrideType = {
    DeviceName?: string;

    DeviceType?: string;
  };

  export type EcsResourceRequirementType = {
    Type: EcsResourceRequirementTypeType;

    Value: string;
  };

  export type EcsResourceRequirementTypeType = {};

  export type EcsTaskOverrideType = {
    ContainerOverrides?: EcsContainerOverrideType[];

    Cpu?: string;

    EphemeralStorage?: EcsEphemeralStorageType;

    ExecutionRoleArn?: string;

    InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverrideType[];

    Memory?: string;

    TaskRoleArn?: string;
  };

  export type EpochTimeUnitType = {};

  export type FilterType = {
    Pattern?: string;
  };

  export type FilterCriteriaType = {
    Filters?: FilterType[];
  };

  export type FirehoseLogDestinationType = {
    DeliveryStreamArn?: string;
  };

  export type HeaderParametersMapType = {};

  export type IncludeExecutionDataOptionType = {};

  export type KinesisStreamStartPositionType = {};

  export type LaunchTypeType = {};

  export type LogLevelType = {};

  export type MQBrokerAccessCredentialsType = {};

  export type MSKAccessCredentialsType = {};

  export type MSKStartPositionType = {};

  export type MeasureValueTypeType = {};

  export type MultiMeasureAttributeMappingType = {
    MeasureValue: string;

    MeasureValueType: MeasureValueTypeType;

    MultiMeasureAttributeName: string;
  };

  export type MultiMeasureMappingType = {
    MultiMeasureName: string;

    MultiMeasureAttributeMappings: MultiMeasureAttributeMappingType[];
  };

  export type NetworkConfigurationType = {
    AwsvpcConfiguration?: AwsVpcConfigurationType;
  };

  export type OnPartialBatchItemFailureStreamsType = {};

  export type PipeEnrichmentHttpParametersType = {
    PathParameterValues?: string[];

    HeaderParameters?: HeaderParametersMapType;

    QueryStringParameters?: QueryStringParametersMapType;
  };

  export type PipeEnrichmentParametersType = {
    InputTemplate?: string;

    HttpParameters?: PipeEnrichmentHttpParametersType;
  };

  export type PipeLogConfigurationType = {
    S3LogDestination?: S3LogDestinationType;

    FirehoseLogDestination?: FirehoseLogDestinationType;

    CloudwatchLogsLogDestination?: CloudwatchLogsLogDestinationType;

    Level?: LogLevelType;

    IncludeExecutionData?: IncludeExecutionDataOptionType[];
  };

  export type PipeSourceActiveMQBrokerParametersType = {
    Credentials: MQBrokerAccessCredentialsType;

    QueueName: string;

    BatchSize?: number;

    MaximumBatchingWindowInSeconds?: number;
  };

  export type PipeSourceDynamoDBStreamParametersType = {
    BatchSize?: number;

    DeadLetterConfig?: DeadLetterConfigType;

    OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreamsType;

    MaximumBatchingWindowInSeconds?: number;

    MaximumRecordAgeInSeconds?: number;

    MaximumRetryAttempts?: number;

    ParallelizationFactor?: number;

    StartingPosition: DynamoDBStreamStartPositionType;
  };

  export type PipeSourceKinesisStreamParametersType = {
    BatchSize?: number;

    DeadLetterConfig?: DeadLetterConfigType;

    OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreamsType;

    MaximumBatchingWindowInSeconds?: number;

    MaximumRecordAgeInSeconds?: number;

    MaximumRetryAttempts?: number;

    ParallelizationFactor?: number;

    StartingPosition: KinesisStreamStartPositionType;

    StartingPositionTimestamp?: string;
  };

  export type PipeSourceManagedStreamingKafkaParametersType = {
    TopicName: string;

    StartingPosition?: MSKStartPositionType;

    BatchSize?: number;

    MaximumBatchingWindowInSeconds?: number;

    ConsumerGroupID?: string;

    Credentials?: MSKAccessCredentialsType;
  };

  export type PipeSourceParametersType = {
    FilterCriteria?: FilterCriteriaType;

    KinesisStreamParameters?: PipeSourceKinesisStreamParametersType;

    DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParametersType;

    SqsQueueParameters?: PipeSourceSqsQueueParametersType;

    ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParametersType;

    RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParametersType;

    ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParametersType;

    SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParametersType;
  };

  export type PipeSourceRabbitMQBrokerParametersType = {
    Credentials: MQBrokerAccessCredentialsType;

    QueueName: string;

    VirtualHost?: string;

    BatchSize?: number;

    MaximumBatchingWindowInSeconds?: number;
  };

  export type PipeSourceSelfManagedKafkaParametersType = {
    TopicName: string;

    StartingPosition?: SelfManagedKafkaStartPositionType;

    AdditionalBootstrapServers?: string[];

    BatchSize?: number;

    MaximumBatchingWindowInSeconds?: number;

    ConsumerGroupID?: string;

    Credentials?: SelfManagedKafkaAccessConfigurationCredentialsType;

    /**
     * Optional SecretManager ARN which stores the database credentials
     */
    ServerRootCaCertificate?: string;

    Vpc?: SelfManagedKafkaAccessConfigurationVpcType;
  };

  export type PipeSourceSqsQueueParametersType = {
    BatchSize?: number;

    MaximumBatchingWindowInSeconds?: number;
  };

  export type PipeStateType = {};

  export type PipeTargetBatchJobParametersType = {
    JobDefinition: string;

    JobName: string;

    ArrayProperties?: BatchArrayPropertiesType;

    RetryStrategy?: BatchRetryStrategyType;

    ContainerOverrides?: BatchContainerOverridesType;

    DependsOn?: BatchJobDependencyType[];

    Parameters?: BatchParametersMapType;
  };

  export type PipeTargetCloudWatchLogsParametersType = {
    LogStreamName?: string;

    Timestamp?: string;
  };

  export type PipeTargetEcsTaskParametersType = {
    TaskDefinitionArn: string;

    TaskCount?: number;

    LaunchType?: LaunchTypeType;

    NetworkConfiguration?: NetworkConfigurationType;

    PlatformVersion?: string;

    Group?: string;

    CapacityProviderStrategy?: CapacityProviderStrategyItemType[];

    EnableECSManagedTags?: boolean;

    EnableExecuteCommand?: boolean;

    PlacementConstraints?: PlacementConstraintType[];

    PlacementStrategy?: PlacementStrategyType[];

    PropagateTags?: PropagateTagsType;

    ReferenceId?: string;

    Overrides?: EcsTaskOverrideType;

    Tags?: TagType[];
  };

  export type PipeTargetEventBridgeEventBusParametersType = {
    EndpointId?: string;

    DetailType?: string;

    Source?: string;

    Resources?: string[];

    Time?: string;
  };

  export type PipeTargetHttpParametersType = {
    PathParameterValues?: string[];

    HeaderParameters?: HeaderParametersMapType;

    QueryStringParameters?: QueryStringParametersMapType;
  };

  export type PipeTargetInvocationTypeType = {};

  export type PipeTargetKinesisStreamParametersType = {
    PartitionKey: string;
  };

  export type PipeTargetLambdaFunctionParametersType = {
    InvocationType?: PipeTargetInvocationTypeType;
  };

  export type PipeTargetParametersType = {
    InputTemplate?: string;

    LambdaFunctionParameters?: PipeTargetLambdaFunctionParametersType;

    StepFunctionStateMachineParameters?: PipeTargetStateMachineParametersType;

    KinesisStreamParameters?: PipeTargetKinesisStreamParametersType;

    EcsTaskParameters?: PipeTargetEcsTaskParametersType;

    BatchJobParameters?: PipeTargetBatchJobParametersType;

    SqsQueueParameters?: PipeTargetSqsQueueParametersType;

    HttpParameters?: PipeTargetHttpParametersType;

    RedshiftDataParameters?: PipeTargetRedshiftDataParametersType;

    SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParametersType;

    EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParametersType;

    CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParametersType;

    TimestreamParameters?: PipeTargetTimestreamParametersType;
  };

  export type PipeTargetRedshiftDataParametersType = {
    /**
     * Optional SecretManager ARN which stores the database credentials
     */
    SecretManagerArn?: string;

    /**
     * Redshift Database
     */
    Database: string;

    /**
     * Database user name
     */
    DbUser?: string;

    /**
     * A name for Redshift DataAPI statement which can be used as filter of ListStatement.
     */
    StatementName?: string;

    WithEvent?: boolean;

    /**
     * A list of SQLs.
     */
    Sqls: string[];
  };

  export type PipeTargetSageMakerPipelineParametersType = {
    PipelineParameterList?: SageMakerPipelineParameterType[];
  };

  export type PipeTargetSqsQueueParametersType = {
    MessageGroupId?: string;

    MessageDeduplicationId?: string;
  };

  export type PipeTargetStateMachineParametersType = {
    InvocationType?: PipeTargetInvocationTypeType;
  };

  export type PipeTargetTimestreamParametersType = {
    TimeValue: string;

    EpochTimeUnit?: EpochTimeUnitType;

    TimeFieldType?: TimeFieldTypeType;

    TimestampFormat?: string;

    VersionValue: string;

    DimensionMappings: DimensionMappingType[];

    SingleMeasureMappings?: SingleMeasureMappingType[];

    MultiMeasureMappings?: MultiMeasureMappingType[];
  };

  export type PlacementConstraintType = {
    Type?: PlacementConstraintTypeType;

    Expression?: string;
  };

  export type PlacementConstraintTypeType = {};

  export type PlacementStrategyType = {
    Type?: PlacementStrategyTypeType;

    Field?: string;
  };

  export type PlacementStrategyTypeType = {};

  export type PropagateTagsType = {};

  export type QueryStringParametersMapType = {};

  export type RequestedPipeStateType = {};

  export type S3LogDestinationType = {
    BucketName?: string;

    Prefix?: string;

    BucketOwner?: string;

    OutputFormat?: S3OutputFormatType;
  };

  export type S3OutputFormatType = {};

  export type SageMakerPipelineParameterType = {
    Name: string;

    Value: string;
  };

  export type SelfManagedKafkaAccessConfigurationCredentialsType = {};

  export type SelfManagedKafkaAccessConfigurationVpcType = {
    /**
     * List of SubnetId.
     */
    Subnets?: string[];

    /**
     * List of SecurityGroupId.
     */
    SecurityGroup?: string[];
  };

  export type SelfManagedKafkaStartPositionType = {};

  export type SingleMeasureMappingType = {
    MeasureValue: string;

    MeasureValueType: MeasureValueTypeType;

    MeasureName: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TagMapType = {};

  export type TimeFieldTypeType = {};

  /**
   * Definition of AWS::Pipes::Pipe Resource Type
   */
  export type PipeResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Read-only property
     */
    CurrentState?: PipeStateType;

    Description?: string;

    DesiredState?: RequestedPipeStateType;

    Enrichment?: string;

    EnrichmentParameters?: PipeEnrichmentParametersType;

    KmsKeyIdentifier?: string;

    /**
     * Read-only property
     */
    LastModifiedTime?: string;

    LogConfiguration?: PipeLogConfigurationType;

    /**
     * Create-only property
     */
    Name?: string;

    RoleArn: string;

    /**
     * Create-only property
     */
    Source: string;

    SourceParameters?: PipeSourceParametersType;

    /**
     * Read-only property
     */
    StateReason?: string;

    Tags?: TagMapType;

    Target: string;

    TargetParameters?: PipeTargetParametersType;
  };
}
