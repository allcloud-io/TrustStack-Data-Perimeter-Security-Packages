/**
 * TypeScript definitions for AWS::WAF::SqlInjectionMatchSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAF::SqlInjectionMatchSet
 */
export namespace AWS_WAF_SqlInjectionMatchSet {
  export type SqlInjectionMatchTupleType = {
    FieldToMatch: FieldToMatchType;

    TextTransformation: string;
  };

  export type FieldToMatchType = {
    Data?: string;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::WAF::SqlInjectionMatchSet
   */
  export type SqlInjectionMatchSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Name: string;

    SqlInjectionMatchTuples?: SqlInjectionMatchTupleType[];
  };
}
