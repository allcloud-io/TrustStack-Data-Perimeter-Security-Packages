/**
 * TypeScript definitions for AWS::ApiGateway::Resource
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::Resource` resource creates a resource in an API.
 */
export namespace AWS_ApiGateway_Resource {
  /**
   * The `AWS::ApiGateway::Resource` resource creates a resource in an API.
   */
  export type ResourceResourceType = {
    /**
     * Create-only property
     */
    ParentId: string;

    /**
     * Create-only property
     */
    PathPart: string;

    /**
     * Read-only property
     */
    ResourceId?: string;

    /**
     * Create-only property
     */
    RestApiId: string;
  };
}
