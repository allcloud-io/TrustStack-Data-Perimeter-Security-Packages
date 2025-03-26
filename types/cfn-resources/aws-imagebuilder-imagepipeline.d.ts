/**
 * TypeScript definitions for AWS::ImageBuilder::ImagePipeline
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::ImagePipeline
 */
export namespace AWS_ImageBuilder_ImagePipeline {
  /**
   * Image tests configuration.
   */
  export type ImageTestsConfigurationType = {
    /**
     * Defines if tests should be executed when building this image.
     */
    ImageTestsEnabled?: boolean;

    /**
     * The maximum time in minutes that tests are permitted to run.
     */
    TimeoutMinutes?: number;
  };

  /**
   * Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.
   */
  export type ImageScanningConfigurationType = {
    /**
     * Contains ECR settings for vulnerability scans.
     */
    EcrConfiguration?: EcrConfigurationType;

    /**
     * This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
     */
    ImageScanningEnabled?: boolean;
  };

  /**
   * Settings for Image Builder to configure the ECR repository and output container images that are scanned.
   */
  export type EcrConfigurationType = {
    /**
     * Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
     */
    ContainerTags?: string[];

    /**
     * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
     */
    RepositoryName?: string;
  };

  /**
   * The schedule of the image pipeline.
   */
  export type ScheduleType = {
    /**
     * The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.
     */
    ScheduleExpression?: string;

    /**
     * The condition configures when the pipeline should trigger a new image build.
     */
    PipelineExecutionStartCondition?: string;
  };

  /**
   * The workflow configuration of the image
   */
  export type WorkflowConfigurationType = {
    /**
     * The Amazon Resource Name (ARN) of the workflow
     */
    WorkflowArn?: string;

    /**
     * The parameters associated with the workflow
     */
    Parameters?: WorkflowParameterType[];

    /**
     * The parallel group name
     */
    ParallelGroup?: string;

    /**
     * Define execution decision in case of workflow failure
     */
    OnFailure?: string;
  };

  /**
   * A parameter associated with the workflow
   */
  export type WorkflowParameterType = {
    Name?: string;

    Value?: WorkflowParameterValueType[];
  };

  /**
   * The value associated with the workflow parameter
   */
  export type WorkflowParameterValueType = {};

  /**
   * Resource schema for AWS::ImageBuilder::ImagePipeline
   */
  export type ImagePipelineResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the image pipeline.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the image pipeline.
     * Create-only property
     */
    Name?: string;

    /**
     * The description of the image pipeline.
     */
    Description?: string;

    /**
     * The image tests configuration of the image pipeline.
     */
    ImageTestsConfiguration?: ImageTestsConfigurationType;

    /**
     * The status of the image pipeline.
     */
    Status?: string;

    /**
     * The schedule of the image pipeline.
     */
    Schedule?: ScheduleType;

    /**
     * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
     */
    ImageRecipeArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
     */
    ContainerRecipeArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
     */
    DistributionConfigurationArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
     */
    InfrastructureConfigurationArn?: string;

    /**
     * Workflows to define the image build process
     */
    Workflows?: WorkflowConfigurationType[];

    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list.
     */
    EnhancedImageMetadataEnabled?: boolean;

    /**
     * Contains settings for vulnerability scans.
     */
    ImageScanningConfiguration?: ImageScanningConfigurationType;

    /**
     * The execution role name/ARN for the image build, if provided
     */
    ExecutionRole?: string;

    /**
     * The tags of this image pipeline.
     */
    Tags?: Record<string, any>;
  };
}
