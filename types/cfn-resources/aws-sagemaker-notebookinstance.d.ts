/**
 * TypeScript definitions for AWS::SageMaker::NotebookInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::NotebookInstance
 */
export namespace AWS_SageMaker_NotebookInstance {
  export type InstanceMetadataServiceConfigurationType = {
    MinimumInstanceMetadataServiceVersion: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::NotebookInstance
   */
  export type NotebookInstanceResourceType = {
    /**
     * Create-only property
     */
    KmsKeyId?: string;

    VolumeSizeInGB?: number;

    AdditionalCodeRepositories?: string[];

    DefaultCodeRepository?: string;

    /**
     * Create-only property
     */
    DirectInternetAccess?: string;

    /**
     * Create-only property
     */
    PlatformIdentifier?: string;

    AcceleratorTypes?: string[];

    /**
     * Create-only property
     */
    SubnetId?: string;

    /**
     * Create-only property
     */
    SecurityGroupIds?: string[];

    RoleArn: string;

    InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfigurationType;

    RootAccess?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    NotebookInstanceName?: string;

    InstanceType: string;

    LifecycleConfigName?: string;

    Tags?: TagType[];
  };
}
