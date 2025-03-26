/**
 * TypeScript definitions for AWS::WAFv2::WebACLAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates WebACL to Application Load Balancer, CloudFront or API Gateway.
 */
export namespace AWS_WAFv2_WebACLAssociation {
  export type ResourceArnType = {};

  /**
   * Associates WebACL to Application Load Balancer, CloudFront or API Gateway.
   */
  export type WebACLAssociationResourceType = {
    /**
     * Create-only property
     */
    ResourceArn: ResourceArnType;

    /**
     * Create-only property
     */
    WebACLArn: ResourceArnType;
  };
}
