/**
 * TypeScript definitions for AWS::CleanRooms::ConfiguredTable
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a table that can be associated with collaborations
 */
export namespace AWS_CleanRooms_ConfiguredTable {
  export type AnalysisRuleColumnNameType = {};

  export type AggregateColumnType = {
    ColumnNames: AnalysisRuleColumnNameType[];

    Function: AggregateFunctionNameType;
  };

  export type AggregateFunctionNameType = {};

  export type AggregationConstraintType = {
    ColumnName: AnalysisRuleColumnNameType;

    Minimum: number;

    Type: AggregationTypeType;
  };

  export type AggregationTypeType = {};

  export type JoinOperatorType = {};

  export type AnalysisMethodType = {};

  export type JoinRequiredOptionType = {};

  export type ScalarFunctionsType = {};

  export type AnalysisRuleAggregationType = {
    AggregateColumns: AggregateColumnType[];

    JoinColumns: AnalysisRuleColumnNameType[];

    AllowedJoinOperators?: JoinOperatorType[];

    JoinRequired?: JoinRequiredOptionType;

    DimensionColumns: AnalysisRuleColumnNameType[];

    ScalarFunctions: ScalarFunctionsType[];

    OutputConstraints: AggregationConstraintType[];

    AdditionalAnalyses?: AdditionalAnalysesType;
  };

  export type AnalysisRuleListType = {
    JoinColumns: AnalysisRuleColumnNameType[];

    AllowedJoinOperators?: JoinOperatorType[];

    ListColumns: AnalysisRuleColumnNameType[];

    AdditionalAnalyses?: AdditionalAnalysesType;
  };

  export type AllowedAnalysisType = {};

  export type AllowedAnalysesType = {};

  export type AllowedAnalysisProviderType = {};

  export type AllowedAnalysisProvidersType = {};

  export type DisallowedOutputColumnsType = {};

  export type AdditionalAnalysesType = {};

  export type DifferentialPrivacyColumnType = {
    Name: string;
  };

  export type DifferentialPrivacyType = {
    Columns: DifferentialPrivacyColumnType[];
  };

  export type AnalysisRuleCustomType = {
    AllowedAnalyses: AllowedAnalysesType;

    AllowedAnalysisProviders?: AllowedAnalysisProvidersType;

    DifferentialPrivacy?: DifferentialPrivacyType;

    DisallowedOutputColumns?: DisallowedOutputColumnsType;

    AdditionalAnalyses?: AdditionalAnalysesType;
  };

  export type ConfiguredTableAnalysisRulePolicyType = {
    V1: ConfiguredTableAnalysisRulePolicyV1Type;
  };

  export type ConfiguredTableAnalysisRulePolicyV1Type = {};

  export type ConfiguredTableAnalysisRuleTypeType = {};

  export type GlueTableReferenceType = {
    TableName: string;

    DatabaseName: string;
  };

  export type SnowflakeTableReferenceType = {
    SecretArn: string;

    AccountIdentifier: string;

    DatabaseName: string;

    TableName: string;

    SchemaName: string;

    TableSchema: SnowflakeTableSchemaType;
  };

  export type SnowflakeTableSchemaType = {};

  export type SnowflakeTableSchemaV1Type = {
    ColumnName: string;

    ColumnType: string;
  };

  export type AthenaTableReferenceType = {
    WorkGroup: string;

    OutputLocation?: string;

    DatabaseName: string;

    TableName: string;
  };

  export type AnalysisRuleType = {
    Type: ConfiguredTableAnalysisRuleTypeType;

    Policy: ConfiguredTableAnalysisRulePolicyType;
  };

  export type TableReferenceType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Represents a table that can be associated with collaborations
   */
  export type ConfiguredTableResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    AllowedColumns: string[];

    /**
     * Create-only property
     */
    AnalysisMethod: AnalysisMethodType;

    /**
     * Read-only property
     */
    ConfiguredTableIdentifier?: string;

    Description?: string;

    Name: string;

    AnalysisRules?: AnalysisRuleType[];

    /**
     * Create-only property
     */
    TableReference: TableReferenceType;
  };
}
