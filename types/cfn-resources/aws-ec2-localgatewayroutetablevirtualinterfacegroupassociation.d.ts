/**
 * TypeScript definitions for AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Local Gateway Route Table Virtual Interface Group Association which describes a local gateway route table virtual interface group association for a local gateway.
 */
export namespace AWS_EC2_LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  export type TagsType = {};

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource Type definition for Local Gateway Route Table Virtual Interface Group Association which describes a local gateway route table virtual interface group association for a local gateway.
   */
  export type LocalGatewayRouteTableVirtualInterfaceGroupAssociationResourceType =
    {
      /**
       * The ID of the local gateway route table virtual interface group association.
       * Read-only property
       */
      LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

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
       * The ARN of the local gateway route table.
       * Read-only property
       */
      LocalGatewayRouteTableArn?: string;

      /**
       * The ID of the local gateway route table virtual interface group.
       * Create-only property
       */
      LocalGatewayVirtualInterfaceGroupId: string;

      /**
       * The owner of the local gateway route table virtual interface group association.
       * Read-only property
       */
      OwnerId?: string;

      /**
       * The state of the local gateway route table virtual interface group association.
       * Read-only property
       */
      State?: string;

      /**
       * The tags for the local gateway route table virtual interface group association.
       */
      Tags?: TagsType;
    };
}
