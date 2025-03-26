/**
 * TypeScript definitions for AWS::Batch::ComputeEnvironment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Batch::ComputeEnvironment
 */
export namespace AWS_Batch_ComputeEnvironment {
  export type ComputeResourcesType = {
    AllocationStrategy?: string;

    BidPercentage?: number;

    DesiredvCpus?: number;

    Ec2Configuration?: Ec2ConfigurationObjectType[];

    Ec2KeyPair?: string;

    ImageId?: string;

    InstanceRole?: string;

    InstanceTypes?: string[];

    LaunchTemplate?: LaunchTemplateSpecificationType;

    MaxvCpus: number;

    MinvCpus?: number;

    PlacementGroup?: string;

    SecurityGroupIds?: string[];

    SpotIamFleetRole?: string;

    Subnets: string[];

    /**
     * A key-value pair to associate with a resource.
     */
    Tags?: Record<string, any>;

    Type: string;

    UpdateToLatestImageVersion?: boolean;
  };

  export type Ec2ConfigurationObjectType = {
    ImageIdOverride?: string;

    ImageType: string;

    ImageKubernetesVersion?: string;
  };

  export type LaunchTemplateSpecificationType = {
    LaunchTemplateId?: string;

    LaunchTemplateName?: string;

    Version?: string;

    Overrides?: LaunchTemplateSpecificationOverrideType[];
  };

  export type LaunchTemplateSpecificationOverrideType = {
    LaunchTemplateId?: string;

    LaunchTemplateName?: string;

    Version?: string;

    TargetInstanceTypes?: string[];
  };

  export type UpdatePolicyType = {
    TerminateJobsOnUpdate?: boolean;

    JobExecutionTimeoutMinutes?: number;
  };

  export type EksConfigurationType = {
    EksClusterArn: string;

    KubernetesNamespace: string;
  };

  /**
   * Resource Type definition for AWS::Batch::ComputeEnvironment
   */
  export type ComputeEnvironmentResourceType = {
    /**
     * Read-only property
     */
    ComputeEnvironmentArn?: string;

    /**
     * Create-only property
     */
    ComputeEnvironmentName?: string;

    ComputeResources?: ComputeResourcesType;

    /**
     * Default: true
     */
    ReplaceComputeEnvironment?: boolean;

    ServiceRole?: string;

    State?: string;

    /**
     * A key-value pair to associate with a resource.
     * Create-only property
     */
    Tags?: Record<string, any>;

    /**
     * Create-only property
     */
    Type: string;

    UpdatePolicy?: UpdatePolicyType;

    UnmanagedvCpus?: number;

    /**
     * Create-only property
     */
    EksConfiguration?: EksConfigurationType;

    Context?: string;
  };
}
