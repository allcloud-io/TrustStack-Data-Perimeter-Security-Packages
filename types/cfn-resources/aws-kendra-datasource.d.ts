/**
 * TypeScript definitions for AWS::Kendra::DataSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Kendra DataSource
 */
export namespace AWS_Kendra_DataSource {
  /**
   * ID of Index
   */
  export type IndexIdType = {};

  /**
   * A label for tagging Kendra resources
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * List of tags
   */
  export type TagListType = {};

  export type DataSourceInclusionsExclusionsStringsType = {};

  export type S3PathType = {
    Bucket: S3BucketNameType;

    Key: S3ObjectKeyType;
  };

  export type S3BucketNameType = {};

  export type S3ObjectKeyType = {};

  export type DocumentsMetadataConfigurationType = {
    S3Prefix?: S3ObjectKeyType;
  };

  export type AccessControlListConfigurationType = {
    KeyPath?: S3ObjectKeyType;
  };

  /**
   * S3 data source configuration
   */
  export type S3DataSourceConfigurationType = {
    BucketName: S3BucketNameType;

    InclusionPrefixes?: DataSourceInclusionsExclusionsStringsType;

    InclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    ExclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    DocumentsMetadataConfiguration?: DocumentsMetadataConfigurationType;

    AccessControlListConfiguration?: AccessControlListConfigurationType;
  };

  export type UrlType = {};

  export type SecretArnType = {};

  export type DataSourceVpcConfigurationType = {
    SubnetIds: string[];

    SecurityGroupIds: string[];
  };

  export type DataSourceFieldNameType = {};

  export type DataSourceToIndexFieldMappingType = {
    DataSourceFieldName: DataSourceFieldNameType;

    DateFieldFormat?: DateFieldFormatType;

    IndexFieldName: IndexFieldNameType;
  };

  export type DateFieldFormatType = {};

  export type IndexFieldNameType = {};

  export type DataSourceToIndexFieldMappingListType = {};

  export type DisableLocalGroupsType = {};

  /**
   * SharePoint configuration
   */
  export type SharePointConfigurationType = {
    SharePointVersion: string;

    Urls: UrlType[];

    SecretArn: SecretArnType;

    CrawlAttachments?: boolean;

    UseChangeLog?: boolean;

    InclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    ExclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    VpcConfiguration?: DataSourceVpcConfigurationType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;

    DocumentTitleFieldName?: DataSourceFieldNameType;

    DisableLocalGroups?: DisableLocalGroupsType;

    SslCertificateS3Path?: S3PathType;
  };

  export type SalesforceConfigurationType = {
    ServerUrl: UrlType;

    SecretArn: SecretArnType;

    StandardObjectConfigurations?: SalesforceStandardObjectConfigurationListType;

    KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfigurationType;

    ChatterFeedConfiguration?: SalesforceChatterFeedConfigurationType;

    CrawlAttachments?: boolean;

    StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfigurationType;

    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStringsType;

    ExcludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStringsType;
  };

  export type SalesforceStandardObjectConfigurationListType = {};

  export type SalesforceStandardObjectConfigurationType = {
    Name: SalesforceStandardObjectNameType;

    DocumentDataFieldName: DataSourceFieldNameType;

    DocumentTitleFieldName?: DataSourceFieldNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;
  };

  export type SalesforceStandardObjectNameType = {};

  export type SalesforceKnowledgeArticleConfigurationType = {
    IncludedStates: SalesforceKnowledgeArticleStateListType;

    StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfigurationType;

    CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfigurationListType;
  };

  export type SalesforceKnowledgeArticleStateListType = {};

  export type SalesforceKnowledgeArticleStateType = {};

  export type SalesforceStandardKnowledgeArticleTypeConfigurationType = {
    DocumentDataFieldName: DataSourceFieldNameType;

    DocumentTitleFieldName?: DataSourceFieldNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;
  };

  export type SalesforceCustomKnowledgeArticleTypeConfigurationListType = {};

  export type SalesforceCustomKnowledgeArticleTypeConfigurationType = {
    Name: SalesforceCustomKnowledgeArticleTypeNameType;

    DocumentDataFieldName: DataSourceFieldNameType;

    DocumentTitleFieldName?: DataSourceFieldNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;
  };

  export type SalesforceCustomKnowledgeArticleTypeNameType = {};

