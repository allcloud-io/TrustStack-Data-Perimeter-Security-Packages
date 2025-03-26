/**
 * TypeScript definitions for AWS::IoTWireless::WirelessGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Create and manage wireless gateways, including LoRa gateways.
 */
export namespace AWS_IoTWireless_WirelessGateway {
  export type LoRaWANGatewayType = {
    GatewayEui: string;

    RfRegion: string;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Create and manage wireless gateways, including LoRa gateways.
   */
  export type WirelessGatewayResourceType = {
    /**
     * Name of Wireless Gateway.
     */
    Name?: string;

    /**
     * Description of Wireless Gateway.
     */
    Description?: string;

    /**
     * A list of key-value pairs that contain metadata for the gateway.
     */
    Tags?: TagType[];

    /**
     * The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.
     */
    LoRaWAN: LoRaWANGatewayType;

    /**
     * Arn for Wireless Gateway. Returned upon successful create.
     * Read-only property
     */
    Arn?: string;

    /**
     * Id for Wireless Gateway. Returned upon successful create.
     * Read-only property
     */
    Id?: string;

    /**
     * Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
     */
    ThingArn?: string;

    /**
     * Thing Name. If there is a Thing created, this can be returned with a Get call.
     */
    ThingName?: string;

    /**
     * The date and time when the most recent uplink was received.
     */
    LastUplinkReceivedAt?: string;
  };
}
