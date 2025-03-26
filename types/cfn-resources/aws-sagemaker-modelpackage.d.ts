/**
 * TypeScript definitions for AWS::SageMaker::ModelPackage
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::ModelPackage
 */
export namespace AWS_SageMaker_ModelPackage {
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
   * An array of additional Inference Specification objects.
   */
  export type AdditionalInferenceSpecificationsType = {};

  /**
   * Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package.AdditionalInferenceSpecifications can be added to existing model packages using AdditionalInferenceSpecificationsToAdd.
   */
  export type AdditionalInferenceSpecificationDefinitionType = {
    /**
     * The Amazon ECR registry path of the Docker image that contains the inference code.
     */
    Containers: ModelPackageContainerDefinitionType[];

    /**
     * A description of the additional Inference specification.
     */
    Description?: string;

    /**
     * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
     */
    Name: string;

    /**
     * The supported MIME types for the input data.
     */
    SupportedContentTypes?: ContentTypeType[];

    /**
     * A list of the instance types that are used to generate inferences in real-time
     */
    SupportedRealtimeInferenceInstanceTypes?: InferenceInstanceTypeType[];

    /**
     * The supported MIME types for the output data.
     */
    SupportedResponseMIMETypes?: ResponseMIMETypeType[];

    /**
     * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
     */
    SupportedTransformInstanceTypes?: TransformInstanceTypeType[];
  };

  /**
   * Instance types on which a transformation job can be run or on which an endpoint can be deployed.
   */
  export type TransformInstanceTypeType = {};

  /**
   * Instance type that is used to generate inferences in real-time
   */
  export type InferenceInstanceTypeType = {};

  /**
   * The supported MIME type for the input data.
   */
  export type ContentTypeType = {};

  /**
   * The supported MIME types for the output data.
   */
  export type ResponseMIMETypeType = {};

  /**
   * Whether to certify the model package for listing on AWS Marketplace.
   */
  export type CertifyForMarketplaceType = {};

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   */
  export type ClientTokenType = {};

  /**
   * The metadata properties associated with the model package versions.
   */
  export type CustomerMetadataPropertiesType = {};

  /**
   * The machine learning domain of the model package you specified.
   */
  export type DomainType = {};

  /**
   * Represents the drift check baselines that can be used when the model monitor is set using the model package.
   */
  export type DriftCheckBaselinesType = {
    Bias?: DriftCheckBiasType;

    Explainability?: DriftCheckExplainabilityType;

    ModelDataQuality?: DriftCheckModelDataQualityType;

    ModelQuality?: DriftCheckModelQualityType;
  };

  /**
   * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
   */
  export type DriftCheckBiasType = {
    PostTrainingConstraints?: MetricsSourceType;

    PreTrainingConstraints?: MetricsSourceType;

    ConfigFile?: FileSourceType;
  };

  /**
   * Contains explainability metrics for a model.
   */
  export type DriftCheckExplainabilityType = {
    Constraints?: MetricsSourceType;

    ConfigFile?: FileSourceType;
  };

  /**
   * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
   */
  export type DriftCheckModelDataQualityType = {
    Constraints?: MetricsSourceType;

    Statistics?: MetricsSourceType;
  };

  /**
   * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
   */
  export type DriftCheckModelQualityType = {
    Constraints?: MetricsSourceType;

    Statistics?: MetricsSourceType;
  };

  /**
   * Represents a Metric Source Object.
   */
  export type MetricsSourceType = {
    /**
     * The digest of the metric source.
     */
    ContentDigest?: string;

    /**
     * The type of content stored in the metric source.
     */
    ContentType: string;

    /**
     * The Amazon S3 URI for the metric source.
     */
    S3Uri: string;
  };

  /**
   * Represents a File Source Object.
   */
  export type FileSourceType = {
    /**
     * The digest of the file source.
     */
    ContentDigest?: string;

    /**
     * The type of content stored in the file source.
     */
    ContentType?: string;

    /**
     * The Amazon S3 URI for the file source.
     */
    S3Uri: string;
  };

