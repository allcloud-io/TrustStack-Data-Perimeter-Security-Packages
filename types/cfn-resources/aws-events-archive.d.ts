/**
 * TypeScript definitions for AWS::Events::Archive
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Events::Archive
 */
export namespace AWS_Events_Archive {
  /**
   * Resource Type definition for AWS::Events::Archive
   */
  export type ArchiveResourceType = {
    /**
     * Create-only property
     */
    ArchiveName?: string;

    /**
     * Create-only property
     */
    SourceArn: string;

    Description?: string;

    EventPattern?: Record<string, any>;

    /**
     * Read-only property
     */
    Arn?: string;

    RetentionDays?: number;
  };
}
