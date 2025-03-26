/**
 * TypeScript definitions for AWS::SSO::PermissionSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for SSO PermissionSet
 */
export namespace AWS_SSO_PermissionSet {
  /**
   * The metadata that you apply to the permission set to help you categorize and organize them.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The managed policy to attach.
   */
  export type ManagedPolicyArnType = {};

  export type CustomerManagedPolicyReferenceType = {
    Name: string;

    Path?: string;
  };

  export type PermissionsBoundaryType = {
    CustomerManagedPolicyReference?: CustomerManagedPolicyReferenceType;

    ManagedPolicyArn?: ManagedPolicyArnType;
  };

  /**
   * Resource Type definition for SSO PermissionSet
   */
  export type PermissionSetResourceType = {
    /**
     * The name you want to assign to this permission set.
     * Create-only property
     */
    Name: string;

    /**
     * The permission set that the policy will be attached to
     * Read-only property
     */
    PermissionSetArn?: string;

    /**
     * The permission set description.
     */
    Description?: string;

    /**
     * The sso instance arn that the permission set is owned.
     * Create-only property
     */
    InstanceArn: string;

    /**
     * The length of time that a user can be signed in to an AWS account.
     */
    SessionDuration?: string;

    /**
     * The relay state URL that redirect links to any service in the AWS Management Console.
     */
    RelayStateType?: string;

    /**
     * Default: []
     */
    ManagedPolicies?: ManagedPolicyArnType[];

    /**
     * The inline policy to put in permission set.
     */
    InlinePolicy?: Record<string, any> | string;

    Tags?: TagType[];

    /**
     * Default: []
     */
    CustomerManagedPolicyReferences?: CustomerManagedPolicyReferenceType[];

    PermissionsBoundary?: PermissionsBoundaryType;
  };
}
