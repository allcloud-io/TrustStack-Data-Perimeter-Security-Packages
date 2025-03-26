/**
 * TypeScript definitions for AWS::ApiGateway::DocumentationVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::DocumentationVersion` resource creates a snapshot of the documentation for an API. For more information, see Representation of API Documentation in API Gateway in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGateway_DocumentationVersion {
  /**
   * The `AWS::ApiGateway::DocumentationVersion` resource creates a snapshot of the documentation for an API. For more information, see Representation of API Documentation in API Gateway in the *API Gateway Developer Guide*.
   */
  export type DocumentationVersionResourceType = {
    Description?: string;

    /**
     * Create-only property
     */
    DocumentationVersion: string;

    /**
     * Create-only property
     */
    RestApiId: string;
  };
}
