/**
 * TypeScript definitions for AWS::EC2::IPAMPool
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EC2::IPAMPool Type
 */
export namespace AWS_EC2_IPAMPool {
  /**
   * Represents a single IPv4 or IPv6 CIDR
   */
  export type CidrType = {};

  /**
   * An address space to be inserted into this pool. All allocations must be made from this address space.
   */
  export type ProvisionedCidrType = {
    Cidr: CidrType;
  };

  /**
   * The resource associated with this pool's space. Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations
   */
  export type SourceResourceType = {
    ResourceId: string;

    ResourceType: string;

    ResourceRegion: string;

    ResourceOwner: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Schema of AWS::EC2::IPAMPool Type
   */
  export type IPAMPoolResourceType = {
    /**
     * Id of the IPAM Pool.
     * Read-only property
     */
    IpamPoolId?: string;

    /**
     * The address family of the address space in this pool. Either IPv4 or IPv6.
     * Create-only property
     */
    AddressFamily: string;

    /**
     * The minimum allowed netmask length for allocations made from this pool.
     */
    AllocationMinNetmaskLength?: number;

    /**
     * The default netmask length for allocations made from this pool. This value is used when the netmask length of an allocation isn't specified.
     */
    AllocationDefaultNetmaskLength?: number;

    /**
     * The maximum allowed netmask length for allocations made from this pool.
     */
    AllocationMaxNetmaskLength?: number;

    /**
     * When specified, an allocation will not be allowed unless a resource has a matching set of tags.
     */
    AllocationResourceTags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the IPAM Pool.
     * Read-only property
     */
    Arn?: string;

    /**
     * Determines what to do if IPAM discovers resources that haven't been assigned an allocation. If set to true, an allocation will be made automatically.
     */
    AutoImport?: boolean;

    /**
     * Limits which service in Amazon Web Services that the pool can be used in.
     * Create-only property
     */
    AwsService?: string;

    Description?: string;

    /**
     * The Id of the scope this pool is a part of.
     * Create-only property
     */
    IpamScopeId: string;

    /**
     * The Amazon Resource Name (ARN) of the scope this pool is a part of.
     * Read-only property
     */
    IpamScopeArn?: string;

    /**
     * Determines whether this scope contains publicly routable space or space for a private network
     * Read-only property
     */
    IpamScopeType?: string;

    /**
     * The Amazon Resource Name (ARN) of the IPAM this pool is a part of.
     * Read-only property
     */
    IpamArn?: string;

    /**
     * The region of this pool. If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.
     * Create-only property
     */
    Locale?: string;

    /**
     * The depth of this pool in the source pool hierarchy.
     * Read-only property
     */
    PoolDepth?: number;

    /**
     * A list of cidrs representing the address space available for allocation in this pool.
     */
    ProvisionedCidrs?: ProvisionedCidrType[];

    /**
     * The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.
     * Create-only property
     */
    PublicIpSource?: string;

    /**
     * Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6.
     * Create-only property
     */
    PubliclyAdvertisable?: boolean;

    /**
     * The Id of this pool's source. If set, all space provisioned in this pool must be free space provisioned in the parent pool.
     * Create-only property
     */
    SourceIpamPoolId?: string;

    /**
     * Create-only property
     */
    SourceResource?: SourceResourceType;

    /**
     * The state of this pool. This can be one of the following values: "create-in-progress", "create-complete", "modify-in-progress", "modify-complete", "delete-in-progress", or "delete-complete"
     * Read-only property
     */
    State?: string;

    /**
     * An explanation of how the pool arrived at it current state.
     * Read-only property
     */
    StateMessage?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
