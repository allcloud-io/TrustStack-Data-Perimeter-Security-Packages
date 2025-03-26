/**
 * TypeScript definitions for AWS::AppFlow::Flow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::AppFlow::Flow.
 */
export namespace AWS_AppFlow_Flow {
  /**
   * Trigger settings of the flow.
   */
  export type TriggerConfigType = {
    /**
     * Trigger type of the flow
     */
    TriggerType: TriggerTypeType;

    /**
     * Details required based on the type of trigger
     */
    TriggerProperties?: ScheduledTriggerPropertiesType;
  };

  /**
   * Configurations of Source connector of the flow.
   */
  export type SourceFlowConfigType = {
    /**
     * Type of source connector
     */
    ConnectorType: ConnectorTypeType;

    /**
     * The API version that the destination connector uses.
     */
    ApiVersion?: ApiVersionType;

    /**
     * Name of source connector profile
     */
    ConnectorProfileName?: ConnectorProfileNameType;

    /**
     * Source connector details required to query a connector
     */
    SourceConnectorProperties: SourceConnectorPropertiesType;

    /**
     * Configuration for scheduled incremental data pull
     */
    IncrementalPullConfig?: IncrementalPullConfigType;
  };

  /**
   * Configurations of destination connector.
   */
  export type DestinationFlowConfigType = {
    /**
     * Destination connector type
     */
    ConnectorType: ConnectorTypeType;

    /**
     * The API version that the destination connector uses.
     */
    ApiVersion?: ApiVersionType;

    /**
     * Name of destination connector profile
     */
    ConnectorProfileName?: ConnectorProfileNameType;

    /**
     * Destination connector details
     */
    DestinationConnectorProperties: DestinationConnectorPropertiesType;
  };

  export type TaskType = {
    /**
     * Source fields on which particular task will be applied
     */
    SourceFields: string[];

    /**
     * Operation to be performed on provided source fields
     */
    ConnectorOperator?: ConnectorOperatorType;

    /**
     * A field value on which source field should be validated
     */
    DestinationField?: string;

    /**
     * Type of task
     */
    TaskType: TaskTypeType;

    /**
     * A Map used to store task related info
     */
    TaskProperties?: TaskPropertiesObjectType[];
  };

  /**
   * A label for tagging AppFlow resources
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
   * Configurations of metadata catalog of the flow.
   */
  export type MetadataCatalogConfigType = {
    /**
     * Configurations of glue data catalog of the flow.
     */
    GlueDataCatalog?: GlueDataCatalogType;
  };

  /**
   * Trigger settings of the flow.
   */
  export type GlueDataCatalogType = {
    /**
     * A string containing the value for the tag
     */
    RoleArn: string;

    /**
     * A string containing the value for the tag
     */
    DatabaseName: string;

    /**
     * A string containing the value for the tag
     */
    TablePrefix: string;
  };

  /**
   * Destination connector details
   */
  export type DestinationConnectorPropertiesType = {
    Redshift?: RedshiftDestinationPropertiesType;

    S3?: S3DestinationPropertiesType;

    Salesforce?: SalesforceDestinationPropertiesType;

    Snowflake?: SnowflakeDestinationPropertiesType;

    EventBridge?: EventBridgeDestinationPropertiesType;

    Upsolver?: UpsolverDestinationPropertiesType;

    LookoutMetrics?: LookoutMetricsDestinationPropertiesType;

    Marketo?: MarketoDestinationPropertiesType;

    Zendesk?: ZendeskDestinationPropertiesType;

    CustomConnector?: CustomConnectorDestinationPropertiesType;

    SAPOData?: SAPODataDestinationPropertiesType;
  };

  /**
   * Configuration for scheduled incremental data pull
   */
  export type IncrementalPullConfigType = {
    DatetimeTypeFieldName?: DatetimeTypeFieldNameType;
  };

