/**
 * TypeScript definitions for AWS::Athena::CapacityReservation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Athena::CapacityReservation
 */
export namespace AWS_Athena_CapacityReservation {
  /**
   * The Amazon Resource Name (ARN) of the specified capacity reservation
   */
  export type ArnType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type WorkgroupNameType = {};

  export type WorkgroupNamesType = {};

  export type CapacityAssignmentType = {
    WorkgroupNames: WorkgroupNamesType;
  };

  /**
   * List of capacity assignments
   */
  export type CapacityAssignmentsType = {};

  /**
   * Assignment configuration to assign workgroups to a reservation
   */
  export type CapacityAssignmentConfigurationType = {
    CapacityAssignments: CapacityAssignmentsType;
  };

  export type CapacityReservationStatusType = {};

  /**
   * Resource schema for AWS::Athena::CapacityReservation
   */
  export type CapacityReservationResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The reservation name.
     * Create-only property
     */
    Name: string;

    /**
     * The status of the reservation.
     * Read-only property
     */
    Status?: CapacityReservationStatusType;

    /**
     * The number of DPUs to request to be allocated to the reservation.
     */
    TargetDpus: number;

    /**
     * The number of DPUs Athena has provisioned and allocated for the reservation
     * Read-only property
     */
    AllocatedDpus?: number;

    CapacityAssignmentConfiguration?: CapacityAssignmentConfigurationType;

    /**
     * The date and time the reservation was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The timestamp when the last successful allocated was made
     * Read-only property
     */
    LastSuccessfulAllocationTime?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
