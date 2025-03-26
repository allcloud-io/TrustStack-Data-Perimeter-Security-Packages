/**
 * TypeScript definitions for AWS::QuickSight::DataSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::DataSet Resource Type.
 */
export namespace AWS_QuickSight_DataSet {
  /**
   * <p>An integer parameter for a dataset.</p>
   */
  export type IntegerDatasetParameterType = {
    ValueType: DatasetParameterValueTypeType;

    DefaultValues?: IntegerDatasetParameterDefaultValuesType;

    /**
     * <p>An identifier for the integer parameter created in the dataset.</p>
     */
    Id: string;

    /**
     * <p>The name of the integer parameter that is created in the dataset.</p>
     */
    Name: string;
  };

  export type RowLevelPermissionPolicyType = {};

  /**
   * <p>A set of rules associated with a tag.</p>
   */
  export type RowLevelPermissionTagRuleType = {
    /**
     * <p>The column name that a tag key is assigned to.</p>
     */
    ColumnName: string;

    /**
     * <p>The unique key for a tag.</p>
     */
    TagKey: string;

    /**
     * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
     */
    MatchAllValue?: string;

    /**
     * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
     */
    TagMultiValueDelimiter?: string;
  };

  /**
   * <p>A <i>logical table</i> is a unit that joins and that data
   * transformations operate on. A logical table has a source, which can be either a physical
   * table or result of a join. When a logical table points to a physical table, the logical
   * table acts as a mutable copy of that physical table through transform operations.</p>
   */
  export type LogicalTableType = {
    /**
     * <p>A display name for the logical table.</p>
     */
    Alias: string;

    /**
     * <p>Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. </p>
     */
    DataTransforms?: TransformOperationType[];

    Source?: LogicalTableSourceType;
  };

  export type FileFormatType = {};

  /**
   * <p>Wait policy to use when creating/updating dataset. Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>
   */
  export type IngestionWaitPolicyType = {
    /**
     * <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
     * Applicable only when DataSetImportMode mode is set to SPICE.</p>
     */
    WaitForSpiceIngestion?: boolean;

    /**
     * <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
     * Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
     */
    IngestionWaitTimeInHours?: number;
  };

  /**
   * <p>A string parameter for a dataset.</p>
   */
  export type StringDatasetParameterType = {
    ValueType: DatasetParameterValueTypeType;

    DefaultValues?: StringDatasetParameterDefaultValuesType;

    /**
     * <p>An identifier for the string parameter that is created in the dataset.</p>
     */
    Id: string;

    /**
     * <p>The name of the string parameter that is created in the dataset.</p>
     */
    Name: string;
  };

  /**
   * <p>A transform operation that removes tags associated with a column.</p>
   */
  export type UntagColumnOperationType = {
    /**
     * <p>The column that this operation acts on.</p>
     */
    ColumnName: string;

    /**
     * <p>The column tags to remove from this column.</p>
     */
    TagNames: ColumnTagNameType[];
  };

  /**
   * <p>A transform operation that filters rows based on a condition.</p>
   */
  export type FilterOperationType = {
    /**
     * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
     * evaluates to true are kept in the dataset.</p>
     */
    ConditionExpression: string;
  };

  /**
   * <p>A rule defined to grant access on one or more restricted columns.
   * Each dataset can have multiple rules.
   * To create a restricted column, you add it to one or more rules.
   * Each rule must contain at least one column and at least one user or group.
   * To be able to see a restricted column, a user or group needs to be added
   * to a rule for that column.</p>
   */
  export type ColumnLevelPermissionRuleType = {
    /**
     * <p>An array of column names.</p>
     */
    ColumnNames?: string[];

    /**
     * <p>An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.</p>
     */
    Principals?: string[];
  };

  /**
   * <p>A transform operation that casts a column to a different type.</p>
   */
  export type CastColumnTypeOperationType = {
    /**
     * <p>Column name.</p>
     */
    ColumnName: string;

    SubType?: ColumnDataSubTypeType;

    /**
     * <p>When casting a column from string to datetime type, you can supply a string in a
     * format supported by Amazon QuickSight to denote the source data format.</p>
     */
    Format?: string;

    NewColumnType: ColumnDataTypeType;
  };

