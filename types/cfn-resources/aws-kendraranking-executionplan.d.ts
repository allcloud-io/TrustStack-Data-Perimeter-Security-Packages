/**
 * TypeScript definitions for AWS::KendraRanking::ExecutionPlan
 * Generated from CloudFormation Resource Schema
 */

/**
 * A KendraRanking Rescore execution plan
 */
export namespace AWS_KendraRanking_ExecutionPlan {
  export type DescriptionType = {};

  /**
   * A label for tagging KendraRanking resources
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * List of tags
   */
  export type TagsType = {};

  export type RescoreCapacityUnitsType = {};

  export type CapacityUnitsConfigurationType = {
    RescoreCapacityUnits: RescoreCapacityUnitsType;
  };

  /**
   * Name of kendra ranking rescore execution plan
   */
  export type NameType = {};

  /**
   * Unique ID of rescore execution plan
   */
  export type IdType = {};

  export type ArnType = {};

  /**
   * A KendraRanking Rescore execution plan
   */
  export type ExecutionPlanResourceType = {
    /**
     * Read-only property
     */
    Id?: IdType;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * A description for the execution plan
     */
    Description?: DescriptionType;

    /**
     * Tags for labeling the execution plan
     */
    Tags?: TagsType;

    Name: NameType;

    /**
     * Capacity units
     */
    CapacityUnits?: CapacityUnitsConfigurationType;
  };
}
