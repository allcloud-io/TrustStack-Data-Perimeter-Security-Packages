/**
 * TypeScript definitions for AWS::Glue::Trigger
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Trigger
 */
export namespace AWS_Glue_Trigger {
  /**
   * Defines a condition under which a trigger fires.
   */
  export type ConditionType = {
    /**
     * The name of the job whose JobRuns this condition applies to, and on which this trigger waits.
     */
    JobName?: string;

    /**
     * The name of the crawler to which this condition applies.
     */
    CrawlerName?: string;

    /**
     * The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.
     */
    State?: string;

    /**
     * The state of the crawler to which this condition applies.
     */
    CrawlState?: string;

    /**
     * A logical operator.
     */
    LogicalOperator?: string;
  };

  /**
   * Specifies configuration properties of a job run notification.
   */
  export type NotificationPropertyType = {
    /**
     * After a job run starts, the number of minutes to wait before sending a job run delay notification
     */
    NotifyDelayAfter?: number;
  };

  /**
   * The actions initiated by this trigger.
   */
  export type ActionType = {
    /**
     * Specifies configuration properties of a job run notification.
     */
    NotificationProperty?: NotificationPropertyType;

    /**
     * The name of the crawler to be used with this action.
     */
    CrawlerName?: string;

    /**
     * The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.
     */
    Timeout?: number;

    /**
     * The name of a job to be executed.
     */
    JobName?: string;

    /**
     * The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.
     */
    Arguments?: Record<string, any>;

    /**
     * The name of the SecurityConfiguration structure to be used with this action.
     */
    SecurityConfiguration?: string;
  };

  /**
   * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
   */
  export type EventBatchingConditionType = {
    /**
     * Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
     */
    BatchSize: number;

    /**
     * Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.
     */
    BatchWindow?: number;
  };

  /**
   * The predicate of this trigger, which defines when it will fire.
   */
  export type PredicateType = {
    /**
     * An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.
     */
    Logical?: string;

    /**
     * A list of the conditions that determine when the trigger will fire.
     */
    Conditions?: ConditionType[];
  };

  /**
   * Resource Type definition for AWS::Glue::Trigger
   */
  export type TriggerResourceType = {
    /**
     * The type of trigger that this is.
     * Create-only property
     */
    Type: string;

    /**
     * Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.
     */
    StartOnCreation?: boolean;

    /**
     * A description of this trigger.
     */
    Description?: string;

    /**
     * The actions initiated by this trigger.
     */
    Actions: ActionType[];

    /**
     * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
     */
    EventBatchingCondition?: EventBatchingConditionType;

    /**
     * The name of the workflow associated with the trigger.
     * Create-only property
     */
    WorkflowName?: string;

    /**
     * A cron expression used to specify the schedule.
     */
    Schedule?: string;

    /**
     * The tags to use with this trigger.
     */
    Tags?: Record<string, any>;

    /**
     * The name of the trigger.
     * Create-only property
     */
    Name?: string;

    /**
     * The predicate of this trigger, which defines when it will fire.
     */
    Predicate?: PredicateType;
  };
}
