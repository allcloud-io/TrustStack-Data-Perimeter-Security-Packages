/**
 * TypeScript definitions for AWS::EC2::IPAMResourceDiscoveryAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EC2::IPAMResourceDiscoveryAssociation Type
 */
export namespace AWS_EC2_IPAMResourceDiscoveryAssociation {
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
   * Resource Schema of AWS::EC2::IPAMResourceDiscoveryAssociation Type
   */
  export type IPAMResourceDiscoveryAssociationResourceType = {
    /**
     * Arn of the IPAM.
     * Read-only property
     */
    IpamArn?: string;

    /**
     * The home region of the IPAM.
     * Read-only property
     */
    IpamRegion?: string;

    /**
     * Id of the IPAM Resource Discovery Association.
     * Read-only property
     */
    IpamResourceDiscoveryAssociationId?: string;

    /**
     * The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association.
     * Create-only property
     */
    IpamResourceDiscoveryId: string;

    /**
     * The Id of the IPAM this Resource Discovery is associated to.
     * Create-only property
     */
    IpamId: string;

    /**
     * The Amazon Resource Name (ARN) of the resource discovery association is a part of.
     * Read-only property
     */
    IpamResourceDiscoveryAssociationArn?: string;

    /**
     * If the Resource Discovery Association exists due as part of CreateIpam.
     * Read-only property
     */
    IsDefault?: boolean;

    /**
     * The AWS Account ID for the account where the shared IPAM exists.
     * Read-only property
     */
    OwnerId?: string;

    /**
     * The operational state of the Resource Discovery Association. Related to Create/Delete activities.
     * Read-only property
     */
    State?: string;

    /**
     * The status of the resource discovery.
     * Read-only property
     */
    ResourceDiscoveryStatus?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
