/**
 * TypeScript definitions for AWS::Organizations::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * You can use AWS::Organizations::ResourcePolicy to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account.
 */
export namespace AWS_Organizations_ResourcePolicy {
  /**
   * A custom key-value pair associated with a resource within your organization.
   */
  export type TagType = {
    /**
     * The key identifier, or name, of the tag.
     */
    Key: string;

    /**
     * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
     */
    Value: string;
  };

  /**
   * You can use AWS::Organizations::ResourcePolicy to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account.
   */
  export type ResourcePolicyResourceType = {
    /**
     * The unique identifier (ID) associated with this resource policy.
     * Read-only property
     */
    Id?: string;

    /**
     * The Amazon Resource Name (ARN) of the resource policy.
     * Read-only property
     */
    Arn?: string;

    /**
     * The policy document. For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.
     */
    Content: Record<string, any> | string;

    /**
     * A list of tags that you want to attach to the resource policy
     */
    Tags?: TagType[];
  };
}
