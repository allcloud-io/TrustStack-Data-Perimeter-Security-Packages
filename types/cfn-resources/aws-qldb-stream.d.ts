/**
 * TypeScript definitions for AWS::QLDB::Stream
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::QLDB::Stream.
 */
export namespace AWS_QLDB_Stream {
  export type ArnType = {};

  export type KinesisConfigurationType = {
    StreamArn?: ArnType;

    AggregationEnabled?: boolean;
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

  /**
   * Resource schema for AWS::QLDB::Stream.
   */
  export type StreamResourceType = {
    /**
     * Create-only property
     */
    LedgerName: string;

    /**
     * Create-only property
     */
    StreamName: string;

    /**
     * Create-only property
     */
    RoleArn: ArnType;

    /**
     * Create-only property
     */
    InclusiveStartTime: string;

    /**
     * Create-only property
     */
    ExclusiveEndTime?: string;

    /**
     * Create-only property
     */
    KinesisConfiguration: KinesisConfigurationType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
