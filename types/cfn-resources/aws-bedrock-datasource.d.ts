/**
 * TypeScript definitions for AWS::Bedrock::DataSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::DataSource Resource Type
 */
export namespace AWS_Bedrock_DataSource {
  /**
   * Settings for a foundation model used to parse documents for a data source.
   */
  export type BedrockFoundationModelConfigurationType = {
    /**
     * The model's ARN.
     */
    ModelArn: string;

    ParsingPrompt?: ParsingPromptType;

    ParsingModality?: ParsingModalityType;
  };

  /**
   * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
   */
  export type ChunkingConfigurationType = {
    ChunkingStrategy: ChunkingStrategyType;

    FixedSizeChunkingConfiguration?: FixedSizeChunkingConfigurationType;

    HierarchicalChunkingConfiguration?: HierarchicalChunkingConfigurationType;

    SemanticChunkingConfiguration?: SemanticChunkingConfigurationType;
  };

  /**
   * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
   */
  export type ChunkingStrategyType = {};

  /**
   * Settings for customizing steps in the data source content ingestion pipeline.
   */
  export type CustomTransformationConfigurationType = {
    IntermediateStorage: IntermediateStorageType;

    /**
     * A list of Lambda functions that process documents.
     */
    Transformations: TransformationType[];
  };

  /**
   * Specifies a raw data source location to ingest.
   */
  export type DataSourceConfigurationType = {
    Type: DataSourceTypeType;

    S3Configuration?: S3DataSourceConfigurationType;

    ConfluenceConfiguration?: ConfluenceDataSourceConfigurationType;

    SalesforceConfiguration?: SalesforceDataSourceConfigurationType;

    SharePointConfiguration?: SharePointDataSourceConfigurationType;

    WebConfiguration?: WebDataSourceConfigurationType;
  };

  /**
   * The status of a data source.
   */
  export type DataSourceStatusType = {};

  /**
   * The type of the data source location.
   */
  export type DataSourceTypeType = {};

  /**
   * The deletion policy for the data source.
   */
  export type DataDeletionPolicyType = {};

  /**
   * Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.
   */
  export type FixedSizeChunkingConfigurationType = {
    /**
     * The maximum number of tokens to include in a chunk.
     */
    MaxTokens: number;

    /**
     * The percentage of overlap between adjacent chunks of a data source.
     */
    OverlapPercentage: number;
  };

  /**
   * Configurations for when you choose hierarchical chunking. If you set the chunkingStrategy as NONE, exclude this field.
   */
  export type HierarchicalChunkingConfigurationType = {
    /**
     * Token settings for each layer.
     */
    LevelConfigurations: HierarchicalChunkingLevelConfigurationType[];

    /**
     * The number of tokens to repeat across chunks in the same layer.
     */
    OverlapTokens: number;
  };

  /**
   * Token settings for a layer in a hierarchical chunking configuration.
   */
  export type HierarchicalChunkingLevelConfigurationType = {
    /**
     * The maximum number of tokens that a chunk can contain in this layer.
     */
    MaxTokens: number;
  };

  /**
   * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
   */
  export type IntermediateStorageType = {
    S3Location: S3LocationType;
  };

  /**
   * Settings for parsing document contents
   */
  export type ParsingConfigurationType = {
    ParsingStrategy: ParsingStrategyType;

    BedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationType;

    BedrockDataAutomationConfiguration?: BedrockDataAutomationConfigurationType;
  };

  /**
   * Determine how will parsed content be stored.
   */
  export type ParsingModalityType = {};

  /**
   * Settings for a Bedrock Data Automation used to parse documents for a data source.
   */
  export type BedrockDataAutomationConfigurationType = {
    ParsingModality?: ParsingModalityType;
  };

  /**
   * Instructions for interpreting the contents of a document.
   */
  export type ParsingPromptType = {
    /**
     * Instructions for interpreting the contents of a document.
     */
    ParsingPromptText: string;
  };

  /**
   * The parsing strategy for the data source.
   */
  export type ParsingStrategyType = {};

