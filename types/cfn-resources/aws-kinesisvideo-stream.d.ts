/**
 * TypeScript definitions for AWS::KinesisVideo::Stream
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::KinesisVideo::Stream
 */
export namespace AWS_KinesisVideo_Stream {
  /**
   * A key-value pair to associated with the Kinesis Video Stream.
   */
  export type TagType = {
    /**
     * The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type Definition for AWS::KinesisVideo::Stream
   */
  export type StreamResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the Kinesis Video stream.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the Kinesis Video stream.
     * Create-only property
     */
    Name?: string;

    /**
     * The number of hours till which Kinesis Video will retain the data in the stream
     */
    DataRetentionInHours?: number;

    /**
     * The name of the device that is writing to the stream.
     */
    DeviceName?: string;

    /**
     * AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.
     */
    KmsKeyId?: string;

    /**
     * The media type of the stream. Consumers of the stream can use this information when processing the stream.
     */
    MediaType?: string;

    /**
     * An array of key-value pairs associated with the Kinesis Video Stream.
     */
    Tags?: TagType[];
  };
}
