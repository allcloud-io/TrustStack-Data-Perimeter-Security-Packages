/**
 * TypeScript definitions for AWS::Synthetics::Group
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Synthetics::Group
 */
export namespace AWS_Synthetics_Group {
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
   * Provide Canary Arn associated with the group.
   */
  export type ResourceArnType = {};

  /**
   * Resource Type definition for AWS::Synthetics::Group
   */
  export type GroupResourceType = {
    /**
     * Name of the group.
     * Create-only property
     */
    Name: string;

    /**
     * Id of the group.
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];

    ResourceArns?: ResourceArnType[];
  };
}
