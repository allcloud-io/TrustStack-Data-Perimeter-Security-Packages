/**
 * TypeScript definitions for AWS::NetworkManager::DirectConnectGatewayAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::NetworkManager::DirectConnectGatewayAttachment Resource Type
 */
export namespace AWS_NetworkManager_DirectConnectGatewayAttachment {
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
   * The attachment to move from one segment to another.
   */
  export type ProposedSegmentChangeType = {
    /**
     * The key-value tags that changed for the segment.
     */
    Tags?: TagType[];

    /**
     * The rule number in the policy document that applies to this change.
     */
    AttachmentPolicyRuleNumber?: number;

    /**
     * The name of the segment to change.
     */
    SegmentName?: string;
  };

  /**
   * The attachment to move from one network function group to another.
   */
  export type ProposedNetworkFunctionGroupChangeType = {
    /**
     * The key-value tags that changed for the network function group.
     */
    Tags?: TagType[];

    /**
     * The rule number in the policy document that applies to this change.
     */
    AttachmentPolicyRuleNumber?: number;

    /**
     * The name of the network function group to change.
     */
    NetworkFunctionGroupName?: string;
  };

  /**
   * AWS::NetworkManager::DirectConnectGatewayAttachment Resource Type
   */
  export type DirectConnectGatewayAttachmentResourceType = {
    /**
     * The ID of a core network for the Direct Connect Gateway attachment.
     * Create-only property
     */
    CoreNetworkId: string;

    /**
     * The ARN of a core network for the Direct Connect Gateway attachment.
     * Read-only property
     */
    CoreNetworkArn?: string;

    /**
     * Id of the attachment.
     * Read-only property
     */
    AttachmentId?: string;

    /**
     * Owner account of the attachment.
     * Read-only property
     */
    OwnerAccountId?: string;

    /**
     * Attachment type.
     * Read-only property
     */
    AttachmentType?: string;

    /**
     * State of the attachment.
     * Read-only property
     */
    State?: string;

    /**
     * The Regions where the edges are located.
     */
    EdgeLocations: string[];

    /**
     * The ARN of the Direct Connect Gateway.
     * Create-only property
     */
    DirectConnectGatewayArn: string;

    /**
     * The ARN of the Resource.
     * Read-only property
     */
    ResourceArn?: string;

    /**
     * The policy rule number associated with the attachment.
     * Read-only property
     */
    AttachmentPolicyRuleNumber?: number;

    /**
     * The name of the segment attachment..
     * Read-only property
     */
    SegmentName?: string;

    /**
     * The attachment to move from one segment to another.
     */
    ProposedSegmentChange?: ProposedSegmentChangeType;

    /**
     * The name of the network function group attachment.
     * Read-only property
     */
    NetworkFunctionGroupName?: string;

    /**
     * The attachment to move from one network function group to another.
     */
    ProposedNetworkFunctionGroupChange?: ProposedNetworkFunctionGroupChangeType;

    /**
     * Tags for the attachment.
     */
    Tags?: TagType[];

    /**
     * Creation time of the attachment.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Last update time of the attachment.
     * Read-only property
     */
    UpdatedAt?: string;
  };
}
