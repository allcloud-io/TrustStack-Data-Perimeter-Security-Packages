/**
 * TypeScript definitions for AWS::Lightsail::Container
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lightsail::Container
 */
export namespace AWS_Lightsail_Container {
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
   * Describes the health check configuration of an Amazon Lightsail container service.
   */
  export type HealthCheckConfigType = {
    /**
     * The number of consecutive health checks successes required before moving the container to the Healthy state. The default value is 2.
     */
    HealthyThreshold?: number;

    /**
     * The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. The default value is 5.
     */
    IntervalSeconds?: number;

    /**
     * The path on the container on which to perform the health check. The default value is /.
     */
    Path?: string;

    /**
     * The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).
     */
    SuccessCodes?: string;

    /**
     * The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. The default value is 2.
     */
    TimeoutSeconds?: number;

    /**
     * The number of consecutive health check failures required before moving the container to the Unhealthy state. The default value is 2.
     */
    UnhealthyThreshold?: number;
  };

  /**
   * Describes the settings of a public endpoint for an Amazon Lightsail container service.
   */
  export type PublicEndpointType = {
    /**
     * The name of the container for the endpoint.
     */
    ContainerName?: string;

    /**
     * The port of the container to which traffic is forwarded to.
     */
    ContainerPort?: number;

    /**
     * An object that describes the health check configuration of the container.
     */
    HealthCheckConfig?: HealthCheckConfigType;
  };

  export type EnvironmentVariableType = {
    Variable?: string;

    Value?: string;
  };

  export type PortInfoType = {
    Port?: string;

    Protocol?: string;
  };

  /**
   * Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
   */
  export type ContainerType = {
    /**
     * The name of the container.
     */
    ContainerName?: string;

    /**
     * The launch command for the container.
     */
    Command?: string[];

    /**
     * The environment variables of the container.
     */
    Environment?: EnvironmentVariableType[];

    /**
     * The name of the image used for the container.
     */
    Image?: string;

    /**
     * The open firewall ports of the container.
     */
    Ports?: PortInfoType[];
  };

  /**
   * Describes a container deployment configuration of an Amazon Lightsail container service.
   */
  export type ContainerServiceDeploymentType = {
    /**
     * An object that describes the configuration for the containers of the deployment.
     */
    Containers?: ContainerType[];

    /**
     * An object that describes the endpoint of the deployment.
     */
    PublicEndpoint?: PublicEndpointType;
  };

  /**
   * The public domain name to use with the container service, such as example.com and www.example.com.
   */
  export type PublicDomainNameType = {
    CertificateName?: string;

    /**
     * An object that describes the configuration for the containers of the deployment.
     */
    DomainNames?: string[];
  };

  /**
   * An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
   */
  export type PrivateRegistryAccessType = {
    /**
     * An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.
     */
    EcrImagePullerRole?: Record<string, any>;
  };

  /**
   * Resource Type definition for AWS::Lightsail::Container
   */
  export type ContainerResourceType = {
    /**
     * The name for the container service.
     * Create-only property
     */
    ServiceName: string;

    /**
     * The power specification for the container service.
     */
    Power: string;

    /**
     * Read-only property
     */
    ContainerArn?: string;

    /**
     * The scale specification for the container service.
     */
    Scale: number;

    /**
     * The public domain names to use with the container service, such as example.com and www.example.com.
     */
    PublicDomainNames?: PublicDomainNameType[];

    /**
     * Describes a container deployment configuration of an Amazon Lightsail container service.
     */
    ContainerServiceDeployment?: ContainerServiceDeploymentType;

    /**
     * A Boolean value to indicate whether the container service is disabled.
     */
    IsDisabled?: boolean;

    /**
     * A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
     */
    PrivateRegistryAccess?: PrivateRegistryAccessType;

    /**
     * The publicly accessible URL of the container service.
     * Read-only property
     */
    Url?: string;

    /**
     * The principal ARN of the container service.
     * Read-only property
     */
    PrincipalArn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
