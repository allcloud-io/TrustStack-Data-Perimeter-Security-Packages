/**
 * TypeScript definitions for AWS::GuardDuty::IPSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GuardDuty::IPSet
 */
export namespace AWS_GuardDuty_IPSet {
  export type TagItemType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::GuardDuty::IPSet
   */
  export type IPSetResourceType = {
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
