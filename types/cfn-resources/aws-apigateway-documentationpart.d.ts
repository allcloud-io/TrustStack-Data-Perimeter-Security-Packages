/**
 * TypeScript definitions for AWS::ApiGateway::DocumentationPart
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::DocumentationPart` resource creates a documentation part for an API. For more information, see Representation of API Documentation in API Gateway in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGateway_DocumentationPart {
  /**
   * The `Location` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. `Location` is a property of the AWS::ApiGateway::DocumentationPart resource.
   * For more information about each property, including constraints and valid values, see DocumentationPart in the *Amazon API Gateway REST API Reference*.
   */
  export type LocationType = {
    Method?: string;

    Name?: string;

    Path?: string;

    StatusCode?: string;

    Type?: string;
  };

  /**
   * The `AWS::ApiGateway::DocumentationPart` resource creates a documentation part for an API. For more information, see Representation of API Documentation in API Gateway in the *API Gateway Developer Guide*.
   */
  export type DocumentationPartResourceType = {
    /**
     * Read-only property
     */
    DocumentationPartId?: string;

    /**
     * Create-only property
     */
    Location: LocationType;

    Properties: string;

    /**
     * Create-only property
     */
    RestApiId: string;
  };
}
