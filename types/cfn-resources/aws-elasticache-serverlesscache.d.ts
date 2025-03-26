/**
 * TypeScript definitions for AWS::ElastiCache::ServerlessCache
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::ElastiCache::ServerlessCache resource creates an Amazon ElastiCache Serverless Cache.
 */
export namespace AWS_ElastiCache_ServerlessCache {
  /**
   * The cache capacity limit of the Serverless Cache.
   */
  export type CacheUsageLimitsType = {
    DataStorage?: DataStorageType;

    ECPUPerSecond?: ECPUPerSecondType;
  };

  /**
   * The cached data capacity of the Serverless Cache.
   */
  export type DataStorageType = {
    /**
     * The minimum cached data capacity of the Serverless Cache.
     */
    Minimum?: number;

    /**
     * The maximum cached data capacity of the Serverless Cache.
     */
    Maximum?: number;

    /**
     * The unit of cached data capacity of the Serverless Cache.
     */
    Unit: string;
  };

  /**
   * The ECPU per second of the Serverless Cache.
   */
  export type ECPUPerSecondType = {
    /**
     * The minimum ECPU per second of the Serverless Cache.
     */
    Minimum?: number;

    /**
     * The maximum ECPU per second of the Serverless Cache.
     */
    Maximum?: number;
  };

  /**
   * A key-value pair to associate with Serverless Cache.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * The address and the port.
   */
  export type EndpointType = {
    /**
     * Endpoint address.
     */
    Address?: string;

    /**
     * Endpoint port.
     */
    Port?: string;
  };

  /**
   * The AWS::ElastiCache::ServerlessCache resource creates an Amazon ElastiCache Serverless Cache.
   */
  export type ServerlessCacheResourceType = {
    /**
     * The name of the Serverless Cache. This value must be unique.
     * Create-only property
     */
    ServerlessCacheName: string;

    /**
     * The description of the Serverless Cache.
     */
    Description?: string;

    /**
     * The engine name of the Serverless Cache.
     */
    Engine: string;

    /**
     * The major engine version of the Serverless Cache.
     */
    MajorEngineVersion?: string;

    /**
     * The full engine version of the Serverless Cache.
     * Read-only property
     */
    FullEngineVersion?: string;

    CacheUsageLimits?: CacheUsageLimitsType;

    /**
     * The ID of the KMS key used to encrypt the cluster.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * One or more Amazon VPC security groups associated with this Serverless Cache.
     */
    SecurityGroupIds?: string[];

    /**
     * The ARN's of snapshot to restore Serverless Cache.
     * Create-only property
     */
    SnapshotArnsToRestore?: string[];

    /**
     * An array of key-value pairs to apply to this Serverless Cache.
     */
    Tags?: TagType[];

    /**
     * The ID of the user group.
     */
    UserGroupId?: string;

    /**
     * The subnet id's of the Serverless Cache.
     * Create-only property
     */
    SubnetIds?: string[];

    /**
     * The snapshot retention limit of the Serverless Cache.
     */
    SnapshotRetentionLimit?: number;

    /**
     * The daily time range (in UTC) during which the service takes automatic snapshot of the Serverless Cache.
     */
    DailySnapshotTime?: string;

    /**
     * The creation time of the Serverless Cache.
     * Read-only property
     */
    CreateTime?: string;

    /**
     * The status of the Serverless Cache.
     * Read-only property
     */
    Status?: string;

    Endpoint?: EndpointType;

    ReaderEndpoint?: EndpointType;

    /**
     * The ARN of the Serverless Cache.
     * Read-only property
     */
    ARN?: string;

    /**
     * The final snapshot name which is taken before Serverless Cache is deleted.
     */
    FinalSnapshotName?: string;
  };
}
