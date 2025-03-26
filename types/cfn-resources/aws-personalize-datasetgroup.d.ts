/**
 * TypeScript definitions for AWS::Personalize::DatasetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::Personalize::DatasetGroup.
 */
export namespace AWS_Personalize_DatasetGroup {
  /**
   * Resource Schema for AWS::Personalize::DatasetGroup.
   */
  export type DatasetGroupResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     * Read-only property
     */
    DatasetGroupArn?: string;

    /**
     * The name for the new dataset group.
     * Create-only property
     */
    Name: string;

    /**
     * The Amazon Resource Name(ARN) of a AWS Key Management Service (KMS) key used to encrypt the datasets.
     * Create-only property
     */
    KmsKeyArn?: string;

    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.
     * Create-only property
     */
    RoleArn?: string;

    /**
     * The domain of a Domain dataset group.
     * Create-only property
     */
    Domain?: string;
  };
}
