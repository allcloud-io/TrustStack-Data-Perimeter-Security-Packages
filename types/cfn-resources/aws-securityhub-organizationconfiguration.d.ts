/**
 * TypeScript definitions for AWS::SecurityHub::OrganizationConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::SecurityHub::OrganizationConfiguration resource represents the configuration of your organization in Security Hub. Only the Security Hub administrator account can create Organization Configuration resource in each region and can opt-in to Central Configuration only in the aggregation region of FindingAggregator.
 */
export namespace AWS_SecurityHub_OrganizationConfiguration {
  /**
   * The AWS::SecurityHub::OrganizationConfiguration resource represents the configuration of your organization in Security Hub. Only the Security Hub administrator account can create Organization Configuration resource in each region and can opt-in to Central Configuration only in the aggregation region of FindingAggregator.
   */
  export type OrganizationConfigurationResourceType = {
    /**
     * Whether to automatically enable Security Hub in new member accounts when they join the organization.
     */
    AutoEnable: boolean;

    /**
     * Whether to automatically enable Security Hub default standards in new member accounts when they join the organization.
     */
    AutoEnableStandards?: string;

    /**
     * Indicates whether the organization uses local or central configuration.
     */
    ConfigurationType?: string;

    /**
     * Describes whether central configuration could be enabled as the ConfigurationType for the organization.
     * Read-only property
     */
    Status?: string;

    /**
     * Provides an explanation if the value of Status is equal to FAILED when ConfigurationType is equal to CENTRAL.
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * Whether the maximum number of allowed member accounts are already associated with the Security Hub administrator account.
     * Read-only property
     */
    MemberAccountLimitReached?: boolean;

    /**
     * The identifier of the OrganizationConfiguration being created and assigned as the unique identifier.
     * Read-only property
     */
    OrganizationConfigurationIdentifier?: string;
  };
}
