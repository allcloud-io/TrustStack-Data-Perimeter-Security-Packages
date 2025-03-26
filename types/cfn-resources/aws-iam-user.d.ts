/**
 * TypeScript definitions for AWS::IAM::User
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new IAM user for your AWS-account.
 * For information about quotas for the number of IAM users you can create, see IAM and quotas in the *IAM User Guide*.
 */
export namespace AWS_IAM_User {
  /**
   * Contains information about an attached policy.
   * An attached policy is a managed policy that has been attached to a user, group, or role.
   * For more information about managed policies, refer to Managed Policies and Inline Policies in the *User Guide*.
   */
  export type PolicyType = {
    /**
     * The entire contents of the policy that defines permissions. For more information, see Overview of JSON policies.
     */
    PolicyDocument: Record<string, any> | string;

    /**
     * The friendly name (not ARN) identifying the policy.
     */
    PolicyName: string;
  };

  /**
   * A structure that represents user-provided metadata that can be associated with an IAM resource. For more information about tagging, see Tagging IAM resources in the *IAM User Guide*.
   */
  export type TagType = {
    /**
     * The key name that can be used to look up or retrieve the associated value. For example, `Department` or `Cost Center` are common choices.
     */
    Key: string;

    /**
     * The value associated with this tag. For example, tags with a key name of `Department` could have values such as `Human Resources`, `Accounting`, and `Support`. Tags with a key name of `Cost Center` might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
     * AWS always interprets the tag `Value` as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.
     */
    Value: string;
  };

  /**
   * Creates a password for the specified user, giving the user the ability to access AWS services through the console. For more information about managing passwords, see Managing Passwords in the *User Guide*.
   */
  export type LoginProfileType = {
    /**
     * Specifies whether the user is required to set a new password on next sign-in.
     */
    PasswordResetRequired?: boolean;

    /**
     * The user's password.
     */
    Password: string;
  };

  /**
   * Creates a new IAM user for your AWS-account.
   * For information about quotas for the number of IAM users you can create, see IAM and quotas in the *IAM User Guide*.
   */
  export type UserResourceType = {
    /**
     * The path for the user name. For more information about paths, see IAM identifiers in the *IAM User Guide*.
     * This parameter is optional. If it is not included, it defaults to a slash (/).
     * This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
     */
    Path?: string;

    /**
     * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the user.
     * For more information about ARNs, see Amazon Resource Names (ARNs) and Service Namespaces in the *General Reference*.
     */
    ManagedPolicyArns?: string[];

    /**
     * Adds or updates an inline policy document that is embedded in the specified IAM user. To view AWS::IAM::User snippets, see Declaring an User Resource.
     * The name of each policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail.
     * For information about limits on the number of inline policies that you can embed in a user, see Limitations on Entities in the *User Guide*.
     */
    Policies?: PolicyType[];

    /**
     * The name of the user to create. Do not include the path in this value.
     * This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both "John" and "john".
     * If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.
     * If you specify a name, you must specify the `CAPABILITY_NAMED_IAM` value to acknowledge your template's capabilities. For more information, see Acknowledging Resources in Templates.
     * Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using `Fn::Join` and `AWS::Region` to create a Region-specific name, as in the following example: `{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}`.
     * Create-only property
     */
    UserName?: string;

    /**
     * A list of group names to which you want to add the user.
     */
    Groups?: string[];

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the console.
     * You can use the CLI, the AWS API, or the *Users* page in the IAM console to create a password for any IAM user. Use ChangePassword to update your own existing password in the *My Security Credentials* page in the console.
     * For more information about managing passwords, see Managing passwords in the *User Guide*.
     */
    LoginProfile?: LoginProfileType;

    /**
     * A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the *IAM User Guide*.
     * If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
     */
    Tags?: TagType[];

    /**
     * The ARN of the managed policy that is used to set the permissions boundary for the user.
     * A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities in the *IAM User Guide*.
     * For more information about policy types, see Policy types in the *IAM User Guide*.
     */
    PermissionsBoundary?: string;
  };
}
