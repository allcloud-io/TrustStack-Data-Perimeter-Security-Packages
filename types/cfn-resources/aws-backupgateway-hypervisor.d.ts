/**
 * TypeScript definitions for AWS::BackupGateway::Hypervisor
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::BackupGateway::Hypervisor Resource Type
 */
export namespace AWS_BackupGateway_Hypervisor {
  export type HypervisorStateType = {};

  export type SyncMetadataStatusType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::BackupGateway::Hypervisor Resource Type
   */
  export type HypervisorResourceType = {
    Host?: string;

    /**
     * Read-only property
     */
    HypervisorArn?: string;

    /**
     * Create-only property
     */
    KmsKeyArn?: string;

    LogGroupArn?: string;

    Name?: string;

    Password?: string;

    /**
     * Create-only property
     */
    Tags?: TagType[];

    Username?: string;
  };
}
