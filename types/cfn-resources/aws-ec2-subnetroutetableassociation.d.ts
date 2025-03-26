/**
 * TypeScript definitions for AWS::EC2::SubnetRouteTableAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates a subnet with a route table. The subnet and route table must be in the same VPC. This association causes traffic originating from the subnet to be routed according to the routes in the route table. A route table can be associated with multiple subnets. To create a route table, see AWS::EC2::RouteTable.
 */
export namespace AWS_EC2_SubnetRouteTableAssociation {
  /**
   * Associates a subnet with a route table. The subnet and route table must be in the same VPC. This association causes traffic originating from the subnet to be routed according to the routes in the route table. A route table can be associated with multiple subnets. To create a route table, see AWS::EC2::RouteTable.
   */
  export type SubnetRouteTableAssociationResourceType = {
    /**
     * The ID of the route table.
     * The physical ID changes when the route table ID is changed.
     * Create-only property
     */
    RouteTableId: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The ID of the subnet.
     * Create-only property
     */
    SubnetId: string;
  };
}
