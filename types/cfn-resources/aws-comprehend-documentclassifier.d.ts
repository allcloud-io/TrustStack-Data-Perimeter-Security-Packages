/**
 * TypeScript definitions for AWS::Comprehend::DocumentClassifier
 * Generated from CloudFormation Resource Schema
 */

/**
 * Document Classifier enables training document classifier models.
 */
export namespace AWS_Comprehend_DocumentClassifier {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type DocumentClassifierInputDataConfigType = {
    AugmentedManifests?: AugmentedManifestsListItemType[];

    DataFormat?: string;

    LabelDelimiter?: string;

    DocumentType?: string;

    Documents?: DocumentClassifierDocumentsType;

    DocumentReaderConfig?: DocumentReaderConfigType;

    S3Uri?: S3UriType;

    TestS3Uri?: S3UriType;
  };

  export type AugmentedManifestsListItemType = {
    AttributeNames: string[];

    S3Uri: S3UriType;

    Split?: string;
  };

  export type DocumentClassifierDocumentsType = {
    S3Uri: S3UriType;

    TestS3Uri?: S3UriType;
  };

  export type DocumentReaderConfigType = {
    DocumentReadAction: string;

    DocumentReadMode?: string;

    FeatureTypes?: string[];
  };

  export type DocumentClassifierOutputDataConfigType = {
    KmsKeyId?: KmsKeyIdType;

    S3Uri?: S3UriType;
  };

  export type VpcConfigType = {
    SecurityGroupIds: string[];

    Subnets: string[];
  };

  export type S3UriType = {};

  export type KmsKeyIdType = {};

  /**
   * Document Classifier enables training document classifier models.
   */
  export type DocumentClassifierResourceType = {
    /**
     * Create-only property
     */
    DataAccessRoleArn: string;

    /**
     * Create-only property
     */
    InputDataConfig: DocumentClassifierInputDataConfigType;

    /**
     * Create-only property
     */
    OutputDataConfig?: DocumentClassifierOutputDataConfigType;

    /**
     * Create-only property
     */
    LanguageCode: string;

    /**
     * Create-only property
     */
    ModelKmsKeyId?: KmsKeyIdType;

    ModelPolicy?: string;

    /**
     * Create-only property
     */
    DocumentClassifierName: string;

    /**
     * Create-only property
     */
    Mode?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    VersionName?: string;

    /**
     * Create-only property
     */
    VolumeKmsKeyId?: KmsKeyIdType;

    /**
     * Create-only property
     */
    VpcConfig?: VpcConfigType;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
