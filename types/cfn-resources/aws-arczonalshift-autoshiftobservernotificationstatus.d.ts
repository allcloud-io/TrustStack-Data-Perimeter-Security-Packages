/**
 * TypeScript definitions for AWS::ARCZonalShift::AutoshiftObserverNotificationStatus
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ARCZonalShift::AutoshiftObserverNotificationStatus Resource Type
 */
export namespace AWS_ARCZonalShift_AutoshiftObserverNotificationStatus {
  /**
   * User account id, used as part of the primary identifier for the resource
   */
  export type AccountIdType = {};

  /**
   * Region, used as part of the primary identifier for the resource
   */
  export type RegionType = {};

  export type AutoshiftObserverNotificationStatusType = {};

  /**
   * Definition of AWS::ARCZonalShift::AutoshiftObserverNotificationStatus Resource Type
   */
  export type AutoshiftObserverNotificationStatusResourceType = {
    /**
     * Create-only property
     */
    Status: AutoshiftObserverNotificationStatusType;

    /**
     * Read-only property
     */
    AccountId?: AccountIdType;

    /**
     * Read-only property
     */
    Region?: RegionType;
  };
}