  /**
   * Source connector details required to query a connector
   */
  export type SourceConnectorPropertiesType = {
    Amplitude?: AmplitudeSourcePropertiesType;

    Datadog?: DatadogSourcePropertiesType;

    Dynatrace?: DynatraceSourcePropertiesType;

    GoogleAnalytics?: GoogleAnalyticsSourcePropertiesType;

    InforNexus?: InforNexusSourcePropertiesType;

    Marketo?: MarketoSourcePropertiesType;

    S3?: S3SourcePropertiesType;

    SAPOData?: SAPODataSourcePropertiesType;

    Salesforce?: SalesforceSourcePropertiesType;

    Pardot?: PardotSourcePropertiesType;

    ServiceNow?: ServiceNowSourcePropertiesType;

    Singular?: SingularSourcePropertiesType;

    Slack?: SlackSourcePropertiesType;

    Trendmicro?: TrendmicroSourcePropertiesType;

    Veeva?: VeevaSourcePropertiesType;

    Zendesk?: ZendeskSourcePropertiesType;

    CustomConnector?: CustomConnectorSourcePropertiesType;
  };

  /**
   * Operation to be performed on provided source fields
   */
  export type ConnectorOperatorType = {
    Amplitude?: AmplitudeConnectorOperatorType;

    Datadog?: DatadogConnectorOperatorType;

    Dynatrace?: DynatraceConnectorOperatorType;

    GoogleAnalytics?: GoogleAnalyticsConnectorOperatorType;

    InforNexus?: InforNexusConnectorOperatorType;

    Marketo?: MarketoConnectorOperatorType;

    S3?: S3ConnectorOperatorType;

    SAPOData?: SAPODataConnectorOperatorType;

    Salesforce?: SalesforceConnectorOperatorType;

    Pardot?: PardotConnectorOperatorType;

    ServiceNow?: ServiceNowConnectorOperatorType;

    Singular?: SingularConnectorOperatorType;

    Slack?: SlackConnectorOperatorType;

    Trendmicro?: TrendmicroConnectorOperatorType;

    Veeva?: VeevaConnectorOperatorType;

    Zendesk?: ZendeskConnectorOperatorType;

    CustomConnector?: OperatorType;
  };

  /**
   * Details required for scheduled trigger type
   */
  export type ScheduledTriggerPropertiesType = {
    ScheduleExpression: string;

    DataPullMode?: string;

    ScheduleStartTime?: number;

    ScheduleEndTime?: number;

    FirstExecutionFrom?: number;

    TimeZone?: string;

    ScheduleOffset?: number;

    FlowErrorDeactivationThreshold?: number;
  };

  /**
   * A map for properties for custom connector.
   */
  export type CustomPropertiesType = {};

  export type TriggerTypeType = {};

  export type ObjectType = {};

  export type EntityNameType = {};

  export type EnableDynamicFieldUpdateType = {};

  export type IncludeDeletedRecordsType = {};

  export type IncludeAllVersionsType = {};

  export type IncludeRenditionsType = {};

  export type IncludeSourceFilesType = {};

  export type DocumentTypeType = {};

  export type BucketNameType = {};

  export type UpsolverBucketNameType = {};

  export type BucketPrefixType = {};

  export type S3InputFormatConfigType = {
    S3InputFileType?: string;
  };

  export type ErrorHandlingConfigType = {
    FailOnFirstError?: boolean;

    BucketPrefix?: BucketPrefixType;

    BucketName?: BucketNameType;
  };

  export type SuccessResponseHandlingConfigType = {
    BucketPrefix?: BucketPrefixType;

    BucketName?: BucketNameType;
  };

  export type NameType = {};

  export type WriteOperationTypeType = {};

  export type FileTypeType = {};

  export type AggregationTypeType = {};

  export type TargetFileSizeType = {};

  export type PreserveSourceDataTypingType = {};

  export type PrefixTypeType = {};

  export type PrefixFormatType = {};

  export type PathPrefixHierarchyType = {};

  export type PathPrefixType = {};

  export type PrefixConfigType = {
    PrefixType?: PrefixTypeType;

    PrefixFormat?: PrefixFormatType;

    PathPrefixHierarchy?: PathPrefixHierarchyType;
  };

  export type AggregationConfigType = {
    AggregationType?: AggregationTypeType;

    TargetFileSize?: TargetFileSizeType;
  };

