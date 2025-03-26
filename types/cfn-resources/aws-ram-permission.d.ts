/**
 * TypeScript definitions for AWS::RAM::Permission
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::RAM::Permission
 */
export namespace AWS_RAM_Permission {
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
   * Resource type definition for AWS::RAM::Permission
   */
  export type PermissionResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the permission.
     * Create-only property
     */
    Name: string;

    /**
     * Version of the permission.
     * Read-only property
     */
    Version?: string;

    /**
     * Set to true to use this as the default permission.
     * Read-only property
     */
    IsResourceTypeDefault?: boolean;

    /**
     * Read-only property
     */
    PermissionType?: string;

    /**
     * The resource type this permission can be used with.
     * Create-only property
     */
    ResourceType: string;

    /**
     * Policy template for the permission.
     * Create-only property
     */
    PolicyTemplate: Record<string, any>;

    Tags?: TagType[];
  };
}
