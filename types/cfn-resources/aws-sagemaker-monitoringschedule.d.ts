/**
 * TypeScript definitions for AWS::SageMaker::MonitoringSchedule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::MonitoringSchedule
 */
export namespace AWS_SageMaker_MonitoringSchedule {
  /**
   * The configuration object that specifies the monitoring schedule and defines the monitoring job.
   */
  export type MonitoringScheduleConfigType = {
    MonitoringJobDefinition?: MonitoringJobDefinitionType;

    /**
     * Name of the job definition
     */
    MonitoringJobDefinitionName?: string;

    MonitoringType?: MonitoringTypeType;

    ScheduleConfig?: ScheduleConfigType;
  };

  /**
   * The type of monitoring job.
   */
  export type MonitoringTypeType = {};

  /**
   * Defines the monitoring job.
   */
  export type MonitoringJobDefinitionType = {
    BaselineConfig?: BaselineConfigType;

    /**
     * Sets the environment variables in the Docker container
     */
    Environment?: Record<string, any>;

    MonitoringAppSpecification: MonitoringAppSpecificationType;

    MonitoringInputs: MonitoringInputsType;

    MonitoringOutputConfig: MonitoringOutputConfigType;

    MonitoringResources: MonitoringResourcesType;

    NetworkConfig?: NetworkConfigType;

    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    RoleArn: string;

    StoppingCondition?: StoppingConditionType;
  };

  /**
   * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
   */
  export type BaselineConfigType = {
    ConstraintsResource?: ConstraintsResourceType;

    StatisticsResource?: StatisticsResourceType;
  };

  /**
   * The baseline constraints resource for a monitoring job.
   */
  export type ConstraintsResourceType = {
    /**
     * The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.
     */
    S3Uri?: S3UriType;
  };

  /**
   * The baseline statistics resource for a monitoring job.
   */
  export type StatisticsResourceType = {
    /**
     * The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
     */
    S3Uri?: S3UriType;
  };

  /**
   * The Amazon S3 URI.
   */
  export type S3UriType = {};

  /**
   * Container image configuration object for the monitoring job.
   */
  export type MonitoringAppSpecificationType = {
    /**
     * An array of arguments for the container used to run the monitoring job.
     */
    ContainerArguments?: ContainerArgumentType[];

    /**
     * Specifies the entrypoint for a container used to run the monitoring job.
     */
    ContainerEntrypoint?: string[];

    /**
     * The container image to be run by the monitoring job.
     */
    ImageUri: string;

    /**
     * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
     */
    PostAnalyticsProcessorSourceUri?: S3UriType;

    /**
     * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers
     */
    RecordPreprocessorSourceUri?: S3UriType;
  };

  /**
   * Arguments for the container used to run the monitoring job.
   */
  export type ContainerArgumentType = {};

  /**
   * The array of inputs for the monitoring job.
   */
  export type MonitoringInputsType = {};

  /**
   * The inputs for a monitoring job.
   */
  export type MonitoringInputType = {
    EndpointInput?: EndpointInputType;

    BatchTransformInput?: BatchTransformInputType;
  };

  /**
   * The endpoint for a monitoring job.
   */
  export type EndpointInputType = {
    EndpointName: EndpointNameType;

    /**
     * Path to the filesystem where the endpoint data is available to the container.
     */
    LocalPath: string;

    /**
     * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
     */
    S3DataDistributionType?: string;

    /**
     * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
     */
    S3InputMode?: string;

    /**
     * Indexes or names of the features to be excluded from analysis
     */
    ExcludeFeaturesAttribute?: string;
  };

  /**
   * The batch transform input for a monitoring job.
   */
  export type BatchTransformInputType = {
    /**
     * A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.
     */
    DataCapturedDestinationS3Uri: string;

    DatasetFormat: DatasetFormatType;

    /**
     * Path to the filesystem where the endpoint data is available to the container.
     */
    LocalPath: string;

    /**
     * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
     */
    S3DataDistributionType?: string;

    /**
     * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
     */
    S3InputMode?: string;

    /**
     * Indexes or names of the features to be excluded from analysis
     */
    ExcludeFeaturesAttribute?: string;
  };

  /**
   * The output configuration for monitoring jobs.
   */
  export type MonitoringOutputConfigType = {
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
     */
    KmsKeyId?: string;

    /**
     * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
     */
    MonitoringOutputs: MonitoringOutputType[];
  };

  /**
   * The output object for a monitoring job.
   */
  export type MonitoringOutputType = {
    S3Output: S3OutputType;
  };

