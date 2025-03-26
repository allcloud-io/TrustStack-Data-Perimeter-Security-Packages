/**
 * TypeScript definitions for AWS::SSM::MaintenanceWindow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSM::MaintenanceWindow
 */
export namespace AWS_SSM_MaintenanceWindow {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SSM::MaintenanceWindow
   */
  export type MaintenanceWindowResourceType = {
    StartDate?: string;

    Description?: string;

    AllowUnassociatedTargets: boolean;

    Cutoff: number;

    Schedule: string;

    Duration: number;

    ScheduleOffset?: number;

    /**
     * Read-only property
     */
    Id?: string;

    EndDate?: string;

    Tags?: TagType[];

    Name: string;

    ScheduleTimezone?: string;
  };
}
