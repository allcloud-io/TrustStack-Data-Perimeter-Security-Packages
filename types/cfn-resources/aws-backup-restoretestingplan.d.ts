/**
 * TypeScript definitions for AWS::Backup::RestoreTestingPlan
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Backup::RestoreTestingPlan Resource Type
 */
export namespace AWS_Backup_RestoreTestingPlan {
  export type RestoreTestingRecoveryPointSelectionType = {
    Algorithm: RestoreTestingRecoveryPointSelectionAlgorithmType;

    SelectionWindowDays?: number;

    RecoveryPointTypes: RestoreTestingRecoveryPointTypeType[];

    IncludeVaults: string[];

    ExcludeVaults?: string[];
  };

  export type RestoreTestingRecoveryPointSelectionAlgorithmType = {};

  export type RestoreTestingRecoveryPointTypeType = {};

  export type RestoreTestingScheduleStatusType = {};

  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Definition of AWS::Backup::RestoreTestingPlan Resource Type
   */
  export type RestoreTestingPlanResourceType = {
    RecoveryPointSelection: RestoreTestingRecoveryPointSelectionType;

    /**
     * Read-only property
     */
    RestoreTestingPlanArn?: string;

    /**
     * Create-only property
     */
    RestoreTestingPlanName: string;

    ScheduleExpression: string;

    ScheduleExpressionTimezone?: string;

    ScheduleStatus?: RestoreTestingScheduleStatusType;

    StartWindowHours?: number;

    Tags?: TagType[];
  };
}
