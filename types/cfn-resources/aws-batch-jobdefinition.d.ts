/**
 * TypeScript definitions for AWS::Batch::JobDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Batch::JobDefinition
 */
export namespace AWS_Batch_JobDefinition {
  export type JobTimeoutType = {
    AttemptDurationSeconds?: number;
  };

  export type EksContainerEnvironmentVariableType = {
    Value?: string;

    Name: string;
  };

  export type NodeRangePropertyType = {
    Container?: MultiNodeContainerPropertiesType;

    TargetNodes: string;

    EcsProperties?: MultiNodeEcsPropertiesType;

    InstanceTypes?: string[];

    EksProperties?: EksPropertiesType;

    ConsumableResourceProperties?: ConsumableResourcePropertiesType;
  };

  export type EksEmptyDirType = {
    Medium?: string;

    SizeLimit?: string;
  };

  export type LogConfigurationType = {
    SecretOptions?: SecretType[];

    Options?: Record<string, any>;

    LogDriver: string;
  };

  export type RuntimePlatformType = {
    OperatingSystemFamily?: string;

    CpuArchitecture?: string;
  };

  export type MultiNodeEcsTaskPropertiesType = {
    ExecutionRoleArn?: string;

    TaskRoleArn?: string;

    IpcMode?: string;

    Volumes?: VolumeType[];

    Containers?: TaskContainerPropertiesType[];

    PidMode?: string;
  };

  export type EksPersistentVolumeClaimType = {
    ReadOnly?: boolean;

    ClaimName: string;
  };

  export type NodePropertiesType = {
    MainNode: number;

    NodeRangeProperties: NodeRangePropertyType[];

    NumNodes: number;
  };

  export type TmpfsType = {
    Size: number;

    ContainerPath: string;

    MountOptions?: string[];
  };

  export type TaskContainerDependencyType = {
    Condition: string;

    ContainerName: string;
  };

  export type ContainerPropertiesType = {
    RepositoryCredentials?: RepositoryCredentialsType;

    User?: string;

    Secrets?: SecretType[];

    Memory?: number;

    Privileged?: boolean;

    LinuxParameters?: LinuxParametersType;

    FargatePlatformConfiguration?: Record<string, any>;

    JobRoleArn?: string;

    ReadonlyRootFilesystem?: boolean;

    Vcpus?: number;

    Image: string;

    ResourceRequirements?: ResourceRequirementType[];

    LogConfiguration?: LogConfigurationType;

    MountPoints?: MountPointType[];

    ExecutionRoleArn?: string;

    RuntimePlatform?: RuntimePlatformType;

    Volumes?: VolumeType[];

    Command?: string[];

    Environment?: EnvironmentType[];

    Ulimits?: UlimitType[];

    NetworkConfiguration?: NetworkConfigurationType;

    EphemeralStorage?: EphemeralStorageType;
  };

  export type EcsPropertiesType = {
    TaskProperties: EcsTaskPropertiesType[];
  };

  export type EksContainerResourceRequirementsType = {
    Limits?: Record<string, any>;

    Requests?: Record<string, any>;
  };

  export type NetworkConfigurationType = {
    AssignPublicIp?: string;
  };

  export type EcsTaskPropertiesType = {
    PlatformVersion?: string;

    ExecutionRoleArn?: string;

    RuntimePlatform?: RuntimePlatformType;

    TaskRoleArn?: string;

    IpcMode?: string;

    Volumes?: VolumeType[];

    Containers?: TaskContainerPropertiesType[];

    NetworkConfiguration?: NetworkConfigurationType;

    PidMode?: string;

    EphemeralStorage?: EphemeralStorageType;
  };

  export type EksContainerSecurityContextType = {
    RunAsUser?: number;

    AllowPrivilegeEscalation?: boolean;

    RunAsNonRoot?: boolean;

    Privileged?: boolean;

    ReadOnlyRootFilesystem?: boolean;

    RunAsGroup?: number;
  };

  export type TaskContainerPropertiesType = {
    RepositoryCredentials?: RepositoryCredentialsType;

    User?: string;

    Secrets?: SecretType[];

    Privileged?: boolean;

    LinuxParameters?: LinuxParametersType;

    ReadonlyRootFilesystem?: boolean;

    Image: string;

    LogConfiguration?: LogConfigurationType;

    Essential?: boolean;

    ResourceRequirements?: ResourceRequirementType[];

    Name?: string;

    MountPoints?: MountPointType[];

    DependsOn?: TaskContainerDependencyType[];

    Command?: string[];

    Environment?: EnvironmentType[];

    Ulimits?: UlimitType[];
  };

  export type EksMetadataType = {
    Annotations?: Record<string, any>;

    Labels?: Record<string, any>;

    Namespace?: string;
  };

  export type EksSecretType = {
    SecretName: string;

    Optional?: boolean;
  };

  export type RepositoryCredentialsType = {
    CredentialsParameter: string;
  };

  export type EFSVolumeConfigurationType = {
    TransitEncryption?: string;

    AuthorizationConfig?: EFSAuthorizationConfigType;

    FileSystemId: string;

    RootDirectory?: string;

    TransitEncryptionPort?: number;
  };

