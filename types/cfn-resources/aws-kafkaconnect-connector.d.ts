/**
 * TypeScript definitions for AWS::KafkaConnect::Connector
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::KafkaConnect::Connector
 */
export namespace AWS_KafkaConnect_Connector {
  /**
   * Details of how to connect to an Apache Kafka cluster.
   */
  export type ApacheKafkaClusterType = {
    /**
     * The bootstrap servers string of the Apache Kafka cluster.
     */
    BootstrapServers: string;

    Vpc: VpcType;
  };

  /**
   * Details about auto scaling of a connector.
   */
  export type AutoScalingType = {
    /**
     * The maximum number of workers for a connector.
     */
    MaxWorkerCount: number;

    /**
     * The minimum number of workers for a connector.
     */
    MinWorkerCount: number;

    ScaleInPolicy: ScaleInPolicyType;

    ScaleOutPolicy: ScaleOutPolicyType;

    /**
     * Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.
     */
    McuCount: number;
  };

  /**
   * Information about the capacity allocated to the connector.
   */
  export type CapacityType = {
    AutoScaling?: AutoScalingType;

    ProvisionedCapacity?: ProvisionedCapacityType;
  };

  /**
   * Details about delivering logs to Amazon CloudWatch Logs.
   */
  export type CloudWatchLogsLogDeliveryType = {
    /**
     * Specifies whether the logs get sent to the specified CloudWatch Logs destination.
     */
    Enabled: boolean;

    /**
     * The CloudWatch log group that is the destination for log delivery.
     */
    LogGroup?: string;
  };

  /**
   * Details about a custom plugin.
   */
  export type CustomPluginType = {
    /**
     * The Amazon Resource Name (ARN) of the custom plugin to use.
     */
    CustomPluginArn: string;

    /**
     * The revision of the custom plugin to use.
     */
    Revision: number;
  };

  /**
   * Details about delivering logs to Amazon Kinesis Data Firehose.
   */
  export type FirehoseLogDeliveryType = {
    /**
     * The Kinesis Data Firehose delivery stream that is the destination for log delivery.
     */
    DeliveryStream?: string;

    /**
     * Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.
     */
    Enabled: boolean;
  };

  /**
   * Details of how to connect to the Kafka cluster.
   */
  export type KafkaClusterType = {
    ApacheKafkaCluster: ApacheKafkaClusterType;
  };

  /**
   * Details of the client authentication used by the Kafka cluster.
   */
  export type KafkaClusterClientAuthenticationType = {
    AuthenticationType: KafkaClusterClientAuthenticationTypeType;
  };

  /**
   * The type of client authentication used to connect to the Kafka cluster. Value NONE means that no client authentication is used.
   */
  export type KafkaClusterClientAuthenticationTypeType = {};

  /**
   * Details of encryption in transit to the Kafka cluster.
   */
  export type KafkaClusterEncryptionInTransitType = {
    EncryptionType: KafkaClusterEncryptionInTransitTypeType;
  };

  /**
   * The type of encryption in transit to the Kafka cluster.
   */
  export type KafkaClusterEncryptionInTransitTypeType = {};

  /**
   * Details of what logs are delivered and where they are delivered.
   */
  export type LogDeliveryType = {
    WorkerLogDelivery: WorkerLogDeliveryType;
  };

  /**
   * Details about a Kafka Connect plugin which will be used with the connector.
   */
  export type PluginType = {
    CustomPlugin: CustomPluginType;
  };

  /**
   * Details about a fixed capacity allocated to a connector.
   */
  export type ProvisionedCapacityType = {
    /**
     * Specifies how many MSK Connect Units (MCU) are allocated to the connector.
     */
    McuCount?: number;

    /**
     * Number of workers for a connector.
     */
    WorkerCount: number;
  };

  /**
   * Details about delivering logs to Amazon S3.
   */
  export type S3LogDeliveryType = {
    /**
     * The name of the S3 bucket that is the destination for log delivery.
     */
    Bucket?: string;

    /**
     * Specifies whether the logs get sent to the specified Amazon S3 destination.
     */
    Enabled: boolean;

    /**
     * The S3 prefix that is the destination for log delivery.
     */
    Prefix?: string;
  };

  /**
   * Information about the scale in policy of the connector.
   */
  export type ScaleInPolicyType = {
    /**
     * Specifies the CPU utilization percentage threshold at which connector scale in should trigger.
     */
    CpuUtilizationPercentage: number;
  };

  /**
   * Information about the scale out policy of the connector.
   */
  export type ScaleOutPolicyType = {
    /**
     * Specifies the CPU utilization percentage threshold at which connector scale out should trigger.
     */
    CpuUtilizationPercentage: number;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Information about a VPC used with the connector.
   */
  export type VpcType = {
    /**
     * The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.
     */
    SecurityGroups: string[];

    /**
     * The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.
     */
    Subnets: string[];
  };

  /**
   * Specifies the worker configuration to use with the connector.
   */
  export type WorkerConfigurationType = {
    /**
     * The revision of the worker configuration to use.
     */
    Revision: number;

    /**
     * The Amazon Resource Name (ARN) of the worker configuration to use.
     */
    WorkerConfigurationArn: string;
  };

  /**
   * Specifies where worker logs are delivered.
   */
  export type WorkerLogDeliveryType = {
    CloudWatchLogs?: CloudWatchLogsLogDeliveryType;

    Firehose?: FirehoseLogDeliveryType;

    S3?: S3LogDeliveryType;
  };

  /**
   * Resource Type definition for AWS::KafkaConnect::Connector
   */
  export type ConnectorResourceType = {
    Capacity: CapacityType;

    /**
     * Amazon Resource Name for the created Connector.
     * Read-only property
     */
    ConnectorArn?: string;

    /**
     * The configuration for the connector.
     */
    ConnectorConfiguration: Record<string, any>;

    /**
     * A summary description of the connector.
     * Create-only property
     */
    ConnectorDescription?: string;

    /**
     * The name of the connector.
     * Create-only property
     */
    ConnectorName: string;

    /**
     * Create-only property
     */
    KafkaCluster: KafkaClusterType;

    /**
     * Create-only property
     */
    KafkaClusterClientAuthentication: KafkaClusterClientAuthenticationType;

    /**
     * Create-only property
     */
    KafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransitType;

    /**
     * The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.
     * Create-only property
     */
    KafkaConnectVersion: string;

    /**
     * Create-only property
     */
    LogDelivery?: LogDeliveryType;

    /**
     * List of plugins to use with the connector.
     * Create-only property
     */
    Plugins: PluginType[];

    /**
     * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.
     * Create-only property
     */
    ServiceExecutionRoleArn: string;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    WorkerConfiguration?: WorkerConfigurationType;
  };
}