  export type SalesforceChatterFeedConfigurationType = {
    DocumentDataFieldName: DataSourceFieldNameType;

    DocumentTitleFieldName?: DataSourceFieldNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;

    IncludeFilterTypes?: SalesforceChatterFeedIncludeFilterTypesType;
  };

  export type SalesforceChatterFeedIncludeFilterTypesType = {};

  export type SalesforceChatterFeedIncludeFilterTypeType = {};

  export type SalesforceStandardObjectAttachmentConfigurationType = {
    DocumentTitleFieldName?: DataSourceFieldNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;
  };

  export type DatabaseConfigurationType = {
    DatabaseEngineType: DatabaseEngineTypeType;

    ConnectionConfiguration: ConnectionConfigurationType;

    VpcConfiguration?: DataSourceVpcConfigurationType;

    ColumnConfiguration: ColumnConfigurationType;

    AclConfiguration?: AclConfigurationType;

    SqlConfiguration?: SqlConfigurationType;
  };

  export type DatabaseEngineTypeType = {};

  export type ConnectionConfigurationType = {
    DatabaseHost: DatabaseHostType;

    DatabasePort: DatabasePortType;

    DatabaseName: DatabaseNameType;

    TableName: TableNameType;

    SecretArn: SecretArnType;
  };

  export type DatabaseHostType = {};

  export type DatabasePortType = {};

  export type DatabaseNameType = {};

  export type TableNameType = {};

  export type ColumnConfigurationType = {
    DocumentIdColumnName: ColumnNameType;

    DocumentDataColumnName: ColumnNameType;

    DocumentTitleColumnName?: ColumnNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;

    ChangeDetectingColumns: ChangeDetectingColumnsType;
  };

  export type ChangeDetectingColumnsType = {};

  export type ColumnNameType = {};

  export type SqlConfigurationType = {
    QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOptionType;
  };

  export type QueryIdentifiersEnclosingOptionType = {};

  export type AclConfigurationType = {
    AllowedGroupsColumnName: ColumnNameType;
  };

  export type OneDriveConfigurationType = {
    TenantDomain: TenantDomainType;

    SecretArn: SecretArnType;

    OneDriveUsers: OneDriveUsersType;

    InclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    ExclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;

    DisableLocalGroups?: DisableLocalGroupsType;
  };

  export type TenantDomainType = {};

  export type OneDriveUsersType = {
    OneDriveUserList?: OneDriveUserListType;

    OneDriveUserS3Path?: S3PathType;
  };

  export type OneDriveUserListType = {};

  export type OneDriveUserType = {};

  export type ServiceNowConfigurationType = {
    HostUrl: ServiceNowHostUrlType;

    SecretArn: SecretArnType;

    ServiceNowBuildVersion: ServiceNowBuildVersionTypeType;

    AuthenticationType?: ServiceNowAuthenticationTypeType;

    KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfigurationType;

    ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfigurationType;
  };

  export type ServiceNowBuildVersionTypeType = {};

  export type ServiceNowAuthenticationTypeType = {};

  export type ServiceNowServiceCatalogConfigurationType = {
    CrawlAttachments?: boolean;

    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStringsType;

    ExcludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStringsType;

    DocumentDataFieldName: DataSourceFieldNameType;

    DocumentTitleFieldName?: DataSourceFieldNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;
  };

  export type ServiceNowHostUrlType = {};

  export type ServiceNowKnowledgeArticleConfigurationType = {
    CrawlAttachments?: boolean;

    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStringsType;

    ExcludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStringsType;

    DocumentDataFieldName: DataSourceFieldNameType;

    DocumentTitleFieldName?: DataSourceFieldNameType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;

    FilterQuery?: ServiceNowKnowledgeArticleFilterQueryType;
  };

  export type ServiceNowKnowledgeArticleFilterQueryType = {};

  export type ConfluenceConfigurationType = {
    ServerUrl: UrlType;

    SecretArn: SecretArnType;

    Version: ConfluenceVersionType;

    SpaceConfiguration?: ConfluenceSpaceConfigurationType;

    PageConfiguration?: ConfluencePageConfigurationType;

    BlogConfiguration?: ConfluenceBlogConfigurationType;

    AttachmentConfiguration?: ConfluenceAttachmentConfigurationType;

    VpcConfiguration?: DataSourceVpcConfigurationType;

    InclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    ExclusionPatterns?: DataSourceInclusionsExclusionsStringsType;
  };

