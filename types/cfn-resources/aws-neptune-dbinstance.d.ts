/**
 * TypeScript definitions for AWS::Neptune::DBInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Neptune::DBInstance
 */
export namespace AWS_Neptune_DBInstance {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::Neptune::DBInstance
   */
  export type DBInstanceResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Endpoint?: string;

    /**
     * Read-only property
     */
    Port?: string;

    DBParameterGroupName?: string;

    DBInstanceClass: string;

    AllowMajorVersionUpgrade?: boolean;

    /**
     * Create-only property
     */
    DBClusterIdentifier?: string;

    /**
     * Create-only property
     */
    AvailabilityZone?: string;

    PreferredMaintenanceWindow?: string;

    AutoMinorVersionUpgrade?: boolean;

    /**
     * Create-only property
     */
    DBSubnetGroupName?: string;

    /**
     * Create-only property
     */
    DBInstanceIdentifier?: string;

    /**
     * Create-only property
     */
    DBSnapshotIdentifier?: string;

    Tags?: TagType[];
  };
}
