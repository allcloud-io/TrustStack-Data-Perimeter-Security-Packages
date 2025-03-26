/**
 * TypeScript definitions for AWS::SageMaker::ModelExplainabilityJobDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition
 */
export namespace AWS_SageMaker_ModelExplainabilityJobDefinition {
  /**
   * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
   */
  export type ModelExplainabilityBaselineConfigType = {
    BaseliningJobName?: ProcessingJobNameType;

    ConstraintsResource?: ConstraintsResourceType;
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
   * The Amazon S3 URI.
   */
  export type S3UriType = {};

  /**
   * Container image configuration object for the monitoring job.
   */
  export type ModelExplainabilityAppSpecificationType = {
    /**
     * The container image to be run by the monitoring job.
     */
    ImageUri: string;

    /**
     * The S3 URI to an analysis configuration file
     */
    ConfigUri: S3UriType;

    /**
     * Sets the environment variables in the Docker container
     */
    Environment?: Record<string, any>;
  };

  /**
   * The inputs for a monitoring job.
   */
  export type ModelExplainabilityJobInputType = {
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
     * JSONpath to locate features in JSONlines dataset
     */
    FeaturesAttribute?: string;

    /**
     * Index or JSONpath to locate predicted label(s)
     */
    InferenceAttribute?: string;

    /**
     * Index or JSONpath to locate probabilities
     */
    ProbabilityAttribute?: string;
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
     * JSONpath to locate features in JSONlines dataset
     */
    FeaturesAttribute?: string;

    /**
     * Index or JSONpath to locate predicted label(s)
     */
    InferenceAttribute?: string;

    /**
     * Index or JSONpath to locate probabilities
     */
    ProbabilityAttribute?: string;
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
   * The name of the endpoint used to run the monitoring job.
   */
  export type EndpointNameType = {};

  /**
   * The name of the job definition.
   */
  export type JobDefinitionNameType = {};

  /**
   * The name of a processing job
   */
  export type ProcessingJobNameType = {};

  /**
   * The time offsets in ISO duration format
   */
  export type MonitoringTimeOffsetStringType = {};

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
   * Resource Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition
   */
  export type ModelExplainabilityJobDefinitionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of job definition.
     * Read-only property
     */
    JobDefinitionArn?: string;

    /**
     * Create-only property
     */
    JobDefinitionName?: JobDefinitionNameType;

    /**
     * Create-only property
     */
    ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfigType;

    /**
     * Create-only property
     */
    ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecificationType;

    /**
     * Create-only property
     */
    ModelExplainabilityJobInput: ModelExplainabilityJobInputType;

    /**
     * Create-only property
     */
    ModelExplainabilityJobOutputConfig: MonitoringOutputConfigType;

    /**
     * Create-only property
     */
    JobResources: MonitoringResourcesType;

    /**
     * Create-only property
     */
    NetworkConfig?: NetworkConfigType;

    /**
     * Create-only property
     */
    EndpointName?: EndpointNameType;

    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     * Create-only property
     */
    RoleArn: string;

    /**
     * Create-only property
     */
    StoppingCondition?: StoppingConditionType;

    /**
     * An array of key-value pairs to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The time at which the job definition was created.
     * Read-only property
     */
    CreationTime?: string;
  };
}
