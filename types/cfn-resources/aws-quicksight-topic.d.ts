/**
 * TypeScript definitions for AWS::QuickSight::Topic
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::Topic Resource Type.
 */
export namespace AWS_QuickSight_Topic {
  export type AggregationFunctionParametersType = {};

  export type AuthorSpecifiedAggregationType = {};

  export type CategoryFilterFunctionType = {};

  export type CategoryFilterTypeType = {};

  export type CellValueSynonymType = {
    CellValue?: string;

    Synonyms?: string[];
  };

  export type CollectiveConstantType = {
    ValueList?: string[];
  };

  export type ColumnDataRoleType = {};

  export type ColumnOrderingTypeType = {};

  export type ComparativeOrderType = {
    UseOrdering?: ColumnOrderingTypeType;

    SpecifedOrder?: string[];

    TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueTypeType;
  };

  export type ConstantTypeType = {};

  export type DataAggregationType = {
    DatasetRowDateGranularity?: TopicTimeGranularityType;

    DefaultDateColumnName?: string;
  };

  export type DatasetMetadataType = {
    DatasetArn: string;

    DatasetName?: string;

    DatasetDescription?: string;

    DataAggregation?: DataAggregationType;

    Filters?: TopicFilterType[];

    Columns?: TopicColumnType[];

    CalculatedFields?: TopicCalculatedFieldType[];

    NamedEntities?: TopicNamedEntityType[];
  };

  export type DefaultAggregationType = {};

  export type DefaultFormattingType = {
    DisplayFormat?: DisplayFormatType;

    DisplayFormatOptions?: DisplayFormatOptionsType;
  };

  export type DisplayFormatType = {};

  export type DisplayFormatOptionsType = {
    UseBlankCellFormat?: boolean;

    BlankCellFormat?: string;

    DateFormat?: string;

    DecimalSeparator?: TopicNumericSeparatorSymbolType;

    GroupingSeparator?: string;

    UseGrouping?: boolean;

    FractionDigits?: number;

    Prefix?: string;

    Suffix?: string;

    UnitScaler?: NumberScaleType;

    NegativeFormat?: NegativeFormatType;

    CurrencySymbol?: string;
  };

  export type FilterClassType = {};

  export type NamedEntityAggTypeType = {};

  export type NamedEntityDefinitionType = {
    FieldName?: string;

    PropertyName?: string;

    PropertyRole?: PropertyRoleType;

    PropertyUsage?: PropertyUsageType;

    Metric?: NamedEntityDefinitionMetricType;
  };

  export type NamedEntityDefinitionMetricType = {
    Aggregation?: NamedEntityAggTypeType;

    AggregationFunctionParameters?: AggregationFunctionParametersType;
  };

  export type NamedFilterAggTypeType = {};

  export type NamedFilterTypeType = {};

  export type NegativeFormatType = {
    Prefix?: string;

    Suffix?: string;
  };

  export type NumberScaleType = {};

  export type PropertyRoleType = {};

  export type PropertyUsageType = {};

  export type RangeConstantType = {
    Minimum?: string;

    Maximum?: string;
  };

  export type SemanticEntityTypeType = {
    TypeName?: string;

    SubTypeName?: string;

    TypeParameters?: TypeParametersType;
  };

  export type SemanticTypeType = {
    TypeName?: string;

    SubTypeName?: string;

    TypeParameters?: TypeParametersType;

    TruthyCellValue?: string;

    TruthyCellValueSynonyms?: string[];

    FalseyCellValue?: string;

    FalseyCellValueSynonyms?: string[];
  };

  export type TopicCalculatedFieldType = {
    CalculatedFieldName: string;

    CalculatedFieldDescription?: string;

    Expression: string;

    CalculatedFieldSynonyms?: string[];

    IsIncludedInTopic?: boolean;

    DisableIndexing?: boolean;

    ColumnDataRole?: ColumnDataRoleType;

    TimeGranularity?: TopicTimeGranularityType;

    DefaultFormatting?: DefaultFormattingType;

    Aggregation?: DefaultAggregationType;

    ComparativeOrder?: ComparativeOrderType;

    SemanticType?: SemanticTypeType;

    AllowedAggregations?: AuthorSpecifiedAggregationType[];

    NotAllowedAggregations?: AuthorSpecifiedAggregationType[];

    NeverAggregateInFilter?: boolean;

    CellValueSynonyms?: CellValueSynonymType[];

    NonAdditive?: boolean;
  };

