/**
 * TypeScript definitions for AWS::AppRunner::Service
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::AppRunner::Service resource specifies an AppRunner Service.
 */
export namespace AWS_AppRunner_Service {
  /**
   * Source Code configuration
   */
  export type SourceConfigurationType = {
    CodeRepository?: CodeRepositoryType;

    ImageRepository?: ImageRepositoryType;

    /**
     * Auto Deployment enabled
     */
    AutoDeploymentsEnabled?: boolean;

    AuthenticationConfiguration?: AuthenticationConfigurationType;
  };

  /**
   * Source Code Repository
   */
  export type CodeRepositoryType = {
    /**
     * Repository Url
     */
    RepositoryUrl: string;

    SourceCodeVersion: SourceCodeVersionType;

    CodeConfiguration?: CodeConfigurationType;

    /**
     * Source Directory
     */
    SourceDirectory?: string;
  };

  /**
   * Source Code Version
   */
  export type SourceCodeVersionType = {
    /**
     * Source Code Version Type
     */
    Type: string;

    /**
     * Source Code Version Value
     */
    Value: string;
  };

  /**
   * Code Configuration
   */
  export type CodeConfigurationType = {
    /**
     * Configuration Source
     */
    ConfigurationSource: string;

    CodeConfigurationValues?: CodeConfigurationValuesType;
  };

  /**
   * Code Configuration Values
   */
  export type CodeConfigurationValuesType = {
    /**
     * Runtime
     */
    Runtime: string;

    /**
     * Build Command
     */
    BuildCommand?: string;

    /**
     * Start Command
     */
    StartCommand?: string;

    /**
     * Port
     */
    Port?: string;

    RuntimeEnvironmentVariables?: KeyValuePairType[];

    /**
     * The secrets and parameters that get referenced by your service as environment variables
     */
    RuntimeEnvironmentSecrets?: KeyValuePairType[];
  };

  /**
   * Image Repository
   */
  export type ImageRepositoryType = {
    /**
     * Image Identifier
     */
    ImageIdentifier: string;

    ImageConfiguration?: ImageConfigurationType;

    /**
     * Image Repository Type
     */
    ImageRepositoryType: string;
  };

  /**
   * Image Configuration
   */
  export type ImageConfigurationType = {
    /**
     * Start Command
     */
    StartCommand?: string;

    /**
     * Port
     */
    Port?: string;

    RuntimeEnvironmentVariables?: KeyValuePairType[];

    /**
     * The secrets and parameters that get referenced by your service as environment variables
     */
    RuntimeEnvironmentSecrets?: KeyValuePairType[];
  };

  /**
   * Authentication Configuration
   */
  export type AuthenticationConfigurationType = {
    /**
     * Connection Arn
     */
    ConnectionArn?: string;

    /**
     * Access Role Arn
     */
    AccessRoleArn?: RoleArnType;
  };

  /**
   * Instance Configuration
   */
  export type InstanceConfigurationType = {
    /**
     * CPU
     */
    Cpu?: string;

    /**
     * Memory
     */
    Memory?: string;

    /**
     * Instance Role Arn
     */
    InstanceRoleArn?: RoleArnType;
  };

  export type RoleArnType = {};

  /**
   * Encryption configuration (KMS key)
   */
  export type EncryptionConfigurationType = {
    /**
     * The KMS Key
     */
    KmsKey: string;
  };

  /**
   * Health check configuration
   */
  export type HealthCheckConfigurationType = {
    /**
     * Health Check Protocol
     */
    Protocol?: string;

    /**
     * Health check Path
     */
    Path?: string;

    /**
     * Health check Interval
     */
    Interval?: number;

    /**
     * Health check Timeout
     */
    Timeout?: number;

    /**
     * Health check Healthy Threshold
     */
    HealthyThreshold?: number;

    /**
     * Health check Unhealthy Threshold
     */
    UnhealthyThreshold?: number;
  };

  /**
   * Network egress configuration
   */
  export type EgressConfigurationType = {
    /**
     * Network egress type.
     */
    EgressType: string;

    /**
     * The Amazon Resource Name (ARN) of the App Runner VpcConnector.
     */
    VpcConnectorArn?: string;
  };

  /**
   * Network ingress configuration
   */
  export type IngressConfigurationType = {
    /**
     * It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.
     */
    IsPubliclyAccessible: boolean;
  };

  /**
   * Network configuration
   */
  export type NetworkConfigurationType = {
    EgressConfiguration?: EgressConfigurationType;

    IngressConfiguration?: IngressConfigurationType;

    /**
     * App Runner service endpoint IP address type
     */
    IpAddressType?: string;
  };

  /**
   * Service observability configuration
   */
  export type ServiceObservabilityConfigurationType = {
    /**
     * Observability enabled
     */
    ObservabilityEnabled: boolean;

    /**
     * The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.
     */
    ObservabilityConfigurationArn?: string;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  export type KeyValuePairType = {
    Name?: string;

    Value?: string;
  };

  /**
   * The AWS::AppRunner::Service resource specifies an AppRunner Service.
   */
  export type ServiceResourceType = {
    /**
     * The AppRunner Service Name.
     * Create-only property
     */
    ServiceName?: string;

    /**
     * The AppRunner Service Id
     * Read-only property
     */
    ServiceId?: string;

    /**
     * The Amazon Resource Name (ARN) of the AppRunner Service.
     * Read-only property
     */
    ServiceArn?: string;

    /**
     * The Service Url of the AppRunner Service.
     * Read-only property
     */
    ServiceUrl?: string;

    /**
     * AppRunner Service status.
     * Read-only property
     */
    Status?: string;

    SourceConfiguration: SourceConfigurationType;

    InstanceConfiguration?: InstanceConfigurationType;

    /**
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    EncryptionConfiguration?: EncryptionConfigurationType;

    HealthCheckConfiguration?: HealthCheckConfigurationType;

    ObservabilityConfiguration?: ServiceObservabilityConfigurationType;

    /**
     * Autoscaling configuration ARN
     */
    AutoScalingConfigurationArn?: string;

    NetworkConfiguration?: NetworkConfigurationType;
  };
}
