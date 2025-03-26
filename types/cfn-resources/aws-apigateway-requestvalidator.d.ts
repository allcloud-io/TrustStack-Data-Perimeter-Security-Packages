/**
 * TypeScript definitions for AWS::ApiGateway::RequestValidator
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::RequestValidator` resource sets up basic validation rules for incoming requests to your API. For more information, see Enable Basic Request Validation for an API in API Gateway in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGateway_RequestValidator {
  /**
   * The `AWS::ApiGateway::RequestValidator` resource sets up basic validation rules for incoming requests to your API. For more information, see Enable Basic Request Validation for an API in API Gateway in the *API Gateway Developer Guide*.
   */
  export type RequestValidatorResourceType = {
    /**
     * Read-only property
     */
    RequestValidatorId?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Create-only property
     */
    RestApiId: string;

    ValidateRequestBody?: boolean;

    ValidateRequestParameters?: boolean;
  };
}
