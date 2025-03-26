/**
 * TypeScript definitions for AWS::WAFRegional::GeoMatchSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WAFRegional::GeoMatchSet
 */
export namespace AWS_WAFRegional_GeoMatchSet {
  export type GeoMatchConstraintType = {
    Type: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::WAFRegional::GeoMatchSet
   */
  export type GeoMatchSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    GeoMatchConstraints?: GeoMatchConstraintType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
