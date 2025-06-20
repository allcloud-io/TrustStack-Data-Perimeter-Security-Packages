/**
 * TypeScript definitions for AWS::ApiGatewayV2::Authorizer
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGatewayV2::Authorizer` resource creates an authorizer for a WebSocket API or an HTTP API. To learn more, see Controlling and managing access to a WebSocket API in API Gateway and Controlling and managing access to an HTTP API in API Gateway in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGatewayV2_Authorizer {
  /**
   * The `JWTConfiguration` property specifies the configuration of a JWT authorizer. Required for the `JWT` authorizer type. Supported only for HTTP APIs.
   */
  export type JWTConfigurationType = {
    /**
     * The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: `https://cognito-idp.{region}.amazonaws.com/{userPoolId}`. Required for the `JWT` authorizer type. Supported only for HTTP APIs.
     */
    Issuer?: string;

    /**
     * A list of the intended recipients of the JWT. A valid JWT must provide an `aud` that matches at least one entry in this list. See RFC 7519. Required for the `JWT` authorizer type. Supported only for HTTP APIs.
     */
    Audience?: string[];
  };

  /**
   * The `AWS::ApiGatewayV2::Authorizer` resource creates an authorizer for a WebSocket API or an HTTP API. To learn more, see Controlling and managing access to a WebSocket API in API Gateway and Controlling and managing access to an HTTP API in API Gateway in the *API Gateway Developer Guide*.
   */
  export type AuthorizerResourceType = {
    /**
     * This parameter is not used.
     */
    IdentityValidationExpression?: string;

    /**
     * The authorizer's Uniform Resource Identifier (URI). For `REQUEST` authorizers, this must be a well-formed Lambda function URI, for example, `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations`. In general, the URI has this form: `arn:aws:apigateway:{region}:lambda:path/{service_api}`, where *{region}* is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial `/`. For Lambda functions, this is usually of the form `/2015-03-31/functions/[FunctionARN]/invocations`.
     */
    AuthorizerUri?: string;

    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for `REQUEST` authorizers.
     */
    AuthorizerCredentialsArn?: string;

    /**
     * The authorizer type. Specify `REQUEST` for a Lambda function using incoming request parameters. Specify `JWT` to use JSON Web Tokens (supported only for HTTP APIs).
     */
    AuthorizerType: string;

    /**
     * The `JWTConfiguration` property specifies the configuration of a JWT authorizer. Required for the `JWT` authorizer type. Supported only for HTTP APIs.
     */
    JwtConfiguration?: JWTConfigurationType;

    /**
     * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
     */
    AuthorizerResultTtlInSeconds?: number;

    /**
     * The identity source for which authorization is requested.
     * For a `REQUEST` authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with `$`, for example, `$request.header.Auth`, `$request.querystring.Name`. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see Working with Lambda authorizers for HTTP APIs.
     * For `JWT`, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example `$request.header.Authorization`.
     */
    IdentitySource?: string[];

    /**
     * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are `1.0` and `2.0`. To learn more, see Working with Lambda authorizers for HTTP APIs.
     */
    AuthorizerPayloadFormatVersion?: string;

    /**
     * The API identifier.
     * Create-only property
     */
    ApiId: string;

    /**
     * Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see Working with Lambda authorizers for HTTP APIs.
     */
    EnableSimpleResponses?: boolean;

    /**
     * Read-only property
     */
    AuthorizerId?: string;

    /**
     * The name of the authorizer.
     */
    Name: string;
  };
}
