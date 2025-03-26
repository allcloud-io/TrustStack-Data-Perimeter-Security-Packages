/**
 * TypeScript definitions for AWS::IoTWireless::FuotaTask
 * Generated from CloudFormation Resource Schema
 */

/**
 * Create and manage FUOTA tasks.
 */
export namespace AWS_IoTWireless_FuotaTask {
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  export type LoRaWANType = {
    /**
     * FUOTA task LoRaWAN start time
     */
    StartTime?: string;

    /**
     * FUOTA task LoRaWAN RF region
     */
    RfRegion: string;
  };

  /**
   * Create and manage FUOTA tasks.
   */
  export type FuotaTaskResourceType = {
    /**
     * Name of FUOTA task
     */
    Name?: string;

    /**
     * FUOTA task description
     */
    Description?: string;

    /**
     * FUOTA task LoRaWAN
     */
    LoRaWAN: LoRaWANType;

    /**
     * FUOTA task firmware update image binary S3 link
     */
    FirmwareUpdateImage: string;

    /**
     * FUOTA task firmware IAM role for reading S3
     */
    FirmwareUpdateRole: string;

    /**
     * FUOTA task arn. Returned after successful create.
     * Read-only property
     */
    Arn?: string;

    /**
     * FUOTA task id. Returned after successful create.
     * Read-only property
     */
    Id?: string;

    /**
     * A list of key-value pairs that contain metadata for the FUOTA task.
     */
    Tags?: TagType[];

    /**
     * FUOTA task status. Returned after successful read.
     * Read-only property
     */
    FuotaTaskStatus?: string;

    /**
     * Wireless device to associate. Only for update request.
     */
    AssociateWirelessDevice?: string;

    /**
     * Wireless device to disassociate. Only for update request.
     */
    DisassociateWirelessDevice?: string;

    /**
     * Multicast group to associate. Only for update request.
     */
    AssociateMulticastGroup?: string;

    /**
     * Multicast group to disassociate. Only for update request.
     */
    DisassociateMulticastGroup?: string;
  };
}
