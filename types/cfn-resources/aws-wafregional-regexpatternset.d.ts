/**
 * TypeScript definitions for AWS::WAFRegional::RegexPatternSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::RegexPatternSet
 */
export namespace AWS_WAFRegional_RegexPatternSet {
  /**
   * Resource Type definition for AWS::WAFRegional::RegexPatternSet
   */
  export type RegexPatternSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    RegexPatternStrings: string[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
