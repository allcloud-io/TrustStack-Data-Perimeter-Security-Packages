/**
 * TypeScript definitions for AWS::KinesisFirehose::DeliveryStream
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KinesisFirehose::DeliveryStream
 */
export namespace AWS_KinesisFirehose_DeliveryStream {
  export type DeliveryStreamEncryptionConfigurationInputType = {
    KeyARN?: string;

    KeyType: string;
  };

  export type SplunkDestinationConfigurationType = {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    HECAcknowledgmentTimeoutInSeconds?: number;

    HECEndpoint: string;

    HECEndpointType: string;

    HECToken?: string;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RetryOptions?: SplunkRetryOptionsType;

    S3BackupMode?: string;

    S3Configuration: S3DestinationConfigurationType;

    SecretsManagerConfiguration?: SecretsManagerConfigurationType;

    BufferingHints?: SplunkBufferingHintsType;
  };

  export type HttpEndpointDestinationConfigurationType = {
    RoleARN?: string;

    EndpointConfiguration: HttpEndpointConfigurationType;

    RequestConfiguration?: HttpEndpointRequestConfigurationType;

    BufferingHints?: BufferingHintsType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RetryOptions?: RetryOptionsType;

    S3BackupMode?: string;

    S3Configuration: S3DestinationConfigurationType;

    SecretsManagerConfiguration?: SecretsManagerConfigurationType;
  };

  export type DirectPutSourceConfigurationType = {
    ThroughputHintInMBs?: number;
  };

  export type KinesisStreamSourceConfigurationType = {
    KinesisStreamARN: string;

    RoleARN: string;
  };

  export type DatabaseSourceConfigurationType = {
    Type: string;

    Endpoint: string;

    Port: number;

    SSLMode?: string;

    Databases: DatabasesType;

    Tables: DatabaseTablesType;

    Columns?: DatabaseColumnsType;

    SurrogateKeys?: string[];

    SnapshotWatermarkTable: DatabaseTableNameType;

    DatabaseSourceAuthenticationConfiguration: DatabaseSourceAuthenticationConfigurationType;

    DatabaseSourceVPCConfiguration: DatabaseSourceVPCConfigurationType;

    Digest?: string;

    PublicCertificate?: string;
  };

  export type DatabasesType = {
    Include?: DatabaseNameType[];

    Exclude?: DatabaseNameType[];
  };

  export type DatabaseNameType = {};

  export type DatabaseTablesType = {
    Include?: DatabaseTableNameType[];

    Exclude?: DatabaseTableNameType[];
  };

  export type DatabaseTableNameType = {};

  export type DatabaseColumnsType = {
    Include?: DatabaseColumnNameType[];

    Exclude?: DatabaseColumnNameType[];
  };

  export type DatabaseColumnNameType = {};

  export type DatabaseSourceAuthenticationConfigurationType = {
    SecretsManagerConfiguration: SecretsManagerConfigurationType;
  };

  export type DatabaseSourceVPCConfigurationType = {
    VpcEndpointServiceName: VpcEndpointServiceNameType;
  };

  export type VpcEndpointServiceNameType = {};

  export type MSKSourceConfigurationType = {
    MSKClusterARN: string;

    TopicName: string;

    ReadFromTimestamp?: string;

    AuthenticationConfiguration: AuthenticationConfigurationType;
  };

  export type AuthenticationConfigurationType = {
    RoleARN: string;

    Connectivity: string;
  };

  export type VpcConfigurationType = {
    RoleARN: string;

    SubnetIds: string[];

    SecurityGroupIds: string[];
  };

  export type DocumentIdOptionsType = {
    DefaultDocumentIdFormat: string;
  };

  export type ExtendedS3DestinationConfigurationType = {
    BucketARN: string;

    BufferingHints?: BufferingHintsType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    CompressionFormat?: string;

    CustomTimeZone?: string;

    DataFormatConversionConfiguration?: DataFormatConversionConfigurationType;

    DynamicPartitioningConfiguration?: DynamicPartitioningConfigurationType;

    EncryptionConfiguration?: EncryptionConfigurationType;

    ErrorOutputPrefix?: string;

    FileExtension?: string;

    Prefix?: string;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RoleARN: string;

    S3BackupConfiguration?: S3DestinationConfigurationType;

    S3BackupMode?: string;
  };

  export type S3DestinationConfigurationType = {
    BucketARN: string;

    BufferingHints?: BufferingHintsType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    CompressionFormat?: string;

    EncryptionConfiguration?: EncryptionConfigurationType;

    ErrorOutputPrefix?: string;

    Prefix?: string;

    RoleARN: string;
  };

  export type RedshiftDestinationConfigurationType = {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    ClusterJDBCURL: string;

    CopyCommand: CopyCommandType;

    Password?: string;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RetryOptions?: RedshiftRetryOptionsType;

    RoleARN: string;

    S3BackupConfiguration?: S3DestinationConfigurationType;

    S3BackupMode?: string;

    S3Configuration: S3DestinationConfigurationType;

    SecretsManagerConfiguration?: SecretsManagerConfigurationType;

    Username?: string;
  };

