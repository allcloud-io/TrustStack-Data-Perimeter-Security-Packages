/**
 * TypeScript definitions for AWS::ApiGateway::GatewayResponse
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::GatewayResponse` resource creates a gateway response for your API. For more information, see API Gateway Responses in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGateway_GatewayResponse {
  /**
   * The `AWS::ApiGateway::GatewayResponse` resource creates a gateway response for your API. For more information, see API Gateway Responses in the *API Gateway Developer Guide*.
   */
  export type GatewayResponseResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    RestApiId: string;

    /**
     * Create-only property
     */
    ResponseType: string;

    StatusCode?: string;

    ResponseParameters?: Record<string, any>;

    ResponseTemplates?: Record<string, any>;
  };
}
