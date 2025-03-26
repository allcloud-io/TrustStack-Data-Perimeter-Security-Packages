/**
 * TypeScript definitions for AWS::EKS::Nodegroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EKS::Nodegroup
 */
export namespace AWS_EKS_Nodegroup {
  /**
   * An object representing a launch template specification for AWS EKS Nodegroup.
   */
  export type LaunchTemplateSpecificationType = {
    Id?: string;

    Version?: string;

    Name?: string;
  };

  /**
   * An object representing a Taint specification for AWS EKS Nodegroup.
   */
  export type TaintType = {
    Key?: string;

    Value?: string;

    Effect?: string;
  };

  /**
   * An object representing a auto scaling group specification for AWS EKS Nodegroup.
   */
  export type ScalingConfigType = {
    MinSize?: number;

    DesiredSize?: number;

    MaxSize?: number;
  };

  /**
   * An object representing a remote access configuration specification for AWS EKS Nodegroup.
   */
  export type RemoteAccessType = {
    SourceSecurityGroups?: string[];

    Ec2SshKey: string;
  };

  /**
   * The node group update configuration.
   */
  export type UpdateConfigType = {
    /**
     * The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or maxUnavailablePercentage is required to have a value.The maximum number is 100.
     */
    MaxUnavailable?: number;

    /**
     * The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or maxUnavailable is required to have a value.
     */
    MaxUnavailablePercentage?: number;

    /**
     * The configuration for the behavior to follow during an node group version update of this managed node group. You choose between two possible strategies for replacing nodes during an UpdateNodegroupVersion action.
     */
    UpdateStrategy?: string;
  };

  /**
   * The node auto repair configuration for node group.
   */
  export type NodeRepairConfigType = {
    /**
     * Set this value to true to enable node auto repair for the node group.
     */
    Enabled?: boolean;
  };

  /**
   * Resource schema for AWS::EKS::Nodegroup
   */
  export type NodegroupResourceType = {
    /**
     * The AMI type for your node group.
     * Create-only property
     */
    AmiType?: string;

    /**
     * The capacity type of your managed node group.
     * Create-only property
     */
    CapacityType?: string;

    /**
     * Name of the cluster to create the node group in.
     * Create-only property
     */
    ClusterName: string;

    /**
     * The root device disk size (in GiB) for your node group instances.
     * Create-only property
     */
    DiskSize?: number;

    /**
     * Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue.
     * Default: false
     */
    ForceUpdateEnabled?: boolean;

    /**
     * Specify the instance types for a node group.
     * Create-only property
     */
    InstanceTypes?: string[];

    /**
     * The Kubernetes labels to be applied to the nodes in the node group when they are created.
     */
    Labels?: Record<string, any>;

    /**
     * An object representing a node group's launch template specification.
     */
    LaunchTemplate?: LaunchTemplateSpecificationType;

    /**
     * The unique name to give your node group.
     * Create-only property
     */
    NodegroupName?: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with your node group.
     * Create-only property
     */
    NodeRole: string;

    /**
     * The AMI version of the Amazon EKS-optimized AMI to use with your node group.
     */
    ReleaseVersion?: string;

    /**
     * The remote access (SSH) configuration to use with your node group.
     * Create-only property
     */
    RemoteAccess?: RemoteAccessType;

    /**
     * The scaling configuration details for the Auto Scaling group that is created for your node group.
     */
    ScalingConfig?: ScalingConfigType;

    /**
     * The subnets to use for the Auto Scaling group that is created for your node group.
     * Create-only property
     */
    Subnets: string[];

    /**
     * The metadata, as key-value pairs, to apply to the node group to assist with categorization and organization. Follows same schema as Labels for consistency.
     */
    Tags?: Record<string, any>;

    /**
     * The Kubernetes taints to be applied to the nodes in the node group when they are created.
     */
    Taints?: TaintType[];

    /**
     * The node group update configuration.
     */
    UpdateConfig?: UpdateConfigType;

    /**
     * The node auto repair configuration for node group.
     */
    NodeRepairConfig?: NodeRepairConfigType;

    /**
     * The Kubernetes version to use for your managed nodes.
     */
    Version?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
