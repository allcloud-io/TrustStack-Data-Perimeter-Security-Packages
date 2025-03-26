/**
 * TypeScript definitions for AWS::EC2::VPNGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.
 * For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 */
export namespace AWS_EC2_VPNGateway {
  /**
   * Specifies a tag. For more information, see Resource tags.
   */
  export type TagType = {
    /**
     * The tag key.
     */
    Key: string;

    /**
     * The tag value.
     */
    Value: string;
  };

  /**
   * Specifies a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.
   * For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
   */
  export type VPNGatewayResourceType = {
    /**
     * Read-only property
     */
    VPNGatewayId?: string;

    /**
     * The private Autonomous System Number (ASN) for the Amazon side of a BGP session.
     * Create-only property
     */
    AmazonSideAsn?: number;

    /**
     * Any tags assigned to the virtual private gateway.
     */
    Tags?: TagType[];

    /**
     * The type of VPN connection the virtual private gateway supports.
     * Create-only property
     */
    Type: string;
  };
}
