/**
 * TypeScript definitions for AWS::DMS::Endpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DMS::Endpoint
 */
export namespace AWS_DMS_Endpoint {
  export type RedisSettingsType = {
    SslSecurityProtocol?: string;

    AuthUserName?: string;

    ServerName?: string;

    Port?: number;

    SslCaCertificateArn?: string;

    AuthPassword?: string;

    AuthType?: string;
  };

  export type SybaseSettingsType = {
    SecretsManagerAccessRoleArn?: string;

    SecretsManagerSecretId?: string;
  };

  export type IbmDb2SettingsType = {
    LoadTimeout?: number;

    SetDataCaptureChanges?: boolean;

    MaxFileSize?: number;

    KeepCsvFiles?: boolean;

    CurrentLsn?: string;

    MaxKBytesPerRead?: number;

    SecretsManagerSecretId?: string;

    WriteBufferSize?: number;

    SecretsManagerAccessRoleArn?: string;
  };

  export type OracleSettingsType = {
    AsmPassword?: string;

    DirectPathParallelLoad?: boolean;

    AdditionalArchivedLogDestId?: number;

    SpatialDataOptionToGeoJsonFunctionName?: string;

    ReplacePathPrefix?: boolean;

    FailTasksOnLobTruncation?: boolean;

    AsmServer?: string;

    SecretsManagerOracleAsmAccessRoleArn?: string;

    OraclePathPrefix?: string;

    ReadAheadBlocks?: number;

    StandbyDelayTime?: number;

    AllowSelectNestedTables?: boolean;

    AddSupplementalLogging?: boolean;

    SecretsManagerSecretId?: string;

    UseBFile?: boolean;

    EnableHomogenousTablespace?: boolean;

    AsmUser?: string;

    UseDirectPathFullLoad?: boolean;

    SecurityDbEncryption?: string;

    ParallelAsmReadThreads?: number;

    ArchivedLogDestId?: number;

    UsePathPrefix?: string;

    UseLogminerReader?: boolean;

    SecurityDbEncryptionName?: string;

    DirectPathNoLog?: boolean;

    SecretsManagerOracleAsmSecretId?: string;

    CharLengthSemantics?: string;

    NumberDatatypeScale?: number;

    ReadTableSpaceName?: boolean;

    AccessAlternateDirectly?: boolean;

    UseAlternateFolderForOnline?: boolean;

    ArchivedLogsOnly?: boolean;

    ExtraArchivedLogDestIds?: number[];

    RetryInterval?: number;

    SecretsManagerAccessRoleArn?: string;
  };

  export type KafkaSettingsType = {
    Broker?: string;

    SaslPassword?: string;

    MessageFormat?: string;

    SslClientCertificateArn?: string;

    IncludeTransactionDetails?: boolean;

    SecurityProtocol?: string;

    IncludeTableAlterOperations?: boolean;

    SslCaCertificateArn?: string;

    IncludeControlDetails?: boolean;

    IncludePartitionValue?: boolean;

    NoHexPrefix?: boolean;

    SslClientKeyArn?: string;

    SslClientKeyPassword?: string;

    SaslUserName?: string;

    MessageMaxBytes?: number;

    Topic?: string;

    PartitionIncludeSchemaTable?: boolean;

    IncludeNullAndEmpty?: boolean;
  };

  export type MySqlSettingsType = {
    ServerTimezone?: string;

    EventsPollInterval?: number;

    ParallelLoadThreads?: number;

    AfterConnectScript?: string;

    MaxFileSize?: number;

    TargetDbType?: string;

    SecretsManagerSecretId?: string;

    SecretsManagerAccessRoleArn?: string;

    CleanSourceMetadataOnMismatch?: boolean;
  };

  export type NeptuneSettingsType = {
    MaxRetryCount?: number;

    MaxFileSize?: number;

    S3BucketFolder?: string;

    ErrorRetryDuration?: number;

    IamAuthEnabled?: boolean;

    S3BucketName?: string;

    ServiceAccessRoleArn?: string;
  };

