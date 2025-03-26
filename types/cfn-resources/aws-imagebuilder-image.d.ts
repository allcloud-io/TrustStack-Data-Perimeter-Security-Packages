/**
 * TypeScript definitions for AWS::ImageBuilder::Image
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::Image
 */
export namespace AWS_ImageBuilder_Image {
  /**
   * Contains settings for Image Builder image resource and container image scans.
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
   * The workflow configuration of the image
   */
  export type WorkflowConfigurationType = {
    /**
     * The parallel group name
     */
    ParallelGroup?: string;

    /**
     * The parameters associated with the workflow
     */
    Parameters?: WorkflowParameterType[];

    /**
     * The Amazon Resource Name (ARN) of the workflow
     */
    WorkflowArn?: string;

    /**
     * Define execution decision in case of workflow failure
     */
    OnFailure?: string;
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
     * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
     */
    RepositoryName?: string;
  };

  /**
   * The value associated with the workflow parameter
   */
  export type WorkflowParameterValueType = {};

  /**
   * The image tests configuration used when creating this image.
   */
  export type ImageTestsConfigurationType = {
    /**
     * TimeoutMinutes
     */
    TimeoutMinutes?: number;

    /**
     * ImageTestsEnabled
     */
    ImageTestsEnabled?: boolean;
  };

  /**
   * A parameter associated with the workflow
   */
  export type WorkflowParameterType = {
    Value?: WorkflowParameterValueType[];

    Name?: string;
  };

  /**
   * Resource schema for AWS::ImageBuilder::Image
   */
  export type ImageResourceType = {
    /**
     * Contains settings for vulnerability scans.
     * Create-only property
     */
    ImageScanningConfiguration?: ImageScanningConfigurationType;

    /**
     * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
     * Create-only property
     */
    ContainerRecipeArn?: string;

    /**
     * Workflows to define the image build process
     * Create-only property
     */
    Workflows?: WorkflowConfigurationType[];

    /**
     * URI for containers created in current Region with default ECR image tag
     * Read-only property
     */
    ImageUri?: string;

    /**
     * The name of the image.
     * Read-only property
     */
    Name?: string;

    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration.
     * Create-only property
     */
    InfrastructureConfigurationArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
     * Create-only property
     */
    ImageRecipeArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the distribution configuration.
     * Create-only property
     */
    DistributionConfigurationArn?: string;

    /**
     * The AMI ID of the EC2 AMI in current region.
     * Read-only property
     */
    ImageId?: string;

    /**
     * The image tests configuration used when creating this image.
     * Create-only property
     */
    ImageTestsConfiguration?: ImageTestsConfigurationType;

    /**
     * The Amazon Resource Name (ARN) of the image.
     * Read-only property
     */
    Arn?: string;

    /**
     * Collects additional information about the image being created, including the operating system (OS) version and package list.
     * Create-only property
     */
    EnhancedImageMetadataEnabled?: boolean;

    /**
     * The execution role name/ARN for the image build, if provided
     */
    ExecutionRole?: string;

    /**
     * The tags associated with the image.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
