/**
 * TypeScript definitions for AWS::KinesisAnalyticsV2::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see Creating an Application.
 */
export namespace AWS_KinesisAnalyticsV2_Application {
  /**
   * The Amazon Resource Name
   */
  export type ArnType = {};

  /**
   * Specifies the creation parameters for a Kinesis Data Analytics application.
   */
  export type ApplicationConfigurationType = {
    /**
     * The code location and type parameters for a Flink-based Kinesis Data Analytics application.
     */
    ApplicationCodeConfiguration?: ApplicationCodeConfigurationType;

    /**
     * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
     */
    ApplicationSnapshotConfiguration?: ApplicationSnapshotConfigurationType;

    /**
     * Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.
     */
    ApplicationSystemRollbackConfiguration?: ApplicationSystemRollbackConfigurationType;

    /**
     * Describes execution properties for a Flink-based Kinesis Data Analytics application.
     */
    EnvironmentProperties?: EnvironmentPropertiesType;

    /**
     * The creation and update parameters for a Flink-based Kinesis Data Analytics application.
     */
    FlinkApplicationConfiguration?: FlinkApplicationConfigurationType;

    /**
     * The creation and update parameters for a SQL-based Kinesis Data Analytics application.
     */
    SqlApplicationConfiguration?: SqlApplicationConfigurationType;

    /**
     * The configuration parameters for a Kinesis Data Analytics Studio notebook.
     */
    ZeppelinApplicationConfiguration?: ZeppelinApplicationConfigurationType;

    /**
     * The array of descriptions of VPC configurations available to the application.
     */
    VpcConfigurations?: VpcConfigurationsType;
  };

  /**
   * Identifies the run configuration (start parameters) of a Kinesis Data Analytics application. This section is evaluated only on stack updates for applications in running RUNNING state and has no effect during manual application start.
   */
  export type RunConfigurationType = {
    /**
     * Describes the restore behavior of a restarting application.
     */
    ApplicationRestoreConfiguration?: ApplicationRestoreConfigurationType;

    /**
     * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
     */
    FlinkRunConfiguration?: FlinkRunConfigurationType;
  };

  /**
   * Describes the restore behavior of a restarting application.
   */
  export type ApplicationRestoreConfigurationType = {
    /**
     * Specifies how the application should be restored.
     */
    ApplicationRestoreType: string;

    /**
     * The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType.
     */
    SnapshotName?: string;
  };

  /**
   * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
   */
  export type FlinkRunConfigurationType = {
    /**
     * When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. Defaults to false. If you update your application without specifying this parameter, AllowNonRestoredState will be set to false, even if it was previously set to true.
     */
    AllowNonRestoredState?: boolean;
  };

  /**
   * Describes code configuration for an application.
   */
  export type ApplicationCodeConfigurationType = {
    /**
     * The location and type of the application code.
     */
    CodeContent: CodeContentType;

    /**
     * Specifies whether the code content is in text or zip format.
     */
    CodeContentType: string;
  };

  /**
   * Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.
   */
  export type CodeContentType = {
    /**
     * The zip-format code for a Flink-based Kinesis Data Analytics application.
     */
    ZipFileContent?: string;

    /**
     * Information about the Amazon S3 bucket that contains the application code.
     */
    S3ContentLocation?: S3ContentLocationType;

    /**
     * The text-format code for a Flink-based Kinesis Data Analytics application.
     */
    TextContent?: string;
  };

  /**
   * The location of an application or a custom artifact.
   */
  export type S3ContentLocationType = {
    /**
     * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
     */
    BucketARN: ArnType;

    /**
     * The file key for the object containing the application code.
     */
    FileKey: string;

    /**
     * The version of the object containing the application code.
     */
    ObjectVersion?: string;
  };

  /**
   * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
   */
  export type ApplicationSnapshotConfigurationType = {
    /**
     * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
     */
    SnapshotsEnabled: boolean;
  };

  /**
   * Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.
   */
  export type ApplicationSystemRollbackConfigurationType = {
    /**
     * Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.
     */
    RollbackEnabled: boolean;
  };

  /**
   * Describes execution properties for a Flink-based Kinesis Data Analytics application.
   */
  export type EnvironmentPropertiesType = {
    /**
     * Describes the execution property groups.
     */
    PropertyGroups?: PropertyGroupType[];
  };

  /**
   * Property key-value pairs passed into an application.
   */
  export type PropertyGroupType = {
    /**
     * Describes the key of an application execution property key-value pair.
     */
    PropertyGroupId?: string;

    /**
     * Describes the value of an application execution property key-value pair.
     */
    PropertyMap?: Record<string, any>;
  };

  /**
   * Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
   */
  export type FlinkApplicationConfigurationType = {
    /**
     * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.
     */
    CheckpointConfiguration?: CheckpointConfigurationType;

    /**
     * Describes configuration parameters for Amazon CloudWatch logging for an application.
     */
    MonitoringConfiguration?: MonitoringConfigurationType;

    /**
     * Describes parameters for how an application executes multiple tasks simultaneously.
     */
    ParallelismConfiguration?: ParallelismConfigurationType;
  };

