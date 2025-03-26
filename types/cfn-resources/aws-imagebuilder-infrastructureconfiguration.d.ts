/**
 * TypeScript definitions for AWS::ImageBuilder::InfrastructureConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::InfrastructureConfiguration
 */
export namespace AWS_ImageBuilder_InfrastructureConfiguration {
  /**
   * TagMap
   */
  export type TagMapType = {
    /**
     * TagKey
     */
    TagKey?: string;

    /**
     * TagValue
     */
    TagValue?: string;
  };

  /**
   * The logging configuration of the infrastructure configuration.
   */
  export type LoggingType = {
    S3Logs?: S3LogsType;
  };

  /**
   * The instance metadata option settings for the infrastructure configuration.
   */
  export type InstanceMetadataOptionsType = {
    /**
     * Limit the number of hops that an instance metadata request can traverse to reach its destination.
     */
    HttpPutResponseHopLimit?: number;

    /**
     * Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:
     */
    HttpTokens?: string;
  };

  /**
   * The S3 path in which to store the logs.
   */
  export type S3LogsType = {
    /**
     * S3BucketName
     */
    S3BucketName?: string;

    /**
     * S3KeyPrefix
     */
    S3KeyPrefix?: string;
  };

  /**
   * The placement options
   */
  export type PlacementType = {
    /**
     * AvailabilityZone
     */
    AvailabilityZone?: string;

    /**
     * Tenancy
     */
    Tenancy?: string;

    /**
     * HostId
     */
    HostId?: string;

    /**
     * HostResourceGroupArn
     */
    HostResourceGroupArn?: string;
  };

  /**
   * Resource schema for AWS::ImageBuilder::InfrastructureConfiguration
   */
  export type InfrastructureConfigurationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the infrastructure configuration.
     * Create-only property
     */
    Name: string;

    /**
     * The description of the infrastructure configuration.
     */
    Description?: string;

    /**
     * The instance types of the infrastructure configuration.
     */
    InstanceTypes?: string[];

    /**
     * The security group IDs of the infrastructure configuration.
     */
    SecurityGroupIds?: string[];

    /**
     * The logging configuration of the infrastructure configuration.
     */
    Logging?: LoggingType;

    /**
     * The subnet ID of the infrastructure configuration.
     */
    SubnetId?: string;

    /**
     * The EC2 key pair of the infrastructure configuration..
     */
    KeyPair?: string;

    /**
     * The terminate instance on failure configuration of the infrastructure configuration.
     */
    TerminateInstanceOnFailure?: boolean;

    /**
     * The instance profile of the infrastructure configuration.
     */
    InstanceProfileName: string;

    /**
     * The instance metadata option settings for the infrastructure configuration.
     */
    InstanceMetadataOptions?: InstanceMetadataOptionsType;

    /**
     * The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.
     */
    SnsTopicArn?: string;

    /**
     * The tags attached to the resource created by Image Builder.
     */
    ResourceTags?: Record<string, any>;

    /**
     * The tags associated with the component.
     */
    Tags?: Record<string, any>;

    /**
     * The placement option settings for the infrastructure configuration.
     */
    Placement?: PlacementType;
  };
}
