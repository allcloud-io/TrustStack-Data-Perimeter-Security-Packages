/**
 * TypeScript definitions for AWS::AppSync::GraphQLApi
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::GraphQLApi
 */
export namespace AWS_AppSync_GraphQLApi {
  export type OpenIDConnectConfigType = {
    /**
     * The client identifier of the Relying party at the OpenID identity provider.
     */
    ClientId?: string;

    /**
     * The number of milliseconds that a token is valid after being authenticated.
     */
    AuthTTL?: number;

    /**
     * The issuer for the OIDC configuration.
     */
    Issuer?: string;

    /**
     * The number of milliseconds that a token is valid after it's issued to a user.
     *
     */
    IatTTL?: number;
  };

  export type EnhancedMetricsConfigType = {
    /**
     * Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:
     *
     */
    OperationLevelMetricsConfig: string;

    /**
     * Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:
     *
     */
    ResolverLevelMetricsBehavior: string;

    /**
     * Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:
     *
     */
    DataSourceLevelMetricsBehavior: string;
  };

  export type CognitoUserPoolConfigType = {
    /**
     * A regular expression for validating the incoming Amazon Cognito user pool app client ID.
     */
    AppIdClientRegex?: string;

    /**
     * The user pool ID
     */
    UserPoolId?: string;

    /**
     * The AWS Region in which the user pool was created.
     */
    AwsRegion?: string;
  };

  export type LambdaAuthorizerConfigType = {
    /**
     * A regular expression for validation of tokens before the Lambda function is called.
     */
    IdentityValidationExpression?: string;

    /**
     * The ARN of the Lambda function to be called for authorization.
     */
    AuthorizerUri?: string;

    /**
     * The number of seconds a response should be cached for.
     */
    AuthorizerResultTtlInSeconds?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type UserPoolConfigType = {
    /**
     * A regular expression for validating the incoming Amazon Cognito user pool app client ID.
     */
    AppIdClientRegex?: string;

    /**
     * The user pool ID.
     */
    UserPoolId?: string;

    /**
     * The AWS Region in which the user pool was created.
     */
    AwsRegion?: string;

    /**
     * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
     */
    DefaultAction?: string;
  };

  export type AdditionalAuthenticationProviderType = {
    LambdaAuthorizerConfig?: LambdaAuthorizerConfigType;

    OpenIDConnectConfig?: OpenIDConnectConfigType;

    UserPoolConfig?: CognitoUserPoolConfigType;

    /**
     * The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.
     */
    AuthenticationType: string;
  };

  export type LogConfigType = {
    /**
     * Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.
     */
    ExcludeVerboseContent?: boolean;

    /**
     * The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.
     */
    FieldLogLevel?: string;

    /**
     * The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.
     */
    CloudWatchLogsRoleArn?: string;
  };

  /**
   * Resource Type definition for AWS::AppSync::GraphQLApi
   */
  export type GraphQLApiResourceType = {
    /**
     * A list of additional authentication providers for the GraphqlApi API.
     */
    AdditionalAuthenticationProviders?: AdditionalAuthenticationProviderType[];

    /**
     * Unique AWS AppSync GraphQL API identifier.
     * Read-only property
     */
    ApiId?: string;

    /**
     * The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).
     */
    ApiType?: string;

    /**
     * The Amazon Resource Name (ARN) of the API key
     * Read-only property
     */
    Arn?: string;

    /**
     * Security configuration for your GraphQL API
     */
    AuthenticationType: string;

    /**
     * Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.
     */
    EnhancedMetricsConfig?: EnhancedMetricsConfigType;

    /**
     * A map containing the list of resources with their properties and environment variables.
     */
    EnvironmentVariables?: Record<string, any>;

    /**
     * The fully qualified domain name (FQDN) of the endpoint URL of your GraphQL API.
     * Read-only property
     */
    GraphQLDns?: string;

    /**
     * The GraphQL endpoint ARN.
     * Read-only property
     */
    GraphQLEndpointArn?: string;

    /**
     * The Endpoint URL of your GraphQL API.
     * Read-only property
     */
    GraphQLUrl?: string;

    /**
     * Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.
     */
    IntrospectionConfig?: string;

    /**
     * A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.
     */
    LambdaAuthorizerConfig?: LambdaAuthorizerConfigType;

    /**
     * The Amazon CloudWatch Logs configuration.
     */
    LogConfig?: LogConfigType;

    /**
     * The AWS Identity and Access Management service role ARN for a merged API.
     */
    MergedApiExecutionRoleArn?: string;

    /**
     * The API name
     */
    Name: string;

    /**
     * The OpenID Connect configuration.
     */
    OpenIDConnectConfig?: OpenIDConnectConfigType;

    /**
     * The owner contact information for an API resource.
     */
    OwnerContact?: string;

    /**
     * The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query.
     */
    QueryDepthLimit?: number;

    /**
     * The fully qualified domain name (FQDN) of the real-time endpoint URL of your GraphQL API.
     * Read-only property
     */
    RealtimeDns?: string;

    /**
     * The GraphQL API real-time endpoint URL.
     * Read-only property
     */
    RealtimeUrl?: string;

    /**
     * The maximum number of resolvers that can be invoked in a single request.
     */
    ResolverCountLimit?: number;

    /**
     * An arbitrary set of tags (key-value pairs) for this GraphQL API.
     *
     */
    Tags?: TagType[];

    /**
     * Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.
     *
     */
    UserPoolConfig?: UserPoolConfigType;

    /**
     * Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). By default, the scope is set to Global if no value is provided.
     */
    Visibility?: string;

    /**
     * A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.
     *
     */
    XrayEnabled?: boolean;
  };
}
