/**
 * TypeScript definitions for AWS::Synthetics::Canary
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Synthetics::Canary
 */
export namespace AWS_Synthetics_Canary {
  export type ScheduleType = {
    Expression: string;

    DurationInSeconds?: string;
  };

  export type CodeType = {
    S3Bucket?: string;

    S3Key?: string;

    S3ObjectVersion?: string;

    Script?: string;

    Handler: string;

    SourceLocationArn?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type VPCConfigType = {
    VpcId?: string;

    SubnetIds: string[];

    SecurityGroupIds: string[];

    /**
     * Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true
     */
    Ipv6AllowedForDualStack?: boolean;
  };

  export type RunConfigType = {
    /**
     * Provide maximum canary timeout per run in seconds
     */
    TimeoutInSeconds?: number;

    /**
     * Provide maximum memory available for canary in MB
     */
    MemoryInMB?: number;

    /**
     * Enable active tracing if set to true
     */
    ActiveTracing?: boolean;

    /**
     * Environment variable key-value pairs.
     */
    EnvironmentVariables?: Record<string, any>;
  };

  export type VisualReferenceType = {
    /**
     * Canary run id to be used as base reference for visual testing
     */
    BaseCanaryRunId: string;

    /**
     * List of screenshots used as base reference for visual testing
     */
    BaseScreenshots?: BaseScreenshotType[];
  };

  export type BaseScreenshotType = {
    /**
     * Name of the screenshot to be used as base reference for visual testing
     */
    ScreenshotName: string;

    /**
     * List of coordinates of rectangles to be ignored during visual testing
     */
    IgnoreCoordinates?: string[];
  };

  export type ArtifactConfigType = {
    /**
     * Encryption configuration for uploading artifacts to S3
     */
    S3Encryption?: S3EncryptionType;
  };

  export type S3EncryptionType = {
    /**
     * Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.
     */
    EncryptionMode?: string;

    /**
     * KMS key Arn for encrypting artifacts when uploading to S3. You must specify KMS key Arn for SSE_KMS encryption mode only.
     */
    KmsKeyArn?: string;
  };

  /**
   * Specifies which resources canary tags should be replicated to.
   */
  export type ResourceToTagType = {};

  /**
   * Resource Type definition for AWS::Synthetics::Canary
   */
  export type CanaryResourceType = {
    /**
     * Name of the canary.
     * Create-only property
     */
    Name: string;

    /**
     * Id of the canary
     * Read-only property
     */
    Id?: string;

    /**
     * State of the canary
     * Read-only property
     */
    State?: string;

    /**
     * Provide the canary script source
     */
    Code: CodeType;

    /**
     * Provide the s3 bucket output location for test results
     */
    ArtifactS3Location: string;

    /**
     * Provide artifact configuration
     */
    ArtifactConfig?: ArtifactConfigType;

    /**
     * Frequency to run your canaries
     */
    Schedule: ScheduleType;

    /**
     * Lambda Execution role used to run your canaries
     */
    ExecutionRoleArn: string;

    /**
     * Runtime version of Synthetics Library
     */
    RuntimeVersion: string;

    /**
     * Retention period of successful canary runs represented in number of days
     */
    SuccessRetentionPeriod?: number;

    /**
     * Retention period of failed canary runs represented in number of days
     */
    FailureRetentionPeriod?: number;

    Tags?: TagType[];

    /**
     * Provide VPC Configuration if enabled.
     */
    VPCConfig?: VPCConfigType;

    /**
     * Provide canary run configuration
     */
    RunConfig?: RunConfigType;

    /**
     * Runs canary if set to True. Default is False
     */
    StartCanaryAfterCreation?: boolean;

    /**
     * Visual reference configuration for visual testing
     */
    VisualReference?: VisualReferenceType;

    /**
     * Deletes associated lambda resources created by Synthetics if set to True. Default is False
     */
    DeleteLambdaResourcesOnCanaryDeletion?: boolean;

    /**
     * List of resources which canary tags should be replicated to.
     */
    ResourcesToReplicateTags?: ResourceToTagType[];

    /**
     * Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.
     */
    ProvisionedResourceCleanup?: string;
  };
}
