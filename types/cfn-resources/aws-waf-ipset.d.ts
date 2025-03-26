/**
 * TypeScript definitions for AWS::WAF::IPSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAF::IPSet
 */
export namespace AWS_WAF_IPSet {
  export type IPSetDescriptorType = {
    Type: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::WAF::IPSet
   */
  export type IPSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    IPSetDescriptors?: IPSetDescriptorType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
