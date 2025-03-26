/**
 * TypeScript definitions for AWS::MediaLive::Network
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaLive::Network.
 */
export namespace AWS_MediaLive_Network {
  /**
   * IP address cidr pool
   */
  export type IpPoolType = {
    /**
     * IP address cidr pool
     */
    Cidr?: string;
  };

  export type NetworkStateType = {};

  export type RouteType = {
    /**
     * Ip address cidr
     */
    Cidr?: string;

    /**
     * IP address for the route packet paths
     */
    Gateway?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource schema for AWS::MediaLive::Network.
   */
  export type NetworkResourceType = {
    /**
     * The ARN of the Network.
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    AssociatedClusterIds?: string[];

    /**
     * The unique ID of the Network.
     * Read-only property
     */
    Id?: string;

    /**
     * The list of IP address cidr pools for the network
     */
    IpPools: IpPoolType[];

    /**
     * The user-specified name of the Network to be created.
     */
    Name: string;

    /**
     * The routes for the network
     */
    Routes?: RouteType[];

    /**
     * The current state of the Network.
     * Read-only property
     */
    State?: NetworkStateType;

    /**
     * A collection of key-value pairs.
     */
    Tags?: TagsType[];
  };
}
