/**
 * TypeScript definitions for AWS::EKS::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * An object representing an Amazon EKS cluster.
 */
export namespace AWS_EKS_Cluster {
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
    Value: string;
  };

  export type ProviderType = {
    /**
     * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key.
     */
    KeyArn?: string;
  };

  /**
   * The encryption configuration for the cluster
   */
  export type EncryptionConfigType = {
    /**
     * The encryption provider for the cluster.
     */
    Provider?: ProviderType;

    /**
     * Specifies the resources to be encrypted. The only supported value is "secrets".
     */
    Resources?: string[];
  };

  /**
   * An object representing the VPC configuration to use for an Amazon EKS cluster.
   */
  export type ResourcesVpcConfigType = {
    /**
     * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods.
     */
    EndpointPrivateAccess?: boolean;

    /**
     * Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server.
     */
    EndpointPublicAccess?: boolean;

    /**
     * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks.
     */
    PublicAccessCidrs?: string[];

    /**
     * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used.
     */
    SecurityGroupIds?: string[];

    /**
     * Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
     */
    SubnetIds: string[];
  };

  /**
   * Enabled Logging Type
   */
  export type LoggingTypeConfigType = {
    /**
     * name of the log type
     */
    Type?: string;
  };

  /**
   * Enable control plane logs for your cluster, all log types will be disabled if the array is empty
   */
  export type EnabledTypesType = {};

  /**
   * The cluster control plane logging configuration for your cluster.
   */
  export type ClusterLoggingType = {
    EnabledTypes?: EnabledTypesType;
  };

  /**
   * Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. By default, cluster control plane logs aren't exported to CloudWatch Logs.
   */
  export type LoggingType = {
    /**
     * The cluster control plane logging configuration for your cluster.
     */
    ClusterLogging?: ClusterLoggingType;
  };

  /**
   * Network configuration of nodes run on-premises with EKS Hybrid Nodes.
   */
  export type RemoteNodeNetworkType = {
    /**
     * Specifies the list of remote node CIDRs.
     */
    Cidrs: string[];
  };

  /**
   * Network configuration of nodes run on-premises with EKS Hybrid Nodes.
   */
  export type RemoteNodeNetworksType = {};

  /**
   * Network configuration of pods run on-premises with EKS Hybrid Nodes.
   */
  export type RemotePodNetworkType = {
    /**
     * Specifies the list of remote pod CIDRs.
     */
    Cidrs: string[];
  };

  /**
   * Network configuration of pods run on-premises with EKS Hybrid Nodes.
   */
  export type RemotePodNetworksType = {};

  /**
   * Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation.
   */
  export type RemoteNetworkConfigType = {
    /**
     * Network configuration of nodes run on-premises with EKS Hybrid Nodes.
     */
    RemoteNodeNetworks: RemoteNodeNetworksType;

    /**
     * Network configuration of pods run on-premises with EKS Hybrid Nodes.
     */
    RemotePodNetworks?: RemotePodNetworksType;
  };

  /**
   * Todo: add description
   */
  export type ComputeConfigType = {
    /**
     * Todo: add description
     */
    Enabled?: boolean;

    /**
     * Todo: add description
     */
    NodeRoleArn?: string;

    /**
     * Todo: add description
     */
    NodePools?: string[];
  };

  /**
   * Todo: add description
   */
  export type BlockStorageType = {
    /**
     * Todo: add description
     */
    Enabled?: boolean;
  };

  /**
   * Todo: add description
   */
  export type StorageConfigType = {
    /**
     * Todo: add description
     */
    BlockStorage?: BlockStorageType;
  };

  /**
   * Todo: add description
   */
  export type ElasticLoadBalancingType = {
    /**
     * Todo: add description
     */
    Enabled?: boolean;
  };

  /**
   * The Kubernetes network configuration for the cluster.
   */
  export type KubernetesNetworkConfigType = {
    /**
     * The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC.
     */
    ServiceIpv4Cidr?: string;

    /**
     * The CIDR block to assign Kubernetes service IP addresses from.
     */
    ServiceIpv6Cidr?: string;

    /**
     * Ipv4 or Ipv6. You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on
     */
    IpFamily?: string;

    /**
     * Todo: add description
     */
    ElasticLoadBalancing?: ElasticLoadBalancingType;
  };

  /**
   * Specify the placement group of the control plane machines for your cluster.
   */
  export type ControlPlanePlacementType = {
    /**
     * Specify the placement group name of the control place machines for your cluster.
     */
    GroupName?: string;
  };

  /**
   * An object representing the Outpost configuration to use for AWS EKS outpost cluster.
   */
  export type OutpostConfigType = {
    /**
     * Specify one or more Arn(s) of Outpost(s) on which you would like to create your cluster.
     */
    OutpostArns: string[];

    /**
     * Specify the Instance type of the machines that should be used to create your cluster.
     */
    ControlPlaneInstanceType: string;

    /**
     * Specify the placement group of the control plane machines for your cluster.
     */
    ControlPlanePlacement?: ControlPlanePlacementType;
  };

  /**
   * An object representing the Access Config to use for the cluster.
   */
  export type AccessConfigType = {
    /**
     * Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster.
     */
    BootstrapClusterCreatorAdminPermissions?: boolean;

    /**
     * Specify the authentication mode that should be used to create your cluster.
     */
    AuthenticationMode?: string;
  };

  /**
   * An object representing the Upgrade Policy to use for the cluster.
   */
  export type UpgradePolicyType = {
    /**
     * Specify the support type for your cluster.
     */
    SupportType?: string;
  };

  /**
   * The current zonal shift configuration to use for the cluster.
   */
  export type ZonalShiftConfigType = {
    /**
     * Set this value to true to enable zonal shift for the cluster.
     */
    Enabled?: boolean;
  };

  /**
   * An object representing an Amazon EKS cluster.
   */
  export type ClusterResourceType = {
    /**
     * Create-only property
     */
    EncryptionConfig?: EncryptionConfigType[];

    KubernetesNetworkConfig?: KubernetesNetworkConfigType;

    Logging?: LoggingType;

    /**
     * The unique name to give to your cluster.
     * Create-only property
     */
    Name?: string;

    /**
     * The unique ID given to your cluster.
     * Read-only property
     */
    Id?: string;

    ResourcesVpcConfig: ResourcesVpcConfigType;

    /**
     * Create-only property
     */
    OutpostConfig?: OutpostConfigType;

    AccessConfig?: AccessConfigType;

    UpgradePolicy?: UpgradePolicyType;

    /**
     * Create-only property
     */
    RemoteNetworkConfig?: RemoteNetworkConfigType;

    ComputeConfig?: ComputeConfigType;

    StorageConfig?: StorageConfigType;

    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
     * Create-only property
     */
    RoleArn: string;

    /**
     * The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.
     */
    Version?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The ARN of the cluster, such as arn:aws:eks:us-west-2:666666666666:cluster/prod.
     * Read-only property
     */
    Arn?: string;

    /**
     * The endpoint for your Kubernetes API server, such as https://5E1D0CEXAMPLEA591B746AFC5AB30262.yl4.us-west-2.eks.amazonaws.com.
     * Read-only property
     */
    Endpoint?: string;

    /**
     * The certificate-authority-data for your cluster.
     * Read-only property
     */
    CertificateAuthorityData?: string;

    /**
     * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication.
     * Read-only property
     */
    ClusterSecurityGroupId?: string;

    /**
     * Amazon Resource Name (ARN) or alias of the customer master key (CMK).
     * Read-only property
     */
    EncryptionConfigKeyArn?: string;

    /**
     * The issuer URL for the cluster's OIDC identity provider, such as https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E. If you need to remove https:// from this output value, you can include the following code in your template.
     * Read-only property
     */
    OpenIdConnectIssuerUrl?: string;

    /**
     * Set this value to false to avoid creating the default networking add-ons when the cluster is created.
     * Create-only property
     */
    BootstrapSelfManagedAddons?: boolean;

    ZonalShiftConfig?: ZonalShiftConfigType;
  };
}
