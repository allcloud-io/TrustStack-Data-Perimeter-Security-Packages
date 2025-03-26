/**
 * TypeScript definitions for AWS::Config::StoredQuery
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Config::StoredQuery
 */
export namespace AWS_Config_StoredQuery {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::Config::StoredQuery
   */
  export type StoredQueryResourceType = {
    /**
     * Read-only property
     */
    QueryArn?: string;

    /**
     * Read-only property
     */
    QueryId?: string;

    /**
     * Create-only property
     */
    QueryName: string;

    QueryDescription?: string;

    QueryExpression: string;

    /**
     * The tags for the stored query.
     */
    Tags?: TagType[];
  };
}
