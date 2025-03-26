/**
 * TypeScript definitions for AWS::ImageBuilder::ContainerRecipe
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::ContainerRecipe
 */
export namespace AWS_ImageBuilder_ContainerRecipe {
  /**
   * Configuration details of the component.
   */
  export type ComponentConfigurationType = {
    /**
     * The Amazon Resource Name (ARN) of the component.
     */
    ComponentArn?: string;

    /**
     * A group of parameter settings that are used to configure the component for a specific recipe.
     */
    Parameters?: ComponentParameterType[];
  };

  /**
   * A group of options that can be used to configure an instance for building and testing container images.
   */
  export type InstanceConfigurationType = {
    /**
     * The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
     */
    Image?: string;

    /**
     * Defines the block devices to attach for building an instance from this Image Builder AMI.
     */
    BlockDeviceMappings?: InstanceBlockDeviceMappingType[];
  };

  /**
   * Defines block device mappings for the instance used to configure your image.
   */
  export type InstanceBlockDeviceMappingType = {
    /**
     * The device to which these mappings apply.
     */
    DeviceName?: string;

    /**
     * Use to manage instance ephemeral devices.
     */
    VirtualName?: string;

    /**
     * Use to remove a mapping from the parent image.
     */
    NoDevice?: string;

    /**
     * Use to manage Amazon EBS-specific configuration for this mapping.
     */
    Ebs?: EbsInstanceBlockDeviceSpecificationType;
  };

  /**
   * Amazon EBS-specific block device mapping specifications.
   */
  export type EbsInstanceBlockDeviceSpecificationType = {
    /**
     * Use to configure device encryption.
     */
    Encrypted?: boolean;

    /**
     * Use to configure delete on termination of the associated device.
     */
    DeleteOnTermination?: boolean;

    /**
     * Use to configure device IOPS.
     */
    Iops?: number;

    /**
     * Use to configure the KMS key to use when encrypting the device.
     */
    KmsKeyId?: string;

    /**
     * The snapshot that defines the device contents.
     */
    SnapshotId?: string;

    /**
     * For GP3 volumes only - The throughput in MiB/s that the volume supports.
     */
    Throughput?: number;

    /**
     * Use to override the device's volume size.
     */
    VolumeSize?: number;

    /**
     * Use to override the device's volume type.
     */
    VolumeType?: string;
  };

  /**
   * The container repository where the output container image is stored.
   */
  export type TargetContainerRepositoryType = {
    /**
     * Specifies the service in which this image was registered.
     */
    Service?: string;

    /**
     * The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
     */
    RepositoryName?: string;
  };

  /**
   * Contains a key/value pair that sets the named component parameter.
   */
  export type ComponentParameterType = {
    /**
     * The name of the component parameter to set.
     */
    Name: string;

    /**
     * Sets the value for the named component parameter.
     */
    Value: string[];
  };

  /**
   * Resource schema for AWS::ImageBuilder::ContainerRecipe
   */
  export type ContainerRecipeResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the container recipe.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the container recipe.
     * Create-only property
     */
    Name?: string;

    /**
     * The description of the container recipe.
     * Create-only property
     */
    Description?: string;

    /**
     * The semantic version of the container recipe (<major>.<minor>.<patch>).
     * Create-only property
     */
    Version?: string;

    /**
     * Components for build and test that are included in the container recipe.
     * Create-only property
     */
    Components?: ComponentConfigurationType[];

    /**
     * A group of options that can be used to configure an instance for building and testing container images.
     * Create-only property
     */
    InstanceConfiguration?: InstanceConfigurationType;

    /**
     * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
     * Create-only property
     */
    DockerfileTemplateData?: string;

    /**
     * The S3 URI for the Dockerfile that will be used to build your container image.
     * Create-only property
     */
    DockerfileTemplateUri?: string;

    /**
     * Specifies the operating system platform when you use a custom source image.
     * Create-only property
     */
    PlatformOverride?: string;

    /**
     * Specifies the type of container, such as Docker.
     * Create-only property
     */
    ContainerType?: string;

    /**
     * Specifies the operating system version for the source image.
     * Create-only property
     */
    ImageOsVersionOverride?: string;

    /**
     * The destination repository for the container image.
     * Create-only property
     */
    TargetRepository?: TargetContainerRepositoryType;

    /**
     * Identifies which KMS key is used to encrypt the container image.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * The source image for the container recipe.
     * Create-only property
     */
    ParentImage?: string;

    /**
     * The working directory to be used during build and test workflows.
     * Create-only property
     */
    WorkingDirectory?: string;

    /**
     * Tags that are attached to the container recipe.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