  export type ElasticsearchDestinationConfigurationType = {
    BufferingHints?: ElasticsearchBufferingHintsType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    DomainARN?: string;

    IndexName: string;

    IndexRotationPeriod?: string;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RetryOptions?: ElasticsearchRetryOptionsType;

    RoleARN: string;

    S3BackupMode?: string;

    S3Configuration: S3DestinationConfigurationType;

    ClusterEndpoint?: string;

    TypeName?: string;

    VpcConfiguration?: VpcConfigurationType;

    DocumentIdOptions?: DocumentIdOptionsType;
  };

  export type AmazonopensearchserviceDestinationConfigurationType = {
    BufferingHints?: AmazonopensearchserviceBufferingHintsType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    DomainARN?: string;

    IndexName: string;

    IndexRotationPeriod?: string;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RetryOptions?: AmazonopensearchserviceRetryOptionsType;

    RoleARN: string;

    S3BackupMode?: string;

    S3Configuration: S3DestinationConfigurationType;

    ClusterEndpoint?: string;

    TypeName?: string;

    VpcConfiguration?: VpcConfigurationType;

    DocumentIdOptions?: DocumentIdOptionsType;
  };

  export type AmazonOpenSearchServerlessDestinationConfigurationType = {
    BufferingHints?: AmazonOpenSearchServerlessBufferingHintsType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    IndexName: string;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RetryOptions?: AmazonOpenSearchServerlessRetryOptionsType;

    RoleARN: string;

    S3BackupMode?: string;

    S3Configuration: S3DestinationConfigurationType;

    CollectionEndpoint?: string;

    VpcConfiguration?: VpcConfigurationType;
  };

  export type SnowflakeDestinationConfigurationType = {
    AccountUrl: string;

    PrivateKey?: string;

    KeyPassphrase?: string;

    User?: string;

    Database: string;

    Schema: string;

    Table: string;

    SnowflakeRoleConfiguration?: SnowflakeRoleConfigurationType;

    DataLoadingOption?: string;

    MetaDataColumnName?: string;

    ContentColumnName?: string;

    SnowflakeVpcConfiguration?: SnowflakeVpcConfigurationType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    ProcessingConfiguration?: ProcessingConfigurationType;

    RoleARN: string;

    RetryOptions?: SnowflakeRetryOptionsType;

    S3BackupMode?: string;

    S3Configuration: S3DestinationConfigurationType;

    SecretsManagerConfiguration?: SecretsManagerConfigurationType;

    BufferingHints?: SnowflakeBufferingHintsType;
  };

  export type IcebergDestinationConfigurationType = {
    DestinationTableConfigurationList?: DestinationTableConfigurationListType;

    ProcessingConfiguration?: ProcessingConfigurationType;

    CloudWatchLoggingOptions?: CloudWatchLoggingOptionsType;

    CatalogConfiguration: CatalogConfigurationType;

    RoleARN: string;

    AppendOnly?: boolean;

    RetryOptions?: RetryOptionsType;

    s3BackupMode?: string;

    BufferingHints?: BufferingHintsType;

    S3Configuration: S3DestinationConfigurationType;
  };

  export type CatalogConfigurationType = {
    CatalogArn?: string;
  };

  export type DestinationTableConfigurationType = {
    DestinationTableName: string;

    DestinationDatabaseName: string;

    S3ErrorOutputPrefix?: string;

    UniqueKeys?: UniqueKeyType[];
  };

  export type UniqueKeyType = {};

  export type BufferingHintsType = {
    IntervalInSeconds?: number;

    SizeInMBs?: number;
  };

  export type ProcessingConfigurationType = {
    Enabled?: boolean;

    Processors?: ProcessorType[];
  };

  export type DestinationTableConfigurationListType = {};

  export type SplunkRetryOptionsType = {
    DurationInSeconds?: number;
  };

  export type ElasticsearchRetryOptionsType = {
    DurationInSeconds?: number;
  };

  export type AmazonopensearchserviceRetryOptionsType = {
    DurationInSeconds?: number;
  };

  export type AmazonOpenSearchServerlessRetryOptionsType = {
    DurationInSeconds?: number;
  };

  export type SnowflakeRetryOptionsType = {
    DurationInSeconds?: number;
  };

  export type RedshiftRetryOptionsType = {
    DurationInSeconds?: number;
  };

  export type RetryOptionsType = {
    DurationInSeconds?: number;
  };

  export type DataFormatConversionConfigurationType = {
    Enabled?: boolean;

    InputFormatConfiguration?: InputFormatConfigurationType;

    OutputFormatConfiguration?: OutputFormatConfigurationType;

    SchemaConfiguration?: SchemaConfigurationType;
  };

  export type DynamicPartitioningConfigurationType = {
    Enabled?: boolean;

    RetryOptions?: RetryOptionsType;
  };

  export type CopyCommandType = {
    CopyOptions?: string;

    DataTableColumns?: string;

    DataTableName: string;
  };

