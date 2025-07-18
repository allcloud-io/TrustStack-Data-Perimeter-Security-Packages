/**
 * TypeScript definitions for AWS::ECS::TaskSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.htmlin the Amazon Elastic Container Service Developer Guide.
 */
export namespace AWS_ECS_TaskSet {
  export type CapacityProviderStrategyItemType = {
    CapacityProvider?: string;

    Base?: number;

    Weight?: number;
  };

  /**
   * The VPC subnets and security groups associated with a task. All specified subnets and security groups must be from the same VPC.
   */
  export type AwsVpcConfigurationType = {
    /**
     * The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.
     */
    SecurityGroups?: string[];

    /**
     * The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.
     */
    Subnets: string[];

    /**
     * Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.
     */
    AssignPublicIp?: string;
  };

  /**
   * A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.
   */
  export type LoadBalancerType = {
    /**
     * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.
     */
    TargetGroupArn?: string;

    /**
     * The name of the container (as it appears in a container definition) to associate with the load balancer.
     */
    ContainerName?: string;

    /**
     * The port on the container to associate with the load balancer. This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping.
     */
    ContainerPort?: number;
  };

  /**
   * An object representing the network configuration for a task or service.
   */
  export type NetworkConfigurationType = {
    AwsVpcConfiguration?: AwsVpcConfigurationType;
  };

  export type ScaleType = {
    /**
     * The value, specified as a percent total of a service's desiredCount, to scale the task set. Accepted values are numbers between 0 and 100.
     */
    Value?: number;

    /**
     * The unit of measure for the scale value.
     */
    Unit?: string;
  };

  export type ServiceRegistryType = {
    /**
     * The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
     */
    ContainerName?: string;

    /**
     * The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.
     */
    Port?: number;

    /**
     * The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
     */
    ContainerPort?: number;

    /**
     * The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html
     */
    RegistryArn?: string;
  };

  export type TagType = {
    Value?: string;

    Key?: string;
  };

  /**
   * Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.htmlin the Amazon Elastic Container Service Developer Guide.
   */
  export type TaskSetResourceType = {
    /**
     * The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.
     * Create-only property
     */
    PlatformVersion?: string;

    /**
     * An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value.
     * Create-only property
     */
    ExternalId?: string;

    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
     * Create-only property
     */
    Cluster: string;

    /**
     * Create-only property
     */
    LoadBalancers?: LoadBalancerType[];

    /**
     * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
     * Create-only property
     */
    Service: string;

    /**
     * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
     */
    Scale?: ScaleType;

    /**
     * The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.
     * Create-only property
     */
    ServiceRegistries?: ServiceRegistryType[];

    /**
     * Create-only property
     */
    CapacityProviderStrategy?: CapacityProviderStrategyItemType[];

    /**
     * The launch type that new tasks in the task set will use. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide.
     * Create-only property
     */
    LaunchType?: string;

    /**
     * The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.
     * Create-only property
     */
    TaskDefinition: string;

    /**
     * Create-only property
     */
    NetworkConfiguration?: NetworkConfigurationType;

    /**
     * The ID of the task set.
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
