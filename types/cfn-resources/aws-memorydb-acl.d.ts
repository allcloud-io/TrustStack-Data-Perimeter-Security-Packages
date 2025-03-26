/**
 * TypeScript definitions for AWS::MemoryDB::ACL
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MemoryDB::ACL
 */
export namespace AWS_MemoryDB_ACL {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * Resource Type definition for AWS::MemoryDB::ACL
   */
  export type ACLResourceType = {
    /**
     * Indicates acl status. Can be "creating", "active", "modifying", "deleting".
     * Read-only property
     */
    Status?: string;

    /**
     * The name of the acl.
     * Create-only property
     */
    ACLName: string;

    /**
     * List of users associated to this acl.
     */
    UserNames?: string[];

    /**
     * The Amazon Resource Name (ARN) of the acl.
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this cluster.
     */
    Tags?: TagType[];
  };
}
