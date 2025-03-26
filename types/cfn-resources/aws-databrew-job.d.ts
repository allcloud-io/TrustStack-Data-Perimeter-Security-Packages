/**
 * TypeScript definitions for AWS::DataBrew::Job
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataBrew::Job.
 */
export namespace AWS_DataBrew_Job {
  /**
   * S3 Output location
   */
  export type S3LocationType = {
    Bucket: string;

    Key?: string;

    BucketOwner?: string;
  };

  /**
   * Output Csv options
   */
  export type CsvOutputOptionsType = {
    Delimiter?: string;
  };

  /**
   * Format options for job Output
   */
  export type OutputFormatOptionsType = {
    Csv?: CsvOutputOptionsType;
  };

  /**
   * Output location
   */
  export type OutputLocationType = {
    Bucket: string;

    Key?: string;

    BucketOwner?: string;
  };

  export type OutputType = {
    CompressionFormat?: string;

    Format?: string;

    FormatOptions?: OutputFormatOptionsType;

    PartitionColumns?: string[];

    Location: S3LocationType;

    Overwrite?: boolean;

    MaxOutputFiles?: number;
  };

  export type DataCatalogOutputType = {
    CatalogId?: string;

    DatabaseName: string;

    TableName: string;

    S3Options?: S3TableOutputOptionsType;

    DatabaseOptions?: DatabaseTableOutputOptionsType;

    Overwrite?: boolean;
  };

  export type S3TableOutputOptionsType = {
    Location: S3LocationType;
  };

  export type DatabaseTableOutputOptionsType = {
    TempDirectory?: S3LocationType;

    TableName: string;
  };

  export type DatabaseOutputType = {
    /**
     * Glue connection name
     */
    GlueConnectionName: string;

    /**
     * Database table name
     */
    DatabaseOutputMode?: string;

    DatabaseOptions: DatabaseTableOutputOptionsType;
  };

  export type RecipeType = {
    /**
     * Recipe name
     */
    Name: string;

    /**
     * Recipe version
     */
    Version?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Sample configuration mode for profile jobs.
   */
  export type SampleModeType = {};

  /**
   * Sample configuration size for profile jobs.
   */
  export type JobSizeType = {};

  /**
   * Job Sample
   */
  export type JobSampleType = {
    Mode?: SampleModeType;

    Size?: JobSizeType;
  };

  export type ProfileConfigurationType = {
    DatasetStatisticsConfiguration?: StatisticsConfigurationType;

    ProfileColumns?: ColumnSelectorType[];

    ColumnStatisticsConfigurations?: ColumnStatisticsConfigurationType[];

    EntityDetectorConfiguration?: EntityDetectorConfigurationType;
  };

  export type EntityDetectorConfigurationType = {
    EntityTypes: string[];

    AllowedStatistics?: AllowedStatisticsType;
  };

  export type AllowedStatisticsType = {
    Statistics: StatisticType[];
  };

  export type ColumnStatisticsConfigurationType = {
    Selectors?: ColumnSelectorType[];

    Statistics: StatisticsConfigurationType;
  };

  export type StatisticsConfigurationType = {
    IncludedStatistics?: StatisticType[];

    Overrides?: StatisticOverrideType[];
  };

  export type ColumnSelectorType = {
    Regex?: string;

    Name?: string;
  };

  export type StatisticType = {};

  export type StatisticOverrideType = {
    Statistic: StatisticType;

    Parameters: ParameterMapType;
  };

  export type ParameterMapType = {};

  export type ValidationModeType = {};

  /**
   * Configuration to attach Rulesets to the job
   */
  export type ValidationConfigurationType = {
    /**
     * Arn of the Ruleset
     */
    RulesetArn: string;

    ValidationMode?: ValidationModeType;
  };

  /**
   * Resource schema for AWS::DataBrew::Job.
   */
  export type JobResourceType = {
    /**
     * Dataset name
     */
    DatasetName?: string;

    /**
     * Encryption Key Arn
     */
    EncryptionKeyArn?: string;

    /**
     * Encryption mode
     */
    EncryptionMode?: string;

    /**
     * Job name
     * Create-only property
     */
    Name: string;

    /**
     * Job type
     * Create-only property
     */
    Type: string;

    /**
     * Log subscription
     */
    LogSubscription?: string;

    /**
     * Max capacity
     */
    MaxCapacity?: number;

    /**
     * Max retries
     */
    MaxRetries?: number;

    Outputs?: OutputType[];

    DataCatalogOutputs?: DataCatalogOutputType[];

    DatabaseOutputs?: DatabaseOutputType[];

    /**
     * Output location
     */
    OutputLocation?: OutputLocationType;

    /**
     * Project name
     */
    ProjectName?: string;

    Recipe?: RecipeType;

    /**
     * Role arn
     */
    RoleArn: string;

    /**
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * Timeout
     */
    Timeout?: number;

    /**
     * Job Sample
     */
    JobSample?: JobSampleType;

    /**
     * Profile Job configuration
     */
    ProfileConfiguration?: ProfileConfigurationType;

    /**
     * Data quality rules configuration
     */
    ValidationConfigurations?: ValidationConfigurationType[];
  };
}
