/**
 * TypeScript definitions for AWS::QuickSight::Template
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::Template Resource Type.
 */
export namespace AWS_QuickSight_Template {
  export type PivotTotalOptionsType = {
    TotalAggregationOptions?: TotalAggregationOptionType[];

    CustomLabel?: string;

    ValueCellStyle?: TableCellStyleType;

    ScrollStatus?: TableTotalsScrollStatusType;

    Placement?: TableTotalsPlacementType;

    TotalCellStyle?: TableCellStyleType;

    TotalsVisibility?: any;

    MetricHeaderCellStyle?: TableCellStyleType;
  };

  export type EntityType = {
    Path?: string;
  };

  export type DateTimePickerControlDisplayOptionsType = {
    TitleOptions?: LabelOptionsType;

    InfoIconLabelOptions?: SheetControlInfoIconLabelOptionsType;

    HelperTextVisibility?: any;

    DateIconVisibility?: any;

    DateTimeFormat?: string;
  };

  export type GeospatialMapConfigurationType = {
    Legend?: LegendOptionsType;

    MapStyleOptions?: GeospatialMapStyleOptionsType;

    FieldWells?: GeospatialMapFieldWellsType;

    Tooltip?: TooltipOptionsType;

    WindowOptions?: GeospatialWindowOptionsType;

    PointStyleOptions?: GeospatialPointStyleOptionsType;

    VisualPalette?: VisualPaletteType;
  };

  export type ThousandSeparatorOptionsType = {
    Symbol?: NumericSeparatorSymbolType;

    Visibility?: any;

    GroupingStyle?: DigitGroupingStyleType;
  };

  export type PredefinedHierarchyType = {
    HierarchyId: string;

    DrillDownFilters?: DrillDownFilterType[];

    Columns: ColumnIdentifierType[];
  };

  export type DateTimeFormatConfigurationType = {
    NumericFormatConfiguration?: NumericFormatConfigurationType;

    NullValueFormatConfiguration?: NullValueFormatConfigurationType;

    DateTimeFormat?: string;
  };

  export type FilterControlType = {
    Slider?: FilterSliderControlType;

    TextArea?: FilterTextAreaControlType;

    Dropdown?: FilterDropDownControlType;

    TextField?: FilterTextFieldControlType;

    List?: FilterListControlType;

    DateTimePicker?: FilterDateTimePickerControlType;

    RelativeDateTime?: FilterRelativeDateTimeControlType;

    CrossSheet?: FilterCrossSheetControlType;
  };

  export type PivotTableSubtotalLevelType = {};

  export type FormatConfigurationType = {
    NumberFormatConfiguration?: NumberFormatConfigurationType;

    DateTimeFormatConfiguration?: DateTimeFormatConfigurationType;

    StringFormatConfiguration?: StringFormatConfigurationType;
  };

  export type ResourceStatusType = {};

  export type CommitModeType = {};

  export type RadarChartFieldWellsType = {
    RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWellsType;
  };

  export type RollingDateConfigurationType = {
    Expression: string;

    DataSetIdentifier?: string;
  };

  export type SeriesItemType = {
    FieldSeriesItem?: FieldSeriesItemType;

    DataFieldSeriesItem?: DataFieldSeriesItemType;
  };

  export type LineChartLineStyleSettingsType = {
    LineInterpolation?: LineInterpolationType;

    LineStyle?: LineChartLineStyleType;

    LineVisibility?: any;

    /**
     * String based length that is composed of value and unit in px
     */
    LineWidth?: string;
  };

  export type FilledMapSortConfigurationType = {
    CategorySort?: FieldSortOptionsType[];
  };

  export type MappedDataSetParameterType = {
    DataSetParameterName: string;

    DataSetIdentifier: string;
  };

  export type ReferenceLineLabelHorizontalPositionType = {};

  export type RelativeDateTimeControlDisplayOptionsType = {
    TitleOptions?: LabelOptionsType;

    InfoIconLabelOptions?: SheetControlInfoIconLabelOptionsType;

    DateTimeFormat?: string;
  };

  export type BarChartVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: BarChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type ClusterMarkerConfigurationType = {
    ClusterMarker?: ClusterMarkerType;
  };

  export type TableCellConditionalFormattingType = {
    FieldId: string;

    TextFormat?: TextConditionalFormatType;
  };

  export type AssetOptionsType = {
    Timezone?: string;

    WeekStart?: DayOfTheWeekType;
  };

  export type DateAxisOptionsType = {
    MissingDateVisibility?: any;
  };

  export type KPIActualValueConditionalFormattingType = {
    TextColor?: ConditionalFormattingColorType;

    Icon?: ConditionalFormattingIconType;
  };

  export type TableUnaggregatedFieldWellsType = {
    Values?: UnaggregatedFieldType[];
  };

  export type TreeMapVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: TreeMapConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type AxisDisplayOptionsType = {
    DataOptions?: AxisDataOptionsType;

    TickLabelOptions?: AxisTickLabelOptionsType;

    /**
     * String based length that is composed of value and unit in px
     */
    AxisOffset?: string;

    AxisLineVisibility?: any;

    GridLineVisibility?: any;

    ScrollbarOptions?: ScrollBarOptionsType;
  };

  export type DataPathLabelTypeType = {
    FieldId?: string;

    Visibility?: any;

    FieldValue?: string;
  };

  export type FreeFormSectionLayoutConfigurationType = {
    Elements: FreeFormLayoutElementType[];
  };

  export type DrillDownFilterType = {
    NumericEqualityFilter?: NumericEqualityDrillDownFilterType;

    TimeRangeFilter?: TimeRangeDrillDownFilterType;

    CategoryFilter?: CategoryDrillDownFilterType;
  };

  export type CustomNarrativeOptionsType = {
    Narrative: string;
  };

  export type LineChartDefaultSeriesSettingsType = {
    LineStyleSettings?: LineChartLineStyleSettingsType;

    AxisBinding?: AxisBindingType;

    MarkerStyleSettings?: LineChartMarkerStyleSettingsType;
  };

  export type MaximumMinimumComputationTypeType = {};

  export type FunnelChartVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: FunnelChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type FilterSelectableValuesType = {
    Values?: string[];
  };

