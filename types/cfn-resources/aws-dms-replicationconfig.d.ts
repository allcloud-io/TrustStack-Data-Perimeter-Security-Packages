/**
 * TypeScript definitions for AWS::DMS::ReplicationConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * A replication configuration that you later provide to configure and start a AWS DMS Serverless replication
 */
export namespace AWS_DMS_ReplicationConfig {
  /**
   * Configuration parameters for provisioning a AWS DMS Serverless replication
   */
  export type ComputeConfigType = {
    AvailabilityZone?: string;

    DnsNameServers?: string;

    KmsKeyId?: string;

    MaxCapacityUnits: number;

    MinCapacityUnits?: number;

    MultiAZ?: boolean;

    PreferredMaintenanceWindow?: string;

    ReplicationSubnetGroupId?: string;

    VpcSecurityGroupIds?: string[];
  };

  /**
   * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
   * resource.</p>
   */
  export type TagType = {
    /**
     * <p>Tag key.</p>
     */
    Key: string;

    /**
     * <p>Tag value.</p>
     */
    Value: string;
  };

  /**
   * A replication configuration that you later provide to configure and start a AWS DMS Serverless replication
   */
  export type ReplicationConfigResourceType = {
    /**
     * A unique identifier of replication configuration
     */
    ReplicationConfigIdentifier: string;

    /**
     * The Amazon Resource Name (ARN) of the Replication Config
     * Read-only property
     */
    ReplicationConfigArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
     */
    SourceEndpointArn: string;

    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration
     */
    TargetEndpointArn: string;

    /**
     * The type of AWS DMS Serverless replication to provision using this replication configuration
     */
    ReplicationType: string;

    ComputeConfig: ComputeConfigType;

    /**
     * JSON settings for Servereless replications that are provisioned using this replication configuration
     */
    ReplicationSettings?: Record<string, any>;

    /**
     * JSON settings for specifying supplemental data
     */
    SupplementalSettings?: Record<string, any>;

    /**
     * A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource
     * Create-only property
     */
    ResourceIdentifier?: string;

    /**
     * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
     */
    TableMappings: Record<string, any>;

    /**
     * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
     */
    Tags?: TagType[];
  };
}
