/**
 * TypeScript definitions for AWS::IVS::StreamKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::StreamKey
 */
export namespace AWS_IVS_StreamKey {
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
   * Resource Type definition for AWS::IVS::StreamKey
   */
  export type StreamKeyResourceType = {
    /**
     * Stream Key ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * Channel ARN for the stream.
     * Create-only property
     */
    ChannelArn: string;

    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    Tags?: TagType[];

    /**
     * Stream-key value.
     * Read-only property
     */
    Value?: string;
  };
}
