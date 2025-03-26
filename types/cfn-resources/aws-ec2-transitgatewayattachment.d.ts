/**
 * TypeScript definitions for AWS::EC2::TransitGatewayAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TransitGatewayAttachment
 */
export namespace AWS_EC2_TransitGatewayAttachment {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TransitGatewayAttachment
   */
  export type TransitGatewayAttachmentResourceType = {
    /**
     * The options for the transit gateway vpc attachment.
     */
    Options?: Record<string, any>;

    /**
     * Create-only property
     */
    TransitGatewayId: string;

    /**
     * Create-only property
     */
    VpcId: string;

    /**
     * Read-only property
     */
    Id?: string;

    SubnetIds: string[];

    Tags?: TagType[];
  };
}
