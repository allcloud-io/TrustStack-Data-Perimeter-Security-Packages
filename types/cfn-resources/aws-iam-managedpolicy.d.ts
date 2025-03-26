/**
 * TypeScript definitions for AWS::IAM::ManagedPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new managed policy for your AWS-account.
 * This operation creates a policy version with a version identifier of `v1` and sets v1 as the policy's default version. For more information about policy versions, see Versioning for managed policies in the *IAM User Guide*.
 * As a best practice, you can validate your IAM policies. To learn more, see Validating IAM policies in the *IAM User Guide*.
 * For more information about managed policies in general, see Managed policies and inline policies in the *IAM User Guide*.
 */
export namespace AWS_IAM_ManagedPolicy {
  /**
   * Creates a new managed policy for your AWS-account.
   * This operation creates a policy version with a version identifier of `v1` and sets v1 as the policy's default version. For more information about policy versions, see Versioning for managed policies in the *IAM User Guide*.
   * As a best practice, you can validate your IAM policies. To learn more, see Validating IAM policies in the *IAM User Guide*.
   * For more information about managed policies in general, see Managed policies and inline policies in the *IAM User Guide*.
   */
  export type ManagedPolicyResourceType = {
    /**
     * A friendly description of the policy.
     * Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
     * The policy description is immutable. After a value is assigned, it cannot be changed.
     * Create-only property
     */
    Description?: string;

    /**
     * The name (friendly name, not ARN) of the group to attach the policy to.
     * This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    Groups?: string[];

    /**
     * The friendly name of the policy.
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * If you specify a name, you must specify the `CAPABILITY_NAMED_IAM` value to acknowledge your template's capabilities. For more information, see Acknowledging Resources in Templates.
     * Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using `Fn::Join` and `AWS::Region` to create a Region-specific name, as in the following example: `{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}`.
     * Create-only property
     */
    ManagedPolicyName?: string;

    /**
     * The path for the policy.
     * For more information about paths, see IAM identifiers in the *IAM User Guide*.
     * This parameter is optional. If it is not included, it defaults to a slash (/).
     * This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
     * You cannot use an asterisk (*) in the path name.
     * Default: "/"
     * Create-only property
     */
    Path?: string;

    /**
     * The JSON policy document that you want to use as the content for the new policy.
     * You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
     * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and character quotas.
     * To learn more about JSON policy grammar, see Grammar of the IAM JSON policy language in the *IAM User Guide*.
     * The regex pattern used to validate this parameter is a string of characters consisting of the following:
     * +  Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
     * +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
     * +  The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
     */
    PolicyDocument: Record<string, any> | string;

    /**
     * The name (friendly name, not ARN) of the role to attach the policy to.
     * This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     * If an external policy (such as `AWS::IAM::Policy` or `AWS::IAM::ManagedPolicy`) has a `Ref` to a role and if a resource (such as `AWS::ECS::Service`) also has a `Ref` to the same role, add a `DependsOn` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an `AWS::ECS::Service` resource, the `DependsOn` attribute ensures that CFN deletes the `AWS::ECS::Service` resource before deleting its role's policy.
     */
    Roles?: string[];

    /**
     * The name (friendly name, not ARN) of the IAM user to attach the policy to.
     * This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
    Users?: string[];

    /**
     * Read-only property
     */
    PolicyArn?: string;

    /**
     * Read-only property
     */
    AttachmentCount?: number;

    /**
     * Read-only property
     */
    CreateDate?: string;

    /**
     * Read-only property
     */
    UpdateDate?: string;

    /**
     * Read-only property
     */
    DefaultVersionId?: string;

    /**
     * Read-only property
     */
    IsAttachable?: boolean;

    /**
     * Read-only property
     */
    PermissionsBoundaryUsageCount?: number;

    /**
     * Read-only property
     */
    PolicyId?: string;
  };
}
