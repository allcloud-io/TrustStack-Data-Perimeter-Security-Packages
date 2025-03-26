/**
 * TypeScript definitions for AWS::SageMaker::Device
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::SageMaker::Device
 */
export namespace AWS_SageMaker_Device {
  /**
   * Edge device you want to create
   */
  export type DeviceType = {
    /**
     * Description of the device
     */
    Description?: string;

    /**
     * The name of the device
     */
    DeviceName: string;

    /**
     * AWS Internet of Things (IoT) object name.
     */
    IotThingName?: string;
  };

  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::SageMaker::Device
   */
  export type DeviceResourceType = {
    /**
     * The name of the edge device fleet
     */
    DeviceFleetName: string;

    /**
     * The Edge Device you want to register against a device fleet
     */
    Device?: DeviceType;

    /**
     * Associate tags with the resource
     */
    Tags?: TagType[];
  };
}
