/**
 * TypeScript definitions for AWS::MediaConnect::FlowSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::FlowSource
 */
export namespace AWS_MediaConnect_FlowSource {
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
   * Resource schema for AWS::MediaConnect::FlowSource
   */
  export type FlowSourceResourceType = {
    /**
     * The ARN of the flow.
     */
    FlowArn?: string;

    /**
     * The ARN of the source.
     * Read-only property
     */
    SourceArn?: string;

    /**
     * The type of encryption that is used on the content ingested from this source.
     */
    Decryption?: EncryptionType;

    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description: string;

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
     * Read-only property
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
     * Create-only property
     */
    Name: string;

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
     * Read-only property
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
  };
}
