/**
 * TypeScript definitions for AWS::IVS::Channel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::Channel
 */
export namespace AWS_IVS_Channel {
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

  export type MultitrackInputConfigurationType = {
    /**
     * Indicates whether multitrack input is enabled. Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.
     */
    Enabled?: boolean;

    /**
     * Maximum resolution for multitrack input. Required if enabled is true.
     */
    MaximumResolution?: string;

    /**
     * Indicates whether multitrack input is allowed or required. Required if enabled is true.
     */
    Policy?: string;
  };

  /**
   * Resource Type definition for AWS::IVS::Channel
   */
  export type ChannelResourceType = {
    /**
     * Channel ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * Channel
     * Default: "-"
     */
    Name?: string;

    /**
     * Whether the channel is authorized.
     * Default: false
     */
    Authorized?: boolean;

    /**
     * Whether the channel allows insecure ingest.
     * Default: false
     */
    InsecureIngest?: boolean;

    /**
     * Channel latency mode.
     * Default: "LOW"
     */
    LatencyMode?: string;

    /**
     * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.
     * Default: "STANDARD"
     */
    Type?: string;

    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    Tags?: TagType[];

    /**
     * Channel Playback URL.
     * Read-only property
     */
    PlaybackUrl?: string;

    /**
     * Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
     * Read-only property
     */
    IngestEndpoint?: string;

    /**
     * Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).
     * Default: ""
     */
    RecordingConfigurationArn?: string;

    /**
     * Optional transcode preset for the channel. This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").
     */
    Preset?: string;

    MultitrackInputConfiguration?: MultitrackInputConfigurationType;

    /**
     * Indicates which content-packaging format is used (MPEG-TS or fMP4). If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.
     * Default: "TS"
     */
    ContainerFormat?: string;
  };
}