  /**
   * The configuration information to connect to Amazon S3 as your data source.
   */
  export type S3DataSourceConfigurationType = {
    /**
     * The ARN of the bucket that contains the data source.
     */
    BucketArn: string;

    /**
     * A list of S3 prefixes that define the object containing the data sources.
     */
    InclusionPrefixes?: string[];

    /**
     * The account ID for the owner of the S3 bucket.
     */
    BucketOwnerAccountId?: string;
  };

  /**
   * The configuration information to connect to Confluence as your data source.
   */
  export type ConfluenceDataSourceConfigurationType = {
    SourceConfiguration: ConfluenceSourceConfigurationType;

    CrawlerConfiguration?: ConfluenceCrawlerConfigurationType;
  };

  /**
   * The configuration information to connect to Salesforce as your data source.
   */
  export type SalesforceDataSourceConfigurationType = {
    SourceConfiguration: SalesforceSourceConfigurationType;

    CrawlerConfiguration?: SalesforceCrawlerConfigurationType;
  };

  /**
   * The configuration information to connect to SharePoint as your data source.
   */
  export type SharePointDataSourceConfigurationType = {
    SourceConfiguration: SharePointSourceConfigurationType;

    CrawlerConfiguration?: SharePointCrawlerConfigurationType;
  };

  /**
   * Configures a web data source location.
   */
  export type WebDataSourceConfigurationType = {
    SourceConfiguration: WebSourceConfigurationType;

    CrawlerConfiguration?: WebCrawlerConfigurationType;
  };

  /**
   * An Amazon S3 location.
   */
  export type S3LocationType = {
    /**
     * The location's URI
     */
    URI: string;
  };

  /**
   * Configurations for when you choose semantic chunking. If you set the chunkingStrategy as NONE, exclude this field.
   */
  export type SemanticChunkingConfigurationType = {
    /**
     * The dissimilarity threshold for splitting chunks.
     */
    BreakpointPercentileThreshold: number;

    /**
     * The buffer size.
     */
    BufferSize: number;

    /**
     * The maximum number of tokens that a chunk can contain.
     */
    MaxTokens: number;
  };

  /**
   * Contains details about the server-side encryption for the data source.
   */
  export type ServerSideEncryptionConfigurationType = {
    /**
     * The ARN of the AWS KMS key used to encrypt the resource.
     */
    KmsKeyArn?: string;
  };

  /**
   * A Lambda function that processes documents.
   */
  export type TransformationType = {
    /**
     * When the service applies the transformation.
     */
    StepToApply: string;

    TransformationFunction: TransformationFunctionType;
  };

  /**
   * A Lambda function that processes documents.
   */
  export type TransformationFunctionType = {
    TransformationLambdaConfiguration: TransformationLambdaConfigurationType;
  };

  /**
   * A Lambda function that processes documents.
   */
  export type TransformationLambdaConfigurationType = {
    /**
     * The function's ARN identifier.
     */
    LambdaArn: string;
  };

  /**
   * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
   */
  export type VectorIngestionConfigurationType = {
    ChunkingConfiguration?: ChunkingConfigurationType;

    CustomTransformationConfiguration?: CustomTransformationConfigurationType;

    ParsingConfiguration?: ParsingConfigurationType;
  };

  /**
   * The endpoint information to connect to your Confluence data source.
   */
  export type ConfluenceSourceConfigurationType = {
    /**
     * The Confluence host URL or instance URL.
     */
    HostUrl: string;

    /**
     * The supported host type, whether online/cloud or server/on-premises.
     */
    HostType: string;

    /**
     * The supported authentication type to authenticate and connect to your Confluence instance.
     */
    AuthType: string;

    /**
     * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Confluence connection configuration.
     */
    CredentialsSecretArn: string;
  };

  /**
   * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
   */
  export type ConfluenceCrawlerConfigurationType = {
    FilterConfiguration?: CrawlFilterConfigurationType;
  };

  /**
   * The endpoint information to connect to your Salesforce data source.
   */
  export type SalesforceSourceConfigurationType = {
    /**
     * The Salesforce host URL or instance URL.
     */
    HostUrl: string;

    /**
     * The supported authentication type to authenticate and connect to your Salesforce instance.
     */
    AuthType: string;

    /**
     * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Salesforce connection configuration.
     */
    CredentialsSecretArn: string;
  };

