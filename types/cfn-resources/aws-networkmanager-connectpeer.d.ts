/**
 * TypeScript definitions for AWS::NetworkManager::ConnectPeer
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::NetworkManager::ConnectPeer Resource Type Definition.
 */
export namespace AWS_NetworkManager_ConnectPeer {
  export type ConnectPeerConfigurationType = {
    /**
     * The IP address of a core network.
     */
    CoreNetworkAddress?: string;

    /**
     * The IP address of the Connect peer.
     */
    PeerAddress?: string;

    /**
     * The inside IP addresses used for a Connect peer configuration.
     */
    InsideCidrBlocks?: string[];

    Protocol?: TunnelProtocolType;

    BgpConfigurations?: ConnectPeerBgpConfigurationType[];
  };

  /**
   * The protocol used for a Connect peer configuration.
   */
  export type TunnelProtocolType = {};

  /**
   * Bgp options
   */
  export type BgpOptionsType = {
    PeerAsn?: number;
  };

  /**
   * Bgp configuration for connect peer
   */
  export type ConnectPeerBgpConfigurationType = {
    /**
     * The ASN of the Coret Network.
     */
    CoreNetworkAsn?: number;

    /**
     * The ASN of the Connect peer.
     */
    PeerAsn?: number;

    /**
     * The address of a core network.
     */
    CoreNetworkAddress?: string;

    /**
     * The address of a core network Connect peer.
     */
    PeerAddress?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
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

  /**
   * AWS::NetworkManager::ConnectPeer Resource Type Definition.
   */
  export type ConnectPeerResourceType = {
    /**
     * The IP address of the Connect peer.
     * Create-only property
     */
    PeerAddress: string;

    /**
     * The IP address of a core network.
     * Create-only property
     */
    CoreNetworkAddress?: string;

    /**
     * Bgp options for connect peer.
     * Create-only property
     */
    BgpOptions?: BgpOptionsType;

    /**
     * The inside IP addresses used for a Connect peer configuration.
     * Create-only property
     */
    InsideCidrBlocks?: string[];

    /**
     * The ID of the core network.
     * Read-only property
     */
    CoreNetworkId?: string;

    /**
     * The ID of the attachment to connect.
     * Create-only property
     */
    ConnectAttachmentId: string;

    /**
     * The ID of the Connect peer.
     * Read-only property
     */
    ConnectPeerId?: string;

    /**
     * The Connect peer Regions where edges are located.
     * Read-only property
     */
    EdgeLocation?: string;

    /**
     * State of the connect peer.
     * Read-only property
     */
    State?: string;

    /**
     * Connect peer creation time.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Configuration of the connect peer.
     * Read-only property
     */
    Configuration?: ConnectPeerConfigurationType;

    /**
     * The subnet ARN for the connect peer.
     * Create-only property
     */
    SubnetArn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
