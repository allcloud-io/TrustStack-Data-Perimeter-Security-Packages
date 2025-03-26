/**
 * TypeScript definitions for AWS::IoT::JobTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Job templates enable you to preconfigure jobs so that you can deploy them to multiple sets of target devices.
 */
export namespace AWS_IoT_JobTemplate {
  /**
   * Allows you to create an exponential rate of rollout for a job.
   */
  export type ExponentialRolloutRateType = {
    /**
     * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout.
     */
    BaseRatePerMinute: BaseRatePerMinuteType;

    /**
     * The exponential factor to increase the rate of rollout for a job.
     */
    IncrementFactor: IncrementFactorType;

    /**
     * The criteria to initiate the increase in rate of rollout for a job.
     */
    RateIncreaseCriteria: RateIncreaseCriteriaType;
  };

  export type BaseRatePerMinuteType = {};

  export type IncrementFactorType = {};

  export type RateIncreaseCriteriaType = {
    NumberOfNotifiedThings?: NumberOfNotifiedThingsType;

    NumberOfSucceededThings?: NumberOfSucceededThingsType;
  };

  export type NumberOfNotifiedThingsType = {};

  export type NumberOfSucceededThingsType = {};

  export type MaximumPerMinuteType = {};

  /**
   * The criteria that determine when and how a job abort takes place.
   */
  export type AbortCriteriaType = {
    /**
     * The type of job action to take to initiate the job abort.
     */
    Action: ActionType;

    /**
     * The type of job execution failures that can initiate a job abort.
     */
    FailureType: FailureTypeType;

    /**
     * The minimum number of things which must receive job execution notifications before the job can be aborted.
     */
    MinNumberOfExecutedThings: MinNumberOfExecutedThingsType;

    /**
     * The minimum percentage of job execution failures that must occur to initiate the job abort.
     */
    ThresholdPercentage: ThresholdPercentageType;
  };

  export type ActionType = {};

  export type FailureTypeType = {};

  export type MinNumberOfExecutedThingsType = {};

  export type ThresholdPercentageType = {};

  /**
   * Specifies the amount of time, in minutes, this device has to finish execution of this job.
   */
  export type InProgressTimeoutInMinutesType = {};

  /**
   * The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.
   */
  export type RoleArnType = {};

  /**
   * How number (in seconds) pre-signed URLs are valid.
   */
  export type ExpiresInSecType = {};

  /**
   * Specifies how many times a failure type should be retried.
   */
  export type RetryCriteriaType = {
    NumberOfRetries?: number;

    FailureType?: JobRetryFailureTypeType;
  };

  export type JobRetryFailureTypeType = {};

  /**
   * Specifies a start time and duration for a scheduled Job.
   */
  export type MaintenanceWindowType = {
    StartTime?: string;

    DurationInMinutes?: number;
  };

  /**
   * Specifies target package version ARNs for a software update job.
   */
  export type DestinationPackageVersionType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * Job templates enable you to preconfigure jobs so that you can deploy them to multiple sets of target devices.
   */
  export type JobTemplateResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Optional for copying a JobTemplate from a pre-existing Job configuration.
     * Create-only property
     */
    JobArn?: string;

    /**
     * Create-only property
     */
    JobTemplateId: string;

    /**
     * A description of the Job Template.
     * Create-only property
     */
    Description: string;

    /**
     * The job document. Required if you don't specify a value for documentSource.
     * Create-only property
     */
    Document?: string;

    /**
     * An S3 link to the job document to use in the template. Required if you don't specify a value for document.
     * Create-only property
     */
    DocumentSource?: string;

    /**
     * Specifies the amount of time each device has to finish its execution of the job.
     * Create-only property
     */
    TimeoutConfig?: Record<string, any>;

    /**
     * Allows you to create a staged rollout of a job.
     * Create-only property
     */
    JobExecutionsRolloutConfig?: Record<string, any>;

    /**
     * The criteria that determine when and how a job abort takes place.
     * Create-only property
     */
    AbortConfig?: Record<string, any>;

    /**
     * Configuration for pre-signed S3 URLs.
     * Create-only property
     */
    PresignedUrlConfig?: Record<string, any>;

    /**
     * Create-only property
     */
    JobExecutionsRetryConfig?: Record<string, any>;

    /**
     * Create-only property
     */
    MaintenanceWindows?: MaintenanceWindowType[];

    /**
     * Create-only property
     */
    DestinationPackageVersions?: DestinationPackageVersionType[];

    /**
     * Metadata that can be used to manage the JobTemplate.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