  /**
   * The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
   */
  export type SalesforceCrawlerConfigurationType = {
    FilterConfiguration?: CrawlFilterConfigurationType;
  };

  /**
   * The endpoint information to connect to your SharePoint data source.
   */
  export type SharePointSourceConfigurationType = {
    /**
     * A list of one or more SharePoint site URLs.
     */
    SiteUrls: string[];

    /**
     * The supported host type, whether online/cloud or server/on-premises.
     */
    HostType: string;

    /**
     * The supported authentication type to authenticate and connect to your SharePoint site/sites.
     */
    AuthType: string;

    /**
     * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see SharePoint connection configuration.
     */
    CredentialsSecretArn: string;

    /**
     * The identifier of your Microsoft 365 tenant.
     */
    TenantId?: string;

    /**
     * The domain of your SharePoint instance or site URL/URLs.
     */
    Domain: string;
  };

  /**
   * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
   */
  export type SharePointCrawlerConfigurationType = {
    FilterConfiguration?: CrawlFilterConfigurationType;
  };

  /**
   * A web source configuration.
   */
  export type WebSourceConfigurationType = {
    UrlConfiguration: UrlConfigurationType;
  };

  /**
   * A url configuration.
   */
  export type UrlConfigurationType = {
    SeedUrls: SeedUrlsType;
  };

  /**
   * A seed url object.
   */
  export type SeedUrlType = {
    /**
     * A web url.
     */
    Url: string;
  };

  /**
   * A list of web urls.
   */
  export type SeedUrlsType = {};

  /**
   * Configuration for the web crawler.
   */
  export type WebCrawlerConfigurationType = {
    CrawlerLimits?: WebCrawlerLimitsType;

    InclusionFilters?: FilterListType;

    ExclusionFilters?: FilterListType;

    Scope?: WebScopeTypeType;
  };

  /**
   * Limit settings for the web crawler.
   */
  export type WebCrawlerLimitsType = {
    /**
     * Rate of web URLs retrieved per minute.
     */
    RateLimit?: number;
  };

  /**
   * The scope that a web crawl job will be restricted to.
   */
  export type WebScopeTypeType = {};

  /**
   * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
   */
  export type CrawlFilterConfigurationType = {
    /**
     * The crawl filter type.
     */
    Type: string;

    PatternObjectFilter?: PatternObjectFilterConfigurationType;
  };

  /**
   * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
   */
  export type PatternObjectFilterConfigurationType = {
    Filters: PatternObjectFilterListType;
  };

  /**
   * Contains information
   */
  export type PatternObjectFilterListType = {};

  /**
   * The specific filters applied to your data source content. You can filter out or include certain content.
   */
  export type PatternObjectFilterType = {
    /**
     * The supported object type or content type of the data source.
     */
    ObjectType: string;

    InclusionFilters?: FilterListType;

    ExclusionFilters?: FilterListType;
  };

  /**
   * A set of regular expression filter patterns for a type of object.
   */
  export type FilterListType = {};

  /**
   * Definition of AWS::Bedrock::DataSource Resource Type
   */
  export type DataSourceResourceType = {
    DataSourceConfiguration: DataSourceConfigurationType;

    /**
     * Identifier for a resource.
     * Read-only property
     */
    DataSourceId?: string;

    /**
     * Description of the Resource.
     */
    Description?: string;

    /**
     * The unique identifier of the knowledge base to which to add the data source.
     * Create-only property
     */
    KnowledgeBaseId: string;

    /**
     * Read-only property
     */
    DataSourceStatus?: DataSourceStatusType;

    /**
     * The name of the data source.
     */
    Name: string;

    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfigurationType;

    VectorIngestionConfiguration?: VectorIngestionConfigurationType;

    DataDeletionPolicy?: DataDeletionPolicyType;

    /**
     * The time at which the data source was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The time at which the knowledge base was last updated.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * The details of the failure reasons related to the data source.
     * Read-only property
     */
    FailureReasons?: string[];
  };
}
