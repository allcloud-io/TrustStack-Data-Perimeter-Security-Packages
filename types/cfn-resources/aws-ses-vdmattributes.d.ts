/**
 * TypeScript definitions for AWS::SES::VdmAttributes
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SES::VdmAttributes
 */
export namespace AWS_SES_VdmAttributes {
  /**
   * Preferences regarding the Dashboard feature.
   */
  export type DashboardAttributesType = {
    /**
     * Whether emails sent from this account have engagement tracking enabled.
     */
    EngagementMetrics?: string;
  };

  /**
   * Preferences regarding the Guardian feature.
   */
  export type GuardianAttributesType = {
    /**
     * Whether emails sent from this account have optimized delivery algorithm enabled.
     */
    OptimizedSharedDelivery?: string;
  };

  /**
   * Resource Type definition for AWS::SES::VdmAttributes
   */
  export type VdmAttributesResourceType = {
    /**
     * Unique identifier for this resource
     * Read-only property
     */
    VdmAttributesResourceId?: string;

    DashboardAttributes?: DashboardAttributesType;

    GuardianAttributes?: GuardianAttributesType;
  };
}
