/**
 * TypeScript definitions for AWS::NetworkManager::TransitGatewayPeering
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::NetworkManager::TransitGatewayPeering Resoruce Type.
 */
export namespace AWS_NetworkManager_TransitGatewayPeering {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * AWS::NetworkManager::TransitGatewayPeering Resoruce Type.
   */
  export type TransitGatewayPeeringResourceType = {
    /**
     * The Id of the core network that you want to peer a transit gateway to.
     * Create-only property
     */
    CoreNetworkId: string;

    /**
     * The ARN (Amazon Resource Name) of the core network that you want to peer a transit gateway to.
     * Read-only property
     */
    CoreNetworkArn?: string;

    /**
     * The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network
     * Create-only property
     */
    TransitGatewayArn: string;

    /**
     * The ID of the TransitGatewayPeeringAttachment
     * Read-only property
     */
    TransitGatewayPeeringAttachmentId?: string;

    /**
     * The Id of the transit gateway peering
     * Read-only property
     */
    PeeringId?: string;

    /**
     * The state of the transit gateway peering
     * Read-only property
     */
    State?: string;

    /**
     * The location of the transit gateway peering
     * Read-only property
     */
    EdgeLocation?: string;

    /**
     * The ARN (Amazon Resource Name) of the resource that you will peer to a core network
     * Read-only property
     */
    ResourceArn?: string;

    /**
     * Peering owner account Id
     * Read-only property
     */
    OwnerAccountId?: string;

    /**
     * Peering type (TransitGatewayPeering)
     * Read-only property
     */
    PeeringType?: string;

    /**
     * The creation time of the transit gateway peering
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
