/**
 * TypeScript definitions for AWS::MediaLive::Channel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MediaLive::Channel
 */
export namespace AWS_MediaLive_Channel {
  export type AudioSelectorSettingsType = {
    AudioLanguageSelection?: AudioLanguageSelectionType;

    AudioTrackSelection?: AudioTrackSelectionType;

    AudioPidSelection?: AudioPidSelectionType;

    AudioHlsRenditionSelection?: AudioHlsRenditionSelectionType;
  };

  export type InputLocationType = {
    PasswordParam?: string;

    Username?: string;

    Uri?: string;
  };

  export type FrameCaptureGroupSettingsType = {
    FrameCaptureCdnSettings?: FrameCaptureCdnSettingsType;

    Destination?: OutputLocationRefType;
  };

  export type Ac3SettingsType = {
    CodingMode?: string;

    DrcProfile?: string;

    MetadataControl?: string;

    Dialnorm?: number;

    LfeFilter?: string;

    BitstreamMode?: string;

    AttenuationControl?: string;

    Bitrate?: number;
  };

  export type AudioDolbyEDecodeType = {
    ProgramSelection?: string;
  };

  export type AudioCodecSettingsType = {
    Eac3Settings?: Eac3SettingsType;

    Ac3Settings?: Ac3SettingsType;

    Mp2Settings?: Mp2SettingsType;

    Eac3AtmosSettings?: Eac3AtmosSettingsType;

    PassThroughSettings?: PassThroughSettingsType;

    WavSettings?: WavSettingsType;

    AacSettings?: AacSettingsType;
  };

  export type UdpGroupSettingsType = {
    TimedMetadataId3Frame?: string;

    TimedMetadataId3Period?: number;

    InputLossAction?: string;
  };

  export type MediaPackageOutputDestinationSettingsType = {
    ChannelName?: string;

    ChannelId?: string;

    ChannelGroup?: string;
  };

  export type Scte20PlusEmbeddedDestinationSettingsType = {};

  export type H264SettingsType = {
    TimecodeBurninSettings?: TimecodeBurninSettingsType;

    NumRefFrames?: number;

    TemporalAq?: string;

    Slices?: number;

    FramerateControl?: string;

    QvbrQualityLevel?: number;

    FramerateNumerator?: number;

    ParControl?: string;

    GopClosedCadence?: number;

    FlickerAq?: string;

    Profile?: string;

    QualityLevel?: string;

    MinIInterval?: number;

    SceneChangeDetect?: string;

    ForceFieldPictures?: string;

    FramerateDenominator?: number;

    Softness?: number;

    GopSize?: number;

    AdaptiveQuantization?: string;

    FilterSettings?: H264FilterSettingsType;

    MinQp?: number;

    ColorSpaceSettings?: H264ColorSpaceSettingsType;

    EntropyEncoding?: string;

    SpatialAq?: string;

    ParDenominator?: number;

    FixedAfd?: string;

    GopSizeUnits?: string;

    AfdSignaling?: string;

    Bitrate?: number;

    ParNumerator?: number;

    RateControlMode?: string;

    ScanType?: string;

    BufSize?: number;

    TimecodeInsertion?: string;

    ColorMetadata?: string;

    BufFillPct?: number;

    GopBReference?: string;

    LookAheadRateControl?: string;

    Level?: string;

    MaxBitrate?: number;

    Syntax?: string;

    SubgopLength?: string;

    GopNumBFrames?: number;
  };

  export type FrameCaptureHlsSettingsType = {};

  export type RawSettingsType = {};

  export type KeyProviderSettingsType = {
    StaticKeySettings?: StaticKeySettingsType;
  };

  export type UdpContainerSettingsType = {
    M2tsSettings?: M2tsSettingsType;
  };

  export type BandwidthReductionFilterSettingsType = {
    PostFilterSharpening?: string;

    Strength?: string;
  };

  export type FeatureActivationsType = {
    OutputStaticImageOverlayScheduleActions?: string;

    InputPrepareScheduleActions?: string;
  };

  export type MultiplexGroupSettingsType = {};

  export type SrtGroupSettingsType = {
    InputLossAction?: string;
  };

  export type ArchiveGroupSettingsType = {
    Destination?: OutputLocationRefType;

    ArchiveCdnSettings?: ArchiveCdnSettingsType;

    RolloverInterval?: number;
  };

  export type ArchiveS3SettingsType = {
    CannedAcl?: string;
  };

  export type MultiplexContainerSettingsType = {
    MultiplexM2tsSettings?: MultiplexM2tsSettingsType;
  };

  export type NielsenConfigurationType = {
    DistributorId?: string;

    NielsenPcmToId3Tagging?: string;
  };

  export type TeletextSourceSettingsType = {
    OutputRectangle?: CaptionRectangleType;

    PageNumber?: string;
  };

  export type CmafIngestGroupSettingsType = {
    Destination?: OutputLocationRefType;

    KlvNameModifier?: string;

    Scte35Type?: string;

    NielsenId3Behavior?: string;

    Scte35NameModifier?: string;

    SegmentLengthUnits?: string;

    NielsenId3NameModifier?: string;

    KlvBehavior?: string;

    SegmentLength?: number;

    Id3Behavior?: string;

    SendDelayMs?: number;

    Id3NameModifier?: string;
  };

