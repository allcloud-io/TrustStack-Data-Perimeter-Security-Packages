/**
 * TypeScript definitions for AWS::DataZone::ProjectMembership
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::DataZone::ProjectMembership Resource Type
 */
export namespace AWS_DataZone_ProjectMembership {
  export type UserDesignationType = {};

  export type MemberIdentifierTypeType = {};

  export type MemberType = {};

  /**
   * Definition of AWS::DataZone::ProjectMembership Resource Type
   */
  export type ProjectMembershipResourceType = {
    /**
     * Create-only property
     */
    ProjectIdentifier: string;

    Designation: UserDesignationType;

    /**
     * Create-only property
     */
    Member: MemberType;

    /**
     * Create-only property
     */
    DomainIdentifier: string;
  };
}
