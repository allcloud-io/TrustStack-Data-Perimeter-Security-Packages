/**
 * TypeScript definitions for AWS::EC2::CarrierGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Carrier Gateway which describes the Carrier Gateway resource
 */
export namespace AWS_EC2_CarrierGateway {
  export type TagsType = {};

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource Type definition for Carrier Gateway which describes the Carrier Gateway resource
   */
  export type CarrierGatewayResourceType = {
    /**
     * The ID of the carrier gateway.
     * Read-only property
     */
    CarrierGatewayId?: string;

    /**
     * The state of the carrier gateway.
     * Read-only property
     */
    State?: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;

    /**
     * The ID of the owner.
     * Read-only property
     */
    OwnerId?: string;

    /**
     * The tags for the carrier gateway.
     */
    Tags?: TagsType;
  };
}
