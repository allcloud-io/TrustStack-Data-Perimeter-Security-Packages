/**
 * TypeScript definitions for AWS::Timestream::Table
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Timestream::Table resource creates a Timestream Table.
 */
export namespace AWS_Timestream_Table {
  /**
   * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources.
   */
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * A list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.
   */
  export type PartitionKeyListType = {};

  /**
   * An attribute used in partitioning data in a table. There are two types of partition keys: dimension keys and measure keys. A dimension key partitions data on a dimension name, while a measure key partitions data on the measure name.
   */
  export type PartitionKeyType = {
    Type: PartitionKeyTypeType;

    Name?: SchemaNameType;

    EnforcementInRecord?: PartitionKeyEnforcementLevelType;
  };

  /**
   * The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).
   */
  export type PartitionKeyTypeType = {};

  /**
   * The name of the attribute used for a dimension key.
   */
  export type SchemaNameType = {};

  /**
   * The level of enforcement for the specification of a dimension key in ingested records. Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).
   */
  export type PartitionKeyEnforcementLevelType = {};

  /**
   * The AWS::Timestream::Table resource creates a Timestream Table.
   */
  export type TableResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The table name exposed as a read-only attribute.
     * Read-only property
     */
    Name?: string;

    /**
     * The name for the database which the table to be created belongs to.
     * Create-only property
     */
    DatabaseName: string;

    /**
     * The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
     * Create-only property
     */
    TableName?: string;

    /**
     * The retention duration of the memory store and the magnetic store.
     */
    RetentionProperties?: Record<string, any>;

    /**
     * A Schema specifies the expected data model of the table.
     */
    Schema?: Record<string, any>;

    /**
     * The properties that determine whether magnetic store writes are enabled.
     */
    MagneticStoreWriteProperties?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
