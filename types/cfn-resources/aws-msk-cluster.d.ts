/**
 * TypeScript definitions for AWS::MSK::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MSK::Cluster
 */
export namespace AWS_MSK_Cluster {
  export type S3Type = {
    Enabled: boolean;

    Prefix?: string;

    Bucket?: string;
  };

  export type BrokerLogsType = {
    S3?: S3Type;

    CloudWatchLogs?: CloudWatchLogsType;

    Firehose?: FirehoseType;
  };

  export type NodeExporterType = {
    EnabledInBroker: boolean;
  };

  export type EncryptionInfoType = {
    EncryptionAtRest?: EncryptionAtRestType;

    EncryptionInTransit?: EncryptionInTransitType;
  };

  export type FirehoseType = {
    Enabled: boolean;

    DeliveryStream?: string;
  };

  export type OpenMonitoringType = {
    Prometheus: PrometheusType;
  };

  export type PrometheusType = {
    JmxExporter?: JmxExporterType;

    NodeExporter?: NodeExporterType;
  };

  export type CloudWatchLogsType = {
    LogGroup?: string;

    Enabled: boolean;
  };

  export type EBSStorageInfoType = {
    VolumeSize?: number;

    ProvisionedThroughput?: ProvisionedThroughputType;
  };

  export type ProvisionedThroughputType = {
    Enabled?: boolean;

    VolumeThroughput?: number;
  };

  export type PublicAccessType = {
    Type?: string;
  };

  export type VpcConnectivityType = {
    ClientAuthentication?: VpcConnectivityClientAuthenticationType;
  };

  export type ConfigurationInfoType = {
    Revision: number;

    Arn: string;
  };

  export type BrokerNodeGroupInfoType = {
    StorageInfo?: StorageInfoType;

    ConnectivityInfo?: ConnectivityInfoType;

    SecurityGroups?: string[];

    BrokerAZDistribution?: string;

    ClientSubnets: string[];

    InstanceType: string;
  };

  export type EncryptionAtRestType = {
    DataVolumeKMSKeyId: string;
  };

  export type JmxExporterType = {
    EnabledInBroker: boolean;
  };

  export type StorageInfoType = {
    EBSStorageInfo?: EBSStorageInfoType;
  };

  export type ConnectivityInfoType = {
    PublicAccess?: PublicAccessType;

    VpcConnectivity?: VpcConnectivityType;
  };

  export type VpcConnectivityTlsType = {
    Enabled: boolean;
  };

  export type VpcConnectivitySaslType = {
    Scram?: VpcConnectivityScramType;

    Iam?: VpcConnectivityIamType;
  };

  export type VpcConnectivityScramType = {
    Enabled: boolean;
  };

  export type VpcConnectivityIamType = {
    Enabled: boolean;
  };

  export type TlsType = {
    CertificateAuthorityArnList?: string[];

    Enabled?: boolean;
  };

  export type SaslType = {
    Scram?: ScramType;

    Iam?: IamType;
  };

  export type ScramType = {
    Enabled: boolean;
  };

  export type IamType = {
    Enabled: boolean;
  };

  export type UnauthenticatedType = {
    Enabled: boolean;
  };

  export type ClientAuthenticationType = {
    Tls?: TlsType;

    Sasl?: SaslType;

    Unauthenticated?: UnauthenticatedType;
  };

  export type VpcConnectivityClientAuthenticationType = {
    Tls?: VpcConnectivityTlsType;

    Sasl?: VpcConnectivitySaslType;
  };

  export type LoggingInfoType = {
    BrokerLogs: BrokerLogsType;
  };

  export type EncryptionInTransitType = {
    InCluster?: boolean;

    ClientBroker?: string;
  };

  /**
   * Resource Type definition for AWS::MSK::Cluster
   */
  export type ClusterResourceType = {
    BrokerNodeGroupInfo: BrokerNodeGroupInfoType;

    EnhancedMonitoring?: string;

    KafkaVersion: string;

    NumberOfBrokerNodes: number;

    EncryptionInfo?: EncryptionInfoType;

    OpenMonitoring?: OpenMonitoringType;

    /**
     * Create-only property
     */
    ClusterName: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The current version of the MSK cluster
     */
    CurrentVersion?: string;

    ClientAuthentication?: ClientAuthenticationType;

    LoggingInfo?: LoggingInfoType;

    /**
     * A key-value pair to associate with a resource.
     */
    Tags?: Record<string, any>;

    ConfigurationInfo?: ConfigurationInfoType;

    StorageMode?: string;
  };
}
