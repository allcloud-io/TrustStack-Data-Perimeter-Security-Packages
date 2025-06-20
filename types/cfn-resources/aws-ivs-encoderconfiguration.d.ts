/**
 * TypeScript definitions for AWS::IVS::EncoderConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::EncoderConfiguration.
 */
export namespace AWS_IVS_EncoderConfiguration {
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
   * Resource Type definition for AWS::IVS::EncoderConfiguration.
   */
  export type EncoderConfigurationResourceType = {
    /**
     * Encoder configuration identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps
     * Create-only property
     */
    Video?: Record<string, any>;

    /**
     * Encoder configuration name.
     * Create-only property
     */
    Name?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
