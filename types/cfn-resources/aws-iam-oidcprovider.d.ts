/**
 * TypeScript definitions for AWS::IAM::OIDCProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IAM::OIDCProvider
 */
export namespace AWS_IAM_OIDCProvider {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::IAM::OIDCProvider
   */
  export type OIDCProviderResourceType = {
    ClientIdList?: string[];

    /**
     * Create-only property
     */
    Url?: string;

    ThumbprintList?: string[];

    /**
     * Amazon Resource Name (ARN) of the OIDC provider
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];
  };
}
