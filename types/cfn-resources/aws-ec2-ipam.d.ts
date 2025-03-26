/**
 * TypeScript definitions for AWS::EC2::IPAM
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EC2::IPAM Type
 */
export namespace AWS_EC2_IPAM {
  /**
   * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
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
  export type IpamOrganizationalUnitExclusionType = {
    /**
     * An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.
     */
    OrganizationsEntityPath: string;
  };

  /**
   * Resource Schema of AWS::EC2::IPAM Type
   */
  export type IPAMResourceType = {
    /**
     * Id of the IPAM.
     * Read-only property
     */
    IpamId?: string;

    /**
     * The Amazon Resource Name (ARN) of the IPAM.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Id of the default resource discovery, created with this IPAM.
     * Read-only property
     */
    DefaultResourceDiscoveryId?: string;

    /**
     * The Id of the default association to the default resource discovery, created with this IPAM.
     * Read-only property
     */
    DefaultResourceDiscoveryAssociationId?: string;

    /**
     * The count of resource discoveries associated with this IPAM.
     * Read-only property
     */
    ResourceDiscoveryAssociationCount?: number;

    Description?: string;

    /**
     * The Id of the default scope for publicly routable IP space, created with this IPAM.
     * Read-only property
     */
    PublicDefaultScopeId?: string;

    /**
     * The Id of the default scope for publicly routable IP space, created with this IPAM.
     * Read-only property
     */
    PrivateDefaultScopeId?: string;

    /**
     * The number of scopes that currently exist in this IPAM.
     * Read-only property
     */
    ScopeCount?: number;

    /**
     * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
     */
    OperatingRegions?: IpamOperatingRegionType[];

    /**
     * The tier of the IPAM.
     */
    Tier?: string;

    /**
     * Enable provisioning of GUA space in private pools.
     */
    EnablePrivateGua?: boolean;

    /**
     * A set of organizational unit (OU) exclusions for the default resource discovery, created with this IPAM.
     */
    DefaultResourceDiscoveryOrganizationalUnitExclusions?: IpamOrganizationalUnitExclusionType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