  /**
   * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.
   */
  export type CheckpointConfigurationType = {
    /**
     * Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
     */
    ConfigurationType: string;

    /**
     * Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.
     */
    CheckpointingEnabled?: boolean;

    /**
     * Describes the interval in milliseconds between checkpoint operations.
     */
    CheckpointInterval?: number;

    /**
     * Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the CheckpointInterval, the application otherwise performs continual checkpoint operations. For more information, see Tuning Checkpointing in the Apache Flink Documentation.
     */
    MinPauseBetweenCheckpoints?: number;
  };

  /**
   * Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see Monitoring.
   */
  export type MonitoringConfigurationType = {
    /**
     * Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to CUSTOM in order to set the LogLevel or MetricsLevel parameters.
     */
    ConfigurationType: string;

    /**
     * Describes the granularity of the CloudWatch Logs for an application. The Parallelism level is not recommended for applications with a Parallelism over 64 due to excessive costs.
     */
    MetricsLevel?: string;

    /**
     * Describes the verbosity of the CloudWatch Logs for an application.
     */
    LogLevel?: string;
  };

  /**
   * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see Parallel Execution in the Apache Flink Documentation
   */
  export type ParallelismConfigurationType = {
    /**
     * Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
     */
    ConfigurationType: string;

    /**
     * Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see Amazon Kinesis Data Analytics Pricing.
     */
    ParallelismPerKPU?: number;

    /**
     * Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if ParallelismConfiguration:AutoScalingEnabled is set to true.
     */
    Parallelism?: number;

    /**
     * Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.
     */
    AutoScalingEnabled?: boolean;
  };

  /**
   * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
   */
  export type SqlApplicationConfigurationType = {
    /**
     * The array of Input objects describing the input streams used by the application.
     */
    Inputs?: InputType[];
  };

  /**
   * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
   */
  export type InputType = {
    /**
     * The name prefix to use when creating an in-application stream. Suppose that you specify a prefix `"MyInApplicationStream"`. Kinesis Data Analytics then creates one or more (as per the InputParallelism count you specified) in-application streams with the names `"MyInApplicationStream_001"`, `"MyInApplicationStream_002"`, and so on.
     */
    NamePrefix: string;

    /**
     * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
     */
    InputSchema: InputSchemaType;

    /**
     * If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
     */
    KinesisStreamsInput?: KinesisStreamsInputType;

    /**
     * If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
     */
    KinesisFirehoseInput?: KinesisFirehoseInputType;

    /**
     * The InputProcessingConfiguration for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is InputLambdaProcessor.
     */
    InputProcessingConfiguration?: InputProcessingConfigurationType;

    /**
     * Describes the number of in-application streams to create.
     */
    InputParallelism?: InputParallelismType;
  };

  /**
   * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
   */
  export type InputSchemaType = {
    /**
     * Specifies the encoding of the records in the streaming source. For example, UTF-8.
     */
    RecordEncoding?: string;

    /**
     * A list of `RecordColumn` objects.
     */
    RecordColumns: RecordColumnType[];

    /**
     * Specifies the format of the records on the streaming source.
     */
    RecordFormat: RecordFormatType;
  };

  /**
   * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
   * Also used to describe the format of the reference data source.
   */
  export type RecordColumnType = {
    /**
     * A reference to the data element in the streaming input or the reference data source.
     */
    Mapping?: string;

    /**
     * The name of the column that is created in the in-application input stream or reference table.
     */
    Name: string;

    /**
     * The type of column created in the in-application input stream or reference table.
     */
    SqlType: string;
  };

  /**
   * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
   */
  export type RecordFormatType = {
    /**
     * The type of record format.
     */
    RecordFormatType: string;

    /**
     * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
     */
    MappingParameters?: MappingParametersType;
  };

  /**
   * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   */
  export type MappingParametersType = {
    /**
     * Provides additional mapping information when the record format uses delimiters (for example, CSV).
     */
    CSVMappingParameters?: CSVMappingParametersType;

    /**
     * Provides additional mapping information when JSON is the record format on the streaming source.
     */
    JSONMappingParameters?: JSONMappingParametersType;
  };

  /**
   * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the '\n' as the row delimiter and a comma (",") as the column delimiter:
   * `"name1", "address1"`
   * `"name2", "address2"`
   */
  export type CSVMappingParametersType = {
    /**
     * The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
     */
    RecordColumnDelimiter: string;

    /**
     * The row delimiter. For example, in a CSV format, '\n' is the typical row delimiter.
     */
    RecordRowDelimiter: string;
  };

  /**
   * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
   */
  export type JSONMappingParametersType = {
    /**
     * The path to the top-level parent that contains the records.
     */
    RecordRowPath: string;
  };

  /**
   * Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
   */
  export type KinesisStreamsInputType = {
    /**
     * The ARN of the input Kinesis data stream to read.
     */
    ResourceARN: ArnType;
  };

  /**
   * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
   */
  export type KinesisFirehoseInputType = {
    /**
     * The Amazon Resource Name (ARN) of the delivery stream.
     */
    ResourceARN: ArnType;
  };

