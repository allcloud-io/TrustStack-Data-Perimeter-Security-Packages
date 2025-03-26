/**
 * TypeScript definitions for AWS::EC2::VPNConnection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.
 * To specify a VPN connection between a transit gateway and customer gateway, use the `TransitGatewayId` and `CustomerGatewayId` properties.
 * To specify a VPN connection between a virtual private gateway and customer gateway, use the `VpnGatewayId` and `CustomerGatewayId` properties.
 * For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 */
export namespace AWS_EC2_VPNConnection {
  /**
   * Options for sending VPN tunnel logs to CloudWatch.
   */
  export type CloudwatchLogOptionsSpecificationType = {
    /**
     * Enable or disable VPN tunnel logging feature. Default value is `False`.
     * Valid values: `True` | `False`
     */
    LogEnabled?: boolean;

    /**
     * Set log format. Default format is `json`.
     * Valid values: `json` | `text`
     */
    LogOutputFormat?: string;

    /**
     * The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.
     */
    LogGroupArn?: string;
  };

  /**
   * Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE negotiations.
   */
  export type Phase1IntegrityAlgorithmsRequestListValueType = {
    /**
     * The value for the integrity algorithm.
     */
    Value?: string;
  };

  /**
   * Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE negotiations.
   */
  export type Phase2EncryptionAlgorithmsRequestListValueType = {
    /**
     * The encryption algorithm.
     */
    Value?: string;
  };

  /**
   * Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE negotiations.
   */
  export type Phase2IntegrityAlgorithmsRequestListValueType = {
    /**
     * The integrity algorithm.
     */
    Value?: string;
  };

  /**
   * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE negotiations.
   */
  export type Phase1DHGroupNumbersRequestListValueType = {
    /**
     * The Diffie-Hellmann group number.
     */
    Value?: number;
  };

  /**
   * The tunnel options for a single VPN tunnel.
   */
  export type VpnTunnelOptionsSpecificationType = {
    /**
     * One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
     * Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
     */
    Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValueType[];

    /**
     * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.
     * Valid values: `2` | `5` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
     */
    Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValueType[];

    /**
     * The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
     * Constraints: A size /126 CIDR block from the local `fd00::/8` range.
     */
    TunnelInsideIpv6Cidr?: string;

    /**
     * The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify `start` for AWS to initiate the IKE negotiation.
     * Valid Values: `add` | `start`
     * Default: `add`
     */
    StartupAction?: string;

    /**
     * The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
     * Constraints: A size /30 CIDR block from the `169.254.0.0/16` range. The following CIDR blocks are reserved and cannot be used:
     * +   `169.254.0.0/30`
     * +   `169.254.1.0/30`
     * +   `169.254.2.0/30`
     * +   `169.254.3.0/30`
     * +   `169.254.4.0/30`
     * +   `169.254.5.0/30`
     * +   `169.254.169.252/30`
     */
    TunnelInsideCidr?: string;

    /**
     * The IKE versions that are permitted for the VPN tunnel.
     * Valid values: `ikev1` | `ikev2`
     */
    IKEVersions?: IKEVersionsRequestListValueType[];

    /**
     * Options for logging VPN tunnel activity.
     */
    LogOptions?: VpnTunnelLogOptionsSpecificationType;

    /**
     * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.
     * Valid values: `2` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
     */
    Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValueType[];

    /**
     * The number of packets in an IKE replay window.
     * Constraints: A value between 64 and 2048.
     * Default: `1024`
     */
    ReplayWindowSize?: number;

    /**
     * Turn on or off tunnel endpoint lifecycle control feature.
     */
    EnableTunnelLifecycleControl?: boolean;

    /**
     * The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `RekeyFuzzPercentage`.
     * Constraints: A value between 60 and half of `Phase2LifetimeSeconds`.
     * Default: `270`
     */
    RekeyMarginTimeSeconds?: number;

    /**
     * The action to take after DPD timeout occurs. Specify `restart` to restart the IKE initiation. Specify `clear` to end the IKE session.
     * Valid Values: `clear` | `none` | `restart`
     * Default: `clear`
     */
    DPDTimeoutAction?: string;

    /**
     * The lifetime for phase 2 of the IKE negotiation, in seconds.
     * Constraints: A value between 900 and 3,600. The value must be less than the value for `Phase1LifetimeSeconds`.
     * Default: `3600`
     */
    Phase2LifetimeSeconds?: number;

    /**
     * One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
     * Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
     */
    Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValueType[];

    /**
     * One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
     * Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
     */
    Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValueType[];

    /**
     * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.
     * Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).
     */
    PreSharedKey?: string;

    /**
     * The lifetime for phase 1 of the IKE negotiation, in seconds.
     * Constraints: A value between 900 and 28,800.
     * Default: `28800`
     */
    Phase1LifetimeSeconds?: number;

    /**
     * The percentage of the rekey window (determined by `RekeyMarginTimeSeconds`) during which the rekey time is randomly selected.
     * Constraints: A value between 0 and 100.
     * Default: `100`
     */
    RekeyFuzzPercentage?: number;

    /**
     * One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
     * Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
     */
    Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValueType[];

    /**
     * The number of seconds after which a DPD timeout occurs.
     * Constraints: A value greater than or equal to 30.
     * Default: `30`
     */
    DPDTimeoutSeconds?: number;
  };

