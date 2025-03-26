/**
 * TypeScript definitions for AWS::NetworkManager::LinkAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::NetworkManager::LinkAssociation type associates a link to a device. The device and link must be in the same global network and the same site.
 */
export namespace AWS_NetworkManager_LinkAssociation {
  /**
   * The AWS::NetworkManager::LinkAssociation type associates a link to a device. The device and link must be in the same global network and the same site.
   */
  export type LinkAssociationResourceType = {
    /**
     * The ID of the global network.
     * Create-only property
     */
    GlobalNetworkId: string;

    /**
     * The ID of the device
     * Create-only property
     */
    DeviceId: string;

    /**
     * The ID of the link
     * Create-only property
     */
    LinkId: string;
  };
}
