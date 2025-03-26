/**
 * TypeScript definitions for AWS::Route53Resolver::OutpostResolver
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53Resolver::OutpostResolver.
 */
export namespace AWS_Route53Resolver_OutpostResolver {
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
   * Resource schema for AWS::Route53Resolver::OutpostResolver.
   */
  export type OutpostResolverResourceType = {
    /**
     * Id
     * Read-only property
     */
    Id?: string;

    /**
     * The id of the creator request.
     * Read-only property
     */
    CreatorRequestId?: string;

    /**
     * The OutpostResolver name.
     */
    Name: string;

    /**
     * The OutpostResolver ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Outpost ARN.
     * Create-only property
     */
    OutpostArn: string;

    /**
     * The OutpostResolver instance type.
     */
    PreferredInstanceType: string;

    /**
     * The OutpostResolver status, possible values are CREATING, OPERATIONAL, UPDATING, DELETING, ACTION_NEEDED, FAILED_CREATION and FAILED_DELETION.
     * Read-only property
     */
    Status?: string;

    /**
     * The OutpostResolver status message.
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * The number of OutpostResolvers.
     */
    InstanceCount?: number;

    /**
     * The OutpostResolver creation time
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The OutpostResolver last modified time
     * Read-only property
     */
    ModificationTime?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
