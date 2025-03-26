/**
 * TypeScript definitions for AWS::EC2::DHCPOptions
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::DHCPOptions
 */
export namespace AWS_EC2_DHCPOptions {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::EC2::DHCPOptions
   */
  export type DHCPOptionsResourceType = {
    /**
     * Read-only property
     */
    DhcpOptionsId?: string;

    /**
     * This value is used to complete unqualified DNS hostnames.
     * Create-only property
     */
    DomainName?: string;

    /**
     * The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.
     * Create-only property
     */
    DomainNameServers?: string[];

    /**
     * The IPv4 addresses of up to four NetBIOS name servers.
     * Create-only property
     */
    NetbiosNameServers?: string[];

    /**
     * The NetBIOS node type (1, 2, 4, or 8).
     * Create-only property
     */
    NetbiosNodeType?: number;

    /**
     * The IPv4 addresses of up to four Network Time Protocol (NTP) servers.
     * Create-only property
     */
    NtpServers?: string[];

    /**
     * The preferred Lease Time for ipV6 address in seconds.
     * Create-only property
     */
    Ipv6AddressPreferredLeaseTime?: number;

    /**
     * Any tags assigned to the DHCP options set.
     */
    Tags?: TagType[];
  };
}
