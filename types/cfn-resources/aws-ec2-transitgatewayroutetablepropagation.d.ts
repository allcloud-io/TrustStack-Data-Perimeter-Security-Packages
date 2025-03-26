/**
 * TypeScript definitions for AWS::EC2::TransitGatewayRouteTablePropagation
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::EC2::TransitGatewayRouteTablePropagation Type
 */
export namespace AWS_EC2_TransitGatewayRouteTablePropagation {
  /**
   * AWS::EC2::TransitGatewayRouteTablePropagation Type
   */
  export type TransitGatewayRouteTablePropagationResourceType = {
    /**
     * The ID of transit gateway route table.
     * Create-only property
     */
    TransitGatewayRouteTableId: string;

    /**
     * The ID of transit gateway attachment.
     * Create-only property
     */
    TransitGatewayAttachmentId: string;
  };
}
