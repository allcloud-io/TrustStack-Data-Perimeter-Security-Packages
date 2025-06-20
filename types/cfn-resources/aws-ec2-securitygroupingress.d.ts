/**
 * TypeScript definitions for AWS::EC2::SecurityGroupIngress
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::SecurityGroupIngress
 */
export namespace AWS_EC2_SecurityGroupIngress {
  /**
   * Resource Type definition for AWS::EC2::SecurityGroupIngress
   */
  export type SecurityGroupIngressResourceType = {
    /**
     * The Security Group Rule Id
     * Read-only property
     */
    Id?: string;

    /**
     * The IPv4 ranges
     * Create-only property
     */
    CidrIp?: string;

    /**
     * [VPC only] The IPv6 ranges
     * Create-only property
     */
    CidrIpv6?: string;

    /**
     * Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously
     */
    Description?: string;

    /**
     * The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.
     * Use this for ICMP and any protocol that uses ports.
     * Create-only property
     */
    FromPort?: number;

    /**
     * The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
     * You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.
     * Create-only property
     */
    GroupId?: string;

    /**
     * The name of the security group.
     * Create-only property
     */
    GroupName?: string;

    /**
     * The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).
     * [VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
     * Create-only property
     */
    IpProtocol: string;

    /**
     * [EC2-VPC only] The ID of a prefix list.
     *
     * Create-only property
     */
    SourcePrefixListId?: string;

    /**
     * The ID of the security group. You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.
     * Create-only property
     */
    SourceSecurityGroupId?: string;

    /**
     * [EC2-Classic, default VPC] The name of the source security group.
     * You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.
     * Create-only property
     */
    SourceSecurityGroupName?: string;

    /**
     * [nondefault VPC] The AWS account ID that owns the source security group. You can't specify this property with an IP address range.
     * If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.
     * Create-only property
     */
    SourceSecurityGroupOwnerId?: string;

    /**
     * The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.
     * Use this for ICMP and any protocol that uses ports.
     * Create-only property
     */
    ToPort?: number;
  };
}
