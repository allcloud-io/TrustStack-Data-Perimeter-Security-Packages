/**
 * TypeScript definitions for AWS::SageMaker::AppImageConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::AppImageConfig
 */
export namespace AWS_SageMaker_AppImageConfig {
  /**
   * The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
   */
  export type KernelGatewayImageConfigType = {
    /**
     * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
     */
    FileSystemConfig?: FileSystemConfigType;

    /**
     * The specification of the Jupyter kernels in the image.
     */
    KernelSpecs: KernelSpecType[];
  };

  /**
   * The configuration for the kernels in a SageMaker image running as a JupyterLab app.
   */
  export type JupyterLabAppImageConfigType = {
    /**
     * The container configuration for a SageMaker image.
     */
    ContainerConfig?: ContainerConfigType;
  };

  /**
   * The configuration for the kernels in a SageMaker image running as a CodeEditor app.
   */
  export type CodeEditorAppImageConfigType = {
    /**
     * The container configuration for a SageMaker image.
     */
    ContainerConfig?: ContainerConfigType;
  };

  /**
   * The container configuration for a SageMaker image.
   */
  export type ContainerConfigType = {
    /**
     * A list of arguments to apply to the container.
     */
    ContainerArguments?: CustomImageContainerArgumentsType[];

    /**
     * The custom entry point to use on container.
     */
    ContainerEntrypoint?: CustomImageContainerEntrypointType[];

    /**
     * A list of variables to apply to the custom container.
     */
    ContainerEnvironmentVariables?: CustomImageContainerEnvironmentVariableType[];
  };

  /**
   * The container image arguments
   */
  export type CustomImageContainerArgumentsType = {};

  /**
   * The container entry point
   */
  export type CustomImageContainerEntrypointType = {};

  export type CustomImageContainerEnvironmentVariableType = {
    Value: string;

    Key: string;
  };

  /**
   * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
   */
  export type FileSystemConfigType = {
    /**
     * The default POSIX group ID (GID). If not specified, defaults to 100.
     */
    DefaultGid?: number;

    /**
     * The default POSIX user ID (UID). If not specified, defaults to 1000.
     */
    DefaultUid?: number;

    /**
     * The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to /home/sagemaker-user.
     */
    MountPath?: string;
  };

  export type KernelSpecType = {
    /**
     * The display name of the kernel.
     */
    DisplayName?: string;

    /**
     * The name of the kernel.
     */
    Name: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::AppImageConfig
   */
  export type AppImageConfigResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the AppImageConfig.
     * Read-only property
     */
    AppImageConfigArn?: string;

    /**
     * The Name of the AppImageConfig.
     * Create-only property
     */
    AppImageConfigName: string;

    /**
     * The KernelGatewayImageConfig.
     */
    KernelGatewayImageConfig?: KernelGatewayImageConfigType;

    /**
     * The JupyterLabAppImageConfig.
     */
    JupyterLabAppImageConfig?: JupyterLabAppImageConfigType;

    /**
     * The CodeEditorAppImageConfig.
     */
    CodeEditorAppImageConfig?: CodeEditorAppImageConfigType;

    /**
     * A list of tags to apply to the AppImageConfig.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