  export type AribDestinationSettingsType = {};

  export type CaptionSelectorSettingsType = {
    DvbSubSourceSettings?: DvbSubSourceSettingsType;

    Scte27SourceSettings?: Scte27SourceSettingsType;

    AribSourceSettings?: AribSourceSettingsType;

    EmbeddedSourceSettings?: EmbeddedSourceSettingsType;

    Scte20SourceSettings?: Scte20SourceSettingsType;

    TeletextSourceSettings?: TeletextSourceSettingsType;

    AncillarySourceSettings?: AncillarySourceSettingsType;
  };

  export type GlobalConfigurationType = {
    InputEndAction?: string;

    OutputLockingSettings?: OutputLockingSettingsType;

    OutputTimingSource?: string;

    OutputLockingMode?: string;

    SupportLowFramerateInputs?: string;

    InitialAudioGain?: number;

    InputLossBehavior?: InputLossBehaviorType;
  };

  export type PipelineLockingSettingsType = {};

  export type FrameCaptureS3SettingsType = {
    CannedAcl?: string;
  };

  export type MultiplexM2tsSettingsType = {
    Scte35Control?: string;

    PcrPeriod?: number;

    NielsenId3Behavior?: string;

    EsRateInPes?: string;

    CcDescriptor?: string;

    AudioFramesPerPes?: number;

    AbsentInputAudioBehavior?: string;

    AudioStreamType?: string;

    Klv?: string;

    Arib?: string;

    AudioBufferModel?: string;

    Ebif?: string;

    Scte35PrerollPullupMilliseconds?: number;

    PcrControl?: string;
  };

  export type FailoverConditionType = {
    FailoverConditionSettings?: FailoverConditionSettingsType;
  };

  export type AudioTrackSelectionType = {
    DolbyEDecode?: AudioDolbyEDecodeType;

    Tracks?: AudioTrackType[];
  };

  export type OutputGroupType = {
    Outputs?: OutputType[];

    OutputGroupSettings?: OutputGroupSettingsType;

    Name?: string;
  };

  export type VideoSelectorColorSpaceSettingsType = {
    Hdr10Settings?: Hdr10SettingsType;
  };

  export type AribSourceSettingsType = {};

  export type Mpeg2FilterSettingsType = {
    TemporalFilterSettings?: TemporalFilterSettingsType;
  };

  export type DvbSubSourceSettingsType = {
    OcrLanguage?: string;

    Pid?: number;
  };

  export type AudioDescriptionType = {
    AudioDashRoles?: string[];

    LanguageCodeControl?: string;

    CodecSettings?: AudioCodecSettingsType;

    Name?: string;

    AudioWatermarkingSettings?: AudioWatermarkSettingsType;

    AudioNormalizationSettings?: AudioNormalizationSettingsType;

    LanguageCode?: string;

    RemixSettings?: RemixSettingsType;

    AudioSelectorName?: string;

    StreamName?: string;

    DvbDashAccessibility?: string;

    AudioType?: string;

    AudioTypeControl?: string;
  };

  export type DvbNitSettingsType = {
    NetworkName?: string;

    NetworkId?: number;

    RepInterval?: number;
  };

  export type VideoSelectorSettingsType = {
    VideoSelectorProgramId?: VideoSelectorProgramIdType;

    VideoSelectorPid?: VideoSelectorPidType;
  };

  export type OutputDestinationType = {
    SrtSettings?: SrtOutputDestinationSettingsType[];

    Id?: string;

    MultiplexSettings?: MultiplexProgramChannelDestinationSettingsType;

    Settings?: OutputDestinationSettingsType[];

    MediaPackageSettings?: MediaPackageOutputDestinationSettingsType[];
  };

  export type AudioLanguageSelectionType = {
    LanguageCode?: string;

    LanguageSelectionPolicy?: string;
  };

  export type AvailSettingsType = {
    Scte35SpliceInsert?: Scte35SpliceInsertType;

    Scte35TimeSignalApos?: Scte35TimeSignalAposType;

    Esam?: EsamType;
  };

  export type AvailBlankingType = {
    State?: string;

    AvailBlankingImage?: InputLocationType;
  };

  export type InputLossBehaviorType = {
    InputLossImageType?: string;

    InputLossImageSlate?: InputLocationType;

    InputLossImageColor?: string;

    RepeatFrameMsec?: number;

    BlackFrameMsec?: number;
  };

  export type MulticastInputSettingsType = {
    SourceIpAddress?: string;
  };

  export type SrtOutputSettingsType = {
    EncryptionType?: string;

    Destination?: OutputLocationRefType;

    BufferMsec?: number;

    ContainerSettings?: UdpContainerSettingsType;

    Latency?: number;
  };

  export type HlsMediaStoreSettingsType = {
    FilecacheDuration?: number;

    MediaStoreStorageClass?: string;

    RestartDelay?: number;

    NumRetries?: number;

    ConnectionRetryInterval?: number;
  };

