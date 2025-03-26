/**
 * TypeScript definitions for AWS::Detective::Graph
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Detective::Graph
 */
export namespace AWS_Detective_Graph {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @
     */
    Key?: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @
     */
    Value?: string;
  };

  /**
   * Resource schema for AWS::Detective::Graph
   */
  export type GraphResourceType = {
    /**
     * The Detective graph ARN
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];

    /**
     * Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
     * Default: false
     */
    AutoEnableMembers?: boolean;
  };
}
