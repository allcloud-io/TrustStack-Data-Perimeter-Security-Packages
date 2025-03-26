/**
 * TypeScript definitions for AWS::SageMaker::FeatureGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup
 */
export namespace AWS_SageMaker_FeatureGroup {
  export type FeatureDefinitionType = {
    FeatureName: string;

    FeatureType: string;
  };

  export type KmsKeyIdType = {};

  export type StorageTypeType = {};

  /**
   * TTL configuration of the feature group
   */
  export type TtlDurationType = {
    Unit?: UnitType;

    Value?: ValueType;
  };

  /**
   * Unit of ttl configuration
   */
  export type UnitType = {};

  /**
   * Value of ttl configuration
   */
  export type ValueType = {};

  export type OnlineStoreSecurityConfigType = {
    KmsKeyId?: KmsKeyIdType;
  };

  export type S3StorageConfigType = {
    S3Uri: string;

    KmsKeyId?: KmsKeyIdType;
  };

  export type DataCatalogConfigType = {
    TableName: string;

    Catalog: string;

    Database: string;
  };

  /**
   * Format for the offline store feature group. Iceberg is the optimal format for feature groups shared between offline and online stores.
   */
  export type TableFormatType = {};

  /**
   * Throughput mode configuration of the feature group
   */
  export type ThroughputModeType = {};

  export type ThroughputConfigType = {
    ThroughputMode: ThroughputModeType;

    /**
     * For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
     */
    ProvisionedReadCapacityUnits?: number;

    /**
     * For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
     */
    ProvisionedWriteCapacityUnits?: number;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::FeatureGroup
   */
  export type FeatureGroupResourceType = {
    /**
     * The Name of the FeatureGroup.
     * Create-only property
     */
    FeatureGroupName: string;

    /**
     * The Record Identifier Feature Name.
     * Create-only property
     */
    RecordIdentifierFeatureName: string;

    /**
     * The Event Time Feature Name.
     * Create-only property
     */
    EventTimeFeatureName: string;

    /**
     * An Array of Feature Definition
     */
    FeatureDefinitions: FeatureDefinitionType[];

    OnlineStoreConfig?: Record<string, any>;

    /**
     * Create-only property
     */
    OfflineStoreConfig?: Record<string, any>;

    ThroughputConfig?: ThroughputConfigType;

    /**
     * Role Arn
     * Create-only property
     */
    RoleArn?: string;

    /**
     * Description about the FeatureGroup.
     * Create-only property
     */
    Description?: string;

    /**
     * A timestamp of FeatureGroup creation time.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The status of the feature group.
     * Read-only property
     */
    FeatureGroupStatus?: string;

    /**
     * An array of key-value pair to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
