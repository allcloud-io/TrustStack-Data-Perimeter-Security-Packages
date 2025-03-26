/**
 * TypeScript definitions for AWS::IAM::RolePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Adds or updates an inline policy document that is embedded in the specified IAM role.
 * When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using CreateRole. You can update a role's trust policy using UpdateAssumeRolePolicy. For information about roles, see roles in the *IAM User Guide*.
 * A role can also have a managed policy attached to it. To attach a managed policy to a role, use AWS::IAM::Role. To create a new managed policy, use AWS::IAM::ManagedPolicy. For information about policies, see Managed policies and inline policies in the *IAM User Guide*.
 * For information about the maximum number of inline policies that you can embed with a role, see IAM and quotas in the *IAM User Guide*.
 */
export namespace AWS_IAM_RolePolicy {
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM role.
   * When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using CreateRole. You can update a role's trust policy using UpdateAssumeRolePolicy. For information about roles, see roles in the *IAM User Guide*.
   * A role can also have a managed policy attached to it. To attach a managed policy to a role, use AWS::IAM::Role. To create a new managed policy, use AWS::IAM::ManagedPolicy. For information about policies, see Managed policies and inline policies in the *IAM User Guide*.
   * For information about the maximum number of inline policies that you can embed with a role, see IAM and quotas in the *IAM User Guide*.
   */
  export type RolePolicyResourceType = {
    /**
     * The policy document.
     * You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
     * The regex pattern used to validate this parameter is a string of characters consisting of the following:
     * +  Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
     * +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
     * +  The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
     */
    PolicyDocument?: Record<string, any>;

    /**
     * The name of the policy document.
     * This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     * Create-only property
     */
    PolicyName: string;

    /**
     * The name of the role to associate the policy with.
     * This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     * Create-only property
     */
    RoleName: string;
  };
}
