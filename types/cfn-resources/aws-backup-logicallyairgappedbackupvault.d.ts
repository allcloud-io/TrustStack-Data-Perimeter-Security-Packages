/**
 * TypeScript definitions for AWS::Backup::LogicallyAirGappedBackupVault
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Backup::LogicallyAirGappedBackupVault
 */
export namespace AWS_Backup_LogicallyAirGappedBackupVault {
  export type NotificationObjectTypeType = {
    BackupVaultEvents: string[];

    SNSTopicArn: string;
  };

  export type BackupVaultNamePatternType = {};

  /**
   * Resource Type definition for AWS::Backup::LogicallyAirGappedBackupVault
   */
  export type LogicallyAirGappedBackupVaultResourceType = {
    AccessPolicy?: Record<string, any> | string;

    /**
     * Create-only property
     */
    BackupVaultName: BackupVaultNamePatternType;

    /**
     * Create-only property
     */
    MinRetentionDays: number;

    /**
     * Create-only property
     */
    MaxRetentionDays: number;

    BackupVaultTags?: Record<string, any>;

    Notifications?: NotificationObjectTypeType;

    /**
     * Read-only property
     */
    EncryptionKeyArn?: string;

    /**
     * Read-only property
     */
    BackupVaultArn?: string;

    /**
     * Read-only property
     */
    VaultState?: string;

    /**
     * Read-only property
     */
    VaultType?: string;
  };
}
