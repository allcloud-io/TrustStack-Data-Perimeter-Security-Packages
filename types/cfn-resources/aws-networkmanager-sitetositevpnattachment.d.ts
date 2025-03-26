/**
 * TypeScript definitions for AWS::NetworkManager::SiteToSiteVpnAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::NetworkManager::SiteToSiteVpnAttachment Resource Type definition.
 */
export namespace AWS_NetworkManager_SiteToSiteVpnAttachment {
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
   * AWS::NetworkManager::SiteToSiteVpnAttachment Resource Type definition.
   */
  export type SiteToSiteVpnAttachmentResourceType = {
    /**
     * The ID of a core network where you're creating a site-to-site VPN attachment.
     * Create-only property
     */
    CoreNetworkId: string;

    /**
     * The ARN of a core network for the VPC attachment.
     * Read-only property
     */
    CoreNetworkArn?: string;

    /**
     * The ID of the attachment.
     * Read-only property
     */
    AttachmentId?: string;

    /**
     * Owner account of the attachment.
     * Read-only property
     */
    OwnerAccountId?: string;

    /**
     * The type of attachment.
     * Read-only property
     */
    AttachmentType?: string;

    /**
     * The state of the attachment.
     * Read-only property
     */
    State?: string;

    /**
     * The Region where the edge is located.
     * Read-only property
     */
    EdgeLocation?: string;

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
     * The name of the segment that attachment is in.
     * Read-only property
     */
    SegmentName?: string;

    /**
     * The attachment to move from one segment to another.
     */
    ProposedSegmentChange?: ProposedSegmentChangeType;

    /**
     * The name of the network function group attachment.
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

    /**
     * The ARN of the site-to-site VPN attachment.
     * Create-only property
     */
    VpnConnectionArn: string;
  };
}
