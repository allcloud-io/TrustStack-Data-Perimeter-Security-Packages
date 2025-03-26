/**
 * TypeScript definitions for AWS::LookoutEquipment::InferenceScheduler
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for LookoutEquipment InferenceScheduler.
 */
export namespace AWS_LookoutEquipment_InferenceScheduler {
  export type BucketType = {};

  export type PrefixType = {};

  /**
   * Specifies configuration information for the input data for the inference, including input data S3 location.
   */
  export type S3InputConfigurationType = {
    Bucket: BucketType;

    Prefix?: PrefixType;
  };

  /**
   * Specifies configuration information for the output results from the inference, including output S3 location.
   */
  export type S3OutputConfigurationType = {
    Bucket: BucketType;

    Prefix?: PrefixType;
  };

  /**
   * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
   */
  export type InputNameConfigurationType = {
    /**
     * Indicates the delimiter character used between items in the data.
     */
    ComponentTimestampDelimiter?: string;

    /**
     * The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).
     */
    TimestampFormat?: string;
  };

  /**
   * A tag is a key-value pair that can be added to a resource as metadata.
   */
  export type TagType = {
    /**
     * The key for the specified tag.
     */
    Key: string;

    /**
     * The value for the specified tag.
     */
    Value: string;
  };

  /**
   * Resource schema for LookoutEquipment InferenceScheduler.
   */
  export type InferenceSchedulerResourceType = {
    /**
     * A period of time (in minutes) by which inference on the data is delayed after the data starts.
     */
    DataDelayOffsetInMinutes?: number;

    /**
     * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
     */
    DataInputConfiguration: Record<string, any>;

    /**
     * Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.
     */
    DataOutputConfiguration: Record<string, any>;

    /**
     * How often data is uploaded to the source S3 bucket for the input data.
     */
    DataUploadFrequency: string;

    /**
     * The name of the inference scheduler being created.
     * Create-only property
     */
    InferenceSchedulerName?: string;

    /**
     * The name of the previously trained ML model being used to create the inference scheduler.
     * Create-only property
     */
    ModelName: string;

    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
     */
    RoleArn: string;

    /**
     * Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.
     * Create-only property
     */
    ServerSideKmsKeyId?: string;

    /**
     * Any tags associated with the inference scheduler.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the inference scheduler being created.
     * Read-only property
     */
    InferenceSchedulerArn?: string;
  };
}
