/**
 * TypeScript definitions for AWS::SageMaker::ModelCard
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::ModelCard.
 */
export namespace AWS_SageMaker_ModelCard {
  /**
   * An optional Key Management Service key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with highly sensitive data.
   *
   */
  export type SecurityConfigType = {
    /**
     * A Key Management Service key ID to use for encrypting a model card.
     */
    KmsKeyId?: string;
  };

  /**
   * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
   */
  export type UserContextType = {
    /**
     * The Amazon Resource Name (ARN) of the user's profile.
     */
    UserProfileArn?: string;

    /**
     * The name of the user's profile.
     */
    UserProfileName?: string;

    /**
     * The domain associated with the user.
     */
    DomainId?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The tag key. Tag keys must be unique per resource.
     */
    Key: string;

    /**
     * The tag value.
     */
    Value: string;
  };

  /**
   * The content of the model card.
   */
  export type ContentType = {
    ModelOverview?: ModelOverviewType;

    ModelPackageDetails?: ModelPackageDetailsType;

    IntendedUses?: IntendedUsesType;

    BusinessDetails?: BusinessDetailsType;

    TrainingDetails?: TrainingDetailsType;

    EvaluationDetails?: EvaluationDetailsType;

    AdditionalInformation?: AdditionalInformationType;
  };

  /**
   * Overview about the model.
   */
  export type ModelOverviewType = {
    /**
     * description of model.
     */
    ModelDescription?: string;

    /**
     * Owner of model.
     */
    ModelOwner?: string;

    /**
     * Creator of model.
     */
    ModelCreator?: string;

    /**
     * Problem being solved with the model.
     */
    ProblemType?: string;

    /**
     * Algorithm used to solve the problem.
     */
    AlgorithmType?: string;

    /**
     * SageMaker Model Arn or Non SageMaker Model id.
     */
    ModelId?: string;

    /**
     * Location of the model artifact.
     */
    ModelArtifact?: string[];

    /**
     * Name of the model.
     */
    ModelName?: string;

    /**
     * Version of the model.
     */
    ModelVersion?: number;

    /**
     * Overview about the inference.
     */
    InferenceEnvironment?: Record<string, any>;
  };

  /**
   * Metadata information related to model package version
   */
  export type ModelPackageDetailsType = {
    /**
     * A brief summary of the model package
     */
    ModelPackageDescription?: string;

    /**
     * The Amazon Resource Name (ARN) of the model package
     */
    ModelPackageArn?: string;

    /**
     * Information about the user who created model package.
     */
    CreatedBy?: ModelPackageCreatorType;

    /**
     * Current status of model package
     */
    ModelPackageStatus?: string;

    /**
     * Current approval status of model package
     */
    ModelApprovalStatus?: string;

    /**
     * A description provided for the model approval
     */
    ApprovalDescription?: string;

    /**
     * If the model is a versioned model, the name of the model group that the versioned model belongs to.
     */
    ModelPackageGroupName?: string;

    /**
     * Name of the model package
     */
    ModelPackageName?: string;

    /**
     * Version of the model package
     */
    ModelPackageVersion?: number;

    /**
     * The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing.
     */
    Domain?: string;

    /**
     * The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification.
     */
    Task?: string;

    /**
     * A list of algorithms that were used to create a model package.
     */
    SourceAlgorithms?: SourceAlgorithmsType;

    /**
     * Details about inference jobs that can be run with models based on this model package.
     */
    InferenceSpecification?: InferenceSpecificationType;
  };

  /**
   * Intended usage of model.
   */
  export type IntendedUsesType = {
    /**
     * Why the model was developed?
     */
    PurposeOfModel?: string;

    /**
     * intended use cases.
     */
    IntendedUses?: string;

    FactorsAffectingModelEfficiency?: string;

    RiskRating?: RiskRatingType;

    ExplanationsForRiskRating?: string;
  };

  /**
   * Business details.
   */
  export type BusinessDetailsType = {
    /**
     * What business problem does the model solve?
     */
    BusinessProblem?: string;

    /**
     * Business stakeholders.
     */
    BusinessStakeholders?: string;

    /**
     * Line of business.
     */
    LineOfBusiness?: string;
  };

  /**
   * Overview about the training.
   */
  export type TrainingDetailsType = {
    ObjectiveFunction?: ObjectiveFunctionType;

    TrainingObservations?: string;

    TrainingJobDetails?: Record<string, any>;
  };

