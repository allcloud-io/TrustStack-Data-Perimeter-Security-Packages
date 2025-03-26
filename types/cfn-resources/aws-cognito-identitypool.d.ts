/**
 * TypeScript definitions for AWS::Cognito::IdentityPool
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::IdentityPool
 */
export namespace AWS_Cognito_IdentityPool {
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

  export type PushSyncType = {
    ApplicationArns?: string[];

    RoleArn?: string;
  };

  export type CognitoIdentityProviderType = {
    ServerSideTokenCheck?: boolean;

    ProviderName: string;

    ClientId: string;
  };

  export type CognitoStreamsType = {
    StreamingStatus?: string;

    StreamName?: string;

    RoleArn?: string;
  };

  /**
   * Resource Type definition for AWS::Cognito::IdentityPool
   */
  export type IdentityPoolResourceType = {
    PushSync?: PushSyncType;

    CognitoIdentityProviders?: CognitoIdentityProviderType[];

    DeveloperProviderName?: string;

    CognitoStreams?: CognitoStreamsType;

    SupportedLoginProviders?: Record<string, any>;

    /**
     * Read-only property
     */
    Name?: string;

    CognitoEvents?: Record<string, any>;

    /**
     * Read-only property
     */
    Id?: string;

    IdentityPoolName?: string;

    AllowUnauthenticatedIdentities: boolean;

    SamlProviderARNs?: string[];

    OpenIdConnectProviderARNs?: string[];

    AllowClassicFlow?: boolean;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    IdentityPoolTags?: TagType[];
  };
}
