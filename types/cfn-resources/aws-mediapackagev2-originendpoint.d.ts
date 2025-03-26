/**
 * TypeScript definitions for AWS::MediaPackageV2::OriginEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * <p>Represents an origin endpoint that is associated with a channel, offering a dynamically repackaged version of its content through various streaming media protocols. The content can be efficiently disseminated to end-users via a Content Delivery Network (CDN), like Amazon CloudFront.</p>
 */
export namespace AWS_MediaPackageV2_OriginEndpoint {
  export type AdMarkerDashType = {};

  export type AdMarkerHlsType = {};

  export type CmafEncryptionMethodType = {};

  export type ContainerTypeType = {};

  export type DashDrmSignalingType = {};

  export type DashPeriodTriggerType = {};

  export type DashSegmentTemplateFormatType = {};

  /**
   * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>
   */
  export type DashUtcTimingType = {
    TimingMode?: DashUtcTimingModeType;

    /**
     * <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>
     */
    TimingSource?: string;
  };

  export type DashUtcTimingModeType = {};

  export type DrmSystemType = {};

  /**
   * <p>The parameters for encrypting content.</p>
   */
  export type EncryptionType = {
    /**
     * <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>
     */
    ConstantInitializationVector?: string;

    EncryptionMethod: EncryptionMethodType;

    /**
     * <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p>
     * <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code>
     * </p>
     */
    KeyRotationIntervalSeconds?: number;

    SpekeKeyProvider: SpekeKeyProviderType;
  };

  /**
   * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
   */
  export type EncryptionContractConfigurationType = {
    PresetSpeke20Audio: PresetSpeke20AudioType;

    PresetSpeke20Video: PresetSpeke20VideoType;
  };

  /**
   * <p>The encryption type.</p>
   */
  export type EncryptionMethodType = {
    TsEncryptionMethod?: TsEncryptionMethodType;

    CmafEncryptionMethod?: CmafEncryptionMethodType;
  };

  export type EndpointErrorConditionType = {};

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   */
  export type FilterConfigurationType = {
    /**
     * <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
     */
    ManifestFilter?: string;

    /**
     * <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
     */
    Start?: string;

    /**
     * <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
     */
    End?: string;

    /**
     * <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>
     */
    TimeDelaySeconds?: number;

    /**
     * <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
     */
    ClipStartTime?: string;
  };

  /**
   * <p>The failover settings for the endpoint.</p>
   */
  export type ForceEndpointErrorConfigurationType = {
    /**
     * <p>The failover settings for the endpoint. The options are:</p>
     * <ul>
     * <li>
     * <p>
     * <code>STALE_MANIFEST</code> - The manifest stalled and there a no new segments or parts.</p>
     * </li>
     * <li>
     * <p>
     * <code>INCOMPLETE_MANIFEST</code> - There is a gap in the manifest.</p>
     * </li>
     * <li>
     * <p>
     * <code>MISSING_DRM_KEY</code> - Key rotation is enabled but we're unable to fetch the key for the current key period.</p>
     * </li>
     * </ul>
     */
    EndpointErrorConditions?: EndpointErrorConditionType[];
  };

  /**
   * <p>Retrieve the DASH manifest configuration.</p>
   */
  export type DashManifestConfigurationType = {
    /**
     * <p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
     */
    ManifestName: string;

    /**
     * <p>The total duration (in seconds) of the manifest's content.</p>
     */
    ManifestWindowSeconds?: number;

    FilterConfiguration?: FilterConfigurationType;

    /**
     * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>
     */
    MinUpdatePeriodSeconds?: number;

    /**
     * <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>
     */
    MinBufferTimeSeconds?: number;

    /**
     * <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>
     */
    SuggestedPresentationDelaySeconds?: number;

    SegmentTemplateFormat?: DashSegmentTemplateFormatType;

    /**
     * <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period.
     * For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
     */
    PeriodTriggers?: DashPeriodTriggerType[];

    ScteDash?: ScteDashType;

    DrmSignaling?: DashDrmSignalingType;

    UtcTiming?: DashUtcTimingType;
  };

  /**
   * <p>Retrieve the HTTP live streaming (HLS) manifest configuration.</p>
   */
  export type HlsManifestConfigurationType = {
    /**
     * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
     */
    ManifestName: string;

    /**
     * <p>The egress domain URL for stream delivery from MediaPackage.</p>
     */
    Url?: string;

    /**
     * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
     */
    ChildManifestName?: string;

    /**
     * <p>The total duration (in seconds) of the manifest's content.</p>
     */
    ManifestWindowSeconds?: number;

    /**
     * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
     * EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
     * The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
     * ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
     * <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
     */
    ProgramDateTimeIntervalSeconds?: number;

    ScteHls?: ScteHlsType;

    FilterConfiguration?: FilterConfigurationType;

    StartTag?: StartTagType;
  };

