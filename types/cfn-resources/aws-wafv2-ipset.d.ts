/**
 * TypeScript definitions for AWS::WAFv2::IPSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Contains a list of IP addresses. This can be either IPV4 or IPV6. The list will be mutually
 */
export namespace AWS_WAFv2_IPSet {
  /**
   * Name of the IPSet.
   */
  export type EntityNameType = {};

  /**
   * Description of the entity.
   */
  export type EntityDescriptionType = {};

  /**
   * Id of the IPSet
   */
  export type EntityIdType = {};

  /**
   * Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.
   */
  export type ScopeType = {};

  /**
   * Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.
   */
  export type IPAddressVersionType = {};

  /**
   * IP address
   */
  export type IPAddressType = {};

  /**
   * ARN of the WAF entity.
   */
  export type ResourceArnType = {};

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Contains a list of IP addresses. This can be either IPV4 or IPV6. The list will be mutually
   */
  export type IPSetResourceType = {
    /**
     * Read-only property
     */
    Arn?: ResourceArnType;

    Description?: EntityDescriptionType;

    /**
     * Create-only property
     */
    Name?: EntityNameType;

    /**
     * Read-only property
     */
    Id?: EntityIdType;

    /**
     * Create-only property
     */
    Scope: ScopeType;

    IPAddressVersion: IPAddressVersionType;

    /**
     * List of IPAddresses.
     */
    Addresses: IPAddressType[];

    Tags?: TagType[];
  };
}
