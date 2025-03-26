/**
 * TypeScript definitions for AWS::Greengrass::ResourceDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::ResourceDefinition
 */
export namespace AWS_Greengrass_ResourceDefinition {
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

  export type LocalDeviceResourceDataType = {
    SourcePath: string;

    GroupOwnerSetting?: GroupOwnerSettingType;
  };

  export type S3MachineLearningModelResourceDataType = {
    OwnerSetting?: ResourceDownloadOwnerSettingType;

    DestinationPath: string;

    S3Uri: string;
  };

  export type ResourceDownloadOwnerSettingType = {
    GroupPermission: string;

    GroupOwner: string;
  };

  export type ResourceDefinitionVersionType = {
    Resources: ResourceInstanceType[];
  };

  export type GroupOwnerSettingType = {
    AutoAddGroupOwner: boolean;

    GroupOwner?: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::ResourceDefinition
   */
  export type ResourceDefinitionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    LatestVersionArn?: string;

    Tags?: Record<string, any>;

    Name: string;

    /**
     * Create-only property
     */
    InitialVersion?: ResourceDefinitionVersionType;
  };
}
