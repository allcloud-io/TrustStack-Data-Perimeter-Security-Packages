/**
 * TypeScript definitions for AWS::Cognito::UserPoolIdentityProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolIdentityProvider
 */
export namespace AWS_Cognito_UserPoolIdentityProvider {
  /**
   * Resource Type definition for AWS::Cognito::UserPoolIdentityProvider
   */
  export type UserPoolIdentityProviderResourceType = {
    /**
     * Create-only property
     */
    UserPoolId: string;

    /**
     * Create-only property
     */
    ProviderName: string;

    /**
     * Create-only property
     */
    ProviderType: string;

    ProviderDetails: Record<string, any>;

    IdpIdentifiers?: string[];

    AttributeMapping?: Record<string, any>;
  };
}
