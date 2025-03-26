/**
 * TypeScript definitions for AWS::IVS::StorageConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::StorageConfiguration
 */
export namespace AWS_IVS_StorageConfiguration {
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * A complex type that describes an S3 location where recorded videos will be stored.
   */
  export type S3StorageConfigurationType = {
    /**
     * Location (S3 bucket name) where recorded videos will be stored. Note that the StorageConfiguration and S3 bucket must be in the same region as the Composition.
     */
    BucketName: string;
  };

  /**
   * Resource Type definition for AWS::IVS::StorageConfiguration
   */
  export type StorageConfigurationResourceType = {
    /**
     * Storage Configuration ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * Storage Configuration Name.
     * Create-only property
     */
    Name?: string;

    /**
     * Create-only property
     */
    S3: S3StorageConfigurationType;

    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    Tags?: TagType[];
  };
}