  export type TopicCategoryFilterType = {
    CategoryFilterFunction?: CategoryFilterFunctionType;

    CategoryFilterType?: CategoryFilterTypeType;

    Constant?: TopicCategoryFilterConstantType;

    Inverse?: boolean;
  };

  export type TopicCategoryFilterConstantType = {
    ConstantType?: ConstantTypeType;

    SingularConstant?: string;

    CollectiveConstant?: CollectiveConstantType;
  };

  export type TopicColumnType = {
    ColumnName: string;

    ColumnFriendlyName?: string;

    ColumnDescription?: string;

    ColumnSynonyms?: string[];

    ColumnDataRole?: ColumnDataRoleType;

    Aggregation?: DefaultAggregationType;

    IsIncludedInTopic?: boolean;

    DisableIndexing?: boolean;

    ComparativeOrder?: ComparativeOrderType;

    SemanticType?: SemanticTypeType;

    TimeGranularity?: TopicTimeGranularityType;

    AllowedAggregations?: AuthorSpecifiedAggregationType[];

    NotAllowedAggregations?: AuthorSpecifiedAggregationType[];

    DefaultFormatting?: DefaultFormattingType;

    NeverAggregateInFilter?: boolean;

    CellValueSynonyms?: CellValueSynonymType[];

    NonAdditive?: boolean;
  };

  /**
   * Model for configuration of a Topic
   */
  export type TopicConfigOptionsType = {
    QBusinessInsightsEnabled?: boolean;
  };

  export type TopicDateRangeFilterType = {
    Inclusive?: boolean;

    Constant?: TopicRangeFilterConstantType;
  };

  export type TopicDetailsType = {
    Name?: string;

    Description?: string;

    UserExperienceVersion?: TopicUserExperienceVersionType;

    DataSets?: DatasetMetadataType[];

    ConfigOptions?: TopicConfigOptionsType;
  };

  export type TopicFilterType = {
    FilterDescription?: string;

    FilterClass?: FilterClassType;

    FilterName: string;

    FilterSynonyms?: string[];

    OperandFieldName: string;

    FilterType?: NamedFilterTypeType;

    CategoryFilter?: TopicCategoryFilterType;

    NumericEqualityFilter?: TopicNumericEqualityFilterType;

    NumericRangeFilter?: TopicNumericRangeFilterType;

    DateRangeFilter?: TopicDateRangeFilterType;

    RelativeDateFilter?: TopicRelativeDateFilterType;
  };

  export type TopicNamedEntityType = {
    EntityName: string;

    EntityDescription?: string;

    EntitySynonyms?: string[];

    SemanticEntityType?: SemanticEntityTypeType;

    Definition?: NamedEntityDefinitionType[];
  };

  export type TopicNumericEqualityFilterType = {
    Constant?: TopicSingularFilterConstantType;

    Aggregation?: NamedFilterAggTypeType;
  };

  export type TopicNumericRangeFilterType = {
    Inclusive?: boolean;

    Constant?: TopicRangeFilterConstantType;

    Aggregation?: NamedFilterAggTypeType;
  };

  export type TopicNumericSeparatorSymbolType = {};

  export type TopicRangeFilterConstantType = {
    ConstantType?: ConstantTypeType;

    RangeConstant?: RangeConstantType;
  };

  export type TopicRelativeDateFilterType = {
    TimeGranularity?: TopicTimeGranularityType;

    RelativeDateFilterFunction?: TopicRelativeDateFilterFunctionType;

    Constant?: TopicSingularFilterConstantType;
  };

  export type TopicRelativeDateFilterFunctionType = {};

  export type TopicSingularFilterConstantType = {
    ConstantType?: ConstantTypeType;

    SingularConstant?: string;
  };

  export type TopicTimeGranularityType = {};

  export type TopicUserExperienceVersionType = {};

  export type TypeParametersType = {};

  export type UndefinedSpecifiedValueTypeType = {};

  /**
   * Definition of the AWS::QuickSight::Topic Resource Type.
   */
  export type TopicResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AwsAccountId?: string;

    ConfigOptions?: TopicConfigOptionsType;

    DataSets?: DatasetMetadataType[];

    Description?: string;

    /**
     * Create-only property
     */
    FolderArns?: string[];

    Name?: string;

    /**
     * Create-only property
     */
    TopicId?: string;

    UserExperienceVersion?: TopicUserExperienceVersionType;
  };
}
