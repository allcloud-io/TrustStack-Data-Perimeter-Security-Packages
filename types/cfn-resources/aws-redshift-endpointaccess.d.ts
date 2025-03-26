/**
 * TypeScript definitions for AWS::Redshift::EndpointAccess
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for a Redshift-managed VPC endpoint.
 */
export namespace AWS_Redshift_EndpointAccess {
  /**
   * Describes the members of a VPC security group.
   */
  export type VpcSecurityGroupType = {
    /**
     * The status of the VPC security group.
     */
    Status?: string;

    /**
     * The identifier of the VPC security group.
     */
    VpcSecurityGroupId?: string;
  };

  /**
   * Describes a network interface.
   */
  export type NetworkInterfaceType = {
    /**
     * The IPv4 address of the network interface within the subnet.
     */
    PrivateIpAddress?: string;

    /**
     * The Availability Zone.
     */
    AvailabilityZone?: string;

    /**
     * The subnet identifier.
     */
    SubnetId?: string;

    /**
     * The network interface identifier.
     */
    NetworkInterfaceId?: string;
  };

  /**
   * Resource schema for a Redshift-managed VPC endpoint.
   */
  export type EndpointAccessResourceType = {
    /**
     * The status of the endpoint.
     * Read-only property
     */
    EndpointStatus?: string;

    /**
     * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
     * Read-only property
     */
    VpcEndpoint?: Record<string, any>;

    /**
     * The DNS address of the endpoint.
     * Read-only property
     */
    Address?: string;

    /**
     * The name of the endpoint.
     * Create-only property
     */
    EndpointName: string;

    /**
     * A list of vpc security group ids to apply to the created endpoint access.
     */
    VpcSecurityGroupIds: string[];

    /**
     * The AWS account ID of the owner of the cluster.
     * Create-only property
     */
    ResourceOwner?: string;

    /**
     * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
     * Create-only property
     */
    SubnetGroupName: string;

    /**
     * The port number on which the cluster accepts incoming connections.
     * Read-only property
     */
    Port?: number;

    /**
     * The time (UTC) that the endpoint was created.
     * Read-only property
     */
    EndpointCreateTime?: string;

    /**
     * A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
     * Create-only property
     */
    ClusterIdentifier: string;

    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.
     * Read-only property
     */
    VpcSecurityGroups?: VpcSecurityGroupType[];
  };
}
