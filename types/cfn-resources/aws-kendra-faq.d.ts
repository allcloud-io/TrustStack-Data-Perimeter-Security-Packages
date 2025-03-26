/**
 * TypeScript definitions for AWS::Kendra::Faq
 * Generated from CloudFormation Resource Schema
 */

/**
 * A Kendra FAQ resource
 */
export namespace AWS_Kendra_Faq {
  /**
   * A label for tagging Kendra resources
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * List of tags
   */
  export type TagListType = {};

  /**
   * Unique ID of Index
   */
  export type IndexIdType = {};

  /**
   * Description of the FAQ
   */
  export type DescriptionType = {};

  /**
   * The code for a language.
   */
  export type LanguageCodeType = {};

  /**
   * Format of the input file
   */
  export type FileFormatType = {};

  export type S3PathType = {
    Bucket: S3BucketNameType;

    Key: S3ObjectKeyType;
  };

  export type S3BucketNameType = {};

  export type S3ObjectKeyType = {};

  export type FaqNameType = {};

  export type RoleArnType = {};

  /**
   * Unique ID of the FAQ
   */
  export type IdType = {};

  /**
   * A Kendra FAQ resource
   */
  export type FaqResourceType = {
    /**
     * Read-only property
     */
    Id?: IdType;

    /**
     * Index ID
     * Create-only property
     */
    IndexId: IndexIdType;

    /**
     * FAQ name
     * Create-only property
     */
    Name: FaqNameType;

    /**
     * FAQ description
     * Create-only property
     */
    Description?: DescriptionType;

    /**
     * FAQ file format
     * Create-only property
     */
    FileFormat?: FileFormatType;

    /**
     * FAQ S3 path
     * Create-only property
     */
    S3Path: S3PathType;

    /**
     * FAQ role ARN
     * Create-only property
     */
    RoleArn: RoleArnType;

    /**
     * Tags for labeling the FAQ
     */
    Tags?: TagListType;

    /**
     * Read-only property
     */
    Arn?: string;

    LanguageCode?: LanguageCodeType;
  };
}
