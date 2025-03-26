/**
 * TypeScript definitions for AWS::Scheduler::ScheduleGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Scheduler::ScheduleGroup Resource Type
 */
export namespace AWS_Scheduler_ScheduleGroup {
  /**
   * Specifies the state of the schedule group.
   */
  export type ScheduleGroupStateType = {};

  /**
   * Tag to associate with the resource.
   */
  export type TagType = {
    /**
     * Key for the tag
     */
    Key: string;

    /**
     * Value for the tag
     */
    Value: string;
  };

  /**
   * Definition of AWS::Scheduler::ScheduleGroup Resource Type
   */
  export type ScheduleGroupResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the schedule group.
     * Read-only property
     */
    Arn?: string;

    /**
     * The time at which the schedule group was created.
     * Read-only property
     */
    CreationDate?: string;

    /**
     * The time at which the schedule group was last modified.
     * Read-only property
     */
    LastModificationDate?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Read-only property
     */
    State?: ScheduleGroupStateType;

    /**
     * The list of tags to associate with the schedule group.
     */
    Tags?: TagType[];
  };
}
