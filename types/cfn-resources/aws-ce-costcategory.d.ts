/**
 * TypeScript definitions for AWS::CE::CostCategory
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CE::CostCategory. Cost Category enables you to map your cost and usage into meaningful categories. You can use Cost Category to organize your costs using a rule-based engine.
 */
export namespace AWS_CE_CostCategory {
  /**
   * ISO 8601 date time with offset format
   */
  export type ZonedDateTimeType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type ResourceTagType = {
    /**
     * The key name for the tag.
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::CE::CostCategory. Cost Category enables you to map your cost and usage into meaningful categories. You can use Cost Category to organize your costs using a rule-based engine.
   */
  export type CostCategoryResourceType = {
    /**
     * Cost category ARN
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    EffectiveStart?: ZonedDateTimeType;

    /**
     * Create-only property
     */
    Name: string;

    RuleVersion: string;

    /**
     * JSON array format of Expression in Billing and Cost Management API
     */
    Rules: string;

    /**
     * Json array format of CostCategorySplitChargeRule in Billing and Cost Management API
     */
    SplitChargeRules?: string;

    /**
     * The default value for the cost category
     */
    DefaultValue?: string;

    /**
     * Tags to assign to the cost category.
     */
    Tags?: ResourceTagType[];
  };
}
