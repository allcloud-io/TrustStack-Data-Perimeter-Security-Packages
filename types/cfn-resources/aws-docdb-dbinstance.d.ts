/**
 * TypeScript definitions for AWS::DocDB::DBInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DocDB::DBInstance
 */
export namespace AWS_DocDB_DBInstance {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::DocDB::DBInstance
   */
  export type DBInstanceResourceType = {
    DBInstanceClass: string;

    /**
     * Read-only property
     */
    Port?: string;

    /**
     * Create-only property
     */
    DBClusterIdentifier: string;

    /**
     * Create-only property
     */
    AvailabilityZone?: string;

    PreferredMaintenanceWindow?: string;

    EnablePerformanceInsights?: boolean;

    AutoMinorVersionUpgrade?: boolean;

    /**
     * Create-only property
     */
    DBInstanceIdentifier?: string;

    CACertificateIdentifier?: string;

    CertificateRotationRestart?: boolean;

    /**
     * Read-only property
     */
    Endpoint?: string;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
