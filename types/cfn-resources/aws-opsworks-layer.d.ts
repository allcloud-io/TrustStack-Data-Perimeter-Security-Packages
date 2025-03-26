/**
 * TypeScript definitions for AWS::OpsWorks::Layer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::OpsWorks::Layer
 */
export namespace AWS_OpsWorks_Layer {
  export type LifecycleEventConfigurationType = {
    ShutdownEventConfiguration?: ShutdownEventConfigurationType;
  };

  export type LoadBasedAutoScalingType = {
    DownScaling?: AutoScalingThresholdsType;

    Enable?: boolean;

    UpScaling?: AutoScalingThresholdsType;
  };

  export type RecipesType = {
    Configure?: string[];

    Deploy?: string[];

    Setup?: string[];

    Shutdown?: string[];

    Undeploy?: string[];
  };

  export type VolumeConfigurationType = {
    Encrypted?: boolean;

    Iops?: number;

    MountPoint?: string;

    NumberOfDisks?: number;

    RaidLevel?: number;

    Size?: number;

    VolumeType?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type ShutdownEventConfigurationType = {
    DelayUntilElbConnectionsDrained?: boolean;

    ExecutionTimeout?: number;
  };

  export type AutoScalingThresholdsType = {
    CpuThreshold?: number;

    IgnoreMetricsTime?: number;

    InstanceCount?: number;

    LoadThreshold?: number;

    MemoryThreshold?: number;

    ThresholdsWaitTime?: number;
  };

  /**
   * Resource Type definition for AWS::OpsWorks::Layer
   */
  export type LayerResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Attributes?: Record<string, any>;

    AutoAssignElasticIps: boolean;

    AutoAssignPublicIps: boolean;

    CustomInstanceProfileArn?: string;

    CustomJson?: Record<string, any>;

    CustomRecipes?: RecipesType;

    CustomSecurityGroupIds?: string[];

    EnableAutoHealing: boolean;

    InstallUpdatesOnBoot?: boolean;

    LifecycleEventConfiguration?: LifecycleEventConfigurationType;

    LoadBasedAutoScaling?: LoadBasedAutoScalingType;

    Name: string;

    Packages?: string[];

    Shortname: string;

    /**
     * Create-only property
     */
    StackId: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Type: string;

    UseEbsOptimizedInstances?: boolean;

    VolumeConfigurations?: VolumeConfigurationType[];
  };
}
