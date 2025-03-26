/**
 * TypeScript definitions for AWS::SageMaker::EndpointConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::EndpointConfig
 */
export namespace AWS_SageMaker_EndpointConfig {
  export type ManagedInstanceScalingType = {
    Status?: string;

    MaxInstanceCount?: number;

    MinInstanceCount?: number;
  };

  export type AsyncInferenceNotificationConfigType = {
    IncludeInferenceResponseIn?: string[];

    SuccessTopic?: string;

    ErrorTopic?: string;
  };

  export type ClarifyHeaderType = {};

  export type ProductionVariantType = {
    ManagedInstanceScaling?: ManagedInstanceScalingType;

    ModelName?: string;

    VolumeSizeInGB?: number;

    EnableSSMAccess?: boolean;

    VariantName: string;

    InitialInstanceCount?: number;

    RoutingConfig?: RoutingConfigType;

    InitialVariantWeight?: number;

    ModelDataDownloadTimeoutInSeconds?: number;

    InferenceAmiVersion?: string;

    ContainerStartupHealthCheckTimeoutInSeconds?: number;

    ServerlessConfig?: ServerlessConfigType;

    InstanceType?: string;
  };

  export type VpcConfigType = {
    SecurityGroupIds: string[];

    Subnets: string[];
  };

  export type ClarifyInferenceConfigType = {
    ContentTemplate?: string;

    LabelHeaders?: ClarifyHeaderType[];

    MaxPayloadInMB?: number;

    ProbabilityIndex?: number;

    LabelAttribute?: string;

    FeatureTypes?: ClarifyFeatureTypeType[];

    FeatureHeaders?: ClarifyHeaderType[];

    LabelIndex?: number;

    ProbabilityAttribute?: string;

    FeaturesAttribute?: string;

    MaxRecordCount?: number;
  };

  export type ExplainerConfigType = {
    ClarifyExplainerConfig?: ClarifyExplainerConfigType;
  };

  export type ClarifyFeatureTypeType = {};

  export type CaptureContentTypeHeaderType = {
    CsvContentTypes?: string[];

    JsonContentTypes?: string[];
  };

  export type RoutingConfigType = {
    RoutingStrategy?: string;
  };

  export type ClarifyTextConfigType = {
    Language: string;

    Granularity: string;
  };

  export type DataCaptureConfigType = {
    CaptureOptions: CaptureOptionType[];

    KmsKeyId?: string;

    DestinationS3Uri: string;

    InitialSamplingPercentage: number;

    CaptureContentTypeHeader?: CaptureContentTypeHeaderType;

    EnableCapture?: boolean;
  };

  export type AsyncInferenceConfigType = {
    ClientConfig?: AsyncInferenceClientConfigType;

    OutputConfig: AsyncInferenceOutputConfigType;
  };

  export type AsyncInferenceClientConfigType = {
    MaxConcurrentInvocationsPerInstance?: number;
  };

  export type ClarifyShapBaselineConfigType = {
    MimeType?: string;

    ShapBaseline?: string;

    ShapBaselineUri?: string;
  };

  export type ServerlessConfigType = {
    MaxConcurrency: number;

    MemorySizeInMB: number;

    ProvisionedConcurrency?: number;
  };

  export type ClarifyShapConfigType = {
    TextConfig?: ClarifyTextConfigType;

    UseLogit?: boolean;

    Seed?: number;

    ShapBaselineConfig: ClarifyShapBaselineConfigType;

    NumberOfSamples?: number;
  };

  export type ClarifyExplainerConfigType = {
    EnableExplanations?: string;

    ShapConfig: ClarifyShapConfigType;

    InferenceConfig?: ClarifyInferenceConfigType;
  };

  export type CaptureOptionType = {
    CaptureMode: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type AsyncInferenceOutputConfigType = {
    NotificationConfig?: AsyncInferenceNotificationConfigType;

    KmsKeyId?: string;

    S3OutputPath?: string;

    S3FailurePath?: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::EndpointConfig
   */
  export type EndpointConfigResourceType = {
    /**
     * Create-only property
     */
    ShadowProductionVariants?: ProductionVariantType[];

    /**
     * Create-only property
     */
    DataCaptureConfig?: DataCaptureConfigType;

    /**
     * Create-only property
     */
    ExecutionRoleArn?: string;

    /**
     * Create-only property
     */
    EnableNetworkIsolation?: boolean;

    /**
     * Create-only property
     */
    ProductionVariants: ProductionVariantType[];

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * Create-only property
     */
    AsyncInferenceConfig?: AsyncInferenceConfigType;

    /**
     * Create-only property
     */
    VpcConfig?: VpcConfigType;

    /**
     * Create-only property
     */
    EndpointConfigName?: string;

    /**
     * Create-only property
     */
    ExplainerConfig?: ExplainerConfigType;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
