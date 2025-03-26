/**
 * TypeScript definitions for AWS::DataBrew::Ruleset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataBrew::Ruleset.
 */
export namespace AWS_DataBrew_Ruleset {
  /**
   * Expression with rule conditions
   */
  export type ExpressionType = {};

  /**
   * A key-value pair to associate expression's substitution variable names with their values
   */
  export type SubstitutionValueType = {
    /**
     * Variable name
     */
    ValueReference: string;

    /**
     * Value or column name
     */
    Value: string;
  };

  export type ValuesMapType = {};

  /**
   * Threshold value for a rule
   */
  export type ThresholdValueType = {};

  /**
   * Threshold type for a rule
   */
  export type ThresholdTypeType = {};

  /**
   * Threshold unit for a rule
   */
  export type ThresholdUnitType = {};

  export type ThresholdType = {
    Value: ThresholdValueType;

    Type?: ThresholdTypeType;

    Unit?: ThresholdUnitType;
  };

  /**
   * Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression
   */
  export type ColumnSelectorType = {
    /**
     * A regular expression for selecting a column from a dataset
     */
    Regex?: string;

    /**
     * The name of a column from a dataset
     */
    Name?: string;
  };

  /**
   * Boolean value to disable/enable a rule
   */
  export type DisabledType = {};

  /**
   * Data quality rule for a target resource (dataset)
   */
  export type RuleType = {
    /**
     * Name of the rule
     */
    Name: string;

    Disabled?: DisabledType;

    CheckExpression: ExpressionType;

    SubstitutionMap?: ValuesMapType;

    Threshold?: ThresholdType;

    ColumnSelectors?: ColumnSelectorType[];
  };

  /**
   * A key-value pair to associate with a resource
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::DataBrew::Ruleset.
   */
  export type RulesetResourceType = {
    /**
     * Name of the Ruleset
     * Create-only property
     */
    Name: string;

    /**
     * Description of the Ruleset
     */
    Description?: string;

    /**
     * Arn of the target resource (dataset) to apply the ruleset to
     * Create-only property
     */
    TargetArn: string;

    /**
     * List of the data quality rules in the ruleset
     */
    Rules: RuleType[];

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
