/**
 * TypeScript definitions for AWS::ApiGateway::VpcLink
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::VpcLink` resource creates an API Gateway VPC link for a REST API to access resources in an Amazon Virtual Private Cloud (VPC). For more information, see vpclink:create in the `Amazon API Gateway REST API Reference`.
 */
export namespace AWS_ApiGateway_VpcLink {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * The `AWS::ApiGateway::VpcLink` resource creates an API Gateway VPC link for a REST API to access resources in an Amazon Virtual Private Cloud (VPC). For more information, see vpclink:create in the `Amazon API Gateway REST API Reference`.
   */
  export type VpcLinkResourceType = {
    Name: string;

    Description?: string;

    /**
     * An array of arbitrary tags (key-value pairs) to associate with the VPC link.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    TargetArns: string[];

    /**
     * Read-only property
     */
    VpcLinkId?: string;
  };
}
