/**
 * TypeScript definitions for AWS::EC2::IPAMResourceDiscovery
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EC2::IPAMResourceDiscovery Type
 */
export namespace AWS_EC2_IPAMResourceDiscovery {
  /**
   * The regions IPAM Resource Discovery is enabled for. Allows for monitoring.
   */
  export type IpamOperatingRegionType = {
    /**
     * The name of the region.
     */
    RegionName: string;
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
   * If your IPAM is integrated with AWS Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion.
   */
  export type IpamResourceDiscoveryOrganizationalUnitExclusionType = {
    /**
     * An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.
     */
    OrganizationsEntityPath: string;
  };

  /**
   * Resource Schema of AWS::EC2::IPAMResourceDiscovery Type
   */
  export type IPAMResourceDiscoveryResourceType = {
    /**
     * Id of the IPAM Pool.
     * Read-only property
     */
    IpamResourceDiscoveryId?: string;

    /**
     * Owner Account ID of the Resource Discovery
     * Read-only property
     */
    OwnerId?: string;

    /**
     * The regions Resource Discovery is enabled for. Allows resource discoveries to be created in these regions, as well as enabling monitoring
     */
    OperatingRegions?: IpamOperatingRegionType[];

    /**
     * The region the resource discovery is setup in.
     * Read-only property
     */
    IpamResourceDiscoveryRegion?: string;

    Description?: string;

    /**
     * A set of organizational unit (OU) exclusions for this resource.
     */
    OrganizationalUnitExclusions?: IpamResourceDiscoveryOrganizationalUnitExclusionType[];

    /**
     * Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6.
     * Read-only property
     */
    IsDefault?: boolean;

    /**
     * Amazon Resource Name (Arn) for the Resource Discovery.
     * Read-only property
     */
    IpamResourceDiscoveryArn?: string;

    /**
     * The state of this Resource Discovery.
     * Read-only property
     */
    State?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
