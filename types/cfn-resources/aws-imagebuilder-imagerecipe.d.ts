/**
 * TypeScript definitions for AWS::ImageBuilder::ImageRecipe
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::ImageRecipe
 */
export namespace AWS_ImageBuilder_ImageRecipe {
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
   * Specify additional settings and launch scripts for your build instances.
   */
  export type AdditionalInstanceConfigurationType = {
    /**
     * Contains settings for the SSM agent on your build instance.
     */
    SystemsManagerAgent?: SystemsManagerAgentType;

    /**
     * Use this property to provide commands or a command script to run when you launch your build instance.
     */
    UserDataOverride?: string;
  };

  /**
   * Contains settings for the SSM agent on your build instance.
   */
  export type SystemsManagerAgentType = {
    /**
     * Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.
     */
    UninstallAfterBuild?: boolean;
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
   * Resource schema for AWS::ImageBuilder::ImageRecipe
   */
  export type ImageRecipeResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the image recipe.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the image recipe.
     * Create-only property
     */
    Name: string;

    /**
     * The description of the image recipe.
     * Create-only property
     */
    Description?: string;

    /**
     * The version of the image recipe.
     * Create-only property
     */
    Version: string;

    /**
     * The components of the image recipe.
     * Create-only property
     */
    Components: ComponentConfigurationType[];

    /**
     * The block device mappings to apply when creating images from this recipe.
     * Create-only property
     */
    BlockDeviceMappings?: InstanceBlockDeviceMappingType[];

    /**
     * The parent image of the image recipe.
     * Create-only property
     */
    ParentImage: string;

    /**
     * The working directory to be used during build and test workflows.
     * Create-only property
     */
    WorkingDirectory?: string;

    /**
     * Specify additional settings and launch scripts for your build instances.
     */
    AdditionalInstanceConfiguration?: AdditionalInstanceConfigurationType;

    /**
     * The tags of the image recipe.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
