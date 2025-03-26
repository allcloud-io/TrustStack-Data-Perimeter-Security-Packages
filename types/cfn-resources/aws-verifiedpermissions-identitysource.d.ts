/**
 * TypeScript definitions for AWS::VerifiedPermissions::IdentitySource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::VerifiedPermissions::IdentitySource Resource Type
 */
export namespace AWS_VerifiedPermissions_IdentitySource {
  export type CognitoGroupConfigurationType = {
    GroupEntityType: string;
  };

  export type CognitoUserPoolConfigurationType = {
    UserPoolArn: string;

    ClientIds?: string[];

    GroupConfiguration?: CognitoGroupConfigurationType;
  };

  export type IdentitySourceConfigurationType = {};

  export type IdentitySourceDetailsType = {
    ClientIds?: string[];

    UserPoolArn?: string;

    DiscoveryUrl?: string;

    OpenIdIssuer?: OpenIdIssuerType;
  };

  export type OpenIdConnectAccessTokenConfigurationType = {
    PrincipalIdClaim?: string;

    Audiences?: string[];
  };

  export type OpenIdConnectConfigurationType = {
    Issuer: string;

    EntityIdPrefix?: string;

    GroupConfiguration?: OpenIdConnectGroupConfigurationType;

    TokenSelection: OpenIdConnectTokenSelectionType;
  };

  export type OpenIdConnectGroupConfigurationType = {
    GroupClaim: string;

    GroupEntityType: string;
  };

  export type OpenIdConnectIdentityTokenConfigurationType = {
    PrincipalIdClaim?: string;

    ClientIds?: string[];
  };

  export type OpenIdConnectTokenSelectionType = {};

  export type OpenIdIssuerType = {};

  /**
   * Definition of AWS::VerifiedPermissions::IdentitySource Resource Type
   */
  export type IdentitySourceResourceType = {
    Configuration: IdentitySourceConfigurationType;

    /**
     * Read-only property
     */
    Details?: IdentitySourceDetailsType;

    /**
     * Read-only property
     */
    IdentitySourceId?: string;

    /**
     * Create-only property
     */
    PolicyStoreId: string;

    PrincipalEntityType?: string;
  };
}
