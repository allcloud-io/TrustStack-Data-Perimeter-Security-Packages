/**
 * TypeScript definitions for AWS::NetworkFirewall::TLSInspectionConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration
 */
export namespace AWS_NetworkFirewall_TLSInspectionConfiguration {
  /**
   * A resource ARN.
   */
  export type ResourceArnType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TLSInspectionConfigurationType = {
    ServerCertificateConfigurations?: ServerCertificateConfigurationType[];
  };

  export type ServerCertificateConfigurationType = {
    ServerCertificates?: ServerCertificateType[];

    Scopes?: ServerCertificateScopeType[];

    CertificateAuthorityArn?: ResourceArnType;

    CheckCertificateRevocationStatus?: Record<string, any>;
  };

  export type RevokedStatusActionType = {};

  export type UnknownStatusActionType = {};

  export type ServerCertificateType = {
    ResourceArn?: ResourceArnType;
  };

  export type ServerCertificateScopeType = {
    Sources?: AddressType[];

    Destinations?: AddressType[];

    SourcePorts?: PortRangeType[];

    DestinationPorts?: PortRangeType[];

    Protocols?: ProtocolNumberType[];
  };

  export type AddressType = {
    AddressDefinition: string;
  };

  export type PortRangeType = {
    FromPort: PortRangeBoundType;

    ToPort: PortRangeBoundType;
  };

  export type PortRangeBoundType = {};

  export type ProtocolNumberType = {};

  /**
   * Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration
   */
  export type TLSInspectionConfigurationResourceType = {
    /**
     * Create-only property
     */
    TLSInspectionConfigurationName: string;

    /**
     * Read-only property
     */
    TLSInspectionConfigurationArn?: ResourceArnType;

    TLSInspectionConfiguration: TLSInspectionConfigurationType;

    /**
     * Read-only property
     */
    TLSInspectionConfigurationId?: string;

    Description?: string;

    Tags?: TagType[];
  };
}
