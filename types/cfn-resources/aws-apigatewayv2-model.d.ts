/**
 * TypeScript definitions for AWS::ApiGatewayV2::Model
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGatewayV2::Model` resource updates data model for a WebSocket API. For more information, see Model Selection Expressions in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGatewayV2_Model {
  /**
   * The `AWS::ApiGatewayV2::Model` resource updates data model for a WebSocket API. For more information, see Model Selection Expressions in the *API Gateway Developer Guide*.
   */
  export type ModelResourceType = {
    /**
     * Read-only property
     */
    ModelId?: string;

    /**
     * The description of the model.
     */
    Description?: string;

    /**
     * The content-type for the model, for example, "application/json".
     */
    ContentType?: string;

    /**
     * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
     */
    Schema: Record<string, any>;

    /**
     * The API identifier.
     * Create-only property
     */
    ApiId: string;

    /**
     * The name of the model.
     */
    Name: string;
  };
}
