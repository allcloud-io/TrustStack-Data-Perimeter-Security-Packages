/**
 * TypeScript definitions for AWS::ApiGatewayV2::VpcLink
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGatewayV2::VpcLink` resource creates a VPC link. Supported only for HTTP APIs. The VPC link status must transition from `PENDING` to `AVAILABLE` to successfully create a VPC link, which can take up to 10 minutes. To learn more, see Working with VPC Links for HTTP APIs in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGatewayV2_VpcLink {
  /**
   * The `AWS::ApiGatewayV2::VpcLink` resource creates a VPC link. Supported only for HTTP APIs. The VPC link status must transition from `PENDING` to `AVAILABLE` to successfully create a VPC link, which can take up to 10 minutes. To learn more, see Working with VPC Links for HTTP APIs in the *API Gateway Developer Guide*.
   */
  export type VpcLinkResourceType = {
    /**
     * Read-only property
     */
    VpcLinkId?: string;

    /**
     * A list of subnet IDs to include in the VPC link.
     * Create-only property
     */
    SubnetIds: string[];

    /**
     * A list of security group IDs for the VPC link.
     * Create-only property
     */
    SecurityGroupIds?: string[];

    /**
     * The collection of tags. Each tag element is associated with a given resource.
     */
    Tags?: Record<string, any>;

    /**
     * The name of the VPC link.
     */
    Name: string;
  };
}