  /**
   * Details about inference jobs that can be run with models based on this model package.
   */
  export type InferenceSpecificationType = {
    /**
     * The Amazon ECR registry path of the Docker image that contains the inference code.
     */
    Containers: ModelPackageContainerDefinitionType[];

    /**
     * The supported MIME types for the input data.
     */
    SupportedContentTypes: ContentTypeType[];

    /**
     * A list of the instance types that are used to generate inferences in real-time
     */
    SupportedRealtimeInferenceInstanceTypes?: InferenceInstanceTypeType[];

    /**
     * The supported MIME types for the output data.
     */
    SupportedResponseMIMETypes: ResponseMIMETypeType[];

    /**
     * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
     */
    SupportedTransformInstanceTypes?: TransformInstanceTypeType[];
  };

  /**
   * Sets the environment variables in the Docker container
   */
  export type EnvironmentType = {};

  /**
   * Describes the Docker container for the model package.
   */
  export type ModelPackageContainerDefinitionType = {
    /**
     * The DNS host name for the Docker container.
     */
    ContainerHostname?: string;

    Environment?: EnvironmentType;

    ModelInput?: Record<string, any>;

    /**
     * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
     */
    Image: string;

    /**
     * An MD5 hash of the training algorithm that identifies the Docker image used for training.
     */
    ImageDigest?: string;

    /**
     * A structure with Model Input details.
     */
    ModelDataUrl?: string;

    ModelDataSource?: ModelDataSourceType;

    /**
     * The machine learning framework of the model package container image.
     */
    Framework?: string;

    /**
     * The framework version of the Model Package Container Image.
     */
    FrameworkVersion?: string;

    /**
     * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
     */
    NearestModelName?: string;
  };

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   */
  export type MetadataPropertiesType = {
    /**
     * The commit ID.
     */
    CommitId?: string;

    /**
     * The entity this entity was generated by.
     */
    GeneratedBy?: string;

    /**
     * The project ID metadata.
     */
    ProjectId?: string;

    /**
     * The repository metadata.
     */
    Repository?: string;
  };

  /**
   * The approval status of the model package.
   */
  export type ModelApprovalStatusType = {};

  /**
   * Indicates if you want to skip model validation.
   */
  export type SkipModelValidationType = {};

  /**
   * A structure that contains model metrics reports.
   */
  export type ModelMetricsType = {
    Bias?: BiasType;

    Explainability?: ExplainabilityType;

    ModelDataQuality?: ModelDataQualityType;

    ModelQuality?: ModelQualityType;
  };

  /**
   * Contains bias metrics for a model.
   */
  export type BiasType = {
    Report?: MetricsSourceType;

    PreTrainingReport?: MetricsSourceType;

    PostTrainingReport?: MetricsSourceType;
  };

  /**
   * Contains explainability metrics for a model.
   */
  export type ExplainabilityType = {
    Report?: MetricsSourceType;
  };

  /**
   * Metrics that measure the quality of the input data for a model.
   */
  export type ModelDataQualityType = {
    Constraints?: MetricsSourceType;

    Statistics?: MetricsSourceType;
  };

  /**
   * Metrics that measure the quality of a model.
   */
  export type ModelQualityType = {
    Constraints?: MetricsSourceType;

    Statistics?: MetricsSourceType;
  };

  /**
   * The description of the model package.
   */
  export type ModelPackageDescriptionType = {};

  /**
   * The name of the model package group.
   */
  export type ModelPackageGroupNameType = {};

  /**
   * The name or arn of the model package.
   */
  export type ModelPackageNameType = {};

  /**
   * The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored pointing to single gzip compressed tar archive.
   */
  export type SamplePayloadUrlType = {};

