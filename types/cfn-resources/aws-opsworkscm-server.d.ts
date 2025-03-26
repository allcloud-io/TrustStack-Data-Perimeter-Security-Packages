/**
 * TypeScript definitions for AWS::OpsWorksCM::Server
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::OpsWorksCM::Server
 */
export namespace AWS_OpsWorksCM_Server {
  export type EngineAttributeType = {
    Value?: string;

    Name?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::OpsWorksCM::Server
   */
  export type ServerResourceType = {
    /**
     * Create-only property
     */
    KeyPair?: string;

    /**
     * Create-only property
     */
    EngineVersion?: string;

    /**
     * Create-only property
     */
    ServiceRoleArn: string;

    DisableAutomatedBackup?: boolean;

    /**
     * Create-only property
     */
    BackupId?: string;

    /**
     * Create-only property
     */
    EngineModel?: string;

    PreferredMaintenanceWindow?: string;

    /**
     * Create-only property
     */
    AssociatePublicIpAddress?: boolean;

    /**
     * Create-only property
     */
    InstanceProfileArn: string;

    /**
     * Create-only property
     */
    CustomCertificate?: string;

    PreferredBackupWindow?: string;

    /**
     * Create-only property
     */
    SecurityGroupIds?: string[];

    /**
     * Create-only property
     */
    SubnetIds?: string[];

    /**
     * Create-only property
     */
    CustomDomain?: string;

    /**
     * Read-only property
     */
    Endpoint?: string;

    /**
     * Create-only property
     */
    CustomPrivateKey?: string;

    /**
     * Read-only property
     * Create-only property
     */
    ServerName?: string;

    EngineAttributes?: EngineAttributeType[];

    BackupRetentionCount?: number;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    InstanceType: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Engine?: string;
  };
}