  export type LineChartConfigurationType = {
    SortConfiguration?: LineChartSortConfigurationType;

    Legend?: LegendOptionsType;

    ReferenceLines?: ReferenceLineType[];

    DataLabels?: DataLabelOptionsType;

    Tooltip?: TooltipOptionsType;

    SingleAxisOptions?: SingleAxisOptionsType;

    SmallMultiplesOptions?: SmallMultiplesOptionsType;

    PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptionsType;

    VisualPalette?: VisualPaletteType;

    XAxisDisplayOptions?: AxisDisplayOptionsType;

    DefaultSeriesSettings?: LineChartDefaultSeriesSettingsType;

    SecondaryYAxisLabelOptions?: ChartAxisLabelOptionsType;

    ForecastConfigurations?: ForecastConfigurationType[];

    Series?: SeriesItemType[];

    Type?: LineChartTypeType;

    PrimaryYAxisLabelOptions?: ChartAxisLabelOptionsType;

    ContributionAnalysisDefaults?: ContributionAnalysisDefaultType[];

    FieldWells?: LineChartFieldWellsType;

    SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptionsType;

    XAxisLabelOptions?: ChartAxisLabelOptionsType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type SectionAfterPageBreakType = {
    Status?: SectionPageBreakStatusType;
  };

  export type ComboChartAggregatedFieldWellsType = {
    BarValues?: MeasureFieldType[];

    Category?: DimensionFieldType[];

    Colors?: DimensionFieldType[];

    LineValues?: MeasureFieldType[];
  };

  export type LayerMapVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: any;

    DataSetIdentifier: string;

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type RelativeDateTypeType = {};

  export type GaugeChartOptionsType = {
    Arc?: ArcConfigurationType;

    Comparison?: ComparisonConfigurationType;

    PrimaryValueDisplayType?: PrimaryValueDisplayTypeType;

    ArcAxis?: ArcAxisConfigurationType;

    PrimaryValueFontConfiguration?: FontConfigurationType;
  };

  export type MeasureFieldType = {
    DateMeasureField?: DateMeasureFieldType;

    NumericalMeasureField?: NumericalMeasureFieldType;

    CategoricalMeasureField?: CategoricalMeasureFieldType;

    CalculatedMeasureField?: CalculatedMeasureFieldType;
  };

  export type ScatterPlotVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: ScatterPlotConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type AxisScaleType = {
    Logarithmic?: AxisLogarithmicScaleType;

    Linear?: AxisLinearScaleType;
  };

  export type HeatMapAggregatedFieldWellsType = {
    Values?: MeasureFieldType[];

    Columns?: DimensionFieldType[];

    Rows?: DimensionFieldType[];
  };

  export type DefaultFilterDropDownControlOptionsType = {
    Type?: SheetControlListTypeType;

    DisplayOptions?: DropDownControlDisplayOptionsType;

    CommitMode?: CommitModeType;

    SelectableValues?: FilterSelectableValuesType;
  };

  export type GaugeChartFieldWellsType = {
    TargetValues?: MeasureFieldType[];

    Values?: MeasureFieldType[];
  };

  export type AxisLinearScaleType = {
    StepSize?: number;

    StepCount?: number;
  };

  export type ColumnRoleType = {};

  export type BodySectionDynamicCategoryDimensionConfigurationType = {
    Column: ColumnIdentifierType;

    SortByMetrics?: ColumnSortType[];

    Limit?: number;
  };

  export type NegativeValueConfigurationType = {
    DisplayMode: NegativeValueDisplayModeType;
  };

  export type PivotTableTotalOptionsType = {
    ColumnSubtotalOptions?: SubtotalOptionsType;

    RowSubtotalOptions?: SubtotalOptionsType;

    RowTotalOptions?: PivotTotalOptionsType;

    ColumnTotalOptions?: PivotTotalOptionsType;
  };

  export type DynamicDefaultValueType = {
    GroupNameColumn?: ColumnIdentifierType;

    DefaultValueColumn: ColumnIdentifierType;

    UserNameColumn?: ColumnIdentifierType;
  };

  export type BodySectionConfigurationType = {
    Content: BodySectionContentType;

    Style?: SectionStyleType;

    PageBreakConfiguration?: SectionPageBreakConfigurationType;

    SectionId: string;

    RepeatConfiguration?: BodySectionRepeatConfigurationType;
  };

  export type WordCloudAggregatedFieldWellsType = {
    GroupBy?: DimensionFieldType[];

    Size?: MeasureFieldType[];
  };

  export type DefaultGridLayoutConfigurationType = {
    CanvasSizeOptions: GridLayoutCanvasSizeOptionsType;
  };

  export type GradientStopType = {
    GradientOffset: number;

    DataValue?: number;

    Color?: string;
  };

  export type GaugeChartPrimaryValueConditionalFormattingType = {
    TextColor?: ConditionalFormattingColorType;

    Icon?: ConditionalFormattingIconType;
  };

  export type PluginVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    PluginArn: string;

    VisualId: string;

    ChartConfiguration?: PluginVisualConfigurationType;

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type BoxPlotFillStyleType = {};

  export type ImageInteractionOptionsType = {
    ImageMenuOption?: ImageMenuOptionType;
  };

  export type DataLabelTypeType = {
    MaximumLabelType?: MaximumLabelTypeType;

    DataPathLabelType?: DataPathLabelTypeType;

    RangeEndsLabelType?: RangeEndsLabelTypeType;

    FieldLabelType?: FieldLabelTypeType;

    MinimumLabelType?: MinimumLabelTypeType;
  };

  export type WordCloudCloudLayoutType = {};

  export type MaximumLabelTypeType = {
    Visibility?: any;
  };

  export type TooltipTargetType = {};

  export type DataLabelPositionType = {};

  export type GeospatialMapStyleOptionsType = {
    BaseMapStyle?: BaseMapStyleTypeType;
  };

  export type LayoutType = {
    Configuration: LayoutConfigurationType;
  };

  export type ReferenceLineValueLabelConfigurationType = {
    FormatConfiguration?: NumericFormatConfigurationType;

    RelativePosition?: ReferenceLineValueLabelRelativePositionType;
  };

  export type StringValueWhenUnsetConfigurationType = {
    ValueWhenUnsetOption?: ValueWhenUnsetOptionType;

    CustomValue?: string;
  };

  export type PivotTableSortByType = {
    Field?: FieldSortType;

    DataPath?: DataPathSortType;

    Column?: ColumnSortType;
  };

  export type SimpleClusterMarkerType = {
    Color?: string;
  };

  export type SheetImageSourceType = {
    SheetImageStaticFileSource?: SheetImageStaticFileSourceType;
  };

  export type FilterDateTimePickerControlType = {
    FilterControlId: string;

    Type?: SheetControlDateTimePickerTypeType;

    DisplayOptions?: DateTimePickerControlDisplayOptionsType;

    Title: string;

    CommitMode?: CommitModeType;

    SourceFilterId: string;
  };

  export type LegendPositionType = {};

  export type PluginVisualFieldWellType = {
    Unaggregated?: UnaggregatedFieldType[];

    AxisName?: PluginVisualAxisNameType;

    Measures?: MeasureFieldType[];

    Dimensions?: DimensionFieldType[];
  };

  export type KPIVisualLayoutOptionsType = {
    StandardLayout?: KPIVisualStandardLayoutType;
  };

  export type TimeRangeFilterValueType = {
    RollingDate?: RollingDateConfigurationType;

    StaticValue?: string;

    Parameter?: string;
  };

  export type PivotTableRowsLabelOptionsType = {
    CustomLabel?: string;

    Visibility?: any;
  };

  export type WordCloudOptionsType = {
    WordOrientation?: WordCloudWordOrientationType;

    WordScaling?: WordCloudWordScalingType;

    CloudLayout?: WordCloudCloudLayoutType;

    MaximumStringLength?: number;

    WordCasing?: WordCloudWordCasingType;

    WordPadding?: WordCloudWordPaddingType;
  };

  export type ParameterDropDownControlType = {
    ParameterControlId: string;

    Type?: SheetControlListTypeType;

    DisplayOptions?: DropDownControlDisplayOptionsType;

    SourceParameterName: string;

    CascadingControlConfiguration?: CascadingControlConfigurationType;

    Title: string;

    CommitMode?: CommitModeType;

    SelectableValues?: ParameterSelectableValuesType;
  };

  export type TableFieldOptionType = {
    CustomLabel?: string;

    URLStyling?: TableFieldURLConfigurationType;

    FieldId: string;

    Visibility?: any;

    /**
     * String based length that is composed of value and unit in px
     */
    Width?: string;
  };

  export type IntegerParameterDeclarationType = {
    MappedDataSetParameters?: MappedDataSetParameterType[];

    DefaultValues?: IntegerDefaultValuesType;

    ParameterValueType: ParameterValueTypeType;

    ValueWhenUnset?: IntegerValueWhenUnsetConfigurationType;

    Name: string;
  };

  export type FontConfigurationType = {
    FontFamily?: string;

    FontStyle?: FontStyleType;

    FontSize?: FontSizeType;

    FontDecoration?: FontDecorationType;

    FontColor?: string;

    FontWeight?: FontWeightType;
  };

  export type VisualSubtitleLabelOptionsType = {
    Visibility?: any;

    FormatText?: LongFormatTextType;
  };

  export type DataPathTypeType = {
    PivotTableDataPathType?: PivotTableDataPathTypeType;
  };

  export type ArcAxisConfigurationType = {
    Range?: ArcAxisDisplayRangeType;

    ReserveRange?: number;
  };

  export type NumericEqualityFilterType = {
    AggregationFunction?: AggregationFunctionType;

    Column: ColumnIdentifierType;

    Value?: number;

    ParameterName?: string;

    NullOption: FilterNullOptionType;

    MatchOperator: NumericEqualityMatchOperatorType;

    SelectAllOptions?: NumericFilterSelectAllOptionsType;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;

    FilterId: string;
  };

  export type ShapeConditionalFormatType = {
    BackgroundColor: ConditionalFormattingColorType;
  };

  export type GaugeChartArcConditionalFormattingType = {
    ForegroundColor?: ConditionalFormattingColorType;
  };

  export type AxisLabelOptionsType = {
    CustomLabel?: string;

    ApplyTo?: AxisLabelReferenceOptionsType;

    FontConfiguration?: FontConfigurationType;
  };

  /**
   * <p>Dataset reference.</p>
   */
  export type DataSetReferenceType = {
    /**
     * <p>Dataset Amazon Resource Name (ARN).</p>
     */
    DataSetArn: string;

    /**
     * <p>Dataset placeholder.</p>
     */
    DataSetPlaceholder: string;
  };

  export type ScatterPlotCategoricallyAggregatedFieldWellsType = {
    Category?: DimensionFieldType[];

    Size?: MeasureFieldType[];

    Label?: DimensionFieldType[];

    XAxis?: MeasureFieldType[];

    YAxis?: MeasureFieldType[];
  };

  export type LongFormatTextType = {
    RichText?: string;

    PlainText?: string;
  };

  export type RadarChartAggregatedFieldWellsType = {
    Category?: DimensionFieldType[];

    Color?: DimensionFieldType[];

    Values?: MeasureFieldType[];
  };

  export type FilterOperationTargetVisualsConfigurationType = {
    SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfigurationType;
  };

  export type GrowthRateComputationType = {
    Value?: MeasureFieldType;

    Time?: DimensionFieldType;

    PeriodSize?: number;

    ComputationId: string;

    Name?: string;
  };

  export type KPIOptionsType = {
    SecondaryValueFontConfiguration?: FontConfigurationType;

    VisualLayoutOptions?: KPIVisualLayoutOptionsType;

    TrendArrows?: TrendArrowOptionsType;

    SecondaryValue?: SecondaryValueOptionsType;

    Comparison?: ComparisonConfigurationType;

    PrimaryValueDisplayType?: PrimaryValueDisplayTypeType;

    ProgressBar?: ProgressBarOptionsType;

    PrimaryValueFontConfiguration?: FontConfigurationType;

    Sparkline?: KPISparklineOptionsType;
  };

  export type AttributeAggregationFunctionType = {
    SimpleAttributeAggregation?: SimpleAttributeAggregationFunctionType;

    ValueForMultipleValues?: string;
  };

  export type SectionBasedLayoutCanvasSizeOptionsType = {
    PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptionsType;
  };

  export type NumericRangeFilterType = {
    AggregationFunction?: AggregationFunctionType;

    Column: ColumnIdentifierType;

    IncludeMaximum?: boolean;

    RangeMinimum?: NumericRangeFilterValueType;

    NullOption: FilterNullOptionType;

    SelectAllOptions?: NumericFilterSelectAllOptionsType;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;

    FilterId: string;

    RangeMaximum?: NumericRangeFilterValueType;

    IncludeMinimum?: boolean;
  };

  export type FieldSortOptionsType = {
    FieldSort?: FieldSortType;

    ColumnSort?: ColumnSortType;
  };

  export type ColorsConfigurationType = {
    CustomColors?: CustomColorType[];
  };

  export type HistogramBinTypeType = {};

  export type ComboChartConfigurationType = {
    SortConfiguration?: ComboChartSortConfigurationType;

    Legend?: LegendOptionsType;

    ReferenceLines?: ReferenceLineType[];

    ColorLabelOptions?: ChartAxisLabelOptionsType;

    BarDataLabels?: DataLabelOptionsType;

    CategoryLabelOptions?: ChartAxisLabelOptionsType;

    Tooltip?: TooltipOptionsType;

    SingleAxisOptions?: SingleAxisOptionsType;

    PrimaryYAxisDisplayOptions?: AxisDisplayOptionsType;

    VisualPalette?: VisualPaletteType;

    BarsArrangement?: BarsArrangementType;

    SecondaryYAxisLabelOptions?: ChartAxisLabelOptionsType;

    LineDataLabels?: DataLabelOptionsType;

    CategoryAxis?: AxisDisplayOptionsType;

    PrimaryYAxisLabelOptions?: ChartAxisLabelOptionsType;

    FieldWells?: ComboChartFieldWellsType;

    SecondaryYAxisDisplayOptions?: AxisDisplayOptionsType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type TreeMapFieldWellsType = {
    TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWellsType;
  };

  export type DateTimeHierarchyType = {
    HierarchyId: string;

    DrillDownFilters?: DrillDownFilterType[];
  };

  export type PercentileAggregationType = {
    PercentileValue?: number;
  };

  export type WaterfallChartGroupColorConfigurationType = {
    NegativeBarColor?: string;

    TotalBarColor?: string;

    PositiveBarColor?: string;
  };

  export type FunnelChartFieldWellsType = {
    FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWellsType;
  };

  export type StringParameterDeclarationType = {
    MappedDataSetParameters?: MappedDataSetParameterType[];

    DefaultValues?: StringDefaultValuesType;

    ParameterValueType: ParameterValueTypeType;

    ValueWhenUnset?: StringValueWhenUnsetConfigurationType;

    Name: string;
  };

  export type DataLabelOptionsType = {
    DataLabelTypes?: DataLabelTypeType[];

    MeasureLabelVisibility?: any;

    Position?: DataLabelPositionType;

    LabelContent?: DataLabelContentType;

    Visibility?: any;

    TotalsVisibility?: any;

    Overlap?: DataLabelOverlapType;

    CategoryLabelVisibility?: any;

    LabelColor?: string;

    LabelFontConfiguration?: FontConfigurationType;
  };

  export type TreeMapConfigurationType = {
    SortConfiguration?: TreeMapSortConfigurationType;

    Legend?: LegendOptionsType;

    DataLabels?: DataLabelOptionsType;

    ColorLabelOptions?: ChartAxisLabelOptionsType;

    SizeLabelOptions?: ChartAxisLabelOptionsType;

    FieldWells?: TreeMapFieldWellsType;

    Tooltip?: TooltipOptionsType;

    ColorScale?: ColorScaleType;

    Interactions?: VisualInteractionOptionsType;

    GroupLabelOptions?: ChartAxisLabelOptionsType;
  };

  export type FontSizeType = {
    Relative?: RelativeFontSizeType;

    /**
     * String based length that is composed of value and unit in px
     */
    Absolute?: string;
  };

  export type InnerFilterType = {
    CategoryInnerFilter?: CategoryInnerFilterType;
  };

  export type PivotTableFieldCollapseStateTargetType = {
    FieldId?: string;

    FieldDataPathValues?: DataPathValueType[];
  };

  export type SheetVisualScopingConfigurationType = {
    Scope: FilterVisualScopeType;

    SheetId: string;

    VisualIds?: string[];
  };

  export type WidgetStatusType = {};

  export type SheetImageTooltipConfigurationType = {
    Visibility?: any;

    TooltipText?: SheetImageTooltipTextType;
  };

  export type BodySectionRepeatConfigurationType = {
    DimensionConfigurations?: BodySectionRepeatDimensionConfigurationType[];

    NonRepeatingVisuals?: string[];

    PageBreakConfiguration?: BodySectionRepeatPageBreakConfigurationType;
  };

  export type SheetControlSliderTypeType = {};

  export type TableBorderOptionsType = {
    Thickness?: number;

    Color?: string;

    Style?: TableBorderStyleType;
  };

  export type IconType = {};

  export type DefaultFilterControlConfigurationType = {
    ControlOptions: DefaultFilterControlOptionsType;

    Title: string;
  };

  export type DataBarsOptionsType = {
    PositiveColor?: string;

    FieldId: string;

    NegativeColor?: string;
  };

  export type TablePaginatedReportOptionsType = {
    OverflowColumnHeaderVisibility?: any;

    VerticalOverflowVisibility?: any;
  };

  export type EmptyVisualType = {
    VisualId: string;

    Actions?: VisualCustomActionType[];

    DataSetIdentifier: string;
  };

  export type KPISparklineOptionsType = {
    Type: KPISparklineTypeType;

    Color?: string;

    TooltipVisibility?: any;

    Visibility?: any;
  };

  export type CustomFilterConfigurationType = {
    CategoryValue?: string;

    ParameterName?: string;

    NullOption: FilterNullOptionType;

    MatchOperator: CategoryFilterMatchOperatorType;

    SelectAllOptions?: CategoryFilterSelectAllOptionsType;
  };

  export type CustomContentImageScalingConfigurationType = {};

  export type DecimalDefaultValuesType = {
    DynamicValue?: DynamicDefaultValueType;

    StaticValues?: number[];
  };

  export type TimeRangeFilterType = {
    RangeMinimumValue?: TimeRangeFilterValueType;

    Column: ColumnIdentifierType;

    RangeMaximumValue?: TimeRangeFilterValueType;

    IncludeMaximum?: boolean;

    TimeGranularity?: TimeGranularityType;

    NullOption: FilterNullOptionType;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;

    FilterId: string;

    IncludeMinimum?: boolean;

    ExcludePeriodConfiguration?: ExcludePeriodConfigurationType;
  };

  export type WordCloudSortConfigurationType = {
    CategoryItemsLimit?: ItemsLimitConfigurationType;

    CategorySort?: FieldSortOptionsType[];
  };

  export type RadarChartAreaStyleSettingsType = {
    Visibility?: any;
  };

  export type AxisDisplayDataDrivenRangeType = {};

  export type FilterGroupType = {
    Status?: WidgetStatusType;

    Filters: FilterType[];

    CrossDataset: CrossDatasetTypesType;

    ScopeConfiguration: FilterScopeConfigurationType;

    FilterGroupId: string;
  };

  export type FontWeightType = {
    Name?: FontWeightNameType;
  };

  export type TooltipItemType = {
    FieldTooltipItem?: FieldTooltipItemType;

    ColumnTooltipItem?: ColumnTooltipItemType;
  };

  export type AxisDataOptionsType = {
    DateAxisOptions?: DateAxisOptionsType;

    NumericAxisOptions?: NumericAxisOptionsType;
  };

  export type FilterOperationSelectedFieldsConfigurationType = {
    /**
     * <p>The selected columns of a dataset.</p>
     */
    SelectedColumns?: ColumnIdentifierType[];

    SelectedFields?: string[];

    SelectedFieldOptions?: SelectedFieldOptionsType;
  };

  export type BarsArrangementType = {};

  export type ExcludePeriodConfigurationType = {
    Status?: WidgetStatusType;

    Amount: number;

    Granularity: TimeGranularityType;
  };

  export type RadarChartShapeType = {};

  export type ScrollBarOptionsType = {
    VisibleRange?: VisibleRangeOptionsType;

    Visibility?: any;
  };

  export type ConditionalFormattingCustomIconOptionsType = {
    UnicodeIcon?: string;

    Icon?: IconType;
  };

  export type DefaultInteractiveLayoutConfigurationType = {
    FreeForm?: DefaultFreeFormLayoutConfigurationType;

    Grid?: DefaultGridLayoutConfigurationType;
  };

  export type LineChartSeriesSettingsType = {
    LineStyleSettings?: LineChartLineStyleSettingsType;

    MarkerStyleSettings?: LineChartMarkerStyleSettingsType;
  };

  export type SortDirectionType = {};

  export type ScatterPlotConfigurationType = {
    YAxisLabelOptions?: ChartAxisLabelOptionsType;

    SortConfiguration?: ScatterPlotSortConfigurationType;

    Legend?: LegendOptionsType;

    YAxisDisplayOptions?: AxisDisplayOptionsType;

    DataLabels?: DataLabelOptionsType;

    FieldWells?: ScatterPlotFieldWellsType;

    Tooltip?: TooltipOptionsType;

    XAxisLabelOptions?: ChartAxisLabelOptionsType;

    Interactions?: VisualInteractionOptionsType;

    VisualPalette?: VisualPaletteType;

    XAxisDisplayOptions?: AxisDisplayOptionsType;
  };

  export type CustomContentTypeType = {};

  export type DefaultTextAreaControlOptionsType = {
    Delimiter?: string;

    DisplayOptions?: TextAreaControlDisplayOptionsType;
  };

  export type TemplateVersionDefinitionType = {
    Options?: AssetOptionsType;

    FilterGroups?: FilterGroupType[];

    QueryExecutionOptions?: QueryExecutionOptionsType;

    CalculatedFields?: CalculatedFieldType[];

    DataSetConfigurations: DataSetConfigurationType[];

    ColumnConfigurations?: ColumnConfigurationType[];

    AnalysisDefaults?: AnalysisDefaultsType;

    Sheets?: SheetDefinitionType[];

    ParameterDeclarations?: ParameterDeclarationType[];
  };

  export type VisualCustomActionTriggerType = {};

  export type SankeyDiagramAggregatedFieldWellsType = {
    Destination?: DimensionFieldType[];

    Source?: DimensionFieldType[];

    Weight?: MeasureFieldType[];
  };

  export type TableConditionalFormattingOptionType = {
    Row?: TableRowConditionalFormattingType;

    Cell?: TableCellConditionalFormattingType;
  };

  export type ArcThicknessType = {};

  export type CalculatedMeasureFieldType = {
    Expression: string;

    FieldId: string;
  };

  export type FieldSeriesItemType = {
    FieldId: string;

    AxisBinding: AxisBindingType;

    Settings?: LineChartSeriesSettingsType;
  };

  export type FilterDropDownControlType = {
    FilterControlId: string;

    Type?: SheetControlListTypeType;

    DisplayOptions?: DropDownControlDisplayOptionsType;

    CascadingControlConfiguration?: CascadingControlConfigurationType;

    Title: string;

    CommitMode?: CommitModeType;

    SourceFilterId: string;

    SelectableValues?: FilterSelectableValuesType;
  };

  export type BoxPlotAggregatedFieldWellsType = {
    GroupBy?: DimensionFieldType[];

    Values?: MeasureFieldType[];
  };

  export type RelativeDatesFilterType = {
    RelativeDateValue?: number;

    Column: ColumnIdentifierType;

    RelativeDateType: RelativeDateTypeType;

    TimeGranularity: TimeGranularityType;

    ParameterName?: string;

    NullOption: FilterNullOptionType;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;

    FilterId: string;

    AnchorDateConfiguration: AnchorDateConfigurationType;

    MinimumGranularity?: TimeGranularityType;

    ExcludePeriodConfiguration?: ExcludePeriodConfigurationType;
  };

  export type ParameterControlType = {
    Slider?: ParameterSliderControlType;

    TextArea?: ParameterTextAreaControlType;

    Dropdown?: ParameterDropDownControlType;

    TextField?: ParameterTextFieldControlType;

    List?: ParameterListControlType;

    DateTimePicker?: ParameterDateTimePickerControlType;
  };

  export type DigitGroupingStyleType = {};

  export type ReferenceLineLabelConfigurationType = {
    HorizontalPosition?: ReferenceLineLabelHorizontalPositionType;

    ValueLabelConfiguration?: ReferenceLineValueLabelConfigurationType;

    CustomLabelConfiguration?: ReferenceLineCustomLabelConfigurationType;

    FontColor?: string;

    FontConfiguration?: FontConfigurationType;

    VerticalPosition?: ReferenceLineLabelVerticalPositionType;
  };

  export type HistogramVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: HistogramConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type DateTimeValueWhenUnsetConfigurationType = {
    ValueWhenUnsetOption?: ValueWhenUnsetOptionType;

    CustomValue?: string;
  };

  export type PivotTableVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    ConditionalFormatting?: PivotTableConditionalFormattingType;

    VisualId: string;

    ChartConfiguration?: PivotTableConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type PluginVisualItemsLimitConfigurationType = {
    ItemsLimit?: number;
  };

  export type GridLayoutElementType = {
    ElementType: LayoutElementTypeType;

    ColumnSpan: number;

    ColumnIndex?: number;

    RowIndex?: number;

    RowSpan: number;

    ElementId: string;
  };

  export type FreeFormLayoutElementType = {
    ElementType: LayoutElementTypeType;

    BorderStyle?: FreeFormLayoutElementBorderStyleType;

    /**
     * String based length that is composed of value and unit in px
     */
    Height: string;

    Visibility?: any;

    RenderingRules?: SheetElementRenderingRuleType[];

    /**
     * String based length that is composed of value and unit in px with Integer.MAX_VALUE as maximum value
     */
    YAxisLocation: string;

    LoadingAnimation?: LoadingAnimationType;

    /**
     * String based length that is composed of value and unit in px
     */
    Width: string;

    BackgroundStyle?: FreeFormLayoutElementBackgroundStyleType;

    ElementId: string;

    /**
     * String based length that is composed of value and unit in px
     */
    XAxisLocation: string;

    SelectedBorderStyle?: FreeFormLayoutElementBorderStyleType;
  };

  export type LineInterpolationType = {};

  export type CustomValuesConfigurationType = {
    IncludeNullValue?: boolean;

    CustomValues: CustomParameterValuesType;
  };

  export type DefaultNewSheetConfigurationType = {
    SheetContentType?: SheetContentTypeType;

    InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfigurationType;

    PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfigurationType;
  };

  export type GaugeChartConditionalFormattingType = {
    ConditionalFormattingOptions?: GaugeChartConditionalFormattingOptionType[];
  };

  export type FilledMapFieldWellsType = {
    FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWellsType;
  };

  export type AxisDisplayRangeType = {
    DataDriven?: AxisDisplayDataDrivenRangeType;

    MinMax?: AxisDisplayMinMaxRangeType;
  };

  export type ForecastComputationType = {
    PeriodsBackward?: number;

    PeriodsForward?: number;

    PredictionInterval?: number;

    Seasonality?: ForecastComputationSeasonalityType;

    CustomSeasonalityValue?: number;

    Value?: MeasureFieldType;

    Time?: DimensionFieldType;

    UpperBoundary?: number;

    ComputationId: string;

    Name?: string;

    LowerBoundary?: number;
  };

  export type WordCloudWordPaddingType = {};

  export type PivotTableDataPathOptionType = {
    DataPathList: DataPathValueType[];

    /**
     * String based length that is composed of value and unit in px
     */
    Width?: string;
  };

  export type TextFieldControlDisplayOptionsType = {
    TitleOptions?: LabelOptionsType;

    PlaceholderOptions?: TextControlPlaceholderOptionsType;

    InfoIconLabelOptions?: SheetControlInfoIconLabelOptionsType;
  };

  export type AxisBindingType = {};

  export type PivotTableSortConfigurationType = {
    FieldSortOptions?: PivotFieldSortOptionsType[];
  };

  export type ReferenceLinePatternTypeType = {};

  export type NumericAxisOptionsType = {
    Scale?: AxisScaleType;

    Range?: AxisDisplayRangeType;
  };

  export type VisualCustomActionOperationType = {
    NavigationOperation?: CustomActionNavigationOperationType;

    SetParametersOperation?: CustomActionSetParametersOperationType;

    FilterOperation?: CustomActionFilterOperationType;

    URLOperation?: CustomActionURLOperationType;
  };

  export type NumericRangeFilterValueType = {
    StaticValue?: number;

    Parameter?: string;
  };

  export type BoxPlotVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: BoxPlotChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type CustomFilterListConfigurationType = {
    CategoryValues?: string[];

    NullOption: FilterNullOptionType;

    MatchOperator: CategoryFilterMatchOperatorType;

    SelectAllOptions?: CategoryFilterSelectAllOptionsType;
  };

  export type FreeFormLayoutElementBackgroundStyleType = {
    Color?: string;

    Visibility?: any;
  };

  export type SheetImageScalingTypeType = {};

  export type BoxPlotFieldWellsType = {
    BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWellsType;
  };

  export type SheetElementRenderingRuleType = {
    Expression: string;

    ConfigurationOverrides: SheetElementConfigurationOverridesType;
  };

  export type TrendArrowOptionsType = {
    Visibility?: any;
  };

  /**
   * <p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to <code>LENIENT</code>, validation is skipped for specific errors.</p>
   */
  export type ValidationStrategyType = {
    Mode: ValidationStrategyModeType;
  };

  export type ConditionalFormattingIconSetTypeType = {};

  export type TableCellImageSizingConfigurationType = {
    TableCellImageScalingConfiguration?: TableCellImageScalingConfigurationType;
  };

  export type GeospatialHeatmapConfigurationType = {
    HeatmapColor?: GeospatialHeatmapColorScaleType;
  };

  export type StaticFileType = {
    ImageStaticFile?: ImageStaticFileType;

    SpatialStaticFile?: SpatialStaticFileType;
  };

  export type PanelTitleOptionsType = {
    Visibility?: any;

    FontConfiguration?: FontConfigurationType;

    HorizontalTextAlignment?: HorizontalTextAlignmentType;
  };

  export type FunnelChartAggregatedFieldWellsType = {
    Category?: DimensionFieldType[];

    Values?: MeasureFieldType[];
  };

  export type SelectAllValueOptionsType = {};

  export type GeospatialCoordinateBoundsType = {
    West: number;

    South: number;

    North: number;

    East: number;
  };

  export type PivotTableConditionalFormattingScopeRoleType = {};

  export type BoxPlotStyleOptionsType = {
    FillStyle?: BoxPlotFillStyleType;
  };

  export type StringDefaultValuesType = {
    DynamicValue?: DynamicDefaultValueType;

    StaticValues?: string[];
  };

  export type SheetImageScalingConfigurationType = {
    ScalingType?: SheetImageScalingTypeType;
  };

  export type FreeFormLayoutElementBorderStyleType = {
    Color?: string;

    Visibility?: any;
  };

  export type CategoryFilterType = {
    Configuration: CategoryFilterConfigurationType;

    Column: ColumnIdentifierType;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;

    FilterId: string;
  };

  export type VerticalTextAlignmentType = {};

  export type FilterNullOptionType = {};

  export type FilledMapVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    ConditionalFormatting?: FilledMapConditionalFormattingType;

    VisualId: string;

    ChartConfiguration?: FilledMapConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type SmallMultiplesAxisScaleType = {};

  export type FilterSliderControlType = {
    FilterControlId: string;

    Type?: SheetControlSliderTypeType;

    StepSize: number;

    DisplayOptions?: SliderControlDisplayOptionsType;

    Title: string;

    MaximumValue: number;

    SourceFilterId: string;

    MinimumValue: number;
  };

  export type PivotTableConditionalFormattingOptionType = {
    Cell?: PivotTableCellConditionalFormattingType;
  };

  export type DataLabelOverlapType = {};

  export type ConditionalFormattingIconDisplayConfigurationType = {
    IconDisplayOption?: ConditionalFormattingIconDisplayOptionType;
  };

  export type SelectedFieldOptionsType = {};

  export type TableFieldLinkConfigurationType = {
    Target: URLTargetConfigurationType;

    Content: TableFieldLinkContentConfigurationType;
  };

  export type GeospatialHeatmapDataColorType = {
    Color: string;
  };

  export type LineChartTypeType = {};

  export type DefaultTextFieldControlOptionsType = {
    DisplayOptions?: TextFieldControlDisplayOptionsType;
  };

  export type TableTotalsPlacementType = {};

  export type LayoutConfigurationType = {
    GridLayout?: GridLayoutConfigurationType;

    FreeFormLayout?: FreeFormLayoutConfigurationType;

    SectionBasedLayout?: SectionBasedLayoutConfigurationType;
  };

  export type ImageStaticFileType = {
    StaticFileId: string;

    Source?: StaticFileSourceType;
  };

  export type PivotFieldSortOptionsType = {
    SortBy: PivotTableSortByType;

    FieldId: string;
  };

  export type SimpleAttributeAggregationFunctionType = {};

  export type ColorScaleType = {
    Colors: DataColorType[];

    ColorFillType: ColorFillTypeType;

    NullValueColor?: DataColorType;
  };

  export type WordCloudWordOrientationType = {};

  export type GridLayoutCanvasSizeOptionsType = {
    ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptionsType;
  };

  export type ValueWhenUnsetOptionType = {};

  export type CategoryFilterMatchOperatorType = {};

  export type ConditionalFormattingIconDisplayOptionType = {};

  export type GeospatialPolygonStyleType = {
    PolygonSymbolStyle?: GeospatialPolygonSymbolStyleType;
  };

  export type KPIProgressBarConditionalFormattingType = {
    ForegroundColor?: ConditionalFormattingColorType;
  };

  export type WaterfallChartAggregatedFieldWellsType = {
    Categories?: DimensionFieldType[];

    Breakdowns?: DimensionFieldType[];

    Values?: MeasureFieldType[];
  };

  export type MissingDataConfigurationType = {
    TreatmentOption?: MissingDataTreatmentOptionType;
  };

  export type TableCellImageScalingConfigurationType = {};

  export type HeatMapSortConfigurationType = {
    HeatMapRowSort?: FieldSortOptionsType[];

    HeatMapRowItemsLimitConfiguration?: ItemsLimitConfigurationType;

    HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfigurationType;

    HeatMapColumnSort?: FieldSortOptionsType[];
  };

  /**
   * <p>The column schema.</p>
   */
  export type ColumnSchemaType = {
    /**
     * <p>The data type of the column schema.</p>
     */
    DataType?: string;

    /**
     * <p>The geographic role of the column schema.</p>
     */
    GeographicRole?: string;

    /**
     * <p>The name of the column schema.</p>
     */
    Name?: string;
  };

  export type CategoricalAggregationFunctionType = {};

  export type GeospatialMapFieldWellsType = {
    GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWellsType;
  };

  export type SelectedSheetsFilterScopeConfigurationType = {
    SheetVisualScopingConfigurations?: SheetVisualScopingConfigurationType[];
  };

  export type PieChartSortConfigurationType = {
    SmallMultiplesSort?: FieldSortOptionsType[];

    CategoryItemsLimit?: ItemsLimitConfigurationType;

    CategorySort?: FieldSortOptionsType[];

    SmallMultiplesLimitConfiguration?: ItemsLimitConfigurationType;
  };

  export type FunnelChartConfigurationType = {
    SortConfiguration?: FunnelChartSortConfigurationType;

    DataLabelOptions?: FunnelChartDataLabelOptionsType;

    CategoryLabelOptions?: ChartAxisLabelOptionsType;

    FieldWells?: FunnelChartFieldWellsType;

    Tooltip?: TooltipOptionsType;

    Interactions?: VisualInteractionOptionsType;

    ValueLabelOptions?: ChartAxisLabelOptionsType;

    VisualPalette?: VisualPaletteType;
  };

  export type PluginVisualConfigurationType = {
    SortConfiguration?: PluginVisualSortConfigurationType;

    VisualOptions?: PluginVisualOptionsType;

    FieldWells?: PluginVisualFieldWellType[];
  };

  export type FilterCrossSheetControlType = {
    FilterControlId: string;

    CascadingControlConfiguration?: CascadingControlConfigurationType;

    SourceFilterId: string;
  };

  export type TotalAggregationFunctionType = {
    SimpleTotalAggregationFunction?: SimpleTotalAggregationFunctionType;
  };

  export type GaugeChartConfigurationType = {
    DataLabels?: DataLabelOptionsType;

    FieldWells?: GaugeChartFieldWellsType;

    TooltipOptions?: TooltipOptionsType;

    GaugeChartOptions?: GaugeChartOptionsType;

    ColorConfiguration?: GaugeChartColorConfigurationType;

    Interactions?: VisualInteractionOptionsType;

    VisualPalette?: VisualPaletteType;
  };

  export type NumericalAggregationFunctionType = {
    PercentileAggregation?: PercentileAggregationType;

    SimpleNumericalAggregation?: SimpleNumericalAggregationFunctionType;
  };

  export type CustomActionNavigationOperationType = {
    LocalNavigationConfiguration?: LocalNavigationConfigurationType;
  };

  export type GeospatialPointStyleType = {
    CircleSymbolStyle?: any;
  };

  export type HorizontalTextAlignmentType = {};

  export type LayerCustomActionOperationType = {
    NavigationOperation?: CustomActionNavigationOperationType;

    SetParametersOperation?: CustomActionSetParametersOperationType;

    FilterOperation?: CustomActionFilterOperationType;

    URLOperation?: CustomActionURLOperationType;
  };

  export type DecimalPlacesConfigurationType = {
    DecimalPlaces: number;
  };

  export type SectionBasedLayoutPaperCanvasSizeOptionsType = {
    PaperMargin?: SpacingType;

    PaperSize?: PaperSizeType;

    PaperOrientation?: PaperOrientationType;
  };

  export type FilledMapConditionalFormattingType = {
    ConditionalFormattingOptions: FilledMapConditionalFormattingOptionType[];
  };

  export type BarChartSortConfigurationType = {
    SmallMultiplesSort?: FieldSortOptionsType[];

    ColorSort?: FieldSortOptionsType[];

    ColorItemsLimit?: ItemsLimitConfigurationType;

    CategoryItemsLimit?: ItemsLimitConfigurationType;

    CategorySort?: FieldSortOptionsType[];

    SmallMultiplesLimitConfiguration?: ItemsLimitConfigurationType;
  };

  export type SheetElementConfigurationOverridesType = {
    Visibility?: any;
  };

  export type DonutCenterOptionsType = {
    LabelVisibility?: any;
  };

  export type BodySectionContentType = {
    Layout?: SectionLayoutConfigurationType;
  };

  export type TableRowConditionalFormattingType = {
    TextColor?: ConditionalFormattingColorType;

    BackgroundColor?: ConditionalFormattingColorType;
  };

  export type CategoryInnerFilterType = {
    Configuration: CategoryFilterConfigurationType;

    Column: ColumnIdentifierType;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;
  };

  export type PivotTableCellConditionalFormattingType = {
    Scope?: PivotTableConditionalFormattingScopeType;

    Scopes?: PivotTableConditionalFormattingScopeType[];

    FieldId: string;

    TextFormat?: TextConditionalFormatType;
  };

  /**
   * <p>A structure describing the name, data type, and geographic role of the columns.</p>
   */
  export type ColumnGroupColumnSchemaType = {
    /**
     * <p>The name of the column group's column schema.</p>
     */
    Name?: string;
  };

  export type ListControlDisplayOptionsType = {
    TitleOptions?: LabelOptionsType;

    SearchOptions?: ListControlSearchOptionsType;

    SelectAllOptions?: ListControlSelectAllOptionsType;

    InfoIconLabelOptions?: SheetControlInfoIconLabelOptionsType;
  };

  export type ScatterPlotUnaggregatedFieldWellsType = {
    Category?: DimensionFieldType[];

    Size?: MeasureFieldType[];

    Label?: DimensionFieldType[];

    XAxis?: DimensionFieldType[];

    YAxis?: DimensionFieldType[];
  };

  export type PieChartAggregatedFieldWellsType = {
    Category?: DimensionFieldType[];

    Values?: MeasureFieldType[];

    SmallMultiples?: DimensionFieldType[];
  };

  export type LineChartVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: LineChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type ScatterPlotFieldWellsType = {
    ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWellsType;

    ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWellsType;
  };

  export type FontStyleType = {};

  export type BarChartOrientationType = {};

  export type DataColorType = {
    DataValue?: number;

    Color?: string;
  };

  export type SetParameterValueConfigurationType = {
    DestinationParameterName: string;

    Value: DestinationParameterValueConfigurationType;
  };

  export type KPISparklineTypeType = {};

  /**
   * <p>A version of a template.</p>
   */
  export type TemplateVersionType = {
    Status?: ResourceStatusType;

    /**
     * <p>Errors associated with this template version.</p>
     */
    Errors?: TemplateErrorType[];

    /**
     * <p>The time that this template version was created.</p>
     */
    CreatedTime?: string;

    /**
     * <p>The description of the template.</p>
     */
    Description?: string;

    /**
     * <p>The ARN of the theme associated with this version of the template.</p>
     */
    ThemeArn?: string;

    /**
     * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
     * template should be bound to new datasets matching the same schema described through this
     * API operation.</p>
     */
    DataSetConfigurations?: DataSetConfigurationType[];

    /**
     * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
     * template.</p>
     */
    SourceEntityArn?: string;

    /**
     * <p>The version number of the template version.</p>
     */
    VersionNumber?: number;

    /**
     * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
     */
    Sheets?: SheetType[];
  };

  export type BoxPlotChartConfigurationType = {
    SortConfiguration?: BoxPlotSortConfigurationType;

    Legend?: LegendOptionsType;

    ReferenceLines?: ReferenceLineType[];

    CategoryAxis?: AxisDisplayOptionsType;

    PrimaryYAxisLabelOptions?: ChartAxisLabelOptionsType;

    CategoryLabelOptions?: ChartAxisLabelOptionsType;

    FieldWells?: BoxPlotFieldWellsType;

    Tooltip?: TooltipOptionsType;

    BoxPlotOptions?: BoxPlotOptionsType;

    Interactions?: VisualInteractionOptionsType;

    PrimaryYAxisDisplayOptions?: AxisDisplayOptionsType;

    VisualPalette?: VisualPaletteType;
  };

  export type ScatterPlotSortConfigurationType = {
    ScatterPlotLimitConfiguration?: ItemsLimitConfigurationType;
  };

  export type TimeRangeDrillDownFilterType = {
    Column: ColumnIdentifierType;

    RangeMinimum: string;

    TimeGranularity: TimeGranularityType;

    RangeMaximum: string;
  };

  export type DataFieldSeriesItemType = {
    FieldId: string;

    AxisBinding: AxisBindingType;

    FieldValue?: string;

    Settings?: LineChartSeriesSettingsType;
  };

  export type BinWidthOptionsType = {
    BinCountLimit?: number;

    Value?: number;
  };

  export type CascadingControlSourceType = {
    SourceSheetControlId?: string;

    ColumnToMatch?: ColumnIdentifierType;
  };

  export type TableOptionsType = {
    HeaderStyle?: TableCellStyleType;

    CellStyle?: TableCellStyleType;

    Orientation?: TableOrientationType;

    RowAlternateColorOptions?: RowAlternateColorOptionsType;
  };

  export type ColumnConfigurationType = {
    Role?: ColumnRoleType;

    FormatConfiguration?: FormatConfigurationType;

    Column: ColumnIdentifierType;

    ColorsConfiguration?: ColorsConfigurationType;
  };

  export type ListControlSelectAllOptionsType = {
    Visibility?: any;
  };

  export type NumericFilterSelectAllOptionsType = {};

  export type TableFieldIconSetTypeType = {};

  export type ProgressBarOptionsType = {
    Visibility?: any;
  };

  export type SheetControlLayoutConfigurationType = {
    GridLayout?: GridLayoutConfigurationType;
  };

  export type YAxisOptionsType = {
    YAxis: SingleYAxisOptionType;
  };

  /**
   * <p>Permission for the resource.</p>
   */
  export type ResourcePermissionType = {
    /**
     * <p>The IAM action to grant or revoke permissions on.</p>
     */
    Actions: string[];

    /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
     * following:</p>
     * <ul>
     * <li>
     * <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
     * ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
     * (This is less common.) </p>
     * </li>
     * </ul>
     */
    Principal: string;
  };

  export type SubtotalOptionsType = {
    CustomLabel?: string;

    FieldLevelOptions?: PivotTableFieldSubtotalOptionsType[];

    ValueCellStyle?: TableCellStyleType;

    TotalCellStyle?: TableCellStyleType;

    TotalsVisibility?: any;

    FieldLevel?: PivotTableSubtotalLevelType;

    MetricHeaderCellStyle?: TableCellStyleType;

    StyleTargets?: TableStyleTargetType[];
  };

  export type PivotTablePaginatedReportOptionsType = {
    OverflowColumnHeaderVisibility?: any;

    VerticalOverflowVisibility?: any;
  };

  export type TableOrientationType = {};

  export type ClusterMarkerType = {
    SimpleClusterMarker?: SimpleClusterMarkerType;
  };

  export type FunnelChartMeasureDataLabelStyleType = {};

  export type ParameterValueTypeType = {};

  export type ParameterSelectableValuesType = {
    LinkToDataSetColumn?: ColumnIdentifierType;

    Values?: string[];
  };

  export type SectionLayoutConfigurationType = {
    FreeFormLayout: FreeFormSectionLayoutConfigurationType;
  };

  export type SheetControlLayoutType = {
    Configuration: SheetControlLayoutConfigurationType;
  };

  export type FontWeightNameType = {};

  export type HeatMapFieldWellsType = {
    HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWellsType;
  };

  export type PercentVisibleRangeType = {
    From?: number;

    To?: number;
  };

  export type PivotTableMetricPlacementType = {};

  export type ComputationType = {
    PeriodToDate?: PeriodToDateComputationType;

    GrowthRate?: GrowthRateComputationType;

    TopBottomRanked?: TopBottomRankedComputationType;

    TotalAggregation?: TotalAggregationComputationType;

    Forecast?: ForecastComputationType;

    MaximumMinimum?: MaximumMinimumComputationType;

    PeriodOverPeriod?: PeriodOverPeriodComputationType;

    MetricComparison?: MetricComparisonComputationType;

    TopBottomMovers?: TopBottomMoversComputationType;

    UniqueValues?: UniqueValuesComputationType;
  };

  export type GeospatialPolygonLayerType = {
    Style: GeospatialPolygonStyleType;
  };

  export type RelativeFontSizeType = {};

  export type CascadingControlConfigurationType = {
    SourceControls?: CascadingControlSourceType[];
  };

  export type StaticFileSourceType = {
    UrlOptions?: StaticFileUrlSourceOptionsType;

    S3Options?: StaticFileS3SourceOptionsType;
  };

  export type LineChartLineStyleType = {};

  export type VisibilityType = {};

  export type VisualMenuOptionType = {
    AvailabilityStatus?: DashboardBehaviorType;
  };

  export type ComparisonMethodType = {};

  export type CustomColorType = {
    Color: string;

    FieldValue?: string;

    SpecialValue?: SpecialValueType;
  };

  export type SingleYAxisOptionType = {};

  export type SpecialValueType = {};

  export type DefaultSliderControlOptionsType = {
    Type?: SheetControlSliderTypeType;

    StepSize: number;

    DisplayOptions?: SliderControlDisplayOptionsType;

    MaximumValue: number;

    MinimumValue: number;
  };

  export type WaterfallChartColorConfigurationType = {
    GroupColorConfiguration?: WaterfallChartGroupColorConfigurationType;
  };

  export type ParameterListControlType = {
    ParameterControlId: string;

    Type?: SheetControlListTypeType;

    DisplayOptions?: ListControlDisplayOptionsType;

    SourceParameterName: string;

    CascadingControlConfiguration?: CascadingControlConfigurationType;

    Title: string;

    SelectableValues?: ParameterSelectableValuesType;
  };

  export type PluginVisualTableQuerySortType = {
    ItemsLimitConfiguration?: PluginVisualItemsLimitConfigurationType;

    RowSort?: FieldSortOptionsType[];
  };

  export type ParameterDateTimePickerControlType = {
    ParameterControlId: string;

    DisplayOptions?: DateTimePickerControlDisplayOptionsType;

    SourceParameterName: string;

    Title: string;
  };

  export type PluginVisualAxisNameType = {};

  export type TreeMapSortConfigurationType = {
    TreeMapSort?: FieldSortOptionsType[];

    TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfigurationType;
  };

  /**
   * <p>Dataset schema.</p>
   */
  export type DataSetSchemaType = {
    /**
     * <p>A structure containing the list of column schemas.</p>
     */
    ColumnSchemaList?: ColumnSchemaType[];
  };

  export type LineChartFieldWellsType = {
    LineChartAggregatedFieldWells?: LineChartAggregatedFieldWellsType;
  };

  export type RadarChartSeriesSettingsType = {
    AreaStyleSettings?: RadarChartAreaStyleSettingsType;
  };

  export type NumberScaleType = {};

  export type BoxPlotSortConfigurationType = {
    CategorySort?: FieldSortOptionsType[];

    PaginationConfiguration?: PaginationConfigurationType;
  };

  export type ImageMenuOptionType = {
    AvailabilityStatus?: DashboardBehaviorType;
  };

  export type CategoryDrillDownFilterType = {
    Column: ColumnIdentifierType;

    CategoryValues: string[];
  };

  export type PivotTableFieldCollapseStateOptionType = {
    Target: PivotTableFieldCollapseStateTargetType;

    State?: PivotTableFieldCollapseStateType;
  };

  export type DashboardBehaviorType = {};

  export type GridLayoutScreenCanvasSizeOptionsType = {
    /**
     * String based length that is composed of value and unit in px
     */
    OptimizedViewPortWidth?: string;

    ResizeOption: ResizeOptionType;
  };

  export type SankeyDiagramChartConfigurationType = {
    SortConfiguration?: SankeyDiagramSortConfigurationType;

    DataLabels?: DataLabelOptionsType;

    FieldWells?: SankeyDiagramFieldWellsType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type WordCloudVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: WordCloudChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type FilterListConfigurationType = {
    CategoryValues?: string[];

    NullOption?: FilterNullOptionType;

    MatchOperator: CategoryFilterMatchOperatorType;

    SelectAllOptions?: CategoryFilterSelectAllOptionsType;
  };

  export type SankeyDiagramVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: SankeyDiagramChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type TopBottomComputationTypeType = {};

  export type ForecastConfigurationType = {
    ForecastProperties?: TimeBasedForecastPropertiesType;

    Scenario?: ForecastScenarioType;
  };

  export type SimpleTotalAggregationFunctionType = {};

  export type ConditionalFormattingSolidColorType = {
    Expression: string;

    Color?: string;
  };

  export type WaterfallChartFieldWellsType = {
    WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWellsType;
  };

  export type GeospatialHeatmapColorScaleType = {
    Colors?: GeospatialHeatmapDataColorType[];
  };

  export type DefaultFreeFormLayoutConfigurationType = {
    CanvasSizeOptions: FreeFormLayoutCanvasSizeOptionsType;
  };

  export type FilledMapShapeConditionalFormattingType = {
    Format?: ShapeConditionalFormatType;

    FieldId: string;
  };

  export type InsightConfigurationType = {
    Computations?: ComputationType[];

    CustomNarrative?: CustomNarrativeOptionsType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type ReferenceLineStyleConfigurationType = {
    Pattern?: ReferenceLinePatternTypeType;

    Color?: string;
  };

  export type ResizeOptionType = {};

  export type FunnelChartDataLabelOptionsType = {
    MeasureLabelVisibility?: any;

    Position?: DataLabelPositionType;

    Visibility?: any;

    CategoryLabelVisibility?: any;

    LabelColor?: string;

    MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyleType;

    LabelFontConfiguration?: FontConfigurationType;
  };

  export type NumericEqualityMatchOperatorType = {};

  export type SecondaryValueOptionsType = {
    Visibility?: any;
  };

  export type HeaderFooterSectionConfigurationType = {
    Layout: SectionLayoutConfigurationType;

    Style?: SectionStyleType;

    SectionId: string;
  };

  export type BodySectionRepeatPageBreakConfigurationType = {
    After?: SectionAfterPageBreakType;
  };

  export type HeatMapConfigurationType = {
    SortConfiguration?: HeatMapSortConfigurationType;

    ColumnLabelOptions?: ChartAxisLabelOptionsType;

    Legend?: LegendOptionsType;

    DataLabels?: DataLabelOptionsType;

    FieldWells?: HeatMapFieldWellsType;

    Tooltip?: TooltipOptionsType;

    ColorScale?: ColorScaleType;

    Interactions?: VisualInteractionOptionsType;

    RowLabelOptions?: ChartAxisLabelOptionsType;
  };

  export type FilterListControlType = {
    FilterControlId: string;

    Type?: SheetControlListTypeType;

    DisplayOptions?: ListControlDisplayOptionsType;

    CascadingControlConfiguration?: CascadingControlConfigurationType;

    Title: string;

    SourceFilterId: string;

    SelectableValues?: FilterSelectableValuesType;
  };

  export type PeriodOverPeriodComputationType = {
    Value?: MeasureFieldType;

    Time?: DimensionFieldType;

    ComputationId: string;

    Name?: string;
  };

  /**
   * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
   * are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
   * contains at least one sheet. Each sheet contains at least one visualization widget, for
   * example a chart, pivot table, or narrative insight. Sheets can be associated with other
   * components, such as controls, filters, and so on.</p>
   */
  export type SheetType = {
    /**
     * <p>The unique identifier associated with a sheet.</p>
     */
    SheetId?: string;

    /**
     * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
     * console.</p>
     */
    Name?: string;
  };

  export type ArcOptionsType = {
    ArcThickness?: ArcThicknessType;
  };

  export type DefaultSectionBasedLayoutConfigurationType = {
    CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptionsType;
  };

  export type SectionStyleType = {
    Padding?: SpacingType;

    /**
     * String based length that is composed of value and unit in px
     */
    Height?: string;
  };

  export type BarChartFieldWellsType = {
    BarChartAggregatedFieldWells?: BarChartAggregatedFieldWellsType;
  };

  export type GeospatialMapAggregatedFieldWellsType = {
    Colors?: DimensionFieldType[];

    Values?: MeasureFieldType[];

    Geospatial?: DimensionFieldType[];
  };

  export type GeospatialNullDataSettingsType = {
    SymbolStyle: GeospatialNullSymbolStyleType;
  };

  export type SingleAxisOptionsType = {
    YAxisOptions?: YAxisOptionsType;
  };

  export type DateMeasureFieldType = {
    AggregationFunction?: DateAggregationFunctionType;

    FormatConfiguration?: DateTimeFormatConfigurationType;

    Column: ColumnIdentifierType;

    FieldId: string;
  };

  export type GaugeChartColorConfigurationType = {
    ForegroundColor?: string;

    BackgroundColor?: string;
  };

  export type TooltipTitleTypeType = {};

  export type GeospatialMapVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: GeospatialMapConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type DefaultPaginatedLayoutConfigurationType = {
    SectionBased?: DefaultSectionBasedLayoutConfigurationType;
  };

  export type ChartAxisLabelOptionsType = {
    Visibility?: any;

    SortIconVisibility?: any;

    AxisLabelOptions?: AxisLabelOptionsType[];
  };

  export type PivotTableRowsLayoutType = {};

  export type WaterfallChartConfigurationType = {
    CategoryAxisLabelOptions?: ChartAxisLabelOptionsType;

    SortConfiguration?: WaterfallChartSortConfigurationType;

    Legend?: LegendOptionsType;

    DataLabels?: DataLabelOptionsType;

    PrimaryYAxisLabelOptions?: ChartAxisLabelOptionsType;

    FieldWells?: WaterfallChartFieldWellsType;

    WaterfallChartOptions?: WaterfallChartOptionsType;

    ColorConfiguration?: WaterfallChartColorConfigurationType;

    Interactions?: VisualInteractionOptionsType;

    CategoryAxisDisplayOptions?: AxisDisplayOptionsType;

    PrimaryYAxisDisplayOptions?: AxisDisplayOptionsType;

    VisualPalette?: VisualPaletteType;
  };

  export type WhatIfPointScenarioType = {
    Value: number;

    Date: string;
  };

  export type AnalysisDefaultsType = {
    DefaultNewSheetConfiguration: DefaultNewSheetConfigurationType;
  };

  export type NumericalDimensionFieldType = {
    HierarchyId?: string;

    FormatConfiguration?: NumberFormatConfigurationType;

    Column: ColumnIdentifierType;

    FieldId: string;
  };

  export type TableConfigurationType = {
    SortConfiguration?: TableSortConfigurationType;

    PaginatedReportOptions?: TablePaginatedReportOptionsType;

    TableOptions?: TableOptionsType;

    TableInlineVisualizations?: TableInlineVisualizationType[];

    FieldWells?: TableFieldWellsType;

    FieldOptions?: TableFieldOptionsType;

    Interactions?: VisualInteractionOptionsType;

    TotalOptions?: TotalOptionsType;
  };

  export type HistogramConfigurationType = {
    YAxisDisplayOptions?: AxisDisplayOptionsType;

    DataLabels?: DataLabelOptionsType;

    BinOptions?: HistogramBinOptionsType;

    FieldWells?: HistogramFieldWellsType;

    Tooltip?: TooltipOptionsType;

    XAxisLabelOptions?: ChartAxisLabelOptionsType;

    Interactions?: VisualInteractionOptionsType;

    VisualPalette?: VisualPaletteType;

    XAxisDisplayOptions?: AxisDisplayOptionsType;
  };

  export type TreeMapAggregatedFieldWellsType = {
    Sizes?: MeasureFieldType[];

    Colors?: MeasureFieldType[];

    Groups?: DimensionFieldType[];
  };

  export type ConditionalFormattingIconType = {
    CustomCondition?: ConditionalFormattingCustomIconConditionType;

    IconSet?: ConditionalFormattingIconSetType;
  };

  export type NumberFormatConfigurationType = {
    FormatConfiguration?: NumericFormatConfigurationType;
  };

  export type LayoutElementTypeType = {};

  export type WaterfallVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: WaterfallChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type DateTimeDefaultValuesType = {
    RollingDate?: RollingDateConfigurationType;

    DynamicValue?: DynamicDefaultValueType;

    StaticValues?: string[];
  };

  export type ReferenceLineValueLabelRelativePositionType = {};

  export type BinCountOptionsType = {
    Value?: number;
  };

  export type PivotTableOptionsType = {
    RowFieldNamesStyle?: TableCellStyleType;

    RowHeaderStyle?: TableCellStyleType;

    CollapsedRowDimensionsVisibility?: any;

    RowsLayout?: PivotTableRowsLayoutType;

    MetricPlacement?: PivotTableMetricPlacementType;

    /**
     * String based length that is composed of value and unit in px
     */
    DefaultCellWidth?: string;

    ColumnNamesVisibility?: any;

    RowsLabelOptions?: PivotTableRowsLabelOptionsType;

    SingleMetricVisibility?: any;

    ColumnHeaderStyle?: TableCellStyleType;

    ToggleButtonsVisibility?: any;

    CellStyle?: TableCellStyleType;

    RowAlternateColorOptions?: RowAlternateColorOptionsType;
  };

  export type PeriodToDateComputationType = {
    PeriodTimeGranularity?: TimeGranularityType;

    Value?: MeasureFieldType;

    Time?: DimensionFieldType;

    ComputationId: string;

    Name?: string;
  };

  export type TableAggregatedFieldWellsType = {
    GroupBy?: DimensionFieldType[];

    Values?: MeasureFieldType[];
  };

  export type ReferenceLineStaticDataConfigurationType = {
    Value: number;
  };

  export type DayOfTheWeekType = {};

  export type TopBottomRankedComputationType = {
    Type: TopBottomComputationTypeType;

    Category?: DimensionFieldType;

    ResultSize?: number;

    Value?: MeasureFieldType;

    ComputationId: string;

    Name?: string;
  };

  export type BodySectionDynamicNumericDimensionConfigurationType = {
    Column: ColumnIdentifierType;

    SortByMetrics?: ColumnSortType[];

    Limit?: number;
  };

  export type ParameterSliderControlType = {
    ParameterControlId: string;

    StepSize: number;

    DisplayOptions?: SliderControlDisplayOptionsType;

    SourceParameterName: string;

    Title: string;

    MaximumValue: number;

    MinimumValue: number;
  };

  export type NegativeValueDisplayModeType = {};

  export type ColorFillTypeType = {};

  export type SheetImageStaticFileSourceType = {
    StaticFileId: string;
  };

  export type TableFieldCustomIconContentType = {
    Icon?: TableFieldIconSetTypeType;
  };

  export type TableFieldURLConfigurationType = {
    LinkConfiguration?: TableFieldLinkConfigurationType;

    ImageConfiguration?: TableFieldImageConfigurationType;
  };

  export type SheetControlInfoIconLabelOptionsType = {
    Visibility?: any;

    InfoIconText?: string;
  };

  export type VisualPaletteType = {
    ChartColor?: string;

    ColorMap?: DataPathColorType[];
  };

  export type MissingDataTreatmentOptionType = {};

  export type ReferenceLineLabelVerticalPositionType = {};

  export type ItemsLimitConfigurationType = {
    ItemsLimit?: number;

    OtherCategories?: OtherCategoriesType;
  };

  export type FilterTextFieldControlType = {
    FilterControlId: string;

    DisplayOptions?: TextFieldControlDisplayOptionsType;

    Title: string;

    SourceFilterId: string;
  };

  export type TablePinnedFieldOptionsType = {
    PinnedLeftFields?: string[];
  };

  export type OtherCategoriesType = {};

  export type TimeEqualityFilterType = {
    Column: ColumnIdentifierType;

    RollingDate?: RollingDateConfigurationType;

    Value?: string;

    TimeGranularity?: TimeGranularityType;

    ParameterName?: string;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;

    FilterId: string;
  };

  export type NumericFormatConfigurationType = {
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfigurationType;

    CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfigurationType;

    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfigurationType;
  };

  export type DataPathColorType = {
    Element: DataPathValueType;

    Color: string;

    TimeGranularity?: TimeGranularityType;
  };

  export type CustomContentConfigurationType = {
    ContentUrl?: string;

    ContentType?: CustomContentTypeType;

    ImageScaling?: CustomContentImageScalingConfigurationType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type MapZoomModeType = {};

  export type SheetControlListTypeType = {};

  export type ArcThicknessOptionsType = {};

  export type PivotTableDataPathTypeType = {};

  export type RadarChartAxesRangeScaleType = {};

  export type ConditionalFormattingCustomIconConditionType = {
    Expression: string;

    Color?: string;

    DisplayConfiguration?: ConditionalFormattingIconDisplayConfigurationType;

    IconOptions: ConditionalFormattingCustomIconOptionsType;
  };

  export type FilterTextAreaControlType = {
    FilterControlId: string;

    Delimiter?: string;

    DisplayOptions?: TextAreaControlDisplayOptionsType;

    Title: string;

    SourceFilterId: string;
  };

  export type BaseMapStyleTypeType = {};

  export type InsightVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    Actions?: VisualCustomActionType[];

    DataSetIdentifier: string;

    InsightConfiguration?: InsightConfigurationType;

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type TableSortConfigurationType = {
    RowSort?: FieldSortOptionsType[];

    PaginationConfiguration?: PaginationConfigurationType;
  };

  export type FreeFormLayoutScreenCanvasSizeOptionsType = {
    /**
     * String based length that is composed of value and unit in px
     */
    OptimizedViewPortWidth: string;
  };

  export type ContributionAnalysisDefaultType = {
    MeasureFieldId: string;

    ContributorDimensions: ColumnIdentifierType[];
  };

  export type GradientColorType = {
    Stops?: GradientStopType[];
  };

  export type TableFieldImageConfigurationType = {
    SizingOptions?: TableCellImageSizingConfigurationType;
  };

  export type GaugeChartConditionalFormattingOptionType = {
    Arc?: GaugeChartArcConditionalFormattingType;

    PrimaryValue?: GaugeChartPrimaryValueConditionalFormattingType;
  };

  export type PieChartFieldWellsType = {
    PieChartAggregatedFieldWells?: PieChartAggregatedFieldWellsType;
  };

  export type VisualCustomActionType = {
    Status?: WidgetStatusType;

    Trigger: VisualCustomActionTriggerType;

    CustomActionId: string;

    Name: string;

    ActionOperations: VisualCustomActionOperationType[];
  };

  export type TopBottomFilterType = {
    AggregationSortConfigurations: AggregationSortConfigurationType[];

    Column: ColumnIdentifierType;

    TimeGranularity?: TimeGranularityType;

    ParameterName?: string;

    Limit?: number;

    DefaultFilterControlConfiguration?: DefaultFilterControlConfigurationType;

    FilterId: string;
  };

  export type KPIConfigurationType = {
    SortConfiguration?: KPISortConfigurationType;

    KPIOptions?: KPIOptionsType;

    FieldWells?: KPIFieldWellsType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type PivotTableFieldCollapseStateType = {};

  export type MinimumLabelTypeType = {
    Visibility?: any;
  };

  export type CategoryFilterConfigurationType = {
    CustomFilterListConfiguration?: CustomFilterListConfigurationType;

    CustomFilterConfiguration?: CustomFilterConfigurationType;

    FilterListConfiguration?: FilterListConfigurationType;
  };

  /**
   * Describes the properties for a solid color
   */
  export type GeospatialSolidColorType = {
    State?: any;

    Color: string;
  };

  /**
   * <p>The source template of the template.</p>
   */
  export type TemplateSourceTemplateType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    Arn: string;
  };

  export type NumericEqualityDrillDownFilterType = {
    Column: ColumnIdentifierType;

    Value: number;
  };

  export type TimeGranularityType = {};

  export type GaugeChartVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    ConditionalFormatting?: GaugeChartConditionalFormattingType;

    VisualId: string;

    ChartConfiguration?: GaugeChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type FilledMapConfigurationType = {
    SortConfiguration?: FilledMapSortConfigurationType;

    Legend?: LegendOptionsType;

    MapStyleOptions?: GeospatialMapStyleOptionsType;

    FieldWells?: FilledMapFieldWellsType;

    Tooltip?: TooltipOptionsType;

    Interactions?: VisualInteractionOptionsType;

    WindowOptions?: GeospatialWindowOptionsType;
  };

  export type VisibleRangeOptionsType = {
    PercentRange?: PercentVisibleRangeType;
  };

  export type ForecastComputationSeasonalityType = {};

  export type KPIComparisonValueConditionalFormattingType = {
    TextColor?: ConditionalFormattingColorType;

    Icon?: ConditionalFormattingIconType;
  };

  export type RangeEndsLabelTypeType = {
    Visibility?: any;
  };

  export type LegendOptionsType = {
    Position?: LegendPositionType;

    ValueFontConfiguration?: FontConfigurationType;

    Title?: LabelOptionsType;

    Visibility?: any;

    /**
     * String based length that is composed of value and unit in px
     */
    Height?: string;

    /**
     * String based length that is composed of value and unit in px
     */
    Width?: string;
  };

  export type ShortFormatTextType = {
    RichText?: string;

    PlainText?: string;
  };

  export type PieChartVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: PieChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type ComparisonConfigurationType = {
    ComparisonMethod?: ComparisonMethodType;

    ComparisonFormat?: ComparisonFormatConfigurationType;
  };

  export type ConditionalFormattingGradientColorType = {
    Expression: string;

    Color: GradientColorType;
  };

  export type TableFieldCustomTextContentType = {
    Value?: string;

    FontConfiguration: FontConfigurationType;
  };

  export type ArcConfigurationType = {
    ArcAngle?: number;

    ArcThickness?: ArcThicknessOptionsType;
  };

  export type LineChartSortConfigurationType = {
    CategoryItemsLimitConfiguration?: ItemsLimitConfigurationType;

    ColorItemsLimitConfiguration?: ItemsLimitConfigurationType;

    SmallMultiplesSort?: FieldSortOptionsType[];

    CategorySort?: FieldSortOptionsType[];

    SmallMultiplesLimitConfiguration?: ItemsLimitConfigurationType;
  };

  export type TotalAggregationComputationType = {
    Value?: MeasureFieldType;

    ComputationId: string;

    Name?: string;
  };

  export type DateTimeParameterDeclarationType = {
    MappedDataSetParameters?: MappedDataSetParameterType[];

    DefaultValues?: DateTimeDefaultValuesType;

    TimeGranularity?: TimeGranularityType;

    ValueWhenUnset?: DateTimeValueWhenUnsetConfigurationType;

    Name: string;
  };

  export type ParameterTextAreaControlType = {
    ParameterControlId: string;

    Delimiter?: string;

    DisplayOptions?: TextAreaControlDisplayOptionsType;

    SourceParameterName: string;

    Title: string;
  };

  export type TableCellStyleType = {
    VerticalTextAlignment?: VerticalTextAlignmentType;

    Visibility?: any;

    Height?: number;

    FontConfiguration?: FontConfigurationType;

    Border?: GlobalTableBorderOptionsType;

    TextWrap?: TextWrapType;

    HorizontalTextAlignment?: HorizontalTextAlignmentType;

    BackgroundColor?: string;
  };

  export type IntegerValueWhenUnsetConfigurationType = {
    ValueWhenUnsetOption?: ValueWhenUnsetOptionType;

    CustomValue?: number;
  };

  export type PaperSizeType = {};

  export type ReferenceLineType = {
    Status?: WidgetStatusType;

    DataConfiguration: ReferenceLineDataConfigurationType;

    LabelConfiguration?: ReferenceLineLabelConfigurationType;

    StyleConfiguration?: ReferenceLineStyleConfigurationType;
  };

  export type HistogramAggregatedFieldWellsType = {
    Values?: MeasureFieldType[];
  };

  export type ColumnIdentifierType = {
    ColumnName: string;

    DataSetIdentifier: string;
  };

  export type PivotTableConfigurationType = {
    SortConfiguration?: PivotTableSortConfigurationType;

    PaginatedReportOptions?: PivotTablePaginatedReportOptionsType;

    TableOptions?: PivotTableOptionsType;

    FieldWells?: PivotTableFieldWellsType;

    FieldOptions?: PivotTableFieldOptionsType;

    Interactions?: VisualInteractionOptionsType;

    TotalOptions?: PivotTableTotalOptionsType;
  };

  export type LoadingAnimationType = {
    Visibility?: any;
  };

  export type TotalOptionsType = {
    TotalAggregationOptions?: TotalAggregationOptionType[];

    CustomLabel?: string;

    ScrollStatus?: TableTotalsScrollStatusType;

    Placement?: TableTotalsPlacementType;

    TotalCellStyle?: TableCellStyleType;

    TotalsVisibility?: any;
  };

  export type ForecastScenarioType = {
    WhatIfRangeScenario?: WhatIfRangeScenarioType;

    WhatIfPointScenario?: WhatIfPointScenarioType;
  };

  export type RowAlternateColorOptionsType = {
    Status?: WidgetStatusType;

    UsePrimaryBackgroundColor?: WidgetStatusType;

    RowAlternateColors?: string[];
  };

  export type DefaultRelativeDateTimeControlOptionsType = {
    DisplayOptions?: RelativeDateTimeControlDisplayOptionsType;

    CommitMode?: CommitModeType;
  };

  export type SectionPageBreakConfigurationType = {
    After?: SectionAfterPageBreakType;
  };

  export type SheetContentTypeType = {};

  export type TextControlPlaceholderOptionsType = {
    Visibility?: any;
  };

  export type DonutOptionsType = {
    DonutCenterOptions?: DonutCenterOptionsType;

    ArcOptions?: ArcOptionsType;
  };

  export type TableInlineVisualizationType = {
    DataBars?: DataBarsOptionsType;
  };

  export type CustomActionFilterOperationType = {
    SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfigurationType;

    TargetVisualsConfiguration: FilterOperationTargetVisualsConfigurationType;
  };

  export type RadarChartVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: RadarChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type CalculatedFieldType = {
    Expression: string;

    DataSetIdentifier: string;

    Name: string;
  };

  /**
   * <p>The column group schema.</p>
   */
  export type ColumnGroupSchemaType = {
    /**
     * <p>A structure containing the list of schemas for column group columns.</p>
     */
    ColumnGroupColumnSchemaList?: ColumnGroupColumnSchemaType[];

    /**
     * <p>The name of the column group schema.</p>
     */
    Name?: string;
  };

  export type ValidationStrategyModeType = {};

  export type WaterfallChartSortConfigurationType = {
    BreakdownItemsLimit?: ItemsLimitConfigurationType;

    CategorySort?: FieldSortOptionsType[];
  };

  export type ColumnHierarchyType = {
    DateTimeHierarchy?: DateTimeHierarchyType;

    ExplicitHierarchy?: ExplicitHierarchyType;

    PredefinedHierarchy?: PredefinedHierarchyType;
  };

  export type NestedFilterType = {
    Column: ColumnIdentifierType;

    InnerFilter: InnerFilterType;

    IncludeInnerSet: boolean;

    FilterId: string;
  };

  export type MaximumMinimumComputationType = {
    Type: MaximumMinimumComputationTypeType;

    Value?: MeasureFieldType;

    Time?: DimensionFieldType;

    ComputationId: string;

    Name?: string;
  };

  export type RadarChartSortConfigurationType = {
    ColorSort?: FieldSortOptionsType[];

    ColorItemsLimit?: ItemsLimitConfigurationType;

    CategoryItemsLimit?: ItemsLimitConfigurationType;

    CategorySort?: FieldSortOptionsType[];
  };

  export type GridLayoutConfigurationType = {
    CanvasSizeOptions?: GridLayoutCanvasSizeOptionsType;

    Elements: GridLayoutElementType[];
  };

  export type PluginVisualOptionsType = {
    VisualProperties?: PluginVisualPropertyType[];
  };

  export type PluginVisualPropertyType = {
    Value?: string;

    Name?: string;
  };

  export type HistogramBinOptionsType = {
    BinWidth?: BinWidthOptionsType;

    StartValue?: number;

    SelectedBinType?: HistogramBinTypeType;

    BinCount?: BinCountOptionsType;
  };

  export type TemplateErrorTypeType = {};

  export type TableBorderStyleType = {};

  export type PivotTableFieldSubtotalOptionsType = {
    FieldId?: string;
  };

  export type TimeBasedForecastPropertiesType = {
    PeriodsBackward?: number;

    PeriodsForward?: number;

    PredictionInterval?: number;

    Seasonality?: number;

    UpperBoundary?: number;

    LowerBoundary?: number;
  };

  export type SelectedTooltipTypeType = {};

  export type SheetDefinitionType = {
    Description?: string;

    ParameterControls?: ParameterControlType[];

    TextBoxes?: SheetTextBoxType[];

    Layouts?: LayoutType[];

    ContentType?: SheetContentTypeType;

    SheetId: string;

    FilterControls?: FilterControlType[];

    Images?: SheetImageType[];

    SheetControlLayouts?: SheetControlLayoutType[];

    Title?: string;

    Visuals?: VisualType[];

    Name?: string;
  };

  export type FilterType = {
    NestedFilter?: NestedFilterType;

    NumericEqualityFilter?: NumericEqualityFilterType;

    NumericRangeFilter?: NumericRangeFilterType;

    TimeRangeFilter?: TimeRangeFilterType;

    RelativeDatesFilter?: RelativeDatesFilterType;

    TopBottomFilter?: TopBottomFilterType;

    TimeEqualityFilter?: TimeEqualityFilterType;

    CategoryFilter?: CategoryFilterType;
  };

  export type ReferenceLineCustomLabelConfigurationType = {
    CustomLabel: string;
  };

  export type KPIFieldWellsType = {
    TargetValues?: MeasureFieldType[];

    TrendGroups?: DimensionFieldType[];

    Values?: MeasureFieldType[];
  };

  export type WordCloudWordCasingType = {};

  /**
   * <p>List of errors that occurred when the template version creation failed.</p>
   */
  export type TemplateErrorType = {
    Type?: TemplateErrorTypeType;

    /**
     * <p>Description of the error type.</p>
     */
    Message?: string;

    /**
     * <p>An error path that shows which entities caused the template error.</p>
     */
    ViolatedEntities?: EntityType[];
  };

  export type PaginationConfigurationType = {
    PageSize: number;

    PageNumber: number;
  };

  export type ComboChartFieldWellsType = {
    ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWellsType;
  };

  export type CrossDatasetTypesType = {};

  export type CustomActionSetParametersOperationType = {
    ParameterValueConfigurations: SetParameterValueConfigurationType[];
  };

  export type TableConditionalFormattingType = {
    ConditionalFormattingOptions?: TableConditionalFormattingOptionType[];
  };

  export type WhatIfRangeScenarioType = {
    StartDate: string;

    Value: number;

    EndDate: string;
  };

  export type PluginVisualSortConfigurationType = {
    PluginVisualTableQuerySort?: PluginVisualTableQuerySortType;
  };

  export type CategoricalMeasureFieldType = {
    AggregationFunction?: CategoricalAggregationFunctionType;

    FormatConfiguration?: StringFormatConfigurationType;

    Column: ColumnIdentifierType;

    FieldId: string;
  };

  export type ListControlSearchOptionsType = {
    Visibility?: any;
  };

  export type UniqueValuesComputationType = {
    Category?: DimensionFieldType;

    ComputationId: string;

    Name?: string;
  };

  export type SmallMultiplesAxisPropertiesType = {
    Placement?: SmallMultiplesAxisPlacementType;

    Scale?: SmallMultiplesAxisScaleType;
  };

  export type KPIVisualStandardLayoutTypeType = {};

  export type LabelOptionsType = {
    CustomLabel?: string;

    Visibility?: any;

    FontConfiguration?: FontConfigurationType;
  };

  export type UnaggregatedFieldType = {
    FormatConfiguration?: FormatConfigurationType;

    Column: ColumnIdentifierType;

    FieldId: string;
  };

  export type BarChartConfigurationType = {
    SortConfiguration?: BarChartSortConfigurationType;

    Legend?: LegendOptionsType;

    ReferenceLines?: ReferenceLineType[];

    DataLabels?: DataLabelOptionsType;

    ColorLabelOptions?: ChartAxisLabelOptionsType;

    CategoryLabelOptions?: ChartAxisLabelOptionsType;

    Tooltip?: TooltipOptionsType;

    SmallMultiplesOptions?: SmallMultiplesOptionsType;

    Orientation?: BarChartOrientationType;

    VisualPalette?: VisualPaletteType;

    ValueLabelOptions?: ChartAxisLabelOptionsType;

    BarsArrangement?: BarsArrangementType;

    CategoryAxis?: AxisDisplayOptionsType;

    ContributionAnalysisDefaults?: ContributionAnalysisDefaultType[];

    FieldWells?: BarChartFieldWellsType;

    ValueAxis?: AxisDisplayOptionsType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type FieldTooltipItemType = {
    TooltipTarget?: TooltipTargetType;

    FieldId: string;

    Label?: string;

    Visibility?: any;
  };

  export type TableSideBorderOptionsType = {
    Left?: TableBorderOptionsType;

    Top?: TableBorderOptionsType;

    InnerHorizontal?: TableBorderOptionsType;

    Right?: TableBorderOptionsType;

    Bottom?: TableBorderOptionsType;

    InnerVertical?: TableBorderOptionsType;
  };

  export type LineChartMarkerStyleSettingsType = {
    MarkerShape?: LineChartMarkerShapeType;

    /**
     * String based length that is composed of value and unit in px
     */
    MarkerSize?: string;

    MarkerVisibility?: any;

    MarkerColor?: string;
  };

  export type ComparisonFormatConfigurationType = {
    NumberDisplayFormatConfiguration?: NumberDisplayFormatConfigurationType;

    PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfigurationType;
  };

  export type FilterRelativeDateTimeControlType = {
    FilterControlId: string;

    DisplayOptions?: RelativeDateTimeControlDisplayOptionsType;

    Title: string;

    CommitMode?: CommitModeType;

    SourceFilterId: string;
  };

  export type PivotTableConditionalFormattingType = {
    ConditionalFormattingOptions?: PivotTableConditionalFormattingOptionType[];
  };

  export type TableFieldOptionsType = {
    Order?: string[];

    PinnedFieldOptions?: TablePinnedFieldOptionsType;

    SelectedFieldOptions?: TableFieldOptionType[];
  };

  export type ReferenceLineSeriesTypeType = {};

  export type ReferenceLineDynamicDataConfigurationType = {
    Column: ColumnIdentifierType;

    MeasureAggregationFunction?: AggregationFunctionType;

    Calculation: NumericalAggregationFunctionType;
  };

  export type SheetTextBoxType = {
    SheetTextBoxId: string;

    Content?: string;

    Interactions?: any;
  };

  export type DateDimensionFieldType = {
    HierarchyId?: string;

    FormatConfiguration?: DateTimeFormatConfigurationType;

    Column: ColumnIdentifierType;

    FieldId: string;

    DateGranularity?: TimeGranularityType;
  };

  export type DefaultFilterListControlOptionsType = {
    Type?: SheetControlListTypeType;

    DisplayOptions?: ListControlDisplayOptionsType;

    SelectableValues?: FilterSelectableValuesType;
  };

  export type PrimaryValueDisplayTypeType = {};

  export type KPIVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    ConditionalFormatting?: KPIConditionalFormattingType;

    VisualId: string;

    ChartConfiguration?: KPIConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type AggregationSortConfigurationType = {
    AggregationFunction?: AggregationFunctionType;

    SortDirection: SortDirectionType;

    Column: ColumnIdentifierType;
  };

  export type PercentageDisplayFormatConfigurationType = {
    NegativeValueConfiguration?: NegativeValueConfigurationType;

    DecimalPlacesConfiguration?: DecimalPlacesConfigurationType;

    NullValueFormatConfiguration?: NullValueFormatConfigurationType;

    Suffix?: string;

    SeparatorConfiguration?: NumericSeparatorConfigurationType;

    Prefix?: string;
  };

  export type TableVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    ConditionalFormatting?: TableConditionalFormattingType;

    VisualId: string;

    ChartConfiguration?: TableConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type ComboChartSortConfigurationType = {
    ColorSort?: FieldSortOptionsType[];

    ColorItemsLimit?: ItemsLimitConfigurationType;

    CategoryItemsLimit?: ItemsLimitConfigurationType;

    CategorySort?: FieldSortOptionsType[];
  };

  export type SheetImageType = {
    Actions?: ImageCustomActionType[];

    SheetImageId: string;

    Tooltip?: SheetImageTooltipConfigurationType;

    Scaling?: SheetImageScalingConfigurationType;

    Interactions?: ImageInteractionOptionsType;

    Source: SheetImageSourceType;

    ImageContentAltText?: string;
  };

  export type TextAreaControlDisplayOptionsType = {
    TitleOptions?: LabelOptionsType;

    PlaceholderOptions?: TextControlPlaceholderOptionsType;

    InfoIconLabelOptions?: SheetControlInfoIconLabelOptionsType;
  };

  export type DataPathSortType = {
    SortPaths: DataPathValueType[];

    Direction: SortDirectionType;
  };

  export type DecimalParameterDeclarationType = {
    MappedDataSetParameters?: MappedDataSetParameterType[];

    DefaultValues?: DecimalDefaultValuesType;

    ParameterValueType: ParameterValueTypeType;

    ValueWhenUnset?: DecimalValueWhenUnsetConfigurationType;

    Name: string;
  };

  export type FilterVisualScopeType = {};

  export type ImageCustomActionType = {
    Status?: WidgetStatusType;

    Trigger: ImageCustomActionTriggerType;

    CustomActionId: string;

    Name: string;

    ActionOperations: ImageCustomActionOperationType[];
  };

  export type TopBottomMoversComputationType = {
    Type: TopBottomComputationTypeType;

    Category?: DimensionFieldType;

    Value?: MeasureFieldType;

    SortOrder?: TopBottomSortOrderType;

    Time?: DimensionFieldType;

    MoverSize?: number;

    ComputationId: string;

    Name?: string;
  };

  export type TextWrapType = {};

  export type AnchorOptionType = {};

  export type FieldSortType = {
    FieldId: string;

    Direction: SortDirectionType;
  };

  export type AxisDisplayMinMaxRangeType = {
    Minimum?: number;

    Maximum?: number;
  };

  export type SectionPageBreakStatusType = {};

  export type AxisLabelReferenceOptionsType = {
    Column: ColumnIdentifierType;

    FieldId: string;
  };

  export type DateAggregationFunctionType = {};

  export type TopBottomSortOrderType = {};

  export type DropDownControlDisplayOptionsType = {
    TitleOptions?: LabelOptionsType;

    SelectAllOptions?: ListControlSelectAllOptionsType;

    InfoIconLabelOptions?: SheetControlInfoIconLabelOptionsType;
  };

  export type FieldLabelTypeType = {
    FieldId?: string;

    Visibility?: any;
  };

  export type SpatialStaticFileType = {
    StaticFileId: string;

    Source?: StaticFileSourceType;
  };

  export type AxisLogarithmicScaleType = {
    Base?: number;
  };

  export type KPISortConfigurationType = {
    TrendGroupSort?: FieldSortOptionsType[];
  };

  export type GlobalTableBorderOptionsType = {
    UniformBorder?: TableBorderOptionsType;

    SideSpecificBorder?: TableSideBorderOptionsType;
  };

  export type TableTotalsScrollStatusType = {};

  export type StyledCellTypeType = {};

  export type TotalAggregationOptionType = {
    TotalAggregationFunction: TotalAggregationFunctionType;

    FieldId: string;
  };

  export type DataPathValueType = {
    DataPathType?: DataPathTypeType;

    FieldId?: string;

    FieldValue?: string;
  };

  export type PivotTableFieldOptionType = {
    CustomLabel?: string;

    FieldId: string;

    Visibility?: any;
  };

  export type LayerCustomActionType = {
    Status?: WidgetStatusType;

    Trigger: LayerCustomActionTriggerType;

    CustomActionId: string;

    Name: string;

    ActionOperations: LayerCustomActionOperationType[];
  };

  export type SectionBasedLayoutConfigurationType = {
    CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptionsType;

    FooterSections: HeaderFooterSectionConfigurationType[];

    BodySections: BodySectionConfigurationType[];

    HeaderSections: HeaderFooterSectionConfigurationType[];
  };

  export type ConditionalFormattingColorType = {
    Gradient?: ConditionalFormattingGradientColorType;

    Solid?: ConditionalFormattingSolidColorType;
  };

  export type FreeFormLayoutCanvasSizeOptionsType = {
    ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptionsType;
  };

  export type NumericSeparatorSymbolType = {};

  export type QueryExecutionModeType = {};

  /**
   * <p>The source analysis of the template.</p>
   */
  export type TemplateSourceAnalysisType = {
    /**
     * <p>A structure containing information about the dataset references used as placeholders
     * in the template.</p>
     */
    DataSetReferences: DataSetReferenceType[];

    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    Arn: string;
  };

  export type TargetVisualOptionsType = {};

  export type DecimalValueWhenUnsetConfigurationType = {
    ValueWhenUnsetOption?: ValueWhenUnsetOptionType;

    CustomValue?: number;
  };

  export type QueryExecutionOptionsType = {
    QueryExecutionMode?: QueryExecutionModeType;
  };

  export type ColumnSortType = {
    AggregationFunction?: AggregationFunctionType;

    SortBy: ColumnIdentifierType;

    Direction: SortDirectionType;
  };

  export type DefaultDateTimePickerControlOptionsType = {
    Type?: SheetControlDateTimePickerTypeType;

    DisplayOptions?: DateTimePickerControlDisplayOptionsType;

    CommitMode?: CommitModeType;
  };

  export type GeospatialPointLayerType = {
    Style: GeospatialPointStyleType;
  };

  export type NumericalMeasureFieldType = {
    AggregationFunction?: NumericalAggregationFunctionType;

    FormatConfiguration?: NumberFormatConfigurationType;

    Column: ColumnIdentifierType;

    FieldId: string;
  };

  export type PanelBorderStyleType = {};

  export type SpacingType = {
    /**
     * String based length that is composed of value and unit
     */
    Left?: string;

    /**
     * String based length that is composed of value and unit
     */
    Top?: string;

    /**
     * String based length that is composed of value and unit
     */
    Right?: string;

    /**
     * String based length that is composed of value and unit
     */
    Bottom?: string;
  };

  export type KPIVisualStandardLayoutType = {
    Type: KPIVisualStandardLayoutTypeType;
  };

  export type LineChartAggregatedFieldWellsType = {
    Category?: DimensionFieldType[];

    Colors?: DimensionFieldType[];

    Values?: MeasureFieldType[];

    SmallMultiples?: DimensionFieldType[];
  };

  export type CategoryFilterSelectAllOptionsType = {};

  export type CustomActionURLOperationType = {
    URLTemplate: string;

    URLTarget: URLTargetConfigurationType;
  };

  export type FreeFormLayoutConfigurationType = {
    CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptionsType;

    Elements: FreeFormLayoutElementType[];
  };

  export type MetricComparisonComputationType = {
    TargetValue?: MeasureFieldType;

    Time?: DimensionFieldType;

    ComputationId: string;

    FromValue?: MeasureFieldType;

    Name?: string;
  };

  export type TableFieldLinkContentConfigurationType = {
    CustomIconContent?: TableFieldCustomIconContentType;

    CustomTextContent?: TableFieldCustomTextContentType;
  };

  export type TextConditionalFormatType = {
    TextColor?: ConditionalFormattingColorType;

    Icon?: ConditionalFormattingIconType;

    BackgroundColor?: ConditionalFormattingColorType;
  };

  export type PivotTableConditionalFormattingScopeType = {
    Role?: PivotTableConditionalFormattingScopeRoleType;
  };

  export type ImageCustomActionTriggerType = {};

  export type ColumnTooltipItemType = {
    Aggregation?: AggregationFunctionType;

    TooltipTarget?: TooltipTargetType;

    Column: ColumnIdentifierType;

    Label?: string;

    Visibility?: any;
  };

  export type PivotTableFieldOptionsType = {
    CollapseStateOptions?: PivotTableFieldCollapseStateOptionType[];

    DataPathOptions?: PivotTableDataPathOptionType[];

    SelectedFieldOptions?: PivotTableFieldOptionType[];
  };

  /**
   * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
   * resource.</p>
   */
  export type TagType = {
    /**
     * <p>Tag value.</p>
     */
    Value: string;

    /**
     * <p>Tag key.</p>
     */
    Key: string;
  };

  export type FilterScopeConfigurationType = {
    AllSheets?: AllSheetsFilterScopeConfigurationType;

    SelectedSheets?: SelectedSheetsFilterScopeConfigurationType;
  };

  export type AnchorDateConfigurationType = {
    AnchorOption?: AnchorOptionType;

    ParameterName?: string;
  };

  export type DestinationParameterValueConfigurationType = {
    CustomValuesConfiguration?: CustomValuesConfigurationType;

    SourceParameterName?: string;

    SelectAllValueOptions?: SelectAllValueOptionsType;

    SourceField?: string;

    SourceColumn?: ColumnIdentifierType;
  };

  export type FilledMapConditionalFormattingOptionType = {
    Shape: FilledMapShapeConditionalFormattingType;
  };

  export type CategoricalDimensionFieldType = {
    HierarchyId?: string;

    FormatConfiguration?: StringFormatConfigurationType;

    Column: ColumnIdentifierType;

    FieldId: string;
  };

  export type IntegerDefaultValuesType = {
    DynamicValue?: DynamicDefaultValueType;

    StaticValues?: number[];
  };

  export type StringFormatConfigurationType = {
    NumericFormatConfiguration?: NumericFormatConfigurationType;

    NullValueFormatConfiguration?: NullValueFormatConfigurationType;
  };

  export type GeospatialPointStyleOptionsType = {
    SelectedPointStyle?: GeospatialSelectedPointStyleType;

    ClusterMarkerConfiguration?: ClusterMarkerConfigurationType;

    HeatmapConfiguration?: GeospatialHeatmapConfigurationType;
  };

  export type NullValueFormatConfigurationType = {
    NullString: string;
  };

  export type DefaultFilterControlOptionsType = {
    DefaultSliderOptions?: DefaultSliderControlOptionsType;

    DefaultRelativeDateTimeOptions?: DefaultRelativeDateTimeControlOptionsType;

    DefaultTextFieldOptions?: DefaultTextFieldControlOptionsType;

    DefaultTextAreaOptions?: DefaultTextAreaControlOptionsType;

    DefaultDropdownOptions?: DefaultFilterDropDownControlOptionsType;

    DefaultDateTimePickerOptions?: DefaultDateTimePickerControlOptionsType;

    DefaultListOptions?: DefaultFilterListControlOptionsType;
  };

  export type ExplicitHierarchyType = {
    HierarchyId: string;

    DrillDownFilters?: DrillDownFilterType[];

    Columns: ColumnIdentifierType[];
  };

  export type StaticFileUrlSourceOptionsType = {
    Url: string;
  };

  export type SheetImageTooltipTextType = {
    PlainText?: string;
  };

  export type TooltipOptionsType = {
    SelectedTooltipType?: SelectedTooltipTypeType;

    TooltipVisibility?: any;

    FieldBasedTooltip?: FieldBasedTooltipType;
  };

  export type FieldBasedTooltipType = {
    TooltipFields?: TooltipItemType[];

    AggregationVisibility?: any;

    TooltipTitleType?: TooltipTitleTypeType;
  };

  export type FilledMapAggregatedFieldWellsType = {
    Values?: MeasureFieldType[];

    Geospatial?: DimensionFieldType[];
  };

  export type BarChartAggregatedFieldWellsType = {
    Category?: DimensionFieldType[];

    Colors?: DimensionFieldType[];

    Values?: MeasureFieldType[];

    SmallMultiples?: DimensionFieldType[];
  };

  export type WordCloudWordScalingType = {};

  export type GeospatialSelectedPointStyleType = {};

  export type LayerCustomActionTriggerType = {};

  export type ComboChartVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: ComboChartConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type ConditionalFormattingIconSetType = {
    Expression: string;

    IconSetType?: ConditionalFormattingIconSetTypeType;
  };

  export type AxisTickLabelOptionsType = {
    RotationAngle?: number;

    LabelOptions?: LabelOptionsType;
  };

  export type DimensionFieldType = {
    DateDimensionField?: DateDimensionFieldType;

    NumericalDimensionField?: NumericalDimensionFieldType;

    CategoricalDimensionField?: CategoricalDimensionFieldType;
  };

  export type FontDecorationType = {};

  export type PivotTableAggregatedFieldWellsType = {
    Values?: MeasureFieldType[];

    Columns?: DimensionFieldType[];

    Rows?: DimensionFieldType[];
  };

  export type FunnelChartSortConfigurationType = {
    CategoryItemsLimit?: ItemsLimitConfigurationType;

    CategorySort?: FieldSortOptionsType[];
  };

  export type ImageCustomActionOperationType = {
    NavigationOperation?: CustomActionNavigationOperationType;

    SetParametersOperation?: CustomActionSetParametersOperationType;

    URLOperation?: CustomActionURLOperationType;
  };

  export type AllSheetsFilterScopeConfigurationType = {};

  export type HistogramFieldWellsType = {
    HistogramAggregatedFieldWells?: HistogramAggregatedFieldWellsType;
  };

  export type PieChartConfigurationType = {
    SortConfiguration?: PieChartSortConfigurationType;

    Legend?: LegendOptionsType;

    DataLabels?: DataLabelOptionsType;

    ContributionAnalysisDefaults?: ContributionAnalysisDefaultType[];

    CategoryLabelOptions?: ChartAxisLabelOptionsType;

    FieldWells?: PieChartFieldWellsType;

    Tooltip?: TooltipOptionsType;

    DonutOptions?: DonutOptionsType;

    SmallMultiplesOptions?: SmallMultiplesOptionsType;

    Interactions?: VisualInteractionOptionsType;

    ValueLabelOptions?: ChartAxisLabelOptionsType;

    VisualPalette?: VisualPaletteType;
  };

  export type SheetControlDateTimePickerTypeType = {};

  export type ReferenceLineDataConfigurationType = {
    DynamicConfiguration?: ReferenceLineDynamicDataConfigurationType;

    AxisBinding?: AxisBindingType;

    SeriesType?: ReferenceLineSeriesTypeType;

    StaticConfiguration?: ReferenceLineStaticDataConfigurationType;
  };

  export type CurrencyDisplayFormatConfigurationType = {
    NegativeValueConfiguration?: NegativeValueConfigurationType;

    DecimalPlacesConfiguration?: DecimalPlacesConfigurationType;

    NumberScale?: NumberScaleType;

    NullValueFormatConfiguration?: NullValueFormatConfigurationType;

    Suffix?: string;

    SeparatorConfiguration?: NumericSeparatorConfigurationType;

    Symbol?: string;

    Prefix?: string;
  };

  export type SameSheetTargetVisualConfigurationType = {
    TargetVisualOptions?: TargetVisualOptionsType;

    TargetVisuals?: string[];
  };

  export type SliderControlDisplayOptionsType = {
    TitleOptions?: LabelOptionsType;

    InfoIconLabelOptions?: SheetControlInfoIconLabelOptionsType;
  };

  export type GeospatialPolygonSymbolStyleType = {
    FillColor?: any;

    StrokeWidth?: any;

    StrokeColor?: any;
  };

  /**
   * <p>Dataset configuration.</p>
   */
  export type DataSetConfigurationType = {
    /**
     * <p>Placeholder.</p>
     */
    Placeholder?: string;

    DataSetSchema?: DataSetSchemaType;

    /**
     * <p>A structure containing the list of column group schemas.</p>
     */
    ColumnGroupSchemaList?: ColumnGroupSchemaType[];
  };

  export type LineSeriesAxisDisplayOptionsType = {
    MissingDataConfigurations?: MissingDataConfigurationType[];

    AxisOptions?: AxisDisplayOptionsType;
  };

  export type HeatMapVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: HeatMapConfigurationType;

    Actions?: VisualCustomActionType[];

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;

    ColumnHierarchies?: ColumnHierarchyType[];
  };

  export type SankeyDiagramSortConfigurationType = {
    WeightSort?: FieldSortOptionsType[];

    SourceItemsLimit?: ItemsLimitConfigurationType;

    DestinationItemsLimit?: ItemsLimitConfigurationType;
  };

  export type LocalNavigationConfigurationType = {
    TargetSheetId: string;
  };

  export type DataLabelContentType = {};

  export type WaterfallChartOptionsType = {
    TotalBarLabel?: string;
  };

  export type SankeyDiagramFieldWellsType = {
    SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWellsType;
  };

  export type SmallMultiplesAxisPlacementType = {};

  export type TableFieldWellsType = {
    TableUnaggregatedFieldWells?: TableUnaggregatedFieldWellsType;

    TableAggregatedFieldWells?: TableAggregatedFieldWellsType;
  };

  export type RadarChartConfigurationType = {
    SortConfiguration?: RadarChartSortConfigurationType;

    Legend?: LegendOptionsType;

    Shape?: RadarChartShapeType;

    BaseSeriesSettings?: RadarChartSeriesSettingsType;

    ColorLabelOptions?: ChartAxisLabelOptionsType;

    CategoryLabelOptions?: ChartAxisLabelOptionsType;

    AxesRangeScale?: RadarChartAxesRangeScaleType;

    VisualPalette?: VisualPaletteType;

    AlternateBandColorsVisibility?: any;

    StartAngle?: number;

    CategoryAxis?: AxisDisplayOptionsType;

    FieldWells?: RadarChartFieldWellsType;

    ColorAxis?: AxisDisplayOptionsType;

    AlternateBandOddColor?: string;

    Interactions?: VisualInteractionOptionsType;

    AlternateBandEvenColor?: string;
  };

  export type VisualTitleLabelOptionsType = {
    Visibility?: any;

    FormatText?: ShortFormatTextType;
  };

  export type ParameterTextFieldControlType = {
    ParameterControlId: string;

    DisplayOptions?: TextFieldControlDisplayOptionsType;

    SourceParameterName: string;

    Title: string;
  };

  export type URLTargetConfigurationType = {};

  export type WordCloudFieldWellsType = {
    WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWellsType;
  };

  /**
   * <p>The source entity of the template.</p>
   */
  export type TemplateSourceEntityType = {
    SourceAnalysis?: TemplateSourceAnalysisType;

    SourceTemplate?: TemplateSourceTemplateType;
  };

  export type AggregationFunctionType = {
    AttributeAggregationFunction?: AttributeAggregationFunctionType;

    DateAggregationFunction?: DateAggregationFunctionType;

    NumericalAggregationFunction?: NumericalAggregationFunctionType;

    CategoricalAggregationFunction?: CategoricalAggregationFunctionType;
  };

  export type TableStyleTargetType = {
    CellType: StyledCellTypeType;
  };

  export type GeospatialWindowOptionsType = {
    Bounds?: GeospatialCoordinateBoundsType;

    MapZoomMode?: MapZoomModeType;
  };

  export type KPIConditionalFormattingType = {
    ConditionalFormattingOptions?: KPIConditionalFormattingOptionType[];
  };

  export type KPIConditionalFormattingOptionType = {
    PrimaryValue?: KPIPrimaryValueConditionalFormattingType;

    ActualValue?: KPIActualValueConditionalFormattingType;

    ComparisonValue?: KPIComparisonValueConditionalFormattingType;

    ProgressBar?: KPIProgressBarConditionalFormattingType;
  };

  export type LineChartMarkerShapeType = {};

  export type GeospatialStaticFileSourceType = {
    StaticFileId: string;
  };

  export type ArcAxisDisplayRangeType = {
    Min?: number;

    Max?: number;
  };

  export type ParameterDeclarationType = {
    StringParameterDeclaration?: StringParameterDeclarationType;

    DateTimeParameterDeclaration?: DateTimeParameterDeclarationType;

    DecimalParameterDeclaration?: DecimalParameterDeclarationType;

    IntegerParameterDeclaration?: IntegerParameterDeclarationType;
  };

  export type VisualType = {
    FunnelChartVisual?: FunnelChartVisualType;

    BoxPlotVisual?: BoxPlotVisualType;

    GeospatialMapVisual?: GeospatialMapVisualType;

    ScatterPlotVisual?: ScatterPlotVisualType;

    RadarChartVisual?: RadarChartVisualType;

    ComboChartVisual?: ComboChartVisualType;

    WordCloudVisual?: WordCloudVisualType;

    SankeyDiagramVisual?: SankeyDiagramVisualType;

    GaugeChartVisual?: GaugeChartVisualType;

    FilledMapVisual?: FilledMapVisualType;

    WaterfallVisual?: WaterfallVisualType;

    CustomContentVisual?: CustomContentVisualType;

    PieChartVisual?: PieChartVisualType;

    KPIVisual?: KPIVisualType;

    HistogramVisual?: HistogramVisualType;

    PluginVisual?: PluginVisualType;

    TableVisual?: TableVisualType;

    PivotTableVisual?: PivotTableVisualType;

    BarChartVisual?: BarChartVisualType;

    HeatMapVisual?: HeatMapVisualType;

    TreeMapVisual?: TreeMapVisualType;

    InsightVisual?: InsightVisualType;

    LineChartVisual?: LineChartVisualType;

    EmptyVisual?: EmptyVisualType;
  };

  export type WordCloudChartConfigurationType = {
    SortConfiguration?: WordCloudSortConfigurationType;

    CategoryLabelOptions?: ChartAxisLabelOptionsType;

    FieldWells?: WordCloudFieldWellsType;

    WordCloudOptions?: WordCloudOptionsType;

    Interactions?: VisualInteractionOptionsType;
  };

  export type CustomContentVisualType = {
    Subtitle?: VisualSubtitleLabelOptionsType;

    VisualId: string;

    ChartConfiguration?: CustomContentConfigurationType;

    Actions?: VisualCustomActionType[];

    DataSetIdentifier: string;

    Title?: VisualTitleLabelOptionsType;

    VisualContentAltText?: string;
  };

  export type PanelConfigurationType = {
    /**
     * String based length that is composed of value and unit in px
     */
    BorderThickness?: string;

    BorderStyle?: PanelBorderStyleType;

    /**
     * String based length that is composed of value and unit in px
     */
    GutterSpacing?: string;

    BackgroundVisibility?: any;

    BorderVisibility?: any;

    BorderColor?: string;

    Title?: PanelTitleOptionsType;

    GutterVisibility?: any;

    BackgroundColor?: string;
  };

  export type StaticFileS3SourceOptionsType = {
    BucketName: string;

    ObjectKey: string;

    Region: string;
  };

  export type SmallMultiplesOptionsType = {
    MaxVisibleRows?: number;

    PanelConfiguration?: PanelConfigurationType;

    MaxVisibleColumns?: number;

    XAxis?: SmallMultiplesAxisPropertiesType;

    YAxis?: SmallMultiplesAxisPropertiesType;
  };

  export type BodySectionRepeatDimensionConfigurationType = {
    DynamicNumericDimensionConfiguration?: BodySectionDynamicNumericDimensionConfigurationType;

    DynamicCategoryDimensionConfiguration?: BodySectionDynamicCategoryDimensionConfigurationType;
  };

  export type PaperOrientationType = {};

  export type GeospatialNullSymbolStyleType = {
    FillColor?: string;

    StrokeWidth?: number;

    StrokeColor?: string;
  };

  export type NumericSeparatorConfigurationType = {
    DecimalSeparator?: NumericSeparatorSymbolType;

    ThousandsSeparator?: ThousandSeparatorOptionsType;
  };

  export type ContextMenuOptionType = {
    AvailabilityStatus?: DashboardBehaviorType;
  };

  export type CustomParameterValuesType = {
    DecimalValues?: number[];

    IntegerValues?: number[];

    StringValues?: string[];

    DateTimeValues?: string[];
  };

  export type SimpleNumericalAggregationFunctionType = {};

  export type BoxPlotOptionsType = {
    StyleOptions?: BoxPlotStyleOptionsType;

    OutlierVisibility?: any;

    AllDataPointsVisibility?: any;
  };

  export type KPIPrimaryValueConditionalFormattingType = {
    TextColor?: ConditionalFormattingColorType;

    Icon?: ConditionalFormattingIconType;
  };

  export type NumberDisplayFormatConfigurationType = {
    NegativeValueConfiguration?: NegativeValueConfigurationType;

    DecimalPlacesConfiguration?: DecimalPlacesConfigurationType;

    NumberScale?: NumberScaleType;

    NullValueFormatConfiguration?: NullValueFormatConfigurationType;

    Suffix?: string;

    SeparatorConfiguration?: NumericSeparatorConfigurationType;

    Prefix?: string;
  };

  export type VisualInteractionOptionsType = {
    ContextMenuOption?: ContextMenuOptionType;

    VisualMenuOption?: VisualMenuOptionType;
  };

  export type PivotTableFieldWellsType = {
    PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWellsType;
  };

  /**
   * Definition of the AWS::QuickSight::Template Resource Type.
   */
  export type TemplateResourceType = {
    /**
     * <p>Time when this was created.</p>
     * Read-only property
     */
    CreatedTime?: string;

    VersionDescription?: string;

    SourceEntity?: TemplateSourceEntityType;

    Definition?: TemplateVersionDefinitionType;

    /**
     * <p>Time when this was last updated.</p>
     * Read-only property
     */
    LastUpdatedTime?: string;

    ValidationStrategy?: ValidationStrategyType;

    Name?: string;

    /**
     * Read-only property
     */
    Version?: TemplateVersionType;

    /**
     * Create-only property
     */
    AwsAccountId: string;

    Permissions?: ResourcePermissionType[];

    /**
     * <p>The Amazon Resource Name (ARN) of the template.</p>
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    TemplateId: string;
  };
}
