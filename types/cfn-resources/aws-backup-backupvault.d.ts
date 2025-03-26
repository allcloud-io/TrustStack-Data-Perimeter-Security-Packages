/**
 * TypeScript definitions for AWS::Backup::BackupVault
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Backup::BackupVault
 */
export namespace AWS_Backup_BackupVault {
  export type NotificationObjectTypeType = {
    BackupVaultEvents: string[];

    SNSTopicArn: string;
  };

  export type LockConfigurationTypeType = {
    MinRetentionDays: number;

    MaxRetentionDays?: number;

    ChangeableForDays?: number;
  };

  export type BackupVaultNamePatternType = {};

  /**
   * Resource Type definition for AWS::Backup::BackupVault
   */
  export type BackupVaultResourceType = {
    AccessPolicy?: Record<string, any> | string;

    /**
     * Create-only property
     */
    BackupVaultName: BackupVaultNamePatternType;

    BackupVaultTags?: Record<string, any>;

    /**
     * Create-only property
     */
    EncryptionKeyArn?: string;

    Notifications?: NotificationObjectTypeType;

    LockConfiguration?: LockConfigurationTypeType;

    /**
     * Read-only property
     */
    BackupVaultArn?: string;
  };
}
