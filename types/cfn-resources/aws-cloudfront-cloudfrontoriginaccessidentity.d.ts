/**
 * TypeScript definitions for AWS::CloudFront::CloudFrontOriginAccessIdentity
 * Generated from CloudFormation Resource Schema
 */

/**
 * The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see Restricting Access to Amazon S3 Content by Using an Origin Access Identity in the *Amazon CloudFront Developer Guide*.
 */
export namespace AWS_CloudFront_CloudFrontOriginAccessIdentity {
  /**
   * Origin access identity configuration. Send a `GET` request to the `/CloudFront API version/CloudFront/identity ID/config` resource.
   */
  export type CloudFrontOriginAccessIdentityConfigType = {
    /**
     * A comment to describe the origin access identity. The comment cannot be longer than 128 characters.
     */
    Comment: string;
  };

  /**
   * The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see Restricting Access to Amazon S3 Content by Using an Origin Access Identity in the *Amazon CloudFront Developer Guide*.
   */
  export type CloudFrontOriginAccessIdentityResourceType = {
    /**
     * The current configuration information for the identity.
     */
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfigType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    S3CanonicalUserId?: string;
  };
}
