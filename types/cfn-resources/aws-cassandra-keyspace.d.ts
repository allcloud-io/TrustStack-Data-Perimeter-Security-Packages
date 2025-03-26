/**
 * TypeScript definitions for AWS::Cassandra::Keyspace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Cassandra::Keyspace
 */
export namespace AWS_Cassandra_Keyspace {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type ReplicationSpecificationType = {
    ReplicationStrategy?: string;

    RegionList?: RegionListType;
  };

  export type RegionListType = {};

  /**
   * Resource schema for AWS::Cassandra::Keyspace
   */
  export type KeyspaceResourceType = {
    /**
     * Name for Cassandra keyspace
     * Create-only property
     */
    KeyspaceName?: string;

    Tags?: TagType[];

    ReplicationSpecification?: ReplicationSpecificationType;

    /**
     * Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you enabled client-side timestamps for a table, you can’t disable it again.
     */
    ClientSideTimestampsEnabled?: boolean;
  };
}
