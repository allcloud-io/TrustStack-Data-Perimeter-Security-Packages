/**
 * TypeScript definitions for AWS::QuickSight::RefreshSchedule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::RefreshSchedule Resource Type.
 */
export namespace AWS_QuickSight_RefreshSchedule {
  export type RefreshScheduleMapType = {
    /**
     * <p>An unique identifier for the refresh schedule.</p>
     */
    ScheduleId?: string;

    /**
     * <p>Information about the schedule frequency.</p>
     */
    ScheduleFrequency?: Record<string, any>;

    /**
     * <p>The date time after which refresh is to be scheduled</p>
     */
    StartAfterDateTime?: string;

    RefreshType?: string;
  };

  /**
   * Definition of the AWS::QuickSight::RefreshSchedule Resource Type.
   */
  export type RefreshScheduleResourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the data source.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AwsAccountId?: string;

    /**
     * Create-only property
     */
    DataSetId?: string;

    Schedule?: RefreshScheduleMapType;
  };
}