  export type BlackoutSlateType = {
    NetworkId?: string;

    NetworkEndBlackoutImage?: InputLocationType;

    NetworkEndBlackout?: string;

    State?: string;

    BlackoutSlateImage?: InputLocationType;
  };

  export type SmpteTtDestinationSettingsType = {};

  export type VideoSelectorProgramIdType = {
    ProgramId?: number;
  };

  export type CaptionLanguageMappingType = {
    LanguageCode?: string;

    LanguageDescription?: string;

    CaptionChannel?: number;
  };

  export type HlsOutputSettingsType = {
    HlsSettings?: HlsSettingsType;

    NameModifier?: string;

    H265PackagingType?: string;

    SegmentModifier?: string;
  };

  export type Scte27SourceSettingsType = {
    OcrLanguage?: string;

    Pid?: number;
  };

  export type M3u8SettingsType = {
    PatInterval?: number;

    ProgramNum?: number;

    PcrPeriod?: number;

    PmtInterval?: number;

    KlvDataPids?: string;

    NielsenId3Behavior?: string;

    PcrPid?: string;

    VideoPid?: string;

    AudioFramesPerPes?: number;

    TransportStreamId?: number;

    PmtPid?: string;

    Scte35Pid?: string;

    Scte35Behavior?: string;

    KlvBehavior?: string;

    EcmPid?: string;

    TimedMetadataPid?: string;

    AudioPids?: string;

    PcrControl?: string;

    TimedMetadataBehavior?: string;
  };

  export type RtmpGroupSettingsType = {
    AuthenticationScheme?: string;

    CacheLength?: number;

    AdMarkers?: string[];

    IncludeFillerNalUnits?: string;

    InputLossAction?: string;

    RestartDelay?: number;

    CaptionData?: string;

    CacheFullBehavior?: string;
  };

  export type H264FilterSettingsType = {
    TemporalFilterSettings?: TemporalFilterSettingsType;

    BandwidthReductionFilterSettings?: BandwidthReductionFilterSettingsType;
  };

  export type StandardHlsSettingsType = {
    AudioRenditionSets?: string;

    M3u8Settings?: M3u8SettingsType;
  };

  export type OutputType = {
    OutputSettings?: OutputSettingsType;

    CaptionDescriptionNames?: string[];

    AudioDescriptionNames?: string[];

    OutputName?: string;

    VideoDescriptionName?: string;
  };

  export type ChannelEngineVersionRequestType = {
    Version?: string;
  };

  export type VideoDescriptionType = {
    ScalingBehavior?: string;

    RespondToAfd?: string;

    Height?: number;

    Sharpness?: number;

    Width?: number;

    CodecSettings?: VideoCodecSettingsType;

    Name?: string;
  };

  export type FrameCaptureSettingsType = {
    TimecodeBurninSettings?: TimecodeBurninSettingsType;

    CaptureIntervalUnits?: string;

    CaptureInterval?: number;
  };

  export type AnywhereSettingsType = {
    ChannelPlacementGroupId?: string;

    ClusterId?: string;
  };

  export type ColorCorrectionSettingsType = {
    GlobalColorCorrections?: ColorCorrectionType[];
  };

  export type CdiInputSpecificationType = {
    Resolution?: string;
  };

  export type EsamType = {
    AdAvailOffset?: number;

    ZoneIdentity?: string;

    AcquisitionPointId?: string;

    PoisEndpoint?: string;

    Username?: string;

    PasswordParam?: string;
  };

  export type MaintenanceCreateSettingsType = {
    MaintenanceDay?: string;

    MaintenanceStartTime?: string;
  };

  export type InputSettingsType = {
    Scte35Pid?: number;

    DeblockFilter?: string;

    FilterStrength?: number;

    InputFilter?: string;

    SourceEndBehavior?: string;

    VideoSelector?: VideoSelectorType;

    Smpte2038DataPreference?: string;

    AudioSelectors?: AudioSelectorType[];

    CaptionSelectors?: CaptionSelectorType[];

    DenoiseFilter?: string;

    NetworkInputSettings?: NetworkInputSettingsType;
  };

  export type DvbTdtSettingsType = {
    RepInterval?: number;
  };

  export type FrameCaptureCdnSettingsType = {
    FrameCaptureS3Settings?: FrameCaptureS3SettingsType;
  };

  export type FecOutputSettingsType = {
    ColumnDepth?: number;

    IncludeFec?: string;

    RowLength?: number;
  };

  export type Rec601SettingsType = {};

  export type AudioPidSelectionType = {
    Pid?: number;
  };

  export type H265ColorSpaceSettingsType = {
    Rec601Settings?: Rec601SettingsType;

    Rec709Settings?: Rec709SettingsType;

    ColorSpacePassthroughSettings?: ColorSpacePassthroughSettingsType;

    DolbyVision81Settings?: DolbyVision81SettingsType;

    Hdr10Settings?: Hdr10SettingsType;
  };

  export type VideoCodecSettingsType = {
    FrameCaptureSettings?: FrameCaptureSettingsType;

    H264Settings?: H264SettingsType;

    Mpeg2Settings?: Mpeg2SettingsType;

    H265Settings?: H265SettingsType;

    Av1Settings?: Av1SettingsType;
  };

