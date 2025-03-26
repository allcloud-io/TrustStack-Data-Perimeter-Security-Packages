/**
 * TypeScript definitions for AWS::SSM::MaintenanceWindowTarget
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTarget
 */
export namespace AWS_SSM_MaintenanceWindowTarget {
  export type TargetsType = {
    Values: string[];

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SSM::MaintenanceWindowTarget
   */
  export type MaintenanceWindowTargetResourceType = {
    OwnerInformation?: string;

    Description?: string;

    /**
     * Create-only property
     */
    WindowId: string;

    ResourceType: string;

    Targets: TargetsType[];

    /**
     * Read-only property
     */
    Id?: string;

    Name?: string;
  };
}
