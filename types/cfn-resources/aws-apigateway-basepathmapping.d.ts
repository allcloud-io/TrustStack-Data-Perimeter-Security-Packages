/**
 * TypeScript definitions for AWS::ApiGateway::BasePathMapping
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::BasePathMapping` resource creates a base path that clients who call your API must use in the invocation URL.
 */
export namespace AWS_ApiGateway_BasePathMapping {
  /**
   * The `AWS::ApiGateway::BasePathMapping` resource creates a base path that clients who call your API must use in the invocation URL.
   */
  export type BasePathMappingResourceType = {
    /**
     * Create-only property
     */
    BasePath?: string;

    /**
     * Create-only property
     */
    DomainName: string;

    RestApiId?: string;

    Stage?: string;
  };
}
