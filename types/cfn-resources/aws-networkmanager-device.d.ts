/**
 * TypeScript definitions for AWS::NetworkManager::Device
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::NetworkManager::Device type describes a device.
 */
export namespace AWS_NetworkManager_Device {
  /**
   * A key-value pair to associate with a device resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * The site location.
   */
  export type LocationType = {
    /**
     * The physical address.
     */
    Address?: string;

    /**
     * The latitude.
     */
    Latitude?: string;

    /**
     * The longitude.
     */
    Longitude?: string;
  };

  /**
   * The Amazon Web Services location of the device, if applicable.
   */
  export type AWSLocationType = {
    /**
     * The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.
     */
    Zone?: string;

    /**
     * The Amazon Resource Name (ARN) of the subnet that the device is located in.
     */
    SubnetArn?: string;
  };

  /**
   * The AWS::NetworkManager::Device type describes a device.
   */
  export type DeviceResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the device.
     * Read-only property
     */
    DeviceArn?: string;

    /**
     * The ID of the device.
     * Read-only property
     */
    DeviceId?: string;

    /**
     * The description of the device.
     */
    Description?: string;

    /**
     * The tags for the device.
     */
    Tags?: TagType[];

    /**
     * The ID of the global network.
     * Create-only property
     */
    GlobalNetworkId: string;

    /**
     * The Amazon Web Services location of the device, if applicable.
     */
    AWSLocation?: AWSLocationType;

    /**
     * The site location.
     */
    Location?: LocationType;

    /**
     * The device model
     */
    Model?: string;

    /**
     * The device serial number.
     */
    SerialNumber?: string;

    /**
     * The site ID.
     */
    SiteId?: string;

    /**
     * The device type.
     */
    Type?: string;

    /**
     * The device vendor.
     */
    Vendor?: string;

    /**
     * The date and time that the device was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The state of the device.
     * Read-only property
     */
    State?: string;
  };
}
