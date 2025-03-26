/**
 * TypeScript definitions for AWS::GuardDuty::Member
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GuardDuty::Member
 */
export namespace AWS_GuardDuty_Member {
  /**
   * Resource Type definition for AWS::GuardDuty::Member
   */
  export type MemberResourceType = {
    Status?: string;

    /**
     * Create-only property
     */
    MemberId?: string;

    Email: string;

    Message?: string;

    DisableEmailNotification?: boolean;

    /**
     * Create-only property
     */
    DetectorId?: string;
  };
}