  export type S3OutputFormatConfigType = {
    FileType?: FileTypeType;

    PrefixConfig?: PrefixConfigType;

    AggregationConfig?: AggregationConfigType;

    PreserveSourceDataTyping?: PreserveSourceDataTypingType;
  };

  export type UpsolverS3OutputFormatConfigType = {
    FileType?: FileTypeType;

    PrefixConfig: PrefixConfigType;

    AggregationConfig?: AggregationConfigType;
  };

  export type ConnectorTypeType = {};

  /**
   * The API version that the connector will use.
   */
  export type ApiVersionType = {};

  /**
   * Name of connector profile
   */
  export type ConnectorProfileNameType = {};

  export type AmplitudeSourcePropertiesType = {
    Object: ObjectType;
  };

  export type DatadogSourcePropertiesType = {
    Object: ObjectType;
  };

  export type DynatraceSourcePropertiesType = {
    Object: ObjectType;
  };

  export type GoogleAnalyticsSourcePropertiesType = {
    Object: ObjectType;
  };

  export type InforNexusSourcePropertiesType = {
    Object: ObjectType;
  };

  export type MarketoSourcePropertiesType = {
    Object: ObjectType;
  };

  export type S3SourcePropertiesType = {
    BucketName: BucketNameType;

    BucketPrefix: BucketPrefixType;

    S3InputFormatConfig?: S3InputFormatConfigType;
  };

  export type SAPODataSourcePropertiesType = {
    ObjectPath: ObjectType;

    parallelismConfig?: SAPODataParallelismConfigType;

    paginationConfig?: SAPODataPaginationConfigType;
  };

  export type SalesforceSourcePropertiesType = {
    Object: ObjectType;

    EnableDynamicFieldUpdate?: EnableDynamicFieldUpdateType;

    IncludeDeletedRecords?: IncludeDeletedRecordsType;

    DataTransferApi?: DataTransferApiType;
  };

  export type PardotSourcePropertiesType = {
    Object: ObjectType;
  };

  export type ServiceNowSourcePropertiesType = {
    Object: ObjectType;
  };

  export type SingularSourcePropertiesType = {
    Object: ObjectType;
  };

  export type SlackSourcePropertiesType = {
    Object: ObjectType;
  };

  export type TrendmicroSourcePropertiesType = {
    Object: ObjectType;
  };

  export type VeevaSourcePropertiesType = {
    Object: ObjectType;

    DocumentType?: DocumentTypeType;

    IncludeSourceFiles?: IncludeSourceFilesType;

    IncludeRenditions?: IncludeRenditionsType;

    IncludeAllVersions?: IncludeAllVersionsType;
  };

  export type ZendeskSourcePropertiesType = {
    Object: ObjectType;
  };

  export type CustomConnectorSourcePropertiesType = {
    EntityName: EntityNameType;

    CustomProperties?: CustomPropertiesType;

    DataTransferApi?: Record<string, any>;
  };

  export type CustomConnectorDestinationPropertiesType = {
    EntityName: EntityNameType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;

    WriteOperationType?: WriteOperationTypeType;

    /**
     * List of fields used as ID when performing a write operation.
     */
    IdFieldNames?: string[];

    CustomProperties?: CustomPropertiesType;
  };

  export type ZendeskDestinationPropertiesType = {
    Object: ObjectType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;

    /**
     * List of fields used as ID when performing a write operation.
     */
    IdFieldNames?: string[];

    WriteOperationType?: WriteOperationTypeType;
  };

  export type RedshiftDestinationPropertiesType = {
    Object: ObjectType;

    IntermediateBucketName: BucketNameType;

    BucketPrefix?: BucketPrefixType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;
  };

  export type S3DestinationPropertiesType = {
    BucketName: BucketNameType;

    BucketPrefix?: BucketPrefixType;

    S3OutputFormatConfig?: S3OutputFormatConfigType;
  };

  export type SAPODataDestinationPropertiesType = {
    ObjectPath: ObjectType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;

    SuccessResponseHandlingConfig?: SuccessResponseHandlingConfigType;

    /**
     * List of fields used as ID when performing a write operation.
     */
    IdFieldNames?: string[];

    WriteOperationType?: WriteOperationTypeType;
  };

