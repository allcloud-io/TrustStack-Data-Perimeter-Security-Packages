/**
 * TypeScript definitions for AWS::EC2::GatewayRouteTableAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates a gateway with a route table. The gateway and route table must be in the same VPC. This association causes the incoming traffic to the gateway to be routed according to the routes in the route table.
 */
export namespace AWS_EC2_GatewayRouteTableAssociation {
  /**
   * Associates a gateway with a route table. The gateway and route table must be in the same VPC. This association causes the incoming traffic to the gateway to be routed according to the routes in the route table.
   */
  export type GatewayRouteTableAssociationResourceType = {
    /**
     * The ID of the route table.
     */
    RouteTableId: string;

    /**
     * The ID of the gateway.
     * Create-only property
     */
    GatewayId: string;

    /**
     * The route table association ID.
     * Read-only property
     */
    AssociationId?: string;
  };
}
