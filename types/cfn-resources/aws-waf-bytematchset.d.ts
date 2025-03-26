/**
 * TypeScript definitions for AWS::WAF::ByteMatchSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAF::ByteMatchSet
 */
export namespace AWS_WAF_ByteMatchSet {
  export type ByteMatchTupleType = {
    FieldToMatch: FieldToMatchType;

    PositionalConstraint: string;

    TargetString?: string;

    TargetStringBase64?: string;

    TextTransformation: string;
  };

  export type FieldToMatchType = {
    Data?: string;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::WAF::ByteMatchSet
   */
  export type ByteMatchSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    ByteMatchTuples?: ByteMatchTupleType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
