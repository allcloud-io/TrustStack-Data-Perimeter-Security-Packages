/**
 * TypeScript definitions for AWS::EC2::LocalGatewayRouteTableVPCAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Local Gateway Route Table VPC Association which describes an association between a local gateway route table and a VPC.
 */
export namespace AWS_EC2_LocalGatewayRouteTableVPCAssociation {
  export type TagsType = {};

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource Type definition for Local Gateway Route Table VPC Association which describes an association between a local gateway route table and a VPC.
   */
  export type LocalGatewayRouteTableVPCAssociationResourceType = {
    /**
     * The ID of the local gateway.
     * Read-only property
     */
    LocalGatewayId?: string;

    /**
     * The ID of the local gateway route table.
     * Create-only property
     */
    LocalGatewayRouteTableId: string;

    /**
     * The ID of the association.
     * Read-only property
     */
    LocalGatewayRouteTableVpcAssociationId?: string;

    /**
     * The state of the association.
     * Read-only property
     */
    State?: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;

    /**
     * The tags for the association.
     */
    Tags?: TagsType;
  };
}
