/**
 * TypeScript definitions for AWS::OSIS::Pipeline
 * Generated from CloudFormation Resource Schema
 */

/**
 * An OpenSearch Ingestion Service Data Prepper pipeline running Data Prepper.
 */
export namespace AWS_OSIS_Pipeline {
  /**
   * Key-value pairs to configure buffering.
   */
  export type BufferOptionsType = {
    /**
     * Whether persistent buffering should be enabled.
     */
    PersistentBufferEnabled: boolean;
  };

  /**
   * Key-value pairs to configure encryption at rest.
   */
  export type EncryptionAtRestOptionsType = {
    /**
     * The KMS key to use for encrypting data. By default an AWS owned key is used
     */
    KmsKeyArn: string;
  };

  /**
   * Key-value pairs to configure log publishing.
   */
  export type LogPublishingOptionsType = {
    /**
     * Whether logs should be published.
     */
    IsLoggingEnabled?: boolean;

    /**
     * The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.
     */
    CloudWatchLogDestination?: Record<string, any>;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.
   */
  export type VpcOptionsType = {
    /**
     * A list of security groups associated with the VPC endpoint.
     */
    SecurityGroupIds?: string[];

    /**
     * A list of subnet IDs associated with the VPC endpoint.
     */
    SubnetIds: string[];

    /**
     * Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.
     */
    VpcEndpointManagement?: string;

    /**
     * Options for attaching a VPC to the pipeline.
     */
    VpcAttachmentOptions?: Record<string, any>;
  };

  /**
   * An OpenSearch Ingestion Service-managed VPC endpoint that will access one or more pipelines.
   */
  export type VpcEndpointType = {
    /**
     * The unique identifier of the endpoint.
     */
    VpcEndpointId?: string;

    /**
     * The ID for your VPC. AWS Privatelink generates this value when you create a VPC.
     */
    VpcId?: string;

    VpcOptions?: VpcOptionsType;
  };

  /**
   * An OpenSearch Ingestion Service Data Prepper pipeline running Data Prepper.
   */
  export type PipelineResourceType = {
    BufferOptions?: BufferOptionsType;

    EncryptionAtRestOptions?: EncryptionAtRestOptionsType;

    LogPublishingOptions?: LogPublishingOptionsType;

    /**
     * The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).
     */
    MaxUnits: number;

    /**
     * The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).
     */
    MinUnits: number;

    /**
     * The Data Prepper pipeline configuration.
     */
    PipelineConfigurationBody: string;

    /**
     * Name of the OpenSearch Ingestion Service pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region.
     * Create-only property
     */
    PipelineName: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    VpcOptions?: VpcOptionsType;

    /**
     * The VPC interface endpoints that have access to the pipeline.
     * Read-only property
     */
    VpcEndpoints?: VpcEndpointType[];

    /**
     * The VPC endpoint service name for the pipeline.
     * Read-only property
     */
    VpcEndpointService?: string;

    /**
     * The Amazon Resource Name (ARN) of the pipeline.
     * Read-only property
     */
    PipelineArn?: string;

    /**
     * A list of endpoints that can be used for ingesting data into a pipeline
     * Read-only property
     */
    IngestEndpointUrls?: string[];
  };
}
