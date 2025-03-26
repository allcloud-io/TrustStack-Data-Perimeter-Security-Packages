/**
 * TypeScript definitions for AWS::DataZone::UserProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * A user profile represents Amazon DataZone users. Amazon DataZone supports both IAM roles and SSO identities to interact with the Amazon DataZone Management Console and the data portal for different purposes. Domain administrators use IAM roles to perform the initial administrative domain-related work in the Amazon DataZone Management Console, including creating new Amazon DataZone domains, configuring metadata form types, and implementing policies. Data workers use their SSO corporate identities via Identity Center to log into the Amazon DataZone Data Portal and access projects where they have memberships.
 */
export namespace AWS_DataZone_UserProfile {
  /**
   * The details of the IAM User Profile.
   */
  export type IamUserProfileDetailsType = {
    /**
     * The ARN of the IAM User Profile.
     */
    Arn?: string;
  };

  /**
   * The details of the SSO User Profile.
   */
  export type SsoUserProfileDetailsType = {
    /**
     * The username of the SSO User Profile.
     */
    Username?: string;

    /**
     * The First Name of the IAM User Profile.
     */
    FirstName?: string;

    /**
     * The Last Name of the IAM User Profile.
     */
    LastName?: string;
  };

  export type UserProfileDetailsType = {};

  /**
   * The status of the user profile.
   */
  export type UserProfileStatusType = {};

  /**
   * The type of the user profile.
   */
  export type UserProfileTypeType = {};

  /**
   * The type of the user.
   */
  export type UserTypeType = {};

  /**
   * A user profile represents Amazon DataZone users. Amazon DataZone supports both IAM roles and SSO identities to interact with the Amazon DataZone Management Console and the data portal for different purposes. Domain administrators use IAM roles to perform the initial administrative domain-related work in the Amazon DataZone Management Console, including creating new Amazon DataZone domains, configuring metadata form types, and implementing policies. Data workers use their SSO corporate identities via Identity Center to log into the Amazon DataZone Data Portal and access projects where they have memberships.
   */
  export type UserProfileResourceType = {
    /**
     * Read-only property
     */
    Details?: UserProfileDetailsType;

    /**
     * The identifier of the Amazon DataZone domain in which the user profile is created.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The identifier of the Amazon DataZone domain in which the user profile would be created.
     * Create-only property
     */
    DomainIdentifier: string;

    /**
     * The ID of the Amazon DataZone user profile.
     * Read-only property
     */
    Id?: string;

    Status?: UserProfileStatusType;

    /**
     * Read-only property
     */
    Type?: UserProfileTypeType;

    /**
     * The ID of the user.
     * Create-only property
     */
    UserIdentifier: string;

    /**
     * Create-only property
     */
    UserType?: UserTypeType;
  };
}
