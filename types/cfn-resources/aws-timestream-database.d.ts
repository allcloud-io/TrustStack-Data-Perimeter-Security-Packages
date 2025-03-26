/**
 * TypeScript definitions for AWS::Timestream::Database
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Timestream::Database resource creates a Timestream database.
 */
export namespace AWS_Timestream_Database {
  /**
   * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources.
   */
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * The AWS::Timestream::Database resource creates a Timestream database.
   */
  export type DatabaseResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name.
     * Create-only property
     */
    DatabaseName?: string;

    /**
     * The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
     */
    KmsKeyId?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
