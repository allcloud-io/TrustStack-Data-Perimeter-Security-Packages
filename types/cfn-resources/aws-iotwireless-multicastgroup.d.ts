/**
 * TypeScript definitions for AWS::IoTWireless::MulticastGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Create and manage Multicast groups.
 */
export namespace AWS_IoTWireless_MulticastGroup {
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  export type LoRaWANType = {
    /**
     * Multicast group LoRaWAN RF region
     */
    RfRegion: string;

    /**
     * Multicast group LoRaWAN DL Class
     */
    DlClass: string;

    /**
     * Multicast group number of devices requested. Returned after successful read.
     */
    NumberOfDevicesRequested?: number;

    /**
     * Multicast group number of devices in group. Returned after successful read.
     */
    NumberOfDevicesInGroup?: number;
  };

  /**
   * Create and manage Multicast groups.
   */
  export type MulticastGroupResourceType = {
    /**
     * Name of Multicast group
     */
    Name?: string;

    /**
     * Multicast group description
     */
    Description?: string;

    /**
     * Multicast group LoRaWAN
     */
    LoRaWAN: LoRaWANType;

    /**
     * Multicast group arn. Returned after successful create.
     * Read-only property
     */
    Arn?: string;

    /**
     * Multicast group id. Returned after successful create.
     * Read-only property
     */
    Id?: string;

    /**
     * A list of key-value pairs that contain metadata for the Multicast group.
     */
    Tags?: TagType[];

    /**
     * Multicast group status. Returned after successful read.
     * Read-only property
     */
    Status?: string;

    /**
     * Wireless device to associate. Only for update request.
     */
    AssociateWirelessDevice?: string;

    /**
     * Wireless device to disassociate. Only for update request.
     */
    DisassociateWirelessDevice?: string;
  };
}
