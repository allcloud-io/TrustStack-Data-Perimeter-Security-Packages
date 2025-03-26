/**
 * TypeScript definitions for AWS::IdentityStore::GroupMembership
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS:IdentityStore::GroupMembership
 */
export namespace AWS_IdentityStore_GroupMembership {
  /**
   * An object containing the identifier of a group member.
   */
  export type MemberIdType = {
    /**
     * The identifier for a user in the identity store.
     */
    UserId: string;
  };

  /**
   * Resource Type Definition for AWS:IdentityStore::GroupMembership
   */
  export type GroupMembershipResourceType = {
    /**
     * The unique identifier for a group in the identity store.
     * Create-only property
     */
    GroupId: string;

    /**
     * The globally unique identifier for the identity store.
     * Create-only property
     */
    IdentityStoreId: string;

    /**
     * An object containing the identifier of a group member.
     * Create-only property
     */
    MemberId: MemberIdType;

    /**
     * The identifier for a GroupMembership in the identity store.
     * Read-only property
     */
    MembershipId?: string;
  };
}