  export type ElasticsearchSettingsType = {
    EndpointUri?: string;

    ErrorRetryDuration?: number;

    FullLoadErrorPercentage?: number;

    ServiceAccessRoleArn?: string;
  };

  export type S3SettingsType = {
    TimestampColumnName?: string;

    EnableStatistics?: boolean;

    DatePartitionSequence?: string;

    CsvNullValue?: string;

    IncludeOpForFullLoad?: boolean;

    CdcInsertsAndUpdates?: boolean;

    BucketName?: string;

    ServerSideEncryptionKmsKeyId?: string;

    UseTaskStartTimeForFullLoadTimestamp?: boolean;

    GlueCatalogGeneration?: boolean;

    DataFormat?: string;

    CsvDelimiter?: string;

    AddTrailingPaddingCharacter?: boolean;

    IgnoreHeaderRows?: number;

    CannedAclForObjects?: string;

    Rfc4180?: boolean;

    ServiceAccessRoleArn?: string;

    ParquetTimestampInMillisecond?: boolean;

    PreserveTransactions?: boolean;

    BucketFolder?: string;

    DatePartitionDelimiter?: string;

    EncodingType?: string;

    AddColumnName?: boolean;

    CdcMinFileSize?: number;

    ParquetVersion?: string;

    ExternalTableDefinition?: string;

    UseCsvNoSupValue?: boolean;

    MaxFileSize?: number;

    CdcPath?: string;

    CsvNoSupValue?: string;

    CdcMaxBatchInterval?: number;

    CsvRowDelimiter?: string;

    RowGroupLength?: number;

    DataPageSize?: number;

    DatePartitionEnabled?: boolean;

    DictPageSizeLimit?: number;

    CompressionType?: string;

    DatePartitionTimezone?: string;

    CdcInsertsOnly?: boolean;

    ExpectedBucketOwner?: string;

    EncryptionMode?: string;
  };

  export type DocDbSettingsType = {
    SecretsManagerSecretId?: string;

    DocsToInvestigate?: number;

    SecretsManagerAccessRoleArn?: string;

    ExtractDocId?: boolean;

    NestingLevel?: string;
  };

  export type DynamoDbSettingsType = {
    ServiceAccessRoleArn?: string;
  };

  export type KinesisSettingsType = {
    MessageFormat?: string;

    IncludeTransactionDetails?: boolean;

    IncludeTableAlterOperations?: boolean;

    IncludeControlDetails?: boolean;

    IncludePartitionValue?: boolean;

    StreamArn?: string;

    ServiceAccessRoleArn?: string;

    NoHexPrefix?: boolean;

    PartitionIncludeSchemaTable?: boolean;

    IncludeNullAndEmpty?: boolean;
  };

  export type GcpMySQLSettingsType = {
    AfterConnectScript?: string;

    Port?: number;

    DatabaseName?: string;

    CleanSourceMetadataOnMismatch?: boolean;

    ServerTimezone?: string;

    EventsPollInterval?: number;

    ParallelLoadThreads?: number;

    Username?: string;

    MaxFileSize?: number;

    ServerName?: string;

    SecretsManagerSecretId?: string;

    SecretsManagerAccessRoleArn?: string;

    Password?: string;
  };

  export type MicrosoftSqlServerSettingsType = {
    ReadBackupOnly?: boolean;

    TlogAccessMode?: string;

    BcpPacketSize?: number;

    Port?: number;

    SafeguardPolicy?: string;

    UseThirdPartyBackupDevice?: boolean;

    DatabaseName?: string;

    UseBcpFullLoad?: boolean;

    Username?: string;

    QuerySingleAlwaysOnNode?: boolean;

    ServerName?: string;

    SecretsManagerSecretId?: string;

    ControlTablesFileGroup?: string;

    ForceLobLookup?: boolean;

    SecretsManagerAccessRoleArn?: string;

    TrimSpaceInChar?: boolean;

    Password?: string;
  };

