/**
 * TypeScript definitions for AWS::EC2::VPNConnectionRoute
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a static route for a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
 * For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 */
export namespace AWS_EC2_VPNConnectionRoute {
  /**
   * Specifies a static route for a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
   * For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
   */
  export type VPNConnectionRouteResourceType = {
    /**
     * The CIDR block associated with the local subnet of the customer network.
     * Create-only property
     */
    DestinationCidrBlock: string;

    /**
     * The ID of the VPN connection.
     * Create-only property
     */
    VpnConnectionId: string;
  };
}
