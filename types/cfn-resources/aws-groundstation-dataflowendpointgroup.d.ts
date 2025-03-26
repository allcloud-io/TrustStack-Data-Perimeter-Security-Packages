/**
 * TypeScript definitions for AWS::GroundStation::DataflowEndpointGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS Ground Station DataflowEndpointGroup schema for CloudFormation
 */
export namespace AWS_GroundStation_DataflowEndpointGroup {
  export type SocketAddressType = {
    Name?: string;

    Port?: number;
  };

  /**
   * The status of AgentEndpoint.
   */
  export type AgentStatusType = {};

  /**
   * The results of the audit.
   */
  export type AuditResultsType = {};

  /**
   * An integer range that has a minimum and maximum value.
   */
  export type IntegerRangeType = {
    /**
     * A minimum value.
     */
    Minimum?: number;

    /**
     * A maximum value.
     */
    Maximum?: number;
  };

  /**
   * A socket address with a port range.
   */
  export type RangedSocketAddressType = {
    /**
     * IPv4 socket address.
     */
    Name?: string;

    /**
     * Port range of a socket address.
     */
    PortRange?: IntegerRangeType;
  };

  /**
   * Egress address of AgentEndpoint with an optional mtu.
   */
  export type ConnectionDetailsType = {
    SocketAddress?: SocketAddressType;

    /**
     * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
     */
    Mtu?: number;
  };

  /**
   * Ingress address of AgentEndpoint with a port range and an optional mtu.
   */
  export type RangedConnectionDetailsType = {
    SocketAddress?: RangedSocketAddressType;

    /**
     * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
     */
    Mtu?: number;
  };

  /**
   * Information about AwsGroundStationAgentEndpoint.
   */
  export type AwsGroundStationAgentEndpointType = {
    Name?: string;

    EgressAddress?: ConnectionDetailsType;

    IngressAddress?: RangedConnectionDetailsType;

    AgentStatus?: AgentStatusType;

    AuditResults?: AuditResultsType;
  };

  export type DataflowEndpointType = {
    Name?: string;

    Address?: SocketAddressType;

    Mtu?: number;
  };

  export type SecurityDetailsType = {
    SubnetIds?: string[];

    SecurityGroupIds?: string[];

    RoleArn?: string;
  };

  export type EndpointDetailsType = {
    SecurityDetails?: SecurityDetailsType;

    Endpoint?: DataflowEndpointType;

    AwsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpointType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * AWS Ground Station DataflowEndpointGroup schema for CloudFormation
   */
  export type DataflowEndpointGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    EndpointDetails: EndpointDetailsType[];

    /**
     * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
     * Create-only property
     */
    ContactPrePassDurationSeconds?: number;

    /**
     * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
     * Create-only property
     */
    ContactPostPassDurationSeconds?: number;

    Tags?: TagType[];
  };
}
