/**
 * TypeScript definitions for AWS::Personalize::Dataset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Personalize::Dataset.
 */
export namespace AWS_Personalize_Dataset {
  /**
   * Initial DatasetImportJob for the created dataset
   */
  export type DatasetImportJobType = {
    /**
     * The name for the dataset import job.
     */
    JobName?: string;

    /**
     * The ARN of the dataset import job
     */
    DatasetImportJobArn?: string;

    /**
     * The ARN of the dataset that receives the imported data
     */
    DatasetArn?: string;

    /**
     * The Amazon S3 bucket that contains the training data to import.
     */
    DataSource?: Record<string, any>;

    /**
     * The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
     */
    RoleArn?: string;
  };

  /**
   * Resource schema for AWS::Personalize::Dataset.
   */
  export type DatasetResourceType = {
    /**
     * The name for the dataset
     * Create-only property
     */
    Name: string;

    /**
     * The ARN of the dataset
     * Read-only property
     */
    DatasetArn?: string;

    /**
     * The type of dataset
     * Create-only property
     */
    DatasetType: string;

    /**
     * The Amazon Resource Name (ARN) of the dataset group to add the dataset to
     * Create-only property
     */
    DatasetGroupArn: string;

    /**
     * The ARN of the schema to associate with the dataset. The schema defines the dataset fields.
     * Create-only property
     */
    SchemaArn: string;

    DatasetImportJob?: DatasetImportJobType;
  };
}
