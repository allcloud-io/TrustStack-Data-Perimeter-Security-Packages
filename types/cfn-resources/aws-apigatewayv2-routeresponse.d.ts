/**
 * TypeScript definitions for AWS::ApiGatewayV2::RouteResponse
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGatewayV2::RouteResponse` resource creates a route response for a WebSocket API. For more information, see Set up Route Responses for a WebSocket API in API Gateway in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGatewayV2_RouteResponse {
  /**
   * Specifies whether the parameter is required.
   */
  export type ParameterConstraintsType = {
    /**
     * Specifies whether the parameter is required.
     */
    Required: boolean;
  };

  export type RouteParametersType = {};

  /**
   * The `AWS::ApiGatewayV2::RouteResponse` resource creates a route response for a WebSocket API. For more information, see Set up Route Responses for a WebSocket API in API Gateway in the *API Gateway Developer Guide*.
   */
  export type RouteResponseResourceType = {
    /**
     * The route response key.
     */
    RouteResponseKey: string;

    /**
     * The route response parameters.
     */
    ResponseParameters?: RouteParametersType;

    /**
     * The route ID.
     * Create-only property
     */
    RouteId: string;

    /**
     * The model selection expression for the route response. Supported only for WebSocket APIs.
     */
    ModelSelectionExpression?: string;

    /**
     * The API identifier.
     * Create-only property
     */
    ApiId: string;

    /**
     * The response models for the route response.
     */
    ResponseModels?: Record<string, any>;

    /**
     * Read-only property
     */
    RouteResponseId?: string;
  };
}
