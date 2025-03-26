/**
 * TypeScript definitions for AWS::Cognito::UserPoolGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolGroup
 */
export namespace AWS_Cognito_UserPoolGroup {
  /**
   * Resource Type definition for AWS::Cognito::UserPoolGroup
   */
  export type UserPoolGroupResourceType = {
    Description?: string;

    /**
     * Create-only property
     */
    GroupName?: string;

    Precedence?: number;

    RoleArn?: string;

    /**
     * Create-only property
     */
    UserPoolId: string;
  };
}
