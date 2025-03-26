/**
 * TypeScript definitions for AWS::IoTSiteWise::Gateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTSiteWise::Gateway
 */
export namespace AWS_IoTSiteWise_Gateway {
  /**
   * Contains a gateway's platform information.
   */
  export type GatewayPlatformType = {
    /**
     * A gateway that runs on AWS IoT Greengrass V2.
     */
    GreengrassV2?: GreengrassV2Type;

    /**
     * A gateway that runs on Siemens Industrial Edge.
     */
    SiemensIE?: SiemensIEType;
  };

  /**
   * Contains the CoreDeviceThingName of AWS IoT Greengrass Group V2 that the gateway runs on.
   */
  export type GreengrassV2Type = {
    /**
     * The name of the CoreDevice in GreenGrass V2.
     */
    CoreDeviceThingName: string;

    /**
     * The operating system of the core device in AWS IoT Greengrass V2.
     */
    CoreDeviceOperatingSystem?: string;
  };

  /**
   * Contains the IotCoreThingName of AWS IoT Thing that the gateway runs on.
   */
  export type SiemensIEType = {
    /**
     * The name of the IoT Core Thing.
     */
    IotCoreThingName: string;
  };

  /**
   * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The version of the gateway you want to create.
   */
  export type GatewayVersionType = {};

  /**
   * The namespace of the capability configuration.
   */
  export type CapabilityNamespaceType = {};

  /**
   * The JSON document that defines the gateway capability's configuration.
   */
  export type CapabilityConfigurationType = {};

  /**
   * Contains a summary of a gateway capability configuration.
   */
  export type GatewayCapabilitySummaryType = {
    CapabilityNamespace: CapabilityNamespaceType;

    CapabilityConfiguration?: CapabilityConfigurationType;
  };

  /**
   * Resource schema for AWS::IoTSiteWise::Gateway
   */
  export type GatewayResourceType = {
    /**
     * A unique, friendly name for the gateway.
     */
    GatewayName: string;

    /**
     * The gateway's platform. You can only specify one platform in a gateway.
     * Create-only property
     */
    GatewayPlatform: GatewayPlatformType;

    /**
     * The version of the gateway you want to create.
     * Create-only property
     */
    GatewayVersion?: string;

    /**
     * A list of key-value pairs that contain metadata for the gateway.
     */
    Tags?: TagType[];

    /**
     * The ID of the gateway device.
     * Read-only property
     */
    GatewayId?: string;

    /**
     * A list of gateway capability summaries that each contain a namespace and status.
     */
    GatewayCapabilitySummaries?: GatewayCapabilitySummaryType[];
  };
}
