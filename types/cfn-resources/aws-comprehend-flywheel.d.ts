/**
 * TypeScript definitions for AWS::Comprehend::Flywheel
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Comprehend::Flywheel resource creates an Amazon Comprehend Flywheel that enables customer to train their model.
 */
export namespace AWS_Comprehend_Flywheel {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TaskConfigType = {
    LanguageCode: string;

    DocumentClassificationConfig?: DocumentClassificationConfigType;

    EntityRecognitionConfig?: EntityRecognitionConfigType;
  };

  export type DataSecurityConfigType = {
    ModelKmsKeyId?: KmsKeyIdType;

    VolumeKmsKeyId?: KmsKeyIdType;

    DataLakeKmsKeyId?: KmsKeyIdType;

    VpcConfig?: VpcConfigType;
  };

  export type VpcConfigType = {
    SecurityGroupIds: string[];

    Subnets: string[];
  };

  export type KmsKeyIdType = {};

  export type EntityTypesListItemType = {
    Type: string;
  };

  export type EntityRecognitionConfigType = {
    EntityTypes?: EntityTypesListItemType[];
  };

  export type DocumentClassificationConfigType = {
    Mode: string;

    Labels?: string[];
  };

  /**
   * The AWS::Comprehend::Flywheel resource creates an Amazon Comprehend Flywheel that enables customer to train their model.
   */
  export type FlywheelResourceType = {
    ActiveModelArn?: string;

    DataAccessRoleArn: string;

    /**
     * Create-only property
     */
    DataLakeS3Uri: string;

    DataSecurityConfig?: DataSecurityConfigType;

    /**
     * Create-only property
     */
    FlywheelName: string;

    /**
     * Create-only property
     */
    ModelType?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    TaskConfig?: TaskConfigType;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
