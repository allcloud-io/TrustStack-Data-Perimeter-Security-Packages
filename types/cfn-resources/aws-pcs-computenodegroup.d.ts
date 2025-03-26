/**
 * TypeScript definitions for AWS::PCS::ComputeNodeGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::PCS::ComputeNodeGroup resource creates an AWS PCS compute node group.
 */
export namespace AWS_PCS_ComputeNodeGroup {
  /**
   * An error that occurred during resource provisioning.
   */
  export type ErrorInfoType = {
    /**
     * The short-form error code.
     */
    Code?: string;

    /**
     * The detailed error information.
     */
    Message?: string;
  };

  /**
   * An EC2 instance configuration AWS PCS uses to launch compute nodes.
   */
  export type InstanceConfigType = {
    /**
     * The EC2 instance type that AWS PCS can provision in the compute node group.
     */
    InstanceType?: string;
  };

  /**
   * Additional settings that directly map to Slurm settings.
   */
  export type SlurmCustomSettingType = {
    /**
     * AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory.
     */
    ParameterName: string;

    /**
     * The value for the configured Slurm setting.
     */
    ParameterValue: string;
  };

  /**
   * A VPC subnet ID.
   */
  export type SubnetIdType = {};

  /**
   * AWS::PCS::ComputeNodeGroup resource creates an AWS PCS compute node group.
   */
  export type ComputeNodeGroupResourceType = {
    /**
     * The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances. If not provided, AWS PCS uses the AMI ID specified in the custom launch template.
     */
    AmiId?: string;

    /**
     * The unique Amazon Resource Name (ARN) of the compute node group.
     * Read-only property
     */
    Arn?: string;

    /**
     * The ID of the cluster of the compute node group.
     * Create-only property
     */
    ClusterId: string;

    /**
     * An Amazon EC2 launch template AWS PCS uses to launch compute nodes.
     */
    CustomLaunchTemplate: Record<string, any>;

    /**
     * The list of errors that occurred during compute node group provisioning.
     * Read-only property
     */
    ErrorInfo?: ErrorInfoType[];

    /**
     * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.
     */
    IamInstanceProfileArn: string;

    /**
     * The generated unique ID of the compute node group.
     * Read-only property
     */
    Id?: string;

    /**
     * A list of EC2 instance configurations that AWS PCS can provision in the compute node group.
     * Create-only property
     */
    InstanceConfigs: InstanceConfigType[];

    /**
     * The name that identifies the compute node group.
     * Create-only property
     */
    Name?: string;

    /**
     * Specifies how EC2 instances are purchased on your behalf. AWS PCS supports On-Demand and Spot instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.
     */
    PurchaseOption?: string;

    /**
     * Specifies the boundaries of the compute node group auto scaling.
     */
    ScalingConfiguration: Record<string, any>;

    /**
     * Additional options related to the Slurm scheduler.
     */
    SlurmConfiguration?: Record<string, any>;

    /**
     * Additional configuration when you specify SPOT as the purchase option.
     */
    SpotOptions?: Record<string, any>;

    /**
     * The provisioning status of the compute node group. The provisioning status doesn't indicate the overall health of the compute node group.
     * Read-only property
     */
    Status?: string;

    /**
     * The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.
     */
    SubnetIds: SubnetIdType[];

    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    Tags?: any;
  };
}
