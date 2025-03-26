/**
 * TypeScript definitions for AWS::SageMaker::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Cluster
 */
export namespace AWS_SageMaker_Cluster {
  /**
   * Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,
   */
  export type ClusterOrchestratorEksConfigType = {
    /**
     * The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster
     */
    ClusterArn: string;
  };

  /**
   * The type of deep health check(s) to be performed on the instances in the SageMaker HyperPod cluster instance group.
   */
  export type DeepHealthCheckTypeType = {};

  /**
   * Defines the configuration for attaching additional storage to the instances in the SageMaker HyperPod cluster instance group.
   */
  export type ClusterInstanceStorageConfigType = {};

  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
   */
  export type VpcConfigType = {
    /**
     * The ID of the subnets in the VPC to which you want to connect your training job or model.
     */
    Subnets: string[];

    /**
     * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
     */
    SecurityGroupIds: string[];
  };

  /**
   * The name of the instance group of a SageMaker HyperPod cluster.
   */
  export type InstanceGroupNameType = {};

  /**
   * The instance groups of the SageMaker HyperPod cluster.
   */
  export type ClusterInstanceGroupsListType = {};

  /**
   * Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.
   */
  export type OrchestratorType = {
    Eks: ClusterOrchestratorEksConfigType;
  };

  /**
   * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
   */
  export type ClusterEbsVolumeConfigType = {
    /**
     * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
     */
    VolumeSizeInGB?: number;
  };

  /**
   * The lifecycle configuration for a SageMaker HyperPod cluster.
   */
  export type ClusterLifeCycleConfigType = {
    /**
     * An Amazon S3 bucket path where your lifecycle scripts are stored.
     */
    SourceS3Uri: string;

    /**
     * The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation.
     */
    OnCreate: string;
  };

  /**
   * Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.
   */
  export type OnStartDeepHealthChecksType = {};

  /**
   * Details of an instance group in a SageMaker HyperPod cluster.
   */
  export type ClusterInstanceGroupType = {
    OverrideVpcConfig?: VpcConfigType;

    /**
     * The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.
     */
    InstanceCount: number;

    OnStartDeepHealthChecks?: OnStartDeepHealthChecksType;

    InstanceGroupName: InstanceGroupNameType;

    InstanceStorageConfigs?: ClusterInstanceStorageConfigsType;

    /**
     * The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.
     */
    CurrentCount?: number;

    LifeCycleConfig: ClusterLifeCycleConfigType;

    InstanceType: InstanceTypeType;

    /**
     * The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.
     */
    ThreadsPerCore?: number;

    ExecutionRole: ExecutionRoleType;
  };

  /**
   * The instance storage configuration for the instance group.
   */
  export type ClusterInstanceStorageConfigsType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * The instance type of the instance group of a SageMaker HyperPod cluster.
   */
  export type InstanceTypeType = {};

  /**
   * The execution role for the instance group to assume.
   */
  export type ExecutionRoleType = {};

  /**
   * Resource Type definition for AWS::SageMaker::Cluster
   */
  export type ClusterResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the HyperPod Cluster.
     * Read-only property
     */
    ClusterArn?: string;

    /**
     * Create-only property
     */
    VpcConfig?: VpcConfigType;

    /**
     * If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. If set to false, nodes will be labelled when a fault is detected.
     */
    NodeRecovery?: string;

    /**
     * The time at which the HyperPod cluster was created.
     * Read-only property
     */
    CreationTime?: string;

    InstanceGroups: ClusterInstanceGroupsListType;

    /**
     * The name of the HyperPod Cluster.
     * Create-only property
     */
    ClusterName?: string;

    /**
     * The failure message of the HyperPod Cluster.
     * Read-only property
     */
    FailureMessage?: string;

    /**
     * Create-only property
     */
    Orchestrator?: OrchestratorType;

    /**
     * The status of the HyperPod Cluster.
     * Read-only property
     */
    ClusterStatus?: string;

    /**
     * Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. You can add tags to your cluster in the same way you add them in other AWS services that support tagging.
     */
    Tags?: TagType[];
  };
}
