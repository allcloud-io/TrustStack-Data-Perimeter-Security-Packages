/**
 * TypeScript definitions for AWS::AppStream::User
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::User
 */
export namespace AWS_AppStream_User {
  /**
   * Resource Type definition for AWS::AppStream::User
   */
  export type UserResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    UserName: string;

    /**
     * Create-only property
     */
    FirstName?: string;

    /**
     * Create-only property
     */
    MessageAction?: string;

    /**
     * Create-only property
     */
    LastName?: string;

    /**
     * Create-only property
     */
    AuthenticationType: string;
  };
}
