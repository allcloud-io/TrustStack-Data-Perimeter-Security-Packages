/**
 * TypeScript definitions for AWS::DataBrew::Recipe
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataBrew::Recipe.
 */
export namespace AWS_DataBrew_Recipe {
  /**
   * Secondary input
   */
  export type SecondaryInputType = {
    S3InputDefinition?: S3LocationType;

    DataCatalogInputDefinition?: DataCatalogInputDefinitionType;
  };

  /**
   * Input location
   */
  export type S3LocationType = {
    Bucket: string;

    Key?: string;
  };

  export type DataCatalogInputDefinitionType = {
    /**
     * Catalog id
     */
    CatalogId?: string;

    /**
     * Database name
     */
    DatabaseName?: string;

    /**
     * Table name
     */
    TableName?: string;

    TempDirectory?: S3LocationType;
  };

  export type RecipeStepType = {
    Action: ActionType;

    /**
     * Condition expressions applied to the step action
     */
    ConditionExpressions?: ConditionExpressionType[];
  };

  export type ActionType = {
    /**
     * Step action operation
     */
    Operation: string;

    Parameters?: any;
  };

  /**
   * Condition expressions applied to the step action
   */
  export type ConditionExpressionType = {
    /**
     * Input condition to be applied to the target column
     */
    Condition: string;

    /**
     * Value of the condition
     */
    Value?: string;

    /**
     * Name of the target column
     */
    TargetColumn: string;
  };

  export type RecipeParametersType = {
    AggregateFunction?: string;

    Base?: string;

    CaseStatement?: string;

    CategoryMap?: string;

    CharsToRemove?: string;

    CollapseConsecutiveWhitespace?: string;

    ColumnDataType?: string;

    ColumnRange?: string;

    Count?: string;

    CustomCharacters?: string;

    CustomStopWords?: string;

    CustomValue?: string;

    DatasetsColumns?: string;

    DateAddValue?: string;

    DateTimeFormat?: string;

    DateTimeParameters?: string;

    DeleteOtherRows?: string;

    Delimiter?: string;

    EndPattern?: string;

    EndPosition?: string;

    EndValue?: string;

    ExpandContractions?: string;

    Exponent?: string;

    FalseString?: string;

    GroupByAggFunctionOptions?: string;

    GroupByColumns?: string;

    HiddenColumns?: string;

    IgnoreCase?: string;

    IncludeInSplit?: string;

    Interval?: string;

    IsText?: string;

    JoinKeys?: string;

    JoinType?: string;

    LeftColumns?: string;

    Limit?: string;

    LowerBound?: string;

    MapType?: string;

    ModeType?: string;

    MultiLine?: boolean;

    NumRows?: string;

    NumRowsAfter?: string;

    NumRowsBefore?: string;

    OrderByColumn?: string;

    OrderByColumns?: string;

    Other?: string;

    Pattern?: string;

    PatternOption1?: string;

    PatternOption2?: string;

    PatternOptions?: string;

    Period?: string;

    Position?: string;

    RemoveAllPunctuation?: string;

    RemoveAllQuotes?: string;

    RemoveAllWhitespace?: string;

    RemoveCustomCharacters?: string;

    RemoveCustomValue?: string;

    RemoveLeadingAndTrailingPunctuation?: string;

    RemoveLeadingAndTrailingQuotes?: string;

    RemoveLeadingAndTrailingWhitespace?: string;

    RemoveLetters?: string;

    RemoveNumbers?: string;

    RemoveSourceColumn?: string;

    RemoveSpecialCharacters?: string;

    RightColumns?: string;

    SampleSize?: string;

    SampleType?: string;

    SecondInput?: string;

    SecondaryInputs?: SecondaryInputType[];

    SourceColumn?: string;

    SourceColumn1?: string;

    SourceColumn2?: string;

    SourceColumns?: string;

    StartColumnIndex?: string;

    StartPattern?: string;

    StartPosition?: string;

    StartValue?: string;

    StemmingMode?: string;

    StepCount?: string;

    StepIndex?: string;

    StopWordsMode?: string;

    Strategy?: string;

    SheetNames?: string[];

    SheetIndexes?: number[];

    TargetColumn?: string;

    TargetColumnNames?: string;

    TargetDateFormat?: string;

    TargetIndex?: string;

    TimeZone?: string;

    TokenizerPattern?: string;

    TrueString?: string;

    UdfLang?: string;

    Units?: string;

    UnpivotColumn?: string;

    UpperBound?: string;

    UseNewDataFrame?: string;

    Value?: string;

    Value1?: string;

    Value2?: string;

    ValueColumn?: string;

    ViewFrame?: string;

    /**
     * Input
     */
    Input?: Record<string, any>;
  };

  export type ParameterMapType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::DataBrew::Recipe.
   */
  export type RecipeResourceType = {
    /**
     * Description of the recipe
     */
    Description?: string;

    /**
     * Recipe name
     * Create-only property
     */
    Name: string;

    Steps: Record<string, any>[];

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
