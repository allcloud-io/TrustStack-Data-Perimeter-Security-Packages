/**
 * TypeScript definitions for AWS::EC2::SnapshotBlockPublicAccess
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::SnapshotBlockPublicAccess
 */
export namespace AWS_EC2_SnapshotBlockPublicAccess {
  /**
   * Resource Type definition for AWS::EC2::SnapshotBlockPublicAccess
   */
  export type SnapshotBlockPublicAccessResourceType = {
    /**
     * The state of EBS Snapshot Block Public Access.
     */
    State: string;

    /**
     * The identifier for the specified AWS account.
     * Read-only property
     */
    AccountId?: string;
  };
}
