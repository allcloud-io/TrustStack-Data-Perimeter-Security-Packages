/**
 * TypeScript definitions for AWS::FSx::Snapshot
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::FSx::Snapshot
 */
export namespace AWS_FSx_Snapshot {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::FSx::Snapshot
   */
  export type SnapshotResourceType = {
    /**
     * Read-only property
     */
    ResourceARN?: string;

    /**
     * Create-only property
     */
    VolumeId: string;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];

    Name: string;
  };
}
