/**
 * TypeScript definitions for AWS::SSO::Assignment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for SSO assignmet
 */
export namespace AWS_SSO_Assignment {
  /**
   * Resource Type definition for SSO assignmet
   */
  export type AssignmentResourceType = {
    /**
     * The sso instance that the permission set is owned.
     * Create-only property
     */
    InstanceArn: string;

    /**
     * The account id to be provisioned.
     * Create-only property
     */
    TargetId: string;

    /**
     * The type of resource to be provsioned to, only aws account now
     * Create-only property
     */
    TargetType: string;

    /**
     * The permission set that the assignemt will be assigned
     * Create-only property
     */
    PermissionSetArn: string;

    /**
     * The assignee's type, user/group
     * Create-only property
     */
    PrincipalType: string;

    /**
     * The assignee's identifier, user id/group id
     * Create-only property
     */
    PrincipalId: string;
  };
}
