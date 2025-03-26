/**
 * TypeScript definitions for AWS::Bedrock::KnowledgeBase
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::KnowledgeBase Resource Type
 */
export namespace AWS_Bedrock_KnowledgeBase {
  /**
   * Contains details about the embeddings model used for the knowledge base.
   */
  export type KnowledgeBaseConfigurationType = {
    Type: KnowledgeBaseTypeType;

    VectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfigurationType;

    KendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfigurationType;

    SqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfigurationType;
  };

  /**
   * The status of a knowledge base.
   */
  export type KnowledgeBaseStatusType = {};

  /**
   * The storage type of a knowledge base.
   */
  export type KnowledgeBaseStorageTypeType = {};

  /**
   * The type of a knowledge base.
   */
  export type KnowledgeBaseTypeType = {};

  /**
   * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
   */
  export type OpenSearchServerlessConfigurationType = {
    /**
     * The ARN of the OpenSearch Service vector store.
     */
    CollectionArn: string;

    /**
     * The name of the vector store.
     */
    VectorIndexName: string;

    FieldMapping: OpenSearchServerlessFieldMappingType;
  };

  /**
   * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
   */
  export type OpenSearchServerlessFieldMappingType = {
    /**
     * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     */
    VectorField: string;

    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    TextField: string;

    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    MetadataField: string;
  };

  /**
   * Contains the storage configuration of the knowledge base in Pinecone.
   */
  export type PineconeConfigurationType = {
    /**
     * The endpoint URL for your index management page.
     */
    ConnectionString: string;

    /**
     * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
     */
    CredentialsSecretArn: string;

    /**
     * The namespace to be used to write new data to your database.
     */
    Namespace?: string;

    FieldMapping: PineconeFieldMappingType;
  };

  /**
   * Contains the names of the fields to which to map information about the vector store.
   */
  export type PineconeFieldMappingType = {
    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    TextField: string;

    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    MetadataField: string;
  };

  /**
   * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see Create a vector index in Amazon RDS.
   */
  export type RdsConfigurationType = {
    /**
     * The ARN of the vector store.
     */
    ResourceArn: string;

    /**
     * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
     */
    CredentialsSecretArn: string;

    /**
     * The name of your Amazon RDS database.
     */
    DatabaseName: string;

    /**
     * The name of the table in the database.
     */
    TableName: string;

    FieldMapping: RdsFieldMappingType;
  };

  /**
   * Contains the names of the fields to which to map information about the vector store.
   */
  export type RdsFieldMappingType = {
    /**
     * The name of the field in which Amazon Bedrock stores the ID for each entry.
     */
    PrimaryKeyField: string;

    /**
     * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     */
    VectorField: string;

    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    TextField: string;

    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    MetadataField: string;
  };

  /**
   * Contains the storage configuration of the knowledge base in Redis Enterprise Cloud.
   */
  export type RedisEnterpriseCloudConfigurationType = {
    /**
     * The endpoint URL of the Redis Enterprise Cloud database.
     */
    Endpoint: string;

    /**
     * The name of the vector index.
     */
    VectorIndexName: string;

    /**
     * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Redis Enterprise Cloud database.
     */
    CredentialsSecretArn: string;

    FieldMapping: RedisEnterpriseCloudFieldMappingType;
  };

  /**
   * Contains the names of the fields to which to map information about the vector store.
   */
  export type RedisEnterpriseCloudFieldMappingType = {
    /**
     * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     */
    VectorField: string;

    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    TextField: string;

    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    MetadataField: string;
  };

  /**
   * Contains the names of the fields to which to map information about the vector store.
   */
  export type MongoDbAtlasFieldMappingType = {
    /**
     * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     */
    VectorField: string;

    /**
     * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     */
    TextField: string;

    /**
     * The name of the field in which Amazon Bedrock stores metadata about the vector store.
     */
    MetadataField: string;
  };

  /**
   * Contains the storage configuration of the knowledge base in MongoDb Atlas Cloud.
   */
  export type MongoDbAtlasConfigurationType = {
    /**
     * MongoDB Atlas endpoint.
     */
    Endpoint: string;

    /**
     * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon Mongo database.
     */
    CredentialsSecretArn: string;

    /**
     * Name of the database within MongoDB Atlas.
     */
    DatabaseName: string;

    /**
     * Name of the collection within MongoDB Atlas.
     */
    CollectionName: string;

    /**
     * Name of a MongoDB Atlas index.
     */
    VectorIndexName: string;

    /**
     * MongoDB Atlas endpoint service name.
     */
    EndpointServiceName?: string;

    FieldMapping: MongoDbAtlasFieldMappingType;
  };

