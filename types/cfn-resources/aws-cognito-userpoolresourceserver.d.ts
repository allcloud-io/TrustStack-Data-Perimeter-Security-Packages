/**
 * TypeScript definitions for AWS::Cognito::UserPoolResourceServer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolResourceServer
 */
export namespace AWS_Cognito_UserPoolResourceServer {
  export type ResourceServerScopeTypeType = {
    ScopeDescription: string;

    ScopeName: string;
  };

  /**
   * Resource Type definition for AWS::Cognito::UserPoolResourceServer
   */
  export type UserPoolResourceServerResourceType = {
    /**
     * Create-only property
     */
    UserPoolId: string;

    /**
     * Create-only property
     */
    Identifier: string;

    Name: string;

    Scopes?: ResourceServerScopeTypeType[];
  };
}