  /**
   * Details about the algorithm that was used to create the model package.
   */
  export type SourceAlgorithmSpecificationType = {
    /**
     * A list of algorithms that were used to create a model package.
     */
    SourceAlgorithms: SourceAlgorithmType[];
  };

  /**
   * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
   */
  export type SourceAlgorithmType = {
    /**
     * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
     */
    AlgorithmName: string;

    /**
     * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
     */
    ModelDataUrl?: string;
  };

  /**
   * Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.
   */
  export type ValidationSpecificationType = {
    ValidationProfiles: ValidationProfileType[];

    /**
     * The IAM roles to be used for the validation of the model package.
     */
    ValidationRole: string;
  };

  /**
   * Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.
   */
  export type ValidationProfileType = {
    TransformJobDefinition: TransformJobDefinitionType;

    /**
     * The name of the profile for the model package.
     */
    ProfileName: string;
  };

  /**
   * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
   */
  export type TransformJobDefinitionType = {
    Environment?: EnvironmentType;

    /**
     * A string that determines the number of records included in a single mini-batch.
     */
    BatchStrategy?: string;

    /**
     * The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
     */
    MaxConcurrentTransforms?: number;

    /**
     * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
     */
    MaxPayloadInMB?: number;

    TransformInput: TransformInputType;

    TransformOutput: TransformOutputType;

    TransformResources: TransformResourcesType;
  };

  /**
   * Describes the input source of a transform job and the way the transform job consumes it.
   */
  export type TransformInputType = {
    /**
     * If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is None.
     */
    CompressionType?: string;

    /**
     * The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
     */
    ContentType?: string;

    DataSource: DataSourceType;

    /**
     * The method to use to split the transform job's data files into smaller batches.
     */
    SplitType?: string;
  };

  /**
   * Describes the input source of a transform job and the way the transform job consumes it.
   */
  export type DataSourceType = {
    S3DataSource: S3DataSourceType;
  };

  /**
   * Describes the S3 data source.
   */
  export type S3DataSourceType = {
    /**
     * The S3 Data Source Type
     */
    S3DataType: string;

    /**
     * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest.
     */
    S3Uri: string;
  };

  /**
   * Describes the results of a transform job.
   */
  export type TransformOutputType = {
    /**
     * The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
     */
    Accept?: string;

    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
     */
    KmsKeyId?: string;

    /**
     * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job.
     */
    S3OutputPath: string;

    /**
     * Defines how to assemble the results of the transform job as a single S3 object.
     */
    AssembleWith?: string;
  };

  /**
   * Describes the resources, including ML instance types and ML instance count, to use for transform job.
   */
  export type TransformResourcesType = {
    /**
     * The number of ML compute instances to use in the transform job. For distributed transform jobs, specify a value greater than 1. The default value is 1.
     */
    InstanceCount: number;

    /**
     * The ML compute instance type for the transform job.
     */
    InstanceType: string;

    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
     */
    VolumeKmsKeyId?: string;
  };

  /**
   * The Amazon Resource Name (ARN) of the model package group.
   */
  export type ModelPackageArnType = {};

  /**
   * A description provided for the model approval.
   */
  export type ApprovalDescriptionType = {};

  /**
   * The time at which the model package was created.
   */
  export type CreationTimeType = {};

  /**
   * The time at which the model package was last modified.
   */
  export type LastModifiedTimeType = {};

  /**
   * The current status of the model package.
   */
  export type ModelPackageStatusType = {};

  /**
   * Details about the current status of the model package.
   */
  export type ModelPackageStatusDetailsType = {
    ValidationStatuses?: ModelPackageStatusItemType[];
  };

  /**
   * Represents the overall status of a model package.
   */
  export type ModelPackageStatusItemType = {
    /**
     * If the overall status is Failed, the reason for the failure.
     */
    FailureReason?: string;

    /**
     * The name of the model package for which the overall status is being reported.
     */
    Name: string;

    /**
     * The current status.
     */
    Status: string;
  };

