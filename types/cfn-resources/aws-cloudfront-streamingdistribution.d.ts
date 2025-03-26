/**
 * TypeScript definitions for AWS::CloudFront::StreamingDistribution
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudFront::StreamingDistribution
 */
export namespace AWS_CloudFront_StreamingDistribution {
  export type StreamingDistributionConfigType = {
    Logging?: LoggingType;

    Comment: string;

    PriceClass?: string;

    S3Origin: S3OriginType;

    Enabled: boolean;

    Aliases?: string[];

    TrustedSigners: TrustedSignersType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TrustedSignersType = {
    Enabled: boolean;

    AwsAccountNumbers?: string[];
  };

  export type LoggingType = {
    Bucket: string;

    Enabled: boolean;

    Prefix: string;
  };

  export type S3OriginType = {
    DomainName: string;

    OriginAccessIdentity: string;
  };

  /**
   * Resource Type definition for AWS::CloudFront::StreamingDistribution
   */
  export type StreamingDistributionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    DomainName?: string;

    StreamingDistributionConfig: StreamingDistributionConfigType;

    Tags: TagType[];
  };
}
