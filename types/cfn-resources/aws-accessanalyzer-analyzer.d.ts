/**
 * TypeScript definitions for AWS::AccessAnalyzer::Analyzer
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::AccessAnalyzer::Analyzer type specifies an analyzer of the user's account
 */
export namespace AWS_AccessAnalyzer_Analyzer {
  /**
   * An Access Analyzer archive rule. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.
   */
  export type ArchiveRuleType = {
    Filter: FilterType[];

    /**
     * The archive rule name
     */
    RuleName: string;
  };

  export type FilterType = {
    Contains?: string[];

    Eq?: string[];

    Exists?: boolean;

    Property: string;

    Neq?: string[];
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * An array of key-value pairs to apply to this resource.
   */
  export type TagsType = {};

  /**
   * The criteria for an analysis rule for an analyzer.
   */
  export type AnalysisRuleCriteriaType = {
    /**
     * A list of AWS account IDs to apply to the analysis rule criteria. The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.
     */
    AccountIds?: string[];

    /**
     * An array of key-value pairs to match for your resources. You can use the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     * For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with aws:.
     * For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.
     */
    ResourceTags?: TagsType[];
  };

  /**
   * The Configuration for Unused Access Analyzer
   */
  export type UnusedAccessConfigurationType = {
    /**
     * The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.
     */
    UnusedAccessAge?: number;

    /**
     * Contains information about rules for the analyzer.
     */
    AnalysisRule?: Record<string, any>;
  };

  /**
   * The AWS::AccessAnalyzer::Analyzer type specifies an analyzer of the user's account
   */
  export type AnalyzerResourceType = {
    /**
     * Analyzer name
     * Create-only property
     */
    AnalyzerName?: string;

    ArchiveRules?: ArchiveRuleType[];

    /**
     * Amazon Resource Name (ARN) of the analyzer
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_UNUSED_ACCESS or ORGANIZATION_UNUSED_ACCESS
     * Create-only property
     */
    Type: string;

    /**
     * The configuration for the analyzer
     */
    AnalyzerConfiguration?: Record<string, any>;
  };
}
