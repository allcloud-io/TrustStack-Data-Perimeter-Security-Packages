/**
 * TypeScript definitions for AWS::CloudFront::VpcOrigin
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudFront::VpcOrigin
 */
export namespace AWS_CloudFront_VpcOrigin {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type VpcOriginEndpointConfigType = {
    Arn: string;

    HTTPPort?: number;

    HTTPSPort?: number;

    Name: string;

    OriginProtocolPolicy?: string;

    OriginSSLProtocols?: string[];
  };

  /**
   * Resource Type definition for AWS::CloudFront::VpcOrigin
   */
  export type VpcOriginResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    LastModifiedTime?: string;

    /**
     * Read-only property
     */
    Status?: string;

    Tags?: TagType[];

    VpcOriginEndpointConfig: VpcOriginEndpointConfigType;
  };
}
