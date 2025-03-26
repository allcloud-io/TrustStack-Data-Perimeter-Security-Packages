/**
 * TypeScript definitions for AWS::EC2::TransitGatewayMulticastGroupMember
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::TransitGatewayMulticastGroupMember registers and deregisters members and sources (network interfaces) with the transit gateway multicast group
 */
export namespace AWS_EC2_TransitGatewayMulticastGroupMember {
  /**
   * The AWS::EC2::TransitGatewayMulticastGroupMember registers and deregisters members and sources (network interfaces) with the transit gateway multicast group
   */
  export type TransitGatewayMulticastGroupMemberResourceType = {
    /**
     * The IP address assigned to the transit gateway multicast group.
     * Create-only property
     */
    GroupIpAddress: string;

    /**
     * The ID of the transit gateway attachment.
     * Read-only property
     */
    TransitGatewayAttachmentId?: string;

    /**
     * The ID of the transit gateway multicast domain.
     * Create-only property
     */
    TransitGatewayMulticastDomainId: string;

    /**
     * The ID of the subnet.
     * Read-only property
     */
    SubnetId?: string;

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
     * The ID of the transit gateway attachment.
     * Create-only property
     */
    NetworkInterfaceId: string;

    /**
     * Indicates that the resource is a transit gateway multicast group member.
     * Read-only property
     */
    GroupMember?: boolean;

    /**
     * Indicates that the resource is a transit gateway multicast group member.
     * Read-only property
     */
    GroupSource?: boolean;

    /**
     * The member type (for example, static).
     * Read-only property
     */
    MemberType?: string;
  };
}
