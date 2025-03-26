/**
 * TypeScript definitions for AWS::MediaConnect::Flow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::Flow
 */
export namespace AWS_MediaConnect_Flow {
  /**
   * The settings for the source of the flow.
   */
  export type SourceType = {
    /**
     * The ARN of the source.
     */
    SourceArn?: string;

    /**
     * The type of decryption that is used on the content ingested from this source.
     */
    Decryption?: EncryptionType;

    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: string;

    /**
     * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
     */
    EntitlementArn?: string;

    /**
     * The source configuration for cloud flows receiving a stream from a bridge.
     */
    GatewayBridgeSource?: GatewayBridgeSourceType;

    /**
     * The IP address that the flow will be listening on for incoming content.
     */
    IngestIp?: string;

    /**
     * The port that the flow will be listening on for incoming content.
     */
    IngestPort?: number;

    /**
     * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
     */
    MaxBitrate?: number;

    /**
     * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
     */
    MaxLatency?: number;

    /**
     * The minimum latency in milliseconds.
     */
    MinLatency?: number;

    /**
     * The name of the source.
     */
    Name?: string;

    /**
     * The protocol that is used by the source.
     */
    Protocol?: string;

    /**
     * The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.
     */
    SenderIpAddress?: string;

    /**
     * The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.
     */
    SenderControlPort?: number;

    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: string;

    /**
     * The port that the flow will be listening on for incoming content.(ReadOnly)
     */
    SourceIngestPort?: string;

    /**
     * Source IP or domain name for SRT-caller protocol.
     */
    SourceListenerAddress?: string;

    /**
     * Source port for SRT-caller protocol.
     */
    SourceListenerPort?: number;

    /**
     * The name of the VPC Interface this Source is configured with.
     */
    VpcInterfaceName?: string;

    /**
     * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    WhitelistCidr?: string;

    /**
     * The size of the buffer (in milliseconds) to use to sync incoming source data.
     */
    MaxSyncBuffer?: number;

    /**
     * The media stream that is associated with the source, and the parameters for that association.
     */
    MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationType[];
  };

