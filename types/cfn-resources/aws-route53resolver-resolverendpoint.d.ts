/**
 * TypeScript definitions for AWS::Route53Resolver::ResolverEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Route53Resolver::ResolverEndpoint
 */
export namespace AWS_Route53Resolver_ResolverEndpoint {
  export type IpAddressRequestType = {
    SubnetId: string;

    Ipv6?: string;

    Ip?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::Route53Resolver::ResolverEndpoint
   */
  export type ResolverEndpointResourceType = {
    /**
     * Read-only property
     */
    ResolverEndpointId?: string;

    Protocols?: string[];

    /**
     * Create-only property
     */
    OutpostArn?: string;

    ResolverEndpointType?: string;

    /**
     * Create-only property
     */
    Direction: string;

    /**
     * Create-only property
     */
    SecurityGroupIds: string[];

    Name?: string;

    IpAddresses: IpAddressRequestType[];

    /**
     * Read-only property
     */
    IpAddressCount?: string;

    /**
     * Create-only property
     */
    PreferredInstanceType?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    HostVPCId?: string;

    Tags?: TagType[];
  };
}
