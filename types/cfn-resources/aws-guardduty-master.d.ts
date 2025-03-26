/**
 * TypeScript definitions for AWS::GuardDuty::Master
 * Generated from CloudFormation Resource Schema
 */

/**
 * GuardDuty Master resource schema
 */
export namespace AWS_GuardDuty_Master {
  /**
   * GuardDuty Master resource schema
   */
  export type MasterResourceType = {
    /**
     * ID of the account used as the master account.
     * Create-only property
     */
    MasterId: string;

    /**
     * Value used to validate the master account to the member account.
     * Create-only property
     */
    InvitationId?: string;

    /**
     * Unique ID of the detector of the GuardDuty member account.
     * Create-only property
     */
    DetectorId: string;
  };
}
