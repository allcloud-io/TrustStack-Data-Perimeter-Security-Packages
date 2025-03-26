/**
 * TypeScript definitions for AWS::IoTSiteWise::Asset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTSiteWise::Asset
 */
export namespace AWS_IoTSiteWise_Asset {
  /**
   * The asset property's definition, alias, unit, and notification state.
   */
  export type AssetPropertyType = {
    /**
     * Customer provided actual UUID for property
     */
    Id?: string;

    /**
     * String-friendly customer provided external ID
     */
    ExternalId?: string;

    /**
     * Customer provided ID for property.
     */
    LogicalId?: string;

    /**
     * The property alias that identifies the property.
     */
    Alias?: string;

    /**
     * The MQTT notification state (ENABLED or DISABLED) for this asset property.
     */
    NotificationState?: string;

    /**
     * The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.
     */
    Unit?: string;
  };

  /**
   * A hierarchy specifies allowed parent/child asset relationships.
   */
  export type AssetHierarchyType = {
    /**
     * Customer provided actual UUID for property
     */
    Id?: string;

    /**
     * String-friendly customer provided external ID
     */
    ExternalId?: string;

    /**
     * The LogicalID of a hierarchy in the parent asset's model.
     */
    LogicalId?: string;

    /**
     * The ID of the child asset to be associated.
     */
    ChildAssetId: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::IoTSiteWise::Asset
   */
  export type AssetResourceType = {
    /**
     * The ID of the asset
     * Read-only property
     */
    AssetId?: string;

    /**
     * The External ID of the asset
     */
    AssetExternalId?: string;

    /**
     * The ID of the asset model from which to create the asset.
     */
    AssetModelId: string;

    /**
     * The ARN of the asset
     * Read-only property
     */
    AssetArn?: string;

    /**
     * A unique, friendly name for the asset.
     */
    AssetName: string;

    /**
     * A description for the asset
     */
    AssetDescription?: string;

    AssetProperties?: AssetPropertyType[];

    AssetHierarchies?: AssetHierarchyType[];

    /**
     * A list of key-value pairs that contain metadata for the asset.
     */
    Tags?: TagType[];
  };
}
