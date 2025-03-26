/**
 * TypeScript definitions for AWS::EC2::ClientVpnTargetNetworkAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::ClientVpnTargetNetworkAssociation
 */
export namespace AWS_EC2_ClientVpnTargetNetworkAssociation {
  /**
   * Resource Type definition for AWS::EC2::ClientVpnTargetNetworkAssociation
   */
  export type ClientVpnTargetNetworkAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ClientVpnEndpointId: string;

    /**
     * Create-only property
     */
    SubnetId: string;
  };
}
