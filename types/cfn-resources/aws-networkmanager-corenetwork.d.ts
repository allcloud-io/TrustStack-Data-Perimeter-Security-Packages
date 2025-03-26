/**
 * TypeScript definitions for AWS::NetworkManager::CoreNetwork
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::NetworkManager::CoreNetwork Resource Type Definition.
 */
export namespace AWS_NetworkManager_CoreNetwork {
  export type CoreNetworkSegmentType = {
    /**
     * Name of segment
     */
    Name?: string;

    EdgeLocations?: string[];

    SharedSegments?: string[];
  };

  export type CoreNetworkNetworkFunctionGroupType = {
    /**
     * Name of network function group
     */
    Name?: string;

    EdgeLocations?: string[];

    Segments?: Record<string, any>;
  };

  export type CoreNetworkEdgeType = {
    /**
     * The Region where a core network edge is located.
     */
    EdgeLocation?: string;

    /**
     * The ASN of a core network edge.
     */
    Asn?: number;

    InsideCidrBlocks?: string[];
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
   * AWS::NetworkManager::CoreNetwork Resource Type Definition.
   */
  export type CoreNetworkResourceType = {
    /**
     * The ID of the global network that your core network is a part of.
     * Create-only property
     */
    GlobalNetworkId: string;

    /**
     * The Id of core network
     * Read-only property
     */
    CoreNetworkId?: string;

    /**
     * The ARN (Amazon resource name) of core network
     * Read-only property
     */
    CoreNetworkArn?: string;

    /**
     * Live policy document for the core network, you must provide PolicyDocument in Json Format
     */
    PolicyDocument?: Record<string, any>;

    /**
     * The description of core network
     */
    Description?: string;

    /**
     * The creation time of core network
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The state of core network
     * Read-only property
     */
    State?: string;

    /**
     * The segments within a core network.
     * Read-only property
     */
    Segments?: CoreNetworkSegmentType[];

    /**
     * The network function groups within a core network.
     * Read-only property
     */
    NetworkFunctionGroups?: CoreNetworkNetworkFunctionGroupType[];

    /**
     * The edges within a core network.
     * Read-only property
     */
    Edges?: CoreNetworkEdgeType[];

    /**
     * Owner of the core network
     * Read-only property
     */
    OwnerAccount?: string;

    /**
     * The tags for the global network.
     */
    Tags?: TagType[];
  };
}
