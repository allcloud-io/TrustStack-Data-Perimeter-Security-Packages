/**
 * TypeScript definitions for AWS::ElastiCache::UserGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::UserGroup
 */
export namespace AWS_ElastiCache_UserGroup {
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
   * Resource Type definition for AWS::ElastiCache::UserGroup
   */
  export type UserGroupResourceType = {
    /**
     * Indicates user group status. Can be "creating", "active", "modifying", "deleting".
     * Read-only property
     */
    Status?: string;

    /**
     * The ID of the user group.
     * Create-only property
     */
    UserGroupId: string;

    /**
     * The target cache engine for the user group.
     */
    Engine: string;

    /**
     * List of users associated to this user group.
     */
    UserIds: string[];

    /**
     * The Amazon Resource Name (ARN) of the user account.
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this user.
     */
    Tags?: TagType[];
  };
}
