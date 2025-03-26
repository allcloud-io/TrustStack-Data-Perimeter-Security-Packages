/**
 * TypeScript definitions for AWS::AppStream::StackUserAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::StackUserAssociation
 */
export namespace AWS_AppStream_StackUserAssociation {
  /**
   * Resource Type definition for AWS::AppStream::StackUserAssociation
   */
  export type StackUserAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    SendEmailNotification?: boolean;

    /**
     * Create-only property
     */
    UserName: string;

    /**
     * Create-only property
     */
    StackName: string;

    /**
     * Create-only property
     */
    AuthenticationType: string;
  };
}
