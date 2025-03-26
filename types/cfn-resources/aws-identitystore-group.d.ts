/**
 * TypeScript definitions for AWS::IdentityStore::Group
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IdentityStore::Group
 */
export namespace AWS_IdentityStore_Group {
  /**
   * Resource Type definition for AWS::IdentityStore::Group
   */
  export type GroupResourceType = {
    /**
     * A string containing the description of the group.
     */
    Description?: string;

    /**
     * A string containing the name of the group. This value is commonly displayed when the group is referenced.
     */
    DisplayName: string;

    /**
     * The unique identifier for a group in the identity store.
     * Read-only property
     */
    GroupId?: string;

    /**
     * The globally unique identifier for the identity store.
     * Create-only property
     */
    IdentityStoreId: string;
  };
}
