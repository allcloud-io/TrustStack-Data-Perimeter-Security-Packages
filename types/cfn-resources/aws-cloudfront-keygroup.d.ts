/**
 * TypeScript definitions for AWS::CloudFront::KeyGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * A key group.
 * A key group contains a list of public keys that you can use with CloudFront signed URLs and signed cookies.
 */
export namespace AWS_CloudFront_KeyGroup {
  /**
   * A key group configuration.
   * A key group contains a list of public keys that you can use with CloudFront signed URLs and signed cookies.
   */
  export type KeyGroupConfigType = {
    /**
     * A comment to describe the key group. The comment cannot be longer than 128 characters.
     */
    Comment?: string;

    /**
     * A list of the identifiers of the public keys in the key group.
     */
    Items: string[];

    /**
     * A name to identify the key group.
     */
    Name: string;
  };

  /**
   * A key group.
   * A key group contains a list of public keys that you can use with CloudFront signed URLs and signed cookies.
   */
  export type KeyGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The key group configuration.
     */
    KeyGroupConfig: KeyGroupConfigType;

    /**
     * Read-only property
     */
    LastModifiedTime?: string;
  };
}
