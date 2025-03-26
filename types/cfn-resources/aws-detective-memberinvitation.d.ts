/**
 * TypeScript definitions for AWS::Detective::MemberInvitation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Detective::MemberInvitation
 */
export namespace AWS_Detective_MemberInvitation {
  /**
   * Resource schema for AWS::Detective::MemberInvitation
   */
  export type MemberInvitationResourceType = {
    /**
     * The ARN of the graph to which the member account will be invited
     * Create-only property
     */
    GraphArn: string;

    /**
     * The AWS account ID to be invited to join the graph as a member
     * Create-only property
     */
    MemberId: string;

    /**
     * The root email address for the account to be invited, for validation. Updating this field has no effect.
     */
    MemberEmailAddress: string;

    /**
     * When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.
     * Default: false
     */
    DisableEmailNotification?: boolean;

    /**
     * A message to be included in the email invitation sent to the invited account. Updating this field has no effect.
     */
    Message?: string;
  };
}
