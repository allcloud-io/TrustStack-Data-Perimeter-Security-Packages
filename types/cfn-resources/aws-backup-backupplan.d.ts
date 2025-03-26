/**
 * TypeScript definitions for AWS::Backup::BackupPlan
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Backup::BackupPlan
 */
export namespace AWS_Backup_BackupPlan {
  export type BackupPlanResourceTypeType = {
    BackupPlanName: string;

    AdvancedBackupSettings?: AdvancedBackupSettingResourceTypeType[];

    BackupPlanRule: BackupRuleResourceTypeType[];
  };

  export type BackupRuleResourceTypeType = {
    RuleName: string;

    TargetBackupVault: string;

    StartWindowMinutes?: number;

    CompletionWindowMinutes?: number;

    ScheduleExpression?: string;

    ScheduleExpressionTimezone?: string;

    IndexActions?: IndexActionsResourceTypeType[];

    RecoveryPointTags?: Record<string, any>;

    CopyActions?: CopyActionResourceTypeType[];

    Lifecycle?: LifecycleResourceTypeType;

    EnableContinuousBackup?: boolean;
  };

  export type AdvancedBackupSettingResourceTypeType = {
    BackupOptions: Record<string, any>;

    ResourceType: string;
  };

  export type CopyActionResourceTypeType = {
    Lifecycle?: LifecycleResourceTypeType;

    DestinationBackupVaultArn: string;
  };

  export type IndexActionsResourceTypeType = {
    ResourceTypes?: ResourceTypesType;
  };

  export type ResourceTypesType = {};

  export type ResourceTypeType = {};

  export type LifecycleResourceTypeType = {
    MoveToColdStorageAfterDays?: number;

    DeleteAfterDays?: number;

    OptInToArchiveForSupportedResources?: boolean;
  };

  /**
   * Resource Type definition for AWS::Backup::BackupPlan
   */
  export type BackupPlanResourceType = {
    BackupPlan: BackupPlanResourceTypeType;

    BackupPlanTags?: Record<string, any>;

    /**
     * Read-only property
     */
    BackupPlanArn?: string;

    /**
     * Read-only property
     */
    BackupPlanId?: string;

    /**
     * Read-only property
     */
    VersionId?: string;
  };
}