  /**
   * The vector store service in which the knowledge base is stored.
   */
  export type StorageConfigurationType = {
    Type: KnowledgeBaseStorageTypeType;

    OpensearchServerlessConfiguration?: OpenSearchServerlessConfigurationType;

    PineconeConfiguration?: PineconeConfigurationType;

    RdsConfiguration?: RdsConfigurationType;

    MongoDbAtlasConfiguration?: MongoDbAtlasConfigurationType;
  };

  /**
   * A map of tag keys and values
   */
  export type TagsMapType = {};

  /**
   * The vector configuration details for the Bedrock embeddings model.
   */
  export type BedrockEmbeddingModelConfigurationType = {
    /**
     * The dimensions details for the vector configuration used on the Bedrock embeddings model.
     */
    Dimensions?: number;

    /**
     * The data type for the vectors when using a model to convert text into vector embeddings.
     */
    EmbeddingDataType?: string;
  };

  /**
   * The embeddings model configuration details for the vector model used in Knowledge Base.
   */
  export type EmbeddingModelConfigurationType = {
    BedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfigurationType;
  };

  /**
   * Contains details about the model used to create vector embeddings for the knowledge base.
   */
  export type VectorKnowledgeBaseConfigurationType = {
    /**
     * The ARN of the model used to create vector embeddings for the knowledge base.
     */
    EmbeddingModelArn: string;

    EmbeddingModelConfiguration?: EmbeddingModelConfigurationType;

    SupplementalDataStorageConfiguration?: SupplementalDataStorageConfigurationType;
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
   * Supplemental data storage location type.
   */
  export type SupplementalDataStorageLocationTypeType = {};

  /**
   * Supplemental data storage location.
   */
  export type SupplementalDataStorageLocationType = {
    SupplementalDataStorageLocationType: SupplementalDataStorageLocationTypeType;

    S3Location?: S3LocationType;
  };

  /**
   * List of supplemental data storage locations.
   */
  export type SupplementalDataStorageLocationsType = {};

  /**
   * Configurations for supplemental data storage.
   */
  export type SupplementalDataStorageConfigurationType = {
    SupplementalDataStorageLocations: SupplementalDataStorageLocationsType;
  };

  /**
   * Configurations for a Kendra knowledge base
   */
  export type KendraKnowledgeBaseConfigurationType = {
    KendraIndexArn: KendraIndexArnType;
  };

  /**
   * Arn of a Kendra index
   */
  export type KendraIndexArnType = {};

  /**
   * Configurations for a SQL knowledge base
   */
  export type SqlKnowledgeBaseConfigurationType = {
    Type: QueryEngineTypeType;

    RedshiftConfiguration?: RedshiftConfigurationType;
  };

  /**
   * SQL query engine type
   */
  export type QueryEngineTypeType = {};

  /**
   * Configurations for a Redshift knowledge base
   */
  export type RedshiftConfigurationType = {
    StorageConfigurations: RedshiftQueryEngineStorageConfigurationsType;

    QueryEngineConfiguration: RedshiftQueryEngineConfigurationType;

    QueryGenerationConfiguration?: QueryGenerationConfigurationType;
  };

  /**
   * List of configurations for available Redshift query engine storage types
   */
  export type RedshiftQueryEngineStorageConfigurationsType = {};

  /**
   * Configurations for available Redshift query engine storage types
   */
  export type RedshiftQueryEngineStorageConfigurationType = {
    Type: RedshiftQueryEngineStorageTypeType;

    AwsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfigurationType;

    RedshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfigurationType;
  };

  /**
   * Redshift query engine storage type
   */
  export type RedshiftQueryEngineStorageTypeType = {};

  /**
   * Configurations for Redshift query engine AWS Data Catalog backed storage
   */
  export type RedshiftQueryEngineAwsDataCatalogStorageConfigurationType = {
    TableNames: AwsDataCatalogTableNamesType;
  };

  /**
   * List of table names in AWS Data Catalog. Must follow two part notation
   */
  export type AwsDataCatalogTableNamesType = {};

  /**
   * AWS Data Catalog table name
   */
  export type AwsDataCatalogTableNameType = {};

  /**
   * Configurations for Redshift query engine Redshift backed storage
   */
  export type RedshiftQueryEngineRedshiftStorageConfigurationType = {
    DatabaseName: RedshiftDatabaseType;
  };

  /**
   * Redshift database name
   */
  export type RedshiftDatabaseType = {};

  /**
   * Configurations for Redshift query engine
   */
  export type RedshiftQueryEngineConfigurationType = {
    Type: RedshiftQueryEngineTypeType;

    ServerlessConfiguration?: RedshiftServerlessConfigurationType;

    ProvisionedConfiguration?: RedshiftProvisionedConfigurationType;
  };

  /**
   * Redshift query engine type
   */
  export type RedshiftQueryEngineTypeType = {};

  /**
   * Configurations for serverless Redshift query engine
   */
  export type RedshiftServerlessConfigurationType = {
    WorkgroupArn: WorkgroupArnType;

    AuthConfiguration: RedshiftServerlessAuthConfigurationType;
  };

  /**
   * Workgroup arn
   */
  export type WorkgroupArnType = {};

  /**
   * Configurations for Redshift query engine serverless auth setup
   */
  export type RedshiftServerlessAuthConfigurationType = {
    Type: RedshiftServerlessAuthTypeType;

    UsernamePasswordSecretArn?: SecretArnType;
  };

  /**
   * Serverless Redshift auth type
   */
  export type RedshiftServerlessAuthTypeType = {};

  /**
   * Arn of a SecretsManager Secret
   */
  export type SecretArnType = {};

  /**
   * Configurations for provisioned Redshift query engine
   */
  export type RedshiftProvisionedConfigurationType = {
    ClusterIdentifier: RedshiftClusterIdentifierType;

    AuthConfiguration: RedshiftProvisionedAuthConfigurationType;
  };

  /**
   * Redshift cluster identifier
   */
  export type RedshiftClusterIdentifierType = {};

  /**
   * Configurations for Redshift query engine provisioned auth setup
   */
  export type RedshiftProvisionedAuthConfigurationType = {
    Type: RedshiftProvisionedAuthTypeType;

    /**
     * Redshift database user
     */
    DatabaseUser?: string;

    UsernamePasswordSecretArn?: SecretArnType;
  };

  /**
   * Provisioned Redshift auth type
   */
  export type RedshiftProvisionedAuthTypeType = {};

  /**
   * Configurations for generating Redshift engine queries
   */
  export type QueryGenerationConfigurationType = {
    ExecutionTimeoutSeconds?: QueryExecutionTimeoutSecondsType;

    GenerationContext?: QueryGenerationContextType;
  };

  /**
   * Max query execution timeout
   */
  export type QueryExecutionTimeoutSecondsType = {};

  /**
   * Context used to improve query generation
   */
  export type QueryGenerationContextType = {
    Tables?: QueryGenerationTablesType;

    CuratedQueries?: CuratedQueriesType;
  };

  /**
   * List of tables used for Redshift query generation context
   */
  export type QueryGenerationTablesType = {};

  /**
   * Tables used for Redshift query generation context
   */
  export type QueryGenerationTableType = {
    Name: QueryGenerationTableNameType;

    Description?: DescriptionStringType;

    Inclusion?: InclusionTypeType;

    Columns?: QueryGenerationColumnsType;
  };

  /**
   * Query generation table name. Must follow three-part notation
   */
  export type QueryGenerationTableNameType = {};

  /**
   * Description for the attached entity
   */
  export type DescriptionStringType = {};

  /**
   * Include or Exclude status for an entity
   */
  export type InclusionTypeType = {};

  /**
   * List of Redshift query generation columns
   */
  export type QueryGenerationColumnsType = {};

  /**
   * Redshift query generation column
   */
  export type QueryGenerationColumnType = {
    Name?: QueryGenerationColumnNameType;

    Description?: DescriptionStringType;

    Inclusion?: InclusionTypeType;
  };

  /**
   * Query generation column name
   */
  export type QueryGenerationColumnNameType = {};

  /**
   * List of example queries and results
   */
  export type CuratedQueriesType = {};

  /**
   * Curated query or question and answer pair
   */
  export type CuratedQueryType = {
    NaturalLanguage: NaturalLanguageStringType;

    Sql: SqlStringType;
  };

  /**
   * Question for the curated query
   */
  export type NaturalLanguageStringType = {};

  /**
   * Answer for the curated query
   */
  export type SqlStringType = {};

  /**
   * Definition of AWS::Bedrock::KnowledgeBase Resource Type
   */
  export type KnowledgeBaseResourceType = {
    /**
     * Description of the Resource.
     */
    Description?: string;

    KnowledgeBaseConfiguration: KnowledgeBaseConfigurationType;

    /**
     * The unique identifier of the knowledge base.
     * Read-only property
     */
    KnowledgeBaseId?: string;

    /**
     * The ARN of the knowledge base.
     * Read-only property
     */
    KnowledgeBaseArn?: string;

    /**
     * The name of the knowledge base.
     */
    Name: string;

    /**
     * Read-only property
     */
    Status?: KnowledgeBaseStatusType;

    /**
     * The ARN of the IAM role with permissions to invoke API operations on the knowledge base. The ARN must begin with AmazonBedrockExecutionRoleForKnowledgeBase_
     */
    RoleArn: string;

    /**
     * The time at which the knowledge base was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * A list of reasons that the API operation on the knowledge base failed.
     * Read-only property
     */
    FailureReasons?: string[];

    /**
     * The time at which the knowledge base was last updated.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * Create-only property
     */
    StorageConfiguration?: StorageConfigurationType;

    Tags?: TagsMapType;
  };
}
