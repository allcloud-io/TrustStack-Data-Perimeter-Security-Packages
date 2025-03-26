/**
 * TypeScript definitions for AWS::IAM::UserPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Adds or updates an inline policy document that is embedded in the specified IAM user.
 * An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use AWS::IAM::User. To create a new managed policy, use AWS::IAM::ManagedPolicy. For information about policies, see Managed policies and inline policies in the *IAM User Guide*.
 * For information about the maximum number of inline policies that you can embed in a user, see IAM and quotas in the *IAM User Guide*.
 */
export namespace AWS_IAM_UserPolicy {
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM user.
   * An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use AWS::IAM::User. To create a new managed policy, use AWS::IAM::ManagedPolicy. For information about policies, see Managed policies and inline policies in the *IAM User Guide*.
   * For information about the maximum number of inline policies that you can embed in a user, see IAM and quotas in the *IAM User Guide*.
   */
  export type UserPolicyResourceType = {
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
     * The name of the user to associate the policy with.
     * This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     * Create-only property
     */
    UserName: string;
  };
}
