/**
 * TypeScript definitions for AWS::Kinesis::Stream
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Kinesis::Stream
 */
export namespace AWS_Kinesis_Stream {
  /**
   * When specified, enables or updates the mode of stream. Default is PROVISIONED.
   */
  export type StreamModeDetailsType = {
    /**
     * The mode of the stream
     */
    StreamMode: string;
  };

  /**
   * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream. Removing this property from your stack template and updating your stack disables encryption.
   */
  export type StreamEncryptionType = {
    /**
     * The encryption type to use. The only valid value is KMS.
     */
    EncryptionType: string;

    /**
     * The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.
     */
    KeyId: string;
  };

  /**
   * An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::Kinesis::Stream
   */
  export type StreamResourceType = {
    /**
     * The mode in which the stream is running.
     * Default: {"StreamMode":"PROVISIONED"}
     */
    StreamModeDetails?: StreamModeDetailsType;

    /**
     * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.
     */
    StreamEncryption?: StreamEncryptionType;

    /**
     * The Amazon resource name (ARN) of the Kinesis stream
     * Read-only property
     */
    Arn?: string;

    /**
     * The number of hours for the data records that are stored in shards to remain accessible.
     */
    RetentionPeriodHours?: number;

    /**
     * An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.
     */
    Tags?: TagType[];

    /**
     * The name of the Kinesis stream.
     * Create-only property
     */
    Name?: string;

    /**
     * The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.
     */
    ShardCount?: number;
  };
}
