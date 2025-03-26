/**
 * TypeScript definitions for AWS::GameLift::ContainerGroupDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::ContainerGroupDefinition resource creates an Amazon GameLift container group definition.
 */
export namespace AWS_GameLift_ContainerGroupDefinition {
  /**
   * A set of one or more port numbers that can be opened on the container.
   */
  export type ContainerPortRangeType = {
    /**
     * A starting value for the range of allowed port numbers.
     */
    FromPort: number;

    /**
     * Defines the protocol of these ports.
     */
    Protocol: string;

    /**
     * An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than FromPort.
     */
    ToPort: number;
  };

  /**
   * Specifies how the process manager checks the health of containers.
   */
  export type ContainerHealthCheckType = {
    /**
     * A string array representing the command that the container runs to determine if it is healthy.
     */
    Command: string[];

    /**
     * How often (in seconds) the health is checked.
     */
    Interval?: number;

    /**
     * How many seconds the process manager allows the command to run before canceling it.
     */
    Timeout?: number;

    /**
     * How many times the process manager will retry the command after a timeout. (The first run of the command does not count as a retry.)
     */
    Retries?: number;

    /**
     * The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.
     */
    StartPeriod?: number;
  };

  /**
   * Defines the ports on a container.
   */
  export type PortConfigurationType = {
    /**
     * Specifies one or more ranges of ports on a container.
     */
    ContainerPortRanges: ContainerPortRangeType[];
  };

  /**
   * An environment variable to set inside a container, in the form of a key-value pair.
   */
  export type ContainerEnvironmentType = {
    /**
     * The environment variable name.
     */
    Name: string;

    /**
     * The environment variable value.
     */
    Value: string;
  };

  /**
   * Defines the mount point configuration within a container.
   */
  export type ContainerMountPointType = {
    /**
     * The path on the host that will be mounted in the container.
     */
    InstancePath: string;

    /**
     * The path inside the container where the mount is accessible.
     */
    ContainerPath?: string;

    /**
     * The access permissions for the mounted path.
     */
    AccessLevel?: string;
  };

  /**
   * A dependency that impacts a container's startup and shutdown.
   */
  export type ContainerDependencyType = {
    /**
     * A descriptive label for the container definition. The container being defined depends on this container's condition.
     */
    ContainerName: string;

    /**
     * The type of dependency.
     */
    Condition: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
     */
    Value: string;
  };

  /**
   * Specifies the information required to run game servers with this container group
   */
  export type GameServerContainerDefinitionType = {
    /**
     * A descriptive label for the container definition. Container definition names must be unique with a container group definition.
     */
    ContainerName: string;

    /**
     * A list of container dependencies that determines when this container starts up and shuts down. For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.
     */
    DependsOn?: ContainerDependencyType[];

    /**
     * The version of the server SDK used in this container group
     */
    ServerSdkVersion: string;

    /**
     * Specifies the image URI of this container.
     */
    ImageUri: string;

    /**
     * The digest of the container image.
     */
    ResolvedImageDigest?: string;

    /**
     * The environment variables to pass to a container.
     */
    EnvironmentOverride?: ContainerEnvironmentType[];

    /**
     * Defines the ports on the container.
     */
    PortConfiguration?: PortConfigurationType;

    /**
     * A list of mount point configurations to be used in a container.
     */
    MountPoints?: ContainerMountPointType[];
  };

  /**
   * Supports the function of the main container group
   */
  export type SupportContainerDefinitionType = {
    /**
     * A descriptive label for the container definition.
     */
    ContainerName: string;

    /**
     * The number of virtual CPUs to give to the support group
     */
    Vcpu?: number;

    /**
     * A list of container dependencies that determines when this container starts up and shuts down. For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.
     */
    DependsOn?: ContainerDependencyType[];

    /**
     * Specifies if the container is essential. If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group.
     */
    Essential?: boolean;

    /**
     * Specifies the image URI of this container.
     */
    ImageUri: string;

    /**
     * The digest of the container image.
     */
    ResolvedImageDigest?: string;

    /**
     * The total memory limit of container groups following this definition in MiB
     */
    MemoryHardLimitMebibytes?: number;

    /**
     * The environment variables to pass to a container.
     */
    EnvironmentOverride?: ContainerEnvironmentType[];

    /**
     * Defines the ports on the container.
     */
    PortConfiguration?: PortConfigurationType;

    /**
     * Specifies how the health of the containers will be checked.
     */
    HealthCheck?: ContainerHealthCheckType;

    /**
     * A list of mount point configurations to be used in a container.
     */
    MountPoints?: ContainerMountPointType[];
  };

  /**
   * The AWS::GameLift::ContainerGroupDefinition resource creates an Amazon GameLift container group definition.
   */
  export type ContainerGroupDefinitionResourceType = {
    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container group resource and uniquely identifies it across all AWS Regions.
     * Read-only property
     */
    ContainerGroupDefinitionArn?: string;

    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The operating system of the container group
     */
    OperatingSystem: string;

    /**
     * A descriptive label for the container group definition.
     * Create-only property
     */
    Name: string;

    /**
     * The scope of the container group
     * Create-only property
     */
    ContainerGroupType?: string;

    /**
     * The total memory limit of container groups following this definition in MiB
     */
    TotalMemoryLimitMebibytes: number;

    /**
     * The total amount of virtual CPUs on the container group definition
     */
    TotalVcpuLimit: number;

    GameServerContainerDefinition?: GameServerContainerDefinitionType;

    /**
     * A collection of support container definitions that define the containers in this group.
     */
    SupportContainerDefinitions?: SupportContainerDefinitionType[];

    /**
     * The version of this ContainerGroupDefinition
     * Read-only property
     */
    VersionNumber?: number;

    /**
     * A specific ContainerGroupDefinition version to be updated
     */
    SourceVersionNumber?: number;

    /**
     * The description of this version
     */
    VersionDescription?: string;

    /**
     * A string indicating ContainerGroupDefinition status.
     * Read-only property
     */
    Status?: string;

    /**
     * A string indicating the reason for ContainerGroupDefinition status.
     * Read-only property
     */
    StatusReason?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
