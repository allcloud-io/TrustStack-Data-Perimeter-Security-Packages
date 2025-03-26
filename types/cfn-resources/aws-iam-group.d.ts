/**
 * TypeScript definitions for AWS::IAM::Group
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new group.
 * For information about the number of groups you can create, see Limitations on Entities in the *User Guide*.
 */
export namespace AWS_IAM_Group {
  /**
   * Contains information about an attached policy.
   * An attached policy is a managed policy that has been attached to a user, group, or role.
   * For more information about managed policies, see Managed Policies and Inline Policies in the *User Guide*.
   */
  export type PolicyType = {
    /**
     * The policy document.
     */
    PolicyDocument: string | Record<string, any>;

    /**
     * The friendly name (not ARN) identifying the policy.
     */
    PolicyName: string;
  };

  /**
   * Creates a new group.
   * For information about the number of groups you can create, see Limitations on Entities in the *User Guide*.
   */
  export type GroupResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the group to create. Do not include the path in this value.
     * The group name must be unique within the account. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins". If you don't specify a name, CFN generates a unique physical ID and uses that ID for the group name.
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * If you specify a name, you must specify the `CAPABILITY_NAMED_IAM` value to acknowledge your template's capabilities. For more information, see Acknowledging Resources in Templates.
     * Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using `Fn::Join` and `AWS::Region` to create a Region-specific name, as in the following example: `{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}`.
     * Create-only property
     */
    GroupName?: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM policy you want to attach.
     * For more information about ARNs, see Amazon Resource Names (ARNs) in the *General Reference*.
     */
    ManagedPolicyArns?: string[];

    /**
     * The path to the group. For more information about paths, see IAM identifiers in the *IAM User Guide*.
     * This parameter is optional. If it is not included, it defaults to a slash (/).
     * This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: string;

    /**
     * Adds or updates an inline policy document that is embedded in the specified IAM group. To view AWS::IAM::Group snippets, see Declaring an Group Resource.
     * The name of each inline policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail.
     * For information about limits on the number of inline policies that you can embed in a group, see Limitations on Entities in the *User Guide*.
     */
    Policies?: PolicyType[];
  };
}
