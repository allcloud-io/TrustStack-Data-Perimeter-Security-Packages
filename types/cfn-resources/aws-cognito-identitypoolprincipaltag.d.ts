/**
 * TypeScript definitions for AWS::Cognito::IdentityPoolPrincipalTag
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::IdentityPoolPrincipalTag
 */
export namespace AWS_Cognito_IdentityPoolPrincipalTag {
  /**
   * Resource Type definition for AWS::Cognito::IdentityPoolPrincipalTag
   */
  export type IdentityPoolPrincipalTagResourceType = {
    /**
     * Create-only property
     */
    IdentityPoolId: string;

    /**
     * Create-only property
     */
    IdentityProviderName: string;

    UseDefaults?: boolean;

    PrincipalTags?: Record<string, any>;
  };
}
