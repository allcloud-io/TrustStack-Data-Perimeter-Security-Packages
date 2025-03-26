/**
 * TypeScript definitions for AWS::AppConfig::Extension
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppConfig::Extension
 */
export namespace AWS_AppConfig_Extension {
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
   * A list of actions for an extension to take at a specific action point.
   */
  export type ActionsType = {};

  /**
   * An action for an extension to take at a specific action point.
   */
  export type ActionType = {
    /**
     * The name of the extension action.
     */
    Name: string;

    /**
     * The description of the extension Action.
     */
    Description?: string;

    /**
     * The URI of the extension action.
     */
    Uri: string;

    /**
     * The ARN of the role for invoking the extension action.
     */
    RoleArn?: string;
  };

  /**
   * A parameter for the extension to send to a specific action.
   */
  export type ParameterType = {
    /**
     * The description of the extension Parameter.
     */
    Description?: string;

    Dynamic?: boolean;

    Required: boolean;
  };

  /**
   * Resource Type definition for AWS::AppConfig::Extension
   */
  export type ExtensionResourceType = {
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
    VersionNumber?: number;

    /**
     * Name of the extension.
     * Create-only property
     */
    Name: string;

    /**
     * Description of the extension.
     */
    Description?: string;

    Actions: Record<string, any>;

    Parameters?: Record<string, any>;

    LatestVersionNumber?: number;

    /**
     * An array of key-value tags to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
