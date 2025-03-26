/**
 * TypeScript definitions for AWS::Backup::BackupSelection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Backup::BackupSelection
 */
export namespace AWS_Backup_BackupSelection {
  export type BackupSelectionResourceTypeType = {
    IamRoleArn: string;

    ListOfTags?: ConditionResourceTypeType[];

    Resources?: string[];

    SelectionName: string;

    NotResources?: string[];

    Conditions?: Record<string, any>;
  };

  export type ConditionParameterType = {
    ConditionKey?: string;

    ConditionValue?: string;
  };

  export type ConditionResourceTypeType = {
    ConditionKey: string;

    ConditionValue: string;

    ConditionType: string;
  };

  /**
   * Resource Type definition for AWS::Backup::BackupSelection
   */
  export type BackupSelectionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    BackupPlanId: string;

    /**
     * Create-only property
     */
    BackupSelection: BackupSelectionResourceTypeType;

    /**
     * Read-only property
     */
    SelectionId?: string;
  };
}
