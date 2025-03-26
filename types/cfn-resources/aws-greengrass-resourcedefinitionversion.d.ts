/**
 * TypeScript definitions for AWS::Greengrass::ResourceDefinitionVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::ResourceDefinitionVersion
 */
export namespace AWS_Greengrass_ResourceDefinitionVersion {
  export type SecretsManagerSecretResourceDataType = {
    ARN: string;

    AdditionalStagingLabelsToDownload?: string[];
  };

  export type ResourceDataContainerType = {
    LocalVolumeResourceData?: LocalVolumeResourceDataType;

    LocalDeviceResourceData?: LocalDeviceResourceDataType;

    S3MachineLearningModelResourceData?: S3MachineLearningModelResourceDataType;

    SecretsManagerSecretResourceData?: SecretsManagerSecretResourceDataType;

    SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceDataType;
  };

  export type SageMakerMachineLearningModelResourceDataType = {
    OwnerSetting?: ResourceDownloadOwnerSettingType;

    SageMakerJobArn: string;

    DestinationPath: string;
  };

  export type ResourceInstanceType = {
    ResourceDataContainer: ResourceDataContainerType;

    Id: string;

    Name: string;
  };

  export type LocalVolumeResourceDataType = {
    SourcePath: string;

    DestinationPath: string;

    GroupOwnerSetting?: GroupOwnerSettingType;
  };

  export type S3MachineLearningModelResourceDataType = {
    OwnerSetting?: ResourceDownloadOwnerSettingType;

    DestinationPath: string;

    S3Uri: string;
  };

  export type LocalDeviceResourceDataType = {
    SourcePath: string;

    GroupOwnerSetting?: GroupOwnerSettingType;
  };

  export type ResourceDownloadOwnerSettingType = {
    GroupPermission: string;

    GroupOwner: string;
  };

  export type GroupOwnerSettingType = {
    AutoAddGroupOwner: boolean;

    GroupOwner?: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::ResourceDefinitionVersion
   */
  export type ResourceDefinitionVersionResourceType = {
    /**
     * Create-only property
     */
    ResourceDefinitionId: string;

    /**
     * Create-only property
     */
    Resources: ResourceInstanceType[];

    /**
     * Read-only property
     */
    Id?: string;
  };
}
