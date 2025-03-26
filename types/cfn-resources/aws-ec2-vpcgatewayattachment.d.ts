/**
 * TypeScript definitions for AWS::EC2::VPCGatewayAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::VPCGatewayAttachment
 */
export namespace AWS_EC2_VPCGatewayAttachment {
  /**
   * Resource Type definition for AWS::EC2::VPCGatewayAttachment
   */
  export type VPCGatewayAttachmentResourceType = {
    /**
     * Used to identify if this resource is an Internet Gateway or Vpn Gateway Attachment
     * Read-only property
     */
    AttachmentType?: string;

    /**
     * The ID of the internet gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.
     */
    InternetGatewayId?: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;

    /**
     * The ID of the virtual private gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.
     */
    VpnGatewayId?: string;
  };
}
