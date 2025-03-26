/**
 * TypeScript definitions for AWS::OpsWorks::UserProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::OpsWorks::UserProfile
 */
export namespace AWS_OpsWorks_UserProfile {
  /**
   * Resource Type definition for AWS::OpsWorks::UserProfile
   */
  export type UserProfileResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    SshUsername?: string;

    AllowSelfManagement?: boolean;

    /**
     * Create-only property
     */
    IamUserArn: string;

    SshPublicKey?: string;
  };
}
