/**
 * TypeScript definitions for AWS::WAFRegional::SqlInjectionMatchSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::SqlInjectionMatchSet
 */
export namespace AWS_WAFRegional_SqlInjectionMatchSet {
  export type SqlInjectionMatchTupleType = {
    TextTransformation: string;

    FieldToMatch: FieldToMatchType;
  };

  export type FieldToMatchType = {
    Type: string;

    Data?: string;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::SqlInjectionMatchSet
   */
  export type SqlInjectionMatchSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    SqlInjectionMatchTuples?: SqlInjectionMatchTupleType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
