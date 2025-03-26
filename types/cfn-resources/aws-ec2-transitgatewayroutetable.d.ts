/**
 * TypeScript definitions for AWS::EC2::TransitGatewayRouteTable
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTable
 */
export namespace AWS_EC2_TransitGatewayRouteTable {
  export type TagType = {
    /**
     * The value of the associated tag key-value pair
     */
    Value: string;

    /**
     * The key of the associated tag key-value pair
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TransitGatewayRouteTable
   */
  export type TransitGatewayRouteTableResourceType = {
    /**
     * Transit Gateway Route Table primary identifier
     * Read-only property
     */
    TransitGatewayRouteTableId?: string;

    /**
     * The ID of the transit gateway.
     * Create-only property
     */
    TransitGatewayId: string;

    /**
     * Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.
     */
    Tags?: TagType[];
  };
}
