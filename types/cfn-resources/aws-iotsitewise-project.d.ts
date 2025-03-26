/**
 * TypeScript definitions for AWS::IoTSiteWise::Project
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTSiteWise::Project
 */
export namespace AWS_IoTSiteWise_Project {
  /**
   * The ID of the asset
   */
  export type AssetIdType = {};

  /**
   * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::IoTSiteWise::Project
   */
  export type ProjectResourceType = {
    /**
     * The ID of the portal in which to create the project.
     * Create-only property
     */
    PortalId: string;

    /**
     * The ID of the project.
     * Read-only property
     */
    ProjectId?: string;

    /**
     * A friendly name for the project.
     */
    ProjectName: string;

    /**
     * A description for the project.
     */
    ProjectDescription?: string;

    /**
     * The ARN of the project.
     * Read-only property
     */
    ProjectArn?: string;

    /**
     * The IDs of the assets to be associated to the project.
     */
    AssetIds?: AssetIdType[];

    /**
     * A list of key-value pairs that contain metadata for the project.
     */
    Tags?: TagType[];
  };
}
