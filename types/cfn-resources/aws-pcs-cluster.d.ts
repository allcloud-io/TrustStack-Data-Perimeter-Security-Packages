/**
 * TypeScript definitions for AWS::PCS::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::PCS::Cluster resource creates an AWS PCS cluster.
 */
export namespace AWS_PCS_Cluster {
  /**
   * The shared Slurm key for authentication, also known as the cluster secret.
   */
  export type AuthKeyType = {
    /**
     * The Amazon Resource Name (ARN) of the the shared Slurm key.
     */
    SecretArn: string;

    /**
     * The version of the shared Slurm key.
     */
    SecretVersion: string;
  };

  /**
   * An endpoint available for interaction with the scheduler.
   */
  export type EndpointType = {
    /**
     * The endpoint's connection port number.
     */
    Port: string;

    /**
     * The endpoint's private IP address.
     */
    PrivateIpAddress: string;

    /**
     * Indicates the type of endpoint running at the specific IP address.
     */
    Type: string;

    /**
     * The endpoint's public IP address.
     */
    PublicIpAddress?: string;
  };

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
   * A VPC security group ID.
   */
  export type SecurityGroupIdType = {};

  /**
   * Additional settings that directly map to Slurm settings.
   */
  export type SlurmCustomSettingType = {
    /**
     * AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.
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
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * AWS::PCS::Cluster resource creates an AWS PCS cluster.
   */
  export type ClusterResourceType = {
    /**
     * The unique Amazon Resource Name (ARN) of the cluster.
     * Read-only property
     */
    Arn?: string;

    /**
     * The list of endpoints available for interaction with the scheduler.
     * Read-only property
     */
    Endpoints?: EndpointType[];

    /**
     * The list of errors that occurred during cluster provisioning.
     * Read-only property
     */
    ErrorInfo?: ErrorInfoType[];

    /**
     * The generated unique ID of the cluster.
     * Read-only property
     */
    Id?: string;

    /**
     * The name that identifies the cluster.
     * Create-only property
     */
    Name?: string;

    /**
     * The networking configuration for the cluster's control plane.
     * Create-only property
     */
    Networking: Record<string, any>;

    /**
     * The cluster management and job scheduling software associated with the cluster.
     * Create-only property
     */
    Scheduler: Record<string, any>;

    /**
     * The size of the cluster.
     * Create-only property
     */
    Size: string;

    /**
     * Additional options related to the Slurm scheduler.
     * Create-only property
     */
    SlurmConfiguration?: Record<string, any>;

    /**
     * The provisioning status of the cluster. The provisioning status doesn't indicate the overall health of the cluster.
     * Read-only property
     */
    Status?: string;

    /**
     * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
     */
    Tags?: any;
  };
}
