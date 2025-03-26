/**
 * TypeScript definitions for AWS::Backup::RestoreTestingSelection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Backup::RestoreTestingSelection
 */
export namespace AWS_Backup_RestoreTestingSelection {
  export type KeyValueType = {
    Key: string;

    Value: string;
  };

  export type ProtectedResourceConditionsType = {
    StringEquals?: KeyValueType[];

    StringNotEquals?: KeyValueType[];
  };

  export type SensitiveStringMapType = {};

  /**
   * Resource Type definition for AWS::Backup::RestoreTestingSelection
   */
  export type RestoreTestingSelectionResourceType = {
    IamRoleArn: string;

    ProtectedResourceArns?: string[];

    ProtectedResourceConditions?: ProtectedResourceConditionsType;

    /**
     * Create-only property
     */
    ProtectedResourceType: string;

    RestoreMetadataOverrides?: SensitiveStringMapType;

    /**
     * Create-only property
     */
    RestoreTestingPlanName: string;

    /**
     * Create-only property
     */
    RestoreTestingSelectionName: string;

    ValidationWindowHours?: number;
  };
}
