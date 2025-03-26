/**
 * TypeScript definitions for AWS::DataZone::DataSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * A data source is used to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone.
 */
export namespace AWS_DataZone_DataSource {
  export type AccountIdType = {};

  /**
   * The data access role included in the configuration details of the AWS Glue data source.
   */
  export type DataAccessRoleType = {};

  /**
   * Specifies the configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration or sageMakerRunConfiguration.
   */
  export type DataSourceConfigurationInputType = {};

  /**
   * The status of the data source.
   */
  export type DataSourceStatusType = {};

  /**
   * Specifies whether the data source is enabled.
   */
  export type EnableSettingType = {};

  /**
   * The search filter expression.
   */
  export type FilterExpressionType = {
    Type: FilterExpressionTypeType;

    Expression: string;
  };

  /**
   * The search filter expression type.
   */
  export type FilterExpressionTypeType = {};

  /**
   * The name of the metadata form.
   */
  export type FormNameType = {};

  /**
   * The details of a metadata form.
   */
  export type FormInputType = {
    /**
     * The name of the metadata form.
     */
    FormName: FormNameType;

    /**
     * The ID of the metadata form type.
     */
    TypeIdentifier?: string;

    /**
     * The revision of the metadata form type.
     */
    TypeRevision?: TypeRevisionType;

    /**
     * The content of the metadata form.
     */
    Content?: string;
  };

  export type GlueRunConfigurationInputType = {
    /**
     * Specifies whether to automatically import data quality metrics as part of the data source run.
     */
    AutoImportDataQualityResult?: boolean;

    /**
     * The catalog name in the AWS Glue run configuration.
     */
    CatalogName?: string;

    /**
     * The data access role included in the configuration details of the AWS Glue data source.
     */
    DataAccessRole?: DataAccessRoleType;

    /**
     * The relational filter configurations included in the configuration details of the AWS Glue data source.
     */
    RelationalFilterConfigurations: RelationalFilterConfigurationType[];
  };

  /**
   * The recommendation to be updated as part of the UpdateDataSource action.
   */
  export type RecommendationConfigurationType = {
    /**
     * Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.
     */
    EnableBusinessNameGeneration?: boolean;
  };

  /**
   * The name of an Amazon Redshift cluster.
   */
  export type RedshiftClusterStorageType = {
    /**
     * The name of an Amazon Redshift cluster.
     */
    ClusterName: string;
  };

  /**
   * The ARN of a secret manager for an Amazon Redshift cluster.
   */
  export type RedshiftCredentialConfigurationType = {
    /**
     * The ARN of a secret manager for an Amazon Redshift cluster.
     */
    SecretManagerArn: string;
  };

  /**
   * The configuration details of the Amazon Redshift data source.
   */
  export type RedshiftRunConfigurationInputType = {
    /**
     * The data access role included in the configuration details of the Amazon Redshift data source.
     */
    DataAccessRole?: DataAccessRoleType;

    RelationalFilterConfigurations: RelationalFilterConfigurationsType;

    /**
     * The details of the credentials required to access an Amazon Redshift cluster.
     */
    RedshiftCredentialConfiguration?: RedshiftCredentialConfigurationType;

    /**
     * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
     */
    RedshiftStorage?: RedshiftStorageType;
  };

  /**
   * The details of the Amazon Redshift Serverless workgroup storage.
   */
  export type RedshiftServerlessStorageType = {
    /**
     * The name of the Amazon Redshift Serverless workgroup.
     */
    WorkgroupName: string;
  };

  /**
   * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
   */
  export type RedshiftStorageType = {};

  export type RegionType = {};

  /**
   * The relational filter configuration for the data source.
   */
  export type RelationalFilterConfigurationType = {
    /**
     * The database name specified in the relational filter configuration for the data source.
     */
    DatabaseName: string;

    /**
     * The schema name specified in the relational filter configuration for the data source.
     */
    SchemaName?: string;

    /**
     * The filter expressions specified in the relational filter configuration for the data source.
     */
    FilterExpressions?: FilterExpressionType[];
  };

  /**
   * The relational filter configurations included in the configuration details of the Amazon Redshift data source.
   */
  export type RelationalFilterConfigurationsType = {};

  /**
   * The configuration details of the Amazon SageMaker data source.
   */
  export type SageMakerRunConfigurationInputType = {
    /**
     * The tracking assets of the Amazon SageMaker run.
     */
    TrackingAssets: TrackingAssetsType;
  };

  /**
   * The schedule of the data source runs.
   */
  export type ScheduleConfigurationType = {
    /**
     * The timezone of the data source run.
     */
    Timezone?: TimezoneType;

    /**
     * The schedule of the data source runs.
     */
    Schedule?: string;
  };

  export type TimezoneType = {};

  /**
   * The tracking assets of the Amazon SageMaker run.
   */
  export type TrackingAssetsType = {};

  /**
   * The revision of the metadata form type.
   */
  export type TypeRevisionType = {};

  /**
   * A data source is used to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone.
   */
  export type DataSourceResourceType = {
    /**
     * The metadata forms that are to be attached to the assets that this data source works with.
     */
    AssetFormsInput?: FormInputType[];

    /**
     * The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run
     * Read-only property
     */
    ConnectionId?: string;

    /**
     * The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run
     * Create-only property
     */
    ConnectionIdentifier?: string;

    /**
     * The timestamp of when the data source was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The description of the data source.
     */
    Description?: string;

    /**
     * The ID of the Amazon DataZone domain where the data source is created.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The ID of the Amazon DataZone domain where the data source is created.
     * Create-only property
     */
    DomainIdentifier: string;

    /**
     * Specifies whether the data source is enabled.
     */
    EnableSetting?: EnableSettingType;

    /**
     * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
     * Read-only property
     */
    EnvironmentId?: string;

    /**
     * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
     * Create-only property
     */
    EnvironmentIdentifier?: string;

    /**
     * The unique identifier of the data source.
     * Read-only property
     */
    Id?: string;

    /**
     * Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.
     */
    Configuration?: DataSourceConfigurationInputType;

    /**
     * The number of assets created by the data source during its last run.
     * Read-only property
     */
    LastRunAssetCount?: number;

    /**
     * The timestamp that specifies when the data source was last run.
     * Read-only property
     */
    LastRunAt?: string;

    /**
     * The status of the last run of this data source.
     * Read-only property
     */
    LastRunStatus?: string;

    /**
     * The name of the data source.
     */
    Name: string;

    /**
     * The ID of the Amazon DataZone project to which the data source is added.
     * Read-only property
     */
    ProjectId?: string;

    /**
     * The identifier of the Amazon DataZone project in which you want to add the data source.
     * Create-only property
     */
    ProjectIdentifier: string;

    /**
     * Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
     */
    PublishOnImport?: boolean;

    /**
     * Specifies whether the business name generation is to be enabled for this data source.
     */
    Recommendation?: RecommendationConfigurationType;

    /**
     * The schedule of the data source runs.
     */
    Schedule?: ScheduleConfigurationType;

    /**
     * The status of the data source.
     * Read-only property
     */
    Status?: DataSourceStatusType;

    /**
     * The type of the data source.
     * Create-only property
     */
    Type: string;

    /**
     * The timestamp of when this data source was updated.
     * Read-only property
     */
    UpdatedAt?: string;
  };
}
