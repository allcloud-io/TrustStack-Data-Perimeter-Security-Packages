/**
 * TypeScript definitions for AWS::GuardDuty::ThreatIntelSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GuardDuty::ThreatIntelSet
 */
export namespace AWS_GuardDuty_ThreatIntelSet {
  export type TagItemType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::GuardDuty::ThreatIntelSet
   */
  export type ThreatIntelSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Format: string;

    Activate?: boolean;

    /**
     * Create-only property
     */
    DetectorId?: string;

    Name?: string;

    Location: string;

    Tags?: TagItemType[];
  };
}
