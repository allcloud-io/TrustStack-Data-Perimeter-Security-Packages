/**
 * TypeScript definitions for AWS::SageMaker::Model
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Model
 */
export namespace AWS_SageMaker_Model {
  export type ImageConfigType = {
    RepositoryAuthConfig?: RepositoryAuthConfigType;

    RepositoryAccessMode: string;
  };

  export type ModelAccessConfigType = {
    AcceptEula: boolean;
  };

  export type VpcConfigType = {
    SecurityGroupIds: string[];

    Subnets: string[];
  };

  export type RepositoryAuthConfigType = {
    RepositoryCredentialsProviderArn: string;
  };

  export type S3DataSourceType = {
    ModelAccessConfig?: ModelAccessConfigType;

    S3DataType: string;

    CompressionType: string;

    HubAccessConfig?: HubAccessConfigType;

    S3Uri: string;
  };

  export type ContainerDefinitionType = {
    ImageConfig?: ImageConfigType;

    InferenceSpecificationName?: string;

    ContainerHostname?: string;

    ModelPackageName?: string;

    Mode?: string;

    Environment?: Record<string, any>;

    ModelDataUrl?: string;

    Image?: string;

    ModelDataSource?: ModelDataSourceType;

    MultiModelConfig?: MultiModelConfigType;
  };

  export type InferenceExecutionConfigType = {
    Mode: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type ModelDataSourceType = {
    S3DataSource: S3DataSourceType;
  };

  export type HubAccessConfigType = {
    HubContentArn: string;
  };

  export type MultiModelConfigType = {
    ModelCacheSetting?: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::Model
   */
  export type ModelResourceType = {
    /**
     * Create-only property
     */
    ExecutionRoleArn?: string;

    /**
     * Create-only property
     */
    EnableNetworkIsolation?: boolean;

    /**
     * Create-only property
     */
    PrimaryContainer?: ContainerDefinitionType;

    /**
     * Create-only property
     */
    ModelName?: string;

    /**
     * Create-only property
     */
    VpcConfig?: VpcConfigType;

    /**
     * Create-only property
     */
    Containers?: ContainerDefinitionType[];

    /**
     * Create-only property
     */
    InferenceExecutionConfig?: InferenceExecutionConfigType;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
