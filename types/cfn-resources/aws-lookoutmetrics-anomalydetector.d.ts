/**
 * TypeScript definitions for AWS::LookoutMetrics::AnomalyDetector
 * Generated from CloudFormation Resource Schema
 */

/**
 * An Amazon Lookout for Metrics Detector
 */
export namespace AWS_LookoutMetrics_AnomalyDetector {
  export type ArnType = {};

  /**
   * Name of a column in the data.
   */
  export type ColumnNameType = {};

  export type CharsetType = {};

  export type CsvFormatDescriptorType = {
    FileCompression?: string;

    Charset?: CharsetType;

    Delimiter?: string;

    HeaderList?: ColumnNameType[];

    QuoteSymbol?: string;

    ContainsHeader?: boolean;
  };

  export type JsonFormatDescriptorType = {
    FileCompression?: string;

    Charset?: CharsetType;
  };

  export type FileFormatDescriptorType = {
    CsvFormatDescriptor?: CsvFormatDescriptorType;

    JsonFormatDescriptor?: JsonFormatDescriptorType;
  };

  export type S3SourceConfigType = {
    RoleArn: ArnType;

    TemplatedPathList?: string[];

    HistoricalDataPathList?: string[];

    FileFormatDescriptor: FileFormatDescriptorType;
  };

  export type AppFlowConfigType = {
    RoleArn: ArnType;

    FlowName: string;
  };

  export type CloudwatchConfigType = {
    RoleArn: ArnType;
  };

  export type DatabaseHostType = {};

  export type DatabasePortType = {};

  export type TableNameType = {};

  export type SubnetIdListType = {};

  export type SecurityGroupIdListType = {};

  export type VpcConfigurationType = {
    SubnetIdList: SubnetIdListType;

    SecurityGroupIdList: SecurityGroupIdListType;
  };

  export type SecretManagerArnType = {};

  export type RDSSourceConfigType = {
    DBInstanceIdentifier: string;

    DatabaseHost: DatabaseHostType;

    DatabasePort: DatabasePortType;

    SecretManagerArn: SecretManagerArnType;

    DatabaseName: string;

    TableName: TableNameType;

    RoleArn: ArnType;

    VpcConfiguration: VpcConfigurationType;
  };

  export type RedshiftSourceConfigType = {
    ClusterIdentifier: string;

    DatabaseHost: DatabaseHostType;

    DatabasePort: DatabasePortType;

    SecretManagerArn: SecretManagerArnType;

    DatabaseName: string;

    TableName: TableNameType;

    RoleArn: ArnType;

    VpcConfiguration: VpcConfigurationType;
  };

  export type MetricSourceType = {
    S3SourceConfig?: S3SourceConfigType;

    RDSSourceConfig?: RDSSourceConfigType;

    RedshiftSourceConfig?: RedshiftSourceConfigType;

    CloudwatchConfig?: CloudwatchConfigType;

    AppFlowConfig?: AppFlowConfigType;
  };

  export type TimestampColumnType = {
    ColumnName?: ColumnNameType;

    /**
     * A timestamp format for the timestamps in the dataset
     */
    ColumnFormat?: string;
  };

  export type MetricType = {
    MetricName: ColumnNameType;

    /**
     * Operator used to aggregate metric values
     */
    AggregationFunction: string;

    Namespace?: string;
  };

  export type MetricSetType = {
    /**
     * The name of the MetricSet.
     */
    MetricSetName: string;

    /**
     * A description for the MetricSet.
     */
    MetricSetDescription?: string;

    MetricSource: MetricSourceType;

    /**
     * Metrics captured by this MetricSet.
     */
    MetricList: MetricType[];

    /**
     * Offset, in seconds, between the frequency interval and the time at which the metrics are available.
     */
    Offset?: number;

    TimestampColumn?: TimestampColumnType;

    /**
     * Dimensions for this MetricSet.
     */
    DimensionList?: ColumnNameType[];

    /**
     * A frequency period to aggregate the data
     */
    MetricSetFrequency?: string;

    Timezone?: string;
  };

  /**
   * Frequency of anomaly detection
   */
  export type AnomalyDetectorFrequencyType = {};

  export type AnomalyDetectorConfigType = {
    /**
     * Frequency of anomaly detection
     */
    AnomalyDetectorFrequency: AnomalyDetectorFrequencyType;
  };

  /**
   * An Amazon Lookout for Metrics Detector
   */
  export type AnomalyDetectorResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Name for the Amazon Lookout for Metrics Anomaly Detector
     * Create-only property
     */
    AnomalyDetectorName?: string;

    /**
     * A description for the AnomalyDetector.
     */
    AnomalyDetectorDescription?: string;

    /**
     * Configuration options for the AnomalyDetector
     */
    AnomalyDetectorConfig: AnomalyDetectorConfigType;

    /**
     * List of metric sets for anomaly detection
     */
    MetricSetList: MetricSetType[];

    /**
     * KMS key used to encrypt the AnomalyDetector data
     */
    KmsKeyArn?: string;
  };
}
