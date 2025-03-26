/**
 * TypeScript definitions for AWS::MediaLive::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaLive::Cluster Resource Type
 */
export namespace AWS_MediaLive_Cluster {
  /**
   * On premises settings which will have the interface network mappings and default Output logical interface
   */
  export type ClusterNetworkSettingsType = {
    /**
     * Default value if the customer does not define it in channel Output API
     */
    DefaultRoute?: string;

    /**
     * Network mappings for the cluster
     */
    InterfaceMappings?: InterfaceMappingType[];
  };

  /**
   * The current state of the Cluster.
   */
  export type ClusterStateType = {};

  /**
   * The hardware type for the cluster.
   */
  export type ClusterTypeType = {};

  /**
   * Network mappings for the cluster
   */
  export type InterfaceMappingType = {
    /**
     * logical interface name, unique in the list
     */
    LogicalInterfaceName?: string;

    /**
     * Network Id to be associated with the logical interface name, can be duplicated in list
     */
    NetworkId?: string;
  };

  /**
   * Network mappings for the cluster
   */
  export type InterfaceNetworkMappingType = {
    /**
     * logical interface name, unique in the list
     */
    LogicalInterfaceName?: string;

    /**
     * Network Id to be associated with the logical interface name, can be duplicated in list
     */
    NetworkId?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Definition of AWS::MediaLive::Cluster Resource Type
   */
  export type ClusterResourceType = {
    /**
     * The ARN of the Cluster.
     * Read-only property
     */
    Arn?: string;

    /**
     * The MediaLive Channels that are currently running on Nodes in this Cluster.
     * Read-only property
     */
    ChannelIds?: string[];

    /**
     * Create-only property
     */
    ClusterType?: ClusterTypeType;

    /**
     * The unique ID of the Cluster.
     * Read-only property
     */
    Id?: string;

    /**
     * The IAM role your nodes will use.
     * Create-only property
     */
    InstanceRoleArn?: string;

    /**
     * The user-specified name of the Cluster to be created.
     */
    Name?: string;

    NetworkSettings?: ClusterNetworkSettingsType;

    /**
     * Read-only property
     */
    State?: ClusterStateType;

    /**
     * A collection of key-value pairs.
     */
    Tags?: TagsType[];
  };
}
