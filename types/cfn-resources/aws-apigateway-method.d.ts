/**
 * TypeScript definitions for AWS::ApiGateway::Method
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::Method` resource creates API Gateway methods that define the parameters and body that clients must send in their requests.
 */
export namespace AWS_ApiGateway_Method {
  export type MethodResponseType = {
    ResponseParameters?: Record<string, any>;

    StatusCode: string;

    ResponseModels?: Record<string, any>;
  };

  /**
   * `Integration` is a property of the AWS::ApiGateway::Method resource that specifies information about the target backend that a method calls.
   */
  export type IntegrationType = {
    CacheNamespace?: string;

    ConnectionType?: string;

    IntegrationResponses?: IntegrationResponseType[];

    IntegrationHttpMethod?: string;

    Uri?: string;

    PassthroughBehavior?: string;

    RequestParameters?: Record<string, any>;

    ConnectionId?: string;

    Type: string;

    CacheKeyParameters?: string[];

    ContentHandling?: string;

    RequestTemplates?: Record<string, any>;

    TimeoutInMillis?: number;

    Credentials?: string;
  };

  /**
   * `IntegrationResponse` is a property of the Amazon API Gateway Method Integration property type that specifies the response that API Gateway sends after a method's backend finishes processing a request.
   */
  export type IntegrationResponseType = {
    ResponseTemplates?: Record<string, any>;

    SelectionPattern?: string;

    ContentHandling?: string;

    ResponseParameters?: Record<string, any>;

    StatusCode: string;
  };

  /**
   * The `AWS::ApiGateway::Method` resource creates API Gateway methods that define the parameters and body that clients must send in their requests.
   */
  export type MethodResourceType = {
    Integration?: IntegrationType;

    OperationName?: string;

    RequestModels?: Record<string, any>;

    /**
     * Create-only property
     */
    RestApiId: string;

    AuthorizationScopes?: string[];

    RequestValidatorId?: string;

    RequestParameters?: Record<string, any>;

    MethodResponses?: MethodResponseType[];

    AuthorizerId?: string;

    /**
     * Create-only property
     */
    ResourceId: string;

    ApiKeyRequired?: boolean;

    /**
     * The method's authorization type. This parameter is required. For valid values, see Method in the *API Gateway API Reference*.
     * If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.
     */
    AuthorizationType?: string;

    /**
     * Create-only property
     */
    HttpMethod: string;
  };
}
