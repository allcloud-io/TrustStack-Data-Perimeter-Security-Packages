/**
 * TypeScript definitions for AWS::SES::MailManagerArchive
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SES::MailManagerArchive Resource Type
 */
export namespace AWS_SES_MailManagerArchive {
  export type ArchiveRetentionType = {};

  export type ArchiveStateType = {};

  export type RetentionPeriodType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::SES::MailManagerArchive Resource Type
   */
  export type MailManagerArchiveResourceType = {
    /**
     * Read-only property
     */
    ArchiveArn?: string;

    /**
     * Read-only property
     */
    ArchiveId?: string;

    ArchiveName?: string;

    /**
     * Read-only property
     */
    ArchiveState?: ArchiveStateType;

    /**
     * Create-only property
     */
    KmsKeyArn?: string;

    Retention?: ArchiveRetentionType;

    Tags?: TagType[];
  };
}
