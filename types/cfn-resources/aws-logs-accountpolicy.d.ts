/**
 * TypeScript definitions for AWS::Logs::AccountPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Logs::AccountPolicy resource specifies a CloudWatch Logs AccountPolicy.
 */
export namespace AWS_Logs_AccountPolicy {
  /**
   * The AWS::Logs::AccountPolicy resource specifies a CloudWatch Logs AccountPolicy.
   */
  export type AccountPolicyResourceType = {
    /**
     * User account id
     * Read-only property
     */
    AccountId?: string;

    /**
     * The name of the account policy
     * Create-only property
     */
    PolicyName: string;

    /**
     * The body of the policy document you want to use for this topic.
     * You can only add one policy per PolicyType.
     * The policy must be in JSON string format.
     * Length Constraints: Maximum length of 30720
     */
    PolicyDocument: string;

    /**
     * Type of the policy.
     * Create-only property
     */
    PolicyType: string;

    /**
     * Scope for policy application
     */
    Scope?: string;

    /**
     * Log group  selection criteria to apply policy only to a subset of log groups. SelectionCriteria string can be up to 25KB and cloudwatchlogs determines the length of selectionCriteria by using its UTF-8 bytes
     */
    SelectionCriteria?: string;
  };
}
