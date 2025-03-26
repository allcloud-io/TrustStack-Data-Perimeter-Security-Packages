/**
 * TypeScript definitions for AWS::IoTWireless::WirelessDevice
 * Generated from CloudFormation Resource Schema
 */

/**
 * Create and manage wireless gateways, including LoRa gateways.
 */
export namespace AWS_IoTWireless_WirelessDevice {
  export type OtaaV10xType = {
    AppKey: string;

    AppEui: string;
  };

  export type OtaaV11Type = {
    AppKey: string;

    NwkKey: string;

    JoinEui: string;
  };

  export type SessionKeysAbpV11Type = {
    FNwkSIntKey: string;

    SNwkSIntKey: string;

    NwkSEncKey: string;

    AppSKey: string;
  };

  export type AbpV11Type = {
    DevAddr: string;

    SessionKeys: SessionKeysAbpV11Type;
  };

  export type SessionKeysAbpV10xType = {
    NwkSKey: string;

    AppSKey: string;
  };

  export type AbpV10xType = {
    DevAddr: string;

    SessionKeys: SessionKeysAbpV10xType;
  };

  export type FPortsType = {
    /**
     * A list of optional LoRaWAN application information, which can be used for geolocation.
     */
    Applications?: ApplicationType[];
  };

  export type LoRaWANDeviceType = {
    DevEui?: string;

    DeviceProfileId?: string;

    ServiceProfileId?: string;

    OtaaV11?: OtaaV11Type;

    OtaaV10x?: OtaaV10xType;

    AbpV11?: AbpV11Type;

    AbpV10x?: AbpV10xType;

    FPorts?: FPortsType;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * LoRaWAN application configuration, which can be used to perform geolocation.
   */
  export type ApplicationType = {
    /**
     * The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
     */
    DestinationName?: string;

    /**
     * The Fport value.
     */
    FPort?: number;

    /**
     * Application type, which can be specified to obtain real-time position information of your LoRaWAN device.
     */
    Type?: string;
  };

  /**
   * Create and manage wireless gateways, including LoRa gateways.
   */
  export type WirelessDeviceResourceType = {
    /**
     * Wireless device type, currently only Sidewalk and LoRa
     */
    Type: string;

    /**
     * Wireless device name
     */
    Name?: string;

    /**
     * Wireless device description
     */
    Description?: string;

    /**
     * Wireless device destination name
     */
    DestinationName: string;

    /**
     * The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.
     */
    LoRaWAN?: LoRaWANDeviceType;

    /**
     * A list of key-value pairs that contain metadata for the device. Currently not supported, will not create if tags are passed.
     */
    Tags?: TagType[];

    /**
     * Wireless device arn. Returned after successful create.
     * Read-only property
     */
    Arn?: string;

    /**
     * Wireless device Id. Returned after successful create.
     * Read-only property
     */
    Id?: string;

    /**
     * Thing arn. Passed into update to associate Thing with Wireless device.
     */
    ThingArn?: string;

    /**
     * Thing Arn. If there is a Thing created, this can be returned with a Get call.
     * Read-only property
     */
    ThingName?: string;

    /**
     * The date and time when the most recent uplink was received.
     */
    LastUplinkReceivedAt?: string;

    /**
     * FPort values for the GNSS, stream, and ClockSync functions of the positioning information.
     */
    Positioning?: string;
  };
}