  /**
   * <p>Retrieve the low-latency HTTP live streaming (HLS) manifest configuration.</p>
   */
  export type LowLatencyHlsManifestConfigurationType = {
    /**
     * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
     */
    ManifestName: string;

    /**
     * <p>The egress domain URL for stream delivery from MediaPackage.</p>
     */
    Url?: string;

    /**
     * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
     */
    ChildManifestName?: string;

    /**
     * <p>The total duration (in seconds) of the manifest's content.</p>
     */
    ManifestWindowSeconds?: number;

    /**
     * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
     * EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
     * The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
     * ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
     * <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
     */
    ProgramDateTimeIntervalSeconds?: number;

    ScteHls?: ScteHlsType;

    FilterConfiguration?: FilterConfigurationType;

    StartTag?: StartTagType;
  };

  export type PresetSpeke20AudioType = {};

  export type PresetSpeke20VideoType = {};

  /**
   * <p>The SCTE configuration.</p>
   */
  export type ScteType = {
    /**
     * <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>
     */
    ScteFilter?: ScteFilterType[];
  };

  /**
   * <p>The SCTE configuration.</p>
   */
  export type ScteDashType = {
    AdMarkerDash?: AdMarkerDashType;
  };

  export type ScteFilterType = {};

  /**
   * <p>The SCTE configuration.</p>
   */
  export type ScteHlsType = {
    AdMarkerHls?: AdMarkerHlsType;
  };

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   */
  export type SegmentType = {
    /**
     * <p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>
     */
    SegmentDurationSeconds?: number;

    /**
     * <p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>
     */
    SegmentName?: string;

    /**
     * <p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>
     */
    TsUseAudioRenditionGroup?: boolean;

    /**
     * <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>
     */
    IncludeIframeOnlyStreams?: boolean;

    /**
     * <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>
     */
    TsIncludeDvbSubtitles?: boolean;

    Scte?: ScteType;

    Encryption?: EncryptionType;
  };

  /**
   * <p>The parameters for the SPEKE key provider.</p>
   */
  export type SpekeKeyProviderType = {
    EncryptionContractConfiguration: EncryptionContractConfigurationType;

    /**
     * <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p>
     * <p>The following example shows a resource ID: <code>MovieNight20171126093045</code>
     * </p>
     */
    ResourceId: string;

    /**
     * <p>The DRM solution provider you're using to protect your content during distribution.</p>
     */
    DrmSystems: DrmSystemType[];

    /**
     * <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p>
     * <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code>
     * </p>
     */
    RoleArn: string;

    /**
     * <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p>
     * <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code>
     * </p>
     */
    Url: string;
  };

  /**
   * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
   */
  export type StartTagType = {
    /**
     * <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>
     */
    TimeOffset: number;

    /**
     * <p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>
     */
    Precise?: boolean;
  };

  export type TsEncryptionMethodType = {};

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * <p>Represents an origin endpoint that is associated with a channel, offering a dynamically repackaged version of its content through various streaming media protocols. The content can be efficiently disseminated to end-users via a Content Delivery Network (CDN), like Amazon CloudFront.</p>
   */
  export type OriginEndpointResourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ChannelGroupName: string;

    /**
     * Create-only property
     */
    ChannelName: string;

    ContainerType: ContainerTypeType;

    /**
     * <p>The date and time the origin endpoint was created.</p>
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * <p>A DASH manifest configuration.</p>
     */
    DashManifests?: DashManifestConfigurationType[];

    /**
     * <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
     */
    Description?: string;

    ForceEndpointErrorConfiguration?: ForceEndpointErrorConfigurationType;

    /**
     * <p>An HTTP live streaming (HLS) manifest configuration.</p>
     */
    HlsManifests?: HlsManifestConfigurationType[];

    /**
     * <p>A low-latency HLS manifest configuration.</p>
     */
    LowLatencyHlsManifests?: LowLatencyHlsManifestConfigurationType[];

    /**
     * <p>The date and time the origin endpoint was modified.</p>
     * Read-only property
     */
    ModifiedAt?: string;

    /**
     * Create-only property
     */
    OriginEndpointName: string;

    Segment?: SegmentType;

    /**
     * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
     */
    StartoverWindowSeconds?: number;

    /**
     * Read-only property
     */
    DashManifestUrls?: string[];

    /**
     * Read-only property
     */
    HlsManifestUrls?: string[];

    /**
     * Read-only property
     */
    LowLatencyHlsManifestUrls?: string[];

    Tags?: TagType[];
  };
}
