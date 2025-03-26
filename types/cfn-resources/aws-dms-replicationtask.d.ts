/**
 * TypeScript definitions for AWS::DMS::ReplicationTask
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DMS::ReplicationTask
 */
export namespace AWS_DMS_ReplicationTask {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::DMS::ReplicationTask
   */
  export type ReplicationTaskResourceType = {
    ReplicationTaskSettings?: string;

    CdcStartPosition?: string;

    CdcStopPosition?: string;

    MigrationType: string;

    /**
     * Create-only property
     */
    TargetEndpointArn: string;

    /**
     * Create-only property
     */
    ReplicationInstanceArn: string;

    TaskData?: string;

    CdcStartTime?: number;

    /**
     * Create-only property
     */
    ResourceIdentifier?: string;

    TableMappings: string;

    ReplicationTaskIdentifier?: string;

    /**
     * Create-only property
     */
    SourceEndpointArn: string;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