  export type TimeGranularityType = {};

  /**
   * <p>Information about the format for a source file or files.</p>
   */
  export type UploadSettingsType = {
    /**
     * <p>Whether the file has a header row, or the files each have a header row.</p>
     */
    ContainsHeader?: boolean;

    TextQualifier?: TextQualifierType;

    Format?: FileFormatType;

    /**
     * <p>A row number to start reading data from.</p>
     */
    StartFromRow?: number;

    /**
     * <p>The delimiter between values in the file.</p>
     */
    Delimiter?: string;
  };

  /**
   * <p>A transform operation that creates calculated columns. Columns created in one such
   * operation form a lexical closure.</p>
   */
  export type CreateColumnsOperationType = {
    /**
     * <p>Calculated columns to create.</p>
     */
    Columns: CalculatedColumnType[];
  };

  /**
   * <p>Properties associated with the columns participating in a join.</p>
   */
  export type JoinKeyPropertiesType = {
    /**
     * <p>A value that indicates that a row in a table is uniquely identified by the columns in
     * a join key. This is used by Amazon QuickSight to optimize query performance.</p>
     */
    UniqueKey?: boolean;
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

  /**
   * <p>The default values of a decimal parameter.</p>
   */
  export type DecimalDatasetParameterDefaultValuesType = {
    /**
     * <p>A list of static default values for a given decimal parameter.</p>
     */
    StaticValues?: number[];
  };

  export type StatusType = {};

  export type PhysicalTableMapType = {};

  /**
   * <p>A transform operation that tags a column with additional information.</p>
   */
  export type TagColumnOperationType = {
    /**
     * <p>The column that this operation acts on.</p>
     */
    ColumnName: string;

    /**
     * <p>The dataset column tag, currently only used for geospatial type tagging.</p>
     * <note>
     * <p>This is not tags for the Amazon Web Services tagging feature.</p>
     * </note>
     */
    Tags: ColumnTagType[];
  };

  /**
   * <p>The refresh configuration of a dataset.</p>
   */
  export type RefreshConfigurationType = {
    IncrementalRefresh: IncrementalRefreshType;
  };

  /**
   * <p>The lookback window setup of an incremental refresh configuration.</p>
   */
  export type LookbackWindowType = {
    /**
     * <p>The name of the lookback window column.</p>
     */
    ColumnName: string;

    SizeUnit: LookbackWindowSizeUnitType;

    /**
     * <p>The lookback window column size.</p>
     */
    Size: number;
  };

  /**
   * <p>A physical table type for relational data sources.</p>
   */
  export type RelationalTableType = {
    /**
     * <p>The Amazon Resource Name (ARN) for the data source.</p>
     */
    DataSourceArn: string;

    /**
     * <p>The column schema of the table.</p>
     */
    InputColumns?: InputColumnType[];

    /**
     * <p>The schema name. This name applies to certain relational database engines.</p>
     */
    Schema?: string;

    /**
     * <p>The catalog associated with a table.</p>
     */
    Catalog?: string;

    /**
     * <p>The name of the relational table.</p>
     */
    Name: string;
  };

  export type DatasetParameterValueTypeType = {};

  export type PerformanceConfigurationType = {
    UniqueKeys?: UniqueKeyType[];
  };

  /**
   * <p>A calculated column for a dataset.</p>
   */
  export type CalculatedColumnType = {
    /**
     * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
     * of a calculated column matches that of an existing calculated column, Amazon QuickSight
     * preserves the existing calculated column.</p>
     */
    ColumnId: string;

    /**
     * <p>Column name.</p>
     */
    ColumnName: string;

    /**
     * <p>An expression that defines the calculated column.</p>
     */
    Expression: string;
  };

  /**
   * <p>The refresh properties of a dataset.</p>
   */
  export type DataSetRefreshPropertiesType = {
    RefreshConfiguration?: RefreshConfigurationType;
  };

  /**
   * <p>A physical table type for an S3 data source.</p>
   */
  export type S3SourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) for the data source.</p>
     */
    DataSourceArn: string;

    /**
     * <p>A physical table type for an S3 data source.</p>
     * <note>
     * <p>For files that aren't JSON, only <code>STRING</code> data types are supported in input columns.</p>
     * </note>
     */
    InputColumns: InputColumnType[];

