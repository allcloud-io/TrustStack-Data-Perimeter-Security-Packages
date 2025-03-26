/**
 * TypeScript definitions for AWS::IoTTwinMaker::SyncJob
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTTwinMaker::SyncJob
 */
export namespace AWS_IoTTwinMaker_SyncJob {
  export type DateTimeFormatType = {};

  /**
   * Resource schema for AWS::IoTTwinMaker::SyncJob
   */
  export type SyncJobResourceType = {
    /**
     * The ID of the workspace.
     * Create-only property
     */
    WorkspaceId: string;

    /**
     * The source of the SyncJob.
     * Create-only property
     */
    SyncSource: string;

    /**
     * The IAM Role that execute SyncJob.
     * Create-only property
     */
    SyncRole: string;

    /**
     * The date and time when the sync job was created.
     * Read-only property
     */
    CreationDateTime?: DateTimeFormatType;

    /**
     * The date and time when the sync job was updated.
     * Read-only property
     */
    UpdateDateTime?: DateTimeFormatType;

    /**
     * The ARN of the SyncJob.
     * Read-only property
     */
    Arn?: string;

    /**
     * The state of SyncJob.
     * Read-only property
     */
    State?: string;

    /**
     * A key-value pair to associate with a resource.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
