/**
 * TypeScript definitions for AWS::MediaPackage::OriginEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaPackage::OriginEndpoint
 */
export namespace AWS_MediaPackage_OriginEndpoint {
  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  export type MssPackageType = {
    /**
     * The time window (in seconds) contained in each manifest.
     */
    ManifestWindowSeconds?: number;

    /**
     * The duration (in seconds) of each segment.
     */
    SegmentDurationSeconds?: number;

    Encryption?: MssEncryptionType;

    StreamSelection?: StreamSelectionType;
  };

  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  export type MssEncryptionType = {
    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  export type DashPackageType = {
    /**
     * Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
     */
    SegmentDurationSeconds?: number;

    /**
     * Time window (in seconds) contained in each manifest.
     */
    ManifestWindowSeconds?: number;

    /**
     * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
     */
    Profile?: string;

    /**
     * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
     */
    MinUpdatePeriodSeconds?: number;

    /**
     * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
     */
    MinBufferTimeSeconds?: number;

    /**
     * Duration (in seconds) to delay live content before presentation.
     */
    SuggestedPresentationDelaySeconds?: number;

    /**
     * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Channel source contains SCTE-35 ad markers.
     */
    PeriodTriggers?: string[];

    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;

    /**
     * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
     */
    ManifestLayout?: string;

    /**
     * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
     */
    SegmentTemplateFormat?: string;

    /**
     * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
     */
    AdTriggers?: string[];

    AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictionsType;

    Encryption?: DashEncryptionType;

    StreamSelection?: StreamSelectionType;

    /**
     * Determines the type of UTCTiming included in the Media Presentation Description (MPD)
     */
    UtcTiming?: string;

    /**
     * Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE
     */
    UtcTimingUri?: string;
  };

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  export type DashEncryptionType = {
    /**
     * Time (in seconds) between each encryption key rotation.
     */
    KeyRotationIntervalSeconds?: number;

    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * CDN Authorization credentials
   */
  export type AuthorizationType = {
    /**
     * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
     */
    SecretsRoleArn: string;

    /**
     * The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
     */
    CdnIdentifierSecret: string;
  };

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  export type HlsPackageType = {
    /**
     * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
     */
    SegmentDurationSeconds?: number;

    /**
     * Time window (in seconds) contained in each parent manifest.
     */
    PlaylistWindowSeconds?: number;

    /**
     * The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
     */
    PlaylistType?: string;

    /**
     * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
     */
    AdMarkers?: string;

    /**
     * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
     */
    AdTriggers?: string[];

    AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictionsType;

    /**
     * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
     */
    ProgramDateTimeIntervalSeconds?: number;

    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;

    /**
     * When enabled, audio streams will be placed in rendition groups in the output.
     */
    UseAudioRenditionGroup?: boolean;

    /**
     * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
     */
    IncludeDvbSubtitles?: boolean;

    Encryption?: HlsEncryptionType;

    StreamSelection?: StreamSelectionType;
  };

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  export type HlsEncryptionType = {
    /**
     * The encryption method to use.
     */
    EncryptionMethod?: string;

    /**
     * A constant initialization vector for encryption (optional). When not specified the initialization vector will be periodically rotated.
     */
    ConstantInitializationVector?: string;

    /**
     * Interval (in seconds) between each encryption key rotation.
     */
    KeyRotationIntervalSeconds?: number;

    /**
     * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
     */
    RepeatExtXKey?: boolean;

    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  export type CmafPackageType = {
    /**
     * Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
     */
    SegmentDurationSeconds?: number;

    /**
     * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
     */
    SegmentPrefix?: string;

    Encryption?: CmafEncryptionType;

    StreamSelection?: StreamSelectionType;

    /**
     * A list of HLS manifest configurations
     */
    HlsManifests?: HlsManifestType[];
  };

  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  export type CmafEncryptionType = {
    /**
     * Time (in seconds) between each encryption key rotation.
     */
    KeyRotationIntervalSeconds?: number;

    SpekeKeyProvider: SpekeKeyProviderType;

    /**
     * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
     */
    ConstantInitializationVector?: string;

    /**
     * The encryption method used
     */
    EncryptionMethod?: string;
  };

  /**
   * A HTTP Live Streaming (HLS) manifest configuration.
   */
  export type HlsManifestType = {
    /**
     * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
     */
    Id: string;

    /**
     * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
     */
    ManifestName?: string;

    /**
     * The URL of the packaged OriginEndpoint for consumption.
     */
    Url?: string;

    /**
     * Time window (in seconds) contained in each parent manifest.
     */
    PlaylistWindowSeconds?: number;

    /**
     * The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
     */
    PlaylistType?: string;

    /**
     * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
     */
    AdMarkers?: string;

    /**
     * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
     */
    ProgramDateTimeIntervalSeconds?: number;

    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;

    /**
     * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
     */
    AdTriggers?: string[];

    AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictionsType;
  };

  /**
   * A StreamSelection configuration.
   */
  export type StreamSelectionType = {
    /**
     * The minimum video bitrate (bps) to include in output.
     */
    MinVideoBitsPerSecond?: number;

    /**
     * The maximum video bitrate (bps) to include in output.
     */
    MaxVideoBitsPerSecond?: number;

    /**
     * A directive that determines the order of streams in the output.
     */
    StreamOrder?: string;
  };

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  export type SpekeKeyProviderType = {
    /**
     * The resource ID to include in key requests.
     */
    ResourceId: string;

    /**
     * The system IDs to include in key requests.
     */
    SystemIds: string[];

    /**
     * The URL of the external key provider service.
     */
    Url: string;

    /**
     * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
     */
    RoleArn: string;

    /**
     * An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service.
     */
    CertificateArn?: string;

    EncryptionContractConfiguration?: EncryptionContractConfigurationType;
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
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
   */
  export type AdsOnDeliveryRestrictionsType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::MediaPackage::OriginEndpoint
   */
  export type OriginEndpointResourceType = {
    /**
     * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
     * Read-only property
     */
    Arn?: string;

    /**
     * The URL of the packaged OriginEndpoint for consumption.
     * Read-only property
     */
    Url?: string;

    /**
     * The ID of the OriginEndpoint.
     * Create-only property
     */
    Id: string;

    /**
     * The ID of the Channel the OriginEndpoint is associated with.
     */
    ChannelId: string;

    /**
     * A short text description of the OriginEndpoint.
     */
    Description?: string;

    /**
     * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
     */
    Whitelist?: string[];

    /**
     * Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint.
     */
    StartoverWindowSeconds?: number;

    /**
     * Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint.
     */
    TimeDelaySeconds?: number;

    /**
     * A short string appended to the end of the OriginEndpoint URL.
     */
    ManifestName?: string;

    /**
     * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
     */
    Origination?: string;

    Authorization?: AuthorizationType;

    HlsPackage?: HlsPackageType;

    DashPackage?: DashPackageType;

    MssPackage?: MssPackageType;

    CmafPackage?: CmafPackageType;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
