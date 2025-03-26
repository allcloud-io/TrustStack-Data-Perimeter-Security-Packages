/**
 * TypeScript definitions for AWS::EMRServerless::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EMRServerless::Application Type
 */
export namespace AWS_EMRServerless_Application {
  /**
   * The cpu architecture of an application.
   */
  export type ArchitectureType = {};

  /**
   * The image configuration.
   */
  export type ImageConfigurationInputType = {
    /**
     * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
     */
    ImageUri?: string;
  };

  export type InteractiveConfigurationType = {
    /**
     * Enables an Apache Livy endpoint that you can connect to and run interactive jobs
     */
    LivyEndpointEnabled?: boolean;

    /**
     * Enabled you to connect an Application to Amazon EMR Studio to run interactive workloads in a notebook
     */
    StudioEnabled?: boolean;
  };

  /**
   * Runtime configuration for batch and interactive JobRun.
   */
  export type ConfigurationListType = {};

  /**
   * The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
   */
  export type SchedulerConfigurationType = {
    /**
     * The maximum duration in minutes for the job in QUEUED state. If scheduler configuration is enabled on your application, the default value is 360 minutes (6 hours). The valid range is from 15 to 720.
     */
    QueueTimeoutMinutes?: number;

    /**
     * The maximum concurrent job runs on this application. If scheduler configuration is enabled on your application, the default value is 15. The valid range is 1 to 1000.
     */
    MaxConcurrentRuns?: number;
  };

  /**
   * Monitoring configuration for batch and interactive JobRun.
   */
  export type MonitoringConfigurationType = {
    /**
     * S3 monitoring configurations for a JobRun.
     */
    S3MonitoringConfiguration?: S3MonitoringConfigurationType;

    /**
     * Managed log persistence configurations for a JobRun.
     */
    ManagedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfigurationType;

    /**
     * CloudWatch logging configurations for a JobRun.
     */
    CloudWatchLoggingConfiguration?: CloudWatchLoggingConfigurationType;

    /**
     * Prometheus monitoring configurations for a JobRun.
     */
    PrometheusMonitoringConfiguration?: PrometheusMonitoringConfigurationType;
  };

  export type S3MonitoringConfigurationType = {
    LogUri?: UriStringType;

    /**
     * KMS key ARN to encrypt the logs stored in given s3
     */
    EncryptionKeyArn?: EncryptionKeyArnType;
  };

  export type ManagedPersistenceMonitoringConfigurationType = {
    /**
     * If set to false, managed logging will be turned off. Defaults to true.
     */
    Enabled?: boolean;

    /**
     * KMS key ARN to encrypt the logs stored in managed persistence
     */
    EncryptionKeyArn?: EncryptionKeyArnType;
  };

  export type CloudWatchLoggingConfigurationType = {
    /**
     * If set to false, CloudWatch logging will be turned off. Defaults to false.
     */
    Enabled?: boolean;

    /**
     * Log-group name to produce log-streams on CloudWatch. If undefined, logs will be produced in a default log-group /aws/emr-serverless
     */
    LogGroupName?: LogGroupNameType;

    /**
     * Log-stream name prefix by which log-stream names will start in the CloudWatch Log-group.
     */
    LogStreamNamePrefix?: LogStreamNamePrefixType;

    /**
     * KMS key ARN to encrypt the logs stored in given CloudWatch log-group.
     */
    EncryptionKeyArn?: EncryptionKeyArnType;

    /**
     * The specific log-streams which need to be uploaded to CloudWatch.
     */
    LogTypeMap?: LogTypeMapKeyValuePairType[];
  };

  export type PrometheusMonitoringConfigurationType = {
    /**
     * The remote write URL in the Amazon Managed Service for Prometheus workspace to send metrics to.
     */
    RemoteWriteUrl?: RemoteWriteUrlType;
  };

  export type LogTypeMapKeyValuePairType = {
    Key: WorkerTypeStringType;

    Value: LogTypeListType;
  };

  /**
   * List of Applicable values: [STDOUT, STDERR, HIVE_LOG, TEZ_AM, SYSTEM_LOGS]
   */
  export type LogTypeListType = {};

  export type InitialCapacityConfigMapType = {};

  export type InitialCapacityConfigKeyValuePairType = {
    /**
     * Worker type for an analytics framework.
     */
    Key: string;

    Value: InitialCapacityConfigType;
  };

  export type InitialCapacityConfigType = {
    /**
     * Initial count of workers to be initialized when an Application is started. This count will be continued to be maintained until the Application is stopped
     */
    WorkerCount: number;

    WorkerConfiguration: WorkerConfigurationType;
  };

