/**
 * TypeScript definitions for AWS::NetworkManager::TransitGatewayRegistration
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::NetworkManager::TransitGatewayRegistration type registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
 */
export namespace AWS_NetworkManager_TransitGatewayRegistration {
  /**
   * The AWS::NetworkManager::TransitGatewayRegistration type registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
   */
  export type TransitGatewayRegistrationResourceType = {
    /**
     * The ID of the global network.
     * Create-only property
     */
    GlobalNetworkId: string;

    /**
     * The Amazon Resource Name (ARN) of the transit gateway.
     * Create-only property
     */
    TransitGatewayArn: string;
  };
}
