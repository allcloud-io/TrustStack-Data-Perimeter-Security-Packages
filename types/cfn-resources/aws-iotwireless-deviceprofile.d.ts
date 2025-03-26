/**
 * TypeScript definitions for AWS::IoTWireless::DeviceProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Device Profile's resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_IoTWireless_DeviceProfile {
  export type LoRaWANDeviceProfileType = {
    SupportsClassB?: boolean;

    ClassBTimeout?: number;

    PingSlotPeriod?: number;

    PingSlotDr?: number;

    PingSlotFreq?: number;

    SupportsClassC?: boolean;

    ClassCTimeout?: number;

    MacVersion?: string;

    RegParamsRevision?: string;

    RxDelay1?: number;

    RxDrOffset1?: number;

    RxFreq2?: number;

    RxDataRate2?: number;

    FactoryPresetFreqsList?: FactoryPresetFreqType[];

    MaxEirp?: number;

    MaxDutyCycle?: number;

    SupportsJoin?: boolean;

    RfRegion?: string;

    Supports32BitFCnt?: boolean;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  export type FactoryPresetFreqType = {};

  /**
   * Device Profile's resource schema demonstrating some basic constructs and validation rules.
   */
  export type DeviceProfileResourceType = {
    /**
     * Name of service profile
     * Create-only property
     */
    Name?: string;

    /**
     * LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation
     * Create-only property
     */
    LoRaWAN?: LoRaWANDeviceProfileType;

    /**
     * A list of key-value pairs that contain metadata for the device profile.
     */
    Tags?: TagType[];

    /**
     * Service profile Arn. Returned after successful create.
     * Read-only property
     */
    Arn?: string;

    /**
     * Service profile Id. Returned after successful create.
     * Read-only property
     */
    Id?: string;
  };
}
