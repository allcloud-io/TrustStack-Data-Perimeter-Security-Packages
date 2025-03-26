/**
 * TypeScript definitions for AWS::EC2::LocalGatewayRouteTable
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Local Gateway Route Table which describes a route table for a local gateway.
 */
export namespace AWS_EC2_LocalGatewayRouteTable {
  export type TagsType = {};

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource Type definition for Local Gateway Route Table which describes a route table for a local gateway.
   */
  export type LocalGatewayRouteTableResourceType = {
    /**
     * The ID of the local gateway route table.
     * Read-only property
     */
    LocalGatewayRouteTableId?: string;

    /**
     * The ARN of the local gateway route table.
     * Read-only property
     */
    LocalGatewayRouteTableArn?: string;

    /**
     * The ID of the local gateway.
     * Create-only property
     */
    LocalGatewayId: string;

    /**
     * The ARN of the outpost.
     * Read-only property
     */
    OutpostArn?: string;

    /**
     * The owner of the local gateway route table.
     * Read-only property
     */
    OwnerId?: string;

    /**
     * The state of the local gateway route table.
     * Read-only property
     */
    State?: string;

    /**
     * The mode of the local gateway route table.
     * Create-only property
     */
    Mode?: string;

    /**
     * The tags for the local gateway route table.
     */
    Tags?: TagsType;
  };
}