  /**
   * Information about where and how to store the results of a monitoring job.
   */
  export type S3OutputType = {
    /**
     * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
     */
    LocalPath: string;

    /**
     * Whether to upload the results of the monitoring job continuously or after the job completes.
     */
    S3UploadMode?: string;

    /**
     * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
     */
    S3Uri: string;
  };

  /**
   * Identifies the resources to deploy for a monitoring job.
   */
  export type MonitoringResourcesType = {
    ClusterConfig: ClusterConfigType;
  };

  /**
   * Configuration for the cluster used to run model monitoring jobs.
   */
  export type ClusterConfigType = {
    /**
     * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
     */
    InstanceCount: number;

    /**
     * The ML compute instance type for the processing job.
     */
    InstanceType: string;

    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
     */
    VolumeKmsKeyId?: string;

    /**
     * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
     */
    VolumeSizeInGB: number;
  };

  /**
   * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
   */
  export type NetworkConfigType = {
    /**
     * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
     */
    EnableInterContainerTrafficEncryption?: boolean;

    /**
     * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
     */
    EnableNetworkIsolation?: boolean;

    VpcConfig?: VpcConfigType;
  };

  /**
   * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
   */
  export type VpcConfigType = {
    /**
     * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
     */
    SecurityGroupIds: string[];

    /**
     * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
     */
    Subnets: string[];
  };

  /**
   * Specifies a time limit for how long the monitoring job is allowed to run.
   */
  export type StoppingConditionType = {
    /**
     * The maximum runtime allowed in seconds.
     */
    MaxRuntimeInSeconds: number;
  };

  /**
   * Configuration details about the monitoring schedule.
   */
  export type ScheduleConfigType = {
    /**
     * A cron expression or 'NOW' that describes details about the monitoring schedule.
     */
    ScheduleExpression: string;

    /**
     * Data Analysis start time, e.g. -PT1H
     */
    DataAnalysisStartTime?: DataAnalysisTimeStringType;

    /**
     * Data Analysis end time, e.g. PT0H
     */
    DataAnalysisEndTime?: DataAnalysisTimeStringType;
  };

  /**
   * Analysis time in ISO duration format
   */
  export type DataAnalysisTimeStringType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Summary of information about monitoring job
   */
  export type MonitoringExecutionSummaryType = {
    /**
     * The time at which the monitoring job was created.
     */
    CreationTime: string;

    EndpointName?: EndpointNameType;

    /**
     * Contains the reason a monitoring job failed, if it failed.
     */
    FailureReason?: string;

    /**
     * A timestamp that indicates the last time the monitoring job was modified.
     */
    LastModifiedTime: string;

    /**
     * The status of the monitoring job.
     */
    MonitoringExecutionStatus: string;

    MonitoringScheduleName: MonitoringScheduleNameType;

    /**
     * The Amazon Resource Name (ARN) of the monitoring job.
     */
    ProcessingJobArn?: string;

    /**
     * The time the monitoring job was scheduled.
     */
    ScheduledTime: string;
  };

  /**
   * The name of the endpoint used to run the monitoring job.
   */
  export type EndpointNameType = {};

  /**
   * The name of the monitoring schedule.
   */
  export type MonitoringScheduleNameType = {};

  /**
   * The dataset format of the data to monitor
   */
  export type DatasetFormatType = {
    Csv?: CsvType;

    Json?: JsonType;

    Parquet?: ParquetType;
  };

  /**
   * The CSV format
   */
  export type CsvType = {
    /**
     * A boolean flag indicating if given CSV has header
     */
    Header?: boolean;
  };

  /**
   * The Json format
   */
  export type JsonType = {
    /**
     * A boolean flag indicating if it is JSON line format
     */
    Line?: boolean;
  };

  /**
   * A flag indicating if the dataset format is Parquet
   */
  export type ParquetType = {};

  /**
   * Resource Type definition for AWS::SageMaker::MonitoringSchedule
   */
  export type MonitoringScheduleResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the monitoring schedule.
     * Read-only property
     */
    MonitoringScheduleArn?: string;

    /**
     * Create-only property
     */
    MonitoringScheduleName: MonitoringScheduleNameType;

    MonitoringScheduleConfig: MonitoringScheduleConfigType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The time at which the schedule was created.
     * Read-only property
     */
    CreationTime?: string;

    EndpointName?: EndpointNameType;

    /**
     * Contains the reason a monitoring job failed, if it failed.
     */
    FailureReason?: string;

    /**
     * A timestamp that indicates the last time the monitoring job was modified.
     * Read-only property
     */
    LastModifiedTime?: string;

    /**
     * Describes metadata on the last execution to run, if there was one.
     */
    LastMonitoringExecutionSummary?: MonitoringExecutionSummaryType;

    /**
     * The status of a schedule job.
     */
    MonitoringScheduleStatus?: string;
  };
}
