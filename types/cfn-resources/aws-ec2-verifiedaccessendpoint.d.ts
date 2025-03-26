/**
 * TypeScript definitions for AWS::EC2::VerifiedAccessEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::VerifiedAccessEndpoint resource creates an AWS EC2 Verified Access Endpoint.
 */
export namespace AWS_EC2_VerifiedAccessEndpoint {
  /**
   * The ID of a security group for the endpoint.
   */
  export type SecurityGroupIdType = {};

  /**
   * The options for network-interface type endpoint.
   */
  export type NetworkInterfaceOptionsType = {
    /**
     * The ID of the network interface.
     */
    NetworkInterfaceId?: string;

    /**
     * The IP port number.
     */
    Port?: number;

    /**
     * The list of port ranges.
     */
    PortRanges?: PortRangeType[];

    /**
     * The IP protocol.
     */
    Protocol?: string;
  };

  /**
   * The load balancer details if creating the AWS Verified Access endpoint as load-balancertype.
   */
  export type LoadBalancerOptionsType = {
    /**
     * The ARN of the load balancer.
     */
    LoadBalancerArn?: string;

    /**
     * The IP port number.
     */
    Port?: number;

    /**
     * The list of port range.
     */
    PortRanges?: PortRangeType[];

    /**
     * The IP protocol.
     */
    Protocol?: string;

    /**
     * The IDs of the subnets.
     */
    SubnetIds?: SubnetIdType[];
  };

  /**
   * The options for rds type endpoint.
   */
  export type RdsOptionsType = {
    /**
     * The IP protocol.
     */
    Protocol?: string;

    /**
     * The IP port number.
     */
    Port?: number;

    /**
     * The ARN of the RDS DB instance.
     */
    RdsDbInstanceArn?: string;

    /**
     * The ARN of the RDS DB cluster.
     */
    RdsDbClusterArn?: string;

    /**
     * The ARN of the RDS DB proxy.
     */
    RdsDbProxyArn?: string;

    /**
     * The RDS endpoint.
     */
    RdsEndpoint?: string;

    /**
     * The IDs of the subnets.
     */
    SubnetIds?: SubnetIdType[];
  };

  /**
   * The options for cidr type endpoint.
   */
  export type CidrOptionsType = {
    /**
     * The IP address range, in CIDR notation.
     */
    Cidr?: string;

    /**
     * The list of port range.
     */
    PortRanges?: PortRangeType[];

    /**
     * The IP protocol.
     */
    Protocol?: string;

    /**
     * The IDs of the subnets.
     */
    SubnetIds?: SubnetIdType[];
  };

  /**
   * The IP port range.
   */
  export type PortRangeType = {
    /**
     * The first port in the range.
     */
    FromPort?: number;

    /**
     * The last port in the range.
     */
    ToPort?: number;
  };

  /**
   * The IDs of the subnet.
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
    Value: string;
  };

  /**
   * The configuration options for customer provided KMS encryption.
   */
  export type SseSpecificationType = {
    /**
     * KMS Key Arn used to encrypt the group policy
     */
    KmsKeyArn?: string;

    /**
     * Whether to encrypt the policy with the provided key or disable encryption
     */
    CustomerManagedKeyEnabled?: boolean;
  };

  /**
   * The AWS::EC2::VerifiedAccessEndpoint resource creates an AWS EC2 Verified Access Endpoint.
   */
  export type VerifiedAccessEndpointResourceType = {
    /**
     * The ID of the AWS Verified Access endpoint.
     * Read-only property
     */
    VerifiedAccessEndpointId?: string;

    /**
     * The ID of the AWS Verified Access group.
     */
    VerifiedAccessGroupId: string;

    /**
     * The ID of the AWS Verified Access instance.
     * Read-only property
     */
    VerifiedAccessInstanceId?: string;

    /**
     * The endpoint status.
     * Read-only property
     */
    Status?: string;

    /**
     * The IDs of the security groups for the endpoint.
     * Create-only property
     */
    SecurityGroupIds?: SecurityGroupIdType[];

    /**
     * The options for network-interface type endpoint.
     */
    NetworkInterfaceOptions?: NetworkInterfaceOptionsType;

    /**
     * The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.
     */
    LoadBalancerOptions?: LoadBalancerOptionsType;

    /**
     * The options for rds type endpoint.
     */
    RdsOptions?: RdsOptionsType;

    /**
     * The options for cidr type endpoint.
     */
    CidrOptions?: CidrOptionsType;

    /**
     * The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
     * Create-only property
     */
    EndpointType: string;

    /**
     * A DNS name that is generated for the endpoint.
     * Read-only property
     */
    EndpointDomain?: string;

    /**
     * A custom identifier that gets prepended to a DNS name that is generated for the endpoint.
     * Create-only property
     */
    EndpointDomainPrefix?: string;

    /**
     * Returned if endpoint has a device trust provider attached.
     * Read-only property
     */
    DeviceValidationDomain?: string;

    /**
     * The ARN of a public TLS/SSL certificate imported into or created with ACM.
     * Create-only property
     */
    DomainCertificateArn?: string;

    /**
     * The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.
     * Create-only property
     */
    AttachmentType: string;

    /**
     * The DNS name for users to reach your application.
     * Create-only property
     */
    ApplicationDomain?: string;

    /**
     * The creation time.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The last updated time.
     * Read-only property
     */
    LastUpdatedTime?: string;

    /**
     * A description for the AWS Verified Access endpoint.
     */
    Description?: string;

    /**
     * The AWS Verified Access policy document.
     */
    PolicyDocument?: string;

    /**
     * The status of the Verified Access policy.
     */
    PolicyEnabled?: boolean;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The configuration options for customer provided KMS encryption.
     */
    SseSpecification?: SseSpecificationType;
  };
}