  export type EvaluationDetailsType = {};

  /**
   * item of evaluation details
   */
  export type EvaluationDetailType = {
    Name: string;

    EvaluationObservation?: string;

    EvaluationJobArn?: string;

    Datasets?: string[];

    /**
     * additional attributes associated with the evaluation results.
     */
    Metadata?: Record<string, any>;

    MetricGroups?: MetricGroupType[];
  };

  /**
   * item in metric groups
   */
  export type MetricGroupType = {
    Name: string;

    MetricData: any[];
  };

  export type AdditionalInformationType = {
    /**
     * Any ethical considerations that the author wants to provide.
     */
    EthicalConsiderations?: string;

    /**
     * Caveats and recommendations for people who might use this model in their applications.
     */
    CaveatsAndRecommendations?: string;

    /**
     * customer details.
     */
    CustomDetails?: Record<string, any>;
  };

  export type ModelPackageCreatorType = {
    /**
     * The name of the user's profile in Studio
     */
    UserProfileName?: string;
  };

  export type SourceAlgorithmsType = {};

  export type SourceAlgorithmType = {
    /**
     * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
     */
    AlgorithmName: string;

    /**
     * The Amazon S3 path where the model artifacts, which result from model training, are stored.
     */
    ModelDataUrl?: string;
  };

  export type InferenceSpecificationType = {
    /**
     * Contains inference related information which were used to create model package.
     */
    Containers: ContainerType[];
  };

  export type ContainerType = {
    /**
     * The Amazon S3 path where the model artifacts, which result from model training, are stored.
     */
    ModelDataUrl?: string;

    /**
     * Inference environment path. The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
     */
    Image: string;

    /**
     * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
     */
    NearestModelName?: string;
  };

  /**
   * Risk rating of model.
   */
  export type RiskRatingType = {};

  /**
   * the objective function the model will optimize for.
   */
  export type ObjectiveFunctionType = {
    /**
     * objective function that training job is optimized for.
     */
    Function?: Record<string, any>;

    Notes?: string;
  };

  /**
   * training metric data.
   */
  export type TrainingMetricType = {
    Name: string;

    Notes?: string;

    Value: number;
  };

  /**
   * training hyper parameter
   */
  export type TrainingHyperParameterType = {
    Name: string;

    Value: string;
  };

  /**
   * Linear graph metric.
   */
  export type LinearGraphMetricType = {
    Name: string;

    Notes?: string;

    Type: string;

    Value: any;

    XAxisName?: AxisNameStringType;

    YAxisName?: AxisNameStringType;
  };

  export type BarChartMetricType = {
    Name: string;

    Notes?: string;

    Type: string;

    Value: any;

    XAxisName?: AxisNameArrayType;

    YAxisName?: AxisNameStringType;
  };

  export type MatrixMetricType = {
    Name: string;

    Notes?: string;

    Type: string;

    Value: any;

    XAxisName?: AxisNameArrayType;

    YAxisName?: AxisNameArrayType;
  };

  /**
   * metric data
   */
  export type SimpleMetricType = {
    Name: string;

    Notes?: string;

    Type: string;

    Value: any;

    XAxisName?: AxisNameStringType;

    YAxisName?: AxisNameStringType;
  };

  export type AxisNameStringType = {};

  export type AxisNameArrayType = {};

  /**
   * Resource Type definition for AWS::SageMaker::ModelCard.
   */
  export type ModelCardResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the successfully created model card.
     * Read-only property
     */
    ModelCardArn?: string;

    /**
     * A version of the model card.
     * Read-only property
     */
    ModelCardVersion?: number;

    /**
     * The unique name of the model card.
     * Create-only property
     */
    ModelCardName: string;

    /**
     * Create-only property
     */
    SecurityConfig?: SecurityConfigType;

    /**
     * The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
     */
    ModelCardStatus: string;

    Content: ContentType;

    /**
     * The date and time the model card was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    CreatedBy?: UserContextType;

    /**
     * The date and time the model card was last modified.
     * Read-only property
     */
    LastModifiedTime?: string;

    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    LastModifiedBy?: UserContextType;

    /**
     * The processing status of model card deletion. The ModelCardProcessingStatus updates throughout the different deletion steps.
     * Default: "UnsetValue"
     * Read-only property
     */
    ModelCardProcessingStatus?: string;

    /**
     * Key-value pairs used to manage metadata for model cards.
     */
    Tags?: TagType[];
  };
}
