/**
 * TypeScript definitions for AWS::SageMaker::Space
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Space
 */
export namespace AWS_SageMaker_Space {
  export type SpaceSharingSettingsType = {
    SharingType: string;
  };

  export type OwnershipSettingsType = {
    OwnerUserProfileName: string;
  };

  /**
   * A collection of settings that apply to spaces of Amazon SageMaker Studio. These settings are specified when the CreateSpace API is called.
   */
  export type SpaceSettingsType = {
    /**
     * The Jupyter server's app settings.
     */
    JupyterServerAppSettings?: JupyterServerAppSettingsType;

    /**
     * The kernel gateway app settings.
     */
    KernelGatewayAppSettings?: KernelGatewayAppSettingsType;

    /**
     * The JupyterLab app settings.
     */
    JupyterLabAppSettings?: SpaceJupyterLabAppSettingsType;

    /**
     * The CodeEditor app settings.
     */
    CodeEditorAppSettings?: SpaceCodeEditorAppSettingsType;

    /**
     * Default storage settings for a space.
     */
    SpaceStorageSettings?: SpaceStorageSettingsType;

    AppType?: AppTypeType;

    CustomFileSystems?: CustomFileSystemsType;
  };

  export type AppTypeType = {};

  export type CustomFileSystemsType = {};

  export type CustomFileSystemType = {
    EFSFileSystem?: EFSFileSystemType;

    FSxLustreFileSystem?: FSxLustreFileSystemType;
  };

  export type EFSFileSystemType = {
    FileSystemId: string;
  };

  export type FSxLustreFileSystemType = {
    FileSystemId: string;
  };

  /**
   * The JupyterServer app settings.
   */
  export type SpaceJupyterLabAppSettingsType = {
    DefaultResourceSpec?: ResourceSpecType;

    AppLifecycleManagement?: SpaceAppLifecycleManagementType;

    /**
     * A list of CodeRepositories available for use with JupyterLab apps.
     */
    CodeRepositories?: CodeRepositoryType[];
  };

  export type SpaceAppLifecycleManagementType = {
    IdleSettings?: SpaceIdleSettingsType;
  };

  export type SpaceIdleSettingsType = {
    /**
     * The space idle timeout value set in minutes
     */
    IdleTimeoutInMinutes?: number;
  };

  export type CodeRepositoryType = {
    /**
     * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
     */
    RepositoryUrl: string;
  };

  /**
   * The CodeEditor app settings.
   */
  export type SpaceCodeEditorAppSettingsType = {
    DefaultResourceSpec?: ResourceSpecType;

    AppLifecycleManagement?: SpaceAppLifecycleManagementType;
  };

  /**
   * The JupyterServer app settings.
   */
  export type JupyterServerAppSettingsType = {
    DefaultResourceSpec?: ResourceSpecType;

    /**
     * A list of LifecycleConfigArns available for use with JupyterServer apps.
     */
    LifecycleConfigArns?: StudioLifecycleConfigArnType[];
  };

  export type SpaceStorageSettingsType = {
    EbsStorageSettings?: EbsStorageSettingsType;
  };

  /**
   * Properties related to the space's Amazon Elastic Block Store volume.
   */
  export type EbsStorageSettingsType = {
    /**
     * Size of the Amazon EBS volume in Gb
     */
    EbsVolumeSizeInGb: SpaceEbsVolumeSizeInGbType;
  };

  export type SpaceEbsVolumeSizeInGbType = {};

  export type ResourceSpecType = {
    /**
     * The instance type that the image version runs on.
     */
    InstanceType?: string;

    /**
     * The ARN of the SageMaker image that the image version belongs to.
     */
    SageMakerImageArn?: string;

    /**
     * The ARN of the image version created on the instance.
     */
    SageMakerImageVersionArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
     */
    LifecycleConfigArn?: string;
  };

  /**
   * The kernel gateway app settings.
   */
  export type KernelGatewayAppSettingsType = {
    /**
     * A list of custom SageMaker images that are configured to run as a KernelGateway app.
     */
    CustomImages?: CustomImageType[];

    /**
     * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
     */
    DefaultResourceSpec?: ResourceSpecType;

    /**
     * A list of LifecycleConfigArns available for use with KernelGateway apps.
     */
    LifecycleConfigArns?: StudioLifecycleConfigArnType[];
  };

  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
   */
  export type StudioLifecycleConfigArnType = {};

  /**
   * A custom SageMaker image.
   */
  export type CustomImageType = {
    /**
     * The Name of the AppImageConfig.
     */
    AppImageConfigName: string;

    /**
     * The name of the CustomImage. Must be unique to your account.
     */
    ImageName: string;

    /**
     * The version number of the CustomImage.
     */
    ImageVersionNumber?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::Space
   */
  export type SpaceResourceType = {
    /**
     * The space Amazon Resource Name (ARN).
     * Read-only property
     */
    SpaceArn?: string;

    /**
     * The ID of the associated Domain.
     * Create-only property
     */
    DomainId: string;

    /**
     * A name for the Space.
     * Create-only property
     */
    SpaceName: string;

    /**
     * A collection of settings.
     */
    SpaceSettings?: SpaceSettingsType;

    /**
     * A list of tags to apply to the space.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    OwnershipSettings?: OwnershipSettingsType;

    /**
     * Create-only property
     */
    SpaceSharingSettings?: SpaceSharingSettingsType;

    SpaceDisplayName?: string;

    /**
     * Read-only property
     */
    Url?: string;
  };
}
