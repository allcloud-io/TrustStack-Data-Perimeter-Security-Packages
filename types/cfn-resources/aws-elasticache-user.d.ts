/**
 * TypeScript definitions for AWS::ElastiCache::User
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElastiCache::User
 */
export namespace AWS_ElastiCache_User {
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
   * Resource Type definition for AWS::ElastiCache::User
   */
  export type UserResourceType = {
    /**
     * Indicates the user status. Can be "active", "modifying" or "deleting".
     * Read-only property
     */
    Status?: string;

    /**
     * The ID of the user.
     * Create-only property
     */
    UserId: string;

    /**
     * The username of the user.
     * Create-only property
     */
    UserName: string;

    /**
     * The target cache engine for the user.
     */
    Engine: string;

    /**
     * Access permissions string used for this user account.
     */
    AccessString?: string;

    /**
     * Indicates a password is not required for this user account.
     */
    NoPasswordRequired?: boolean;

    /**
     * Passwords used for this user account. You can create up to two passwords for each user.
     */
    Passwords?: string[];

    /**
     * The Amazon Resource Name (ARN) of the user account.
     * Read-only property
     */
    Arn?: string;

    AuthenticationMode?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this user.
     */
    Tags?: TagType[];
  };
}
