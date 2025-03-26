/**
 * TypeScript definitions for AWS::Cognito::UserPoolClient
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolClient
 */
export namespace AWS_Cognito_UserPoolClient {
  export type AnalyticsConfigurationType = {
    ApplicationArn?: string;

    ApplicationId?: string;

    ExternalId?: string;

    RoleArn?: string;

    UserDataShared?: boolean;
  };

  export type TokenValidityUnitsType = {
    AccessToken?: string;

    IdToken?: string;

    RefreshToken?: string;
  };

  /**
   * Resource Type definition for AWS::Cognito::UserPoolClient
   */
  export type UserPoolClientResourceType = {
    ClientName?: string;

    ExplicitAuthFlows?: string[];

    /**
     * Create-only property
     */
    GenerateSecret?: boolean;

    ReadAttributes?: string[];

    AuthSessionValidity?: number;

    RefreshTokenValidity?: number;

    AccessTokenValidity?: number;

    IdTokenValidity?: number;

    TokenValidityUnits?: TokenValidityUnitsType;

    /**
     * Create-only property
     */
    UserPoolId: string;

    WriteAttributes?: string[];

    AllowedOAuthFlows?: string[];

    AllowedOAuthFlowsUserPoolClient?: boolean;

    AllowedOAuthScopes?: string[];

    CallbackURLs?: string[];

    DefaultRedirectURI?: string;

    LogoutURLs?: string[];

    SupportedIdentityProviders?: string[];

    AnalyticsConfiguration?: AnalyticsConfigurationType;

    PreventUserExistenceErrors?: string;

    EnableTokenRevocation?: boolean;

    EnablePropagateAdditionalUserContextData?: boolean;

    /**
     * Read-only property
     */
    Name?: string;

    /**
     * Read-only property
     */
    ClientSecret?: string;

    /**
     * Read-only property
     */
    ClientId?: string;
  };
}
