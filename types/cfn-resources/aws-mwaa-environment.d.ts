/**
 * TypeScript definitions for AWS::MWAA::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MWAA::Environment
 */
export namespace AWS_MWAA_Environment {
  /**
   * Customer-defined identifier for the environment, unique per customer region.
   */
  export type EnvironmentNameType = {};

  /**
   * The status of the environment.
   */
  export type EnvironmentStatusType = {};

  export type UpdateStatusType = {};

  /**
   * The error associated with an update request.
   */
  export type UpdateErrorType = {
    ErrorCode?: ErrorCodeType;

    ErrorMessage?: ErrorMessageType;
  };

  export type AirflowArnType = {};

  /**
   * ARN for the MWAA environment.
   */
  export type EnvironmentArnType = {};

  /**
   * ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment.
   */
  export type S3BucketArnType = {};

  /**
   * When the environment resource was created.
   */
  export type CreatedAtType = {};

  /**
   * When the update request was created.
   */
  export type UpdateCreatedAtType = {};

  /**
   * Url endpoint for the environment's Airflow UI.
   */
  export type WebserverUrlType = {};

  /**
   * IAM role to be used by tasks.
   */
  export type ExecutionRoleArnType = {};

  /**
   * IAM role to be used by MWAA to perform AWS API calls on behalf of the customer.
   */
  export type ServiceRoleArnType = {};

  /**
   * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption.
   * You can specify the CMK using any of the following:
   * Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.
   * Key alias. For example, alias/ExampleAlias.
   * Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.
   * Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
   * AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
   */
  export type KmsKeyType = {};

  /**
   * Version of airflow to deploy to the environment.
   */
  export type AirflowVersionType = {};

  /**
   * Represents an S3 prefix relative to the root of an S3 bucket.
   */
  export type RelativePathType = {};

  export type ConfigKeyType = {};

  export type ConfigValueType = {};

  export type SecurityGroupIdType = {};

  export type SubnetIdType = {};

  export type CloudWatchLogGroupArnType = {};

  export type LoggingEnabledType = {};

  export type LoggingLevelType = {};

  /**
   * Templated configuration for airflow processes and backing infrastructure.
   */
  export type EnvironmentClassType = {};

  /**
   * Maximum worker compute units.
   */
  export type MaxWorkersType = {};

  /**
   * Minimum worker compute units.
   */
  export type MinWorkersType = {};

  /**
   * Maximum webserver compute units.
   */
  export type MaxWebserversType = {};

  /**
   * Minimum webserver compute units.
   */
  export type MinWebserversType = {};

  /**
   * Scheduler compute units.
   */
  export type SchedulersType = {};

  /**
   * Configures the network resources of the environment.
   */
  export type NetworkConfigurationType = {
    /**
     * A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones.
     */
    SubnetIds?: SubnetIdType[];

    /**
     * A list of security groups to use for the environment.
     */
    SecurityGroupIds?: SecurityGroupIdType[];
  };

  /**
   * Logging configuration for the environment.
   */
  export type LoggingConfigurationType = {
    DagProcessingLogs?: ModuleLoggingConfigurationType;

    SchedulerLogs?: ModuleLoggingConfigurationType;

    WebserverLogs?: ModuleLoggingConfigurationType;

    WorkerLogs?: ModuleLoggingConfigurationType;

    TaskLogs?: ModuleLoggingConfigurationType;
  };

  /**
   * Configures logging for the environment.
   */
  export type LoggingConfigurationInputType = {
    DagProcessingLogs?: ModuleLoggingConfigurationInputType;

    SchedulerLogs?: ModuleLoggingConfigurationInputType;

    WebserverLogs?: ModuleLoggingConfigurationInputType;

    WorkerLogs?: ModuleLoggingConfigurationInputType;

    TaskLogs?: ModuleLoggingConfigurationInputType;
  };

  /**
   * Logging configuration for a specific airflow component.
   */
  export type ModuleLoggingConfigurationType = {
    Enabled?: LoggingEnabledType;

    LogLevel?: LoggingLevelType;

    CloudWatchLogGroupArn?: CloudWatchLogGroupArnType;
  };

