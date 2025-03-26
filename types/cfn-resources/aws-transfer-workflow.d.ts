/**
 * TypeScript definitions for AWS::Transfer::Workflow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Transfer::Workflow
 */
export namespace AWS_Transfer_Workflow {
  /**
   * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
   */
  export type S3TagType = {
    /**
     * The name assigned to the tag that you create.
     */
    Key: string;

    /**
     * The value that corresponds to the key.
     */
    Value: string;
  };

  /**
   * Specifies the details for an EFS file.
   */
  export type EfsInputFileLocationType = {
    /**
     * Specifies the EFS filesystem that contains the file.
     */
    FileSystemId?: string;

    /**
     * The name assigned to the file when it was created in EFS. You use the object path to retrieve the object.
     */
    Path?: string;
  };

  /**
   * Specifies the details for a S3 file.
   */
  export type S3InputFileLocationType = {
    /**
     * Specifies the S3 bucket that contains the file.
     */
    Bucket?: string;

    /**
     * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
     */
    Key?: string;
  };

  /**
   * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
   */
  export type InputFileLocationType = {
    S3FileLocation?: S3InputFileLocationType;

    EfsFileLocation?: EfsInputFileLocationType;
  };

  /**
   * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
   */
  export type S3FileLocationType = {
    S3FileLocation?: S3InputFileLocationType;
  };

  /**
   * The basic building block of a workflow.
   */
  export type WorkflowStepType = {
    /**
     * Details for a step that performs a file copy.
     */
    CopyStepDetails?: Record<string, any>;

    /**
     * Details for a step that invokes a lambda function.
     */
    CustomStepDetails?: Record<string, any>;

    /**
     * Details for a step that performs a file decryption.
     */
    DecryptStepDetails?: Record<string, any>;

    /**
     * Details for a step that deletes the file.
     */
    DeleteStepDetails?: Record<string, any>;

    /**
     * Details for a step that creates one or more tags.
     */
    TagStepDetails?: Record<string, any>;

    Type?: string;
  };

  /**
   * Creates a key-value pair for a specific resource.
   */
  export type TagType = {
    /**
     * The name assigned to the tag that you create.
     */
    Key: string;

    /**
     * Contains one or more values that you assigned to the key name you create.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::Transfer::Workflow
   */
  export type WorkflowResourceType = {
    /**
     * Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.
     * Create-only property
     */
    OnExceptionSteps?: WorkflowStepType[];

    /**
     * Specifies the details for the steps that are in the specified workflow.
     * Create-only property
     */
    Steps: WorkflowStepType[];

    /**
     * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
     */
    Tags?: TagType[];

    /**
     * A textual description for the workflow.
     * Create-only property
     */
    Description?: string;

    /**
     * A unique identifier for the workflow.
     * Read-only property
     */
    WorkflowId?: string;

    /**
     * Specifies the unique Amazon Resource Name (ARN) for the workflow.
     * Read-only property
     */
    Arn?: string;
  };
}
