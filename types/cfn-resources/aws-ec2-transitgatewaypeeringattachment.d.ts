/**
 * TypeScript definitions for AWS::EC2::TransitGatewayPeeringAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::TransitGatewayPeeringAttachment type
 */
export namespace AWS_EC2_TransitGatewayPeeringAttachment {
  export type TagType = {
    /**
     * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
     */
    Value?: string;

    /**
     * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
     */
    Key?: string;
  };

  export type PeeringAttachmentStatusType = {
    /**
     * The status message, if applicable.
     */
    Message?: string;

    /**
     * The status code.
     */
    Code?: string;
  };

  /**
   * The AWS::EC2::TransitGatewayPeeringAttachment type
   */
  export type TransitGatewayPeeringAttachmentResourceType = {
    /**
     * The status of the transit gateway peering attachment.
     * Read-only property
     */
    Status?: PeeringAttachmentStatusType;

    /**
     * The ID of the transit gateway.
     * Create-only property
     */
    TransitGatewayId: string;

    /**
     * The ID of the peer transit gateway.
     * Create-only property
     */
    PeerTransitGatewayId: string;

    /**
     * The ID of the peer account
     * Create-only property
     */
    PeerAccountId: string;

    /**
     * The state of the transit gateway peering attachment. Note that the initiating state has been deprecated.
     * Read-only property
     */
    State?: string;

    /**
     * The time the transit gateway peering attachment was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Peer Region
     * Create-only property
     */
    PeerRegion: string;

    /**
     * The tags for the transit gateway peering attachment.
     */
    Tags?: TagType[];

    /**
     * The ID of the transit gateway peering attachment.
     * Read-only property
     */
    TransitGatewayAttachmentId?: string;
  };
}
