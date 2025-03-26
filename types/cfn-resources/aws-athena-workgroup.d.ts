/**
 * TypeScript definitions for AWS::Athena::WorkGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Athena::WorkGroup
 */
export namespace AWS_Athena_WorkGroup {
  export type TagsType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
   */
  export type SelectedEngineVersionType = {};

  /**
   * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored.
   */
  export type EffectiveEngineVersionType = {};

  /**
   * The Athena engine version for running queries.
   */
  export type EngineVersionType = {
    SelectedEngineVersion?: SelectedEngineVersionType;

    EffectiveEngineVersion?: EffectiveEngineVersionType;
  };

  /**
   * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
   */
  export type BytesScannedCutoffPerQueryType = {};

  /**
   * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
   */
  export type EnforceWorkGroupConfigurationType = {};

  /**
   * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
   */
  export type PublishCloudWatchMetricsEnabledType = {};

  /**
   * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.
   */
  export type RequesterPaysEnabledType = {};

  /**
   * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
   */
  export type OutputLocationType = {};

  /**
   * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
   */
  export type KmsKeyType = {};

  /**
   * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
   */
  export type EncryptionOptionType = {};

  /**
   * Indicates that the data usage control limit per query is removed.
   */
  export type RemoveBytesScannedCutoffPerQueryType = {};

  /**
   * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
   */
  export type EncryptionConfigurationType = {
    EncryptionOption: EncryptionOptionType;

    KmsKey?: KmsKeyType;
  };

  export type RemoveEncryptionConfigurationType = {};

  /**
   * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup
   */
  export type AdditionalConfigurationType = {};

  /**
   * Execution Role ARN required to run Athena Spark Calculations
   */
  export type ExecutionRoleType = {};

  export type RemoveOutputLocationType = {};

  /**
   * The AWS account ID of the owner of S3 bucket where query results are stored
   */
  export type ExpectedBucketOwnerType = {};

  export type RemoveExpectedBucketOwnerType = {};

  /**
   * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL
   */
  export type S3AclOptionType = {};

  /**
   * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
   */
  export type AclConfigurationType = {
    S3AclOption: S3AclOptionType;
  };

  export type RemoveAclConfigurationType = {};

  /**
   * Indicates the KMS key for encrypting notebook content.
   */
  export type CustomerContentEncryptionConfigurationType = {
    KmsKey: KmsKeyType;
  };

  export type RemoveCustomerContentEncryptionConfigurationType = {};

  /**
   * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
   *
   */
  export type ResultConfigurationType = {
    EncryptionConfiguration?: EncryptionConfigurationType;

    OutputLocation?: OutputLocationType;

    ExpectedBucketOwner?: ExpectedBucketOwnerType;

    AclConfiguration?: AclConfigurationType;
  };

  /**
   * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.
   */
  export type ResultConfigurationUpdatesType = {
    EncryptionConfiguration?: EncryptionConfigurationType;

    OutputLocation?: OutputLocationType;

    ExpectedBucketOwner?: ExpectedBucketOwnerType;

    AclConfiguration?: AclConfigurationType;

    RemoveEncryptionConfiguration?: RemoveEncryptionConfigurationType;

    RemoveOutputLocation?: RemoveOutputLocationType;

    RemoveExpectedBucketOwner?: RemoveExpectedBucketOwnerType;

    RemoveAclConfiguration?: RemoveAclConfigurationType;
  };

  export type WorkGroupConfigurationType = {
    BytesScannedCutoffPerQuery?: BytesScannedCutoffPerQueryType;

    EnforceWorkGroupConfiguration?: EnforceWorkGroupConfigurationType;

    PublishCloudWatchMetricsEnabled?: PublishCloudWatchMetricsEnabledType;

    RequesterPaysEnabled?: RequesterPaysEnabledType;

    ResultConfiguration?: ResultConfigurationType;

    EngineVersion?: EngineVersionType;

    AdditionalConfiguration?: AdditionalConfigurationType;

    ExecutionRole?: ExecutionRoleType;

    CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfigurationType;
  };

  /**
   * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
   */
  export type WorkGroupConfigurationUpdatesType = {
    BytesScannedCutoffPerQuery?: BytesScannedCutoffPerQueryType;

    EnforceWorkGroupConfiguration?: EnforceWorkGroupConfigurationType;

    PublishCloudWatchMetricsEnabled?: PublishCloudWatchMetricsEnabledType;

    RequesterPaysEnabled?: RequesterPaysEnabledType;

    ResultConfigurationUpdates?: ResultConfigurationUpdatesType;

    RemoveBytesScannedCutoffPerQuery?: RemoveBytesScannedCutoffPerQueryType;

    EngineVersion?: EngineVersionType;

    AdditionalConfiguration?: AdditionalConfigurationType;

    ExecutionRole?: ExecutionRoleType;

    CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfigurationType;

    RemoveCustomerContentEncryptionConfiguration?: RemoveCustomerContentEncryptionConfigurationType;
  };

  /**
   * Resource schema for AWS::Athena::WorkGroup
   */
  export type WorkGroupResourceType = {
    /**
     * The workGroup name.
     * Create-only property
     */
    Name: string;

    /**
     * The workgroup description.
     */
    Description?: string;

    /**
     * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
     */
    Tags?: TagsType;

    /**
     * The workgroup configuration
     */
    WorkGroupConfiguration?: WorkGroupConfigurationType;

    /**
     * The workgroup configuration update object
     */
    WorkGroupConfigurationUpdates?: WorkGroupConfigurationUpdatesType;

    /**
     * The date and time the workgroup was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The state of the workgroup: ENABLED or DISABLED.
     */
    State?: string;

    /**
     * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
     */
    RecursiveDeleteOption?: boolean;
  };
}