    UploadSettings?: any;
  };

  /**
   * <p>A FieldFolder element is a folder that contains fields and nested subfolders.</p>
   */
  export type FieldFolderType = {
    /**
     * <p>The description for a field folder.</p>
     */
    Description?: string;

    /**
     * <p>A folder has a list of columns. A column can only be in one folder.</p>
     */
    Columns?: string[];
  };

  /**
   * <p>Metadata for a column that is used as the input of a transform operation.</p>
   */
  export type InputColumnType = {
    Type: InputColumnDataTypeType;

    SubType?: ColumnDataSubTypeType;

    /**
     * <p>The name of this column in the underlying data source.</p>
     */
    Name: string;
  };

  export type LogicalTableMapType = {};

  /**
   * <p>The incremental refresh configuration for a dataset.</p>
   */
  export type IncrementalRefreshType = {
    LookbackWindow: LookbackWindowType;
  };

  /**
   * <p>Output column.</p>
   */
  export type OutputColumnType = {
    Type?: ColumnDataTypeType;

    /**
     * <p>A description for a column.</p>
     */
    Description?: string;

    SubType?: ColumnDataSubTypeType;

    /**
     * <p>The display name of the column..</p>
     */
    Name?: string;
  };

  /**
   * <p>A view of a data source that contains information about the shape of the data in the
   * underlying source. This is a variant type structure. For this structure to be valid,
   * only one of the attributes can be non-null.</p>
   */
  export type PhysicalTableType = {
    RelationalTable?: RelationalTableType;

    CustomSql?: CustomSqlType;

    S3Source?: S3SourceType;
  };

  export type ColumnDataSubTypeType = {};

  /**
   * <p>The default values of a date time parameter.</p>
   */
  export type DateTimeDatasetParameterDefaultValuesType = {
    /**
     * <p>A list of static default values for a given date time parameter.</p>
     */
    StaticValues?: string[];
  };

  /**
   * <p>Information about the source of a logical table. This is a variant type structure. For
   * this structure to be valid, only one of the attributes can be non-null.</p>
   */
  export type LogicalTableSourceType = {
    /**
     * <p>Physical table ID.</p>
     */
    PhysicalTableId?: string;

    JoinInstruction?: JoinInstructionType;

    /**
     * <p>The Amazon Resource Number (ARN) of the parent dataset.</p>
     */
    DataSetArn?: string;
  };

  /**
   * <p>A tag for a column in a
   * <code>
   * <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html">TagColumnOperation</a>
   * </code>
   * structure. This is a
   * variant type structure. For this structure to be valid, only one of the attributes can
   * be non-null.</p>
   */
  export type ColumnTagType = {
    ColumnGeographicRole?: GeoSpatialDataRoleType;

    ColumnDescription?: ColumnDescriptionType;
  };

  export type TextQualifierType = {};

  /**
   * <p>Metadata that contains a description for a column.</p>
   */
  export type ColumnDescriptionType = {
    /**
     * <p>The text of a description for a column.</p>
     */
    Text?: string;
  };

  export type DataSetImportModeType = {};

  /**
   * <p>Information about a dataset that contains permissions for row-level security (RLS).
   * The permissions dataset maps fields to users or groups. For more information, see
   * <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon QuickSight User
   * Guide</i>.</p>
   * <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
   * not supported for new RLS datasets.</p>
   */
  export type RowLevelPermissionDataSetType = {
    Status?: StatusType;

    FormatVersion?: RowLevelPermissionFormatVersionType;

    /**
     * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
     */
    Arn: string;

    /**
     * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
     */
    Namespace?: string;

    PermissionPolicy: RowLevelPermissionPolicyType;
  };

  export type ColumnTagNameType = {};

  /**
   * <p>A transform operation that renames a column.</p>
   */
  export type RenameColumnOperationType = {
    /**
     * <p>The new name for the column.</p>
     */
    NewColumnName: string;

    /**
     * <p>The name of the column to be renamed.</p>
     */
    ColumnName: string;
  };

  export type FieldFolderMapType = {};

  export type RowLevelPermissionFormatVersionType = {};

  /**
   * <p>A decimal parameter for a dataset.</p>
   */
  export type DecimalDatasetParameterType = {
    ValueType: DatasetParameterValueTypeType;

    DefaultValues?: DecimalDatasetParameterDefaultValuesType;

    /**
     * <p>An identifier for the decimal parameter created in the dataset.</p>
     */
    Id: string;

    /**
     * <p>The name of the decimal parameter that is created in the dataset.</p>
     */
    Name: string;
  };

  export type ColumnDataTypeType = {};

  /**
   * <p>A date time parameter for a dataset.</p>
   */
  export type DateTimeDatasetParameterType = {
    ValueType: DatasetParameterValueTypeType;

    TimeGranularity?: TimeGranularityType;

    DefaultValues?: DateTimeDatasetParameterDefaultValuesType;

    /**
     * <p>An identifier for the parameter that is created in the dataset.</p>
     */
    Id: string;

    /**
     * <p>The name of the date time parameter that is created in the dataset.</p>
     */
    Name: string;
  };

  /**
   * <p>The instructions associated with a join. </p>
   */
  export type JoinInstructionType = {
    /**
     * <p>The join instructions provided in the <code>ON</code> clause of a join.</p>
     */
    OnClause: string;

    Type: JoinTypeType;

    LeftJoinKeyProperties?: JoinKeyPropertiesType;

    /**
     * <p>The operand on the left side of a join.</p>
     */
    LeftOperand: string;

    /**
     * <p>The operand on the right side of a join.</p>
     */
    RightOperand: string;

    RightJoinKeyProperties?: JoinKeyPropertiesType;
  };

  export type JoinTypeType = {};

  /**
   * <p>The configuration of tags on a dataset to set row-level security. </p>
   */
  export type RowLevelPermissionTagConfigurationType = {
    Status?: StatusType;

    /**
     * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
     */
    TagRules: RowLevelPermissionTagRuleType[];

    /**
     * <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
     */
    TagRuleConfigurations?: any[];
  };

  /**
   * <p>A data transformation on a logical table. This is a variant type structure. For this
   * structure to be valid, only one of the attributes can be non-null.</p>
   */
  export type TransformOperationType = {
    TagColumnOperation?: TagColumnOperationType;

    RenameColumnOperation?: RenameColumnOperationType;

    UntagColumnOperation?: UntagColumnOperationType;

    OverrideDatasetParameterOperation?: OverrideDatasetParameterOperationType;

    FilterOperation?: FilterOperationType;

    CastColumnTypeOperation?: CastColumnTypeOperationType;

    CreateColumnsOperation?: CreateColumnsOperationType;

    ProjectOperation?: ProjectOperationType;
  };

  export type InputColumnDataTypeType = {};

  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   */
  export type GeoSpatialColumnGroupType = {
    /**
     * <p>Columns in this hierarchy.</p>
     */
    Columns: string[];

    CountryCode?: GeoSpatialCountryCodeType;

    /**
     * <p>A display name for the hierarchy.</p>
     */
    Name: string;
  };

  export type GeoSpatialCountryCodeType = {};

  /**
   * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
   */
  export type OverrideDatasetParameterOperationType = {
    NewDefaultValues?: NewDefaultValuesType;

    /**
     * <p>The name of the parameter to be overridden with different values.</p>
     */
    ParameterName: string;

    /**
     * <p>The new name for the parameter.</p>
     */
    NewParameterName?: string;
  };

  export type UniqueKeyType = {
    ColumnNames: string[];
  };

  export type GeoSpatialDataRoleType = {};

  /**
   * <p>The configuration that overrides the existing default values for a dataset parameter that is inherited from another dataset.</p>
   */
  export type NewDefaultValuesType = {
    /**
     * <p>A list of static default values for a given decimal parameter.</p>
     */
    DecimalStaticValues?: number[];

    /**
     * <p>A list of static default values for a given integer parameter.</p>
     */
    IntegerStaticValues?: number[];

    /**
     * <p>A list of static default values for a given string parameter.</p>
     */
    StringStaticValues?: string[];

    /**
     * <p>A list of static default values for a given date time parameter.</p>
     */
    DateTimeStaticValues?: string[];
  };

  /**
   * <p>A dataset parameter.</p>
   */
  export type DatasetParameterType = {
    IntegerDatasetParameter?: IntegerDatasetParameterType;

    DateTimeDatasetParameter?: DateTimeDatasetParameterType;

    DecimalDatasetParameter?: DecimalDatasetParameterType;

    StringDatasetParameter?: StringDatasetParameterType;
  };

  /**
   * <p>The default values of an integer parameter.</p>
   */
  export type IntegerDatasetParameterDefaultValuesType = {
    /**
     * <p>A list of static default values for a given integer parameter.</p>
     */
    StaticValues?: number[];
  };

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  export type DataSetUsageConfigurationType = {
    /**
     * <p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>
     */
    DisableUseAsImportedSource?: boolean;

    /**
     * <p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>
     */
    DisableUseAsDirectQuerySource?: boolean;
  };

  /**
   * <p>The default values of a string parameter.</p>
   */
  export type StringDatasetParameterDefaultValuesType = {
    /**
     * <p>A list of static default values for a given string parameter.</p>
     */
    StaticValues?: string[];
  };

  export type LookbackWindowSizeUnitType = {};

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

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
   * a variant type structure. For this structure to be valid, only one of the attributes can
   * be non-null.</p>
   */
  export type ColumnGroupType = {
    GeoSpatialColumnGroup?: GeoSpatialColumnGroupType;
  };

  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   */
  export type CustomSqlType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the data source.</p>
     */
    DataSourceArn: string;

    /**
     * <p>The SQL query.</p>
     */
    SqlQuery: string;

    /**
     * <p>The column schema from the SQL query result set.</p>
     */
    Columns?: InputColumnType[];

    /**
     * <p>A display name for the SQL query result.</p>
     */
    Name: string;
  };

  /**
   * <p>A transform operation that projects columns. Operations that come after a projection
   * can only refer to projected columns.</p>
   */
  export type ProjectOperationType = {
    /**
     * <p>Projected columns.</p>
     */
    ProjectedColumns: string[];
  };

  /**
   * Definition of the AWS::QuickSight::DataSet Resource Type.
   */
  export type DataSetResourceType = {
    PhysicalTableMap?: PhysicalTableMapType;

    /**
     * <p>The time that this dataset was created.</p>
     * Read-only property
     */
    CreatedTime?: string;

    FieldFolders?: FieldFolderMapType;

    /**
     * <p>The last time that this dataset was updated.</p>
     * Read-only property
     */
    LastUpdatedTime?: string;

    /**
     * Create-only property
     */
    DataSetId?: string;

    /**
     * <p>When you create the dataset, Amazon QuickSight adds the dataset to these folders.</p>
     */
    FolderArns?: string[];

    /**
     * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
     * imported into SPICE.</p>
     * Default: 0
     * Read-only property
     */
    ConsumedSpiceCapacityInBytes?: number;

    PerformanceConfiguration?: PerformanceConfigurationType;

    RowLevelPermissionDataSet?: RowLevelPermissionDataSetType;

    DataSetRefreshProperties?: DataSetRefreshPropertiesType;

    RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfigurationType;

    IngestionWaitPolicy?: IngestionWaitPolicyType;

    /**
     * <p>A set of one or more definitions of a <code>
     * <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
     * </code>.</p>
     */
    ColumnLevelPermissionRules?: ColumnLevelPermissionRuleType[];

    /**
     * <p>The display name for the dataset.</p>
     */
    Name?: string;

    /**
     * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
     */
    ColumnGroups?: ColumnGroupType[];

    ImportMode?: DataSetImportModeType;

    /**
     * <p>The parameter declarations of the dataset.</p>
     */
    DatasetParameters?: DatasetParameterType[];

    LogicalTableMap?: LogicalTableMapType;

    /**
     * Create-only property
     */
    AwsAccountId?: string;

    DataSetUsageConfiguration?: DataSetUsageConfigurationType;

    /**
     * <p>A list of resource permissions on the dataset.</p>
     */
    Permissions?: ResourcePermissionType[];

    /**
     * <p>The list of columns after all transforms. These columns are available in templates,
     * analyses, and dashboards.</p>
     * Read-only property
     */
    OutputColumns?: OutputColumnType[];

    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
     */
    Tags?: TagType[];
  };
}
