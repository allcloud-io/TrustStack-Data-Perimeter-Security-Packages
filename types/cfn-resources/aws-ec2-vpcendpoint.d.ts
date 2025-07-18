/**
 * TypeScript definitions for AWS::EC2::VPCEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a VPC endpoint. A VPC endpoint provides a private connection between your VPC and an endpoint service. You can use an endpoint service provided by AWS, an MKT Partner, or another AWS accounts in your organization. For more information, see the User Guide.
 * An endpoint of type `Interface` establishes connections between the subnets in your VPC and an AWS-service, your own service, or a service hosted by another AWS-account. With an interface VPC endpoint, you specify the subnets in which to create the endpoint and the security groups to associate with the endpoint network interfaces.
 * An endpoint of type `gateway` serves as a target for a route in your route table for traffic destined for S3 or DDB. You can specify an endpoint policy for the endpoint, which controls access to the service from your VPC. You can also specify the VPC route tables that use the endpoint. For more information about connectivity to S3, see Why can't I connect to an S3 bucket using a gateway VPC endpoint?
 * An endpoint of type `GatewayLoadBalancer` provides private connectivity between your VPC and virtual appliances from a service provider.
 */
export namespace AWS_EC2_VPCEndpoint {
  export type DnsOptionsSpecificationType = {
    PrivateDnsOnlyForInboundResolverEndpoint?: string;

    DnsRecordIpType?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Specifies a VPC endpoint. A VPC endpoint provides a private connection between your VPC and an endpoint service. You can use an endpoint service provided by AWS, an MKT Partner, or another AWS accounts in your organization. For more information, see the User Guide.
   * An endpoint of type `Interface` establishes connections between the subnets in your VPC and an AWS-service, your own service, or a service hosted by another AWS-account. With an interface VPC endpoint, you specify the subnets in which to create the endpoint and the security groups to associate with the endpoint network interfaces.
   * An endpoint of type `gateway` serves as a target for a route in your route table for traffic destined for S3 or DDB. You can specify an endpoint policy for the endpoint, which controls access to the service from your VPC. You can also specify the VPC route tables that use the endpoint. For more information about connectivity to S3, see Why can't I connect to an S3 bucket using a gateway VPC endpoint?
   * An endpoint of type `GatewayLoadBalancer` provides private connectivity between your VPC and virtual appliances from a service provider.
   */
  export type VPCEndpointResourceType = {
    /**
     * Indicate whether to associate a private hosted zone with the specified VPC. The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, `kinesis.us-east-1.amazonaws.com`), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
     * To use a private hosted zone, you must set the following VPC attributes to `true`: `enableDnsHostnames` and `enableDnsSupport`.
     * This property is supported only for interface endpoints.
     * Default: `false`
     */
    PrivateDnsEnabled?: boolean;

    IpAddressType?: string;

    /**
     * Read-only property
     */
    CreationTimestamp?: string;

    DnsOptions?: DnsOptionsSpecificationType;

    /**
     * Read-only property
     */
    NetworkInterfaceIds?: string[];

    /**
     * Read-only property
     */
    DnsEntries?: string[];

    /**
     * Create-only property
     */
    ResourceConfigurationArn?: string;

    /**
     * The IDs of the security groups to associate with the endpoint network interfaces. If this parameter is not specified, we use the default security group for the VPC. Security groups are supported only for interface endpoints.
     */
    SecurityGroupIds?: string[];

    /**
     * The IDs of the subnets in which to create endpoint network interfaces. You must specify this property for an interface endpoint or a Gateway Load Balancer endpoint. You can't specify this property for a gateway endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.
     */
    SubnetIds?: string[];

    /**
     * Create-only property
     */
    ServiceNetworkArn?: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;

    /**
     * The IDs of the route tables. Routing is supported only for gateway endpoints.
     */
    RouteTableIds?: string[];

    /**
     * The name of the endpoint service.
     * Create-only property
     */
    ServiceName?: string;

    /**
     * An endpoint policy, which controls access to the service from the VPC. The default endpoint policy allows full access to the service. Endpoint policies are supported only for gateway and interface endpoints.
     * For CloudFormation templates in YAML, you can provide the policy in JSON or YAML format. For example, if you have a JSON policy, you can convert it to YAML before including it in the YAML template, and CFNlong converts the policy to JSON format before calling the API actions for privatelink. Alternatively, you can include the JSON directly in the YAML, as shown in the following `Properties` section:
     * `Properties: VpcEndpointType: 'Interface' ServiceName: !Sub 'com.amazonaws.${AWS::Region}.logs' PolicyDocument: '{ "Version":"2012-10-17", "Statement": [{ "Effect":"Allow", "Principal":"*", "Action":["logs:Describe*","logs:Get*","logs:List*","logs:FilterLogEvents"], "Resource":"*" }] }'`
     */
    PolicyDocument?: string | Record<string, any>;

    /**
     * The type of endpoint.
     * Default: Gateway
     * Create-only property
     */
    VpcEndpointType?: string;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
