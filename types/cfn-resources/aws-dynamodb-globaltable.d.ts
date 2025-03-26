/**
 * TypeScript definitions for AWS::DynamoDB::GlobalTable
 * Generated from CloudFormation Resource Schema
 */

/**
 * Version: None. Resource Type definition for AWS::DynamoDB::GlobalTable
 */
export namespace AWS_DynamoDB_GlobalTable {
  export type LocalSecondaryIndexType = {
    IndexName: string;

    Projection: ProjectionType;

    KeySchema: KeySchemaType[];
  };

  export type SSESpecificationType = {
    SSEEnabled: boolean;

    SSEType?: string;
  };

  export type KinesisStreamSpecificationType = {
    ApproximateCreationDateTimePrecision?: string;

    StreamArn: string;
  };

  export type StreamSpecificationType = {
    StreamViewType: string;
  };

  export type ContributorInsightsSpecificationType = {
    Enabled: boolean;
  };

  export type ReplicaSpecificationType = {
    SSESpecification?: ReplicaSSESpecificationType;

    KinesisStreamSpecification?: KinesisStreamSpecificationType;

    ContributorInsightsSpecification?: ContributorInsightsSpecificationType;

    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecificationType;

    ReplicaStreamSpecification?: ReplicaStreamSpecificationType;

    GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexSpecificationType[];

    Region: string;

    ResourcePolicy?: ResourcePolicyType;

    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettingsType;

    TableClass?: string;

    DeletionProtectionEnabled?: boolean;

    Tags?: TagType[];

    ReadOnDemandThroughputSettings?: ReadOnDemandThroughputSettingsType;
  };

  export type CapacityAutoScalingSettingsType = {
    MinCapacity: number;

    SeedCapacity?: number;

    TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfigurationType;

    MaxCapacity: number;
  };

  export type AttributeDefinitionType = {
    AttributeType: string;

    AttributeName: string;
  };

  export type ProjectionType = {
    NonKeyAttributes?: string[];

    ProjectionType?: string;
  };

  export type PointInTimeRecoverySpecificationType = {
    PointInTimeRecoveryEnabled?: boolean;

    RecoveryPeriodInDays?: number;
  };

  export type ReplicaGlobalSecondaryIndexSpecificationType = {
    IndexName: string;

    ContributorInsightsSpecification?: ContributorInsightsSpecificationType;

    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettingsType;

    ReadOnDemandThroughputSettings?: ReadOnDemandThroughputSettingsType;
  };

  export type WarmThroughputType = {
    ReadUnitsPerSecond?: number;

    WriteUnitsPerSecond?: number;
  };

  export type TargetTrackingScalingPolicyConfigurationType = {
    ScaleOutCooldown?: number;

    TargetValue: number;

    DisableScaleIn?: boolean;

    ScaleInCooldown?: number;
  };

  export type GlobalSecondaryIndexType = {
    IndexName: string;

    Projection: ProjectionType;

    KeySchema: KeySchemaType[];

    WarmThroughput?: WarmThroughputType;

    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettingsType;

    WriteOnDemandThroughputSettings?: WriteOnDemandThroughputSettingsType;
  };

  export type WriteProvisionedThroughputSettingsType = {
    WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettingsType;
  };

  export type WriteOnDemandThroughputSettingsType = {
    MaxWriteRequestUnits?: number;
  };

  export type ReplicaStreamSpecificationType = {
    ResourcePolicy: ResourcePolicyType;
  };

  export type ReplicaSSESpecificationType = {
    KMSMasterKeyId: string;
  };

  export type ResourcePolicyType = {
    PolicyDocument: Record<string, any>;
  };

  export type KeySchemaType = {
    KeyType: string;

    AttributeName: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type ReadProvisionedThroughputSettingsType = {
    ReadCapacityUnits?: number;

    ReadCapacityAutoScalingSettings?: CapacityAutoScalingSettingsType;
  };

  export type TimeToLiveSpecificationType = {
    Enabled: boolean;

    AttributeName?: string;
  };

  export type ReadOnDemandThroughputSettingsType = {
    MaxReadRequestUnits?: number;
  };

  /**
   * Version: None. Resource Type definition for AWS::DynamoDB::GlobalTable
   */
  export type GlobalTableResourceType = {
    /**
     * Read-only property
     */
    TableId?: string;

    SSESpecification?: SSESpecificationType;

    StreamSpecification?: StreamSpecificationType;

    WarmThroughput?: WarmThroughputType;

    Replicas: ReplicaSpecificationType[];

    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettingsType;

    WriteOnDemandThroughputSettings?: WriteOnDemandThroughputSettingsType;

    /**
     * Create-only property
     */
    TableName?: string;

    AttributeDefinitions: AttributeDefinitionType[];

    BillingMode?: string;

    GlobalSecondaryIndexes?: GlobalSecondaryIndexType[];

    /**
     * Create-only property
     */
    KeySchema: KeySchemaType[];

    /**
     * Create-only property
     */
    LocalSecondaryIndexes?: LocalSecondaryIndexType[];

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    StreamArn?: string;

    TimeToLiveSpecification?: TimeToLiveSpecificationType;
  };
}
