/**
 * TypeScript definitions for AWS::Forecast::Dataset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::Forecast::Dataset
 */
export namespace AWS_Forecast_Dataset {
  export type AttributesType = {};

  /**
   * KMS key used to encrypt the Dataset data
   */
  export type KmsKeyArnType = {};

  /**
   * The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.
   */
  export type RoleArnType = {};

  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  export type KeyType = {};

  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  export type ValueType = {};

  /**
   * Resource Type Definition for AWS::Forecast::Dataset
   */
  export type DatasetResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * A name for the dataset
     * Create-only property
     */
    DatasetName: string;

    /**
     * The dataset type
     */
    DatasetType: string;

    /**
     * Frequency of data collection. This parameter is required for RELATED_TIME_SERIES
     */
    DataFrequency?: string;

    /**
     * The domain associated with the dataset
     */
    Domain: string;

    EncryptionConfig?: Record<string, any>;

    Schema: Record<string, any>;

    Tags?: Record<string, any>[];
  };
}
