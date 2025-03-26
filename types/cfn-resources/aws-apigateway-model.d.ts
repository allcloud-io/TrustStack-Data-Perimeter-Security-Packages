/**
 * TypeScript definitions for AWS::ApiGateway::Model
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::Model` resource defines the structure of a request or response payload for an API method.
 */
export namespace AWS_ApiGateway_Model {
  /**
   * The `AWS::ApiGateway::Model` resource defines the structure of a request or response payload for an API method.
   */
  export type ModelResourceType = {
    /**
     * Create-only property
     */
    ContentType?: string;

    Description?: string;

    /**
     * A name for the model. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the model name. For more information, see Name Type.
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * Create-only property
     */
    Name?: string;

    /**
     * Create-only property
     */
    RestApiId: string;

    Schema?: Record<string, any> | string;
  };
}
