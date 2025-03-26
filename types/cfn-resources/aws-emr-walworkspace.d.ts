/**
 * TypeScript definitions for AWS::EMR::WALWorkspace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EMR::WALWorkspace Type
 */
export namespace AWS_EMR_WALWorkspace {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::EMR::WALWorkspace Type
   */
  export type WALWorkspaceResourceType = {
    /**
     * The name of the emrwal container
     * Create-only property
     */
    WALWorkspaceName?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