  export type MediaPackageGroupSettingsType = {
    Destination?: OutputLocationRefType;
  };

  export type H265FilterSettingsType = {
    TemporalFilterSettings?: TemporalFilterSettingsType;

    BandwidthReductionFilterSettings?: BandwidthReductionFilterSettingsType;
  };

  export type NielsenCBETType = {
    CbetStepaside?: string;

    CbetCheckDigitString?: string;

    Csid?: string;
  };

  export type OutputGroupSettingsType = {
    HlsGroupSettings?: HlsGroupSettingsType;

    FrameCaptureGroupSettings?: FrameCaptureGroupSettingsType;

    MultiplexGroupSettings?: MultiplexGroupSettingsType;

    SrtGroupSettings?: SrtGroupSettingsType;

    ArchiveGroupSettings?: ArchiveGroupSettingsType;

    MediaPackageGroupSettings?: MediaPackageGroupSettingsType;

    UdpGroupSettings?: UdpGroupSettingsType;

    MsSmoothGroupSettings?: MsSmoothGroupSettingsType;

    RtmpGroupSettings?: RtmpGroupSettingsType;

    CmafIngestGroupSettings?: CmafIngestGroupSettingsType;
  };

  export type AudioChannelMappingType = {
    InputChannelLevels?: InputChannelLevelType[];

    OutputChannel?: number;
  };

  export type CmafIngestOutputSettingsType = {
    NameModifier?: string;
  };

  export type NetworkInputSettingsType = {
    MulticastInputSettings?: MulticastInputSettingsType;

    ServerValidation?: string;

    HlsInputSettings?: HlsInputSettingsType;
  };

  export type TeletextDestinationSettingsType = {};

  export type ColorCorrectionType = {
    OutputColorSpace?: string;

    InputColorSpace?: string;

    Uri?: string;
  };

  export type WebvttDestinationSettingsType = {
    StyleControl?: string;
  };

  export type UdpOutputSettingsType = {
    Destination?: OutputLocationRefType;

    FecOutputSettings?: FecOutputSettingsType;

    BufferMsec?: number;

    ContainerSettings?: UdpContainerSettingsType;
  };

  export type EncoderSettingsType = {
    AudioDescriptions?: AudioDescriptionType[];

    VideoDescriptions?: VideoDescriptionType[];

    GlobalConfiguration?: GlobalConfigurationType;

    MotionGraphicsConfiguration?: MotionGraphicsConfigurationType;

    ThumbnailConfiguration?: ThumbnailConfigurationType;

    FeatureActivations?: FeatureActivationsType;

    CaptionDescriptions?: CaptionDescriptionType[];

    AvailConfiguration?: AvailConfigurationType;

    ColorCorrectionSettings?: ColorCorrectionSettingsType;

    OutputGroups?: OutputGroupType[];

    AvailBlanking?: AvailBlankingType;

    NielsenConfiguration?: NielsenConfigurationType;

    BlackoutSlate?: BlackoutSlateType;

    TimecodeConfig?: TimecodeConfigType;
  };

  export type Fmp4HlsSettingsType = {
    AudioRenditionSets?: string;

    NielsenId3Behavior?: string;

    TimedMetadataBehavior?: string;
  };

  export type HlsSettingsType = {
    Fmp4HlsSettings?: Fmp4HlsSettingsType;

    FrameCaptureHlsSettings?: FrameCaptureHlsSettingsType;

    StandardHlsSettings?: StandardHlsSettingsType;

    AudioOnlyHlsSettings?: AudioOnlyHlsSettingsType;
  };

  export type SrtOutputDestinationSettingsType = {
    StreamId?: string;

    EncryptionPassphraseSecretArn?: string;

    Url?: string;
  };

  export type AutomaticInputFailoverSettingsType = {
    ErrorClearTimeMsec?: number;

    FailoverConditions?: FailoverConditionType[];

    InputPreference?: string;

    SecondaryInputId?: string;
  };

  export type WavSettingsType = {
    CodingMode?: string;

    SampleRate?: number;

    BitDepth?: number;
  };

  export type M2tsSettingsType = {
    EtvPlatformPid?: string;

    AribCaptionsPid?: string;

    EbpPlacement?: string;

    DvbSubPids?: string;

    SegmentationStyle?: string;

    Klv?: string;

    Scte35PrerollPullupMilliseconds?: number;

    TimedMetadataBehavior?: string;

    DvbTeletextPid?: string;

    Scte35Control?: string;

    PcrPeriod?: number;

    SegmentationTime?: number;

    CcDescriptor?: string;

    PmtPid?: string;

    DvbNitSettings?: DvbNitSettingsType;

    EtvSignalPid?: string;

    Arib?: string;

    TimedMetadataPid?: string;

    AudioPids?: string;

    AudioBufferModel?: string;

    Ebif?: string;

    PcrControl?: string;

    PatInterval?: number;

    ProgramNum?: number;

    RateMode?: string;

    KlvDataPids?: string;

    NullPacketBitrate?: number;

    PmtInterval?: number;

    EsRateInPes?: string;

    VideoPid?: string;

    TransportStreamId?: number;

    Scte35Pid?: string;

    AudioStreamType?: string;

    EbpLookaheadMs?: number;

    DvbTdtSettings?: DvbTdtSettingsType;

    EbpAudioInterval?: string;

    FragmentTime?: number;

    NielsenId3Behavior?: string;

    PcrPid?: string;

    AudioFramesPerPes?: number;

    AbsentInputAudioBehavior?: string;

    Bitrate?: number;

    Scte27Pids?: string;

    SegmentationMarkers?: string;

    DvbSdtSettings?: DvbSdtSettingsType;

    BufferModel?: string;

    EcmPid?: string;

    AribCaptionsPidControl?: string;
  };