  /**
   * Configures airflow component logging for the environment.
   */
  export type ModuleLoggingConfigurationInputType = {
    Enabled?: LoggingEnabledType;

    LogLevel?: LoggingLevelType;
  };

  /**
   * Details about the last update performed on the environment.
   */
  export type LastUpdateType = {
    Status?: UpdateStatusType;

    CreatedAt?: UpdateCreatedAtType;

    Error?: UpdateErrorType;
  };

  /**
   * The error code associated with an error.
   */
  export type ErrorCodeType = {};

  /**
   * Error message describing a failed operation.
   */
  export type ErrorMessageType = {};

  /**
   * Represents an version ID for an S3 object.
   */
  export type S3ObjectVersionType = {};

  /**
   * Start time for the weekly maintenance window.
   */
  export type WeeklyMaintenanceWindowStartType = {};

  /**
   * Choice for mode of webserver access including over public internet or via private VPC endpoint.
   */
  export type WebserverAccessModeType = {};

  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
   */
  export type EndpointManagementType = {};

  /**
   * The celery executor queue associated with the environment.
   */
  export type CeleryExecutorQueueType = {};

  /**
   * The database VPC endpoint service name.
   */
  export type DatabaseVpcEndpointServiceType = {};

  /**
   * The webserver VPC endpoint service name, applicable if private webserver access mode selected.
   */
  export type WebserverVpcEndpointServiceType = {};

  /**
   * Resource schema for AWS::MWAA::Environment
   */
  export type EnvironmentResourceType = {
    /**
     * Create-only property
     */
    Name: EnvironmentNameType;

    /**
     * Read-only property
     */
    Arn?: EnvironmentArnType;

    /**
     * Read-only property
     */
    WebserverUrl?: WebserverUrlType;

    ExecutionRoleArn?: ExecutionRoleArnType;

    /**
     * Create-only property
     */
    KmsKey?: KmsKeyType;

    AirflowVersion?: AirflowVersionType;

    SourceBucketArn?: S3BucketArnType;

    DagS3Path?: RelativePathType;

    PluginsS3Path?: RelativePathType;

    PluginsS3ObjectVersion?: S3ObjectVersionType;

    RequirementsS3Path?: RelativePathType;

    RequirementsS3ObjectVersion?: S3ObjectVersionType;

    StartupScriptS3Path?: RelativePathType;

    StartupScriptS3ObjectVersion?: S3ObjectVersionType;

    /**
     * Key/value pairs representing Airflow configuration variables.
     * Keys are prefixed by their section:
     * [core]
     * dags_folder={AIRFLOW_HOME}/dags
     * Would be represented as
     * "core.dags_folder": "{AIRFLOW_HOME}/dags"
     */
    AirflowConfigurationOptions?: Record<string, any>;

    EnvironmentClass?: EnvironmentClassType;

    MaxWorkers?: MaxWorkersType;

    MinWorkers?: MinWorkersType;

    MaxWebservers?: MaxWebserversType;

    MinWebservers?: MinWebserversType;

    Schedulers?: SchedulersType;

    NetworkConfiguration?: NetworkConfigurationType;

    LoggingConfiguration?: LoggingConfigurationType;

    WeeklyMaintenanceWindowStart?: WeeklyMaintenanceWindowStartType;

    /**
     * A map of tags for the environment.
     */
    Tags?: Record<string, any>;

    WebserverAccessMode?: WebserverAccessModeType;

    /**
     * Create-only property
     */
    EndpointManagement?: EndpointManagementType;

    /**
     * Read-only property
     */
    CeleryExecutorQueue?: CeleryExecutorQueueType;

    /**
     * Read-only property
     */
    DatabaseVpcEndpointService?: DatabaseVpcEndpointServiceType;

    /**
     * Read-only property
     */
    WebserverVpcEndpointService?: WebserverVpcEndpointServiceType;
  };
}
