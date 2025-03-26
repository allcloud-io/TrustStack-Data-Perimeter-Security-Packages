/**
 * TypeScript definitions for AWS::EC2::VPNGatewayRoutePropagation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::VPNGatewayRoutePropagation
 */
export namespace AWS_EC2_VPNGatewayRoutePropagation {
  /**
   * Resource Type definition for AWS::EC2::VPNGatewayRoutePropagation
   */
  export type VPNGatewayRoutePropagationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to
     */
    RouteTableIds: string[];

    /**
     * The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with
     */
    VpnGatewayId: string;
  };
}