  /**
   * The version of the model package.
   */
  export type ModelPackageVersionType = {};

  /**
   * The machine learning task your model package accomplishes.
   */
  export type TaskType = {};

  /**
   * Specifies the location of ML model data to deploy during endpoint creation.
   */
  export type ModelDataSourceType = {
    S3DataSource?: S3ModelDataSourceType;
  };

  /**
   * Specifies the S3 location of ML model data to deploy.
   */
  export type S3ModelDataSourceType = {
    /**
     * Specifies the type of ML model data to deploy.
     */
    S3DataType: string;

    /**
     * Specifies the S3 path of ML model data to deploy.
     */
    S3Uri: string;

    /**
     * Specifies how the ML model data is prepared.
     */
    CompressionType: string;

    ModelAccessConfig?: ModelAccessConfigType;
  };

  /**
   * Specifies the access configuration file for the ML model.
   */
  export type ModelAccessConfigType = {
    /**
     * Specifies agreement to the model end-user license agreement (EULA).
     */
    AcceptEula: boolean;
  };

  /**
   * The URI of the source for the model package.
   */
  export type SourceUriType = {};

  /**
   * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
   */
  export type SecurityConfigType = {
    /**
     * The AWS KMS Key ID (KMSKeyId) used for encryption of model package information.
     */
    KmsKeyId: string;
  };

  /**
   * The model card associated with the model package.
   */
  export type ModelCardType = {
    /**
     * The content of the model card.
     */
    ModelCardContent: string;

    /**
     * The approval status of the model card within your organization.
     */
    ModelCardStatus: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::ModelPackage
   */
  export type ModelPackageResourceType = {
    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationsType;

    CertifyForMarketplace?: CertifyForMarketplaceType;

    /**
     * Create-only property
     */
    ClientToken?: ClientTokenType;

    CustomerMetadataProperties?: CustomerMetadataPropertiesType;

    /**
     * Create-only property
     */
    Domain?: DomainType;

    /**
     * Create-only property
     */
    DriftCheckBaselines?: DriftCheckBaselinesType;

    /**
     * Create-only property
     */
    InferenceSpecification?: InferenceSpecificationType;

    /**
     * Create-only property
     */
    MetadataProperties?: MetadataPropertiesType;

    ModelApprovalStatus?: ModelApprovalStatusType;

    /**
     * Create-only property
     */
    ModelMetrics?: ModelMetricsType;

    /**
     * Create-only property
     */
    ModelPackageDescription?: ModelPackageDescriptionType;

    /**
     * Create-only property
     */
    ModelPackageGroupName?: ModelPackageGroupNameType;

    ModelPackageName?: ModelPackageNameType;

    /**
     * Create-only property
     */
    SamplePayloadUrl?: SamplePayloadUrlType;

    SkipModelValidation?: SkipModelValidationType;

    /**
     * Create-only property
     */
    SourceAlgorithmSpecification?: SourceAlgorithmSpecificationType;

    /**
     * Create-only property
     */
    Task?: TaskType;

    /**
     * Create-only property
     */
    ValidationSpecification?: ValidationSpecificationType;

    /**
     * Read-only property
     */
    ModelPackageArn?: ModelPackageArnType;

    ApprovalDescription?: ApprovalDescriptionType;

    /**
     * Read-only property
     */
    CreationTime?: CreationTimeType;

    LastModifiedTime?: LastModifiedTimeType;

    /**
     * Read-only property
     */
    ModelPackageStatus?: ModelPackageStatusType;

    ModelPackageVersion?: ModelPackageVersionType;

    AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationsType;

    ModelPackageStatusDetails?: ModelPackageStatusDetailsType;

    SourceUri?: SourceUriType;

    ModelCard?: ModelCardType;

    /**
     * Create-only property
     */
    SecurityConfig?: SecurityConfigType;
  };
}
