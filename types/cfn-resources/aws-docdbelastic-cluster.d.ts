/**
 * TypeScript definitions for AWS::DocDBElastic::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::DocDBElastic::Cluster Amazon DocumentDB (with MongoDB compatibility) Elastic Scale resource describes a Cluster
 */
export namespace AWS_DocDBElastic_Cluster {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The AWS::DocDBElastic::Cluster Amazon DocumentDB (with MongoDB compatibility) Elastic Scale resource describes a Cluster
   */
  export type ClusterResourceType = {
    /**
     * Create-only property
     */
    ClusterName: string;

    /**
     * Read-only property
     */
    ClusterArn?: string;

    /**
     * Read-only property
     */
    ClusterEndpoint?: string;

    /**
     * Create-only property
     */
    AdminUserName: string;

    AdminUserPassword?: string;

    ShardCapacity: number;

    ShardCount: number;

    VpcSecurityGroupIds?: string[];

    SubnetIds?: string[];

    PreferredMaintenanceWindow?: string;

    PreferredBackupWindow?: string;

    BackupRetentionPeriod?: number;

    ShardInstanceCount?: number;

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    AuthType: string;
  };
}
