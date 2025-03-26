/**
 * TypeScript definitions for AWS::SSMContacts::Rotation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSMContacts::Rotation.
 */
export namespace AWS_SSMContacts_Rotation {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
   */
  export type HandOffTimeType = {};

  /**
   * StartTime and EndTime for the Shift
   */
  export type CoverageTimeType = {
    StartTime: HandOffTimeType;

    EndTime: HandOffTimeType;
  };

  /**
   * Information about the days of the week included in on-call rotation coverage.
   */
  export type ShiftCoverageType = {
    DayOfWeek: DayOfWeekType;

    /**
     * Information about when an on-call shift begins and ends.
     */
    CoverageTimes: CoverageTimeType[];
  };

  /**
   * The day of the week when weekly recurring on-call shift rotations begin.
   */
  export type DayOfWeekType = {};

  /**
   * DayOfWeek for Month and HandOff Time for Monthly Recurring Rotation.
   */
  export type MonthlySettingType = {
    /**
     * The day of the month when monthly recurring on-call rotations begin.
     */
    DayOfMonth: number;

    HandOffTime: HandOffTimeType;
  };

  /**
   * DayOfWeek for Rotation and HandOff Time for Weekly Recurring Rotation.
   */
  export type WeeklySettingType = {
    DayOfWeek: DayOfWeekType;

    HandOffTime: HandOffTimeType;
  };

  /**
   * Handoff time for Daily Recurring Rotation.
   */
  export type DailySettingType = {
    HandOffTime: HandOffTimeType;
  };

  /**
   * Information about when an on-call rotation is in effect and how long the rotation period lasts.
   */
  export type RecurrenceSettingsType = {
    /**
     * Information about on-call rotations that recur monthly.
     */
    MonthlySettings?: MonthlySettingType[];

    /**
     * Information about on-call rotations that recur weekly.
     */
    WeeklySettings?: WeeklySettingType[];

    /**
     * Information about on-call rotations that recur daily.
     */
    DailySettings?: HandOffTimeType[];

    /**
     * Number of Oncalls per shift.
     */
    NumberOfOnCalls?: number;

    /**
     * The number of days, weeks, or months a single rotation lasts.
     */
    RecurrenceMultiplier?: number;

    /**
     * Information about the days of the week included in on-call rotation coverage.
     */
    ShiftCoverages?: ShiftCoverageType[];
  };

  /**
   * Resource Type definition for AWS::SSMContacts::Rotation.
   */
  export type RotationResourceType = {
    /**
     * Name of the Rotation
     */
    Name: string;

    /**
     * Members of the rotation
     */
    ContactIds: string[];

    /**
     * Start time of the first shift of Oncall Schedule
     */
    StartTime: string;

    /**
     * TimeZone Identifier for the Oncall Schedule
     */
    TimeZoneId: string;

    Recurrence: RecurrenceSettingsType;

    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the rotation.
     * Read-only property
     */
    Arn?: string;
  };
}