  export type DolbyVision81SettingsType = {};

  export type HlsGroupSettingsType = {
    SegmentationMode?: string;

    Destination?: OutputLocationRefType;

    CodecSpecification?: string;

    IvSource?: string;

    TimedMetadataId3Frame?: string;

    KeyFormatVersions?: string;

    RedundantManifest?: string;

    OutputSelection?: string;

    KeyProviderSettings?: KeyProviderSettingsType;

    StreamInfResolution?: string;

    CaptionLanguageMappings?: CaptionLanguageMappingType[];

    HlsId3SegmentTagging?: string;

    IFrameOnlyPlaylists?: string;

    CaptionLanguageSetting?: string;

    KeepSegments?: number;

    ConstantIv?: string;

    DirectoryStructure?: string;

    EncryptionType?: string;

    AdMarkers?: string[];

    HlsCdnSettings?: HlsCdnSettingsType;

    IndexNSegments?: number;

    DiscontinuityTags?: string;

    InputLossAction?: string;

    Mode?: string;

    TsFileMode?: string;

    BaseUrlManifest1?: string;

    ClientCache?: string;

    MinSegmentLength?: number;

    KeyFormat?: string;

    IvInManifest?: string;

    BaseUrlContent1?: string;

    ProgramDateTimeClock?: string;

    ManifestCompression?: string;

    ManifestDurationFormat?: string;

    TimedMetadataId3Period?: number;

    IncompleteSegmentBehavior?: string;

    ProgramDateTimePeriod?: number;

    SegmentLength?: number;

    TimestampDeltaMilliseconds?: number;

    ProgramDateTime?: string;

    SegmentsPerSubdirectory?: number;

    BaseUrlContent?: string;

    BaseUrlManifest?: string;
  };

  export type FailoverConditionSettingsType = {
    AudioSilenceSettings?: AudioSilenceFailoverSettingsType;

    VideoBlackSettings?: VideoBlackFailoverSettingsType;

    InputLossSettings?: InputLossFailoverSettingsType;
  };

  export type FrameCaptureOutputSettingsType = {
    NameModifier?: string;
  };

  export type ColorSpacePassthroughSettingsType = {};

  export type ThumbnailConfigurationType = {
    State?: string;
  };

  export type AudioHlsRenditionSelectionType = {
    GroupId?: string;

    Name?: string;
  };

  export type MsSmoothOutputSettingsType = {
    NameModifier?: string;

    H265PackagingType?: string;
  };

  export type Scte35SpliceInsertType = {
    AdAvailOffset?: number;

    WebDeliveryAllowedFlag?: string;

    NoRegionalBlackoutFlag?: string;
  };

  export type RemixSettingsType = {
    ChannelsOut?: number;

    ChannelsIn?: number;

    ChannelMappings?: AudioChannelMappingType[];
  };

  export type ArchiveCdnSettingsType = {
    ArchiveS3Settings?: ArchiveS3SettingsType;
  };

  export type VideoBlackFailoverSettingsType = {
    BlackDetectThreshold?: number;

    VideoBlackThresholdMsec?: number;
  };

  export type HlsAkamaiSettingsType = {
    Salt?: string;

    FilecacheDuration?: number;

    NumRetries?: number;

    Token?: string;

    RestartDelay?: number;

    ConnectionRetryInterval?: number;

    HttpTransferMode?: string;
  };

  export type OutputDestinationSettingsType = {
    StreamName?: string;

    PasswordParam?: string;

    Username?: string;

    Url?: string;
  };

  export type HlsInputSettingsType = {
    Scte35Source?: string;

    BufferSegments?: number;

    RetryInterval?: number;

    Retries?: number;

    Bandwidth?: number;
  };

  export type PassThroughSettingsType = {};

  export type Eac3AtmosSettingsType = {
    CodingMode?: string;

    Dialnorm?: number;

    SurroundTrim?: number;

    DrcRf?: string;

    Bitrate?: number;

    DrcLine?: string;

    HeightTrim?: number;
  };

  export type InputLossFailoverSettingsType = {
    InputLossThresholdMsec?: number;
  };

  export type AvailConfigurationType = {
    Scte35SegmentationScope?: string;

    AvailSettings?: AvailSettingsType;
  };

  export type AudioSilenceFailoverSettingsType = {
    AudioSelectorName?: string;

    AudioSilenceThresholdMsec?: number;
  };

  export type RtmpCaptionInfoDestinationSettingsType = {};

  export type AncillarySourceSettingsType = {
    SourceAncillaryChannelNumber?: number;
  };

  export type EmbeddedPlusScte20DestinationSettingsType = {};

