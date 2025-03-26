/**
 * TypeScript definitions for AWS::WAFRegional::XssMatchSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::XssMatchSet
 */
export namespace AWS_WAFRegional_XssMatchSet {
  export type XssMatchTupleType = {
    TextTransformation: string;

    FieldToMatch: FieldToMatchType;
  };

  export type FieldToMatchType = {
    Type: string;

    Data?: string;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::XssMatchSet
   */
  export type XssMatchSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    XssMatchTuples?: XssMatchTupleType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
