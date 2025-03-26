/**
 * TypeScript definitions for AWS::ImageBuilder::DistributionConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::DistributionConfiguration
 */
export namespace AWS_ImageBuilder_DistributionConfiguration {
  /**
   * The distributions of the distribution configuration.
   */
  export type DistributionType = {
    /**
     * region
     */
    Region: string;

    AmiDistributionConfiguration?: AmiDistributionConfigurationType;

    ContainerDistributionConfiguration?: ContainerDistributionConfigurationType;

    /**
     * The License Manager Configuration to associate with the AMI in the specified Region.
     */
    LicenseConfigurationArns?: LicenseConfigurationArnType[];

    /**
     * A group of launchTemplateConfiguration settings that apply to image distribution.
     */
    LaunchTemplateConfigurations?: LaunchTemplateConfigurationType[];

    /**
     * The Windows faster-launching configurations to use for AMI distribution.
     */
    FastLaunchConfigurations?: FastLaunchConfigurationType[];
  };

  /**
   * The specific AMI settings (for example, launch permissions, AMI tags).
   */
  export type AmiDistributionConfigurationType = {
    /**
     * The name of the AMI distribution configuration.
     */
    Name?: string;

    /**
     * The KMS key identifier used to encrypt the distributed image.
     */
    KmsKeyId?: string;

    /**
     * The description of the AMI distribution configuration.
     */
    Description?: string;

    /**
     * The tags to apply to AMIs distributed to this Region.
     */
    AmiTags?: Record<string, any>;

    /**
     * The ID of accounts to which you want to distribute an image.
     */
    TargetAccountIds?: string[];

    LaunchPermissionConfiguration?: LaunchPermissionConfigurationType;
  };

  /**
   * Container distribution settings for encryption, licensing, and sharing in a specific Region.
   */
  export type ContainerDistributionConfigurationType = {
    /**
     * The description of the container distribution configuration.
     */
    Description?: string;

    /**
     * Tags that are attached to the container distribution configuration.
     */
    ContainerTags?: string[];

    /**
     * The destination repository for the container distribution configuration.
     */
    TargetRepository?: TargetContainerRepositoryType;
  };

  /**
   * launchTemplateConfiguration settings that apply to image distribution.
   */
  export type LaunchTemplateConfigurationType = {
    /**
     * Identifies the EC2 launch template to use.
     */
    LaunchTemplateId?: string;

    /**
     * The account ID that this configuration applies to.
     */
    AccountId?: string;

    /**
     * Set the specified EC2 launch template as the default launch template for the specified account.
     */
    SetDefaultVersion?: boolean;
  };

  /**
   * The Windows faster-launching configuration to use for AMI distribution.
   */
  export type FastLaunchConfigurationType = {
    /**
     * The owner account ID for the fast-launch enabled Windows AMI.
     */
    AccountId?: string;

    /**
     * A Boolean that represents the current state of faster launching for the Windows AMI. Set to true to start using Windows faster launching, or false to stop using it.
     */
    Enabled?: boolean;

    /**
     * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
     */
    LaunchTemplate?: FastLaunchLaunchTemplateSpecificationType;

    /**
     * The maximum number of parallel instances that are launched for creating resources.
     */
    MaxParallelLaunches?: number;

    /**
     * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
     */
    SnapshotConfiguration?: FastLaunchSnapshotConfigurationType;
  };

  /**
   * Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.
   */
  export type LaunchPermissionConfigurationType = {
    /**
     * The AWS account ID.
     */
    UserIds?: string[];

    /**
     * The name of the group.
     */
    UserGroups?: string[];

    /**
     * The ARN for an Amazon Web Services Organization that you want to share your AMI with.
     */
    OrganizationArns?: string[];

    /**
     * The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.
     */
    OrganizationalUnitArns?: string[];
  };

  /**
   * The Amazon Resource Name (ARN) of the License Manager configuration.
   */
  export type LicenseConfigurationArnType = {};

  /**
   * The destination repository for the container image.
   */
  export type TargetContainerRepositoryType = {
    /**
     * The service of target container repository.
     */
    Service?: string;

    /**
     * The repository name of target container repository.
     */
    RepositoryName?: string;
  };

  /**
   * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
   */
  export type FastLaunchLaunchTemplateSpecificationType = {
    /**
     * The ID of the launch template to use for faster launching for a Windows AMI.
     */
    LaunchTemplateId?: string;

    /**
     * The name of the launch template to use for faster launching for a Windows AMI.
     */
    LaunchTemplateName?: string;

    /**
     * The version of the launch template to use for faster launching for a Windows AMI.
     */
    LaunchTemplateVersion?: string;
  };

  /**
   * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
   */
  export type FastLaunchSnapshotConfigurationType = {
    /**
     * The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
     */
    TargetResourceCount?: number;
  };

  /**
   * Resource schema for AWS::ImageBuilder::DistributionConfiguration
   */
  export type DistributionConfigurationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the distribution configuration.
     * Create-only property
     */
    Name: string;

    /**
     * The description of the distribution configuration.
     */
    Description?: string;

    /**
     * The distributions of the distribution configuration.
     */
    Distributions: DistributionType[];

    /**
     * The tags associated with the component.
     */
    Tags?: Record<string, any>;
  };
}
