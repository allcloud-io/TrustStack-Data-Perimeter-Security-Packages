/**
 * TypeScript definitions for AWS::Route53Resolver::FirewallDomainList
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::FirewallDomainList.
 */
export namespace AWS_Route53Resolver_FirewallDomainList {
  /**
   * An inline list of domains to use for this domain list.
   */
  export type DomainsType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::Route53Resolver::FirewallDomainList.
   */
  export type FirewallDomainListResourceType = {
    /**
     * ResourceId
     * Read-only property
     */
    Id?: string;

    /**
     * Arn
     * Read-only property
     */
    Arn?: string;

    /**
     * FirewallDomainListName
     * Create-only property
     */
    Name?: string;

    /**
     * Count
     * Read-only property
     */
    DomainCount?: number;

    /**
     * ResolverFirewallDomainList, possible values are COMPLETE, DELETING, UPDATING, COMPLETE_IMPORT_FAILED, IMPORTING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
     * Read-only property
     */
    Status?: string;

    /**
     * FirewallDomainListAssociationStatus
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * ServicePrincipal
     * Read-only property
     */
    ManagedOwnerName?: string;

    /**
     * The id of the creator request.
     * Read-only property
     */
    CreatorRequestId?: string;

    /**
     * Rfc3339TimeString
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Rfc3339TimeString
     * Read-only property
     */
    ModificationTime?: string;

    Domains?: DomainsType;

    /**
     * S3 URL to import domains from.
     */
    DomainFileUrl?: string;

    /**
     * Tags
     */
    Tags?: TagType[];
  };
}
