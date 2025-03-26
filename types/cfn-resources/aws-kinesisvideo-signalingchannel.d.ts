/**
 * TypeScript definitions for AWS::KinesisVideo::SignalingChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::KinesisVideo::SignalingChannel
 */
export namespace AWS_KinesisVideo_SignalingChannel {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.  The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type Definition for AWS::KinesisVideo::SignalingChannel
   */
  export type SignalingChannelResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the Kinesis Video Signaling Channel.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the Kinesis Video Signaling Channel.
     * Create-only property
     */
    Name?: string;

    /**
     * The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.
     */
    Type?: string;

    /**
     * The period of time a signaling channel retains undelivered messages before they are discarded.
     */
    MessageTtlSeconds?: number;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
