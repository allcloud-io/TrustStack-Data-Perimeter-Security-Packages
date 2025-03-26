/**
 * TypeScript definitions for AWS::WAFRegional::ByteMatchSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::ByteMatchSet
 */
export namespace AWS_WAFRegional_ByteMatchSet {
  export type ByteMatchTupleType = {
    TargetString?: string;

    TargetStringBase64?: string;

    PositionalConstraint: string;

    TextTransformation: string;

    FieldToMatch: FieldToMatchType;
  };

  export type FieldToMatchType = {
    Type: string;

    Data?: string;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::ByteMatchSet
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
