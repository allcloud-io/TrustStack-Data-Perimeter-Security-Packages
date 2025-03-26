/**
 * TypeScript definitions for AWS::DMS::ReplicationInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DMS::ReplicationInstance
 */
export namespace AWS_DMS_ReplicationInstance {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::DMS::ReplicationInstance
   */
  export type ReplicationInstanceResourceType = {
    ReplicationInstanceIdentifier?: string;

    EngineVersion?: string;

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    AvailabilityZone?: string;

    PreferredMaintenanceWindow?: string;

    AutoMinorVersionUpgrade?: boolean;

    /**
     * Create-only property
     */
    ReplicationSubnetGroupIdentifier?: string;

    /**
     * Read-only property
     */
    ReplicationInstancePrivateIpAddresses?: string;

    AllocatedStorage?: number;

    /**
     * Create-only property
     */
    ResourceIdentifier?: string;

    VpcSecurityGroupIds?: string[];

    NetworkType?: string;

    AllowMajorVersionUpgrade?: boolean;

    ReplicationInstanceClass: string;

    /**
     * Create-only property
     */
    PubliclyAccessible?: boolean;

    /**
     * Read-only property
     */
    Id?: string;

    MultiAZ?: boolean;

    /**
     * Read-only property
     */
    ReplicationInstancePublicIpAddresses?: string;

    Tags?: TagType[];
  };
}