  export type EncryptionConfigurationType = {
    KMSEncryptionConfig?: KMSEncryptionConfigType;

    NoEncryptionConfig?: string;
  };

  export type ElasticsearchBufferingHintsType = {
    IntervalInSeconds?: number;

    SizeInMBs?: number;
  };

  export type AmazonopensearchserviceBufferingHintsType = {
    IntervalInSeconds?: number;

    SizeInMBs?: number;
  };

  export type AmazonOpenSearchServerlessBufferingHintsType = {
    IntervalInSeconds?: number;

    SizeInMBs?: number;
  };

  export type SplunkBufferingHintsType = {
    IntervalInSeconds?: number;

    SizeInMBs?: number;
  };

  export type SnowflakeBufferingHintsType = {
    IntervalInSeconds?: number;

    SizeInMBs?: number;
  };

  export type CloudWatchLoggingOptionsType = {
    Enabled?: boolean;

    LogGroupName?: string;

    LogStreamName?: string;
  };

  export type OutputFormatConfigurationType = {
    Serializer?: SerializerType;
  };

  export type ProcessorType = {
    Parameters?: ProcessorParameterType[];

    Type: string;
  };

  export type KMSEncryptionConfigType = {
    AWSKMSKeyARN: string;
  };

  export type InputFormatConfigurationType = {
    Deserializer?: DeserializerType;
  };

  export type SchemaConfigurationType = {
    CatalogId?: string;

    DatabaseName?: string;

    Region?: string;

    RoleARN?: string;

    TableName?: string;

    VersionId?: string;
  };

  export type SerializerType = {
    OrcSerDe?: OrcSerDeType;

    ParquetSerDe?: ParquetSerDeType;
  };

  export type ProcessorParameterType = {
    ParameterName: string;

    ParameterValue: string;
  };

  export type DeserializerType = {
    HiveJsonSerDe?: HiveJsonSerDeType;

    OpenXJsonSerDe?: OpenXJsonSerDeType;
  };

  export type HiveJsonSerDeType = {
    TimestampFormats?: string[];
  };

  export type OrcSerDeType = {
    BlockSizeBytes?: number;

    BloomFilterColumns?: string[];

    BloomFilterFalsePositiveProbability?: number;

    Compression?: string;

    DictionaryKeyThreshold?: number;

    EnablePadding?: boolean;

    FormatVersion?: string;

    PaddingTolerance?: number;

    RowIndexStride?: number;

    StripeSizeBytes?: number;
  };

  export type ParquetSerDeType = {
    BlockSizeBytes?: number;

    Compression?: string;

    EnableDictionaryCompression?: boolean;

    MaxPaddingBytes?: number;

    PageSizeBytes?: number;

    WriterVersion?: string;
  };

  export type OpenXJsonSerDeType = {
    CaseInsensitive?: boolean;

    ColumnToJsonKeyMappings?: Record<string, any>;

    ConvertDotsInJsonKeysToUnderscores?: boolean;
  };

  export type HttpEndpointRequestConfigurationType = {
    ContentEncoding?: string;

    CommonAttributes?: HttpEndpointCommonAttributeType[];
  };

  export type HttpEndpointCommonAttributeType = {
    AttributeName: string;

    AttributeValue: string;
  };

  export type HttpEndpointConfigurationType = {
    Url: string;

    AccessKey?: string;

    Name?: string;
  };

  export type SnowflakeRoleConfigurationType = {
    Enabled?: boolean;

    SnowflakeRole?: string;
  };

  export type SnowflakeVpcConfigurationType = {
    PrivateLinkVpceId: string;
  };

  export type SecretsManagerConfigurationType = {
    Enabled: boolean;

    RoleARN?: string;

    SecretARN?: string;
  };

  export type TagType = {
    Key: string;

    Value?: string;
  };

  /**
   * Resource Type definition for AWS::KinesisFirehose::DeliveryStream
   */
  export type DeliveryStreamResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInputType;

    /**
     * Create-only property
     */
    DeliveryStreamName?: string;

    /**
     * Create-only property
     */
    DeliveryStreamType?: string;

    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfigurationType;

    AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfigurationType;

    AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfigurationType;

    ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfigurationType;

    /**
     * Create-only property
     */
    DatabaseSourceConfiguration?: DatabaseSourceConfigurationType;

    /**
     * Create-only property
     */
    DirectPutSourceConfiguration?: DirectPutSourceConfigurationType;

    /**
     * Create-only property
     */
    KinesisStreamSourceConfiguration?: KinesisStreamSourceConfigurationType;

    /**
     * Create-only property
     */
    MSKSourceConfiguration?: MSKSourceConfigurationType;

    RedshiftDestinationConfiguration?: RedshiftDestinationConfigurationType;

    S3DestinationConfiguration?: S3DestinationConfigurationType;

    SplunkDestinationConfiguration?: SplunkDestinationConfigurationType;

    HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfigurationType;

    SnowflakeDestinationConfiguration?: SnowflakeDestinationConfigurationType;

    /**
     * Create-only property
     */
    IcebergDestinationConfiguration?: IcebergDestinationConfigurationType;

    Tags?: TagType[];
  };
}
