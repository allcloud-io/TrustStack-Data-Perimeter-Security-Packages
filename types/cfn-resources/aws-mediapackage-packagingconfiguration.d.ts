/**
 * TypeScript definitions for AWS::MediaPackage::PackagingConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaPackage::PackagingConfiguration
 */
export namespace AWS_MediaPackage_PackagingConfiguration {
  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
   */
  export type RoleArnType = {};

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  export type SpekeKeyProviderType = {
    EncryptionContractConfiguration?: EncryptionContractConfigurationType;

    RoleArn: RoleArnType;

    /**
     * The system IDs to include in key requests.
     */
    SystemIds: string[];

    /**
     * The URL of the external key provider service.
     */
    Url: string;
  };

  /**
   * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
   */
  export type EncryptionContractConfigurationType = {
    /**
     * A collection of audio encryption presets.
     */
    PresetSpeke20Audio: string;

    /**
     * A collection of video encryption presets.
     */
    PresetSpeke20Video: string;
  };

  /**
   * A StreamSelection configuration.
   */
  export type StreamSelectionType = {
    /**
     * The maximum video bitrate (bps) to include in output.
     */
    MaxVideoBitsPerSecond?: number;

    /**
     * The minimum video bitrate (bps) to include in output.
     */
    MinVideoBitsPerSecond?: number;

    /**
     * A directive that determines the order of streams in the output.
     */
    StreamOrder?: string;
  };

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
   */
  export type SegmentDurationSecondsType = {};

  /**
   * An optional string to include in the name of the manifest.
   */
  export type ManifestNameType = {};

  /**
   * An HTTP Live Streaming (HLS) manifest configuration.
   */
  export type HlsManifestType = {
    /**
     * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.
     */
    AdMarkers?: string;

    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;

    ManifestName?: ManifestNameType;

    /**
     * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
     */
    ProgramDateTimeIntervalSeconds?: number;

    /**
     * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
     */
    RepeatExtXKey?: boolean;

    StreamSelection?: StreamSelectionType;
  };

  /**
   * A DASH manifest configuration.
   */
  export type DashManifestType = {
    /**
     * Determines the position of some tags in the Media Presentation Description (MPD). When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
     */
    ManifestLayout?: string;

    ManifestName?: ManifestNameType;

    /**
     * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
     */
    MinBufferTimeSeconds?: number;

    /**
     * The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
     */
    Profile?: string;

    /**
     * The source of scte markers used. When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.
     */
    ScteMarkersSource?: string;

    StreamSelection?: StreamSelectionType;
  };

  /**
   * A Microsoft Smooth Streaming (MSS) manifest configuration.
   */
  export type MssManifestType = {
    ManifestName?: ManifestNameType;

    StreamSelection?: StreamSelectionType;
  };

  /**
   * A CMAF encryption configuration.
   */
  export type CmafEncryptionType = {
    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * A CMAF packaging configuration.
   */
  export type CmafPackageType = {
    Encryption?: CmafEncryptionType;

    /**
     * A list of HLS manifest configurations.
     */
    HlsManifests: HlsManifestType[];

    SegmentDurationSeconds?: SegmentDurationSecondsType;

    /**
     * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
     */
    IncludeEncoderConfigurationInSegments?: boolean;
  };

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  export type DashEncryptionType = {
    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  export type DashPackageType = {
    /**
     * A list of DASH manifest configurations.
     */
    DashManifests: DashManifestType[];

    Encryption?: DashEncryptionType;

    /**
     * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.
     */
    PeriodTriggers?: string[];

    SegmentDurationSeconds?: SegmentDurationSecondsType;

    /**
     * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
     */
    SegmentTemplateFormat?: string;

    /**
     * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
     */
    IncludeEncoderConfigurationInSegments?: boolean;

    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;
  };

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  export type HlsEncryptionType = {
    /**
     * An HTTP Live Streaming (HLS) encryption configuration.
     */
    ConstantInitializationVector?: string;

    /**
     * The encryption method to use.
     */
    EncryptionMethod?: string;

    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  export type HlsPackageType = {
    Encryption?: HlsEncryptionType;

    /**
     * A list of HLS manifest configurations.
     */
    HlsManifests: HlsManifestType[];

    /**
     * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
     */
    IncludeDvbSubtitles?: boolean;

    SegmentDurationSeconds?: SegmentDurationSecondsType;

    /**
     * When enabled, audio streams will be placed in rendition groups in the output.
     */
    UseAudioRenditionGroup?: boolean;
  };

  /**
   * A CMAF encryption configuration.
   */
  export type MssEncryptionType = {
    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  export type MssPackageType = {
    Encryption?: MssEncryptionType;

    /**
     * A list of MSS manifest configurations.
     */
    MssManifests: MssManifestType[];

    SegmentDurationSeconds?: SegmentDurationSecondsType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::MediaPackage::PackagingConfiguration
   */
  export type PackagingConfigurationResourceType = {
    /**
     * The ID of the PackagingConfiguration.
     * Create-only property
     */
    Id: string;

    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId: string;

    /**
     * The ARN of the PackagingConfiguration.
     * Read-only property
     */
    Arn?: string;

    /**
     * A CMAF packaging configuration.
     */
    CmafPackage?: CmafPackageType;

    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackageType;

    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackageType;

    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    MssPackage?: MssPackageType;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
