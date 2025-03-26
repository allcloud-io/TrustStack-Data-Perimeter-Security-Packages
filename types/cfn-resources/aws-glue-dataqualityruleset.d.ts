/**
 * TypeScript definitions for AWS::Glue::DataQualityRuleset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::DataQualityRuleset
 */
export namespace AWS_Glue_DataQualityRuleset {
  export type DataQualityTargetTableType = {
    DatabaseName?: string;

    TableName?: string;
  };

  /**
   * Resource Type definition for AWS::Glue::DataQualityRuleset
   */
  export type DataQualityRulesetResourceType = {
    Ruleset?: string;

    Description?: string;

    TargetTable?: DataQualityTargetTableType;

    /**
     * Read-only property
     */
    Id?: string;

    ClientToken?: string;

    Tags?: Record<string, any>;

    Name?: string;
  };
}
