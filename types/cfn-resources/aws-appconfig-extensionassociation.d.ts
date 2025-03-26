/**
 * TypeScript definitions for AWS::AppConfig::ExtensionAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_AppConfig_ExtensionAssociation {
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
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type ExtensionAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    ExtensionArn?: string;

    /**
     * Read-only property
     */
    ResourceArn?: string;

    /**
     * Create-only property
     */
    ExtensionIdentifier?: string;

    /**
     * Create-only property
     */
    ResourceIdentifier?: string;

    /**
     * Create-only property
     */
    ExtensionVersionNumber?: number;

    Parameters?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
