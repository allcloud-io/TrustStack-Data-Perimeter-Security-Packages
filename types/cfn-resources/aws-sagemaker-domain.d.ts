/**
 * TypeScript definitions for AWS::SageMaker::Domain
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Domain
 */
export namespace AWS_SageMaker_Domain {
  /**
   * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the CreateUserProfile API is called, and as DefaultUserSettings when the CreateDomain API is called.
   */
  export type UserSettingsType = {
    /**
     * The execution role for the user.
     */
    ExecutionRole: string;

    /**
     * The Jupyter server's app settings.
     */
    JupyterServerAppSettings?: JupyterServerAppSettingsType;

    /**
     * The kernel gateway app settings.
     */
    KernelGatewayAppSettings?: KernelGatewayAppSettingsType;

    RStudioServerProAppSettings?: RStudioServerProAppSettingsType;

    RSessionAppSettings?: RSessionAppSettingsType;

    JupyterLabAppSettings?: JupyterLabAppSettingsType;

    SpaceStorageSettings?: DefaultSpaceStorageSettingsType;

    CodeEditorAppSettings?: CodeEditorAppSettingsType;

    StudioWebPortalSettings?: StudioWebPortalSettingsType;

    /**
     * Defines which Amazon SageMaker application users are directed to by default.
     */
    DefaultLandingUri?: string;

    /**
     * Indicates whether the Studio experience is available to users. If not, users cannot access Studio.
     */
    StudioWebPortal?: string;

    CustomPosixUserConfig?: CustomPosixUserConfigType;

    CustomFileSystemConfigs?: CustomFileSystemConfigType[];

    /**
     * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
     */
    SecurityGroups?: string[];

    /**
     * The sharing settings.
     */
    SharingSettings?: SharingSettingsType;
  };

