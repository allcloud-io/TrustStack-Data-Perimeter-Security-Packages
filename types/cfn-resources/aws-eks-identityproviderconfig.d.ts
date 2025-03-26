/**
 * TypeScript definitions for AWS::EKS::IdentityProviderConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * An object representing an Amazon EKS IdentityProviderConfig.
 */
export namespace AWS_EKS_IdentityProviderConfig {
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
   * The key value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value.
   */
  export type RequiredClaimType = {
    /**
     * The key of the requiredClaims.
     */
    Key: string;

    /**
     * The value for the requiredClaims.
     */
    Value: string;
  };

  /**
   * An object representing an OpenID Connect (OIDC) configuration.
   */
  export type OidcIdentityProviderConfigType = {
    /**
     * This is also known as audience. The ID for the client application that makes authentication requests to the OpenID identity provider.
     */
    ClientId: string;

    /**
     * The JWT claim that the provider uses to return your groups.
     */
    GroupsClaim?: string;

    /**
     * The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups).
     */
    GroupsPrefix?: string;

    /**
     * The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens.
     */
    IssuerUrl: string;

    RequiredClaims?: RequiredClaimType[];

    /**
     * The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
     */
    UsernameClaim?: string;

    /**
     * The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.
     */
    UsernamePrefix?: string;
  };

  /**
   * An object representing an Amazon EKS IdentityProviderConfig.
   */
  export type IdentityProviderConfigResourceType = {
    /**
     * The name of the identity provider configuration.
     * Create-only property
     */
    ClusterName: string;

    /**
     * The type of the identity provider configuration.
     * Create-only property
     */
    Type: string;

    /**
     * The name of the OIDC provider configuration.
     * Create-only property
     */
    IdentityProviderConfigName?: string;

    /**
     * Create-only property
     */
    Oidc?: OidcIdentityProviderConfigType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The ARN of the configuration.
     * Read-only property
     */
    IdentityProviderConfigArn?: string;
  };
}
