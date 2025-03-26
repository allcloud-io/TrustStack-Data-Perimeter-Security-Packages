/**
 * TypeScript definitions for AWS::InspectorV2::CisScanConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * CIS Scan Configuration resource schema
 */
export namespace AWS_InspectorV2_CisScanConfiguration {
  export type CisSecurityLevelType = {};

  /**
   * Choose a Schedule cadence
   */
  export type ScheduleType = {
    OneTime?: OneTimeScheduleType;

    Daily?: DailyScheduleType;

    Weekly?: WeeklyScheduleType;

    Monthly?: MonthlyScheduleType;
  };

  export type OneTimeScheduleType = {};

  export type DailyScheduleType = {
    StartTime: TimeType;
  };

  export type WeeklyScheduleType = {
    StartTime: TimeType;

    Days: DaysListType;
  };

  export type MonthlyScheduleType = {
    StartTime: TimeType;

    Day: DayType;
  };

  export type TimeType = {
    TimeOfDay: string;

    TimeZone: string;
  };

  export type DaysListType = {};

  export type DayType = {};

  export type CisTargetsType = {
    AccountIds: string[];

    TargetResourceTags: TargetResourceTagsType;
  };

  export type TargetResourceTagsType = {};

  export type TagValueListType = {};

  export type CisTagMapType = {};

  /**
   * CIS Scan Configuration resource schema
   */
  export type CisScanConfigurationResourceType = {
    /**
     * Name of the scan
     */
    ScanName: string;

    SecurityLevel: CisSecurityLevelType;

    Schedule: ScheduleType;

    Targets: CisTargetsType;

    /**
     * CIS Scan configuration unique identifier
     * Read-only property
     */
    Arn?: string;

    Tags?: CisTagMapType;
  };
}
