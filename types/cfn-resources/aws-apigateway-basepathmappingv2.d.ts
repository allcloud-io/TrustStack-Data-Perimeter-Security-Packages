/**
 * TypeScript definitions for AWS::ApiGateway::BasePathMappingV2
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ApiGateway::BasePathMappingV2
 */
export namespace AWS_ApiGateway_BasePathMappingV2 {
  /**
   * Resource Type definition for AWS::ApiGateway::BasePathMappingV2
   */
  export type BasePathMappingV2ResourceType = {
    /**
     * The base path name that callers of the API must provide in the URL after the domain name.
     * Create-only property
     */
    BasePath?: string;

    /**
     * The Arn of an AWS::ApiGateway::DomainNameV2 resource.
     * Create-only property
     */
    DomainNameArn: string;

    /**
     * The ID of the API.
     */
    RestApiId: string;

    /**
     * The name of the API's stage.
     */
    Stage?: string;

    /**
     * Amazon Resource Name (ARN) of the resource.
     * Read-only property
     */
    BasePathMappingArn?: string;
  };
}
