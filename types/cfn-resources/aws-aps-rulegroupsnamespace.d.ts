/**
 * TypeScript definitions for AWS::APS::RuleGroupsNamespace
 * Generated from CloudFormation Resource Schema
 */

/**
 * RuleGroupsNamespace schema for cloudformation.
 */
export namespace AWS_APS_RuleGroupsNamespace {
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
   * RuleGroupsNamespace schema for cloudformation.
   */
  export type RuleGroupsNamespaceResourceType = {
    /**
     * Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.
     * Create-only property
     */
    Workspace: string;

    /**
     * The RuleGroupsNamespace name.
     * Create-only property
     */
    Name: string;

    /**
     * The RuleGroupsNamespace data.
     */
    Data: string;

    /**
     * The RuleGroupsNamespace ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