  /**
   * Information about the encryption of the flow.
   */
  export type EncryptionType = {
    /**
     * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
     */
    Algorithm?: string;

    /**
     * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
     */
    ConstantInitializationVector?: string;

    /**
     * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    DeviceId?: string;

    /**
     * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    KeyType?: string;

    /**
     * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Region?: string;

    /**
     * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    ResourceId?: string;

    /**
     * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
     */
    RoleArn: string;

    /**
     *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     */
    SecretArn?: string;

    /**
     * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Url?: string;
  };

  /**
   * The settings for source failover
   */
  export type FailoverConfigType = {
    State?: string;

    /**
     * Search window time to look for dash-7 packets
     */
    RecoveryWindow?: number;

    /**
     * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
     */
    FailoverMode?: string;

    /**
     * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
     */
    SourcePriority?: Record<string, any>;
  };

  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   */
  export type GatewayBridgeSourceType = {
    /**
     * The ARN of the bridge feeding this flow.
     */
    BridgeArn: string;

    /**
     * The name of the VPC interface attachment to use for this bridge source.
     */
    VpcInterfaceAttachment?: VpcInterfaceAttachmentType;
  };

  /**
   * The settings for attaching a VPC interface to an resource.
   */
  export type VpcInterfaceAttachmentType = {
    /**
     * The name of the VPC interface to use for this resource.
     */
    VpcInterfaceName?: string;
  };

  /**
   * The details of a VPC interface.
   */
  export type VpcInterfaceType = {
    /**
     * Immutable and has to be a unique against other VpcInterfaces in this Flow.
     */
    Name: string;

    /**
     * The type of network adapter that you want MediaConnect to use on this interface. If you don't set this value, it defaults to ENA.
     */
    NetworkInterfaceType?: string;

    /**
     * Role Arn MediaConnect can assume to create ENIs in customer's account.
     */
    RoleArn: string;

    /**
     * Security Group IDs to be used on ENI.
     */
    SecurityGroupIds: string[];

    /**
     * Subnet must be in the AZ of the Flow
     */
    SubnetId: string;

    /**
     * IDs of the network interfaces created in customer's account by MediaConnect.
     */
    NetworkInterfaceIds?: string[];
  };

  /**
   * The maintenance setting of a flow.
   */
  export type MaintenanceType = {
    /**
     * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
     */
    MaintenanceDay: string;

    /**
     * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
     */
    MaintenanceStartHour: string;
  };

  /**
   * A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.
   */
  export type MediaStreamType = {
    /**
     * A unique identifier for the media stream.
     */
    MediaStreamId: number;

    /**
     * The type of media stream.
     */
    MediaStreamType: string;

    /**
     * The resolution of the video.
     */
    VideoFormat?: string;

    /**
     * A name that helps you distinguish one media stream from another.
     */
    MediaStreamName: string;

    /**
     * A description that can help you quickly identify what your media stream is used for.
     */
    Description?: string;

    /**
     * Attributes that are related to the media stream.
     */
    Attributes?: MediaStreamAttributesType;

    /**
     * The sample rate for the stream. This value in measured in kHz.
     */
    ClockRate?: number;

    /**
     * The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
     */
    Fmt?: number;
  };

  /**
   * Attributes that are related to the media stream.
   */
  export type MediaStreamAttributesType = {
    /**
     * A set of parameters that define the media stream.
     */
    Fmtp?: FmtpType;

    /**
     * The audio language, in a format that is recognized by the receiver.
     */
    Lang?: string;
  };

  /**
   * A set of parameters that define the media stream.
   */
  export type FmtpType = {
    /**
     * The frame rate for the video stream, in frames/second. For example: 60000/1001.
     */
    ExactFramerate?: string;

    /**
     * The format used for the representation of color.
     */
    Colorimetry?: string;

    /**
     * The type of compression that was used to smooth the video's appearance.
     */
    ScanMode?: string;

    /**
     * The transfer characteristic system (TCS) that is used in the video.
     */
    Tcs?: string;

    /**
     * The encoding range of the video.
     */
    Range?: string;

    /**
     * The pixel aspect ratio (PAR) of the video.
     */
    Par?: string;

    /**
     * The format of the audio channel.
     */
    ChannelOrder?: string;
  };

  /**
   * The media stream that is associated with the source, and the parameters for that association.
   */
  export type MediaStreamSourceConfigurationType = {
    /**
     * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
     */
    EncodingName: string;

    /**
     * The media streams that you want to associate with the source.
     */
    InputConfigurations?: InputConfigurationType[];

    /**
     * A name that helps you distinguish one media stream from another.
     */
    MediaStreamName: string;
  };

  /**
   * The transport parameters associated with an incoming media stream.
   */
  export type InputConfigurationType = {
    /**
     * The port that the flow listens on for an incoming media stream.
     */
    InputPort: number;

    /**
     * The VPC interface where the media stream comes in from.
     */
    Interface: InterfaceType;
  };

  /**
   * The VPC interface that you want to use for the media stream associated with the output.
   */
  export type InterfaceType = {
    /**
     * The name of the VPC interface that you want to use for the media stream associated with the output.
     */
    Name: string;
  };

  /**
   * The settings for source monitoring.
   */
  export type SourceMonitoringConfigType = {
    /**
     * The state of thumbnail monitoring.
     */
    ThumbnailState?: string;

    /**
     * Indicates whether content quality analysis is enabled or disabled.
     */
    ContentQualityAnalysisState?: string;

    /**
     * Contains the settings for audio stream metrics monitoring.
     */
    AudioMonitoringSettings?: AudioMonitoringSettingType[];

    /**
     * Contains the settings for video stream metrics monitoring.
     */
    VideoMonitoringSettings?: VideoMonitoringSettingType[];
  };

  /**
   * Specifies the configuration for audio stream metrics monitoring.
   */
  export type AudioMonitoringSettingType = {
    SilentAudio?: SilentAudioType;
  };

  /**
   * Configures settings for the SilentAudio metric.
   */
  export type SilentAudioType = {
    /**
     * Indicates whether the SilentAudio metric is enabled or disabled.
     */
    State?: string;

    /**
     * Specifies the number of consecutive seconds of silence that triggers an event or alert.
     */
    ThresholdSeconds?: number;
  };

  /**
   * Specifies the configuration for video stream metrics monitoring.
   */
  export type VideoMonitoringSettingType = {
    BlackFrames?: BlackFramesType;

    FrozenFrames?: FrozenFramesType;
  };

  /**
   * Configures settings for the BlackFrames metric.
   */
  export type BlackFramesType = {
    /**
     * Indicates whether the BlackFrames metric is enabled or disabled.
     */
    State?: string;

    /**
     * Specifies the number of consecutive seconds of black frames that triggers an event or alert.
     */
    ThresholdSeconds?: number;
  };

  /**
   * Configures settings for the FrozenFrames metric.
   */
  export type FrozenFramesType = {
    /**
     * Indicates whether the FrozenFrames metric is enabled or disabled.
     */
    State?: string;

    /**
     * Specifies the number of consecutive seconds of a static image that triggers an event or alert.
     */
    ThresholdSeconds?: number;
  };

  /**
   * Resource schema for AWS::MediaConnect::Flow
   */
  export type FlowResourceType = {
    /**
     * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
     * Read-only property
     */
    FlowArn?: string;

    /**
     * The IP address from which video will be sent to output destinations.
     * Read-only property
     */
    EgressIp?: string;

    /**
     * The name of the flow.
     * Create-only property
     */
    Name: string;

    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
     * Create-only property
     */
    AvailabilityZone?: string;

    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.(ReadOnly)
     * Read-only property
     */
    FlowAvailabilityZone?: string;

    /**
     * The source of the flow.
     */
    Source: SourceType;

    /**
     * The source failover config of the flow.
     */
    SourceFailoverConfig?: FailoverConfigType;

    /**
     * The VPC interfaces that you added to this flow.
     */
    VpcInterfaces?: VpcInterfaceType[];

    /**
     * The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the flow.
     */
    MediaStreams?: MediaStreamType[];

    /**
     * The maintenance settings you want to use for the flow.
     */
    Maintenance?: MaintenanceType;

    /**
     * The source monitoring config of the flow.
     */
    SourceMonitoringConfig?: SourceMonitoringConfigType;
  };
}
