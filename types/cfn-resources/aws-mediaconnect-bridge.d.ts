/**
 * TypeScript definitions for AWS::MediaConnect::Bridge
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::Bridge
 */
export namespace AWS_MediaConnect_Bridge {
  /**
   * The settings for source failover.
   */
  export type FailoverConfigType = {
    State?: FailoverConfigStateEnumType;

    /**
     * The type of failover you choose for this flow. FAILOVER allows switching between different streams.
     */
    FailoverMode: FailoverModeEnumType;

    /**
     * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
     */
    SourcePriority?: SourcePriorityType;
  };

  export type BridgeStateEnumType = {};

  export type FailoverConfigStateEnumType = {};

  export type FailoverModeEnumType = {};

  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   */
  export type SourcePriorityType = {
    /**
     * The name of the source you choose as the primary source for this flow.
     */
    PrimarySource?: string;
  };

  /**
   * The output of the bridge.
   */
  export type BridgeOutputType = {
    NetworkOutput?: BridgeNetworkOutputType;
  };

  /**
   * The output of the bridge. A network output is delivered to your premises.
   */
  export type BridgeNetworkOutputType = {
    /**
     * The network output name.
     */
    Name: string;

    /**
     * The network output protocol.
     */
    Protocol: ProtocolEnumType;

    /**
     * The network output IP Address.
     */
    IpAddress: string;

    /**
     * The network output port.
     */
    Port: number;

    /**
     * The network output's gateway network name.
     */
    NetworkName: string;

    /**
     * The network output TTL.
     */
    Ttl: number;
  };

  /**
   * The bridge's source.
   */
  export type BridgeSourceType = {
    FlowSource?: BridgeFlowSourceType;

    NetworkSource?: BridgeNetworkSourceType;
  };

  /**
   * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
   */
  export type BridgeFlowSourceType = {
    /**
     * The name of the flow source.
     */
    Name: string;

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
     * The name of the network source.
     */
    Name: string;

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

  export type IngressGatewayBridgeType = {
    /**
     * The maximum expected bitrate of the ingress bridge.
     */
    MaxBitrate: number;

    /**
     * The maximum number of outputs on the ingress bridge.
     */
    MaxOutputs: number;
  };

  export type EgressGatewayBridgeType = {
    /**
     * The maximum expected bitrate of the egress bridge.
     */
    MaxBitrate: number;
  };

  /**
   * Resource schema for AWS::MediaConnect::Bridge
   */
  export type BridgeResourceType = {
    /**
     * The name of the bridge.
     */
    Name: string;

    /**
     * The Amazon Resource Number (ARN) of the bridge.
     * Read-only property
     */
    BridgeArn?: string;

    /**
     * The placement Amazon Resource Number (ARN) of the bridge.
     */
    PlacementArn: string;

    /**
     * Read-only property
     */
    BridgeState?: BridgeStateEnumType;

    SourceFailoverConfig?: FailoverConfigType;

    /**
     * The outputs on this bridge.
     */
    Outputs?: BridgeOutputType[];

    /**
     * The sources on this bridge.
     */
    Sources: BridgeSourceType[];

    IngressGatewayBridge?: IngressGatewayBridgeType;

    EgressGatewayBridge?: EgressGatewayBridgeType;
  };
}
