/**
 * TypeScript definitions for AWS::IVS::RecordingConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::RecordingConfiguration
 */
export namespace AWS_IVS_RecordingConfiguration {
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
   * Recording Destination Configuration.
   */
  export type DestinationConfigurationType = {
    S3?: S3DestinationConfigurationType;
  };

  /**
   * Recording S3 Destination Configuration.
   */
  export type S3DestinationConfigurationType = {
    BucketName: string;
  };

  /**
   * Recording Thumbnail Configuration.
   */
  export type ThumbnailConfigurationType = {
    /**
     * Thumbnail Recording Mode, which determines whether thumbnails are recorded at an interval or are disabled.
     */
    RecordingMode?: string;

    /**
     * Target Interval Seconds defines the interval at which thumbnails are recorded. This field is required if RecordingMode is INTERVAL.
     */
    TargetIntervalSeconds?: number;

    /**
     * Resolution indicates the desired resolution of recorded thumbnails.
     */
    Resolution?: string;

    /**
     * Storage indicates the format in which thumbnails are recorded.
     */
    Storage?: string[];
  };

  /**
   * Rendition Configuration describes which renditions should be recorded for a stream.
   */
  export type RenditionConfigurationType = {
    /**
     * Resolution Selection indicates which set of renditions are recorded for a stream.
     */
    RenditionSelection?: string;

    /**
     * Renditions indicates which renditions are recorded for a stream.
     */
    Renditions?: string[];
  };

  /**
   * Resource Type definition for AWS::IVS::RecordingConfiguration
   */
  export type RecordingConfigurationResourceType = {
    /**
     * Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * Recording Configuration Name.
     * Create-only property
     */
    Name?: string;

    /**
     * Recording Configuration State.
     * Read-only property
     */
    State?: string;

    /**
     * Recording Reconnect Window Seconds. (0 means disabled)
     * Default: 0
     * Create-only property
     */
    RecordingReconnectWindowSeconds?: number;

    /**
     * Create-only property
     */
    DestinationConfiguration: DestinationConfigurationType;

    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    ThumbnailConfiguration?: ThumbnailConfigurationType;

    /**
     * Create-only property
     */
    RenditionConfiguration?: RenditionConfigurationType;
  };
}
