/**
 * TypeScript definitions for AWS::SageMaker::InferenceExperiment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::InferenceExperiment
 */
export namespace AWS_SageMaker_InferenceExperiment {
  /**
   * The name of the endpoint used to run the inference experiment.
   */
  export type EndpointNameType = {};

  /**
   * The metadata of the endpoint on which the inference experiment ran.
   */
  export type EndpointMetadataType = {
    EndpointName: EndpointNameType;

    /**
     * The name of the endpoint configuration.
     */
    EndpointConfigName?: string;

    /**
     * The status of the endpoint. For possible values of the status of an endpoint.
     */
    EndpointStatus?: string;
  };

  /**
   * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
   */
  export type CaptureContentTypeHeaderType = {
    /**
     * The list of all content type headers that SageMaker will treat as CSV and capture accordingly.
     */
    CsvContentTypes?: string[];

    /**
     * The list of all content type headers that SageMaker will treat as JSON and capture accordingly.
     */
    JsonContentTypes?: string[];
  };

  /**
   * The Amazon S3 location and configuration for storing inference request and response data.
   */
  export type DataStorageConfigType = {
    /**
     * The Amazon S3 bucket where the inference request and response data is stored.
     */
    Destination: string;

    /**
     * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
     */
    KmsKey?: string;

    ContentType?: CaptureContentTypeHeaderType;
  };

  /**
   * The duration for which you want the inference experiment to run.
   */
  export type InferenceExperimentScheduleType = {
    /**
     * The timestamp at which the inference experiment started or will start.
     */
    StartTime?: string;

    /**
     * The timestamp at which the inference experiment ended or will end.
     */
    EndTime?: string;
  };

  /**
   * The infrastructure configuration for deploying the model to a real-time inference endpoint.
   */
  export type RealTimeInferenceConfigType = {
    /**
     * The instance type the model is deployed to.
     */
    InstanceType: string;

    /**
     * The number of instances of the type specified by InstanceType.
     */
    InstanceCount: number;
  };

  /**
   * The configuration for the infrastructure that the model will be deployed to.
   */
  export type ModelInfrastructureConfigType = {
    /**
     * The type of the inference experiment that you want to run.
     */
    InfrastructureType: string;

    RealTimeInferenceConfig: RealTimeInferenceConfigType;
  };

  /**
   * Contains information about the deployment options of a model.
   */
  export type ModelVariantConfigType = {
    /**
     * The name of the Amazon SageMaker Model entity.
     */
    ModelName: string;

    /**
     * The name of the variant.
     */
    VariantName: string;

    InfrastructureConfig: ModelInfrastructureConfigType;
  };

  /**
   * The name and sampling percentage of a shadow variant.
   */
  export type ShadowModelVariantConfigType = {
    /**
     * The name of the shadow variant.
     */
    ShadowModelVariantName: string;

    /**
     * The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
     */
    SamplingPercentage: number;
  };

  /**
   * The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
   */
  export type ShadowModeConfigType = {
    /**
     * The name of the production variant, which takes all the inference requests.
     */
    SourceModelVariantName: string;

    /**
     * List of shadow variant configurations.
     */
    ShadowModelVariants: ShadowModelVariantConfigType[];
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::InferenceExperiment
   */
  export type InferenceExperimentResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the inference experiment.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name for the inference experiment.
     * Create-only property
     */
    Name: string;

    /**
     * The type of the inference experiment that you want to run.
     * Create-only property
     */
    Type: string;

    /**
     * The description of the inference experiment.
     */
    Description?: string;

    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
     * Create-only property
     */
    RoleArn: string;

    /**
     * Create-only property
     */
    EndpointName: EndpointNameType;

    /**
     * Read-only property
     */
    EndpointMetadata?: EndpointMetadataType;

    Schedule?: InferenceExperimentScheduleType;

    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
     * Create-only property
     */
    KmsKey?: string;

    DataStorageConfig?: DataStorageConfigType;

    /**
     * An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.
     */
    ModelVariants: ModelVariantConfigType[];

    ShadowModeConfig?: ShadowModeConfigType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The timestamp at which you created the inference experiment.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The timestamp at which you last modified the inference experiment.
     * Read-only property
     */
    LastModifiedTime?: string;

    /**
     * The status of the inference experiment.
     * Read-only property
     */
    Status?: string;

    /**
     * The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.
     */
    StatusReason?: string;

    /**
     * The desired state of the experiment after starting or stopping operation.
     */
    DesiredState?: string;
  };
}
