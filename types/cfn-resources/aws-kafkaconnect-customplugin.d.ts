/**
 * TypeScript definitions for AWS::KafkaConnect::CustomPlugin
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_KafkaConnect_CustomPlugin {
  /**
   * A key-value pair to associate with a resource.
   */
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
   * Details about the custom plugin file.
   */
  export type CustomPluginFileDescriptionType = {
    /**
     * The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file.
     */
    FileMd5?: string;

    /**
     * The size in bytes of the custom plugin file. You can use it to validate the file.
     */
    FileSize?: number;
  };

  /**
   * Information about the location of a custom plugin.
   */
  export type CustomPluginLocationType = {
    S3Location: S3LocationType;
  };

  /**
   * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.
   */
  export type S3LocationType = {
    /**
     * The Amazon Resource Name (ARN) of an S3 bucket.
     */
    BucketArn: string;

    /**
     * The file key for an object in an S3 bucket.
     */
    FileKey: string;

    /**
     * The version of an object in an S3 bucket.
     */
    ObjectVersion?: string;
  };

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type CustomPluginResourceType = {
    /**
     * The name of the custom plugin.
     * Create-only property
     */
    Name: string;

    /**
     * A summary description of the custom plugin.
     * Create-only property
     */
    Description?: string;

    /**
     * The Amazon Resource Name (ARN) of the custom plugin to use.
     * Read-only property
     */
    CustomPluginArn?: string;

    /**
     * The type of the plugin file.
     * Create-only property
     */
    ContentType: string;

    /**
     * Read-only property
     */
    FileDescription?: CustomPluginFileDescriptionType;

    /**
     * Create-only property
     */
    Location: CustomPluginLocationType;

    /**
     * The revision of the custom plugin.
     * Read-only property
     */
    Revision?: number;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
