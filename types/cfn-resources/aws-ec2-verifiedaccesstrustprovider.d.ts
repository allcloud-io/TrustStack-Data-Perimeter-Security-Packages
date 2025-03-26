/**
 * TypeScript definitions for AWS::EC2::VerifiedAccessTrustProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::VerifiedAccessTrustProvider type describes a verified access trust provider
 */
export namespace AWS_EC2_VerifiedAccessTrustProvider {
  /**
   * The OpenID Connect details for an oidc -type, user-identity based trust provider.
   */
  export type OidcOptionsType = {
    /**
     * The OIDC issuer.
     */
    Issuer?: string;

    /**
     * The OIDC authorization endpoint.
     */
    AuthorizationEndpoint?: string;

    /**
     * The OIDC token endpoint.
     */
    TokenEndpoint?: string;

    /**
     * The OIDC user info endpoint.
     */
    UserInfoEndpoint?: string;

    /**
     * The client identifier.
     */
    ClientId?: string;

    /**
     * The client secret.
     */
    ClientSecret?: string;

    /**
     * OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. Each scope returns a specific set of user attributes.
     */
    Scope?: string;
  };

  /**
   * The options for device identity based trust providers.
   */
  export type DeviceOptionsType = {
    /**
     * The ID of the tenant application with the device-identity provider.
     */
    TenantId?: string;

    /**
     * URL Verified Access will use to verify authenticity of the device tokens.
     */
    PublicSigningKeyUrl?: string;
  };

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
   * The configuration options for customer provided KMS encryption.
   */
  export type SseSpecificationType = {};

  /**
   * The OpenID Connect details for an oidc -type, user-identity based trust provider for L4.
   */
  export type NativeApplicationOidcOptionsType = {
    /**
     * The OIDC issuer.
     */
    Issuer?: string;

    /**
     * The OIDC authorization endpoint.
     */
    AuthorizationEndpoint?: string;

    /**
     * The OIDC token endpoint.
     */
    TokenEndpoint?: string;

    /**
     * The OIDC user info endpoint.
     */
    UserInfoEndpoint?: string;

    /**
     * The client identifier.
     */
    ClientId?: string;

    /**
     * The client secret.
     */
    ClientSecret?: string;

    /**
     * OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. Each scope returns a specific set of user attributes.
     */
    Scope?: string;

    /**
     * The public signing key for endpoint
     */
    PublicSigningKeyEndpoint?: string;
  };

  /**
   * The AWS::EC2::VerifiedAccessTrustProvider type describes a verified access trust provider
   */
  export type VerifiedAccessTrustProviderResourceType = {
    /**
     * Type of trust provider. Possible values: user|device
     * Create-only property
     */
    TrustProviderType: string;

    /**
     * The type of device-based trust provider. Possible values: jamf|crowdstrike
     * Create-only property
     */
    DeviceTrustProviderType?: string;

    /**
     * The type of device-based trust provider. Possible values: oidc|iam-identity-center
     * Create-only property
     */
    UserTrustProviderType?: string;

    OidcOptions?: OidcOptionsType;

    /**
     * Create-only property
     */
    DeviceOptions?: DeviceOptionsType;

    /**
     * The identifier to be used when working with policy rules.
     * Create-only property
     */
    PolicyReferenceName: string;

    /**
     * The creation time.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The last updated time.
     * Read-only property
     */
    LastUpdatedTime?: string;

    /**
     * The ID of the Amazon Web Services Verified Access trust provider.
     * Read-only property
     */
    VerifiedAccessTrustProviderId?: string;

    /**
     * A description for the Amazon Web Services Verified Access trust provider.
     */
    Description?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The configuration options for customer provided KMS encryption.
     */
    SseSpecification?: Record<string, any>;

    NativeApplicationOidcOptions?: NativeApplicationOidcOptionsType;
  };
}
