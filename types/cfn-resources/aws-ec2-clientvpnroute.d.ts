/**
 * TypeScript definitions for AWS::EC2::ClientVpnRoute
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::ClientVpnRoute
 */
export namespace AWS_EC2_ClientVpnRoute {
  /**
   * Resource Type definition for AWS::EC2::ClientVpnRoute
   */
  export type ClientVpnRouteResourceType = {
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
    TargetVpcSubnetId: string;

    /**
     * Create-only property
     */
    Description?: string;

    /**
     * Create-only property
     */
    DestinationCidrBlock: string;
  };
}
