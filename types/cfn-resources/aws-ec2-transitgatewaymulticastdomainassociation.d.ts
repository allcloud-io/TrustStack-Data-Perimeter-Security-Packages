/**
 * TypeScript definitions for AWS::EC2::TransitGatewayMulticastDomainAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::TransitGatewayMulticastDomainAssociation type
 */
export namespace AWS_EC2_TransitGatewayMulticastDomainAssociation {
  /**
   * The AWS::EC2::TransitGatewayMulticastDomainAssociation type
   */
  export type TransitGatewayMulticastDomainAssociationResourceType = {
    /**
     * The ID of the transit gateway multicast domain.
     * Create-only property
     */
    TransitGatewayMulticastDomainId: string;

    /**
     * The ID of the transit gateway attachment.
     * Create-only property
     */
    TransitGatewayAttachmentId: string;

    /**
     * The ID of the resource.
     * Read-only property
     */
    ResourceId?: string;

    /**
     * The type of resource, for example a VPC attachment.
     * Read-only property
     */
    ResourceType?: string;

    /**
     * The state of the subnet association.
     * Read-only property
     */
    State?: string;

    /**
     * The IDs of the subnets to associate with the transit gateway multicast domain.
     * Create-only property
     */
    SubnetId: string;
  };
}