  export type Rec709SettingsType = {};

  export type ArchiveContainerSettingsType = {
    M2tsSettings?: M2tsSettingsType;

    RawSettings?: RawSettingsType;
  };

  export type InputAttachmentType = {
    InputAttachmentName?: string;

    InputId?: string;

    LogicalInterfaceNames?: string[];

    AutomaticInputFailoverSettings?: AutomaticInputFailoverSettingsType;

    InputSettings?: InputSettingsType;
  };

  export type EpochLockingSettingsType = {
    JamSyncTime?: string;

    CustomEpoch?: string;
  };

  export type VideoSelectorPidType = {
    Pid?: number;
  };

  export type InputChannelLevelType = {
    InputChannel?: number;

    Gain?: number;
  };

  export type MediaPackageOutputSettingsType = {};

  export type Av1ColorSpaceSettingsType = {
    Rec601Settings?: Rec601SettingsType;

    Rec709Settings?: Rec709SettingsType;

    ColorSpacePassthroughSettings?: ColorSpacePassthroughSettingsType;

    Hdr10Settings?: Hdr10SettingsType;
  };

  export type HlsWebdavSettingsType = {
    FilecacheDuration?: number;

    RestartDelay?: number;

    NumRetries?: number;

    ConnectionRetryInterval?: number;

    HttpTransferMode?: string;
  };

  export type TemporalFilterSettingsType = {
    PostFilterSharpening?: string;

    Strength?: string;
  };

  export type Mp2SettingsType = {
    CodingMode?: string;

    SampleRate?: number;

    Bitrate?: number;
  };

  export type OutputSettingsType = {
    MediaPackageOutputSettings?: MediaPackageOutputSettingsType;

    MsSmoothOutputSettings?: MsSmoothOutputSettingsType;

    FrameCaptureOutputSettings?: FrameCaptureOutputSettingsType;

    HlsOutputSettings?: HlsOutputSettingsType;

    RtmpOutputSettings?: RtmpOutputSettingsType;

    UdpOutputSettings?: UdpOutputSettingsType;

    MultiplexOutputSettings?: MultiplexOutputSettingsType;

    CmafIngestOutputSettings?: CmafIngestOutputSettingsType;

    SrtOutputSettings?: SrtOutputSettingsType;

    ArchiveOutputSettings?: ArchiveOutputSettingsType;
  };

  export type RtmpOutputSettingsType = {
    Destination?: OutputLocationRefType;

    CertificateMode?: string;

    NumRetries?: number;

    ConnectionRetryInterval?: number;
  };

  export type CaptionDestinationSettingsType = {
    AribDestinationSettings?: AribDestinationSettingsType;

    EbuTtDDestinationSettings?: EbuTtDDestinationSettingsType;

    SmpteTtDestinationSettings?: SmpteTtDestinationSettingsType;

    EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettingsType;

    TtmlDestinationSettings?: TtmlDestinationSettingsType;

    Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettingsType;

    DvbSubDestinationSettings?: DvbSubDestinationSettingsType;

    TeletextDestinationSettings?: TeletextDestinationSettingsType;

    BurnInDestinationSettings?: BurnInDestinationSettingsType;

    WebvttDestinationSettings?: WebvttDestinationSettingsType;

    EmbeddedDestinationSettings?: EmbeddedDestinationSettingsType;

    RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettingsType;

    Scte27DestinationSettings?: Scte27DestinationSettingsType;
  };

  export type AudioTrackType = {
    Track?: number;
  };

  export type Scte20SourceSettingsType = {
    Source608ChannelNumber?: number;

    Convert608To708?: string;
  };

  export type Scte27DestinationSettingsType = {};

  export type Eac3SettingsType = {
    CodingMode?: string;

    SurroundMode?: string;

    PassthroughControl?: string;

    Dialnorm?: number;

    LoRoSurroundMixLevel?: number;

    PhaseControl?: string;

    LtRtCenterMixLevel?: number;

    LfeFilter?: string;

    LfeControl?: string;

    Bitrate?: number;

    DrcLine?: string;

    DcFilter?: string;

    MetadataControl?: string;

    LtRtSurroundMixLevel?: number;

    LoRoCenterMixLevel?: number;

    DrcRf?: string;

    AttenuationControl?: string;

    BitstreamMode?: string;

    SurroundExMode?: string;

    StereoDownmix?: string;
  };

  export type InputSpecificationType = {
    Codec?: string;

    MaximumBitrate?: string;

    Resolution?: string;
  };

  export type TimecodeBurninSettingsType = {
    Prefix?: string;

    FontSize?: string;

    Position?: string;
  };

  export type AudioSelectorType = {
    SelectorSettings?: AudioSelectorSettingsType;

    Name?: string;
  };

  export type HlsS3SettingsType = {
    CannedAcl?: string;
  };

  export type MotionGraphicsSettingsType = {
    HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettingsType;
  };

  export type TtmlDestinationSettingsType = {
    StyleControl?: string;
  };

  export type MultiplexProgramChannelDestinationSettingsType = {
    ProgramName?: string;

    MultiplexId?: string;
  };

