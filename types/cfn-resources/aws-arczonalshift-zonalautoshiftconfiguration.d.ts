/**
 * TypeScript definitions for AWS::ARCZonalShift::ZonalAutoshiftConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ARCZonalShift::ZonalAutoshiftConfiguration Resource Type
 */
export namespace AWS_ARCZonalShift_ZonalAutoshiftConfiguration {
  export type ZonalAutoshiftStatusType = {};

  export type ControlConditionType = {
    Type: ControlConditionTypeType;

    AlarmIdentifier: string;
  };

  export type ControlConditionTypeType = {};

  export type PracticeRunConfigurationType = {
    BlockingAlarms?: ControlConditionType[];

    OutcomeAlarms: ControlConditionType[];

    BlockedDates?: string[];

    BlockedWindows?: string[];
  };

  /**
   * Definition of AWS::ARCZonalShift::ZonalAutoshiftConfiguration Resource Type
   */
  export type ZonalAutoshiftConfigurationResourceType = {
    ZonalAutoshiftStatus?: ZonalAutoshiftStatusType;

    PracticeRunConfiguration?: PracticeRunConfigurationType;

    /**
     * Create-only property
     */
    ResourceIdentifier?: string;
  };
}
