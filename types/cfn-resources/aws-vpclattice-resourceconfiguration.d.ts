/**
 * TypeScript definitions for AWS::VpcLattice::ResourceConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * VpcLattice ResourceConfiguration CFN resource
 */
export namespace AWS_VpcLattice_ResourceConfiguration {
  export type IpResourceType = {};

  export type PortRangeType = {};

  export type DnsResourceType = {
    IpAddressType: string;

    DomainName: string;
  };

  export type ArnResourceType = {};

  export type TagType = {
    Value?: string;

    Key: string;
  };

  export type IdType = {};

  /**
   * VpcLattice ResourceConfiguration CFN resource
   */
  export type ResourceConfigurationResourceType = {
    AllowAssociationToSharableServiceNetwork?: boolean;

    /**
     * Create-only property
     */
    ProtocolType?: string;

    /**
     * Create-only property
     */
    ResourceConfigurationType?: string;

    PortRanges?: PortRangeType[];

    ResourceConfigurationDefinition?: Record<string, any>;

    /**
     * Read-only property
     */
    Id?: IdType;

    /**
     * Create-only property
     */
    ResourceGatewayId?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ResourceConfigurationAuthType?: string;

    ResourceConfigurationGroupId?: IdType;

    Tags?: TagType[];

    Name?: string;
  };
}