  export type H265SettingsType = {
    MvOverPictureBoundaries?: string;

    TimecodeBurninSettings?: TimecodeBurninSettingsType;

    Slices?: number;

    QvbrQualityLevel?: number;

    TileHeight?: number;

    FramerateNumerator?: number;

    GopClosedCadence?: number;

    FlickerAq?: string;

    Profile?: string;

    MvTemporalPredictor?: string;

    MinIInterval?: number;

    SceneChangeDetect?: string;

    FramerateDenominator?: number;

    GopSize?: number;

    AdaptiveQuantization?: string;

    TileWidth?: number;

    FilterSettings?: H265FilterSettingsType;

    MinQp?: number;

    AlternativeTransferFunction?: string;

    ColorSpaceSettings?: H265ColorSpaceSettingsType;

    Tier?: string;

    ParDenominator?: number;

    FixedAfd?: string;

    GopSizeUnits?: string;

    TilePadding?: string;

    AfdSignaling?: string;

    Bitrate?: number;

    ParNumerator?: number;

    RateControlMode?: string;

    ScanType?: string;

    BufSize?: number;

    TimecodeInsertion?: string;

    Deblocking?: string;

    ColorMetadata?: string;

    LookAheadRateControl?: string;

    Level?: string;

    MaxBitrate?: number;

    TreeblockSize?: string;
  };

  export type HlsBasicPutSettingsType = {
    FilecacheDuration?: number;

    RestartDelay?: number;

    NumRetries?: number;

    ConnectionRetryInterval?: number;
  };

  export type H264ColorSpaceSettingsType = {
    Rec601Settings?: Rec601SettingsType;

    Rec709Settings?: Rec709SettingsType;

    ColorSpacePassthroughSettings?: ColorSpacePassthroughSettingsType;
  };

  export type AudioNormalizationSettingsType = {
    TargetLkfs?: number;

    Algorithm?: string;

    AlgorithmControl?: string;
  };

  export type DvbSubDestinationSettingsType = {
    BackgroundOpacity?: number;

    FontResolution?: number;

    OutlineColor?: string;

    FontColor?: string;

    ShadowColor?: string;

    ShadowOpacity?: number;

    Font?: InputLocationType;

    ShadowYOffset?: number;

    Alignment?: string;

    XPosition?: number;

    FontSize?: string;

    YPosition?: number;

    OutlineSize?: number;

    TeletextGridControl?: string;

    FontOpacity?: number;

    ShadowXOffset?: number;

    BackgroundColor?: string;
  };

  export type OutputLockingSettingsType = {
    EpochLockingSettings?: EpochLockingSettingsType;

    PipelineLockingSettings?: PipelineLockingSettingsType;
  };

  export type CaptionDescriptionType = {
    DestinationSettings?: CaptionDestinationSettingsType;

    LanguageCode?: string;

    LanguageDescription?: string;

    Accessibility?: string;

    DvbDashAccessibility?: string;

    CaptionSelectorName?: string;

    CaptionDashRoles?: string[];

    Name?: string;
  };

  export type BurnInDestinationSettingsType = {
    BackgroundOpacity?: number;

    FontResolution?: number;

    OutlineColor?: string;

    FontColor?: string;

    ShadowColor?: string;

    ShadowOpacity?: number;

    Font?: InputLocationType;

    ShadowYOffset?: number;

    Alignment?: string;

    XPosition?: number;

    FontSize?: string;

    YPosition?: number;

    OutlineSize?: number;

    TeletextGridControl?: string;

    FontOpacity?: number;

    ShadowXOffset?: number;

    BackgroundColor?: string;
  };

  export type Mpeg2SettingsType = {
    TimecodeBurninSettings?: TimecodeBurninSettingsType;

    ColorSpace?: string;

    FixedAfd?: string;

    GopSizeUnits?: string;

    FramerateNumerator?: number;

    GopClosedCadence?: number;

    AfdSignaling?: string;

    DisplayAspectRatio?: string;

    ScanType?: string;

    TimecodeInsertion?: string;

    ColorMetadata?: string;

    FramerateDenominator?: number;

    GopSize?: number;

    AdaptiveQuantization?: string;

    SubgopLength?: string;

    FilterSettings?: Mpeg2FilterSettingsType;

    GopNumBFrames?: number;
  };

  export type HtmlMotionGraphicsSettingsType = {};

  export type MultiplexOutputSettingsType = {
    Destination?: OutputLocationRefType;

    ContainerSettings?: MultiplexContainerSettingsType;
  };

  export type AudioOnlyHlsSettingsType = {
    SegmentType?: string;

    AudioTrackType?: string;

    AudioGroupId?: string;

    AudioOnlyImage?: InputLocationType;
  };

  export type StaticKeySettingsType = {
    KeyProviderServer?: InputLocationType;

    StaticKeyValue?: string;
  };

  export type EmbeddedSourceSettingsType = {
    Source608ChannelNumber?: number;

    Scte20Detection?: string;

    Source608TrackNumber?: number;

    Convert608To708?: string;
  };

  export type CaptionRectangleType = {
    Height?: number;

    TopOffset?: number;

    Width?: number;

    LeftOffset?: number;
  };

