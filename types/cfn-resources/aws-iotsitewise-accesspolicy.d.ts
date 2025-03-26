/**
 * TypeScript definitions for AWS::IoTSiteWise::AccessPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTSiteWise::AccessPolicy
 */
export namespace AWS_IoTSiteWise_AccessPolicy {
  /**
   * Contains information for a user identity in an access policy.
   */
  export type UserType = {
    /**
     * The AWS SSO ID of the user.
     */
    id?: string;
  };

  /**
   * Contains information for an IAM user identity in an access policy.
   */
  export type IamUserType = {
    /**
     * The ARN of the IAM user.
     */
    arn?: string;
  };

  /**
   * Contains information for an IAM role identity in an access policy.
   */
  export type IamRoleType = {
    /**
     * The ARN of the IAM role.
     */
    arn?: string;
  };

  /**
   * A portal resource.
   */
  export type PortalType = {
    /**
     * The ID of the portal.
     */
    id?: string;
  };

  /**
   * A project resource.
   */
  export type ProjectType = {
    /**
     * The ID of the project.
     */
    id?: string;
  };

  /**
   * The identity for this access policy. Choose either an SSO user or group or an IAM user or role.
   */
  export type AccessPolicyIdentityType = {
    User?: UserType;

    IamUser?: IamUserType;

    IamRole?: IamRoleType;
  };

  /**
   * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
   */
  export type AccessPolicyResourceType = {
    Portal?: PortalType;

    Project?: ProjectType;
  };

  /**
   * Resource schema for AWS::IoTSiteWise::AccessPolicy
   */
  export type AccessPolicyResourceType = {
    /**
     * The ID of the access policy.
     * Read-only property
     */
    AccessPolicyId?: string;

    /**
     * The ARN of the access policy.
     * Read-only property
     */
    AccessPolicyArn?: string;

    /**
     * The identity for this access policy. Choose either a user or a group but not both.
     */
    AccessPolicyIdentity: AccessPolicyIdentityType;

    /**
     * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
     */
    AccessPolicyPermission: string;

    /**
     * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
     */
    AccessPolicyResource: AccessPolicyResourceType;
  };
}
