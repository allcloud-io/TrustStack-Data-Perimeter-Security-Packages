/**
 * TypeScript definitions for AWS::IoTWireless::ServiceProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_IoTWireless_ServiceProfile {
  export type LoRaWANServiceProfileType = {
    UlRate?: number;

    UlBucketSize?: number;

    UlRatePolicy?: string;

    DlRate?: number;

    DlBucketSize?: number;

    DlRatePolicy?: string;

    AddGwMetadata?: boolean;

    DevStatusReqFreq?: number;

    ReportDevStatusBattery?: boolean;

    ReportDevStatusMargin?: boolean;

    DrMin?: number;

    DrMax?: number;

    ChannelMask?: string;

    PrAllowed?: boolean;

    HrAllowed?: boolean;

    RaAllowed?: boolean;

    NwkGeoLoc?: boolean;

    TargetPer?: number;

    MinGwDiversity?: number;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type ServiceProfileResourceType = {
    /**
     * Name of service profile
     * Create-only property
     */
    Name?: string;

    /**
     * LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation
     * Create-only property
     */
    LoRaWAN?: LoRaWANServiceProfileType;

    /**
     * A list of key-value pairs that contain metadata for the service profile.
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
