/**
 * TypeScript definitions for AWS::GreengrassV2::ComponentVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource for Greengrass component version.
 */
export namespace AWS_GreengrassV2_ComponentVersion {
  export type LambdaFunctionRecipeSourceType = {
    LambdaArn?: string;

    ComponentName?: string;

    ComponentVersion?: string;

    ComponentPlatforms?: ComponentPlatformType[];

    ComponentDependencies?: Record<string, any>;

    ComponentLambdaParameters?: LambdaExecutionParametersType;
  };

  export type ComponentPlatformType = {
    Name?: string;

    Attributes?: Record<string, any>;
  };

  export type ComponentDependencyRequirementType = {
    VersionRequirement?: string;

    DependencyType?: string;
  };

  export type LambdaExecutionParametersType = {
    EventSources?: LambdaEventSourceType[];

    MaxQueueSize?: number;

    MaxInstancesCount?: number;

    MaxIdleTimeInSeconds?: number;

    TimeoutInSeconds?: number;

    StatusTimeoutInSeconds?: number;

    Pinned?: boolean;

    InputPayloadEncodingType?: string;

    ExecArgs?: string[];

    EnvironmentVariables?: Record<string, any>;

    LinuxProcessParams?: LambdaLinuxProcessParamsType;
  };

  export type LambdaEventSourceType = {
    Topic?: string;

    Type?: string;
  };

  export type LambdaLinuxProcessParamsType = {
    IsolationMode?: string;

    ContainerParams?: LambdaContainerParamsType;
  };

  export type LambdaContainerParamsType = {
    MemorySizeInKB?: number;

    MountROSysfs?: boolean;

    Volumes?: LambdaVolumeMountType[];

    Devices?: LambdaDeviceMountType[];
  };

  export type LambdaVolumeMountType = {
    SourcePath?: FilesystemPathType;

    DestinationPath?: FilesystemPathType;

    Permission?: LambdaFilesystemPermissionType;

    AddGroupOwner?: LambdaAddGroupOwnerBooleanType;
  };

  export type LambdaDeviceMountType = {
    Path?: FilesystemPathType;

    Permission?: LambdaFilesystemPermissionType;

    AddGroupOwner?: LambdaAddGroupOwnerBooleanType;
  };

  export type FilesystemPathType = {};

  export type LambdaFilesystemPermissionType = {};

  export type LambdaAddGroupOwnerBooleanType = {};

  /**
   * Resource for Greengrass component version.
   */
  export type ComponentVersionResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    ComponentName?: string;

    /**
     * Read-only property
     */
    ComponentVersion?: string;

    /**
     * Create-only property
     */
    InlineRecipe?: string;

    /**
     * Create-only property
     */
    LambdaFunction?: LambdaFunctionRecipeSourceType;

    Tags?: Record<string, any>;
  };
}
