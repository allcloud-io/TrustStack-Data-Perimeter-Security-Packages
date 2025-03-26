/**
 * TypeScript definitions for AWS::Glue::Job
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Job
 */
export namespace AWS_Glue_Job {
  export type DefaultArgumentsType = {
    Key?: string;

    Value?: string;
  };

  export type NonOverridableArgumentsType = {
    Key?: string;

    Value?: string;
  };

  export type JobCommandType = {
    /**
     * The name of the job command
     */
    Name?: string;

    /**
     * The Python version being used to execute a Python shell job.
     */
    PythonVersion?: string;

    /**
     * Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment
     */
    Runtime?: string;

    /**
     * Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job
     */
    ScriptLocation?: string;
  };

  export type ConnectionsListType = {
    /**
     * A list of connections used by the job.
     */
    Connections?: string[];
  };

  export type ExecutionPropertyType = {
    /**
     * The maximum number of concurrent runs allowed for the job.
     */
    MaxConcurrentRuns?: number;
  };

  export type NotificationPropertyType = {
    /**
     * It is the number of minutes to wait before sending a job run delay notification after a job run starts
     */
    NotifyDelayAfter?: number;
  };

  /**
   * Resource Type definition for AWS::Glue::Job
   */
  export type JobResourceType = {
    /**
     * Specifies the connections used by a job
     */
    Connections?: ConnectionsListType;

    /**
     * The maximum number of times to retry this job after a JobRun fails
     */
    MaxRetries?: number;

    /**
     * A description of the job.
     */
    Description?: string;

    /**
     * The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.
     */
    Timeout?: number;

    /**
     * The number of capacity units that are allocated to this job.
     */
    AllocatedCapacity?: number;

    /**
     * The name you assign to the job definition
     * Create-only property
     */
    Name?: string;

    /**
     * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
     */
    Role: string;

    /**
     * The default arguments for this job, specified as name-value pairs.
     */
    DefaultArguments?: Record<string, any>;

    /**
     * Specifies configuration properties of a notification.
     */
    NotificationProperty?: NotificationPropertyType;

    /**
     * TThe type of predefined worker that is allocated when a job runs.
     */
    WorkerType?: string;

    /**
     * Indicates whether the job is run with a standard or flexible execution class.
     */
    ExecutionClass?: string;

    /**
     * This field is reserved for future use.
     */
    LogUri?: string;

    /**
     * The code that executes a job.
     */
    Command: JobCommandType;

    /**
     * Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
     */
    GlueVersion?: string;

    /**
     * The maximum number of concurrent runs that are allowed for this job.
     */
    ExecutionProperty?: ExecutionPropertyType;

    /**
     * The name of the SecurityConfiguration structure to be used with this job.
     */
    SecurityConfiguration?: string;

    /**
     * The number of workers of a defined workerType that are allocated when a job runs.
     */
    NumberOfWorkers?: number;

    /**
     * The tags to use with this job.
     */
    Tags?: Record<string, any>;

    /**
     * The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.
     */
    MaxCapacity?: number;

    /**
     * Non-overridable arguments for this job, specified as name-value pairs.
     */
    NonOverridableArguments?: Record<string, any>;

    /**
     * Property description not available.
     */
    MaintenanceWindow?: string;

    /**
     * Property description not available.
     */
    JobMode?: string;

    /**
     * Property description not available.
     */
    JobRunQueuingEnabled?: boolean;
  };
}