  /**
   * A collection of settings that apply to spaces of Amazon SageMaker Studio. These settings are specified when the Create/Update Domain API is called.
   */
  export type DefaultSpaceSettingsType = {
    /**
     * The execution role for the space.
     */
    ExecutionRole: string;

    /**
     * The Jupyter server's app settings.
     */
    JupyterServerAppSettings?: JupyterServerAppSettingsType;

    /**
     * The kernel gateway app settings.
     */
    KernelGatewayAppSettings?: KernelGatewayAppSettingsType;

    /**
     * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
     */
    SecurityGroups?: string[];

    /**
     * The Jupyter lab's app settings.
     */
    JupyterLabAppSettings?: JupyterLabAppSettingsType;

    /**
     * The Jupyter lab's space storage settings.
     */
    SpaceStorageSettings?: DefaultSpaceStorageSettingsType;

    /**
     * The Jupyter lab's custom posix user configurations.
     */
    CustomPosixUserConfig?: CustomPosixUserConfigType;

    CustomFileSystemConfigs?: CustomFileSystemConfigType[];
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

  export type ResourceSpecType = {
    /**
     * The instance type that the image version runs on.
     */
    InstanceType?: string;

    /**
     * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
     */
    SageMakerImageArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the image version created on the instance.
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
   * The JupyterLab app settings.
   */
  export type JupyterLabAppSettingsType = {
    /**
     * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
     */
    DefaultResourceSpec?: ResourceSpecType;

    /**
     * A list of LifecycleConfigArns available for use with JupyterLab apps.
     */
    LifecycleConfigArns?: StudioLifecycleConfigArnType[];

    /**
     * A list of CodeRepositories available for use with JupyterLab apps.
     */
    CodeRepositories?: CodeRepositoryType[];

    /**
     * A list of custom images for use for JupyterLab apps.
     */
    CustomImages?: CustomImageType[];

    AppLifecycleManagement?: AppLifecycleManagementType;
  };

  export type AppLifecycleManagementType = {
    IdleSettings?: IdleSettingsType;
  };

  export type IdleSettingsType = {
    LifecycleManagement?: LifecycleManagementType;

    IdleTimeoutInMinutes?: IdleTimeoutInMinutesType;

    MinIdleTimeoutInMinutes?: MinIdleTimeoutInMinutesType;

    MaxIdleTimeoutInMinutes?: MaxIdleTimeoutInMinutesType;
  };

  /**
   * A flag to enable/disable AppLifecycleManagement settings
   */
  export type LifecycleManagementType = {};

  /**
   * The idle timeout value set in minutes
   */
  export type IdleTimeoutInMinutesType = {};

  /**
   * The minimum idle timeout value set in minutes
   */
  export type MinIdleTimeoutInMinutesType = {};

  /**
   * The maximum idle timeout value set in minutes
   */
  export type MaxIdleTimeoutInMinutesType = {};

  export type CodeRepositoryType = {
    /**
     * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
     */
    RepositoryUrl: string;
  };

  /**
   * Default storage settings for a space.
   */
  export type DefaultSpaceStorageSettingsType = {
    DefaultEbsStorageSettings?: DefaultEbsStorageSettingsType;
  };

  /**
   * Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS
   */
  export type DefaultEbsStorageSettingsType = {
    /**
     * Default size of the Amazon EBS volume in Gb
     */
    DefaultEbsVolumeSizeInGb: SpaceEbsVolumeSizeInGbType;

    /**
     * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
     */
    MaximumEbsVolumeSizeInGb: SpaceEbsVolumeSizeInGbType;
  };

  export type SpaceEbsVolumeSizeInGbType = {};

  /**
   * The CodeEditor app settings.
   */
  export type CodeEditorAppSettingsType = {
    /**
     * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
     */
    DefaultResourceSpec?: ResourceSpecType;

    /**
     * A list of LifecycleConfigArns available for use with CodeEditor apps.
     */
    LifecycleConfigArns?: StudioLifecycleConfigArnType[];

    /**
     * A list of custom images for use for CodeEditor apps.
     */
    CustomImages?: CustomImageType[];

    AppLifecycleManagement?: AppLifecycleManagementType;
  };

  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
   */
  export type StudioLifecycleConfigArnType = {};

  export type CustomPosixUserConfigType = {
    Uid: number;

    Gid: number;
  };

  export type CustomFileSystemConfigType = {
    EFSFileSystemConfig?: EFSFileSystemConfigType;

    FSxLustreFileSystemConfig?: FSxLustreFileSystemConfigType;
  };

  export type EFSFileSystemConfigType = {
    FileSystemPath?: string;

    FileSystemId: string;
  };

  export type FSxLustreFileSystemConfigType = {
    FileSystemPath?: string;

    FileSystemId: string;
  };

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

  /**
   * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called.
   */
  export type SharingSettingsType = {
    /**
     * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
     */
    NotebookOutputOption?: string;

    /**
     * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
     */
    S3KmsKeyId?: string;

    /**
     * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
     */
    S3OutputPath?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * A collection of Domain settings.
   */
  export type DomainSettingsType = {
    /**
     * The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps.
     */
    SecurityGroupIds?: string[];

    RStudioServerProDomainSettings?: RStudioServerProDomainSettingsType;

    DockerSettings?: DockerSettingsType;

    /**
     * The configuration for attaching a SageMaker user profile name to the execution role as a sts:SourceIdentity key.
     */
    ExecutionRoleIdentityConfig?: string;
  };

  /**
   * A collection of settings that are required to start docker-proxy server.
   */
  export type DockerSettingsType = {
    /**
     * The flag to enable/disable docker-proxy server
     */
    EnableDockerAccess?: string;

    /**
     * A list of account id's that would be used to pull images from in VpcOnly mode
     */
    VpcOnlyTrustedAccounts?: string[];
  };

  /**
   * A collection of settings that update the current configuration for the RStudioServerPro Domain-level app.
   */
  export type RStudioServerProDomainSettingsType = {
    /**
     * The ARN of the execution role for the RStudioServerPro Domain-level app.
     */
    DomainExecutionRoleArn: string;

    /**
     * A URL pointing to an RStudio Connect server.
     */
    RStudioConnectUrl?: string;

    /**
     * A URL pointing to an RStudio Package Manager server.
     */
    RStudioPackageManagerUrl?: string;

    DefaultResourceSpec?: ResourceSpecType;
  };

  /**
   * A collection of settings that apply to an RSessionGateway app.
   */
  export type RSessionAppSettingsType = {
    /**
     * A list of custom SageMaker images that are configured to run as a KernelGateway app.
     */
    CustomImages?: CustomImageType[];

    DefaultResourceSpec?: ResourceSpecType;
  };

  /**
   * A collection of settings that configure user interaction with the RStudioServerPro app.
   */
  export type RStudioServerProAppSettingsType = {
    /**
     * Indicates whether the current user has access to the RStudioServerPro app.
     */
    AccessStatus?: string;

    /**
     * The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.
     */
    UserGroup?: string;
  };

  /**
   * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
   */
  export type StudioWebPortalSettingsType = {
    /**
     * The machine learning tools that are hidden from the Studio left navigation pane.
     */
    HiddenMlTools?: MlToolsType[];

    /**
     * Applications supported in Studio that are hidden from the Studio left navigation pane.
     */
    HiddenAppTypes?: AppTypeType[];
  };

  export type MlToolsType = {};

  export type AppTypeType = {};

  /**
   * Resource Type definition for AWS::SageMaker::Domain
   */
  export type DomainResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the created domain.
     * Read-only property
     */
    DomainArn?: string;

    /**
     * The URL to the created domain.
     * Read-only property
     */
    Url?: string;

    /**
     * Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.
     */
    AppNetworkAccessType?: string;

    /**
     * The mode of authentication that members use to access the domain.
     * Create-only property
     */
    AuthMode: string;

    /**
     * The default user settings.
     */
    DefaultUserSettings: UserSettingsType;

    /**
     * The default space settings.
     */
    DefaultSpaceSettings?: DefaultSpaceSettingsType;

    /**
     * A name for the domain.
     * Create-only property
     */
    DomainName: string;

    /**
     * SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * The VPC subnets that Studio uses for communication.
     */
    SubnetIds: string[];

    /**
     * A list of tags to apply to the user profile.
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
     * Create-only property
     */
    VpcId: string;

    /**
     * The domain name.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The ID of the Amazon Elastic File System (EFS) managed by this Domain.
     * Read-only property
     */
    HomeEfsFileSystemId?: string;

    /**
     * The SSO managed application instance ID.
     * Read-only property
     */
    SingleSignOnManagedApplicationInstanceId?: string;

    /**
     * The ARN of the application managed by SageMaker in IAM Identity Center. This value is only returned for domains created after October 1, 2023.
     * Read-only property
     */
    SingleSignOnApplicationArn?: string;

    DomainSettings?: DomainSettingsType;

    /**
     * The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided.
     */
    AppSecurityGroupManagement?: string;

    /**
     * The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app.
     * Read-only property
     */
    SecurityGroupIdForDomainBoundary?: string;

    /**
     * Indicates whether the tags added to Domain, User Profile and Space entity is propagated to all SageMaker resources.
     */
    TagPropagation?: string;
  };
}
