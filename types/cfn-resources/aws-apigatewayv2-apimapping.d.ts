/**
 * TypeScript definitions for AWS::ApiGatewayV2::ApiMapping
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGatewayV2::ApiMapping` resource contains an API mapping. An API mapping relates a path of your custom domain name to a stage of your API. A custom domain name can have multiple API mappings, but the paths can't overlap. A custom domain can map only to APIs of the same protocol type. For more information, see CreateApiMapping in the *Amazon API Gateway V2 API Reference*.
 */
export namespace AWS_ApiGatewayV2_ApiMapping {
  /**
   * The `AWS::ApiGatewayV2::ApiMapping` resource contains an API mapping. An API mapping relates a path of your custom domain name to a stage of your API. A custom domain name can have multiple API mappings, but the paths can't overlap. A custom domain can map only to APIs of the same protocol type. For more information, see CreateApiMapping in the *Amazon API Gateway V2 API Reference*.
   */
  export type ApiMappingResourceType = {
    /**
     * Read-only property
     */
    ApiMappingId?: string;

    /**
     * The domain name.
     * Create-only property
     */
    DomainName: string;

    /**
     * The API stage.
     */
    Stage: string;

    /**
     * The API mapping key.
     */
    ApiMappingKey?: string;

    /**
     * The identifier of the API.
     */
    ApiId: string;
  };
}
