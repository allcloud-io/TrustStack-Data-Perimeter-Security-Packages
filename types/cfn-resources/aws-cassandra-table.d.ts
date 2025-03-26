/**
 * TypeScript definitions for AWS::Cassandra::Table
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Cassandra::Table
 */
export namespace AWS_Cassandra_Table {
  export type ColumnType = {
    ColumnName: string;

    ColumnType: string;
  };

  export type ClusteringKeyColumnType = {
    Column: ColumnType;

    OrderBy?: string;
  };

  /**
   * Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits
   */
  export type ProvisionedThroughputType = {
    ReadCapacityUnits: number;

    WriteCapacityUnits: number;
  };

  /**
   * Capacity mode for the specified table
   */
  export type ModeType = {};

  export type BillingModeType = {
    Mode: ModeType;

    ProvisionedThroughput?: ProvisionedThroughputType;
  };

  /**
   * A key-value pair to apply to the resource
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Represents the settings used to enable server-side encryption
   */
  export type EncryptionSpecificationType = {
    EncryptionType: EncryptionTypeType;

    KmsKeyIdentifier?: KmsKeyIdentifierType;
  };

  /**
   * Server-side encryption type
   */
  export type EncryptionTypeType = {};

  /**
   * The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.
   */
  export type KmsKeyIdentifierType = {};

  /**
   * Represents the read and write settings used for AutoScaling.
   */
  export type AutoScalingSpecificationType = {
    WriteCapacityAutoScaling?: AutoScalingSettingType;

    ReadCapacityAutoScaling?: AutoScalingSettingType;
  };

  /**
   * Represents configuration for auto scaling.
   */
  export type AutoScalingSettingType = {
    AutoScalingDisabled?: boolean;

    MinimumUnits?: number;

    MaximumUnits?: number;

    ScalingPolicy?: ScalingPolicyType;
  };

  /**
   * Represents scaling policy.
   */
  export type ScalingPolicyType = {
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfigurationType;
  };

  /**
   * Represents configuration for target tracking scaling policy.
   */
  export type TargetTrackingScalingPolicyConfigurationType = {
    DisableScaleIn?: boolean;

    ScaleInCooldown?: number;

    ScaleOutCooldown?: number;

    TargetValue: number;
  };

  /**
   * Represents replica specifications.
   */
  export type ReplicaSpecificationType = {
    Region: string;

    ReadCapacityUnits?: number;

    ReadCapacityAutoScaling?: AutoScalingSettingType;
  };

  /**
   * Resource schema for AWS::Cassandra::Table
   */
  export type TableResourceType = {
    /**
     * Name for Cassandra keyspace
     * Create-only property
     */
    KeyspaceName: string;

    /**
     * Name for Cassandra table
     * Create-only property
     */
    TableName?: string;

    /**
     * Non-key columns of the table
     */
    RegularColumns?: ColumnType[];

    /**
     * Partition key columns of the table
     * Create-only property
     */
    PartitionKeyColumns: ColumnType[];

    /**
     * Clustering key columns of the table
     * Create-only property
     */
    ClusteringKeyColumns?: ClusteringKeyColumnType[];

    BillingMode?: BillingModeType;

    /**
     * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
     */
    PointInTimeRecoveryEnabled?: boolean;

    /**
     * Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. False by default, once it is enabled it cannot be disabled again.
     * Create-only property
     */
    ClientSideTimestampsEnabled?: boolean;

    /**
     * An array of key-value pairs to apply to this resource
     */
    Tags?: TagType[];

    /**
     * Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.
     */
    DefaultTimeToLive?: number;

    EncryptionSpecification?: EncryptionSpecificationType;

    AutoScalingSpecifications?: AutoScalingSpecificationType;

    ReplicaSpecifications?: ReplicaSpecificationType[];
  };
}
