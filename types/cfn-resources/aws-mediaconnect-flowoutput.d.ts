/**
 * TypeScript definitions for AWS::MediaConnect::FlowOutput
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::FlowOutput
 */
export namespace AWS_MediaConnect_FlowOutput {
  /**
   * Information about the encryption of the flow.
   */
  export type EncryptionType = {
    /**
     * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
     */
    Algorithm?: string;

    /**
     * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    KeyType?: string;

    /**
     * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
     */
    RoleArn: string;

    /**
     *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     */
    SecretArn: string;
  };

  /**
   * The settings for attaching a VPC interface to an output.
   */
  export type VpcInterfaceAttachmentType = {
    /**
     * The name of the VPC interface to use for this output.
     */
    VpcInterfaceName?: string;
  };

  /**
   * The media stream that is associated with the output, and the parameters for that association.
   */
  export type MediaStreamOutputConfigurationType = {
    /**
     * The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video streams on sources or outputs that use the CDI protocol, set the encoding name to raw. For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to jxsv.
     */
    EncodingName: string;

    /**
     * The media streams that you want to associate with the output.
     */
    DestinationConfigurations?: DestinationConfigurationType[];

    /**
     * A name that helps you distinguish one media stream from another.
     */
    MediaStreamName: string;

    /**
     * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
     */
    EncodingParameters?: EncodingParametersType;
  };

  /**
   * The definition of a media stream that is associated with the output.
   */
  export type DestinationConfigurationType = {
    /**
     * The IP address where contents of the media stream will be sent.
     */
    DestinationIp: string;

    /**
     * The port to use when the content of the media stream is distributed to the output.
     */
    DestinationPort: number;

    /**
     * The VPC interface that is used for the media stream associated with the output.
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
   * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
   */
  export type EncodingParametersType = {
    /**
     * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.
     */
    CompressionFactor: number;

    /**
     * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
     */
    EncoderProfile?: string;
  };

  /**
   * Resource schema for AWS::MediaConnect::FlowOutput
   */
  export type FlowOutputResourceType = {
    /**
     * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
     */
    FlowArn: string;

    /**
     * The ARN of the output.
     * Read-only property
     */
    OutputArn?: string;

    /**
     * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrAllowList?: string[];

    /**
     * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    Encryption?: EncryptionType;

    /**
     * A description of the output.
     */
    Description?: string;

    /**
     * The address where you want to send the output.
     */
    Destination?: string;

    /**
     * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
     */
    MaxLatency?: number;

    /**
     * The minimum latency in milliseconds.
     */
    MinLatency?: number;

    /**
     * The name of the output. This value must be unique within the current flow.
     * Create-only property
     */
    Name?: string;

    /**
     * The port to use when content is distributed to this output.
     */
    Port?: number;

    /**
     * The protocol that is used by the source or output.
     */
    Protocol: string;

    /**
     * The remote ID for the Zixi-pull stream.
     */
    RemoteId?: string;

    /**
     * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
     */
    SmoothingLatency?: number;

    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: string;

    /**
     * The name of the VPC interface attachment to use for this output.
     */
    VpcInterfaceAttachment?: VpcInterfaceAttachmentType;

    /**
     * The definition for each media stream that is associated with the output.
     */
    MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationType[];

    /**
     * An indication of whether the output should transmit data or not.
     */
    OutputStatus?: string;
  };
}
