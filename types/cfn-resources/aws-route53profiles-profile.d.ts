/**
 * TypeScript definitions for AWS::Route53Profiles::Profile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Route53Profiles::Profile
 */
export namespace AWS_Route53Profiles_Profile {
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
   * Resource Type definition for AWS::Route53Profiles::Profile
   */
  export type ProfileResourceType = {
    /**
     * The name of the profile.
     * Create-only property
     */
    Name: string;

    /**
     * The id of the creator request
     * Read-only property
     */
    ClientToken?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the resolver profile.
     * Read-only property
     */
    Arn?: string;

    /**
     * The ID of the profile.
     * Read-only property
     */
    Id?: string;
  };
}