  export type WorkerConfigurationType = {
    /**
     * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
     */
    Cpu: CpuSizeType;

    /**
     * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
     */
    Memory: MemorySizeType;

    /**
     * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
     */
    Disk?: DiskSizeType;

    /**
     * Per worker DiskType resource. Shuffle optimized and Standard are only supported types and specifying diskType is optional
     */
    DiskType?: DiskTypeType;
  };

  export type MaximumAllowedResourcesType = {
    /**
     * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
     */
    Cpu: CpuSizeType;

    /**
     * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
     */
    Memory: MemorySizeType;

    /**
     * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
     */
    Disk?: DiskSizeType;
  };

  /**
   * Configuration for Auto Start of Application
   */
  export type AutoStartConfigurationType = {
    /**
     * If set to true, the Application will automatically start. Defaults to true.
     */
    Enabled?: boolean;
  };

  /**
   * Configuration for Auto Stop of Application
   */
  export type AutoStopConfigurationType = {
    /**
     * If set to true, the Application will automatically stop after being idle. Defaults to true.
     */
    Enabled?: boolean;

    /**
     * The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.
     */
    IdleTimeoutMinutes?: number;
  };

  export type NetworkConfigurationType = {
    /**
     * The ID of the subnets in the VPC to which you want to connect your job or application.
     */
    SubnetIds?: SubnetIdType[];

    /**
     * The ID of the security groups in the VPC to which you want to connect your job or application.
     */
    SecurityGroupIds?: SecurityGroupIdType[];
  };

  /**
   * Identifier of a subnet
   */
  export type SubnetIdType = {};

  /**
   * Identifier of a security group
   */
  export type SecurityGroupIdType = {};

  export type UriStringType = {};

  export type RemoteWriteUrlType = {};

  export type EncryptionKeyArnType = {};

  export type ClassificationType = {};

  export type LogGroupNameType = {};

  export type LogStreamNamePrefixType = {};

  export type LogTypeStringType = {};

  export type WorkerTypeStringType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Configuration for a JobRun.
   */
  export type ConfigurationObjectType = {
    /**
     * String with a maximum length of 1024.
     */
    Classification: ClassificationType;

    Properties?: Record<string, any>;

    Configurations?: ConfigurationObjectType[];
  };

  export type SensitivePropertiesMapType = {};

  export type SensitivePropertiesKeyValuePairType = {};

  /**
   * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
   */
  export type CpuSizeType = {};

  /**
   * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
   */
  export type MemorySizeType = {};

  /**
   * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
   */
  export type DiskSizeType = {};

  /**
   * Per worker DiskType resource. Shuffle optimized and Standard are only supported types and specifying diskType is optional
   */
  export type DiskTypeType = {};

  /**
   * The specifications for a worker type.
   */
  export type WorkerTypeSpecificationInputType = {
    ImageConfiguration?: ImageConfigurationInputType;
  };

  export type WorkerTypeSpecificationInputMapType = {};

  /**
   * Resource schema for AWS::EMRServerless::Application Type
   */
  export type ApplicationResourceType = {
    Architecture?: ArchitectureType;

    /**
     * User friendly Application name.
     * Create-only property
     */
    Name?: string;

    /**
     * EMR release label.
     */
    ReleaseLabel: string;

    /**
     * The type of the application
     * Create-only property
     */
    Type: string;

    /**
     * Initial capacity initialized when an Application is started.
     */
    InitialCapacity?: InitialCapacityConfigMapType;

    /**
     * Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.
     */
    MaximumCapacity?: MaximumAllowedResourcesType;

    /**
     * Tag map with key and value
     */
    Tags?: TagType[];

    /**
     * Configuration for Auto Start of Application.
     */
    AutoStartConfiguration?: AutoStartConfigurationType;

    /**
     * Configuration for Auto Stop of Application.
     */
    AutoStopConfiguration?: AutoStopConfigurationType;

    ImageConfiguration?: ImageConfigurationInputType;

    MonitoringConfiguration?: MonitoringConfigurationType;

    RuntimeConfiguration?: ConfigurationListType;

    InteractiveConfiguration?: InteractiveConfigurationType;

    /**
     * Network Configuration for customer VPC connectivity.
     */
    NetworkConfiguration?: NetworkConfigurationType;

    /**
     * The Amazon Resource Name (ARN) of the EMR Serverless Application.
     * Read-only property
     */
    Arn?: string;

    /**
     * The ID of the EMR Serverless Application.
     * Read-only property
     */
    ApplicationId?: string;

    /**
     * The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.
     */
    WorkerTypeSpecifications?: WorkerTypeSpecificationInputMapType;

    /**
     * The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
     */
    SchedulerConfiguration?: SchedulerConfigurationType;
  };
}
