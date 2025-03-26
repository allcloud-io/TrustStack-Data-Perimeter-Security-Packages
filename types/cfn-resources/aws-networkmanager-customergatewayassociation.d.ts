/**
 * TypeScript definitions for AWS::NetworkManager::CustomerGatewayAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::NetworkManager::CustomerGatewayAssociation type associates a customer gateway with a device and optionally, with a link.
 */
export namespace AWS_NetworkManager_CustomerGatewayAssociation {
  /**
   * The AWS::NetworkManager::CustomerGatewayAssociation type associates a customer gateway with a device and optionally, with a link.
   */
  export type CustomerGatewayAssociationResourceType = {
    /**
     * The ID of the global network.
     * Create-only property
     */
    GlobalNetworkId: string;

    /**
     * The Amazon Resource Name (ARN) of the customer gateway.
     * Create-only property
     */
    CustomerGatewayArn: string;

    /**
     * The ID of the device
     * Create-only property
     */
    DeviceId: string;

    /**
     * The ID of the link
     * Create-only property
     */
    LinkId?: string;
  };
}
