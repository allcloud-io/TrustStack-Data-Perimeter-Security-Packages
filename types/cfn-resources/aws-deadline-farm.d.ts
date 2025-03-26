/**
 * TypeScript definitions for AWS::Deadline::Farm
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::Farm Resource Type
 */
export namespace AWS_Deadline_Farm {
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
   * Definition of AWS::Deadline::Farm Resource Type
   */
  export type FarmResourceType = {
    /**
     * Default: ""
     */
    Description?: string;

    DisplayName: string;

    /**
     * Read-only property
     */
    FarmId?: string;

    /**
     * Create-only property
     */
    KmsKeyArn?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
