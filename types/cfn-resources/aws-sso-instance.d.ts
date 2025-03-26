/**
 * TypeScript definitions for AWS::SSO::Instance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Identity Center (SSO) Instance
 */
export namespace AWS_SSO_Instance {
  /**
   * The metadata that you apply to the Identity Center (SSO) Instance to help you categorize and organize them.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for Identity Center (SSO) Instance
   */
  export type InstanceResourceType = {
    /**
     * The name you want to assign to this Identity Center (SSO) Instance
     */
    Name?: string;

    /**
     * The SSO Instance ARN that is returned upon creation of the Identity Center (SSO) Instance
     * Read-only property
     */
    InstanceArn?: string;

    /**
     * The AWS accountId of the owner of the Identity Center (SSO) Instance
     * Read-only property
     */
    OwnerAccountId?: string;

    /**
     * The ID of the identity store associated with the created Identity Center (SSO) Instance
     * Read-only property
     */
    IdentityStoreId?: string;

    /**
     * The status of the Identity Center (SSO) Instance, create_in_progress/delete_in_progress/active
     * Read-only property
     */
    Status?: string;

    Tags?: TagType[];
  };
}
