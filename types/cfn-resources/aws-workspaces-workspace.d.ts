/**
 * TypeScript definitions for AWS::WorkSpaces::Workspace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WorkSpaces::Workspace
 */
export namespace AWS_WorkSpaces_Workspace {
  export type WorkspacePropertiesType = {
    ComputeTypeName?: string;

    RootVolumeSizeGib?: number;

    RunningMode?: string;

    RunningModeAutoStopTimeoutInMinutes?: number;

    UserVolumeSizeGib?: number;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::WorkSpaces::Workspace
   */
  export type WorkspaceResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    BundleId: string;

    DirectoryId: string;

    RootVolumeEncryptionEnabled?: boolean;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    UserName: string;

    UserVolumeEncryptionEnabled?: boolean;

    VolumeEncryptionKey?: string;

    WorkspaceProperties?: WorkspacePropertiesType;
  };
}
