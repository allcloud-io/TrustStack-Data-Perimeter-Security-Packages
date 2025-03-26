/**
 * TypeScript definitions for AWS::CloudFront::AnycastIpList
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::CloudFront::AnycastIpList Resource Type
 */
export namespace AWS_CloudFront_AnycastIpList {
  export type AnycastIpListType = {
    AnycastIps: string[];

    Arn: string;

    Id: string;

    IpCount: number;

    LastModifiedTime: string;

    Name: string;

    Status: string;
  };

  export type TagType = {
    Key: string;

    Value?: string;
  };

  export type TagsType = {
    Items?: TagType[];
  };

  /**
   * Definition of AWS::CloudFront::AnycastIpList Resource Type
   */
  export type AnycastIpListResourceType = {
    /**
     * Read-only property
     */
    AnycastIpList?: AnycastIpListType;

    /**
     * Read-only property
     */
    ETag?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    IpCount: number;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Tags?: TagsType;
  };
}