  /**
   * Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.
   */
  export type Phase1EncryptionAlgorithmsRequestListValueType = {
    /**
     * The value for the encryption algorithm.
     */
    Value?: string;
  };

  /**
   * The IKE version that is permitted for the VPN tunnel.
   */
  export type IKEVersionsRequestListValueType = {
    /**
     * The IKE version.
     */
    Value?: string;
  };

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
   * Options for logging VPN tunnel activity.
   */
  export type VpnTunnelLogOptionsSpecificationType = {
    /**
     * Options for sending VPN tunnel logs to CloudWatch.
     */
    CloudwatchLogOptions?: CloudwatchLogOptionsSpecificationType;
  };

  /**
   * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE negotiations.
   */
  export type Phase2DHGroupNumbersRequestListValueType = {
    /**
     * The Diffie-Hellmann group number.
     */
    Value?: number;
  };

  /**
   * Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.
   * To specify a VPN connection between a transit gateway and customer gateway, use the `TransitGatewayId` and `CustomerGatewayId` properties.
   * To specify a VPN connection between a virtual private gateway and customer gateway, use the `VpnGatewayId` and `CustomerGatewayId` properties.
   * For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
   */
  export type VPNConnectionResourceType = {
    /**
     * The IPv6 CIDR on the AWS side of the VPN connection.
     * Default: `::/0`
     * Create-only property
     */
    RemoteIpv6NetworkCidr?: string;

    /**
     * The IPv4 CIDR on the AWS side of the VPN connection.
     * Default: `0.0.0.0/0`
     * Create-only property
     */
    RemoteIpv4NetworkCidr?: string;

    /**
     * The tunnel options for the VPN connection.
     * Create-only property
     */
    VpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecificationType[];

    /**
     * The ID of the customer gateway at your end of the VPN connection.
     * Create-only property
     */
    CustomerGatewayId: string;

    /**
     * The type of IPv4 address assigned to the outside interface of the customer gateway device.
     * Valid values: `PrivateIpv4` | `PublicIpv4`
     * Default: `PublicIpv4`
     * Create-only property
     */
    OutsideIpAddressType?: string;

    /**
     * Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.
     * If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify `true`.
     * Create-only property
     */
    StaticRoutesOnly?: boolean;

    /**
     * Indicate whether to enable acceleration for the VPN connection.
     * Default: `false`
     * Create-only property
     */
    EnableAcceleration?: boolean;

    /**
     * The ID of the transit gateway associated with the VPN connection.
     * You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.
     * Create-only property
     */
    TransitGatewayId?: string;

    /**
     * The type of VPN connection.
     * Create-only property
     */
    Type: string;

    /**
     * The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
     * Default: `0.0.0.0/0`
     * Create-only property
     */
    LocalIpv4NetworkCidr?: string;

    /**
     * The ID of the virtual private gateway at the AWS side of the VPN connection.
     * You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.
     * Create-only property
     */
    VpnGatewayId?: string;

    /**
     * The transit gateway attachment ID to use for the VPN tunnel.
     * Required if `OutsideIpAddressType` is set to `PrivateIpv4`.
     * Create-only property
     */
    TransportTransitGatewayAttachmentId?: string;

    /**
     * The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
     * Default: `::/0`
     * Create-only property
     */
    LocalIpv6NetworkCidr?: string;

    /**
     * Read-only property
     */
    VpnConnectionId?: string;

    /**
     * Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.
     * Default: `ipv4`
     * Create-only property
     */
    TunnelInsideIpVersion?: string;

    /**
     * Any tags assigned to the VPN connection.
     */
    Tags?: TagType[];
  };
}
