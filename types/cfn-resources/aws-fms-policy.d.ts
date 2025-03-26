/**
 * TypeScript definitions for AWS::FMS::Policy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates an AWS Firewall Manager policy.
 */
export namespace AWS_FMS_Policy {
  /**
   * An AWS account ID.
   */
  export type AccountIdType = {};

  /**
   * A Base62 ID
   */
  export type Base62IdType = {};

  /**
   * An Organizational Unit ID.
   */
  export type OrganizationalUnitIdType = {};

  /**
   * An FMS includeMap or excludeMap.
   */
  export type IEMapType = {
    ACCOUNT?: AccountIdType[];

    ORGUNIT?: OrganizationalUnitIdType[];
  };

  /**
   * A policy tag.
   */
  export type PolicyTagType = {
    Key: string;

    Value: string;
  };

  /**
   * A resource tag.
   */
  export type ResourceTagType = {
    Key: string;

    Value?: string;
  };

  /**
   * An AWS resource type
   */
  export type ResourceTypeType = {};

  /**
   * A resource ARN.
   */
  export type ResourceArnType = {};

  /**
   * Firewall security service policy data.
   */
  export type SecurityServicePolicyDataType = {
    ManagedServiceData?: ManagedServiceDataType;

    Type: PolicyTypeType;

    PolicyOption?: PolicyOptionType;
  };

  /**
   * Firewall deployment mode.
   */
  export type FirewallDeploymentModelType = {};

  /**
   * Network ACL entry.
   */
  export type NetworkAclEntryType = {
    /**
     * CIDR block.
     */
    CidrBlock?: string;

    /**
     * Whether the entry is an egress entry.
     */
    Egress: boolean;

    /**
     * ICMP type and code.
     */
    IcmpTypeCode?: Record<string, any>;

    /**
     * IPv6 CIDR block.
     */
    Ipv6CidrBlock?: string;

    /**
     * Port range.
     */
    PortRange?: Record<string, any>;

    /**
     * Protocol.
     */
    Protocol: string;

    /**
     * Rule Action.
     */
    RuleAction: string;
  };

  /**
   * NetworkAcl entry list.
   */
  export type NetworkAclEntryListType = {};

  /**
   * Network ACL entry set.
   */
  export type NetworkAclEntrySetType = {
    FirstEntries?: NetworkAclEntryListType;

    ForceRemediateForFirstEntries: boolean;

    LastEntries?: NetworkAclEntryListType;

    ForceRemediateForLastEntries: boolean;
  };

  /**
   * Firewall managed service data.
   */
  export type ManagedServiceDataType = {};

  /**
   * Firewall policy type.
   */
  export type PolicyTypeType = {};

  /**
   * Network firewall policy.
   */
  export type NetworkFirewallPolicyType = {
    FirewallDeploymentModel: FirewallDeploymentModelType;
  };

  /**
   * Third party firewall policy.
   */
  export type ThirdPartyFirewallPolicyType = {
    FirewallDeploymentModel: FirewallDeploymentModelType;
  };

  /**
   * Network ACL common policy.
   */
  export type NetworkAclCommonPolicyType = {
    NetworkAclEntrySet: NetworkAclEntrySetType;
  };

  /**
   * Firewall policy option.
   */
  export type PolicyOptionType = {
    NetworkFirewallPolicy?: NetworkFirewallPolicyType;

    ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicyType;

    NetworkAclCommonPolicy?: NetworkAclCommonPolicyType;
  };

  /**
   * Creates an AWS Firewall Manager policy.
   */
  export type PolicyResourceType = {
    ExcludeMap?: IEMapType;

    ExcludeResourceTags: boolean;

    IncludeMap?: IEMapType;

    /**
     * Read-only property
     */
    Id?: string;

    PolicyName: string;

    PolicyDescription?: string;

    RemediationEnabled: boolean;

    ResourceTags?: ResourceTagType[];

    ResourceTagLogicalOperator?: string;

    ResourceType?: ResourceTypeType;

    ResourceTypeList?: ResourceTypeType[];

    ResourceSetIds?: Base62IdType[];

    SecurityServicePolicyData: SecurityServicePolicyDataType;

    /**
     * Read-only property
     */
    Arn?: ResourceArnType;

    DeleteAllPolicyResources?: boolean;

    ResourcesCleanUp?: boolean;

    Tags?: PolicyTagType[];
  };
}
