/**
 * TypeScript definitions for AWS::EC2::CustomerGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a customer gateway.
 */
export namespace AWS_EC2_CustomerGateway {
  /**
   * Specifies a tag. For more information, see Resource tags.
   */
  export type TagType = {
    /**
     * The tag value.
     */
    Value: string;

    /**
     * The tag key.
     */
    Key: string;
  };

  /**
   * Specifies a customer gateway.
   */
  export type CustomerGatewayResourceType = {
    /**
     * The type of VPN connection that this customer gateway supports (`ipsec.1`).
     * Create-only property
     */
    Type: string;

    /**
     * Read-only property
     */
    CustomerGatewayId?: string;

    /**
     * IPv4 address for the customer gateway device's outside interface. The address must be static. If `OutsideIpAddressType` in your VPN connection options is set to `PrivateIpv4`, you can use an RFC6598 or RFC1918 private IPv4 address. If `OutsideIpAddressType` is set to `PublicIpv4`, you can use a public IPv4 address.
     * Create-only property
     */
    IpAddress: string;

    /**
     * For customer gateway devices that support BGP, specify the device's ASN. You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
     * Valid values: `2,147,483,648` to `4,294,967,295`
     * Create-only property
     */
    BgpAsnExtended?: number;

    /**
     * For customer gateway devices that support BGP, specify the device's ASN. You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
     * Default: 65000
     * Valid values: `1` to `2,147,483,647`
     * Default: 65000
     * Create-only property
     */
    BgpAsn?: number;

    /**
     * One or more tags for the customer gateway.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) for the customer gateway certificate.
     * Create-only property
     */
    CertificateArn?: string;

    /**
     * The name of customer gateway device.
     * Create-only property
     */
    DeviceName?: string;
  };
}