  export type RedshiftSettingsType = {
    ConnectionTimeout?: number;

    MapBooleanAsBoolean?: boolean;

    AfterConnectScript?: string;

    FileTransferUploadStreams?: number;

    BucketName?: string;

    ServerSideEncryptionKmsKeyId?: string;

    ExplicitIds?: boolean;

    SecretsManagerSecretId?: string;

    TruncateColumns?: boolean;

    ServiceAccessRoleArn?: string;

    ReplaceChars?: string;

    TimeFormat?: string;

    BucketFolder?: string;

    ReplaceInvalidChars?: string;

    RemoveQuotes?: boolean;

    LoadTimeout?: number;

    MaxFileSize?: number;

    TrimBlanks?: boolean;

    DateFormat?: string;

    CompUpdate?: boolean;

    AcceptAnyDate?: boolean;

    WriteBufferSize?: number;

    SecretsManagerAccessRoleArn?: string;

    CaseSensitiveNames?: boolean;

    EmptyAsNull?: boolean;

    EncryptionMode?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type MongoDbSettingsType = {
    Port?: number;

    ExtractDocId?: string;

    DatabaseName?: string;

    AuthSource?: string;

    AuthMechanism?: string;

    Username?: string;

    DocsToInvestigate?: string;

    ServerName?: string;

    SecretsManagerSecretId?: string;

    AuthType?: string;

    SecretsManagerAccessRoleArn?: string;

    Password?: string;

    NestingLevel?: string;
  };

  export type PostgreSqlSettingsType = {
    PluginName?: string;

    MapBooleanAsBoolean?: boolean;

    AfterConnectScript?: string;

    ExecuteTimeout?: number;

    DdlArtifactsSchema?: string;

    FailTasksOnLobTruncation?: boolean;

    HeartbeatEnable?: boolean;

    BabelfishDatabaseName?: string;

    DatabaseMode?: string;

    CaptureDdls?: boolean;

    MaxFileSize?: number;

    HeartbeatFrequency?: number;

    SecretsManagerSecretId?: string;

    SecretsManagerAccessRoleArn?: string;

    HeartbeatSchema?: string;

    SlotName?: string;
  };

  /**
   * Resource Type definition for AWS::DMS::Endpoint
   */
  export type EndpointResourceType = {
    SybaseSettings?: SybaseSettingsType;

    RedisSettings?: RedisSettingsType;

    OracleSettings?: OracleSettingsType;

    KafkaSettings?: KafkaSettingsType;

    Port?: number;

    MySqlSettings?: MySqlSettingsType;

    S3Settings?: S3SettingsType;

    /**
     * Create-only property
     */
    ResourceIdentifier?: string;

    KinesisSettings?: KinesisSettingsType;

    SslMode?: string;

    RedshiftSettings?: RedshiftSettingsType;

    EndpointType: string;

    Tags?: TagType[];

    Password?: string;

    MongoDbSettings?: MongoDbSettingsType;

    IbmDb2Settings?: IbmDb2SettingsType;

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * Read-only property
     */
    ExternalId?: string;

    DatabaseName?: string;

    NeptuneSettings?: NeptuneSettingsType;

    ElasticsearchSettings?: ElasticsearchSettingsType;

    EngineName: string;

    DocDbSettings?: DocDbSettingsType;

    DynamoDbSettings?: DynamoDbSettingsType;

    Username?: string;

    MicrosoftSqlServerSettings?: MicrosoftSqlServerSettingsType;

    GcpMySQLSettings?: GcpMySQLSettingsType;

    ServerName?: string;

    ExtraConnectionAttributes?: string;

    /**
     * Read-only property
     */
    Id?: string;

    EndpointIdentifier?: string;

    CertificateArn?: string;

    PostgreSqlSettings?: PostgreSqlSettingsType;
  };
}
