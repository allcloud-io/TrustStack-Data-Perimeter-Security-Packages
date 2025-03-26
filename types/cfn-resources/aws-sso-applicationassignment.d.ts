/**
 * TypeScript definitions for AWS::SSO::ApplicationAssignment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for SSO application access grant to a user or group.
 */
export namespace AWS_SSO_ApplicationAssignment {
  /**
   * Resource Type definition for SSO application access grant to a user or group.
   */
  export type ApplicationAssignmentResourceType = {
    /**
     * The ARN of the application.
     * Create-only property
     */
    ApplicationArn: string;

    /**
     * The entity type for which the assignment will be created.
     * Create-only property
     */
    PrincipalType: string;

    /**
     * An identifier for an object in IAM Identity Center, such as a user or group
     * Create-only property
     */
    PrincipalId: string;
  };
}
