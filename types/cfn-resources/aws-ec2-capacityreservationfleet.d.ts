/**
 * TypeScript definitions for AWS::EC2::CapacityReservationFleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::CapacityReservationFleet
 */
export namespace AWS_EC2_CapacityReservationFleet {
  export type InstanceTypeSpecificationType = {
    InstanceType?: string;

    InstancePlatform?: string;

    Weight?: number;

    AvailabilityZone?: string;

    AvailabilityZoneId?: string;

    EbsOptimized?: boolean;

    Priority?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type TagSpecificationType = {
    ResourceType?: string;

    Tags?: TagType[];
  };

  /**
   * Resource Type definition for AWS::EC2::CapacityReservationFleet
   */
  export type CapacityReservationFleetResourceType = {
    /**
     * Create-only property
     */
    AllocationStrategy?: string;

    /**
     * Create-only property
     */
    TagSpecifications?: TagSpecificationType[];

    /**
     * Create-only property
     */
    InstanceTypeSpecifications?: InstanceTypeSpecificationType[];

    TotalTargetCapacity?: number;

    /**
     * Create-only property
     */
    EndDate?: string;

    /**
     * Create-only property
     */
    InstanceMatchCriteria?: string;

    /**
     * Read-only property
     */
    CapacityReservationFleetId?: string;

    /**
     * Create-only property
     */
    Tenancy?: string;

    RemoveEndDate?: boolean;

    NoRemoveEndDate?: boolean;
  };
}
