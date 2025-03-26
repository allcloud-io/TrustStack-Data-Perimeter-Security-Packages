/**
 * TypeScript definitions for AWS::WAF::XssMatchSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAF::XssMatchSet
 */
export namespace AWS_WAF_XssMatchSet {
  export type XssMatchTupleType = {
    FieldToMatch: FieldToMatchType;

    TextTransformation: string;
  };

  export type FieldToMatchType = {
    Data?: string;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::WAF::XssMatchSet
   */
  export type XssMatchSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Name: string;

    XssMatchTuples: XssMatchTupleType[];
  };
}
