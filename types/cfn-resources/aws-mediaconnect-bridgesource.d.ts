/**
 * TypeScript definitions for AWS::MediaConnect::BridgeSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::BridgeSource
 */
export namespace AWS_MediaConnect_BridgeSource {
  /**
   * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
   */
  export type BridgeFlowSourceType = {
    /**
     * The ARN of the cloud flow used as a source of this bridge.
     */
    FlowArn: string;

    /**
     * The name of the VPC interface attachment to use for this source.
     */
    FlowVpcInterfaceAttachment?: VpcInterfaceAttachmentType;
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
   * The source of the bridge. A network source originates at your premises.
   */
  export type BridgeNetworkSourceType = {
    /**
     * The network source protocol.
     */
    Protocol: ProtocolEnumType;

    /**
     * The network source multicast IP.
     */
    MulticastIp: string;

    /**
     * The settings related to the multicast source.
     */
    MulticastSourceSettings?: MulticastSourceSettingsType;

    /**
     * The network source port.
     */
    Port: number;

    /**
     * The network source's gateway network name.
     */
    NetworkName: string;
  };

  /**
   * The settings related to the multicast source.
   */
  export type MulticastSourceSettingsType = {
    /**
     * The IP address of the source for source-specific multicast (SSM).
     */
    MulticastSourceIp?: string;
  };

  export type ProtocolEnumType = {};

  /**
   * Resource schema for AWS::MediaConnect::BridgeSource
   */
  export type BridgeSourceResourceType = {
    /**
     * The name of the source.
     * Create-only property
     */
    Name: string;

    /**
     * The Amazon Resource Number (ARN) of the bridge.
     * Create-only property
     */
    BridgeArn: string;

    FlowSource?: BridgeFlowSourceType;

    NetworkSource?: BridgeNetworkSourceType;
  };
}
