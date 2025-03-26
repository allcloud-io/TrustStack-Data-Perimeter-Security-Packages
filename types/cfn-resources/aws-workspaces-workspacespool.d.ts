/**
 * TypeScript definitions for AWS::WorkSpaces::WorkspacesPool
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WorkSpaces::WorkspacesPool
 */
export namespace AWS_WorkSpaces_WorkspacesPool {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type ApplicationSettingsStatusType = {};

  export type CapacityType = {
    DesiredUserSessions: number;
  };

  export type ApplicationSettingsType = {
    Status: ApplicationSettingsStatusType;

    SettingsGroup?: string;
  };

  export type TimeoutSettingsType = {
    DisconnectTimeoutInSeconds?: number;

    IdleDisconnectTimeoutInSeconds?: number;

    MaxUserDurationInSeconds?: number;
  };

  /**
   * Resource Type definition for AWS::WorkSpaces::WorkspacesPool
   */
  export type WorkspacesPoolResourceType = {
    /**
     * Read-only property
     */
    PoolId?: string;

    /**
     * Read-only property
     */
    PoolArn?: string;

    Capacity: CapacityType;

    /**
     * Create-only property
     */
    PoolName: string;

    Description?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    BundleId: string;

    DirectoryId: string;

    ApplicationSettings?: ApplicationSettingsType;

    TimeoutSettings?: TimeoutSettingsType;

    Tags?: TagType[];
  };
}
