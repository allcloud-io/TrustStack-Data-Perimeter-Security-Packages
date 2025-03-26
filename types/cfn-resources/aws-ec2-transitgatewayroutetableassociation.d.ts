/**
 * TypeScript definitions for AWS::EC2::TransitGatewayRouteTableAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTableAssociation
 */
export namespace AWS_EC2_TransitGatewayRouteTableAssociation {
  /**
   * Resource Type definition for AWS::EC2::TransitGatewayRouteTableAssociation
   */
  export type TransitGatewayRouteTableAssociationResourceType = {
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
