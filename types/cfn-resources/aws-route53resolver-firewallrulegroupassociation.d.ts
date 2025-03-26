/**
 * TypeScript definitions for AWS::Route53Resolver::FirewallRuleGroupAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroupAssociation.
 */
export namespace AWS_Route53Resolver_FirewallRuleGroupAssociation {
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
   * Resource schema for AWS::Route53Resolver::FirewallRuleGroupAssociation.
   */
  export type FirewallRuleGroupAssociationResourceType = {
    /**
     * Id
     * Read-only property
     */
    Id?: string;

    /**
     * Arn
     * Read-only property
     */
    Arn?: string;

    /**
     * FirewallRuleGroupId
     * Create-only property
     */
    FirewallRuleGroupId: string;

    /**
     * VpcId
     * Create-only property
     */
    VpcId: string;

    /**
     * FirewallRuleGroupAssociationName
     */
    Name?: string;

    /**
     * Priority
     */
    Priority: number;

    /**
     * MutationProtectionStatus
     */
    MutationProtection?: string;

    /**
     * ServicePrincipal
     * Read-only property
     */
    ManagedOwnerName?: string;

    /**
     * ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
     * Read-only property
     */
    Status?: string;

    /**
     * FirewallDomainListAssociationStatus
     * Read-only property
     */
    StatusMessage?: string;

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

    /**
     * Tags
     */
    Tags?: TagType[];
  };
}
