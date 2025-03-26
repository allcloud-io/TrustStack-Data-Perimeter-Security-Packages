/**
 * TypeScript definitions for AWS::Panorama::ApplicationInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates an application instance and deploys it to a device.
 */
export namespace AWS_Panorama_ApplicationInstance {
  export type DefaultRuntimeContextDeviceType = {};

  export type DescriptionType = {};

  export type DeviceIdType = {};

  export type ApplicationInstanceStatusType = {};

  /**
   * Parameter overrides for an application instance. This is a JSON document that has a single key (`PayloadData`) where the value is an escaped string representation of the overrides document.
   */
  export type ManifestOverridesPayloadType = {
    /**
     * The overrides document.
     */
    PayloadData?: ManifestOverridesPayloadDataType;
  };

  export type RuntimeRoleArnType = {};

  export type TimestampType = {};

  export type NameType = {};

  export type ApplicationInstanceIdType = {};

  export type ManifestPayloadDataType = {};

  export type ApplicationInstanceHealthStatusType = {};

  export type StatusFilterType = {};

  /**
   * List of tags
   */
  export type TagListType = {};

  /**
   * A application verion's manifest file. This is a JSON document that has a single key (`PayloadData`) where the value is an escaped string representation of the application manifest (`graph.json`). This file is located in the `graphs` folder in your application source.
   */
  export type ManifestPayloadType = {
    /**
     * The application manifest.
     */
    PayloadData?: ManifestPayloadDataType;
  };

  export type ApplicationInstanceArnType = {};

  export type ManifestOverridesPayloadDataType = {};

  export type ApplicationInstanceStatusDescriptionType = {};

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type DeviceNameType = {};

  /**
   * Creates an application instance and deploys it to a device.
   */
  export type ApplicationInstanceResourceType = {
    /**
     * Read-only property
     */
    DefaultRuntimeContextDeviceName?: DeviceNameType;

    /**
     * Read-only property
     */
    Status?: ApplicationInstanceStatusType;

    /**
     * The device's ID.
     * Create-only property
     */
    DefaultRuntimeContextDevice: DefaultRuntimeContextDeviceType;

    /**
     * A description for the application instance.
     * Create-only property
     */
    Description?: DescriptionType;

    /**
     * The ID of an application instance to replace with the new instance.
     * Create-only property
     */
    ApplicationInstanceIdToReplace?: ApplicationInstanceIdType;

    /**
     * Read-only property
     */
    CreatedTime?: TimestampType;

    /**
     * Read-only property
     */
    HealthStatus?: ApplicationInstanceHealthStatusType;

    /**
     * Setting overrides for the application manifest.
     * Create-only property
     */
    ManifestOverridesPayload?: ManifestOverridesPayloadType;

    /**
     * Read-only property
     */
    LastUpdatedTime?: TimestampType;

    /**
     * The ARN of a runtime role for the application instance.
     * Create-only property
     */
    RuntimeRoleArn?: RuntimeRoleArnType;

    /**
     * A name for the application instance.
     * Create-only property
     */
    Name?: NameType;

    /**
     * Read-only property
     */
    ApplicationInstanceId?: ApplicationInstanceIdType;

    /**
     * Read-only property
     */
    StatusDescription?: ApplicationInstanceStatusDescriptionType;

    /**
     * The application's manifest document.
     * Create-only property
     */
    ManifestPayload: ManifestPayloadType;

    /**
     * Read-only property
     */
    Arn?: ApplicationInstanceArnType;

    /**
     * Tags for the application instance.
     */
    Tags?: TagListType;
  };
}
