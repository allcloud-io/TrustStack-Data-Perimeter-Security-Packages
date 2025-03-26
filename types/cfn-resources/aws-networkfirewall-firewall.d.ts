/**
 * TypeScript definitions for AWS::NetworkFirewall::Firewall
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::NetworkFirewall::Firewall
 */
export namespace AWS_NetworkFirewall_Firewall {
  /**
   * A resource ARN.
   */
  export type ResourceArnType = {};

  /**
   * An analysis type.
   */
  export type EnabledAnalysisTypeType = {};

  export type SubnetMappingType = {
    /**
     * A IPAddressType
     */
    IPAddressType?: string;

    /**
     * A SubnetId.
     */
    SubnetId: string;
  };

  /**
   * An endpoint Id.
   */
  export type EndpointIdType = {};

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource type definition for AWS::NetworkFirewall::Firewall
   */
  export type FirewallResourceType = {
    FirewallPolicyArn: ResourceArnType;

    Description?: string;

    /**
     * Read-only property
     */
    FirewallId?: string;

    SubnetChangeProtection?: boolean;

    /**
     * Create-only property
     */
    FirewallName: string;

    /**
     * Create-only property
     */
    VpcId: string;

    DeleteProtection?: boolean;

    /**
     * Read-only property
     */
    FirewallArn?: ResourceArnType;

    /**
     * Read-only property
     */
    EndpointIds?: EndpointIdType[];

    FirewallPolicyChangeProtection?: boolean;

    Tags?: TagType[];

    SubnetMappings: SubnetMappingType[];
  };
}
