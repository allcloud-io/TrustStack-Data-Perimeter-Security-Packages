/**
 * TypeScript definitions for AWS::ApiGateway::Authorizer
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::Authorizer` resource creates an authorization layer that API Gateway activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.
 */
export namespace AWS_ApiGateway_Authorizer {
  /**
   * The `AWS::ApiGateway::Authorizer` resource creates an authorization layer that API Gateway activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.
   */
  export type AuthorizerResourceType = {
    /**
     * Create-only property
     */
    RestApiId: string;

    /**
     * Read-only property
     */
    AuthorizerId?: string;

    AuthType?: string;

    AuthorizerCredentials?: string;

    AuthorizerResultTtlInSeconds?: number;

    AuthorizerUri?: string;

    IdentitySource?: string;

    IdentityValidationExpression?: string;

    Name: string;

    ProviderARNs?: string[];

    Type: string;
  };
}
