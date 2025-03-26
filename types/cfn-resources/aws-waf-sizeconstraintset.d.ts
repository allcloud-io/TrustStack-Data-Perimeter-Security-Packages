/**
 * TypeScript definitions for AWS::WAF::SizeConstraintSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAF::SizeConstraintSet
 */
export namespace AWS_WAF_SizeConstraintSet {
  export type SizeConstraintType = {
    ComparisonOperator: string;

    FieldToMatch: FieldToMatchType;

    Size: number;

    TextTransformation: string;
  };

  export type FieldToMatchType = {
    Data?: string;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::WAF::SizeConstraintSet
   */
  export type SizeConstraintSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Name: string;

    SizeConstraints: SizeConstraintType[];
  };
}
