/**
 * TypeScript definitions for AWS::Macie::FindingsFilter
 * Generated from CloudFormation Resource Schema
 */

/**
 * Macie FindingsFilter resource schema.
 */
export namespace AWS_Macie_FindingsFilter {
  export type CriterionAdditionalPropertiesType = {
    gt?: number;

    gte?: number;

    lt?: number;

    lte?: number;

    eq?: string[];

    neq?: string[];
  };

  /**
   * Map of filter criteria.
   */
  export type CriterionType = {};

  export type FindingCriteriaType = {
    Criterion?: CriterionType;
  };

  export type FindingFilterActionType = {};

  /**
   * Returned by ListHandler representing filter name and ID.
   */
  export type FindingsFilterListItemType = {
    Id?: string;

    Name?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * Macie FindingsFilter resource schema.
   */
  export type FindingsFilterResourceType = {
    /**
     * Findings filter name
     */
    Name: string;

    /**
     * Findings filter description
     */
    Description?: string;

    /**
     * Findings filter criteria.
     */
    FindingCriteria: FindingCriteriaType;

    /**
     * Findings filter action.
     */
    Action?: FindingFilterActionType;

    /**
     * Findings filter position.
     */
    Position?: number;

    /**
     * Findings filter ID.
     * Read-only property
     */
    Id?: string;

    /**
     * Findings filter ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
