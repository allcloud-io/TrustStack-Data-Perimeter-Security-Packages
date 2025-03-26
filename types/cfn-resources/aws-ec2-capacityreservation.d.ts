/**
 * TypeScript definitions for AWS::EC2::CapacityReservation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::CapacityReservation
 */
export namespace AWS_EC2_CapacityReservation {
  export type TagType = {
    Value: string;

    Key: string;
  };

  export type TagSpecificationType = {
    ResourceType?: string;

    Tags?: TagType[];
  };

  /**
   * Resource Type definition for AWS::EC2::CapacityReservation
   */
  export type CapacityReservationResourceType = {
    /**
     * Create-only property
     */
    Tenancy?: string;

    EndDateType?: string;

    /**
     * Create-only property
     */
    TagSpecifications?: TagSpecificationType[];

    /**
     * Create-only property
     */
    AvailabilityZone?: string;

    /**
     * Read-only property
     */
    TotalInstanceCount?: number;

    EndDate?: string;

    /**
     * Create-only property
     */
    EbsOptimized?: boolean;

    /**
     * Create-only property
     */
    OutPostArn?: string;

    InstanceCount: number;

    /**
     * Create-only property
     */
    PlacementGroupArn?: string;

    /**
     * Read-only property
     */
    AvailableInstanceCount?: number;

    /**
     * Create-only property
     */
    InstancePlatform: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    InstanceType: string;

    /**
     * Create-only property
     */
    EphemeralStorage?: boolean;

    InstanceMatchCriteria?: string;

    UnusedReservationBillingOwnerId?: string;

    /**
     * Create-only property
     */
    AvailabilityZoneId?: string;
  };
}
