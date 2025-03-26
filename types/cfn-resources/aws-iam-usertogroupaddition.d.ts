/**
 * TypeScript definitions for AWS::IAM::UserToGroupAddition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IAM::UserToGroupAddition
 */
export namespace AWS_IAM_UserToGroupAddition {
  /**
   * Resource Type definition for AWS::IAM::UserToGroupAddition
   */
  export type UserToGroupAdditionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    GroupName: string;

    Users: string[];
  };
}
