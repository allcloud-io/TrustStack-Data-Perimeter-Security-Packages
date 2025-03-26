/**
 * TypeScript definitions for AWS::Config::AggregationAuthorization
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Config::AggregationAuthorization
 */
export namespace AWS_Config_AggregationAuthorization {
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
   * Resource Type definition for AWS::Config::AggregationAuthorization
   */
  export type AggregationAuthorizationResourceType = {
    /**
     * The 12-digit account ID of the account authorized to aggregate data.
     * Create-only property
     */
    AuthorizedAccountId: string;

    /**
     * The region authorized to collect aggregated data.
     * Create-only property
     */
    AuthorizedAwsRegion: string;

    /**
     * The ARN of the AggregationAuthorization.
     * Read-only property
     */
    AggregationAuthorizationArn?: string;

    /**
     * The tags for the AggregationAuthorization.
     */
    Tags?: TagType[];
  };
}
