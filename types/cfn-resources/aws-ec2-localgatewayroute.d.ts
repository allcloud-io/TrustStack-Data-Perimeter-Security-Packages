/**
 * TypeScript definitions for AWS::EC2::LocalGatewayRoute
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Local Gateway Route which describes a route for a local gateway route table.
 */
export namespace AWS_EC2_LocalGatewayRoute {
  /**
   * Resource Type definition for Local Gateway Route which describes a route for a local gateway route table.
   */
  export type LocalGatewayRouteResourceType = {
    /**
     * The CIDR block used for destination matches.
     * Create-only property
     */
    DestinationCidrBlock?: string;

    /**
     * The ID of the local gateway route table.
     * Create-only property
     */
    LocalGatewayRouteTableId?: string;

    /**
     * The ID of the virtual interface group.
     */
    LocalGatewayVirtualInterfaceGroupId?: string;

    /**
     * The ID of the network interface.
     */
    NetworkInterfaceId?: string;

    /**
     * The state of the route.
     * Read-only property
     */
    State?: string;

    /**
     * The route type.
     * Read-only property
     */
    Type?: string;
  };
}
