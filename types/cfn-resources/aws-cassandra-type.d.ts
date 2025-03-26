/**
 * TypeScript definitions for AWS::Cassandra::Type
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Cassandra::Type
 */
export namespace AWS_Cassandra_Type {
  export type FieldType = {
    FieldName: string;

    FieldType: string;
  };

  /**
   * Resource schema for AWS::Cassandra::Type
   */
  export type TypeResourceType = {
    /**
     * Name of the Keyspace which contains the User-Defined Type.
     * Create-only property
     */
    KeyspaceName: string;

    /**
     * Name of the User-Defined Type.
     * Create-only property
     */
    TypeName: string;

    /**
     * Field definitions of the User-Defined Type
     * Create-only property
     */
    Fields: FieldType[];

    /**
     * List of Tables that directly reference the User-Defined Type in their columns.
     * Read-only property
     */
    DirectReferringTables?: string[];

    /**
     * List of parent User-Defined Types that directly reference the User-Defined Type in their fields.
     * Read-only property
     */
    DirectParentTypes?: string[];

    /**
     * Maximum nesting depth of the User-Defined Type across the field types.
     * Read-only property
     */
    MaxNestingDepth?: number;

    /**
     * Timestamp of the last time the User-Defined Type's meta data was modified.
     * Read-only property
     */
    LastModifiedTimestamp?: number;

    /**
     * ARN of the Keyspace which contains the User-Defined Type.
     * Read-only property
     */
    KeyspaceArn?: string;
  };
}
