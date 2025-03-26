/**
 * TypeScript definitions for AWS::DataZone::GroupProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Group profiles represent groups of Amazon DataZone users. Groups can be manually created, or mapped to Active Directory groups of enterprise customers. In Amazon DataZone, groups serve two purposes. First, a group can map to a team of users in the organizational chart, and thus reduce the administrative work of a Amazon DataZone project owner when there are new employees joining or leaving a team. Second, corporate administrators use Active Directory groups to manage and update user statuses and so Amazon DataZone domain administrators can use these group memberships to implement Amazon DataZone domain policies.
 */
export namespace AWS_DataZone_GroupProfile {
  /**
   * The status of the group profile.
   */
  export type GroupProfileStatusType = {};

  /**
   * Group profiles represent groups of Amazon DataZone users. Groups can be manually created, or mapped to Active Directory groups of enterprise customers. In Amazon DataZone, groups serve two purposes. First, a group can map to a team of users in the organizational chart, and thus reduce the administrative work of a Amazon DataZone project owner when there are new employees joining or leaving a team. Second, corporate administrators use Active Directory groups to manage and update user statuses and so Amazon DataZone domain administrators can use these group memberships to implement Amazon DataZone domain policies.
   */
  export type GroupProfileResourceType = {
    /**
     * The identifier of the Amazon DataZone domain in which the group profile is created.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The identifier of the Amazon DataZone domain in which the group profile would be created.
     * Create-only property
     */
    DomainIdentifier: string;

    /**
     * The ID of the group.
     * Create-only property
     */
    GroupIdentifier: string;

    /**
     * The group-name of the Group Profile.
     * Read-only property
     */
    GroupName?: string;

    /**
     * The ID of the Amazon DataZone group profile.
     * Read-only property
     */
    Id?: string;

    Status?: GroupProfileStatusType;
  };
}
