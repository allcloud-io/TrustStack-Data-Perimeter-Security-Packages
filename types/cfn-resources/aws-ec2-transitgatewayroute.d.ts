/**
 * TypeScript definitions for AWS::EC2::TransitGatewayRoute
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TransitGatewayRoute
 */
export namespace AWS_EC2_TransitGatewayRoute {
  /**
   * Resource Type definition for AWS::EC2::TransitGatewayRoute
   */
  export type TransitGatewayRouteResourceType = {
    /**
     * The ID of transit gateway route table.
     * Create-only property
     */
    TransitGatewayRouteTableId: string;

    /**
     * The CIDR range used for destination matches. Routing decisions are based on the most specific match.
     * Create-only property
     */
    DestinationCidrBlock: string;

    /**
     * Indicates whether to drop traffic that matches this route.
     * Create-only property
     */
    Blackhole?: boolean;

    /**
     * The ID of transit gateway attachment.
     * Create-only property
     */
    TransitGatewayAttachmentId?: string;
  };
}