  export type ImagePullSecretType = {
    Name?: string;
  };

  export type EvaluateOnExitType = {
    Action: string;

    OnExitCode?: string;

    OnReason?: string;

    OnStatusReason?: string;
  };

  export type MultiNodeEcsPropertiesType = {
    TaskProperties: MultiNodeEcsTaskPropertiesType[];
  };

  export type DeviceType = {
    HostPath?: string;

    Permissions?: string[];

    ContainerPath?: string;
  };

  export type LinuxParametersType = {
    Swappiness?: number;

    Tmpfs?: TmpfsType[];

    SharedMemorySize?: number;

    Devices?: DeviceType[];

    InitProcessEnabled?: boolean;

    MaxSwap?: number;
  };

  export type UlimitType = {
    SoftLimit: number;

    HardLimit: number;

    Name: string;
  };

  export type HostType = {
    SourcePath?: string;
  };

  export type EFSAuthorizationConfigType = {
    Iam?: string;

    AccessPointId?: string;
  };

  export type EksVolumeType = {
    Secret?: EksSecretType;

    EmptyDir?: EksEmptyDirType;

    HostPath?: EksHostPathType;

    PersistentVolumeClaim?: EksPersistentVolumeClaimType;

    Name: string;
  };

  export type EksContainerVolumeMountType = {
    MountPath?: string;

    ReadOnly?: boolean;

    SubPath?: string;

    Name?: string;
  };

  export type EksPropertiesType = {
    PodProperties?: EksPodPropertiesType;
  };

  export type ConsumableResourcePropertiesType = {
    ConsumableResourceList: ConsumableResourceRequirementType[];
  };

  export type MultiNodeContainerPropertiesType = {
    RepositoryCredentials?: RepositoryCredentialsType;

    User?: string;

    Secrets?: SecretType[];

    Memory?: number;

    Privileged?: boolean;

    LinuxParameters?: LinuxParametersType;

    JobRoleArn?: string;

    ReadonlyRootFilesystem?: boolean;

    Vcpus?: number;

    Image: string;

    ResourceRequirements?: ResourceRequirementType[];

    LogConfiguration?: LogConfigurationType;

    MountPoints?: MountPointType[];

    ExecutionRoleArn?: string;

    RuntimePlatform?: RuntimePlatformType;

    Volumes?: VolumeType[];

    Command?: string[];

    Environment?: EnvironmentType[];

    Ulimits?: UlimitType[];

    InstanceType?: string;

    EphemeralStorage?: EphemeralStorageType;
  };

  export type MountPointType = {
    ReadOnly?: boolean;

    SourceVolume?: string;

    ContainerPath?: string;
  };

  export type SecretType = {
    ValueFrom: string;

    Name: string;
  };

  export type VolumeType = {
    Host?: HostType;

    EfsVolumeConfiguration?: EFSVolumeConfigurationType;

    Name?: string;
  };

  export type EksHostPathType = {
    Path?: string;
  };

  export type ConsumableResourceRequirementType = {
    /**
     * The ARN of the consumable resource the job definition should consume.
     */
    ConsumableResource: string;

    Quantity: number;
  };

  export type EnvironmentType = {
    Value?: string;

    Name?: string;
  };

  export type ResourceRequirementType = {
    Type?: string;

    Value?: string;
  };

  export type EphemeralStorageType = {
    SizeInGiB: number;
  };

  export type EksContainerType = {
    Args?: string[];

    VolumeMounts?: EksContainerVolumeMountType[];

    ImagePullPolicy?: string;

    Command?: string[];

    SecurityContext?: EksContainerSecurityContextType;

    Resources?: EksContainerResourceRequirementsType;

    Image: string;

    Env?: EksContainerEnvironmentVariableType[];

    Name?: string;
  };

  export type RetryStrategyType = {
    EvaluateOnExit?: EvaluateOnExitType[];

    Attempts?: number;
  };

  export type EksPodPropertiesType = {
    InitContainers?: EksContainerType[];

    Volumes?: EksVolumeType[];

    DnsPolicy?: string;

    Containers?: EksContainerType[];

    Metadata?: EksMetadataType;

    ServiceAccountName?: string;

    ImagePullSecrets?: ImagePullSecretType[];

    HostNetwork?: boolean;

    ShareProcessNamespace?: boolean;
  };

  /**
   * Resource Type definition for AWS::Batch::JobDefinition
   */
  export type JobDefinitionResourceType = {
    Parameters?: Record<string, any>;

    Timeout?: JobTimeoutType;

    /**
     * Create-only property
     */
    JobDefinitionName?: string;

    PropagateTags?: boolean;

    PlatformCapabilities?: string[];

    EksProperties?: EksPropertiesType;

    ConsumableResourceProperties?: ConsumableResourcePropertiesType;

    Type: string;

    NodeProperties?: NodePropertiesType;

    SchedulingPriority?: number;

    ContainerProperties?: ContainerPropertiesType;

    EcsProperties?: EcsPropertiesType;

    RetryStrategy?: RetryStrategyType;

    /**
     * A key-value pair to associate with a resource.
     */
    Tags?: Record<string, any>;
  };
}
