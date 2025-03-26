/**
 * TypeScript definitions for AWS::IoTAnalytics::Datastore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoTAnalytics::Datastore
 */
export namespace AWS_IoTAnalytics_Datastore {
  export type DatastoreStorageType = {
    ServiceManagedS3?: ServiceManagedS3Type;

    CustomerManagedS3?: CustomerManagedS3Type;

    IotSiteWiseMultiLayerStorage?: IotSiteWiseMultiLayerStorageType;
  };

  export type SchemaDefinitionType = {
    Columns?: ColumnType[];
  };

  export type JsonConfigurationType = {};

  export type ParquetConfigurationType = {
    SchemaDefinition?: SchemaDefinitionType;
  };

  export type FileFormatConfigurationType = {
    JsonConfiguration?: JsonConfigurationType;

    ParquetConfiguration?: ParquetConfigurationType;
  };

  export type ColumnType = {
    Type: string;

    Name: string;
  };

  export type CustomerManagedS3Type = {
    Bucket: string;

    RoleArn: string;

    KeyPrefix?: string;
  };

  export type IotSiteWiseMultiLayerStorageType = {
    CustomerManagedS3Storage?: CustomerManagedS3StorageType;
  };

  export type CustomerManagedS3StorageType = {
    Bucket: string;

    KeyPrefix?: string;
  };

  export type ServiceManagedS3Type = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type RetentionPeriodType = {
    NumberOfDays?: number;

    Unlimited?: boolean;
  };

  export type DatastorePartitionsType = {
    Partitions?: DatastorePartitionType[];
  };

  export type DatastorePartitionType = {
    Partition?: PartitionType;

    TimestampPartition?: TimestampPartitionType;
  };

  export type PartitionType = {
    AttributeName: string;
  };

  export type TimestampPartitionType = {
    AttributeName: string;

    TimestampFormat?: string;
  };

  /**
   * Resource Type definition for AWS::IoTAnalytics::Datastore
   */
  export type DatastoreResourceType = {
    DatastoreStorage?: DatastoreStorageType;

    /**
     * Create-only property
     */
    DatastoreName?: string;

    DatastorePartitions?: DatastorePartitionsType;

    /**
     * Read-only property
     */
    Id?: string;

    FileFormatConfiguration?: FileFormatConfigurationType;

    RetentionPeriod?: RetentionPeriodType;

    Tags?: TagType[];
  };
}
