/**
 * TypeScript definitions for AWS::CodeBuild::Project
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeBuild::Project
 */
export namespace AWS_CodeBuild_Project {
  export type ProjectSourceVersionType = {
    SourceIdentifier: string;

    SourceVersion?: string;
  };

  export type VpcConfigType = {
    Subnets?: string[];

    VpcId?: string;

    SecurityGroupIds?: string[];
  };

  export type SourceAuthType = {
    Resource?: string;

    Type: string;
  };

  export type ScopeConfigurationType = {
    Name: string;
  };

  export type RegistryCredentialType = {
    Credential: string;

    CredentialProvider: string;
  };

  export type FilterGroupType = {};

  export type SourceType = {
    Type: string;

    ReportBuildStatus?: boolean;

    Auth?: SourceAuthType;

    SourceIdentifier?: string;

    BuildSpec?: string;

    GitCloneDepth?: number;

    BuildStatusConfig?: BuildStatusConfigType;

    GitSubmodulesConfig?: GitSubmodulesConfigType;

    InsecureSsl?: boolean;

    Location?: string;
  };

  export type ProjectCacheType = {
    Modes?: string[];

    Type: string;

    Location?: string;
  };

  export type ArtifactsType = {
    Path?: string;

    Type: string;

    ArtifactIdentifier?: string;

    OverrideArtifactName?: boolean;

    Packaging?: string;

    EncryptionDisabled?: boolean;

    Location?: string;

    Name?: string;

    NamespaceType?: string;
  };

  export type LogsConfigType = {
    CloudWatchLogs?: CloudWatchLogsConfigType;

    S3Logs?: S3LogsConfigType;
  };

  export type BatchRestrictionsType = {
    ComputeTypesAllowed?: string[];

    MaximumBuildsAllowed?: number;
  };

  export type ProjectBuildBatchConfigType = {
    CombineArtifacts?: boolean;

    ServiceRole?: string;

    BatchReportMode?: string;

    TimeoutInMins?: number;

    Restrictions?: BatchRestrictionsType;
  };

  export type CloudWatchLogsConfigType = {
    Status: string;

    GroupName?: string;

    StreamName?: string;
  };

  export type EnvironmentType = {
    Type: string;

    EnvironmentVariables?: EnvironmentVariableType[];

    Fleet?: ProjectFleetType;

    PrivilegedMode?: boolean;

    ImagePullCredentialsType?: string;

    Image: string;

    RegistryCredential?: RegistryCredentialType;

    ComputeType: string;

    Certificate?: string;
  };

  export type EnvironmentVariableType = {
    Value: string;

    Type?: string;

    Name: string;
  };

  export type ProjectFileSystemLocationType = {
    MountPoint: string;

    Type: string;

    Identifier: string;

    MountOptions?: string;

    Location: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type ProjectTriggersType = {
    BuildType?: string;

    FilterGroups?: FilterGroupType[];

    Webhook?: boolean;

    ScopeConfiguration?: ScopeConfigurationType;
  };

  export type BuildStatusConfigType = {
    Context?: string;

    TargetUrl?: string;
  };

  export type GitSubmodulesConfigType = {
    FetchSubmodules: boolean;
  };

  export type S3LogsConfigType = {
    Status: string;

    EncryptionDisabled?: boolean;

    Location?: string;
  };

  export type ProjectFleetType = {
    FleetArn?: string;
  };

  /**
   * Resource Type definition for AWS::CodeBuild::Project
   */
  export type ProjectResourceType = {
    Description?: string;

    ResourceAccessRole?: string;

    VpcConfig?: VpcConfigType;

    SecondarySources?: SourceType[];

    EncryptionKey?: string;

    SecondaryArtifacts?: ArtifactsType[];

    Source: SourceType;

    /**
     * Create-only property
     */
    Name?: string;

    LogsConfig?: LogsConfigType;

    ServiceRole: string;

    QueuedTimeoutInMinutes?: number;

    SecondarySourceVersions?: ProjectSourceVersionType[];

    Tags?: TagType[];

    AutoRetryLimit?: number;

    SourceVersion?: string;

    Triggers?: ProjectTriggersType;

    Artifacts: ArtifactsType;

    BadgeEnabled?: boolean;

    FileSystemLocations?: ProjectFileSystemLocationType[];

    Environment: EnvironmentType;

    ConcurrentBuildLimit?: number;

    Visibility?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    BuildBatchConfig?: ProjectBuildBatchConfigType;

    TimeoutInMinutes?: number;

    Cache?: ProjectCacheType;
  };
}
