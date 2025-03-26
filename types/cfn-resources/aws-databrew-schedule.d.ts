/**
 * TypeScript definitions for AWS::DataBrew::Schedule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataBrew::Schedule.
 */
export namespace AWS_DataBrew_Schedule {
  /**
   * Job name
   */
  export type JobNameType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::DataBrew::Schedule.
   */
  export type ScheduleResourceType = {
    JobNames?: JobNameType[];

    /**
     * Schedule cron
     */
    CronExpression: string;

    /**
     * Schedule Name
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
