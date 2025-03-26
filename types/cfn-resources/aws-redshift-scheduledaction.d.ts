/**
 * TypeScript definitions for AWS::Redshift::ScheduledAction
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::Redshift::ScheduledAction` resource creates an Amazon Redshift Scheduled Action.
 */
export namespace AWS_Redshift_ScheduledAction {
  export type ScheduledActionTypeType = {};

  /**
   * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
   */
  export type ResizeClusterMessageType = {
    NodeType?: string;

    NumberOfNodes?: number;

    ClusterType?: string;

    Classic?: boolean;

    ClusterIdentifier: string;
  };

  /**
   * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
   */
  export type PauseClusterMessageType = {
    ClusterIdentifier: string;
  };

  /**
   * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
   */
  export type ResumeClusterMessageType = {
    ClusterIdentifier: string;
  };

  export type timestampType = {};

  /**
   * The `AWS::Redshift::ScheduledAction` resource creates an Amazon Redshift Scheduled Action.
   */
  export type ScheduledActionResourceType = {
    /**
     * The description of the scheduled action.
     */
    ScheduledActionDescription?: string;

    /**
     * The name of the scheduled action. The name must be unique within an account.
     * Create-only property
     */
    ScheduledActionName: string;

    /**
     * The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
     */
    EndTime?: timestampType;

    /**
     * The state of the scheduled action.
     * Read-only property
     */
    State?: string;

    /**
     * The schedule in `at( )` or `cron( )` format.
     */
    Schedule?: string;

    /**
     * The IAM role to assume to run the target action.
     */
    IamRole?: string;

    /**
     * The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.
     */
    StartTime?: timestampType;

    /**
     * If true, the schedule is enabled. If false, the scheduled action does not trigger.
     */
    Enable?: boolean;

    /**
     * A JSON format string of the Amazon Redshift API operation with input parameters.
     */
    TargetAction?: ScheduledActionTypeType;

    /**
     * List of times when the scheduled action will run.
     * Read-only property
     */
    NextInvocations?: timestampType[];
  };
}