  export type Av1SettingsType = {
    TimecodeBurninSettings?: TimecodeBurninSettingsType;

    ColorSpaceSettings?: Av1ColorSpaceSettingsType;

    QvbrQualityLevel?: number;

    ParDenominator?: number;

    FixedAfd?: string;

    GopSizeUnits?: string;

    FramerateNumerator?: number;

    AfdSignaling?: string;

    ParNumerator?: number;

    BufSize?: number;

    MinIInterval?: number;

    SceneChangeDetect?: string;

    FramerateDenominator?: number;

    LookAheadRateControl?: string;

    Level?: string;

    MaxBitrate?: number;

    GopSize?: number;
  };

  export type TimecodeConfigType = {
    SyncThreshold?: number;

    Source?: string;
  };

  export type AacSettingsType = {
    CodingMode?: string;

    RateControlMode?: string;

    SampleRate?: number;

    InputType?: string;

    VbrQuality?: string;

    RawFormat?: string;

    Spec?: string;

    Bitrate?: number;

    Profile?: string;
  };

  export type ArchiveOutputSettingsType = {
    Extension?: string;

    NameModifier?: string;

    ContainerSettings?: ArchiveContainerSettingsType;
  };

  export type VpcOutputSettingsType = {
    SecurityGroupIds?: string[];

    SubnetIds?: string[];

    PublicAddressAllocationIds?: string[];
  };

  export type AudioWatermarkSettingsType = {
    NielsenWatermarksSettings?: NielsenWatermarksSettingsType;
  };

  export type EbuTtDDestinationSettingsType = {
    FontFamily?: string;

    StyleControl?: string;

    CopyrightHolder?: string;

    FillLineGap?: string;
  };

  export type HlsCdnSettingsType = {
    HlsWebdavSettings?: HlsWebdavSettingsType;

    HlsS3Settings?: HlsS3SettingsType;

    HlsBasicPutSettings?: HlsBasicPutSettingsType;

    HlsMediaStoreSettings?: HlsMediaStoreSettingsType;

    HlsAkamaiSettings?: HlsAkamaiSettingsType;
  };

  export type VideoSelectorType = {
    ColorSpaceSettings?: VideoSelectorColorSpaceSettingsType;

    ColorSpaceUsage?: string;

    SelectorSettings?: VideoSelectorSettingsType;

    ColorSpace?: string;
  };

  export type MotionGraphicsConfigurationType = {
    MotionGraphicsSettings?: MotionGraphicsSettingsType;

    MotionGraphicsInsertion?: string;
  };

  export type Hdr10SettingsType = {
    MaxCll?: number;

    MaxFall?: number;
  };

  export type CaptionSelectorType = {
    LanguageCode?: string;

    SelectorSettings?: CaptionSelectorSettingsType;

    Name?: string;
  };

  export type Scte35TimeSignalAposType = {
    AdAvailOffset?: number;

    WebDeliveryAllowedFlag?: string;

    NoRegionalBlackoutFlag?: string;
  };

  export type DvbSdtSettingsType = {
    ServiceProviderName?: string;

    OutputSdt?: string;

    ServiceName?: string;

    RepInterval?: number;
  };

  export type NielsenWatermarksSettingsType = {
    NielsenNaesIiNwSettings?: NielsenNaesIiNwType;

    NielsenDistributionType?: string;

    NielsenCbetSettings?: NielsenCBETType;
  };

  export type MsSmoothGroupSettingsType = {
    SegmentationMode?: string;

    Destination?: OutputLocationRefType;

    EventStopBehavior?: string;

    FilecacheDuration?: number;

    CertificateMode?: string;

    AcquisitionPointId?: string;

    StreamManifestBehavior?: string;

    InputLossAction?: string;

    FragmentLength?: number;

    RestartDelay?: number;

    SparseTrackType?: string;

    EventIdMode?: string;

    TimestampOffsetMode?: string;

    AudioOnlyTimecodeControl?: string;

    NumRetries?: number;

    TimestampOffset?: string;

    EventId?: string;

    SendDelayMs?: number;

    ConnectionRetryInterval?: number;
  };

  export type EmbeddedDestinationSettingsType = {};

  export type OutputLocationRefType = {
    DestinationRefId?: string;
  };

  export type NielsenNaesIiNwType = {
    Timezone?: string;

    CheckDigitString?: string;

    Sid?: number;
  };

  /**
   * Resource Type definition for AWS::MediaLive::Channel
   */
  export type ChannelResourceType = {
    InputAttachments?: InputAttachmentType[];

    InputSpecification?: InputSpecificationType;

    Destinations?: OutputDestinationType[];

    DryRun?: boolean;

    /**
     * Create-only property
     */
    Vpc?: VpcOutputSettingsType;

    ChannelEngineVersion?: ChannelEngineVersionRequestType;

    Maintenance?: MaintenanceCreateSettingsType;

    LogLevel?: string;

    RoleArn?: string;

    Name?: string;

    ChannelClass?: string;

    EncoderSettings?: EncoderSettingsType;

    /**
     * Create-only property
     */
    AnywhereSettings?: AnywhereSettingsType;

    CdiInputSpecification?: CdiInputSpecificationType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    Inputs?: string[];

    Tags?: Record<string, any>;
  };
}