  export type ConfluenceVersionType = {};

  export type ConfluenceSpaceConfigurationType = {
    CrawlPersonalSpaces?: boolean;

    CrawlArchivedSpaces?: boolean;

    IncludeSpaces?: ConfluenceSpaceListType;

    ExcludeSpaces?: ConfluenceSpaceListType;

    SpaceFieldMappings?: ConfluenceSpaceFieldMappingsListType;
  };

  export type ConfluenceSpaceFieldMappingsListType = {};

  export type ConfluenceSpaceToIndexFieldMappingType = {
    DataSourceFieldName: ConfluenceSpaceFieldNameType;

    DateFieldFormat?: DateFieldFormatType;

    IndexFieldName: IndexFieldNameType;
  };

  export type ConfluenceSpaceFieldNameType = {};

  export type ConfluenceSpaceListType = {};

  export type ConfluenceSpaceIdentifierType = {};

  export type ConfluencePageConfigurationType = {
    PageFieldMappings?: ConfluencePageFieldMappingsListType;
  };

  export type ConfluencePageFieldMappingsListType = {};

  export type ConfluencePageToIndexFieldMappingType = {
    DataSourceFieldName: ConfluencePageFieldNameType;

    DateFieldFormat?: DateFieldFormatType;

    IndexFieldName: IndexFieldNameType;
  };

  export type ConfluencePageFieldNameType = {};

  export type ConfluenceBlogConfigurationType = {
    BlogFieldMappings?: ConfluenceBlogFieldMappingsListType;
  };

  export type ConfluenceBlogFieldMappingsListType = {};

  export type ConfluenceBlogToIndexFieldMappingType = {
    DataSourceFieldName: ConfluenceBlogFieldNameType;

    DateFieldFormat?: DateFieldFormatType;

    IndexFieldName: IndexFieldNameType;
  };

  export type ConfluenceBlogFieldNameType = {};

  export type ConfluenceAttachmentConfigurationType = {
    CrawlAttachments?: boolean;

    AttachmentFieldMappings?: ConfluenceAttachmentFieldMappingsListType;
  };

  export type ConfluenceAttachmentFieldMappingsListType = {};

  export type ConfluenceAttachmentToIndexFieldMappingType = {
    DataSourceFieldName: ConfluenceAttachmentFieldNameType;

    DateFieldFormat?: DateFieldFormatType;

    IndexFieldName: IndexFieldNameType;
  };

  export type GoogleDriveConfigurationType = {
    SecretArn: SecretArnType;

    InclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    ExclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;

    ExcludeMimeTypes?: ExcludeMimeTypesListType;

    ExcludeUserAccounts?: ExcludeUserAccountsListType;

    ExcludeSharedDrives?: ExcludeSharedDrivesListType;
  };

  export type ExcludeMimeTypesListType = {};

  export type MimeTypeType = {};

  export type ExcludeUserAccountsListType = {};

  export type UserAccountType = {};

  export type ExcludeSharedDrivesListType = {};

  export type SharedDriveIdType = {};

  export type ConfluenceAttachmentFieldNameType = {};

  export type WebCrawlerSiteMapType = {};

  export type WebCrawlerSiteMapsType = {};

  export type WebCrawlerSiteMapsConfigurationType = {
    SiteMaps: WebCrawlerSiteMapsType;
  };

  export type WebCrawlerSeedUrlType = {};

  export type WebCrawlerSeedUrlListType = {};

  export type WebCrawlerSeedUrlConfigurationType = {
    SeedUrls: WebCrawlerSeedUrlListType;

    WebCrawlerMode?: string;
  };

  export type WebCrawlerUrlsType = {
    SeedUrlConfiguration?: WebCrawlerSeedUrlConfigurationType;

    SiteMapsConfiguration?: WebCrawlerSiteMapsConfigurationType;
  };

  export type ProxyConfigurationType = {
    Host: string;

    Port: number;

    Credentials?: SecretArnType;
  };

  export type WebCrawlerBasicAuthenticationType = {
    Host: string;

    Port: number;

    Credentials: SecretArnType;
  };

  export type WebCrawlerBasicAuthenticationListType = {};

  export type WebCrawlerAuthenticationConfigurationType = {
    BasicAuthentication?: WebCrawlerBasicAuthenticationListType;
  };

