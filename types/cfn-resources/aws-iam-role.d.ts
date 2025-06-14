/**
 * TypeScript definitions for AWS::IAM::Role
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new role for your AWS-account.
 * For more information about roles, see IAM roles in the *IAM User Guide*. For information about quotas for role names and the number of roles you can create, see IAM and quotas in the *IAM User Guide*.
 */
export namespace AWS_IAM_Role {
  /**
   * Contains information about an attached policy.
   * An attached policy is a managed policy that has been attached to a user, group, or role.
   * For more information about managed policies, refer to Managed Policies and Inline Policies in the *User Guide*.
   */
  export type PolicyType = {
    /**
     * The entire contents of the policy that defines permissions. For more information, see Overview of JSON policies.
     */
    PolicyDocument: string | Record<string, any>;

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
   * Creates a new role for your AWS-account.
   * For more information about roles, see IAM roles in the *IAM User Guide*. For information about quotas for role names and the number of roles you can create, see IAM and quotas in the *IAM User Guide*.
   */
  export type RoleResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The trust policy that is associated with this role. Trust policies define which entities can assume the role. You can associate only one trust policy with a role. For an example of a policy that can be used to assume a role, see Template Examples. For more information about the elements that you can use in an IAM policy, see Policy Elements Reference in the *User Guide*.
     */
    AssumeRolePolicyDocument: Record<string, any> | string;

    /**
     * A description of the role that you provide.
     */
    Description?: string;

    /**
     * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.
     * For more information about ARNs, see Amazon Resource Names (ARNs) and Service Namespaces in the *General Reference*.
     */
    ManagedPolicyArns?: string[];

    /**
     * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours.
     * Anyone who assumes the role from the CLI or API can use the `DurationSeconds` API parameter or the `duration-seconds` CLI parameter to request a longer session. The `MaxSessionDuration` setting determines the maximum duration that can be requested using the `DurationSeconds` parameter. If users don't specify a value for the `DurationSeconds` parameter, their security credentials are valid for one hour by default. This applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI operations but does not apply when you use those operations to create a console URL. For more information, see Using IAM roles in the *IAM User Guide*.
     */
    MaxSessionDuration?: number;

    /**
     * The path to the role. For more information about paths, see IAM Identifiers in the *IAM User Guide*.
     * This parameter is optional. If it is not included, it defaults to a slash (/).
     * This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
     * Default: "/"
     * Create-only property
     */
    Path?: string;

    /**
     * The ARN of the policy used to set the permissions boundary for the role.
     * For more information about permissions boundaries, see Permissions boundaries for IAM identities in the *IAM User Guide*.
     */
    PermissionsBoundary?: string;

    /**
     * Adds or updates an inline policy document that is embedded in the specified IAM role.
     * When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role. You can update a role's trust policy later. For more information about IAM roles, go to Using Roles to Delegate Permissions and Federate Identities.
     * A role can also have an attached managed policy. For information about policies, see Managed Policies and Inline Policies in the *User Guide*.
     * For information about limits on the number of inline policies that you can embed with a role, see Limitations on Entities in the *User Guide*.
     * If an external policy (such as `AWS::IAM::Policy` or `AWS::IAM::ManagedPolicy`) has a `Ref` to a role and if a resource (such as `AWS::ECS::Service`) also has a `Ref` to the same role, add a `DependsOn` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an `AWS::ECS::Service` resource, the `DependsOn` attribute ensures that CFN deletes the `AWS::ECS::Service` resource before deleting its role's policy.
     */
    Policies?: PolicyType[];

    /**
     * Read-only property
     */
    RoleId?: string;

    /**
     * A name for the IAM role, up to 64 characters in length. For valid values, see the `RoleName` parameter for the CreateRole action in the *User Guide*.
     * This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The role name must be unique within the account. Role names are not distinguished by case. For example, you cannot create roles named both "Role1" and "role1".
     * If you don't specify a name, CFN generates a unique physical ID and uses that ID for the role name.
     * If you specify a name, you must specify the `CAPABILITY_NAMED_IAM` value to acknowledge your template's capabilities. For more information, see Acknowledging Resources in Templates.
     * Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using `Fn::Join` and `AWS::Region` to create a Region-specific name, as in the following example: `{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}`.
     * Create-only property
     */
    RoleName?: string;

    /**
     * A list of tags that are attached to the role. For more information about tagging, see Tagging IAM resources in the *IAM User Guide*.
     */
    Tags?: TagType[];
  };
}
