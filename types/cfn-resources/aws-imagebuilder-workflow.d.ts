/**
 * TypeScript definitions for AWS::ImageBuilder::Workflow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::Workflow
 */
export namespace AWS_ImageBuilder_Workflow {
  /**
   * Resource schema for AWS::ImageBuilder::Workflow
   */
  export type WorkflowResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the workflow.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the workflow.
     * Create-only property
     */
    Name: string;

    /**
     * The version of the workflow.
     * Create-only property
     */
    Version: string;

    /**
     * The description of the workflow.
     * Create-only property
     */
    Description?: string;

    /**
     * The change description of the workflow.
     * Create-only property
     */
    ChangeDescription?: string;

    /**
     * The type of the workflow denotes whether the workflow is used to build, test, or distribute.
     * Create-only property
     */
    Type: string;

    /**
     * The data of the workflow.
     * Create-only property
     */
    Data?: string;

    /**
     * The uri of the workflow.
     * Create-only property
     */
    Uri?: string;

    /**
     * The KMS key identifier used to encrypt the workflow.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * The tags associated with the workflow.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
