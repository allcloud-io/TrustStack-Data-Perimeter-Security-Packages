/**
 * TypeScript definitions for AWS::PCAConnectorSCEP::Connector
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a Connector that allows certificate issuance through Simple Certificate Enrollment Protocol (SCEP)
 */
export namespace AWS_PCAConnectorSCEP_Connector {
  export type ConnectorTypeType = {};

  export type IntuneConfigurationType = {
    AzureApplicationId: string;

    Domain: string;
  };

  export type MobileDeviceManagementType = {};

  export type OpenIdConfigurationType = {
    Issuer?: string;

    Subject?: string;

    Audience?: string;
  };

  export type TagsType = {};

  export type UnitType = {};

  /**
   * Represents a Connector that allows certificate issuance through Simple Certificate Enrollment Protocol (SCEP)
   */
  export type ConnectorResourceType = {
    /**
     * Create-only property
     */
    CertificateAuthorityArn: string;

    /**
     * Read-only property
     */
    ConnectorArn?: string;

    /**
     * Read-only property
     */
    Type?: ConnectorTypeType;

    /**
     * Read-only property
     */
    Endpoint?: string;

    /**
     * Create-only property
     */
    MobileDeviceManagement?: MobileDeviceManagementType;

    /**
     * Read-only property
     */
    OpenIdConfiguration?: OpenIdConfigurationType;

    Tags?: TagsType;
  };
}
