/**
 * TypeScript definitions for AWS::QuickSight::CustomPermissions
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::CustomPermissions Resource Type.
 */
export namespace AWS_QuickSight_CustomPermissions {
  export type CapabilitiesType = {
    ExportToCsv?: CapabilityStateType;

    ExportToExcel?: CapabilityStateType;

    CreateAndUpdateThemes?: CapabilityStateType;

    AddOrRunAnomalyDetectionForAnalyses?: CapabilityStateType;

    ShareAnalyses?: CapabilityStateType;

    CreateAndUpdateDatasets?: CapabilityStateType;

    ShareDatasets?: CapabilityStateType;

    SubscribeDashboardEmailReports?: CapabilityStateType;

    CreateAndUpdateDashboardEmailReports?: CapabilityStateType;

    ShareDashboards?: CapabilityStateType;

    CreateAndUpdateThresholdAlerts?: CapabilityStateType;

    RenameSharedFolders?: CapabilityStateType;

    CreateSharedFolders?: CapabilityStateType;

    CreateAndUpdateDataSources?: CapabilityStateType;

    ShareDataSources?: CapabilityStateType;

    ViewAccountSPICECapacity?: CapabilityStateType;

    CreateSPICEDataset?: CapabilityStateType;
  };

  export type CapabilityStateType = {};

  /**
   * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
   * resource.</p>
   */
  export type TagType = {
    /**
     * <p>Tag key.</p>
     */
    Key: string;

    /**
     * <p>Tag value.</p>
     */
    Value: string;
  };

  /**
   * Definition of the AWS::QuickSight::CustomPermissions Resource Type.
   */
  export type CustomPermissionsResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AwsAccountId: string;

    Capabilities?: CapabilitiesType;

    /**
     * Create-only property
     */
    CustomPermissionsName: string;

    Tags?: TagType[];
  };
}
