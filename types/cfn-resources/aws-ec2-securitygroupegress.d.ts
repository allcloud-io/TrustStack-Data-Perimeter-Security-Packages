/**
 * TypeScript definitions for AWS::EC2::SecurityGroupEgress
 * Generated from CloudFormation Resource Schema
 */

/**
 * Adds the specified outbound (egress) rule to a security group.
 * An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 address range, the IP addresses that are specified by a prefix list, or the instances that are associated with a destination security group. For more information, see Security group rules.
 * You must specify exactly one of the following destinations: an IPv4 address range, an IPv6 address range, a prefix list, or a security group.
 * You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code. To specify all types or all codes, use -1.
 * Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur.
 */
export namespace AWS_EC2_SecurityGroupEgress {
  /**
   * Adds the specified outbound (egress) rule to a security group.
   * An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 address range, the IP addresses that are specified by a prefix list, or the instances that are associated with a destination security group. For more information, see Security group rules.
   * You must specify exactly one of the following destinations: an IPv4 address range, an IPv6 address range, a prefix list, or a security group.
   * You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code. To specify all types or all codes, use -1.
   * Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur.
   */
  export type SecurityGroupEgressResourceType = {
    /**
     * The IPv4 address range, in CIDR format.
     * You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
     * For examples of rules that you can add to security groups for specific access scenarios, see Security group rules for different use cases in the *User Guide*.
     * Create-only property
     */
    CidrIp?: string;

    /**
     * The IPv6 address range, in CIDR format.
     * You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
     * For examples of rules that you can add to security groups for specific access scenarios, see Security group rules for different use cases in the *User Guide*.
     * Create-only property
     */
    CidrIpv6?: string;

    /**
     * The description of an egress (outbound) security group rule.
     * Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*
     */
    Description?: string;

    /**
     * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
     * Create-only property
     */
    FromPort?: number;

    /**
     * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
     * Create-only property
     */
    ToPort?: number;

    /**
     * The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number (see Protocol Numbers).
     * Use `-1` to specify all protocols. When authorizing security group rules, specifying `-1` or a protocol number other than `tcp`, `udp`, `icmp`, or `icmpv6` allows traffic on all ports, regardless of any port range you specify. For `tcp`, `udp`, and `icmp`, you must specify a port range. For `icmpv6`, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
     * Create-only property
     */
    IpProtocol: string;

    /**
     * The ID of the security group.
     * You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
     * Create-only property
     */
    DestinationSecurityGroupId?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The prefix list IDs for an AWS service. This is the AWS service to access through a VPC endpoint from instances associated with the security group.
     * You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
     * Create-only property
     */
    DestinationPrefixListId?: string;

    /**
     * The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
     * Create-only property
     */
    GroupId: string;
  };
}
