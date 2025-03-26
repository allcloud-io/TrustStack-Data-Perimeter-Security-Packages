/**
 * TypeScript definitions for AWS::EC2::Route
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a route in a route table. For more information, see Routes in the *Amazon VPC User Guide*.
 * You must specify either a destination CIDR block or prefix list ID. You must also specify exactly one of the resources as the target.
 * If you create a route that references a transit gateway in the same template where you create the transit gateway, you must declare a dependency on the transit gateway attachment. The route table cannot use the transit gateway until it has successfully attached to the VPC. Add a DependsOn Attribute in the `AWS::EC2::Route` resource to explicitly declare a dependency on the `AWS::EC2::TransitGatewayAttachment` resource.
 */
export namespace AWS_EC2_Route {
  /**
   * Specifies a route in a route table. For more information, see Routes in the *Amazon VPC User Guide*.
   * You must specify either a destination CIDR block or prefix list ID. You must also specify exactly one of the resources as the target.
   * If you create a route that references a transit gateway in the same template where you create the transit gateway, you must declare a dependency on the transit gateway attachment. The route table cannot use the transit gateway until it has successfully attached to the VPC. Add a DependsOn Attribute in the `AWS::EC2::Route` resource to explicitly declare a dependency on the `AWS::EC2::TransitGatewayAttachment` resource.
   */
  export type RouteResourceType = {
    /**
     * The ID of the carrier gateway.
     * You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.
     */
    CarrierGatewayId?: string;

    /**
     * Read-only property
     */
    CidrBlock?: string;

    /**
     * The Amazon Resource Name (ARN) of the core network.
     */
    CoreNetworkArn?: string;

    /**
     * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.
     * Create-only property
     */
    DestinationCidrBlock?: string;

    /**
     * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
     * Create-only property
     */
    DestinationIpv6CidrBlock?: string;

    /**
     * The ID of a prefix list used for the destination match.
     * Create-only property
     */
    DestinationPrefixListId?: string;

    /**
     * [IPv6 traffic only] The ID of an egress-only internet gateway.
     */
    EgressOnlyInternetGatewayId?: string;

    /**
     * The ID of an internet gateway or virtual private gateway attached to your VPC.
     */
    GatewayId?: string;

    /**
     * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.
     */
    InstanceId?: string;

    /**
     * The ID of the local gateway.
     */
    LocalGatewayId?: string;

    /**
     * [IPv4 traffic only] The ID of a NAT gateway.
     */
    NatGatewayId?: string;

    /**
     * The ID of a network interface.
     */
    NetworkInterfaceId?: string;

    /**
     * The ID of the route table for the route.
     * Create-only property
     */
    RouteTableId: string;

    /**
     * The ID of a transit gateway.
     */
    TransitGatewayId?: string;

    /**
     * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
     */
    VpcEndpointId?: string;

    /**
     * The ID of a VPC peering connection.
     */
    VpcPeeringConnectionId?: string;
  };
}
