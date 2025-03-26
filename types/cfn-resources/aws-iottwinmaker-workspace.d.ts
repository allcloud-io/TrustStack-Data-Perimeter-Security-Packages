/**
 * TypeScript definitions for AWS::IoTTwinMaker::Workspace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTTwinMaker::Workspace
 */
export namespace AWS_IoTTwinMaker_Workspace {
  export type DateTimeFormatType = {};

  /**
   * Resource schema for AWS::IoTTwinMaker::Workspace
   */
  export type WorkspaceResourceType = {
    /**
     * The ID of the workspace.
     * Create-only property
     */
    WorkspaceId: string;

    /**
     * The ARN of the workspace.
     * Read-only property
     */
    Arn?: string;

    /**
     * The description of the workspace.
     */
    Description?: string;

    /**
     * The ARN of the execution role associated with the workspace.
     */
    Role: string;

    /**
     * The ARN of the S3 bucket where resources associated with the workspace are stored.
     */
    S3Location: string;

    /**
     * The date and time when the workspace was created.
     * Read-only property
     */
    CreationDateTime?: DateTimeFormatType;

    /**
     * The date and time of the current update.
     * Read-only property
     */
    UpdateDateTime?: DateTimeFormatType;

    /**
     * A map of key-value pairs to associate with a resource.
     */
    Tags?: Record<string, any>;
  };
}