  export type WebCrawlerConfigurationType = {
    Urls: WebCrawlerUrlsType;

    CrawlDepth?: number;

    MaxLinksPerPage?: number;

    MaxContentSizePerPageInMegaBytes?: number;

    MaxUrlsPerMinuteCrawlRate?: number;

    UrlInclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    UrlExclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    ProxyConfiguration?: ProxyConfigurationType;

    AuthenticationConfiguration?: WebCrawlerAuthenticationConfigurationType;
  };

  export type WorkDocsConfigurationType = {
    OrganizationId: string;

    CrawlComments?: boolean;

    UseChangeLog?: boolean;

    InclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    ExclusionPatterns?: DataSourceInclusionsExclusionsStringsType;

    FieldMappings?: DataSourceToIndexFieldMappingListType;
  };

  export type DataSourceConfigurationType = {
    S3Configuration?: S3DataSourceConfigurationType;

    SharePointConfiguration?: SharePointConfigurationType;

    SalesforceConfiguration?: SalesforceConfigurationType;

    OneDriveConfiguration?: OneDriveConfigurationType;

    ServiceNowConfiguration?: ServiceNowConfigurationType;

    DatabaseConfiguration?: DatabaseConfigurationType;

    ConfluenceConfiguration?: ConfluenceConfigurationType;

    GoogleDriveConfiguration?: GoogleDriveConfigurationType;

    WebCrawlerConfiguration?: WebCrawlerConfigurationType;

    WorkDocsConfiguration?: WorkDocsConfigurationType;
  };

  /**
   * Name of data source
   */
  export type NameType = {};

  /**
   * Data source type
   */
  export type TypeType = {};

  /**
   * Description of data source
   */
  export type DescriptionType = {};

  /**
   * The code for a language.
   */
  export type LanguageCodeType = {};

  /**
   * Role ARN
   */
  export type RoleArnType = {};

  /**
   * Schedule
   */
  export type ScheduleType = {};

  /**
   * ID of data source
   */
  export type IdType = {};

  export type ArnType = {};

  export type CustomDocumentEnrichmentConfigurationType = {
    InlineConfigurations?: InlineConfigurationsType;

    PreExtractionHookConfiguration?: HookConfigurationType;

    PostExtractionHookConfiguration?: HookConfigurationType;

    RoleArn?: RoleArnType;
  };

  /**
   * List of InlineCustomDocumentEnrichmentConfigurations
   */
  export type InlineConfigurationsType = {};

  export type InlineCustomDocumentEnrichmentConfigurationType = {
    Condition?: DocumentAttributeConditionType;

    Target?: DocumentAttributeTargetType;

    DocumentContentDeletion?: boolean;
  };

  export type DocumentAttributeConditionType = {
    ConditionDocumentAttributeKey: DocumentAttributeKeyType;

    Operator: ConditionOperatorType;

    ConditionOnValue?: DocumentAttributeValueType;
  };

  export type DocumentAttributeTargetType = {
    TargetDocumentAttributeKey: DocumentAttributeKeyType;

    TargetDocumentAttributeValueDeletion?: boolean;

    TargetDocumentAttributeValue?: DocumentAttributeValueType;
  };

  export type ConditionOperatorType = {};

  export type DocumentAttributeKeyType = {};

  export type DocumentAttributeValueType = {
    StringValue?: string;

    StringListValue?: string[];

    LongValue?: LongType;

    DateValue?: TimestampType;
  };

  export type LongType = {};

  export type TimestampType = {};

  export type HookConfigurationType = {
    InvocationCondition?: DocumentAttributeConditionType;

    LambdaArn: LambdaArnType;

    S3Bucket: S3BucketNameType;
  };

  export type LambdaArnType = {};

  /**
   * Kendra DataSource
   */
  export type DataSourceResourceType = {
    /**
     * Read-only property
     */
    Id?: IdType;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    Name: NameType;

    IndexId: IndexIdType;

    /**
     * Create-only property
     */
    Type: TypeType;

    DataSourceConfiguration?: DataSourceConfigurationType;

    Description?: DescriptionType;

    Schedule?: ScheduleType;

    RoleArn?: RoleArnType;

    /**
     * Tags for labeling the data source
     */
    Tags?: TagListType;

    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfigurationType;

    LanguageCode?: LanguageCodeType;
  };
}