  /**
   * For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is Amazon Lambda.
   */
  export type InputProcessingConfigurationType = {
    /**
     * The InputLambdaProcessor that is used to preprocess the records in the stream before being processed by your application code.
     */
    InputLambdaProcessor?: InputLambdaProcessorType;
  };

  /**
   * An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.
   */
  export type InputLambdaProcessorType = {
    /**
     * The ARN of the Amazon Lambda function that operates on records in the stream.
     */
    ResourceARN: ArnType;
  };

  /**
   * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.
   */
  export type InputParallelismType = {
    /**
     * The number of in-application streams to create.
     */
    Count?: number;
  };

  /**
   * The configuration of a Kinesis Data Analytics Studio notebook.
   */
  export type ZeppelinApplicationConfigurationType = {
    /**
     * The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.
     */
    CatalogConfiguration?: CatalogConfigurationType;

    /**
     * The monitoring configuration of a Kinesis Data Analytics Studio notebook.
     */
    MonitoringConfiguration?: ZeppelinMonitoringConfigurationType;

    /**
     * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
     */
    DeployAsApplicationConfiguration?: DeployAsApplicationConfigurationType;

    /**
     * A list of CustomArtifactConfiguration objects.
     */
    CustomArtifactsConfiguration?: CustomArtifactsConfigurationType;
  };

  /**
   * The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
   */
  export type CatalogConfigurationType = {
    /**
     * The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
     */
    GlueDataCatalogConfiguration?: GlueDataCatalogConfigurationType;
  };

  /**
   * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
   */
  export type GlueDataCatalogConfigurationType = {
    /**
     * The Amazon Resource Name (ARN) of the database.
     */
    DatabaseARN?: ArnType;
  };

  /**
   * Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see Monitoring.
   */
  export type ZeppelinMonitoringConfigurationType = {
    /**
     * The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`.
     */
    LogLevel?: string;
  };

  /**
   * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
   */
  export type DeployAsApplicationConfigurationType = {
    /**
     * The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
     */
    S3ContentLocation: S3ContentBaseLocationType;
  };

  /**
   * The base location of the Amazon Data Analytics application.
   */
  export type S3ContentBaseLocationType = {
    /**
     * The Amazon Resource Name (ARN) of the S3 bucket.
     */
    BucketARN: ArnType;

    /**
     * The base path for the S3 bucket.
     */
    BasePath?: string;
  };

  /**
   * A list of CustomArtifactConfiguration objects.
   */
  export type CustomArtifactsConfigurationType = {};

  /**
   * The configuration of connectors and user-defined functions.
   */
  export type CustomArtifactConfigurationType = {
    /**
     * Set this to either `UDF` or `DEPENDENCY_JAR`. `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
     */
    ArtifactType: string;

    /**
     * The parameters required to fully specify a Maven reference.
     */
    MavenReference?: MavenReferenceType;

    /**
     * The location of the custom artifacts.
     */
    S3ContentLocation?: S3ContentLocationType;
  };

  /**
   * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
   */
  export type MavenReferenceType = {
    /**
     * The artifact ID of the Maven reference.
     */
    ArtifactId: string;

    /**
     * The group ID of the Maven reference.
     */
    GroupId: string;

    /**
     * The version of the Maven reference.
     */
    Version: string;
  };

  /**
   * The array of descriptions of VPC configurations available to the application.
   */
  export type VpcConfigurationsType = {};

  /**
   * Describes the parameters of a VPC used by the application.
   */
  export type VpcConfigurationType = {
    /**
     * The array of SecurityGroup IDs used by the VPC configuration.
     */
    SecurityGroupIds: string[];

    /**
     * The array of Subnet IDs used by the VPC configuration.
     */
    SubnetIds: string[];
  };

  /**
   * Describes the maintenance configuration for the application.
   */
  export type ApplicationMaintenanceConfigurationType = {
    /**
     * The start time for the maintenance window.
     */
    ApplicationMaintenanceWindowStartTime: string;
  };

  /**
   * A key-value pair that identifies an application.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that's 0 to 256 characters in length.
     */
    Value: string;
  };

  /**
   * Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see Creating an Application.
   */
  export type ApplicationResourceType = {
    /**
     * Use this parameter to configure the application.
     */
    ApplicationConfiguration?: ApplicationConfigurationType;

    /**
     * The description of the application.
     * Default: ""
     */
    ApplicationDescription?: string;

    /**
     * To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.
     * Create-only property
     */
    ApplicationMode?: string;

    /**
     * The name of the application.
     * Create-only property
     */
    ApplicationName?: string;

    /**
     * The runtime environment for the application.
     */
    RuntimeEnvironment: string;

    /**
     * Specifies the IAM role that the application uses to access external resources.
     */
    ServiceExecutionRole: ArnType;

    /**
     * Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.
     */
    RunConfiguration?: RunConfigurationType;

    /**
     * Used to configure start of maintenance window.
     */
    ApplicationMaintenanceConfiguration?: ApplicationMaintenanceConfigurationType;

    /**
     * A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
     */
    Tags?: TagType[];
  };
}
