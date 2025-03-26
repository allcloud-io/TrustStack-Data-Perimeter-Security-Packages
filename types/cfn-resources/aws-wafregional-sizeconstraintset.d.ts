/**
 * TypeScript definitions for AWS::WAFRegional::SizeConstraintSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::SizeConstraintSet
 */
export namespace AWS_WAFRegional_SizeConstraintSet {
  export type SizeConstraintType = {
    ComparisonOperator: string;

    Size: number;

    TextTransformation: string;

    FieldToMatch: FieldToMatchType;
  };

  export type FieldToMatchType = {
    Type: string;

    Data?: string;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::SizeConstraintSet
   */
  export type SizeConstraintSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    SizeConstraints?: SizeConstraintType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