  export type SalesforceDestinationPropertiesType = {
    Object: ObjectType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;

    /**
     * List of fields used as ID when performing a write operation.
     */
    IdFieldNames?: string[];

    WriteOperationType?: WriteOperationTypeType;

    DataTransferApi?: DataTransferApiType;
  };

  export type SnowflakeDestinationPropertiesType = {
    Object: ObjectType;

    IntermediateBucketName: BucketNameType;

    BucketPrefix?: BucketPrefixType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;
  };

  export type EventBridgeDestinationPropertiesType = {
    Object: ObjectType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;
  };

  export type UpsolverDestinationPropertiesType = {
    BucketName: UpsolverBucketNameType;

    BucketPrefix?: BucketPrefixType;

    S3OutputFormatConfig: UpsolverS3OutputFormatConfigType;
  };

  export type LookoutMetricsDestinationPropertiesType = {
    Object?: ObjectType;
  };

  export type MarketoDestinationPropertiesType = {
    Object: ObjectType;

    ErrorHandlingConfig?: ErrorHandlingConfigType;
  };

  /**
   * Name of the datetime/timestamp data type field to be used for importing incremental records from the source
   */
  export type DatetimeTypeFieldNameType = {};

  export type TaskTypeType = {};

  export type OperatorPropertiesKeysType = {};

  /**
   * An object used to store task related info
   */
  export type TaskPropertiesObjectType = {
    Key: OperatorPropertiesKeysType;

    Value: string;
  };

  export type AmplitudeConnectorOperatorType = {};

  export type DatadogConnectorOperatorType = {};

  export type DynatraceConnectorOperatorType = {};

  export type GoogleAnalyticsConnectorOperatorType = {};

  export type InforNexusConnectorOperatorType = {};

  export type MarketoConnectorOperatorType = {};

  export type S3ConnectorOperatorType = {};

  export type SAPODataConnectorOperatorType = {};

  export type SalesforceConnectorOperatorType = {};

  export type PardotConnectorOperatorType = {};

  export type ServiceNowConnectorOperatorType = {};

  export type SingularConnectorOperatorType = {};

  export type SlackConnectorOperatorType = {};

  export type TrendmicroConnectorOperatorType = {};

  export type VeevaConnectorOperatorType = {};

  export type ZendeskConnectorOperatorType = {};

  export type OperatorType = {};

  export type StatusType = {};

  export type DataTransferApiType = {};

  /**
   * SAP Source connector parallelism factor
   */
  export type SAPODataParallelismConfigType = {
    maxParallelism: SAPODataMaxParallelismType;
  };

  /**
   * SAP Source connector page size
   */
  export type SAPODataPaginationConfigType = {
    maxPageSize: SAPODataMaxPageSizeType;
  };

  export type SAPODataMaxParallelismType = {};

  export type SAPODataMaxPageSizeType = {};

  /**
   * Resource schema for AWS::AppFlow::Flow.
   */
  export type FlowResourceType = {
    /**
     * ARN identifier of the flow.
     * Read-only property
     */
    FlowArn?: string;

    /**
     * Name of the flow.
     * Create-only property
     */
    FlowName: string;

    /**
     * Description of the flow.
     */
    Description?: string;

    /**
     * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
     * Create-only property
     */
    KMSArn?: string;

    /**
     * Trigger settings of the flow.
     */
    TriggerConfig: TriggerConfigType;

    /**
     * Flow activation status for Scheduled- and Event-triggered flows
     */
    FlowStatus?: string;

    /**
     * Configurations of Source connector of the flow.
     */
    SourceFlowConfig: SourceFlowConfigType;

    /**
     * List of Destination connectors of the flow.
     */
    DestinationFlowConfigList: DestinationFlowConfigType[];

    /**
     * List of tasks for the flow.
     */
    Tasks: TaskType[];

    /**
     * List of Tags.
     */
    Tags?: TagType[];

    /**
     * Configurations of metadata catalog of the flow.
     */
    MetadataCatalogConfig?: MetadataCatalogConfigType;
  };
}
