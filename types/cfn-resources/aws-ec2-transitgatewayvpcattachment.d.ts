/**
 * TypeScript definitions for AWS::EC2::TransitGatewayVpcAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TransitGatewayVpcAttachment
 */
export namespace AWS_EC2_TransitGatewayVpcAttachment {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TransitGatewayVpcAttachment
   */
  export type TransitGatewayVpcAttachmentResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    TransitGatewayId: string;

    /**
     * Create-only property
     */
    VpcId: string;

    /**
     * Create-only property
     */
    SubnetIds: string[];

    AddSubnetIds?: string[];

    RemoveSubnetIds?: string[];

    Tags?: TagType[];

    /**
     * The options for the transit gateway vpc attachment.
     */
    Options?: Record<string, any>;
  };
}
