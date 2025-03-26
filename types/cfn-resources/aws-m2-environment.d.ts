/**
 * TypeScript definitions for AWS::M2::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a runtime environment that can run migrated mainframe applications.
 */
export namespace AWS_M2_Environment {
  /**
   * Defines the storage configuration for an Amazon EFS file system.
   */
  export type EfsStorageConfigurationType = {
    /**
     * The file system identifier.
     */
    FileSystemId: string;

    /**
     * The mount point for the file system.
     */
    MountPoint: string;
  };

  /**
   * The target platform for the environment.
   */
  export type EngineTypeType = {};

  /**
   * Defines the storage configuration for an Amazon FSx file system.
   */
  export type FsxStorageConfigurationType = {
    /**
     * The file system identifier.
     */
    FileSystemId: string;

    /**
     * The mount point for the file system.
     */
    MountPoint: string;
  };

  /**
   * Defines the details of a high availability configuration.
   */
  export type HighAvailabilityConfigType = {
    DesiredCapacity: number;
  };

  export type NetworkTypeType = {};

  /**
   * Defines the storage configuration for an environment.
   */
  export type StorageConfigurationType = {};

  /**
   * Defines tags associated to an environment.
   */
  export type TagMapType = {};

  /**
   * Represents a runtime environment that can run migrated mainframe applications.
   */
  export type EnvironmentResourceType = {
    /**
     * The description of the environment.
     * Create-only property
     */
    Description?: string;

    /**
     * Create-only property
     */
    EngineType: EngineTypeType;

    /**
     * The version of the runtime engine for the environment.
     */
    EngineVersion?: string;

    /**
     * The Amazon Resource Name (ARN) of the runtime environment.
     * Read-only property
     */
    EnvironmentArn?: string;

    /**
     * The unique identifier of the environment.
     * Read-only property
     */
    EnvironmentId?: string;

    HighAvailabilityConfig?: HighAvailabilityConfigType;

    /**
     * The type of instance underlying the environment.
     */
    InstanceType: string;

    /**
     * The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * The name of the environment.
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    NetworkType?: NetworkTypeType;

    /**
     * Configures a desired maintenance window for the environment. If you do not provide a value, a random system-generated value will be assigned.
     */
    PreferredMaintenanceWindow?: string;

    /**
     * Specifies whether the environment is publicly accessible.
     * Create-only property
     */
    PubliclyAccessible?: boolean;

    /**
     * The list of security groups for the VPC associated with this environment.
     * Create-only property
     */
    SecurityGroupIds?: string[];

    /**
     * The storage configurations defined for the runtime environment.
     * Create-only property
     */
    StorageConfigurations?: StorageConfigurationType[];

    /**
     * The unique identifiers of the subnets assigned to this runtime environment.
     * Create-only property
     */
    SubnetIds?: string[];

    /**
     * Tags associated to this environment.
     */
    Tags?: TagMapType;
  };
}
