/**
 * TypeScript definitions for AWS::WAFRegional::IPSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::IPSet
 */
export namespace AWS_WAFRegional_IPSet {
  export type IPSetDescriptorType = {
    Type: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::IPSet
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
