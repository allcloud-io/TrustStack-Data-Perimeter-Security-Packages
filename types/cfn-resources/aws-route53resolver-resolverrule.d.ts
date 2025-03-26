/**
 * TypeScript definitions for AWS::Route53Resolver::ResolverRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Route53Resolver::ResolverRule
 */
export namespace AWS_Route53Resolver_ResolverRule {
  export type TargetAddressType = {
    /**
     * One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses.
     */
    Ipv6?: string;

    /**
     * One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.
     */
    Ip?: string;

    /**
     * The port at Ip that you want to forward DNS queries to.
     */
    Port?: string;

    /**
     * The protocol that you want to use to forward DNS queries.
     */
    Protocol?: string;

    /**
     * The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints
     */
    ServerNameIndication?: string;
  };

  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::Route53Resolver::ResolverRule
   */
  export type ResolverRuleResourceType = {
    /**
     * The ID of the endpoint that the rule is associated with.
     */
    ResolverEndpointId?: string;

    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps
     */
    DomainName?: string;

    /**
     * When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.
     * Create-only property
     */
    RuleType: string;

    /**
     * The ID of the endpoint that the rule is associated with.
     * Read-only property
     */
    ResolverRuleId?: string;

    /**
     * The Amazon Resource Name (ARN) of the resolver rule.
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.
     */
    TargetIps?: TargetAddressType[];

    /**
     * The name for the Resolver rule
     */
    Name?: string;
  };
}
