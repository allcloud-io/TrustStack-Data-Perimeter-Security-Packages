/**
 * TypeScript definitions for AWS::Route53Resolver::FirewallRuleGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroup.
 */
export namespace AWS_Route53Resolver_FirewallRuleGroup {
  /**
   * Firewall Rule associating the Rule Group to a Domain List
   */
  export type FirewallRuleType = {
    /**
     * ResourceId
     */
    FirewallDomainListId?: string;

    /**
     * ResourceId
     */
    FirewallThreatProtectionId?: string;

    /**
     * Rule Priority
     */
    Priority: number;

    /**
     * Rule Action
     */
    Action: string;

    /**
     * BlockResponse
     */
    BlockResponse?: string;

    /**
     * BlockOverrideDomain
     */
    BlockOverrideDomain?: string;

    /**
     * BlockOverrideDnsType
     */
    BlockOverrideDnsType?: string;

    /**
     * BlockOverrideTtl
     */
    BlockOverrideTtl?: number;

    /**
     * Qtype
     */
    Qtype?: string;

    /**
     * FirewallDomainRedirectionAction
     */
    ConfidenceThreshold?: string;

    /**
     * FirewallDomainRedirectionAction
     */
    DnsThreatProtection?: string;

    /**
     * FirewallDomainRedirectionAction
     */
    FirewallDomainRedirectionAction?: string;
  };

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
   * Resource schema for AWS::Route53Resolver::FirewallRuleGroup.
   */
  export type FirewallRuleGroupResourceType = {
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
     * FirewallRuleGroupName
     * Create-only property
     */
    Name?: string;

    /**
     * Count
     * Read-only property
     */
    RuleCount?: number;

    /**
     * ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
     * Read-only property
     */
    Status?: string;

    /**
     * FirewallRuleGroupStatus
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * AccountId
     * Read-only property
     */
    OwnerId?: string;

    /**
     * ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.
     * Read-only property
     */
    ShareStatus?: string;

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
     * FirewallRules
     */
    FirewallRules?: FirewallRuleType[];

    /**
     * Tags
     */
    Tags?: TagType[];
  };
}
