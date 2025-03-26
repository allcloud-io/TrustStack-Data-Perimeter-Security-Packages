/**
 * TypeScript definitions for AWS::IoT::RoleAlias
 * Generated from CloudFormation Resource Schema
 */

/**
 * Use the AWS::IoT::RoleAlias resource to declare an AWS IoT RoleAlias.
 */
export namespace AWS_IoT_RoleAlias {
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
   * Use the AWS::IoT::RoleAlias resource to declare an AWS IoT RoleAlias.
   */
  export type RoleAliasResourceType = {
    /**
     * Create-only property
     */
    RoleAlias?: string;

    /**
     * Read-only property
     */
    RoleAliasArn?: string;

    RoleArn: string;

    /**
     * Default: 3600
     */
    CredentialDurationSeconds?: number;

    Tags?: TagType[];
  };
}
