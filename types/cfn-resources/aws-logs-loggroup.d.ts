/**
 * TypeScript definitions for AWS::Logs::LogGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::Logs::LogGroup` resource specifies a log group. A log group defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
 * You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:
 * +  Log group names must be unique within a Region for an AWS account.
 * +  Log group names can be between 1 and 512 characters long.
 * +  Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).
 */
export namespace AWS_Logs_LogGroup {
  /**
   * The value of this key-value pair.
   */
  export type TagType = {
    Key: string;

    /**
     * The value of this key-value pair.
     */
    Value: string;
  };

  /**
   * The `AWS::Logs::LogGroup` resource specifies a log group. A log group defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
   * You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:
   * +  Log group names must be unique within a Region for an AWS account.
   * +  Log group names can be between 1 and 512 characters long.
   * +  Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).
   */
  export type LogGroupResourceType = {
    /**
     * The name of the log group. If you don't specify a name, CFNlong generates a unique ID for the log group.
     * Create-only property
     */
    LogGroupName?: string;

    /**
     * The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data.
     * To associate an KMS key with the log group, specify the ARN of that KMS key here. If you do so, ingested data is encrypted using this key. This association is stored as long as the data encrypted with the KMS key is still within CWL. This enables CWL to decrypt this data whenever it is requested.
     * If you attempt to associate a KMS key with the log group but the KMS key doesn't exist or is deactivated, you will receive an `InvalidParameterException` error.
     * Log group data is always encrypted in CWL. If you omit this key, the encryption does not use KMS. For more information, see Encrypt log data in using
     */
    KmsKeyId?: string;

    /**
     * Creates a data protection policy and assigns it to the log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. When a user who does not have permission to view masked data views a log event that includes masked data, the sensitive data is replaced by asterisks.
     * For more information, including a list of types of data that can be audited and masked, see Protect sensitive log data with masking.
     */
    DataProtectionPolicy?: Record<string, any>;

    /**
     * Creates or updates a *field index policy* for the specified log group. Only log groups in the Standard log class support field index policies. For more information about log classes, see Log classes.
     * You can use field index policies to create *field indexes* on fields found in log events in the log group. Creating field indexes lowers the costs for CWL Insights queries that reference those field indexes, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields that have high cardinality of values Common examples of indexes include request ID, session ID, userID, and instance IDs. For more information, see Create field indexes to improve query performance and reduce costs.
     * Currently, this array supports only one field index policy object.
     */
    FieldIndexPolicies?: Record<string, any>[];

    /**
     * Specifies the log group class for this log group. There are two classes:
     * +  The `Standard` log class supports all CWL features.
     * +  The `Infrequent Access` log class supports a subset of CWL features and incurs lower costs.
     * For details about the features supported by each class, see Log classes
     * Default: "STANDARD"
     */
    LogGroupClass?: string;

    /**
     * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.
     * To set a log group so that its log events do not expire, use DeleteRetentionPolicy.
     */
    RetentionInDays?: number;

    /**
     * An array of key-value pairs to apply to the log group.
     * For more information, see Tag.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
